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
  title: 'Expert Witness Testimony Los Angeles | 100+ Court Cases | Engel & Engel',
  description: 'Expert witness testimony in Los Angeles. 100+ court cases, 6 professional certifications, 20 research publications. State, federal, and bankruptcy court experience.',
  openGraph: {
    title: 'Expert Witness Testimony Los Angeles | 100+ Court Cases',
    description: 'Expert witness testimony in Los Angeles. 100+ court cases, 6 professional certifications, 20 research publications.',
    url: 'https://engelandengel.com/services/expert-witness-testimony',
    siteName: 'Engel & Engel LLP',
    images: [{ url: 'https://engelandengel.com/images/og-expert-witness.jpg', width: 1200, height: 630, alt: 'Expert Witness Testimony - Los Angeles' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Witness Testimony Los Angeles | 100+ Court Cases',
    description: 'Expert witness testimony in Los Angeles. 100+ court cases, 6 professional certifications, 20 research publications.',
    images: ['https://engelandengel.com/images/twitter-expert-witness.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://engelandengel.com/services/expert-witness-testimony' },
}

export default function ExpertWitnessTestimonyPage() {
  const faqItems = [
    { question: "What makes a credible expert witness?", answer: "A credible expert witness has relevant professional certifications, extensive practical experience, published research, and a track record of court testimony. Our team holds six professional certifications (CPA, CFE, CIRA, CVA, MAFF, ABV), has testified in over 100 cases, and published 20 research articles in peer-reviewed journals." },
    { question: "What types of cases do you testify in?", answer: "We provide expert witness testimony in economic damages, fraud investigations, business valuations, bankruptcy matters, intellectual property disputes, employment litigation, partnership disputes, construction litigation, and other complex financial matters in state, federal, and bankruptcy courts." },
    { question: "How do you prepare for testimony?", answer: "We conduct thorough analysis of all relevant financial records, prepare comprehensive expert reports, create visual exhibits for jury presentation, participate in deposition preparation with counsel, and rehearse direct and cross-examination scenarios to ensure clear, confident testimony." },
    { question: "Can you withstand cross-examination?", answer: "Yes. Our testimony is based on rigorous analysis, established methodologies, and peer-reviewed research. We have successfully defended our opinions under cross-examination in over 100 cases. Our Big Four forensic accounting background and academic research provide a strong foundation for courtroom credibility." },
    { question: "Do you work with attorneys throughout the case?", answer: "Absolutely. We collaborate closely with trial counsel from case inception through verdict. This includes case strategy, discovery support, deposition assistance, report preparation, exhibit creation, and trial testimony. Our goal is to help attorneys build the strongest possible case." }
  ]

  return (
    <main>
      <SchemaMarkup type="Organization" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, socialMedia: ["https://www.linkedin.com/company/engel-engel-llp"] }} />
      <SchemaMarkup type="LocalBusiness" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, geo: { latitude: "34.0522", longitude: "-118.2437" } }} />
      <SchemaMarkup type="ProfessionalService" data={{ name: "Expert Witness Testimony Services", description: "Expert witness testimony and litigation support in Los Angeles", serviceType: "Expert Witness Services", address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" } }} />
      <SchemaMarkup type="HowTo" data={{
        name: "How Expert Witness Testimony Works",
        description: "Our proven 5-step expert witness process",
        steps: [
          { name: "Case Evaluation", text: "Initial review of case facts and determination of expert opinion feasibility." },
          { name: "Investigation & Analysis", text: "Comprehensive forensic analysis of financial records and relevant documents." },
          { name: "Expert Report", text: "Preparation of detailed expert report with findings, opinions, and supporting exhibits." },
          { name: "Deposition", text: "Participation in deposition with clear, confident presentation of expert opinions." },
          { name: "Trial Testimony", text: "Court testimony with effective communication of complex financial concepts to judges and juries." }
        ]
      }} />
      <SchemaMarkup type="FAQ" data={{ questions: faqItems }} />
      
      <Header />
      
      <section className="pt-16 lg:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom py-20">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services' },
            { label: 'Expert Witness Testimony', href: '/services/expert-witness-testimony' }
          ]} />
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Expert Witness Testimony</h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Court-tested expert witness testimony in complex financial litigation. Over 100 cases in state, federal, and bankruptcy courts.
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
                When your case requires expert testimony on complex financial matters, credibility is everything. Judges and juries need to trust that your expert has the knowledge, experience, and integrity to provide reliable opinions. At Engel & Engel, we bring over 30 years of forensic accounting experience, six professional certifications, and a proven track record in the courtroom.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our expert witness testimony has been relied upon in over 100 cases involving economic damages, fraud investigations, business valuations, bankruptcy matters, and other complex financial disputes. We work closely with trial counsel to develop compelling expert opinions that withstand cross-examination and help win cases.
              </p>
            </div>

            <div className="mb-12 bg-primary-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Witness Services in Los Angeles</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Serving attorneys and law firms throughout Los Angeles County, Orange County, Ventura County, San Bernardino County, Riverside County, and all of Southern California. Our Los Angeles office provides expert witness services for cases in state courts, federal courts, and bankruptcy courts.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether your case is in downtown Los Angeles, Santa Monica, Beverly Hills, Pasadena, Irvine, San Diego, or anywhere in California, we provide expert testimony backed by rigorous analysis and decades of courtroom experience.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Credibility in the Courtroom</h2>
              <p className="text-lg text-gray-700 mb-8">Your expert witness must have the credentials and experience to command respect from judges, juries, and opposing counsel. Our qualifications include:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Six Professional Certifications", desc: "CPA, CFE (Certified Fraud Examiner), CIRA (Certified Insolvency & Restructuring Advisor), CVA (Certified Valuation Analyst), MAFF (Master Analyst in Financial Forensics), ABV (Accredited in Business Valuation)." },
                  { title: "100+ Court Cases", desc: "Extensive testimony experience in state, federal, and bankruptcy courts across California and nationwide." },
                  { title: "20 Research Publications", desc: "Published research in peer-reviewed journals on economic damages, forensic accounting, and expert witness testimony." },
                  { title: "Big Four Experience", desc: "Forensic accounting experience with Big Four accounting firms, providing credibility and advanced training." },
                  { title: "30+ Years Experience", desc: "Over three decades of forensic accounting and litigation support experience across diverse industries and case types." },
                  { title: "Academic Background", desc: "Strong academic foundation with ongoing research and teaching in forensic accounting and economic damages." },
                ].map((item, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary-700">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Publications</h2>
              <p className="text-lg text-gray-700 mb-6">Our research has been published in leading academic and professional journals, demonstrating thought leadership in forensic accounting and economic damages:</p>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">"Calculating Lost Profits Damages: A Comprehensive Framework"</h3>
                    <p className="text-gray-600 mb-2">Journal of Forensic Accounting Research, Vol. 8, Issue 2</p>
                    <p className="text-gray-700">Comprehensive analysis of methodologies for calculating lost profits in commercial litigation, including before-and-after method, yardstick method, and sales projection method.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">"Expert Witness Testimony: Best Practices for Forensic Accountants"</h3>
                    <p className="text-gray-600 mb-2">The CPA Journal, Vol. 92, Issue 5</p>
                    <p className="text-gray-700">Practical guidance for forensic accountants serving as expert witnesses, covering report preparation, deposition strategies, and effective courtroom testimony.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Expert Witness Process</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Case Evaluation", desc: "Initial review of case facts, relevant documents, and determination of whether we can provide credible expert opinions to support your case." },
                  { step: "2", title: "Investigation & Analysis", desc: "Comprehensive forensic analysis of financial records, business operations, and relevant documents using specialized investigatory techniques." },
                  { step: "3", title: "Expert Report", desc: "Preparation of detailed expert report with findings, opinions, supporting calculations, and visual exhibits designed for jury presentation." },
                  { step: "4", title: "Deposition", desc: "Participation in deposition with clear, confident presentation of expert opinions and ability to defend analysis under questioning." },
                  { step: "5", title: "Trial Testimony", desc: "Court testimony with effective communication of complex financial concepts to judges and juries, withstanding cross-examination." }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cases</h2>
              <p className="text-lg text-gray-700 mb-8">We provide expert witness testimony in a wide range of complex financial litigation matters:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Economic Damages", desc: "Lost profits, business interruption, contract damages, employment damages, IP infringement damages.", link: "/practice-areas/economic-damages" },
                  { title: "Fraud Investigation", desc: "Embezzlement, Ponzi schemes, securities fraud, contract fraud, bankruptcy fraud.", link: "/practice-areas/fraud-investigation" },
                  { title: "Business Valuation", desc: "Corporate valuation, minority shareholder disputes, M&A, dissolutions, shareholder oppression.", link: "/practice-areas/business-valuation" },
                  { title: "Bankruptcy & Insolvency", desc: "Solvency analysis, preference actions, fraudulent transfers, reorganization plans.", link: "/practice-areas/bankruptcy-insolvency" },
                  { title: "Partnership Disputes", desc: "Ownership disputes, capital contributions, hidden distributions, breach of fiduciary duty.", link: "/practice-areas/partnership-disputes" },
                  { title: "Employment Litigation", desc: "Wage and hour claims, wrongful termination, discrimination damages, PAGA actions.", link: "/practice-areas/employment-litigation" },
                ].map((service, index) => (
                  <Link key={index} href={service.link}>
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-xl text-primary-700 hover:text-primary-900">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{service.desc}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Engel & Engel</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Credibility</h3>
                  <p className="text-gray-600">Six professional certifications, 20 research publications, and Big Four experience provide unmatched courtroom credibility.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Court-Tested</h3>
                  <p className="text-gray-600">Over 100 cases in state, federal, and bankruptcy courts with successful testimony under cross-examination.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Approach</h3>
                  <p className="text-gray-600">We work closely with trial counsel throughout the case to develop the strongest possible expert opinions and testimony.</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Forensic Accounting", href: "/services/forensic-accounting" },
                  { name: "Joint Retention Program", href: "/services/joint-retention-program" },
                  { name: "Internal Investigations", href: "/services/internal-investigations" },
                  { name: "Economic Damages", href: "/practice-areas/economic-damages" },
                  { name: "Fraud Investigation", href: "/practice-areas/fraud-investigation" },
                  { name: "Business Valuation", href: "/practice-areas/business-valuation" }
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

      <FAQ items={faqItems} />

      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need an Expert Witness?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact Brandon J. Engel, CPA/ABV/CFF, CVA, MAFF for a consultation on your expert witness needs.
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
