import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Representative Cases | Forensic Accounting | Engel & Engel',
  description: 'Representative forensic accounting cases including $2.3 billion trade secrets award, $100+ million arbitration, and complex fraud investigations. View our case results.',
}

const majorCases = [
  {
    title: 'Misappropriation of Trade Secrets',
    award: '$2.3 Billion Jury Award',
    description: 'Testified for plaintiff in a jury trial regarding damages suffered by a Fortune 500 medical device corporation that alleged misappropriation of trade secrets. Expert testimony included analysis and opinions relating to lost profits, lost goodwill, unjust enrichment, and valuation of the corporation including valuation of goodwill and trade secrets. Damage analysis included plaintiff\'s U.S. and international market share and damages to market share due to the misappropriation of trade secrets.',
    category: 'Intellectual Property',
    icon: '🏆'
  },
  {
    title: 'Economic Damages - Shopping Center',
    award: '$100+ Million Arbitration Award',
    description: 'Testified in an arbitration on behalf of plaintiff as to economic damages in excess of $100 million. Plaintiff, a buyer of an $80 million shopping center, alleged that seller provided buyer with misleading financial information. Arbitrator awarded plaintiff rescission damages in excess of $100 million.',
    category: 'Real Estate',
    icon: '🏢'
  },
  {
    title: 'Personal Injury - Brain Injury',
    award: '$13 Million Jury Award',
    description: 'Testified in a jury trial as to personal injury damages in connection with an alleged wrongful brain injury of an infant. Damage analysis included loss of future lifetime earnings and projected medical care.',
    category: 'Personal Injury',
    icon: '⚖️'
  },
  {
    title: 'Breach of Distributorship Agreement',
    award: '$12 Million Jury Award',
    description: 'Testified as to economic damages in a jury trial on behalf of plaintiff. Plaintiff, a distributor of hi-tech boring and metal cutting machinery alleged that defendant (manufacturer) wrongfully breached its distributorship agreement. Testified as to economic damages including lost profits and unjust enrichment. Jury awarded plaintiff approximately $6 million in economic damages and $6 million in punitive damages.',
    category: 'Commercial Litigation',
    icon: '🔧'
  }
]

const additionalCases = [
  {
    title: 'Real Estate Investments - Minority Shareholder',
    award: '$10+ Million Court Award',
    description: 'Testified in court on behalf of plaintiff, a minority shareholder of various real estate investment entities. Plaintiff alleged that defendants misappropriated corporate funds. Expert testimony included analyses of wrongful distributions and payments to defendants including improper accounting and self-dealing. Defendant\'s counsel cross-examined Engel for approximately 12 days in connection with Engel\'s damage analysis.',
    category: 'Partnership Disputes'
  },
  {
    title: 'Trademark Infringement - Acting School',
    award: '$2.7 Million Jury Award',
    description: 'Testified as to infringement damages in a jury trial in connection with the alleged trademark infringement of an acting school. Analysis included projected lost revenues due to infringement.',
    category: 'Intellectual Property'
  },
  {
    title: 'Breach of Contract - Window Manufacturer',
    award: '$1.3 Million Jury Award',
    description: 'Testified as to damages in a jury trial on behalf of plaintiff, a U.S. window manufacturer and distributor. Plaintiff alleged breach of contract in connection with the construction of a mansion in Moscow, Russia.',
    category: 'International Business'
  },
  {
    title: 'Real Estate Fraud - Property Manager',
    award: '$753,000 Award',
    description: 'Testified in trial on behalf of plaintiff, a real estate investor that alleged fraud by a property manager. Expert testimony included analysis and evidence of the fraudulent scheme including analysis of unaccounted rental income. The court ruled that defendant did defraud plaintiff.',
    category: 'Real Estate Fraud'
  }
]

const investigationCases = [
  {
    title: 'TEST SUBJECT - International Money Laundering Scheme',
    status: 'FOR REFERENCE ONLY',
    description: 'TEST SUBJECT FOR REFERENCE ONLY: Conducted a fraud investigation in connection with a highly publicized international money laundering scheme involving over 150 bank accounts and over 50 entities. The fraud was investigated by the FBI and federal agencies of Switzerland and Korea. Engel & Engel prepared detailed tracing schedules of the flow of fraudulent funds approximating $25 million that ultimately were transferred to Swiss bank accounts, real estate, and other assets.',
    category: 'TEST - Fraud Investigation',
    isHighlighted: true
  },
  {
    title: 'TEST SUBJECT - Las Vegas HOA Racketeering',
    status: 'FOR REFERENCE ONLY',
    description: 'TEST SUBJECT FOR REFERENCE ONLY: Prepared a federal expert report in connection with a highly publicized racketeering and fraud of a Las Vegas condominium homeowners association. The fraud was investigated by the FBI and other federal agencies and resulted in two guilty pleas and four deaths among witnesses and participants. Plaintiff (Association) alleged that insurance premiums paid in connection with $10 million of proceeds from various life insurance policies were paid from fraudulent funds. Engel & Engel investigated and prepared a detailed tracing of approximately $19 million of fraudulent funds.',
    category: 'TEST - Fraud Investigation',
    isHighlighted: true
  },
  {
    title: 'TEST SUBJECT - Accounting Malpractice - Audit Deficiencies',
    status: 'FOR REFERENCE ONLY',
    description: 'TEST SUBJECT FOR REFERENCE ONLY: Prepared an expert report of alleged accounting malpractice in connection with a public accounting firm\'s audit of financial statements. Bookkeeper embezzled approximately $1 million from plaintiff over a five-year period. Based on Engel & Engel\'s investigation and review of the auditors working papers, Engel found that the auditors did not conduct their audit in accordance with Generally Accepted Auditing Standards.',
    category: 'TEST - Accounting Malpractice',
    isHighlighted: true
  }
]

const defenseCases = [
  {
    title: 'TEST SUBJECT - Corporate Embezzlement Defense',
    result: 'FOR REFERENCE ONLY',
    description: 'TEST SUBJECT FOR REFERENCE ONLY: Testified in arbitration on behalf of defendant, a CEO alleged to have embezzled $250,000 of corporate funds disguised as bonuses. Expert testimony included analysis of bonuses paid to CEO, analysis of CEO\'s adherence to internal controls and accounting policies, and analysis that the CEO did not attempt to conceal alleged embezzled payments. Arbitrator found that defendant did not defraud his employer.',
    category: 'TEST - Employment Defense',
    isHighlighted: true
  },
  {
    title: 'TEST SUBJECT - Breach of Contract Defense',
    result: 'FOR REFERENCE ONLY',
    description: 'TEST SUBJECT FOR REFERENCE ONLY: Testified in court on behalf of defendant that owned and managed commercial real estate. Plaintiff alleged that property manager (defendant) wrongfully and prematurely breached the lease agreement and claimed economic damages including lost profits. Expert testimony included analysis of plaintiff\'s misleading and overstated financial statements including analysis that plaintiff did not suffer economic damages. The court agreed with Mr. Engel\'s testimony and rejected plaintiff\'s claim for damages.',
    category: 'TEST - Real Estate Defense',
    isHighlighted: true
  }
]

export default function CasesPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 lg:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Representative Cases
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Over 35 years of forensic accounting expertise demonstrated through successful case outcomes, 
              including major jury awards and complex fraud investigations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="xl" className="bg-white text-primary-900 hover:bg-gray-100">
                  Discuss Your Case
                </Button>
              </Link>
              <a href="tel:+13102772220">
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-900">
                  Call (310) 277-2220
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Major Case Results */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Major Case Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Significant jury awards and arbitration results demonstrating our expertise 
              in complex forensic accounting and damages analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {majorCases.map((case_, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-2xl">
                      {case_.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-600">{case_.award}</div>
                      <div className="text-sm text-gray-500">{case_.category}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-3">{case_.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {case_.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Successful Cases */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Additional Successful Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional representative cases demonstrating our broad expertise 
              across various practice areas and litigation matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalCases.map((case_, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-lg font-bold text-primary-600">{case_.award}</div>
                    <div className="text-sm text-gray-500">{case_.category}</div>
                  </div>
                  <CardTitle className="text-lg mb-3">{case_.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    {case_.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fraud Investigations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complex Fraud Investigations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-profile fraud investigations involving federal agencies, 
              international money laundering, and complex financial schemes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {investigationCases.map((case_, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-lg font-bold text-green-600">{case_.status}</div>
                    <div className="text-sm text-gray-500">{case_.category}</div>
                  </div>
                  <CardTitle className={`text-lg mb-3 ${case_.isHighlighted ? 'text-red-700' : ''}`}>{case_.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className={`leading-relaxed text-sm ${case_.isHighlighted ? 'text-red-700 font-bold' : 'text-gray-600'}`}>
                    {case_.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Defense Cases */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Successful Defense Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert witness testimony and analysis that successfully defended clients 
              against allegations of fraud and breach of contract.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {defenseCases.map((case_, index) => (
              <Card key={index} className={`h-full ${case_.isHighlighted ? 'bg-yellow-100 border-red-500 border-2' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`text-lg font-bold ${case_.isHighlighted ? 'text-red-600' : 'text-blue-600'}`}>{case_.result}</div>
                    <div className={`text-sm ${case_.isHighlighted ? 'text-red-500' : 'text-gray-500'}`}>{case_.category}</div>
                  </div>
                  <CardTitle className={`text-lg mb-3 ${case_.isHighlighted ? 'text-red-700' : ''}`}>{case_.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className={`leading-relaxed text-sm ${case_.isHighlighted ? 'text-red-700 font-bold' : 'text-gray-600'}`}>
                    {case_.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Statistics */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Case Experience by the Numbers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">$2.3B</div>
                <div className="text-gray-600">Largest Jury Award</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
                <div className="text-gray-600">Court Testimonies</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">35+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
                <div className="text-gray-600">Forensic Cases</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Need Expert Forensic Accounting?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our proven track record of successful case outcomes demonstrates our ability 
            to provide expert analysis and testimony in complex litigation matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="xl" className="bg-white text-primary-900 hover:bg-gray-100">
                Discuss Your Case
              </Button>
            </Link>
            <a href="tel:+13102772220">
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-900">
                Call (310) 277-2220
              </Button>
            </a>
          </div>
          <p className="text-primary-200 text-sm mt-6">
            ✓ $2.3 Billion Award  ✓ 100+ Court Testimonies  ✓ 35+ Years Experience
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
