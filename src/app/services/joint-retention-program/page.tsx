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
  title: 'Joint Retention Program | Neutral Forensic Accounting Expert | Engel & Engel',
  description: 'Joint retention program - both parties jointly retain Engel & Engel as a neutral forensic accounting expert to resolve disputed financial issues and achieve settlement. Alternative to traditional litigation.',
  openGraph: {
    title: 'Joint Retention Program | Neutral Forensic Accounting Expert',
    description: 'Joint retention program - both parties jointly retain Engel & Engel as a neutral expert to resolve financial disputes.',
    url: 'https://engelandengel.com/services/joint-retention-program',
    siteName: 'Engel & Engel LLP',
    images: [{ url: 'https://engelandengel.com/images/og-joint-retention.jpg', width: 1200, height: 630, alt: 'Joint Retention Program - Los Angeles' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joint Retention Program | Neutral Forensic Accounting Expert',
    description: 'Joint retention program - both parties jointly retain Engel & Engel as a neutral expert to resolve financial disputes.',
    images: ['https://engelandengel.com/images/twitter-joint-retention.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://engelandengel.com/services/joint-retention-program' },
}

export default function JointRetentionProgramPage() {
  const faqItems = [
    { question: "What is the Joint Retention Program?", answer: "The Joint Retention Program is an alternative to the typical litigation process where both parties in a dispute jointly retain Engel & Engel to conduct an objective and independent forensic accounting investigation. Rather than each party hiring their own expert, both parties agree to retain one neutral expert to resolve disputed financial issues." },
    { question: "How does joint retention save costs?", answer: "Joint retention saves costs by eliminating the need for each party to hire separate forensic accounting experts. It also reduces litigation costs by eliminating discovery disputes, minimizing duplicative analysis, and expediting resolution of financial issues." },
    { question: "Can Engel & Engel serve as a referee or special master?", answer: "Yes. Engel & Engel can serve as a referee in accordance with California Code of Civil Procedure § 638 and § 639, as a special master in accordance with California Code of Civil Procedure § 845, and as a special master in accordance with Federal Rules of Civil Procedure § 53." },
    { question: "What types of cases benefit from joint retention?", answer: "Joint retention is particularly beneficial in arbitration, mediation, and litigation cases where the parties prefer a process that can help settle their differences in a cost-effective manner. It works well for partnership disputes, business valuations, fraud investigations, and other complex financial disputes." },
    { question: "How is independence and objectivity ensured?", answer: "Engel & Engel's Joint Retention Program is founded on high standards of independence and impartiality. We conduct a formal conflicts check and provide a disclosure statement. Both parties agree upon the scope of the assignment, and both parties have the opportunity to challenge our findings." }
  ]

  return (
    <main>
      <SchemaMarkup type="Organization" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, socialMedia: ["https://www.linkedin.com/company/engel-engel-llp"] }} />
      <SchemaMarkup type="LocalBusiness" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, geo: { latitude: "34.0522", longitude: "-118.2437" } }} />
      <SchemaMarkup type="ProfessionalService" data={{ name: "Joint Retention Program", description: "Both parties jointly retain Engel & Engel as a neutral forensic accounting expert to resolve disputed financial issues and achieve settlement", serviceType: "Forensic Accounting - Neutral Expert Services", address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" } }} />
      <SchemaMarkup type="HowTo" data={{
        name: "How Joint Retention Works",
        description: "Our proven 6-step joint retention process",
        steps: [
          { name: "Independence and Objectivity", text: "Assurance that Engel & Engel is independent, objective, and neutral throughout the process, including a formal conflicts check and disclosure statement." },
          { name: "Jointly Agreed Upon Scope", text: "A jointly agreed upon scope of the assignment that addresses the concerns and issues of both parties." },
          { name: "Discovery of Relevant Records", text: "Discovery of the relevant accounting and business records with cooperation from both parties." },
          { name: "Objective Financial Analysis", text: "An objective financial analysis that includes the concerns of both parties and addresses all relevant issues." },
          { name: "Impartial Report of Findings", text: "An objective and impartial report of findings that both parties can rely upon." },
          { name: "Challenge Process", text: "A process for both parties to challenge Engel & Engel's findings and request additional analysis if needed." }
        ]
      }} />
      <SchemaMarkup type="FAQ" data={{ questions: faqItems }} />
      
      <Header />
      
      <section className="pt-16 lg:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom py-20">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services' },
            { label: 'Joint Retention Program', href: '/services/joint-retention-program' }
          ]} />
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Engel & Engel's Joint Retention Program</h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Resolving Disputed Financial Issues and Achieving Settlement
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
                Business litigation often requires the retention of forensic accounting experts by both litigants in a dispute. Engel & Engel provides a specialized Joint Retention Program as an alternative to the typical litigation process as a way to resolve disputed financial issues and achieve settlement.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Engel & Engel's Joint Retention Program is particularly beneficial in arbitration, mediation and litigation cases where the parties prefer a process that can help settle their differences in a cost-effective manner. Our Joint Retention Program is designed to equally address the financial concerns of both parties in a dispute, whereby the parties jointly retain Engel & Engel to conduct an objective and independent forensic accounting investigation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                In addition, Engel & Engel can serve as a referee in accordance with California Code of Civil Procedure § 638 and § 639 and as a special master in accordance with California Code of Civil Procedure § 845. Engel & Engel can also serve as a special master in accordance with Federal Rules of Civil Procedure § 53.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">By Employing Engel & Engel's Joint Retention Program, Both Parties Can:</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Save on Forensic Accounting Costs", desc: "Eliminate the need for each party to hire separate forensic accounting experts, significantly reducing overall costs." },
                  { title: "Save on Litigation Costs", desc: "Reduce overall litigation expenses by streamlining the forensic accounting process and eliminating duplicative work." },
                  { title: "Efficiently Obtain Accounting and Business Records", desc: "Streamlined discovery process with both parties cooperating to provide necessary financial documents and records." },
                  { title: "Expedite Resolution of Financial Issues", desc: "Faster resolution of disputed financial matters through objective analysis rather than competing expert opinions." },
                  { title: "Eliminate Discovery Disputes and Related Costs", desc: "Avoid costly discovery battles over financial documents when both parties agree to cooperate with the neutral expert." },
                  { title: "Receive Independent and Objective Analysis", desc: "Both parties can rely on an independent and objective analysis that addresses the concerns of both sides." },
                  { title: "Eliminate Unnecessary and Duplicative Analysis", desc: "Avoid the waste of having two experts perform the same analysis and reach different conclusions." },
                  { title: "Minimize or Eliminate Financial Disputes", desc: "Reduce or eliminate financial disputes between the parties through neutral, objective forensic accounting analysis." },
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
              <p className="text-lg text-gray-700 mb-8">
                Engel & Engel's Joint Retention Program is founded on the high standards of independence and impartiality coupled with over forty years of forensic experience. Engel & Engel's Joint Retention Program is a formal service offering with a uniquely designed process providing the parties with the following:
              </p>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Independence and Objectivity", desc: "Assurance that Engel & Engel is independent, objective, and neutral throughout the process, including a formal conflicts check and disclosure statement." },
                  { step: "2", title: "Jointly Agreed Upon Scope", desc: "A jointly agreed upon scope of the assignment that addresses the concerns and issues of both parties." },
                  { step: "3", title: "Discovery of Relevant Records", desc: "Discovery of the relevant accounting and business records with cooperation from both parties." },
                  { step: "4", title: "Objective Financial Analysis", desc: "An objective financial analysis that includes the concerns of both parties and addresses all relevant issues." },
                  { step: "5", title: "Impartial Report of Findings", desc: "An objective and impartial report of findings that both parties can rely upon." },
                  { step: "6", title: "Challenge Process", desc: "A process for both parties to challenge Engel & Engel's findings and request additional analysis if needed." }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Practice Areas</h2>
              <p className="text-lg text-gray-700 mb-8">
                In connection with our Joint Retention Program, Engel & Engel has the expertise and experience in addressing complex business litigation issues including the following:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Economic Damages", link: "/practice-areas/economic-damages" },
                  { title: "Fraud Investigation", link: "/practice-areas/fraud-investigation" },
                  { title: "Business Valuation", link: "/practice-areas/business-valuation" },
                  { title: "Bankruptcy & Insolvency", link: "/practice-areas/bankruptcy-insolvency" },
                  { title: "Intellectual Property (IP) Litigation", link: "/practice-areas/ip-litigation" },
                  { title: "Real Estate Litigation", link: "/practice-areas/real-estate-litigation" },
                  { title: "Construction Litigation", link: "/practice-areas/construction-litigation" },
                  { title: "Alter Ego", link: "/practice-areas/alter-ego" },
                  { title: "Fraudulent Transfers", link: "/practice-areas/fraudulent-transfers" },
                  { title: "Employment Litigation", link: "/practice-areas/employment-litigation" },
                  { title: "Business Interruption", link: "/practice-areas/business-interruption" },
                  { title: "Personal Injury", link: "/practice-areas/personal-injury" },
                  { title: "Accounting Malpractice", link: "/practice-areas/accounting-malpractice" },
                  { title: "Partnership/Shareholder Disputes", link: "/practice-areas/partnership-disputes" },
                  { title: "Trust/Probate Litigation", link: "/practice-areas/trust-probate-litigation" },
                  { title: "Defamation", link: "/practice-areas/defamation" },
                ].map((service, index) => (
                  <Link key={index} href={service.link}>
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-primary-700 hover:text-primary-900">{service.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Learn More About Our Joint Retention Program</h2>
            <p className="text-xl text-primary-100 mb-8">
              For more information about Engel & Engel's specialized Joint Retention Program, or a consultation, please contact Brandon J. Engel, CPA, CFE.
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
