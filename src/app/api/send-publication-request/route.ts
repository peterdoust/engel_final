import { NextRequest, NextResponse } from 'next/server'

// Function to get IP address from request
function getClientIP(request: NextRequest): string {
  // Check various headers for the real IP address
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const cfConnectingIP = request.headers.get('cf-connecting-ip') // Cloudflare

  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  if (realIP) {
    return realIP
  }
  if (cfConnectingIP) {
    return cfConnectingIP
  }

  // Fallback to connection remote address
  return request.ip || 'Unknown'
}

// Function to get location data from IP
async function getLocationFromIP(ip: string) {
  try {
    // Skip location lookup for local/private IPs
    if (ip === 'Unknown' || ip.startsWith('127.') || ip.startsWith('192.168.') || ip.startsWith('10.') || ip === '::1') {
      return {
        city: 'Local/Private Network',
        region: 'N/A',
        country: 'N/A',
        timezone: 'N/A',
        isp: 'N/A'
      }
    }

    // Use ip-api.com (free service, no API key required)
    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`)

    if (!response.ok) {
      throw new Error('Failed to fetch location data')
    }

    const locationData = await response.json()

    if (locationData.status === 'fail') {
      throw new Error(locationData.message || 'Location lookup failed')
    }

    return {
      city: locationData.city || 'Unknown',
      region: locationData.regionName || 'Unknown',
      country: locationData.country || 'Unknown',
      countryCode: locationData.countryCode || 'Unknown',
      timezone: locationData.timezone || 'Unknown',
      isp: locationData.isp || 'Unknown',
      coordinates: locationData.lat && locationData.lon ? `${locationData.lat}, ${locationData.lon}` : 'Unknown'
    }
  } catch (error) {
    console.error('Error fetching location data:', error)
    return {
      city: 'Unknown',
      region: 'Unknown',
      country: 'Unknown',
      timezone: 'Unknown',
      isp: 'Unknown',
      coordinates: 'Unknown'
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Get IP address and location
    const clientIP = getClientIP(request)
    const locationData = await getLocationFromIP(clientIP)

    // Log the submission data (for testing)
    console.log('=== PUBLICATION REQUEST RECEIVED ===')
    console.log('Name:', data.firstName, data.lastName)
    console.log('Email:', data.email)
    console.log('Phone:', data.phone)
    console.log('Firm:', data.firmName)
    console.log('Practice Area:', data.practiceArea)
    console.log('Publications Requested:', data.requestedPublications.length)
    console.log('Publications:', data.requestedPublications)
    console.log('Message:', data.message)
    console.log('Timestamp:', new Date(data.timestamp).toLocaleString())
    console.log('--- LOCATION DATA ---')
    console.log('IP Address:', clientIP)
    console.log('Location:', `${locationData.city}, ${locationData.region}, ${locationData.country}`)
    console.log('Timezone:', locationData.timezone)
    console.log('ISP:', locationData.isp)
    console.log('Coordinates:', locationData.coordinates)
    console.log('=====================================')

    // TODO: Uncomment the email sending code below once SMTP is configured
    /*
    const nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Format the requested publications list for email
    const publicationsList = data.requestedPublications
      .map((pub: string, index: number) => `${index + 1}. ${pub}`)
      .join('\n')

    // Email content (commented out for now)
    const emailContent = `
New Publication Request - Engel & Engel

CONTACT INFORMATION:
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Firm/Organization: ${data.firmName}
Practice Area: ${data.practiceArea}

REQUESTED PUBLICATIONS (${data.requestedPublications.length} total):
${publicationsList}

ADDITIONAL INFORMATION:
${data.message || 'No additional message provided.'}

REQUEST DETAILS:
Category: ${data.category || 'General Request'}
Submitted: ${new Date(data.timestamp).toLocaleString('en-US', {
  timeZone: 'America/Los_Angeles',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short'
})}

LOCATION & SECURITY INFO:
IP Address: ${clientIP}
Location: ${locationData.city}, ${locationData.region}, ${locationData.country}
Timezone: ${locationData.timezone}
ISP: ${locationData.isp}
Coordinates: ${locationData.coordinates}

---
This request was submitted through the Engel & Engel website publication request form.
    `.trim()

    // TODO: Send email once SMTP is configured
    /*
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@engelandengel.com',
      to: 'peter@gcs.la',
      subject: `Publication Request - ${data.firstName} ${data.lastName} (${data.firmName})`,
      text: emailContent,
    })
    */

    // For now, just return success (email will be added later)
    return NextResponse.json({
      success: true,
      message: 'Publication request received and logged successfully'
    })

  } catch (error) {
    console.error('Error processing publication request:', error)
    return NextResponse.json(
      { error: 'Failed to process publication request' },
      { status: 500 }
    )
  }
}
