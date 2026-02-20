import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import FAQ from '@/components/seo/FAQ'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata = {
  title: 'Partnership Dispute Expert Witness | Forensic Accounting Los Angeles | Engel & Engel',
  description: 'Partnership dispute forensic accounting expert witness in Los Angeles. Dissolution, buyouts, profit distribution, breach of fiduciary duty. Court-tested testimony.',
  openGraph: {
    title: 'Partnership Dispute Expert Witness | Forensic Accounting Los Angeles',
    description: 'Partnership dispute forensic investigation and expert testimony. Dissolution and valuation analysis.',
    url: 'https://engelandengel.com/practice-areas/partnership-disputes',
    siteName: 'Engel & Engel LLP',
    images: [{ url: 'https://engelandengel.com/images/og-partnership-disputes.jpg', width: 1200, height: 630, alt: 'Partnership Dispute Expert Witness - Los Angeles' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partnership Dispute Expert Witness | Forensic Accounting Los Angeles',
    description: 'Partnership dispute forensic investigation and expert testimony.',
    images: ['https://engelandengel.com/images/twitter-partnership-disputes.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://engelandengel.com/practice-areas/partnership-disputes' },
}

export default function PartnershipDisputesEnhancedPage() {
  const faqItems = [
    { question: "What types of partnership disputes do you handle?", answer: "We provide forensic accounting services for partnership dissolution, buyout disputes, profit distribution disagreements, breach of fiduciary duty claims, misappropriation of partnership assets, and disputes over partnership valuations." },
    { question: "How do you value a partnership interest?", answer: "We value partnership interests using income, market, and asset-based approaches, considering the partnership agreement, financial performance, industry comparables, and applicable discounts for lack of control and marketability." },
    { question: "Can you trace misappropriated partnership funds?", answer: "Yes, we specialize in tracing misappropriated partnership funds, identifying unauthorized distributions, personal use of partnership assets, and documenting financial misconduct by partners." },
    { question: "Do you analyze profit distribution disputes?", answer: "Yes, we analyze profit distribution disputes by reviewing partnership agreements, capital accounts, profit allocation formulas, and determining whether distributions were made in accordance with partnership terms." },
    { question: "Do you testify as an expert witness in partnership disputes?", answer: "Yes, we provide expert witness testimony in partnership litigation for both plaintiffs and defendants. Our testimony covers partnership valuations, financial analysis, and forensic investigations of partnership finances." }
  ]

  return (
    <main>
      <SchemaMarkup type="Organization" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, socialMedia: ["https://www.linkedin.com/company/engel-engel-llp"] }} />
      <SchemaMarkup type="LocalBusiness" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, geo: { latitude: "34.0522", longitude: "-118.2437" } }} />
      <SchemaMarkup type="ProfessionalService" data={{ name: "Partnership Dispute Expert Witness Services", description: "Partnership dispute forensic accounting and expert witness testimony in Los Angeles", serviceType: "Forensic Accounting - Partnership Disputes", address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" } }} />
      <SchemaMarkup type="HowTo" data={{
        name: "How to Resolve Partnership Disputes with Forensic Accounting",
        description: "Our proven 5-step process for partnership dispute analysis",
        steps: [
          { name: "Initial Assessment", text: "Review partnership agreement, financial records, and identify dispute issues." },
          { name: "Financial Analysis", text: "Analyze partnership financials, capital accounts, and profit distributions." },
          { name: "Valuation", text: "Value partnership interests for dissolution or buyout purposes." },
          { name: "Forensic Investigation", text: "Investigate allegations of misappropriation or breach of fiduciary duty." },
          { name: "Expert Report & Testimony", text: "Prepare detailed reports and provide expert witness testimony." }
        ]
      }} />
      <SchemaMarkup type="FAQ" data={{ questions: faqItems }} />
      
      <Header />
      
      <section className="pt-16 lg:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom py-20">
          <Breadcrumbs items={[
            { label: 'Practice Areas', href: '/practice-areas' },
            { label: 'Partnership Disputes', href: '/practice-areas/partnership-disputes' }
          ]} />
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Partnership Dispute Expert Witness</h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Forensic accounting expertise in partnership disputes, dissolution, buyouts, and breach of fiduciary duty claims.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(310) 277-2220"><Button size="xl" className="bg-white text-primary-900 hover:bg-gray-100">Call (310) 277-2220</Button></a>
              <Link href="/contact"><Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-900">Free Consultation</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            <div className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Partnership disputes often demand the expertise of forensic accountants to analyze financial records, value partnership interests, and investigate allegations of financial misconduct. Engel & Engel has extensive experience in conducting forensic investigations and providing expert testimony in partnership litigation for both plaintiffs and defendants.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our expertise includes partnership valuations, dissolution analysis, profit distribution disputes, tracing misappropriated funds, and breach of fiduciary duty investigations. We have the qualifications and experience to serve as expert witnesses in partnership disputes.
              </p>
            </div>

            <div className="mb-12 bg-primary-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Dispute Expert Witness in Los Angeles</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Serving Los Angeles County, Orange County, Ventura County, San Bernardino County, Riverside County, and throughout Southern California. Our Los Angeles office provides comprehensive partnership dispute forensic accounting services for business litigation attorneys throughout the region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you need a partnership dispute expert for cases in downtown Los Angeles, Santa Monica, Beverly Hills, Pasadena, Irvine, San Diego, or anywhere in California, our team is ready to assist with partnership valuations, forensic investigations, and expert witness testimony.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How Engel & Engel Helps in Partnership Disputes</h2>
              <p className="text-lg text-gray-700 mb-8">When the stakes are high, Engel & Engel can serve as your expert in connection with the following:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Partnership Valuation", desc: "Value partnership interests for dissolution, buyout, or litigation purposes.", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
                  { title: "Dissolution Analysis", desc: "Analyze partnership dissolution and calculate distribution of assets and liabilities.", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
                  { title: "Profit Distribution Disputes", desc: "Analyze profit allocation and distribution disputes between partners.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { title: "Breach of Fiduciary Duty", desc: "Investigate allegations of breach of fiduciary duty and financial misconduct.", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" },
                  { title: "Misappropriation Investigation", desc: "Trace misappropriated partnership funds and unauthorized distributions.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
                  { title: "Capital Account Analysis", desc: "Analyze partner capital accounts and contributions.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
                  { title: "Buyout Analysis", desc: "Calculate buyout amounts and analyze buyout terms.", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
                  { title: "Partnership Agreement Review", desc: "Analyze partnership agreements and financial provisions.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                  { title: "Damages Calculation", desc: "Calculate economic damages resulting from partnership disputes.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
                  { title: "Expert Witness Testimony", desc: "Court-tested expert witness testimony on partnership disputes and valuations.", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
                ].map((service, index) => (
                  <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                        </svg>
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{service.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Partnership Dispute Analysis Process</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Initial Assessment", desc: "Review partnership agreement, financial records, and identify dispute issues." },
                  { step: "2", title: "Financial Analysis", desc: "Analyze partnership financials, capital accounts, and profit distributions." },
                  { step: "3", title: "Valuation", desc: "Value partnership interests for dissolution or buyout purposes." },
                  { step: "4", title: "Forensic Investigation", desc: "Investigate allegations of misappropriation or breach of fiduciary duty." },
                  { step: "5", title: "Expert Report & Testimony", desc: "Prepare detailed reports and provide expert witness testimony." }
                ].map((item) => (
                  <div key={item.step} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Engel & Engel for Partnership Disputes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">CVA/ABV Credentials</h3>
                  <p className="text-gray-600">Certified in business valuation with extensive partnership valuation experience.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Forensic Investigation</h3>
                  <p className="text-gray-600">Comprehensive forensic investigation capabilities for partnership financial misconduct.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Court-Tested Testimony</h3>
                  <p className="text-gray-600">Extensive experience providing expert witness testimony in partnership litigation.</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Practice Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Business Valuation", href: "/practice-areas/business-valuation" },
                  { name: "Fraud Investigation", href: "/practice-areas/fraud-investigation" },
                  { name: "Economic Damages", href: "/practice-areas/economic-damages" },
                  { name: "Alter Ego", href: "/practice-areas/alter-ego" },
                  { name: "Fraudulent Transfers", href: "/practice-areas/fraudulent-transfers" },
                  { name: "Accounting Malpractice", href: "/practice-areas/accounting-malpractice" }
                ].map((area, index) => (
                  <Link key={index} href={area.href}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-primary-700 hover:text-primary-900">{area.name}</h3>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Partnership Dispute Expert Witness?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact Brandon J. Engel, CPA/ABV/CFF, CVA, MAFF for a consultation on your partnership dispute case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:(310) 277-2220"><Button size="xl" className="bg-white text-primary-900 hover:bg-gray-100">Call (310) 277-2220</Button></a>
              <a href="mailto:brandon@engelandengel.com"><Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-900">Email Brandon</Button></a>
            </div>
            <p className="text-primary-200">Serving Los Angeles, Orange County, and all of California</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

