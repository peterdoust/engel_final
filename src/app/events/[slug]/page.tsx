import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Link from 'next/link'

// Event Data (same as in main events page)
const eventsData: { [key: string]: any } = {
  'california-state-bar-annual-meeting-2025': {
    title: 'California State Bar Annual Meeting 2025',
    date: '2025-10-15',
    endDate: '2025-10-17',
    time: '9:00 AM - 5:00 PM',
    location: 'San Diego Convention Center',
    address: '111 W Harbor Dr, San Diego, CA 92101',
    type: 'Conference',
    category: 'Legal Conference',
    description: 'Join us at the California State Bar Annual Meeting where our forensic accounting experts will be available for consultations and networking.',
    fullDescription: `
      <p>The California State Bar Annual Meeting is the premier gathering of legal professionals in California. Engel & Engel will be exhibiting and available for one-on-one consultations about forensic accounting, expert witness testimony, and litigation support services.</p>
      
      <h2>What to Expect</h2>
      <p>Our team of experienced forensic accountants will be on-site to discuss:</p>
      <ul>
        <li>Complex litigation support and damages calculation</li>
        <li>Expert witness testimony preparation and strategies</li>
        <li>Fraud investigation and forensic analysis</li>
        <li>Business valuation for litigation purposes</li>
        <li>Economic damages in various practice areas</li>
      </ul>

      <h2>Schedule a Meeting</h2>
      <p>We encourage attorneys to schedule advance meetings with our experts during the conference. Contact us at (310) 277-2220 or events@engelandengel.com to reserve your consultation time.</p>

      <h2>Conference Highlights</h2>
      <p>The California State Bar Annual Meeting features:</p>
      <ul>
        <li>CLE sessions on cutting-edge legal topics</li>
        <li>Networking opportunities with California's top attorneys</li>
        <li>Exhibit hall with legal service providers and technology vendors</li>
        <li>Keynote speakers from the judiciary and legal profession</li>
      </ul>

      <h2>Why Meet with Engel & Engel?</h2>
      <p>With over 35 years of experience in forensic accounting and expert witness testimony, Engel & Engel has helped attorneys secure favorable outcomes in thousands of complex litigation matters. Our experts have testified in federal and state courts across California and nationwide.</p>
    `,
    booth: 'Booth #245',
    speakers: ['Brandon Engel, CPA, CFE', 'David Engel, CPA, CFE'],
    topics: ['Forensic Accounting in Complex Litigation', 'Expert Witness Best Practices', 'Fraud Investigation Techniques'],
    registrationUrl: 'https://www.calbar.ca.gov/annual-meeting',
    contactEmail: 'events@engelandengel.com',
    contactPhone: '(310) 277-2220',
    venue: {
      name: 'San Diego Convention Center',
      address: '111 W Harbor Dr, San Diego, CA 92101',
      phone: '(619) 525-5000',
      website: 'https://www.visitsandiego.com/convention-center',
      parking: 'Parking available at the convention center and nearby lots',
      publicTransit: 'Accessible via San Diego Trolley - Convention Center Station',
    },
    schedule: [
      { time: '9:00 AM - 10:30 AM', activity: 'Registration & Exhibit Hall Opens' },
      { time: '10:30 AM - 12:00 PM', activity: 'Morning CLE Sessions' },
      { time: '12:00 PM - 1:30 PM', activity: 'Networking Lunch' },
      { time: '1:30 PM - 3:00 PM', activity: 'Afternoon CLE Sessions' },
      { time: '3:00 PM - 5:00 PM', activity: 'Exhibit Hall & Networking' },
    ],
  },
  'lacba-litigation-section-meeting-2025': {
    title: 'Los Angeles County Bar Association - Litigation Section Meeting',
    date: '2025-11-08',
    endDate: '2025-11-08',
    time: '12:00 PM - 2:00 PM',
    location: 'LACBA Conference Center',
    address: '1055 W 7th St, Los Angeles, CA 90017',
    type: 'Seminar',
    category: 'CLE Seminar',
    description: 'Brandon Engel will present on "Maximizing Damages Recovery with Forensic Accounting Evidence" - 1.5 CLE Credits available.',
    fullDescription: `
      <p>Join Brandon Engel, CPA, CFE for an interactive CLE seminar focused on leveraging forensic accounting evidence to maximize damages recovery in complex litigation. This presentation will cover real-world case studies and practical strategies for working with forensic accounting experts.</p>

      <h2>CLE Program Details</h2>
      <p>This 1.5-hour CLE program qualifies for 1.5 general CLE credits and will cover:</p>
      <ul>
        <li>Damages calculation methodologies in various litigation contexts</li>
        <li>Best practices for working with forensic accounting experts</li>
        <li>Evidence preservation and documentation strategies</li>
        <li>Effective presentation of financial evidence to judges and juries</li>
        <li>Common pitfalls to avoid in damages claims</li>
      </ul>

      <h2>About the Speaker</h2>
      <p>Brandon Engel, CPA, CFE is a partner at Engel & Engel LLP with over 35 years of experience in forensic accounting and expert witness testimony. He has testified in hundreds of cases involving fraud, economic damages, business valuation, and financial disputes.</p>

      <h2>Who Should Attend</h2>
      <p>This seminar is ideal for:</p>
      <ul>
        <li>Litigation attorneys handling complex financial disputes</li>
        <li>Trial lawyers seeking to strengthen damages claims</li>
        <li>In-house counsel managing litigation matters</li>
        <li>Attorneys new to working with forensic accounting experts</li>
      </ul>

      <h2>Registration Information</h2>
      <p>Registration includes the CLE presentation, course materials, and networking lunch. Space is limited, so early registration is recommended.</p>
    `,
    booth: null,
    speakers: ['Brandon Engel, CPA, CFE'],
    topics: ['Damages Calculation Methodologies', 'Working with Expert Witnesses', 'Evidence Preservation Strategies'],
    registrationUrl: 'https://www.lacba.org/events',
    contactEmail: 'events@engelandengel.com',
    contactPhone: '(310) 277-2220',
    cleCredits: '1.5 CLE Credits',
    venue: {
      name: 'LACBA Conference Center',
      address: '1055 W 7th St, Los Angeles, CA 90017',
      phone: '(213) 627-2727',
      website: 'https://www.lacba.org',
      parking: 'Parking available in the building garage',
      publicTransit: 'Metro 7th Street/Metro Center Station',
    },
  },
  'acfe-global-fraud-conference-2025': {
    title: 'Association of Certified Fraud Examiners (ACFE) Global Fraud Conference',
    date: '2025-12-05',
    endDate: '2025-12-07',
    time: '8:00 AM - 6:00 PM',
    location: 'Las Vegas Convention Center',
    address: '3150 Paradise Rd, Las Vegas, NV 89109',
    type: 'Conference',
    category: 'Fraud Investigation',
    description: 'Meet our fraud investigation experts at the world\'s largest anti-fraud conference. Visit our booth for insights on forensic accounting and fraud detection.',
    fullDescription: `
      <p>The ACFE Global Fraud Conference brings together fraud examiners, forensic accountants, and anti-fraud professionals from around the world. Engel & Engel will be exhibiting and presenting on advanced fraud investigation techniques.</p>

      <h2>Conference Overview</h2>
      <p>The ACFE Global Fraud Conference is the premier event for anti-fraud professionals, featuring:</p>
      <ul>
        <li>Over 100 educational sessions on fraud prevention and detection</li>
        <li>Networking with 2,000+ fraud examiners and forensic accountants</li>
        <li>Exhibit hall showcasing the latest fraud detection technology</li>
        <li>CPE credits for attending sessions</li>
      </ul>

      <h2>Visit Our Booth</h2>
      <p>Stop by Booth #512 to meet our fraud investigation experts and learn about:</p>
      <ul>
        <li>Embezzlement detection and investigation techniques</li>
        <li>Financial statement fraud analysis</li>
        <li>Digital forensics in fraud cases</li>
        <li>Asset tracing and recovery strategies</li>
        <li>Expert witness testimony in fraud litigation</li>
      </ul>

      <h2>Our Experts</h2>
      <p>Brandon Engel and David Engel, both CPAs and CFEs, will be available throughout the conference for consultations and discussions about complex fraud investigations.</p>

      <h2>Schedule a Meeting</h2>
      <p>Conference schedules fill up quickly. Contact us in advance to schedule a dedicated meeting time with our experts during the conference.</p>
    `,
    booth: 'Booth #512',
    speakers: ['Brandon Engel, CPA, CFE', 'David Engel, CPA, CFE'],
    topics: ['Embezzlement Detection', 'Financial Statement Fraud', 'Digital Forensics in Fraud Cases'],
    registrationUrl: 'https://www.acfe.com/fraud-conference',
    contactEmail: 'events@engelandengel.com',
    contactPhone: '(310) 277-2220',
    venue: {
      name: 'Las Vegas Convention Center',
      address: '3150 Paradise Rd, Las Vegas, NV 89109',
      phone: '(702) 892-0711',
      website: 'https://www.lvcva.com',
      parking: 'Ample parking available at the convention center',
      publicTransit: 'Las Vegas Monorail - Convention Center Station',
    },
  },
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const event = eventsData[params.slug]
  
  if (!event) {
    return {
      title: 'Event Not Found | Engel & Engel',
    }
  }

  return {
    title: `${event.title} | Engel & Engel Events`,
    description: event.description,
    keywords: `${event.category}, forensic accounting events, ${event.type}, legal conferences, expert witness, ${event.location}`,
    openGraph: {
      title: event.title,
      description: event.description,
      type: 'article',
      publishedTime: new Date().toISOString(),
      authors: event.speakers,
      url: `https://engelandengel.com/events/${params.slug}`,
      images: [
        {
          url: `https://engelandengel.com/images/events/${params.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description: event.description,
      images: [`https://engelandengel.com/images/events/${params.slug}.jpg`],
    },
    alternates: {
      canonical: `https://engelandengel.com/events/${params.slug}`,
    },
  }
}

// Generate static params for all events
export async function generateStaticParams() {
  return Object.keys(eventsData).map((slug) => ({
    slug,
  }))
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = eventsData[params.slug]

  if (!event) {
    notFound()
  }

  const eventStartDate = new Date(event.date)
  const eventEndDate = event.endDate ? new Date(event.endDate) : eventStartDate

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white pt-32 pb-16">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {event.type}
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {event.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {event.title}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
              <div className="flex items-center">
                <span className="mr-3 text-2xl">📅</span>
                <div>
                  <div className="font-semibold">Date</div>
                  <div className="text-primary-100">
                    {eventStartDate.toLocaleDateString('en-US', { 
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                    {event.endDate && event.endDate !== event.date && (
                      <> - {eventEndDate.toLocaleDateString('en-US', { 
                        month: 'long',
                        day: 'numeric'
                      })}</>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-2xl">🕐</span>
                <div>
                  <div className="font-semibold">Time</div>
                  <div className="text-primary-100">{event.time}</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-2xl">📍</span>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-primary-100">{event.location}</div>
                </div>
              </div>
              {event.booth && (
                <div className="flex items-center">
                  <span className="mr-3 text-2xl">🏢</span>
                  <div>
                    <div className="font-semibold">Visit Us</div>
                    <div className="text-primary-100">{event.booth}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: event.fullDescription }} />
              </div>

              {/* Topics Covered */}
              {event.topics && event.topics.length > 0 && (
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Topics Covered</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {event.topics.map((topic: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-2">✓</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Schedule */}
              {event.schedule && event.schedule.length > 0 && (
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Event Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {event.schedule.map((item: any, idx: number) => (
                        <div key={idx} className="flex gap-4 pb-4 border-b last:border-b-0">
                          <div className="font-semibold text-primary-600 min-w-[140px]">
                            {item.time}
                          </div>
                          <div className="text-gray-700">
                            {item.activity}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Schedule a Meeting</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      Contact us to schedule a consultation with our experts at this event.
                    </p>
                    <div className="space-y-3">
                      <a href={`tel:${event.contactPhone}`} className="block">
                        <Button variant="primary" className="w-full">
                          📞 Call {event.contactPhone}
                        </Button>
                      </a>
                      <a href={`mailto:${event.contactEmail}`} className="block">
                        <Button variant="outline" className="w-full">
                          ✉️ Email Us
                        </Button>
                      </a>
                      {event.registrationUrl && (
                        <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="block">
                          <Button variant="secondary" className="w-full">
                            Register for Event
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Our Experts */}
                {event.speakers && event.speakers.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Our Experts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {event.speakers.map((speaker: string, idx: number) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <span className="mr-2 text-primary-600">👤</span>
                            {speaker}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* CLE Credits */}
                {event.cleCredits && (
                  <Card className="bg-accent-50 border-accent-200">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-3xl mb-2">🎓</div>
                        <div className="font-bold text-accent-900 text-lg">
                          {event.cleCredits}
                        </div>
                        <div className="text-sm text-accent-700 mt-1">
                          Available for this event
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Venue Information */}
                {event.venue && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Venue Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <div>
                        <div className="font-semibold text-gray-900">{event.venue.name}</div>
                        <div className="text-gray-600">{event.venue.address}</div>
                      </div>
                      {event.venue.parking && (
                        <div>
                          <div className="font-semibold text-gray-900">🅿️ Parking</div>
                          <div className="text-gray-600">{event.venue.parking}</div>
                        </div>
                      )}
                      {event.venue.publicTransit && (
                        <div>
                          <div className="font-semibold text-gray-900">🚇 Public Transit</div>
                          <div className="text-gray-600">{event.venue.publicTransit}</div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* Back to Events */}
                <Link href="/events">
                  <Button variant="outline" className="w-full">
                    ← Back to All Events
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: event.title,
            description: event.description,
            startDate: event.date,
            endDate: event.endDate || event.date,
            eventStatus: 'https://schema.org/EventScheduled',
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            location: {
              '@type': 'Place',
              name: event.venue?.name || event.location,
              address: {
                '@type': 'PostalAddress',
                streetAddress: event.venue?.address || event.address,
              },
            },
            organizer: {
              '@type': 'Organization',
              name: 'Engel & Engel LLP',
              url: 'https://engelandengel.com',
            },
            performer: event.speakers?.map((speaker: string) => ({
              '@type': 'Person',
              name: speaker,
            })),
          }),
        }}
      />

      <Footer />
    </main>
  )
}

