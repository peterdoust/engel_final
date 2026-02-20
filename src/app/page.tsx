import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import IntroSection from '@/components/sections/IntroSection'
import ServicesOverview from '@/components/sections/ServicesOverview'
import ExpertiseGrid from '@/components/sections/ExpertiseGrid'
import Certifications from '@/components/sections/Certifications'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata = {
  title: 'Engel & Engel - Premier Forensic Accounting Firm in Los Angeles',
  description: 'Established in Los Angeles in 1994, Engel & Engel LLP is one of the premier providers of forensic accounting and advisory services in California and nationwide. From strategy to testimony.',
}

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <IntroSection />
      <ServicesOverview />
      <ExpertiseGrid />
      <Certifications />
      <ContactCTA />
      <Footer />
    </main>
  )
}
