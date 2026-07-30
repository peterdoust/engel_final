import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import clientPromise from '@/lib/mongodb'
import { SEO_COLLECTION, SEO_DB_NAME, getAllSeoMeta } from '@/lib/seo'
import { SEO_PAGES, getSeoPage } from '@/lib/seoPages'

export const dynamic = 'force-dynamic'

/** Mirrors the admin auth used by the other admin endpoints (see api/publication-requests). */
async function authorize(request: NextRequest) {
  const token = request.headers.get('x-admin-key')
  if (!token || !process.env.MONGODB_URI) return null

  const client = await clientPromise
  // Named explicitly to match api/raffle/login, which writes the sessionToken into
  // this database. Relying on the URI's default db would silently 401 if they differ.
  const db = client.db(SEO_DB_NAME)
  const admin = await db.collection('raffle_admin').findOne({ sessionToken: token })
  if (!admin) return null

  return { db, admin }
}

const updateSchema = z.object({
  path: z.string().min(1),
  title: z.string().max(200).optional().default(''),
  description: z.string().max(400).optional().default(''),
})

export async function GET(request: NextRequest) {
  try {
    const auth = await authorize(request)
    if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const resolved = await getAllSeoMeta(SEO_PAGES)
    const byPath = new Map(resolved.map(r => [r.path, r]))

    const pages = SEO_PAGES.map(page => {
      const r = byPath.get(page.path)!
      return {
        type: page.type,
        path: page.path,
        label: page.label,
        defaultTitle: page.defaultTitle,
        defaultDescription: page.defaultDescription,
        title: r.title,
        description: r.description,
        isTitleOverridden: r.titleSource === 'db',
        isDescriptionOverridden: r.descriptionSource === 'db',
      }
    })

    return NextResponse.json({ success: true, pages, total: pages.length })
  } catch (error) {
    console.error('Error fetching SEO settings:', error)
    return NextResponse.json({ error: 'Failed to fetch SEO settings' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const auth = await authorize(request)
    if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const parsed = updateSchema.safeParse(await request.json())
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid payload', details: parsed.error.flatten() }, { status: 400 })
    }

    const { path } = parsed.data
    const page = getSeoPage(path)
    if (!page) {
      return NextResponse.json({ error: `Unknown page: ${path}` }, { status: 400 })
    }

    const title = parsed.data.title.trim()
    const description = parsed.data.description.trim()

    const collection = auth.db.collection(SEO_COLLECTION)
    await collection.createIndex({ path: 1 }, { unique: true })

    if (!title && !description) {
      // Both fields cleared — drop the override entirely so the defaults apply again.
      await collection.deleteOne({ path })
    } else {
      await collection.updateOne(
        { path },
        {
          $set: {
            path,
            type: page.type,
            title,
            description,
            updatedAt: new Date(),
            updatedBy: auth.admin.username || auth.admin.email || 'admin',
          },
        },
        { upsert: true }
      )
    }

    // Without this the edit would not surface on the live page until the next deploy.
    revalidatePath(path)
    revalidatePath(path, 'layout')

    return NextResponse.json({
      success: true,
      path,
      title: title || page.defaultTitle,
      description: description || page.defaultDescription,
      isTitleOverridden: Boolean(title),
      isDescriptionOverridden: Boolean(description),
    })
  } catch (error) {
    console.error('Error saving SEO settings:', error)
    return NextResponse.json({ error: 'Failed to save SEO settings' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const auth = await authorize(request)
    if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const path = request.nextUrl.searchParams.get('path')
    if (!path || !getSeoPage(path)) {
      return NextResponse.json({ error: 'Unknown page' }, { status: 400 })
    }

    await auth.db.collection(SEO_COLLECTION).deleteOne({ path })
    revalidatePath(path)
    revalidatePath(path, 'layout')

    return NextResponse.json({ success: true, path })
  } catch (error) {
    console.error('Error resetting SEO settings:', error)
    return NextResponse.json({ error: 'Failed to reset SEO settings' }, { status: 500 })
  }
}
