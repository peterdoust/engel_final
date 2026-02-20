import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata = {
  title: 'Forensic Accounting Services Los Angeles | 30+ Years Experience | Engel & Engel',
  description: 'Los Angeles forensic accounting firm with 30+ years experience. Expert witness testimony, fraud investigation, business valuation, litigation support. Serving top law firms and corporations.',
  openGraph: {
    title: 'Forensic Accounting Services Los Angeles | 30+ Years Experience',
    description: 'Los Angeles forensic accounting firm with 30+ years experience. Expert witness testimony, fraud investigation, business valuation, litigation support.',
    url: 'https://engelandengel.com/services',
    siteName: 'Engel & Engel LLP',
    images: [{ url: 'https://engelandengel.com/images/og-services.jpg', width: 1200, height: 630, alt: 'Forensic Accounting Services - Los Angeles' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forensic Accounting Services Los Angeles | 30+ Years Experience',
    description: 'Los Angeles forensic accounting firm with 30+ years experience. Expert witness testimony, fraud investigation, business valuation, litigation support.',
    images: ['https://engelandengel.com/images/twitter-services.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://engelandengel.com/services' },
}

const mainServices = [
  {
    title: 'Forensic Accounting',
    description: 'Comprehensive forensic accounting investigations for complex financial disputes, fraud detection, and litigation support with 30+ years of experience.',
    href: '/services/forensic-accounting',
    icon: (
      <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    title: 'Expert Witness Testimony',
    description: 'Court-tested expert witness services with 100+ cases in state, federal, and bankruptcy courts. Six professional certifications and 20 research publications.',
    href: '/services/expert-witness-testimony',
    icon: (
      <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  },
  {
    title: 'Joint Retention Program',
    description: 'Proactive collaboration with legal teams from case inception. Strategic discovery planning and cost-effective investigation for stronger case outcomes.',
    href: '/services/joint-retention-program',
    icon: (
      <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Internal Investigations',
    description: 'Confidential internal investigations for employee fraud, embezzlement, whistleblower complaints, and financial misconduct. Independent and objective analysis.',
    href: '/services/internal-investigations',
    icon: (
      <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  }
]

const practiceAreas = [
  {
    title: 'Economic Damages',
    description: 'Quantification of economic losses in commercial litigation, personal injury, and business disputes.',
    href: '/practice-areas/economic-damages'
  },
  {
    title: 'Fraud Investigation',
    description: 'Comprehensive fraud detection and investigation services for businesses and legal proceedings.',
    href: '/practice-areas/fraud-investigation'
  },
  {
    title: 'Business Valuation',
    description: 'Professional business valuations for litigation, mergers, acquisitions, and partnership disputes.',
    href: '/practice-areas/business-valuation'
  },
  {
    title: 'Bankruptcy & Insolvency',
    description: 'Forensic accounting services for bankruptcy proceedings, creditor protection, and insolvency matters.',
    href: '/practice-areas/bankruptcy-insolvency'
  },
  {
    title: 'IP Litigation',
    description: 'Economic damage analysis for patent, trademark, and copyright infringement cases.',
    href: '/practice-areas/ip-litigation'
  },
  {
    title: 'Real Estate Litigation',
    description: 'Financial analysis and expert testimony for real estate disputes and construction defect cases.',
    href: '/practice-areas/real-estate-litigation'
  },
  {
    title: 'Construction Litigation',
    description: 'Expert analysis for construction delays, cost overruns, and construction defect disputes.',
    href: '/practice-areas/construction-litigation'
  },
  {
    title: 'Alter Ego',
    description: 'Forensic analysis for piercing the corporate veil and alter ego liability cases.',
    href: '/practice-areas/alter-ego'
  },
  {
    title: 'Fraudulent Transfers',
    description: 'Asset tracing and recovery analysis for fraudulent transfer and voidable transaction cases.',
    href: '/practice-areas/fraudulent-transfers'
  },
  {
    title: 'Employment Litigation',
    description: 'Economic damage calculations for wrongful termination, discrimination, and wage disputes.',
    href: '/practice-areas/employment-litigation'
  },
  {
    title: 'Business Interruption',
    description: 'Lost income analysis for business interruption insurance claims and coverage disputes.',
    href: '/practice-areas/business-interruption'
  },
  {
    title: 'Personal Injury',
    description: 'Economic damage analysis for personal injury and wrongful death cases.',
    href: '/practice-areas/personal-injury'
  },
  {
    title: 'Accounting Malpractice',
    description: 'Professional standard analysis and damage calculations for accounting malpractice cases.',
    href: '/practice-areas/accounting-malpractice'
  },
  {
    title: 'Partnership & Shareholder Disputes',
    description: 'Forensic accounting for partnership dissolution, shareholder disputes, and business breakups.',
    href: '/practice-areas/partnership-disputes'
  }
]

export default function ServicesPage() {
  return (
    <main>
      <SchemaMarkup type="Organization" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, socialMedia: ["https://www.linkedin.com/company/engel-engel-llp"] }} />
      <SchemaMarkup type="LocalBusiness" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, geo: { latitude: "34.0522", longitude: "-118.2437" } }} />
      <SchemaMarkup type="ProfessionalService" data={{
        name: "Forensic Accounting Services",
        description: "Comprehensive forensic accounting and expert witness services in Los Angeles",
        serviceType: "Forensic Accounting",
        address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }
      }} />

      <Header />

      {/* Hero Section */}
      <section className="pt-16 lg:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom py-20">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services' }
          ]} />

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Forensic Accounting Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Over 30 years of forensic accounting and expert witness experience serving Los Angeles law firms, corporations, and private companies in complex financial litigation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="xl" className="bg-white text-primary-900 hover:bg-gray-100">
                  Free Consultation
                </Button>
              </Link>
              <a href="tel:(310) 277-2220">
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-900">
                  Call (310) 277-2220
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Engel & Engel is a Los Angeles forensic accounting firm providing high-level forensic accounting and expert witness services to top law firms, public corporations, and private companies. For over 30 years, we have served clients on a variety of litigation issues for both plaintiffs and defendants in state, federal, and bankruptcy courts.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team holds six professional certifications (CPA, CFE, CIRA, CVA, MAFF, ABV), has published 20 research articles in peer-reviewed journals, and brings Big Four forensic accounting experience to every engagement. We combine technical expertise with clear communication to help attorneys and businesses achieve successful outcomes in complex financial litigation.
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive forensic accounting services designed to uncover the truth and support your case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {mainServices.map((service, index) => (
              <Card key={index} className="h-full text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-6">
                  <div className="flex justify-center mb-6">{service.icon}</div>
                  <CardTitle className="text-2xl mb-4 font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <Link href={service.href}>
                    <Button className="w-full bg-primary-600 hover:bg-primary-700">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Engel & Engel</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Proven credentials and courtroom experience you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Six Professional Certifications</h3>
              <p className="text-gray-600 leading-relaxed">CPA, CFE, CIRA, CVA, MAFF, ABV credentials demonstrating expertise across all forensic accounting disciplines.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">20 Research Publications</h3>
              <p className="text-gray-600 leading-relaxed">Published research in peer-reviewed journals demonstrating thought leadership in forensic accounting and economic damages.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">1,000+ Cases</h3>
              <p className="text-gray-600 leading-relaxed">Over 30 years of experience handling complex forensic accounting matters for top law firms and corporations nationwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Practice Areas</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Specialized forensic accounting expertise across diverse industries and litigation types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, index) => (
              <Card
                key={index}
                className="h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="flex-grow pb-4">
                  <CardTitle className="text-lg mb-3 font-semibold leading-tight text-gray-900">{area.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600 leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4 mt-auto">
                  <Link href={area.href}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
                    >
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Need Forensic Accounting Services?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact Brandon J. Engel, CPA/ABV/CFF, CVA, MAFF for a consultation on your forensic accounting and expert witness needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:(310) 277-2220">
                <Button size="xl" className="bg-white text-primary-900 hover:bg-gray-100">
                  Call (310) 277-2220
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-900">
                  Free Consultation
                </Button>
              </Link>
            </div>
            <p className="text-primary-200">Serving Los Angeles, Orange County, and all of California</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
