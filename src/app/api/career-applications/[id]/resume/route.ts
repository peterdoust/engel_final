import { NextRequest, NextResponse } from 'next/server'
import { ObjectId } from 'mongodb'
import clientPromise from '@/lib/mongodb'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const token = request.nextUrl.searchParams.get('key') || request.headers.get('x-admin-key')
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!ObjectId.isValid(params.id)) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 })
  }

  try {
    const client = await clientPromise
    const db = client.db()

    const admin = await db.collection('raffle_admin').findOne({ sessionToken: token })
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const doc = await db
      .collection('career_applications')
      .findOne({ _id: new ObjectId(params.id) })

    if (!doc || !doc.resume || !doc.resume.data) {
      return NextResponse.json({ error: 'Resume not found' }, { status: 404 })
    }

    const data = doc.resume.data
    const buffer: Buffer = Buffer.isBuffer(data)
      ? data
      : data?.buffer
        ? Buffer.from(data.buffer)
        : Buffer.from(data)

    const filename = (doc.resume.filename || 'resume').replace(/[^a-zA-Z0-9._-]/g, '_')
    const mimetype = doc.resume.mimetype || 'application/octet-stream'

    const blob = new Blob([Uint8Array.from(buffer)], { type: mimetype })
    return new NextResponse(blob, {
      status: 200,
      headers: {
        'Content-Type': mimetype,
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': String(blob.size),
      },
    })
  } catch (error) {
    console.error('Error fetching resume:', error)
    return NextResponse.json({ error: 'Failed to fetch resume' }, { status: 500 })
  }
}
