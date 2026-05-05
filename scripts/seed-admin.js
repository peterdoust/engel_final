const { MongoClient } = require('mongodb')
const crypto = require('crypto')
const fs = require('fs')
const path = require('path')

const envPath = path.join(__dirname, '..', '.env.local')
const envText = fs.readFileSync(envPath, 'utf8')
envText.split('\n').forEach(line => {
  const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/)
  if (m) process.env[m[1]] = m[2]
})

const EMAIL = process.argv[2] || 'admin@engelandengel.com'
const PASSWORD = process.argv[3] || 'Admin@123'

async function main() {
  if (!process.env.MONGODB_URI) {
    console.error('MONGODB_URI not found in .env.local')
    process.exit(1)
  }
  const client = new MongoClient(process.env.MONGODB_URI)
  await client.connect()
  const db = client.db('engelandengel')
  const hash = crypto.createHash('sha256').update(PASSWORD).digest('hex')
  const result = await db.collection('raffle_admin').updateOne(
    { email: EMAIL.trim().toLowerCase() },
    {
      $set: {
        email: EMAIL.trim().toLowerCase(),
        password: hash,
        updatedAt: new Date().toISOString(),
      },
      $setOnInsert: { createdAt: new Date().toISOString() },
    },
    { upsert: true }
  )
  console.log('Admin account ready:')
  console.log('  Email:   ', EMAIL)
  console.log('  Password:', PASSWORD)
  console.log('  Action:  ', result.upsertedCount ? 'created' : 'updated')
  await client.close()
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
