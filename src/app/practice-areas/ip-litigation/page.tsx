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
  title: 'Intellectual Property Litigation Expert Witness | Forensic Accounting Los Angeles | Engel & Engel',
  description: 'IP litigation forensic accounting expert witness in Los Angeles. Lost profits, reasonable royalty, unjust enrichment damages. Court-tested testimony.',
  openGraph: {
    title: 'Intellectual Property Litigation Expert Witness | Forensic Accounting Los Angeles',
    description: 'IP litigation economic damages analysis and expert testimony.',
    url: 'https://engelandengel.com/practice-areas/ip-litigation',
    siteName: 'Engel & Engel LLP',
    images: [{ url: 'https://engelandengel.com/images/og-ip-litigation.jpg', width: 1200, height: 630, alt: 'IP Litigation Expert Witness - Los Angeles' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intellectual Property Litigation Expert Witness | Forensic Accounting Los Angeles',
    description: 'IP litigation economic damages analysis and expert testimony.',
    images: ['https://engelandengel.com/images/twitter-ip-litigation.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://engelandengel.com/practice-areas/ip-litigation' },
}

export default function IPLitigationEnhancedPage() {
  const faqItems = [
    { question: "What types of IP litigation damages do you calculate?", answer: "We calculate economic damages in patent, trademark, copyright, and trade secret litigation including lost profits, reasonable royalty, unjust enrichment, price erosion, and market share loss damages." },
    { question: "How do you calculate lost profits in IP cases?", answer: "We calculate lost profits using the Panduit test or other appropriate methodologies, analyzing demand for the patented product, absence of acceptable non-infringing substitutes, manufacturing and marketing capability, and the amount of profit that would have been made." },
    { question: "What is a reasonable royalty analysis?", answer: "A reasonable royalty analysis determines the royalty rate that would have been negotiated in a hypothetical negotiation between a willing licensor and licensee. We consider the Georgia-Pacific factors and industry licensing practices." },
    { question: "Can you analyze trade secret misappropriation damages?", answer: "Yes, we calculate damages for trade secret misappropriation including lost profits, unjust enrichment, and reasonable royalty. We analyze the economic value of the trade secret and the financial impact of its misappropriation." },
    { question: "Do you testify as an expert witness in IP litigation?", answer: "Yes, we provide expert witness testimony in intellectual property litigation. Our testimony covers economic damages calculations, lost profits analysis, reasonable royalty determinations, and financial aspects of IP disputes." }
  ]

  return (
    <main>
      <SchemaMarkup type="Organization" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, socialMedia: ["https://www.linkedin.com/company/engel-engel-llp"] }} />
      <SchemaMarkup type="LocalBusiness" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, geo: { latitude: "34.0522", longitude: "-118.2437" } }} />
      <SchemaMarkup type="ProfessionalService" data={{ name: "IP Litigation Expert Witness Services", description: "Intellectual property litigation forensic accounting and expert witness testimony in Los Angeles", serviceType: "Forensic Accounting - IP Litigation", address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" } }} />
      <SchemaMarkup type="HowTo" data={{
        name: "How to Calculate IP Litigation Damages",
        description: "Our proven 5-step process for IP damages analysis",
        steps: [
          { name: "Initial Case Review", text: "Review IP rights, infringement allegations, and identify damages theories." },
          { name: "Lost Profits Analysis", text: "Calculate lost profits using Panduit or other appropriate methodologies." },
          { name: "Reasonable Royalty", text: "Determine reasonable royalty rates using Georgia-Pacific factors." },
          { name: "Alternative Damages", text: "Analyze unjust enrichment, price erosion, and other damages theories." },
          { name: "Expert Report & Testimony", text: "Prepare detailed reports and provide expert witness testimony." }
        ]
      }} />
      <SchemaMarkup type="FAQ" data={{ questions: faqItems }} />
      
      <Header />
      
      <section className="pt-16 lg:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom py-20">
          <Breadcrumbs items={[
            { label: 'Practice Areas', href: '/practice-areas' },
            { label: 'IP Litigation', href: '/practice-areas/ip-litigation' }
          ]} />
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Intellectual Property Litigation Expert Witness</h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Forensic accounting expertise in IP litigation damages, lost profits, and reasonable royalty analysis.
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
                Intellectual property litigation demands the expertise of forensic accountants to accurately quantify economic damages. Engel & Engel has extensive experience in conducting economic damages analyses for patent, trademark, copyright, and trade secret litigation for both plaintiffs and defendants.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our expertise includes calculating lost profits, determining reasonable royalty rates, analyzing unjust enrichment, and evaluating price erosion damages. We have the qualifications and experience to serve as expert witnesses in IP litigation.
              </p>
            </div>

            <div className="mb-12 bg-primary-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">IP Litigation Expert Witness in Los Angeles</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Serving Los Angeles County, Orange County, Ventura County, San Bernardino County, Riverside County, and throughout Southern California. Our Los Angeles office provides comprehensive IP litigation forensic accounting services for intellectual property attorneys throughout the region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you need an IP litigation expert for cases in downtown Los Angeles, Santa Monica, Beverly Hills, Pasadena, Irvine, San Diego, or anywhere in California, our team is ready to assist with damages calculations and expert witness testimony.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How Engel & Engel Helps in IP Litigation</h2>
              <p className="text-lg text-gray-700 mb-8">When the stakes are high, Engel & Engel can serve as your expert in connection with the following:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Lost Profits Analysis", desc: "Calculate lost profits using Panduit test and other methodologies.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
                  { title: "Reasonable Royalty", desc: "Determine reasonable royalty rates using Georgia-Pacific factors.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { title: "Patent Infringement Damages", desc: "Calculate economic damages in patent infringement cases.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                  { title: "Trade Secret Misappropriation", desc: "Analyze damages for trade secret misappropriation and unjust enrichment.", icon: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" },
                  { title: "Trademark Infringement", desc: "Calculate damages in trademark infringement and dilution cases.", icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" },
                  { title: "Copyright Infringement", desc: "Analyze economic damages in copyright infringement litigation.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                  { title: "Price Erosion Analysis", desc: "Analyze price erosion damages caused by infringement.", icon: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" },
                  { title: "Expert Witness Testimony", desc: "Court-tested expert witness testimony on IP litigation damages.", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our IP Litigation Damages Analysis Process</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Initial Case Review", desc: "Review IP rights, infringement allegations, and identify damages theories." },
                  { step: "2", title: "Lost Profits Analysis", desc: "Calculate lost profits using Panduit or other appropriate methodologies." },
                  { step: "3", title: "Reasonable Royalty", desc: "Determine reasonable royalty rates using Georgia-Pacific factors." },
                  { step: "4", title: "Alternative Damages", desc: "Analyze unjust enrichment, price erosion, and other damages theories." },
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Engel & Engel for IP Litigation</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">CPA/ABV/CFF Credentials</h3>
                  <p className="text-gray-600">Certified in business valuation and financial forensics with IP damages expertise.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Damages Expertise</h3>
                  <p className="text-gray-600">Comprehensive expertise in calculating IP litigation economic damages.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Court-Tested Testimony</h3>
                  <p className="text-gray-600">Extensive experience providing expert witness testimony in IP litigation.</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Practice Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Economic Damages", href: "/practice-areas/economic-damages" },
                  { name: "Business Valuation", href: "/practice-areas/business-valuation" },
                  { name: "Fraud Investigation", href: "/practice-areas/fraud-investigation" },
                  { name: "Business Interruption", href: "/practice-areas/business-interruption" },
                  { name: "Partnership Disputes", href: "/practice-areas/partnership-disputes" },
                  { name: "Employment Litigation", href: "/practice-areas/employment-litigation" }
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need an IP Litigation Expert Witness?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact Brandon J. Engel, CPA/ABV/CFF, CVA, MAFF for a consultation on your IP litigation case.
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

