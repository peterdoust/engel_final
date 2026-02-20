import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'
import EventCalendar from '@/components/events/EventCalendar'

// SEO Metadata
export const metadata: Metadata = {
  title: 'Upcoming Events | Engel & Engel - Forensic Accounting Conferences & Seminars',
  description: 'Meet Engel & Engel forensic accounting experts at upcoming legal conferences, CLE seminars, and industry events. Schedule a consultation with our expert witnesses at these events.',
  keywords: 'forensic accounting events, legal conferences, CLE seminars, expert witness events, litigation support conferences, fraud investigation seminars, accounting expert events',
  openGraph: {
    title: 'Upcoming Events | Engel & Engel Forensic Accounting',
    description: 'Meet our forensic accounting experts at upcoming legal conferences and industry events. Schedule consultations and learn about our expert witness services.',
    type: 'website',
    url: 'https://engelandengel.com/events',
    images: [
      {
        url: 'https://engelandengel.com/images/events-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Engel & Engel at Legal Conferences and Events',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upcoming Events | Engel & Engel Forensic Accounting',
    description: 'Meet our forensic accounting experts at upcoming legal conferences and industry events.',
    images: ['https://engelandengel.com/images/events-hero.jpg'],
  },
  alternates: {
    canonical: 'https://engelandengel.com/events',
  },
}

// Upcoming Events Data
const upcomingEvents = [
  {
    id: 1,
    title: 'California State Bar Annual Meeting 2025',
    slug: 'california-state-bar-annual-meeting-2025',
    date: '2025-10-15',
    endDate: '2025-10-17',
    time: '9:00 AM - 5:00 PM',
    location: 'San Diego Convention Center',
    address: '111 W Harbor Dr, San Diego, CA 92101',
    type: 'Conference',
    category: 'Legal Conference',
    description: 'Join us at the California State Bar Annual Meeting where our forensic accounting experts will be available for consultations and networking.',
    fullDescription: 'The California State Bar Annual Meeting is the premier gathering of legal professionals in California. Engel & Engel will be exhibiting and available for one-on-one consultations about forensic accounting, expert witness testimony, and litigation support services.',
    image: '/images/events/state-bar-conference.jpg',
    imageAlt: 'California State Bar Annual Meeting - Engel & Engel Booth',
    featured: true,
    booth: 'Booth #245',
    speakers: ['Brandon Engel, CPA, CFE', 'David Engel, CPA, CFE'],
    topics: ['Forensic Accounting in Complex Litigation', 'Expert Witness Best Practices', 'Fraud Investigation Techniques'],
    registrationUrl: 'https://www.calbar.ca.gov/annual-meeting',
    contactEmail: 'events@engelandengel.com',
    contactPhone: '(310) 277-2220',
  },
  {
    id: 2,
    title: 'Los Angeles County Bar Association - Litigation Section Meeting',
    slug: 'lacba-litigation-section-meeting-2025',
    date: '2025-11-08',
    endDate: '2025-11-08',
    time: '12:00 PM - 2:00 PM',
    location: 'LACBA Conference Center',
    address: '1055 W 7th St, Los Angeles, CA 90017',
    type: 'Seminar',
    category: 'CLE Seminar',
    description: 'Brandon Engel will present on "Maximizing Damages Recovery with Forensic Accounting Evidence" - 1.5 CLE Credits available.',
    fullDescription: 'Join Brandon Engel, CPA, CFE for an interactive CLE seminar focused on leveraging forensic accounting evidence to maximize damages recovery in complex litigation. This presentation will cover real-world case studies and practical strategies for working with forensic accounting experts.',
    image: '/images/events/lacba-seminar.jpg',
    imageAlt: 'LACBA Litigation Section Meeting - Brandon Engel Presenting',
    featured: true,
    booth: null,
    speakers: ['Brandon Engel, CPA, CFE'],
    topics: ['Damages Calculation Methodologies', 'Working with Expert Witnesses', 'Evidence Preservation Strategies'],
    registrationUrl: 'https://www.lacba.org/events',
    contactEmail: 'events@engelandengel.com',
    contactPhone: '(310) 277-2220',
    cleCredits: '1.5 CLE Credits',
  },
  {
    id: 3,
    title: 'Association of Certified Fraud Examiners (ACFE) Global Fraud Conference',
    slug: 'acfe-global-fraud-conference-2025',
    date: '2025-12-05',
    endDate: '2025-12-07',
    time: '8:00 AM - 6:00 PM',
    location: 'Las Vegas Convention Center',
    address: '3150 Paradise Rd, Las Vegas, NV 89109',
    type: 'Conference',
    category: 'Fraud Investigation',
    description: 'Meet our fraud investigation experts at the world\'s largest anti-fraud conference. Visit our booth for insights on forensic accounting and fraud detection.',
    fullDescription: 'The ACFE Global Fraud Conference brings together fraud examiners, forensic accountants, and anti-fraud professionals from around the world. Engel & Engel will be exhibiting and presenting on advanced fraud investigation techniques.',
    image: '/images/events/acfe-conference.jpg',
    imageAlt: 'ACFE Global Fraud Conference - Engel & Engel Experts',
    featured: false,
    booth: 'Booth #512',
    speakers: ['Brandon Engel, CPA, CFE', 'David Engel, CPA, CFE'],
    topics: ['Embezzlement Detection', 'Financial Statement Fraud', 'Digital Forensics in Fraud Cases'],
    registrationUrl: 'https://www.acfe.com/fraud-conference',
    contactEmail: 'events@engelandengel.com',
    contactPhone: '(310) 277-2220',
  },
]

const pastEvents = [
  {
    id: 4,
    title: 'Beverly Hills Bar Association - Expert Witness Panel',
    date: '2024-09-20',
    location: 'Beverly Hills Bar Association',
    type: 'Panel Discussion',
    description: 'Brandon Engel participated in an expert witness panel discussion on effective testimony strategies.',
  },
]

export default function EventsPage() {
  const featuredEvents = upcomingEvents.filter(event => event.featured)
  const otherEvents = upcomingEvents.filter(event => !event.featured)

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet Us at Upcoming Events
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              Connect with our forensic accounting experts at legal conferences, CLE seminars, and industry events
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#upcoming-events">
                <Button size="lg" variant="secondary">
                  View Upcoming Events
                </Button>
              </a>
              <a href="#calendar">
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary-900">
                  View Calendar
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section id="upcoming-events" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule a consultation with our experts at these premier legal and accounting conferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white">
                <div className="relative h-72 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 overflow-hidden">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] animate-pulse"></div>
                  </div>

                  {/* Event date badge */}
                  <div className="absolute top-6 left-6 bg-white rounded-xl shadow-lg p-4 text-center min-w-[80px]">
                    <div className="text-3xl font-bold text-primary-600">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-xs font-semibold text-gray-600 uppercase">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(event.date).getFullYear()}
                    </div>
                  </div>

                  {/* Event type badge */}
                  <div className="absolute top-6 right-6 bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {event.type}
                  </div>

                  {/* Event icon/illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white transform group-hover:scale-110 transition-transform duration-500">
                      <div className="text-8xl mb-4 opacity-80">🎯</div>
                      <div className="text-lg font-semibold bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
                        {event.category}
                      </div>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-4">{event.title}</CardTitle>
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-700">
                          <span className="mr-2">📍</span>
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <span className="mr-2">📅</span>
                          <span>
                            {new Date(event.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                            {event.endDate && event.endDate !== event.date && (
                              <> - {new Date(event.endDate).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric'
                              })}</>
                            )}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <span className="mr-2">🕐</span>
                          <span>{event.time}</span>
                        </div>
                        {event.booth && (
                          <div className="flex items-center text-primary-600 font-semibold">
                            <span className="mr-2">🏢</span>
                            <span>{event.booth}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>

                  {event.speakers && event.speakers.length > 0 && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg border border-primary-100">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="text-primary-600 mr-2">👥</span>
                        Our Experts
                      </h4>
                      <div className="space-y-2">
                        {event.speakers.map((speaker, idx) => (
                          <div key={idx} className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                            <span className="font-medium">{speaker}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {event.cleCredits && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-accent-50 to-yellow-50 border-l-4 border-accent-500 rounded-lg shadow-sm">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">🎓</span>
                        <div>
                          <div className="font-bold text-accent-900">{event.cleCredits}</div>
                          <div className="text-sm text-accent-700">Available for this event</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                    <Link href={`/events/${event.slug}`} className="flex-1 min-w-[200px]">
                      <Button variant="primary" className="w-full group">
                        <span>View Event Details</span>
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </Button>
                    </Link>
                    <a href={`tel:${event.contactPhone}`} className="flex-1 min-w-[200px]">
                      <Button variant="outline" className="w-full">
                        <span className="mr-2">📞</span>
                        Schedule Meeting
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Upcoming Events */}
          {otherEvents.length > 0 && (
            <>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-gray-900">More Upcoming Events</h3>
                <div className="h-1 flex-1 ml-8 bg-gradient-to-r from-primary-200 to-transparent rounded"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherEvents.map((event) => (
                  <Card key={event.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-primary-600 to-accent-500"></div>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-accent-600 bg-accent-50 px-3 py-1.5 rounded-full uppercase tracking-wide">
                          {event.type}
                        </span>
                        <div className="text-right">
                          <div className="text-sm font-bold text-primary-600">
                            {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </div>
                          <div className="text-xs text-gray-500">
                            {new Date(event.date).getFullYear()}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary-600 transition-colors line-clamp-2">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="mr-2">📍</span>
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                        {event.booth && (
                          <div className="flex items-center text-sm text-primary-600 font-semibold">
                            <span className="mr-2">🏢</span>
                            <span>{event.booth}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{event.description}</p>
                      <Link href={`/events/${event.slug}`} className="block">
                        <Button variant="outline" className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all">
                          <span>Learn More</span>
                          <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Calendar Section */}
      <section id="calendar" className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Events Calendar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              View all our upcoming events in calendar format
            </p>
          </div>
          
          <EventCalendar events={upcomingEvents} />
        </div>
      </section>

      <Footer />
    </main>
  )
}

