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
  title: 'Fraudulent Transfer Expert Witness | Forensic Accounting Los Angeles | Engel & Engel',
  description: 'Fraudulent transfer forensic accounting expert witness in Los Angeles. UFTA/UVTA analysis, badges of fraud, solvency testing. Court-tested testimony.',
  openGraph: {
    title: 'Fraudulent Transfer Expert Witness | Forensic Accounting Los Angeles',
    description: 'Fraudulent transfer forensic investigation and expert testimony. UFTA/UVTA analysis and badges of fraud.',
    url: 'https://engelandengel.com/practice-areas/fraudulent-transfers',
    siteName: 'Engel & Engel LLP',
    images: [{ url: 'https://engelandengel.com/images/og-fraudulent-transfers.jpg', width: 1200, height: 630, alt: 'Fraudulent Transfer Expert Witness - Los Angeles' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fraudulent Transfer Expert Witness | Forensic Accounting Los Angeles',
    description: 'Fraudulent transfer forensic investigation and expert testimony.',
    images: ['https://engelandengel.com/images/twitter-fraudulent-transfers.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://engelandengel.com/practice-areas/fraudulent-transfers' },
}

export default function FraudulentTransfersEnhancedPage() {
  const faqItems = [
    { question: "What is a fraudulent transfer under California law?", answer: "A fraudulent transfer occurs when a debtor transfers property with the intent to hinder, delay, or defraud creditors, or when a transfer is made without receiving reasonably equivalent value while the debtor is insolvent. California follows the Uniform Voidable Transactions Act (UVTA), formerly known as UFTA." },
    { question: "What are the badges of fraud in fraudulent transfer cases?", answer: "Badges of fraud are circumstantial evidence indicators of fraudulent intent, including transfers to insiders, retention of possession after transfer, concealment of the transfer, transfers of substantially all assets, inadequate consideration, insolvency or near-insolvency, and transfers made shortly before or after a substantial debt." },
    { question: "How do you conduct solvency testing?", answer: "We conduct comprehensive solvency testing by analyzing the debtor's assets and liabilities at the time of transfer, evaluating fair market value of assets, calculating debt-to-asset ratios, and determining whether the debtor was left with unreasonably small capital to continue business operations." },
    { question: "Can you trace fraudulently transferred assets?", answer: "Yes, we specialize in tracing fraudulently transferred assets through complex transaction chains, identifying subsequent transfers, locating hidden assets, and documenting the flow of funds to support recovery efforts." },
    { question: "What research have you published on fraudulent transfers?", answer: "We have published four research publications on fraudulent transfers: 'Badges of Fraud,' 'Solvency Testing,' 'Reasonably Equivalent Value,' and 'Actual Intent to Hinder, Delay or Defraud Creditors,' providing comprehensive analysis of UFTA/UVTA principles." }
  ]

  return (
    <main>
      <SchemaMarkup type="Organization" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, socialMedia: ["https://www.linkedin.com/company/engel-engel-llp"] }} />
      <SchemaMarkup type="LocalBusiness" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, geo: { latitude: "34.0522", longitude: "-118.2437" } }} />
      <SchemaMarkup type="ProfessionalService" data={{ name: "Fraudulent Transfer Expert Witness Services", description: "Fraudulent transfer forensic accounting and expert witness testimony in Los Angeles", serviceType: "Forensic Accounting - Fraudulent Transfers", address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" } }} />
      <SchemaMarkup type="HowTo" data={{
        name: "How to Conduct Fraudulent Transfer Investigation",
        description: "Our proven 5-step process for fraudulent transfer forensic analysis",
        steps: [
          { name: "Initial Case Assessment", text: "Review transfer documents, timeline, and identify potential badges of fraud." },
          { name: "Solvency Analysis", text: "Conduct comprehensive solvency testing at the time of transfer." },
          { name: "Asset Tracing", text: "Trace transferred assets and identify subsequent transfers or concealment." },
          { name: "Badges of Fraud Analysis", text: "Analyze all badges of fraud and evaluate intent to hinder, delay, or defraud." },
          { name: "Expert Report & Testimony", text: "Prepare detailed reports and provide expert witness testimony in fraudulent transfer litigation." }
        ]
      }} />
      <SchemaMarkup type="FAQ" data={{ questions: faqItems }} />
      
      <Header />
      
      <section className="pt-16 lg:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom py-20">
          <Breadcrumbs items={[
            { label: 'Practice Areas', href: '/practice-areas' },
            { label: 'Fraudulent Transfers', href: '/practice-areas/fraudulent-transfers' }
          ]} />
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Fraudulent Transfer Expert Witness</h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Forensic accounting expertise in fraudulent transfer investigations, UFTA/UVTA analysis, and expert witness testimony.
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
                Business and bankruptcy litigators often require forensic accounting expertise in connection with fraudulent transfer claims. Engel & Engel has extensive experience, both in business litigation and bankruptcy litigation, in investigating fraudulent transfers and providing expert witness testimony for both plaintiffs and defendants.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Engel & Engel's fraudulent transfer expertise is highlighted with a credentialed Certified Insolvency and Restructuring Advisor (CIRA), as well as an Accreditation in Business Valuation (ABV), a Master Analyst in Financial Forensics (MAFF), and Certified Fraud Examiners (CFE). Engel & Engel's expertise is further highlighted with four research publications on the subject of fraudulent transfers. Overall, Engel & Engel has the qualifications and experience to conduct a fraudulent transfer analysis that is consistent with established legal principles and able to withstand the scrutiny of the court.
              </p>
            </div>

            <div className="mb-12 bg-primary-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Fraudulent Transfer Expert Witness in Los Angeles</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Serving Los Angeles County, Orange County, Ventura County, San Bernardino County, Riverside County, and throughout Southern California. Our Los Angeles office provides comprehensive fraudulent transfer forensic accounting services for business litigation attorneys throughout the region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you need a fraudulent transfer expert for cases in downtown Los Angeles, Santa Monica, Beverly Hills, Pasadena, Irvine, San Diego, or anywhere in California, our team is ready to assist with UFTA/UVTA analysis, solvency testing, and expert witness testimony.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How Engel & Engel Helps Business and Bankruptcy Litigation Attorneys</h2>
              <p className="text-lg text-gray-700 mb-8">When the stakes are high, Engel & Engel can serve as your expert in connection with the following:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Analysis of Reasonable Equivalent Value", desc: "We help determine if the debtor got fair value in the transaction. This is often the key issue in fraudulent transfer cases.", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" },
                  { title: "Solvency Analysis", desc: "Was the company actually insolvent when the transfer happened? We analyze the balance sheet and cash flow to find out.", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
                  { title: "Analysis of Ability to Pay Debts as they Become Due", desc: "Even if a company looks solvent on paper, could it actually pay its bills? We examine cash flow and payment patterns.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { title: "Analysis of Undercapitalization", desc: "Did the company have enough capital to operate? We compare the business to industry standards and look at what was reasonable.", icon: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { title: "Tracing of Fraudulent Transactions", desc: "Where did the money go? We follow the trail through bank accounts, entities, and transactions to track down transferred assets.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
                  { title: "Business Fair Market Valuation", desc: "What was the business really worth at the time of transfer? We provide credible valuations that hold up in court.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                  { title: "Business Fair Valuation", desc: "We value businesses using accepted methods and real market data, not guesswork. Our valuations are defensible and well-documented.", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
                  { title: "Valuation of Intangible Assets", desc: "Customer lists, patents, goodwill - these assets have value too. We know how to value what you can't touch.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
                  { title: "Liquidation Analysis", desc: "What would the assets fetch in a quick sale? This matters when determining if a company was left with enough after a transfer.", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
                  { title: "Financial Fraud Investigations", desc: "We dig into the books to uncover schemes, hidden transactions, and financial manipulation. Our CFE credentials mean we know what to look for.", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
                  { title: "Expert Witness Testimony", desc: "We've testified in court many times. We explain complex financial issues clearly so judges and juries understand your case.", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Fraudulent Transfer Investigation Process</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Initial Case Assessment", desc: "Review transfer documents, timeline, and identify potential badges of fraud." },
                  { step: "2", title: "Solvency Analysis", desc: "Conduct comprehensive solvency testing at the time of transfer." },
                  { step: "3", title: "Asset Tracing", desc: "Trace transferred assets and identify subsequent transfers or concealment." },
                  { step: "4", title: "Badges of Fraud Analysis", desc: "Analyze all badges of fraud and evaluate intent to hinder, delay, or defraud." },
                  { step: "5", title: "Expert Report & Testimony", desc: "Prepare detailed reports and provide expert witness testimony in fraudulent transfer litigation." }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Engel & Engel for Fraudulent Transfer Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Published Research</h3>
                  <p className="text-gray-600">Four published research publications on fraudulent transfers, badges of fraud, and solvency testing.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">UFTA/UVTA Expertise</h3>
                  <p className="text-gray-600">Comprehensive knowledge of Uniform Fraudulent Transfer Act and Uniform Voidable Transactions Act.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Court-Tested Testimony</h3>
                  <p className="text-gray-600">Extensive experience providing expert witness testimony in fraudulent transfer litigation.</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Publications</h2>
              <p className="text-lg text-gray-700 mb-6">Engel & Engel has published the following research publications in connection with fraudulent transfers:</p>
              <div className="space-y-4">
                <Link href="/publications">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer hover:border-primary-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-primary-700 hover:text-primary-800 flex items-center justify-between">
                        The Element of Reasonably Equivalent Value
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/publications">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer hover:border-primary-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-primary-700 hover:text-primary-800 flex items-center justify-between">
                        The Element of Insolvency
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/publications">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer hover:border-primary-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-primary-700 hover:text-primary-800 flex items-center justify-between">
                        The Element of Reasonably Small Capital
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/publications">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer hover:border-primary-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-primary-700 hover:text-primary-800 flex items-center justify-between">
                        The Element of Inability to Pay Debts as they Mature
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Practice Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Alter Ego", href: "/practice-areas/alter-ego" },
                  { name: "Bankruptcy & Insolvency", href: "/practice-areas/bankruptcy-insolvency" },
                  { name: "Business Valuation", href: "/practice-areas/business-valuation" },
                  { name: "Fraud Investigation", href: "/practice-areas/fraud-investigation" },
                  { name: "Economic Damages", href: "/practice-areas/economic-damages" },
                  { name: "Partnership Disputes", href: "/practice-areas/partnership-disputes" }
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Fraudulent Transfer Expert Witness?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact Brandon J. Engel, CPA/ABV/CFF, CVA, MAFF for a consultation on your fraudulent transfer case.
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
