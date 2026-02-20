import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import TeamVariation1 from '@/components/team-variations/TeamVariation1'
import TeamVariation2 from '@/components/team-variations/TeamVariation2'
import TeamVariation3 from '@/components/team-variations/TeamVariation3'
import TeamVariation4 from '@/components/team-variations/TeamVariation4'
import TeamVariation5 from '@/components/team-variations/TeamVariation5'
import TeamVariation6 from '@/components/team-variations/TeamVariation6'

export const metadata = {
  title: 'Our Team of Forensic Accountants | Engel & Engel LLP | Los Angeles',
  description: 'Meet our expert team of forensic accounting professionals: Jason A. Engel (CPA, CFE, CIRA, CVA, MAFF, ABV), Brandon J. Engel (CPA, CFE), and Douglas H. Engel (CPA, MBA). 35+ years of experience in Los Angeles.',
}

const teamMembers = [
  {
    name: 'Jason A. Engel',
    credentials: 'CPA, CFE, CIRA, CVA, MAFF, ABV',
    title: 'Managing Partner & Senior Forensic Accountant',
    experience: '35+ Years',
    specialties: [
      'Expert Witness Testimony',
      'Complex Fraud Investigations',
      'Business Valuations',
      'Economic Damage Analysis'
    ],
    achievements: [
      'Lead Expert in 500+ Cases',
      'Court-Qualified Expert Witness',
      'Published Author on Forensic Accounting',
      'Industry Speaker & Educator'
    ],
    description: 'Jason A. Engel is the Managing Partner and Senior Forensic Accountant at Engel & Engel LLP with over 35 years of experience in forensic accounting, fraud investigation, and expert witness testimony. He holds multiple prestigious certifications including CPA, CFE, CIRA, CVA, MAFF, and ABV, making him one of the most qualified forensic accountants in California.',
    phone: '(310) 277-2220',
    email: 'jasonengel@engelandengel.com',
    image: '/images/team/jason-engel.jpg'
  },
  {
    name: 'Brandon J. Engel',
    credentials: 'CPA, CFE',
    title: 'Partner & Forensic Accountant',
    experience: '15+ Years',
    specialties: [
      'Fraud Investigations',
      'Economic Damage Calculations',
      'Business Valuations',
      'Bankruptcy & Insolvency'
    ],
    achievements: [
      'Expert in 200+ Forensic Cases',
      'Certified Fraud Examiner',
      'Complex Financial Investigations',
      'Trial Testimony Experience'
    ],
    description: 'Brandon J. Engel is a Partner and Forensic Accountant with over 15 years of experience in forensic accounting and fraud investigation. As a CPA and CFE, Brandon has conducted over 200 forensic accounting cases and has testified as an expert witness in deposition and trial.',
    phone: '(310) 277-2220',
    email: 'brandon@engelandengel.com',
    image: '/images/team/brandon-engel.jpg'
  },
  {
    name: 'Douglas H. Engel',
    credentials: 'CPA, MBA',
    title: 'Senior Accountant',
    experience: '10+ Years',
    specialties: [
      'Financial Analysis',
      'Accounting Research',
      'Case Support',
      'Data Analysis'
    ],
    achievements: [
      'Advanced Financial Analysis',
      'Complex Case Support',
      'Research & Documentation',
      'Client Relations'
    ],
    description: 'Douglas H. Engel is a Senior Accountant with over 10 years of experience in accounting and financial analysis. As a CPA with an MBA, Douglas provides essential support in complex forensic accounting cases and business analysis.',
    phone: '(310) 277-2220',
    email: 'douglas@engelandengel.com',
    image: '/images/team/douglas-engel.jpg'
  }
]

export default function TeamPage() {
  return (
    <main>
      <Header />
      
      {/* Modern Hero Section - Overlay Design with Top Buffer */}
      <section className="relative pt-16 lg:pt-20 text-white overflow-hidden min-h-[100vh] flex items-end">
        {/* Top Buffer Space - Matches Image Background */}
        <div className="absolute top-0 left-0 right-0 z-0" style={{ height: '80px' }}></div>

        {/* Background Image - Positioned to Show Heads with Buffer */}
        <div className="absolute z-0" style={{ top: '0', left: 0, right: 0, bottom: 0 }}>
          <Image
            src="/images/team.jpg"
            alt="Engel & Engel Team"
            fill
            className="object-cover w-full h-full"
            priority
            sizes="100vw"
            style={{
              objectPosition: 'center top'
            }}
          />
          {/* Subtle Modern Overlay - Less Blue, More Professional */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/70 to-primary-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        <div className="container-custom pb-16 md:pb-20 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            {/* Modern Badge */}
            {/* <div className="inline-flex items-center px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-8 shadow-lg">
              <span className="mr-2">👥</span>
              Expert Forensic Accounting Team
            </div> */}

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-200">Expert Team</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
              Our team combines decades of experience with the highest professional credentials
              to deliver exceptional forensic accounting and expert witness services.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(310) 277-2220">
                <Button size="xl" className="bg-white text-primary-900 hover:bg-primary-50 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call (310) 277-2220
                  </span>
                </Button>
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Team Members Section - Variation 5 */}
      <TeamVariation5 teamMembers={teamMembers} />

      {/* <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-primary-900/20 to-black/30"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-8 shadow-lg">
              <span className="mr-2">💼</span>
              Ready to Work With Experts?
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Discuss Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-cyan-200">Forensic Accounting Needs</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Our team is ready to provide expert analysis, testimony, and investigation services for your case. Contact us today for a confidential consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:(310) 277-2220">
                <Button size="xl" className="bg-white text-primary-900 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>
                      <div className="text-lg font-bold">Call (310) 277-2220</div>
                      <div className="text-xs text-gray-600">Speak with an expert today</div>
                    </span>
                  </span>
                </Button>
              </a>

              <a href="/contact">
                <Button size="xl" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-900 shadow-xl transition-all duration-300">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Us a Message
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  )
}
