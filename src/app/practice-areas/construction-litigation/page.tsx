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
  title: 'Construction Litigation Expert Witness | Los Angeles | Engel & Engel LLP',
  description: 'Construction defect forensic accounting for contractors, developers, owners. Cost overruns, delays, change orders. Expert witness testimony in Los Angeles.',
  openGraph: {
    title: 'Construction Litigation Expert Witness | Los Angeles',
    description: 'Construction defect forensic accounting. Cost overruns, delays, change orders.',
    url: 'https://engelandengel.com/practice-areas/construction-litigation',
    siteName: 'Engel & Engel LLP',
    images: [{ url: 'https://engelandengel.com/images/og-construction-litigation.jpg', width: 1200, height: 630, alt: 'Construction Litigation Expert Witness Services - Los Angeles' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Litigation Expert Witness | Los Angeles',
    description: 'Construction defect forensic accounting. Expert witness testimony.',
    images: ['https://engelandengel.com/images/twitter-construction-litigation.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://engelandengel.com/practice-areas/construction-litigation' },
}

export default function ConstructionLitigationEnhancedPage() {
  const faqItems = [
    { question: "What types of construction disputes require forensic accounting?", answer: "Construction disputes involving cost overruns, delays, change orders, mechanic's liens, payment disputes, and construction defects often require forensic accounting to analyze project costs, schedules, and financial impacts." },
    { question: "Can you analyze construction delay claims?", answer: "Yes, we analyze construction delays, calculate delay damages, review critical path schedules, and determine responsibility for project delays and associated costs." },
    { question: "Do you work for contractors, owners, or developers?", answer: "We work for all parties in construction litigation - contractors, subcontractors, owners, developers, and sureties. Our objective is to provide accurate forensic analysis regardless of which party retains us." },
    { question: "What is your experience with construction defect cases?", answer: "We have extensive experience analyzing construction defect claims, quantifying repair costs, evaluating contractor performance, and providing expert testimony in construction defect litigation." },
    { question: "Can you help with mechanic's lien disputes?", answer: "Yes, we analyze mechanic's lien claims, verify amounts owed, trace payments, and determine proper lien amounts in construction payment disputes." }
  ]

  return (
    <main>
      <SchemaMarkup type="Organization" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, socialMedia: ["https://www.linkedin.com/company/engel-engel-llp"] }} />
      <SchemaMarkup type="LocalBusiness" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, geo: { latitude: "34.0522", longitude: "-118.2437" } }} />
      <SchemaMarkup type="ProfessionalService" data={{ name: "Construction Litigation Expert Witness Services", description: "Construction defect forensic accounting for contractors, developers, owners in Los Angeles", serviceType: "Forensic Accounting - Construction Litigation", address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" } }} />
      <SchemaMarkup type="HowTo" data={{
        name: "How to Conduct Construction Forensic Analysis",
        description: "Our proven 5-step process for construction litigation forensic accounting",
        steps: [
          { name: "Initial Project Review", text: "Review construction contracts, change orders, schedules, and identify key financial disputes." },
          { name: "Document Collection", text: "Gather project financial records, payment applications, lien waivers, and cost documentation." },
          { name: "Cost Analysis", text: "Analyze project costs, change orders, cost overruns, and payment histories." },
          { name: "Delay & Damage Analysis", text: "Analyze construction delays, calculate damages, and determine responsibility." },
          { name: "Expert Report & Testimony", text: "Prepare detailed reports and provide expert witness testimony in construction litigation." }
        ]
      }} />
      <SchemaMarkup type="FAQ" data={{ questions: faqItems }} />
      
      <Header />
      
      <section className="pt-16 lg:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom py-20">
          <Breadcrumbs items={[
            { label: 'Practice Areas', href: '/practice-areas' },
            { label: 'Construction Litigation', href: '/practice-areas/construction-litigation' }
          ]} />
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Construction Litigation</h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Forensic accounting expertise for construction defects, delays, cost overruns, and payment disputes.
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
                Construction litigators often require the expertise of a forensic accountant when evaluating financial issues in construction disputes. When financial issues arise for contractors, subcontractors, developers, owners, and sureties, Engel & Engel brings significant experience in investigating and analyzing complex construction accounting issues.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our construction litigation experience includes analyzing cost overruns, construction delays, change order disputes, mechanic's liens, payment disputes, and construction defect claims. Overall, Engel & Engel has the qualifications and experience to conduct a forensic analysis that is consistent with established construction accounting principles and able to withstand the scrutiny of the court.
              </p>
            </div>

            <div className="mb-12 bg-primary-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Construction Litigation Expert Witness in Los Angeles</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Serving Los Angeles County, Orange County, Ventura County, San Bernardino County, Riverside County, and throughout Southern California. Our Los Angeles office provides comprehensive construction forensic accounting services for construction attorneys, contractors, and developers throughout the region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you need a construction litigation expert for cases in downtown Los Angeles, Santa Monica, Beverly Hills, Pasadena, Irvine, San Diego, or anywhere in California, our team is ready to assist with construction defects, delays, cost overruns, and all types of construction financial disputes.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Forensic Accounting Services</h2>
              <p className="text-lg text-gray-700 mb-6">Our construction litigation services often complement other forensic accounting specialties:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/practice-areas/real-estate-litigation"><Card className="h-full hover:shadow-lg transition-shadow cursor-pointer"><CardHeader><CardTitle className="text-lg text-primary-600">Real Estate Litigation</CardTitle></CardHeader><CardContent><p className="text-gray-600 text-sm">Construction defects in real estate development projects.</p></CardContent></Card></Link>
                <Link href="/practice-areas/economic-damages"><Card className="h-full hover:shadow-lg transition-shadow cursor-pointer"><CardHeader><CardTitle className="text-lg text-primary-600">Economic Damages</CardTitle></CardHeader><CardContent><p className="text-gray-600 text-sm">Calculate delay damages and cost overrun losses.</p></CardContent></Card></Link>
                <Link href="/practice-areas/fraud-investigation"><Card className="h-full hover:shadow-lg transition-shadow cursor-pointer"><CardHeader><CardTitle className="text-lg text-primary-600">Fraud Investigation</CardTitle></CardHeader><CardContent><p className="text-gray-600 text-sm">Investigate construction fraud and payment diversion.</p></CardContent></Card></Link>
                <Link href="/practice-areas/partnership-disputes"><Card className="h-full hover:shadow-lg transition-shadow cursor-pointer"><CardHeader><CardTitle className="text-lg text-primary-600">Partnership Disputes</CardTitle></CardHeader><CardContent><p className="text-gray-600 text-sm">Construction partnership and joint venture disputes.</p></CardContent></Card></Link>
                <Link href="/practice-areas/business-valuation"><Card className="h-full hover:shadow-lg transition-shadow cursor-pointer"><CardHeader><CardTitle className="text-lg text-primary-600">Business Valuation</CardTitle></CardHeader><CardContent><p className="text-gray-600 text-sm">Valuation of construction companies and contractors.</p></CardContent></Card></Link>
                <Link href="/practice-areas/bankruptcy-insolvency"><Card className="h-full hover:shadow-lg transition-shadow cursor-pointer"><CardHeader><CardTitle className="text-lg text-primary-600">Bankruptcy & Insolvency</CardTitle></CardHeader><CardContent><p className="text-gray-600 text-sm">Construction company bankruptcy and insolvency analysis.</p></CardContent></Card></Link>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How Engel & Engel Helps Construction Litigation Attorneys</h2>
              <p className="text-lg text-gray-700 mb-8">When the stakes are high, Engel & Engel can serve as your expert in connection with the following:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Cost Overrun Analysis", desc: "Analyze construction cost overruns, compare budgets to actual costs, and determine responsibility.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "blue" },
                  { title: "Construction Delay Analysis", desc: "Analyze project delays, review critical path schedules, and calculate delay damages.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", color: "green" },
                  { title: "Change Order Disputes", desc: "Analyze change orders, verify scope changes, and determine proper pricing.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", color: "purple" },
                  { title: "Mechanic's Lien Analysis", desc: "Analyze mechanic's lien claims, verify amounts owed, and trace payments.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", color: "red" },
                  { title: "Payment Dispute Analysis", desc: "Analyze payment applications, lien waivers, and determine amounts properly due.", icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z", color: "indigo" },
                  { title: "Construction Defect Claims", desc: "Analyze construction defect claims, quantify repair costs, and evaluate contractor performance.", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z", color: "orange" },
                  { title: "Contractor Performance Analysis", desc: "Evaluate contractor performance, analyze work quality, and determine contract compliance.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", color: "teal" },
                  { title: "Project Cost Analysis", desc: "Analyze project costs, review cost accounting, and verify proper cost allocation.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", color: "pink" },
                ].map((item, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                        <svg className={`w-6 h-6 text-${item.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent><p className="text-gray-600 text-sm">{item.desc}</p></CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Construction Forensic Process</h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="space-y-8">
                  {[
                    { num: "1", title: "Initial Project Review", desc: "Review construction contracts, change orders, schedules, and identify key financial disputes." },
                    { num: "2", title: "Document Collection", desc: "Gather project financial records, payment applications, lien waivers, and cost documentation." },
                    { num: "3", title: "Cost Analysis", desc: "Analyze project costs, change orders, cost overruns, and payment histories." },
                    { num: "4", title: "Delay & Damage Analysis", desc: "Analyze construction delays, calculate damages, and determine responsibility." },
                    { num: "5", title: "Expert Report & Testimony", desc: "Prepare detailed reports and provide expert witness testimony in construction litigation." }
                  ].map((step) => (
                    <div key={step.num} className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{step.num}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Engel & Engel</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Construction Experience", desc: "Extensive experience analyzing complex construction accounting issues and disputes.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                  { title: "Delay Analysis", desc: "Expertise in construction delay analysis, critical path review, and delay damage calculations.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { title: "Court-Tested", desc: "Forensic analysis consistent with construction accounting principles that withstands court scrutiny.", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <FAQ items={faqItems} />
            </div>

            <div className="bg-primary-50 rounded-2xl p-8 text-center mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Construction Litigation Expert?</h3>
              <p className="text-lg text-gray-700 mb-6">For additional information about Engel & Engel's Forensic Accounting Services or a consultation, please contact:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center">
                  <p className="font-semibold text-gray-900">Brandon J. Engel, CPA, CFE</p>
                  <p className="text-gray-600">brandon@engelandengel.com</p>
                  <p className="text-gray-600">(310) 277-2220</p>
                </div>
                <div className="flex gap-3">
                  <a href="tel:(310) 277-2220"><Button className="bg-primary-600 hover:bg-primary-700">Call Now</Button></a>
                  <Link href="/contact"><Button variant="outline">Contact Us</Button></Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

