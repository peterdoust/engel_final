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
  title: 'Employment Litigation Expert Witness | Forensic Accounting Los Angeles | Engel & Engel',
  description: 'Employment litigation forensic accounting expert witness in Los Angeles. Wage & hour claims, wrongful termination damages, discrimination cases. Court-tested testimony.',
  openGraph: {
    title: 'Employment Litigation Expert Witness | Forensic Accounting Los Angeles',
    description: 'Employment litigation forensic investigation and expert testimony. Wage & hour, wrongful termination damages.',
    url: 'https://engelandengel.com/practice-areas/employment-litigation',
    siteName: 'Engel & Engel LLP',
    images: [{ url: 'https://engelandengel.com/images/og-employment-litigation.jpg', width: 1200, height: 630, alt: 'Employment Litigation Expert Witness - Los Angeles' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Employment Litigation Expert Witness | Forensic Accounting Los Angeles',
    description: 'Employment litigation forensic investigation and expert testimony.',
    images: ['https://engelandengel.com/images/twitter-employment-litigation.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://engelandengel.com/practice-areas/employment-litigation' },
}

export default function EmploymentLitigationEnhancedPage() {
  const faqItems = [
    { question: "What types of employment litigation cases do you handle?", answer: "We provide forensic accounting services for wage and hour claims, wrongful termination, discrimination cases, retaliation claims, and executive compensation disputes. Our expertise includes calculating economic damages, analyzing payroll records, and quantifying lost wages and benefits." },
    { question: "How do you calculate damages in wrongful termination cases?", answer: "We calculate wrongful termination damages by analyzing lost wages, benefits, bonuses, stock options, and other compensation. We consider mitigation efforts, comparable employment opportunities, and project future losses based on career trajectory and industry standards." },
    { question: "Can you analyze wage and hour claims?", answer: "Yes, we specialize in analyzing wage and hour claims including unpaid overtime, meal and rest break violations, misclassification issues, and off-the-clock work. We review time records, payroll data, and employment policies to quantify damages." },
    { question: "Do you testify as an expert witness in employment cases?", answer: "Yes, we provide expert witness testimony in employment litigation for both plaintiffs and defendants. Our testimony covers economic damages calculations, lost earnings analysis, and forensic examination of employment records." },
    { question: "What research have you published on employment litigation?", answer: "We have published research on 'Calculation of Economic Damages in Wrongful Termination Cases,' providing comprehensive analysis of damages methodologies in employment litigation." }
  ]

  return (
    <main>
      <SchemaMarkup type="Organization" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, socialMedia: ["https://www.linkedin.com/company/engel-engel-llp"] }} />
      <SchemaMarkup type="LocalBusiness" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, geo: { latitude: "34.0522", longitude: "-118.2437" } }} />
      <SchemaMarkup type="ProfessionalService" data={{ name: "Employment Litigation Expert Witness Services", description: "Employment litigation forensic accounting and expert witness testimony in Los Angeles", serviceType: "Forensic Accounting - Employment Litigation", address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" } }} />
      <SchemaMarkup type="HowTo" data={{
        name: "How to Calculate Employment Litigation Damages",
        description: "Our proven 5-step process for employment litigation damages analysis",
        steps: [
          { name: "Initial Case Review", text: "Review employment records, termination documents, and identify damages issues." },
          { name: "Data Collection", text: "Gather payroll records, benefits documentation, and compensation history." },
          { name: "Damages Calculation", text: "Calculate lost wages, benefits, bonuses, and other economic damages." },
          { name: "Mitigation Analysis", text: "Analyze mitigation efforts and comparable employment opportunities." },
          { name: "Expert Report & Testimony", text: "Prepare detailed reports and provide expert witness testimony in employment litigation." }
        ]
      }} />
      <SchemaMarkup type="FAQ" data={{ questions: faqItems }} />
      
      <Header />
      
      <section className="pt-16 lg:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom py-20">
          <Breadcrumbs items={[
            { label: 'Practice Areas', href: '/practice-areas' },
            { label: 'Employment Litigation', href: '/practice-areas/employment-litigation' }
          ]} />
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Employment Litigation Expert Witness</h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Forensic accounting expertise in employment litigation, wage & hour claims, and wrongful termination damages.
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
                Employment litigation often demands the expertise of forensic accountants in calculating economic damages and analyzing employment records. Engel & Engel has extensive experience in conducting forensic investigations and financial analyses in wage and hour claims, wrongful termination, discrimination cases, and executive compensation disputes for both plaintiffs and defendants.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Engel & Engel's expertise is highlighted with published research on calculating economic damages in wrongful termination cases. Overall, Engel & Engel has the qualifications and experience to conduct forensic employment litigation investigations and opine as to economic damages.
              </p>
            </div>

            <div className="mb-12 bg-primary-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Employment Litigation Expert Witness in Los Angeles</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Serving Los Angeles County, Orange County, Ventura County, San Bernardino County, Riverside County, and throughout Southern California. Our Los Angeles office provides comprehensive employment litigation forensic accounting services for employment attorneys throughout the region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you need an employment litigation expert for cases in downtown Los Angeles, Santa Monica, Beverly Hills, Pasadena, Irvine, San Diego, or anywhere in California, our team is ready to assist with damages calculations, wage & hour analysis, and expert witness testimony.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How Engel & Engel Helps Employment Attorneys</h2>
              <p className="text-lg text-gray-700 mb-8">When the stakes are high, Engel & Engel can serve as your expert in connection with the following:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Wrongful Termination Damages", desc: "Calculate economic damages including lost wages, benefits, bonuses, and future earnings.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                  { title: "Wage & Hour Claims", desc: "Analyze unpaid overtime, meal breaks, rest breaks, and off-the-clock work claims.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { title: "Discrimination & Retaliation", desc: "Quantify economic damages in discrimination and retaliation cases.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                  { title: "Executive Compensation Disputes", desc: "Analyze complex executive compensation including stock options, deferred compensation, and bonuses.", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                  { title: "Misclassification Analysis", desc: "Evaluate employee vs. independent contractor misclassification and calculate damages.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
                  { title: "Expert Witness Testimony", desc: "Court-tested expert witness testimony on employment damages and wage & hour issues.", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Employment Litigation Process</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Initial Case Review", desc: "Review employment records, termination documents, and identify damages issues." },
                  { step: "2", title: "Data Collection", desc: "Gather payroll records, benefits documentation, and compensation history." },
                  { step: "3", title: "Damages Calculation", desc: "Calculate lost wages, benefits, bonuses, and other economic damages." },
                  { step: "4", title: "Mitigation Analysis", desc: "Analyze mitigation efforts and comparable employment opportunities." },
                  { step: "5", title: "Expert Report & Testimony", desc: "Prepare detailed reports and provide expert witness testimony in employment litigation." }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Engel & Engel for Employment Litigation</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Published Research</h3>
                  <p className="text-gray-600">Published research on calculating economic damages in wrongful termination cases.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Damages Expertise</h3>
                  <p className="text-gray-600">Comprehensive expertise in calculating employment damages including lost wages and benefits.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Court-Tested Testimony</h3>
                  <p className="text-gray-600">Extensive experience providing expert witness testimony in employment litigation.</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Publications</h2>
              <Link href="/publications">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer hover:border-primary-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-700 hover:text-primary-800 flex items-center justify-between mb-2">
                      Framework for the Calculation of Employment Damages
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </h3>
                    <p className="text-gray-600">Comprehensive analysis of damages methodologies in employment litigation including lost wages, benefits, and mitigation.</p>
                  </CardContent>
                </Card>
              </Link>

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
                  { name: "Economic Damages", href: "/practice-areas/economic-damages" },
                  { name: "Business Valuation", href: "/practice-areas/business-valuation" },
                  { name: "Fraud Investigation", href: "/practice-areas/fraud-investigation" },
                  { name: "Partnership Disputes", href: "/practice-areas/partnership-disputes" },
                  { name: "Accounting Malpractice", href: "/practice-areas/accounting-malpractice" },
                  { name: "Personal Injury", href: "/practice-areas/personal-injury" }
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need an Employment Litigation Expert Witness?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact Brandon J. Engel, CPA/ABV/CFF, CVA, MAFF for a consultation on your employment litigation case.
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

