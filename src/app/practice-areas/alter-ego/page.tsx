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
  title: 'Alter Ego Expert Witness | Forensic Accounting Los Angeles | Engel & Engel',
  description: 'Alter ego forensic accounting expert witness in Los Angeles. Analysis of 28 alter ego factors, undercapitalization, commingling of funds. Court-tested testimony.',
  openGraph: {
    title: 'Alter Ego Expert Witness | Forensic Accounting Los Angeles',
    description: 'Alter ego forensic investigation and expert testimony. 28 alter ego factors analysis.',
    url: 'https://engelandengel.com/practice-areas/alter-ego',
    siteName: 'Engel & Engel LLP',
    images: [{ url: 'https://engelandengel.com/images/og-alter-ego.jpg', width: 1200, height: 630, alt: 'Alter Ego Expert Witness - Los Angeles' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alter Ego Expert Witness | Forensic Accounting Los Angeles',
    description: 'Alter ego forensic investigation and expert testimony.',
    images: ['https://engelandengel.com/images/twitter-alter-ego.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://engelandengel.com/practice-areas/alter-ego' },
}

export default function AlterEgoEnhancedPage() {
  const faqItems = [
    { question: "What are the 28 alter ego factors?", answer: "California courts consider 28 factors when determining alter ego liability, including commingling of funds, undercapitalization, failure to maintain corporate formalities, diversion of assets, and treatment of corporate assets as personal property. We analyze all 28 factors in our forensic investigations." },
    { question: "How do you analyze undercapitalization in alter ego cases?", answer: "We analyze whether the corporation was adequately capitalized at formation and throughout its operations by examining initial capital contributions, debt-to-equity ratios, working capital requirements, and comparison to industry standards." },
    { question: "Can you trace commingled funds in alter ego investigations?", answer: "Yes, we specialize in tracing commingled funds between individuals and corporations, identifying personal use of corporate funds, and documenting patterns of fund transfers that support alter ego claims." },
    { question: "Do you testify as an expert witness in alter ego cases?", answer: "Yes, we provide expert witness testimony in alter ego litigation for both plaintiffs and defendants. Our testimony is based on thorough forensic analysis and is designed to withstand court scrutiny." },
    { question: "What research have you published on alter ego?", answer: "We have published two research publications on alter ego: 'Investigation and Discovery of Alter Ego Factors' and 'The Element of Undercapitalization,' both providing in-depth analysis of alter ego principles." }
  ]

  return (
    <main>
      <SchemaMarkup type="Organization" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, socialMedia: ["https://www.linkedin.com/company/engel-engel-llp"] }} />
      <SchemaMarkup type="LocalBusiness" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, geo: { latitude: "34.0522", longitude: "-118.2437" } }} />
      <SchemaMarkup type="ProfessionalService" data={{ name: "Alter Ego Expert Witness Services", description: "Alter ego forensic accounting and expert witness testimony in Los Angeles", serviceType: "Forensic Accounting - Alter Ego", address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" } }} />
      <SchemaMarkup type="HowTo" data={{
        name: "How to Conduct Alter Ego Forensic Investigation",
        description: "Our proven 5-step process for alter ego forensic analysis",
        steps: [
          { name: "Initial Case Review", text: "Review corporate structure, ownership, and identify potential alter ego relationships." },
          { name: "Document Collection", text: "Gather corporate records, financial statements, bank records, and transaction documentation." },
          { name: "28 Factor Analysis", text: "Analyze all 28 alter ego factors recognized by California courts." },
          { name: "Undercapitalization Analysis", text: "Evaluate corporate capitalization and compare to industry standards." },
          { name: "Expert Report & Testimony", text: "Prepare detailed reports and provide expert witness testimony in alter ego litigation." }
        ]
      }} />
      <SchemaMarkup type="FAQ" data={{ questions: faqItems }} />
      
      <Header />
      
      <section className="pt-16 lg:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom py-20">
          <Breadcrumbs items={[
            { label: 'Practice Areas', href: '/practice-areas' },
            { label: 'Alter Ego', href: '/practice-areas/alter-ego' }
          ]} />
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Alter Ego Expert Witness</h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Forensic accounting expertise in alter ego investigations, 28 factor analysis, and expert witness testimony.
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
                Business litigation often demands the expertise of forensic accountants in matters involving Alter Ego. Engel & Engel has extensive experience in conducting forensic investigations and financial analyses as to the courts' 28 alter ego factors for both plaintiffs and defendants.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Engel & Engel's expertise is highlighted with two Alter Ego research publications. Overall, Engel & Engel has the qualifications and experience to conduct forensic alter ego investigations and opine as to alter ego factors.
              </p>
            </div>

            <div className="mb-12 bg-primary-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Alter Ego Expert Witness in Los Angeles</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Serving Los Angeles County, Orange County, Ventura County, San Bernardino County, Riverside County, and throughout Southern California. Our Los Angeles office provides comprehensive alter ego forensic accounting services for business litigation attorneys throughout the region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you need an alter ego expert for cases in downtown Los Angeles, Santa Monica, Beverly Hills, Pasadena, Irvine, San Diego, or anywhere in California, our team is ready to assist with alter ego investigations, undercapitalization analysis, and expert witness testimony.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How Engel & Engel Helps Litigation Attorneys in Alter Ego Matters</h2>
              <p className="text-lg text-gray-700 mb-8">When the stakes are high, Engel & Engel can serve as your expert in connection with the following:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Analysis of Alter Ego Factors", desc: "Comprehensive analysis of all 28 alter ego factors recognized by California courts.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
                  { title: "Analysis of Undercapitalization", desc: "Evaluate corporate capitalization and compare to industry standards and requirements.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { title: "Commingling of Funds", desc: "Trace and document commingling of personal and corporate funds.", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
                  { title: "Diversion of Corporate Funds", desc: "Investigate and trace diversion of corporate assets for personal use.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
                  { title: "Separate Books and Records", desc: "Analyze whether separate books and records were maintained for the corporation.", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
                  { title: "Separate Bank Accounts", desc: "Verify maintenance of separate bank accounts and proper fund segregation.", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
                  { title: "Separate Employees and Offices", desc: "Analyze whether the corporation maintained separate employees and office space.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                  { title: "Failure to Maintain Corporate Formalities", desc: "Document failures to hold meetings, maintain minutes, or follow corporate procedures.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                  { title: "Treatment of Corporate Assets as Personal", desc: "Identify instances where corporate assets were treated as personal property.", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                  { title: "Disregard of Legal Formalities", desc: "Analyze patterns of disregarding corporate legal formalities and requirements.", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" },
                  { title: "Expert Witness Testimony", desc: "Court-tested expert witness testimony on alter ego factors and undercapitalization.", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Alter Ego Investigation Process</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Initial Case Review", desc: "Review corporate structure, ownership, and identify potential alter ego relationships." },
                  { step: "2", title: "Document Collection", desc: "Gather corporate records, financial statements, bank records, and transaction documentation." },
                  { step: "3", title: "28 Factor Analysis", desc: "Analyze all 28 alter ego factors recognized by California courts." },
                  { step: "4", title: "Undercapitalization Analysis", desc: "Evaluate corporate capitalization and compare to industry standards." },
                  { step: "5", title: "Expert Report & Testimony", desc: "Prepare detailed reports and provide expert witness testimony in alter ego litigation." }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Engel & Engel for Alter Ego Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Published Research</h3>
                  <p className="text-gray-600">Two published research publications on alter ego factors and undercapitalization.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">28 Factor Expertise</h3>
                  <p className="text-gray-600">Comprehensive analysis of all 28 alter ego factors recognized by California courts.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Court-Tested Testimony</h3>
                  <p className="text-gray-600">Extensive experience providing expert witness testimony in alter ego litigation.</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Publications</h2>
              <div className="space-y-4">
                <Link href="/publications">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer hover:border-primary-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-primary-700 hover:text-primary-800 flex items-center justify-between">
                        Investigation & Discovery of Alter Ego Factors
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </h3>
                      <p className="text-gray-600 mt-2">Comprehensive analysis of the 28 alter ego factors and investigative techniques for forensic accountants.</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/publications">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer hover:border-primary-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-primary-700 hover:text-primary-800 flex items-center justify-between">
                        Alter Ego: "The Element of Undercapitalization"
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </h3>
                      <p className="text-gray-600 mt-2">In-depth examination of undercapitalization as a key factor in alter ego determinations.</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>

              <div className="mt-8 text-center">
                <Link href="/publications">
                  <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                    View All Publications
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Practice Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Fraudulent Transfers", href: "/practice-areas/fraudulent-transfers" },
                  { name: "Partnership Disputes", href: "/practice-areas/partnership-disputes" },
                  { name: "Business Valuation", href: "/practice-areas/business-valuation" },
                  { name: "Fraud Investigation", href: "/practice-areas/fraud-investigation" },
                  { name: "Economic Damages", href: "/practice-areas/economic-damages" },
                  { name: "Bankruptcy & Insolvency", href: "/practice-areas/bankruptcy-insolvency" }
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need an Alter Ego Expert Witness?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact Brandon J. Engel, CPA/ABV/CFF, CVA, MAFF for a consultation on your alter ego case.
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

