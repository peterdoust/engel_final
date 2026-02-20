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
  title: 'Forensic Accounting Services Los Angeles - Engel & Engel, LLP',
  description: 'Engel & Engel conducts internal investigations to uncover proof of misconduct, identify transactional patterns, and expose irregularities',
  openGraph: {
    title: 'Forensic Accounting Services Los Angeles - Engel & Engel, LLP',
    description: 'Engel & Engel conducts internal investigations to uncover proof of misconduct, identify transactional patterns, and expose irregularities',
    url: 'https://engelandengel.com/services/internal-investigations',
    siteName: 'Engel & Engel LLP',
    images: [{ url: 'https://engelandengel.com/wp-content/uploads/2025/10/identify-fincancial-patterns.jpg', width: 266, height: 332, alt: 'Internal Investigations - Forensic Accounting' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forensic Accounting Services Los Angeles - Engel & Engel, LLP',
    description: 'Engel & Engel conducts internal investigations to uncover proof of misconduct, identify transactional patterns, and expose irregularities',
    images: ['https://engelandengel.com/wp-content/uploads/2025/10/identify-fincancial-patterns.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://engelandengel.com/services/internal-investigations' },
}

export default function InternalInvestigationsPage() {
  const faqItems = [
    { question: "What types of clients do you serve for internal investigations?", answer: "We serve a diverse range of clients including corporate entities, nonprofit organizations, homeowners' associations (HOAs), government agencies, police departments, high-profile individuals, celebrities, private individuals, and their legal counsel. Our investigations are tailored to each client's specific needs and circumstances." },
    { question: "What is included in your investigation reports?", answer: "We prepare professional reports that outline evidence, quantify financial impact, identify how misconduct occurred, and provide recommendations. These reports can be used to take corrective action, strengthen internal controls, pursue civil litigation, or provide to law enforcement agencies such as the Department of Justice or local police." },
    { question: "Can you investigate embezzlement in HOAs and nonprofit organizations?", answer: "Yes. We have extensive experience investigating embezzlement, misappropriation of funds, and financial irregularities in homeowners' associations and nonprofit organizations. We understand the unique challenges these entities face and provide thorough investigations that uncover misconduct and quantify losses." },
    { question: "Do you work with law enforcement?", answer: "Yes. In many cases, our investigation reports are provided to law enforcement agencies including the Department of Justice, FBI, or local police departments. We prepare our findings in a format that supports criminal investigations and prosecutions when appropriate." },
    { question: "How do you handle investigations for high-profile individuals and celebrities?", answer: "We conduct discreet, confidential investigations for high-net-worth individuals and celebrities who suspect theft or overbilling by contractors, managers, advisors, or other parties. We understand the need for privacy and handle these matters with the utmost discretion while providing thorough forensic analysis." }
  ]

  return (
    <main>
      <SchemaMarkup type="Organization" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, socialMedia: ["https://www.linkedin.com/company/engel-engel-llp"] }} />
      <SchemaMarkup type="LocalBusiness" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, geo: { latitude: "34.0522", longitude: "-118.2437" } }} />
      <SchemaMarkup type="ProfessionalService" data={{ name: "Internal Investigations", description: "Confidential internal investigation services for corporate fraud and employee misconduct", serviceType: "Forensic Investigation Services", address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" } }} />
      <SchemaMarkup type="HowTo" data={{
        name: "How Internal Investigations Work",
        description: "Our proven 5-step internal investigation process",
        steps: [
          { name: "Initial Assessment", text: "Confidential evaluation of allegations and development of investigation plan." },
          { name: "Evidence Collection", text: "Systematic collection and preservation of financial records, emails, and other relevant evidence." },
          { name: "Forensic Analysis", text: "Detailed analysis of financial transactions, communications, and business records to uncover misconduct." },
          { name: "Interviews", text: "Professional interviews with relevant employees and witnesses to gather information." },
          { name: "Final Report", text: "Comprehensive written report with findings, evidence, quantification of losses, and recommendations." }
        ]
      }} />
      <SchemaMarkup type="FAQ" data={{ questions: faqItems }} />
      
      <Header />
      
      <section className="pt-16 lg:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom py-20">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services' },
            { label: 'Internal Investigations', href: '/services/internal-investigations' }
          ]} />
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Internal Investigations</h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              The Forensic Accounting Perspective
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(310) 277-2220"><Button size="xl" className="bg-white text-primary-900 hover:bg-gray-100">Call (310) 277-2220</Button></a>
              <Link href="/contact"><Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-900">Confidential Consultation</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            <div className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Financial concerns often surface long before litigation begins. Unexplained losses, irregular transactions, or suspected misconduct can raise serious questions that demand answers. Whether the issue involves potential embezzlement, misuse of funds, or fraud within a family, business, or organization, early investigation is critical to understanding what has occurred and preventing further harm.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                In other situations, fraud or embezzlement has already come to light, but the full extent of the wrongdoing is still unknown. We are often retained to conduct comprehensive investigations that reveal how misconduct occurred, measure the resulting financial impact, and provide clients with a clear report of findings. These reports give decision-makers the evidence they need to pursue recovery, pursue litigation, strengthen internal controls, or refer the matter to law enforcement.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Engel & Engel, LLP, we conduct internal forensic accounting investigations that uncover irregularities and quantify financial impact. Our clients include individuals, families, HOAs, companies, celebrities, and government agencies. In many cases, we prepare a professional report of our findings that can be used to take corrective action, strengthen internal controls, pursue civil litigation, or provide to law enforcement agencies such as the Department of Justice or local police.
              </p>
            </div>

            <div className="mb-12 bg-primary-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Engel & Engel's Internal Investigation Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Engel & Engel is often retained by corporate entities, nonprofit organizations, homeowners' associations, government agencies, police departments, high profile individuals, and private individuals, as well as their counsel, to investigate a wide range of suspected misconduct.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Embezzlement Investigations</strong> – Identifying misappropriation of funds within businesses, HOAs, and nonprofit</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Fraud Detection</strong> – Uncovering financial misconduct in companies, family partnerships, and government entities</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>HOA Investigations</strong> – Examining potential fraud, misappropriation of funds, and other financial irregularities in homeowners' associations</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Nonprofit Organization Investigations</strong> – Investigating embezzlement, misappropriation, and misuse of charitable or organizational funds</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Celebrity and High-Net-Worth Reviews</strong> – Examining potential theft or overbilling by contractors, managers, or advisors</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Family and Partnership Disputes</strong> – Tracing funds and clarifying whether assets have been misused by relatives or business partners</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Corporate Investigations</strong> – Reviewing internal controls, identifying fraudulent schemes, and calculating damages for organizations</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Reporting of Findings</strong> – Delivering professional reports that outline evidence and quantify financial impact for decision-making or potential legal action</span>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complex Financial Issues We Address</h2>
              <p className="text-lg text-gray-700 mb-8">In connection with our Internal Investigations, Engel & Engel has the expertise and experience to address complex financial issues including the following:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Economic Damages", href: "/practice-areas/economic-damages" },
                  { title: "Fraud Investigation", href: "/practice-areas/fraud-investigation" },
                  { title: "Business Valuation", href: "/practice-areas/business-valuation" },
                  { title: "Bankruptcy & Insolvency", href: "/practice-areas/bankruptcy-insolvency" },
                  { title: "Intellectual Property (IP) Investigations", href: "/practice-areas/ip-litigation" },
                  { title: "Real Estate Fraud", href: "/practice-areas/real-estate-litigation" },
                  { title: "Construction Fraud", href: "/practice-areas/construction-litigation" },
                  { title: "Alter Ego", href: "/practice-areas/alter-ego" },
                  { title: "Fraudulent Transfers", href: "/practice-areas/fraudulent-transfers" },
                  { title: "Employment Damages", href: "/practice-areas/employment-litigation" },
                  { title: "Business Interruption", href: "/practice-areas/business-interruption" },
                  { title: "Personal Injury Damages", href: "/practice-areas/personal-injury" },
                  { title: "Accounting Malpractice", href: "/practice-areas/accounting-malpractice" },
                  { title: "Partnership/Shareholder Disputes", href: "/practice-areas/partnership-disputes" },
                ].map((item, index) => (
                  <Link key={index} href={item.href}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-l-4 border-l-primary-600">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-primary-700 hover:text-primary-900">{item.title}</h3>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Investigation Process</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Initial Assessment", desc: "Confidential evaluation of allegations, review of available information, and development of investigation plan tailored to the specific circumstances." },
                  { step: "2", title: "Evidence Collection", desc: "Systematic collection and preservation of financial records, emails, computer files, and other relevant evidence using forensically sound methods." },
                  { step: "3", title: "Forensic Analysis", desc: "Detailed analysis of financial transactions, communications, and business records using specialized investigatory techniques to uncover misconduct and quantify losses." },
                  { step: "4", title: "Interviews", desc: "Professional interviews with relevant employees, witnesses, and other parties to gather information and test hypotheses." },
                  { step: "5", title: "Final Report", desc: "Comprehensive written report detailing findings, supporting evidence, quantification of losses, identification of control weaknesses, and recommendations for remedial action." }
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

            <div className="mb-12 bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-primary-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Engel & Engel</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                With decades of experience in financial forensics, Engel & Engel provides the depth of analysis required to uncover misconduct and quantify its financial impact. Our investigations are confidential, fact-driven, and conducted with a clear understanding of what it takes to withstand scrutiny in court. They often serve as the foundation for pre-litigation strategy or future legal proceedings.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Confidential & Discreet</h3>
                  <p className="text-gray-600">We maintain strict confidentiality throughout the investigation to protect your interests and reputation.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Court-Ready Analysis</h3>
                  <p className="text-gray-600">Our investigations are conducted with a clear understanding of what it takes to withstand scrutiny in court.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Decades of Experience</h3>
                  <p className="text-gray-600">Six professional certifications including CFE (Certified Fraud Examiner) and 30+ years of forensic accounting experience.</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Forensic Accounting", href: "/services/forensic-accounting" },
                  { name: "Expert Witness Testimony", href: "/services/expert-witness-testimony" },
                  { name: "Joint Retention Program", href: "/services/joint-retention-program" },
                  { name: "Fraud Investigation", href: "/practice-areas/fraud-investigation" },
                  { name: "Economic Damages", href: "/practice-areas/economic-damages" },
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

      <FAQ items={faqItems} />

      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Confidential Investigation?</h2>
            <p className="text-xl text-primary-100 mb-8">
              For additional information about Engel & Engel's Forensic Accounting Services or a consultation, please contact Brandon J. Engel, CPA, CFE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:(310) 277-2220"><Button size="xl" className="bg-white text-primary-900 hover:bg-gray-100">Call (310) 277-2220</Button></a>
              <a href="mailto:brandon@engelandengel.com"><Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-900">Email brandon@engelandengel.com</Button></a>
            </div>
            <p className="text-primary-200">Serving individuals, families, HOAs, companies, celebrities, government agencies, and law enforcement nationwide</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

