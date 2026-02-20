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
  title: 'Accounting Malpractice Expert Witness | Forensic Accounting Los Angeles | Engel & Engel',
  description: 'Accounting malpractice expert witness in Los Angeles. Professional standards, breach of duty, causation analysis. Court-tested testimony.',
  openGraph: {
    title: 'Accounting Malpractice Expert Witness | Forensic Accounting Los Angeles',
    description: 'Accounting malpractice expert testimony. Professional standards and damages analysis.',
    url: 'https://engelandengel.com/practice-areas/accounting-malpractice',
    siteName: 'Engel & Engel LLP',
    images: [{ url: 'https://engelandengel.com/images/og-accounting-malpractice.jpg', width: 1200, height: 630, alt: 'Accounting Malpractice Expert Witness - Los Angeles' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accounting Malpractice Expert Witness | Forensic Accounting Los Angeles',
    description: 'Accounting malpractice expert testimony.',
    images: ['https://engelandengel.com/images/twitter-accounting-malpractice.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://engelandengel.com/practice-areas/accounting-malpractice' },
}

export default function AccountingMalpracticeEnhancedPage() {
  const faqItems = [
    { question: "What is accounting malpractice?", answer: "Accounting malpractice occurs when an accountant fails to exercise the degree of care, skill, and diligence that a reasonably prudent accountant would exercise under similar circumstances, resulting in damages to the client. This can include errors in tax preparation, audit failures, negligent advice, and breach of professional standards." },
    { question: "What professional standards do you evaluate in malpractice cases?", answer: "We evaluate compliance with Generally Accepted Accounting Principles (GAAP), Generally Accepted Auditing Standards (GAAS), Statements on Standards for Accounting and Review Services (SSARS), and other professional standards issued by the AICPA and state boards of accountancy." },
    { question: "How do you determine breach of duty in accounting malpractice?", answer: "We analyze whether the accountant's conduct fell below the standard of care by reviewing the work performed, comparing it to professional standards, and evaluating whether a reasonably prudent accountant would have acted differently under the same circumstances." },
    { question: "Can you calculate damages in accounting malpractice cases?", answer: "Yes, we calculate damages resulting from accounting malpractice including tax penalties, interest, lost business opportunities, additional professional fees, and other economic losses directly caused by the accountant's negligence." },
    { question: "Do you testify as an expert witness in accounting malpractice cases?", answer: "Yes, we provide expert witness testimony in accounting malpractice litigation for both plaintiffs and defendants. Our testimony covers professional standards, breach of duty, causation, and damages." }
  ]

  return (
    <main>
      <SchemaMarkup type="Organization" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, socialMedia: ["https://www.linkedin.com/company/engel-engel-llp"] }} />
      <SchemaMarkup type="LocalBusiness" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, geo: { latitude: "34.0522", longitude: "-118.2437" } }} />
      <SchemaMarkup type="ProfessionalService" data={{ name: "Accounting Malpractice Expert Witness Services", description: "Accounting malpractice expert witness testimony in Los Angeles", serviceType: "Forensic Accounting - Accounting Malpractice", address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" } }} />
      <SchemaMarkup type="HowTo" data={{
        name: "How to Evaluate Accounting Malpractice Claims",
        description: "Our proven 5-step process for accounting malpractice analysis",
        steps: [
          { name: "Initial Case Review", text: "Review accounting work, engagement letters, and identify potential malpractice issues." },
          { name: "Standards Analysis", text: "Evaluate compliance with professional standards (GAAP, GAAS, SSARS)." },
          { name: "Breach Determination", text: "Determine whether the accountant breached the standard of care." },
          { name: "Causation & Damages", text: "Analyze causation and calculate damages resulting from the breach." },
          { name: "Expert Report & Testimony", text: "Prepare detailed reports and provide expert witness testimony." }
        ]
      }} />
      <SchemaMarkup type="FAQ" data={{ questions: faqItems }} />
      
      <Header />
      
      <section className="pt-16 lg:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom py-20">
          <Breadcrumbs items={[
            { label: 'Practice Areas', href: '/practice-areas' },
            { label: 'Accounting Malpractice', href: '/practice-areas/accounting-malpractice' }
          ]} />
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Accounting Malpractice Expert Witness</h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Expert witness testimony in accounting malpractice cases. Professional standards, breach of duty, and damages analysis.
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
                Accounting malpractice litigation demands the expertise of forensic accountants who understand professional standards and can evaluate whether an accountant breached their duty of care. Engel & Engel has extensive experience in conducting forensic investigations and providing expert testimony in accounting malpractice cases for both plaintiffs and defendants.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our expertise includes evaluating compliance with GAAP, GAAS, and other professional standards, determining breach of duty, analyzing causation, and calculating damages. We have the qualifications and experience to serve as expert witnesses in accounting malpractice litigation.
              </p>
            </div>

            <div className="mb-12 bg-primary-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Accounting Malpractice Expert Witness in Los Angeles</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Serving Los Angeles County, Orange County, Ventura County, San Bernardino County, Riverside County, and throughout Southern California. Our Los Angeles office provides comprehensive accounting malpractice expert witness services for attorneys throughout the region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you need an accounting malpractice expert for cases in downtown Los Angeles, Santa Monica, Beverly Hills, Pasadena, Irvine, San Diego, or anywhere in California, our team is ready to assist with professional standards analysis and expert witness testimony.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How Engel & Engel Helps in Accounting Malpractice Cases</h2>
              <p className="text-lg text-gray-700 mb-8">When the stakes are high, Engel & Engel can serve as your expert in connection with the following:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Professional Standards Analysis", desc: "Evaluate compliance with GAAP, GAAS, SSARS, and other professional standards.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                  { title: "Audit Failure Analysis", desc: "Analyze audit failures and determine whether auditors met professional standards.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
                  { title: "Tax Malpractice", desc: "Evaluate tax preparation errors, missed deductions, and negligent tax advice.", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
                  { title: "Breach of Duty Analysis", desc: "Determine whether the accountant breached the standard of care.", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" },
                  { title: "Causation Analysis", desc: "Analyze whether the accountant's breach caused the claimed damages.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
                  { title: "Damages Calculation", desc: "Calculate damages including tax penalties, interest, and other economic losses.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { title: "Expert Witness Testimony", desc: "Court-tested expert witness testimony on accounting malpractice and professional standards.", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Accounting Malpractice Analysis Process</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Initial Case Review", desc: "Review accounting work, engagement letters, and identify potential malpractice issues." },
                  { step: "2", title: "Standards Analysis", desc: "Evaluate compliance with professional standards (GAAP, GAAS, SSARS)." },
                  { step: "3", title: "Breach Determination", desc: "Determine whether the accountant breached the standard of care." },
                  { step: "4", title: "Causation & Damages", desc: "Analyze causation and calculate damages resulting from the breach." },
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Engel & Engel for Accounting Malpractice Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">CPA Credentials</h3>
                  <p className="text-gray-600">Licensed CPAs with deep understanding of professional standards and accounting practices.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Standards Expertise</h3>
                  <p className="text-gray-600">Comprehensive knowledge of GAAP, GAAS, SSARS, and professional accounting standards.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Court-Tested Testimony</h3>
                  <p className="text-gray-600">Extensive experience providing expert witness testimony in accounting malpractice litigation.</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Practice Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Fraud Investigation", href: "/practice-areas/fraud-investigation" },
                  { name: "Business Valuation", href: "/practice-areas/business-valuation" },
                  { name: "Economic Damages", href: "/practice-areas/economic-damages" },
                  { name: "Partnership Disputes", href: "/practice-areas/partnership-disputes" },
                  { name: "Bankruptcy & Insolvency", href: "/practice-areas/bankruptcy-insolvency" },
                  { name: "Alter Ego", href: "/practice-areas/alter-ego" }
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need an Accounting Malpractice Expert Witness?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact Brandon J. Engel, CPA/ABV/CFF, CVA, MAFF for a consultation on your accounting malpractice case.
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

