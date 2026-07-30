import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function GET(request: NextRequest) {
  const token = request.headers.get('x-admin-key')
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const client = await clientPromise
    const db = client.db()

    const admin = await db.collection('raffle_admin').findOne({ sessionToken: token })
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const submissions = await db
      .collection('career_applications')
      .find({}, {
        projection: {
          'resume.data': 0,
        },
      })
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json({ success: true, submissions, total: submissions.length })
  } catch (error) {
    console.error('Error fetching career applications:', error)
    return NextResponse.json({ error: 'Failed to fetch career applications' }, { status: 500 })
  }
}
