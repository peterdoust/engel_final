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
  title: 'Real Estate Litigation Expert Witness | Los Angeles | Engel & Engel LLP',
  description: 'Real estate litigation forensic accounting for developers, brokers, owners, buyers, sellers. $100M+ arbitration award experience. Expert witness testimony in Los Angeles.',
  
  openGraph: {
    title: 'Real Estate Litigation Expert Witness | Los Angeles',
    description: 'Real estate forensic accounting. $100M+ arbitration experience. Expert witness testimony.',
    url: 'https://engelandengel.com/practice-areas/real-estate-litigation',
    siteName: 'Engel & Engel LLP',
    images: [{
      url: 'https://engelandengel.com/images/og-real-estate-litigation.jpg',
      width: 1200,
      height: 630,
      alt: 'Real Estate Litigation Expert Witness Services - Los Angeles',
    }],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Litigation Expert Witness | Los Angeles',
    description: 'Real estate forensic accounting. Expert witness testimony.',
    images: ['https://engelandengel.com/images/twitter-real-estate-litigation.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: 'https://engelandengel.com/practice-areas/real-estate-litigation',
  },
}

export default function RealEstateLitigationEnhancedPage() {
  const faqItems = [
    {
      question: "What types of real estate disputes require forensic accounting?",
      answer: "Real estate disputes involving partnership disputes, buy/sell agreements, hidden distributions, capital contribution issues, operating agreement violations, and lost profits often require forensic accounting expertise to analyze complex financial transactions."
    },
    {
      question: "What was your largest real estate litigation case?",
      answer: "Our real estate litigation experience is highlighted with an arbitration award in excess of $100 million in connection with a buy/sell dispute of a commercial shopping center, demonstrating our ability to handle high-stakes complex real estate matters."
    },
    {
      question: "Can you investigate hidden distributions in real estate partnerships?",
      answer: "Yes, we specialize in investigating hidden distributions, analyzing capital accounts, reviewing operating agreements, and tracing funds to uncover undisclosed payments to partners or related parties in real estate ventures."
    },
    {
      question: "Do you work for developers, brokers, or property owners?",
      answer: "We work for all parties in real estate litigation - developers, brokers, lessors, lessees, owners, buyers, sellers, and financers. Our objective is to provide accurate forensic analysis regardless of which party retains us."
    },
    {
      question: "What financial issues do you analyze in real estate cases?",
      answer: "We analyze ownership issues, capital contributions, distributions, shareholder/partnership agreements, capital accounts, historical revenues and expenses, loans and loan proceeds, operating agreements, and lost profits and damages."
    }
  ]

  return (
    <main>
      <SchemaMarkup type="Organization" data={{
        address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" },
        socialMedia: ["https://www.linkedin.com/company/engel-engel-llp"]
      }} />
      
      <SchemaMarkup type="LocalBusiness" data={{
        address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" },
        geo: { latitude: "34.0522", longitude: "-118.2437" }
      }} />
      
      <SchemaMarkup type="ProfessionalService" data={{
        name: "Real Estate Litigation Expert Witness Services",
        description: "Real estate forensic accounting for developers, brokers, owners, buyers, sellers in Los Angeles",
        serviceType: "Forensic Accounting - Real Estate Litigation",
        address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }
      }} />
      
      <SchemaMarkup type="HowTo" data={{
        name: "How to Conduct Real Estate Forensic Analysis",
        description: "Our proven 5-step process for real estate litigation forensic accounting",
        steps: [
          { name: "Initial Case Review", text: "Review real estate transaction documents, partnership agreements, and identify key financial issues." },
          { name: "Document Collection", text: "Gather financial records, bank statements, capital account statements, and operating agreements." },
          { name: "Financial Analysis", text: "Analyze revenues, expenses, distributions, capital contributions, and loan proceeds." },
          { name: "Investigation", text: "Investigate ownership issues, hidden distributions, and agreement violations." },
          { name: "Expert Report & Testimony", text: "Prepare comprehensive reports and provide expert witness testimony in court or arbitration." }
        ]
      }} />
      
      <SchemaMarkup type="FAQ" data={{ questions: faqItems }} />
      
      <Header />
      
      <section className="pt-16 lg:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom py-20">
          <Breadcrumbs items={[
            { label: 'Practice Areas', href: '/practice-areas' },
            { label: 'Real Estate Litigation', href: '/practice-areas/real-estate-litigation' }
          ]} />
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Real Estate Litigation
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Forensic accounting expertise for complex real estate disputes. $100M+ arbitration award experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(310) 277-2220">
                <Button size="xl" className="bg-white text-primary-900 hover:bg-gray-100">
                  Call (310) 277-2220
                </Button>
              </a>
              <Link href="/contact">
                <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-900">
                  Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            <div className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Real estate litigators often require the expertise of a forensic accountant when evaluating financial issues. When financial issues arise for developers, brokers, lessors, lessees, owners, buyers, sellers, and financers, Engel & Engel brings to bear significant experience in investigating and analyzing complex real estate accounting issues.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our real estate litigation experience is highlighted with an arbitration award in excess of $100 million in connection with a buy/sell dispute of a commercial shopping center. Overall, Engel & Engel has the qualifications and experience to conduct a forensic analysis that is consistent with established financial principles and able to withstand the scrutiny of the court.
              </p>
            </div>

            <div className="mb-12 bg-primary-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Real Estate Litigation Expert Witness in Los Angeles
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Serving Los Angeles County, Orange County, Ventura County, San Bernardino County, Riverside County, and throughout Southern California. Our Los Angeles office provides comprehensive real estate forensic accounting services for real estate attorneys, developers, and property owners throughout the region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you need a real estate litigation expert for cases in downtown Los Angeles, Santa Monica, Beverly Hills, Pasadena, Irvine, San Diego, or anywhere in California, our team is ready to assist with partnership disputes, buy/sell agreements, hidden distributions, and all types of real estate financial litigation.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Forensic Accounting Services</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our real estate litigation services often complement other forensic accounting specialties:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/practice-areas/partnership-disputes">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-600">Partnership Disputes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Real estate partnership and shareholder disputes require forensic analysis.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/practice-areas/fraud-investigation">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-600">Fraud Investigation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Investigate fraud and hidden distributions in real estate transactions.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/practice-areas/business-valuation">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-600">Business Valuation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Valuation of real estate entities and partnership interests.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/practice-areas/economic-damages">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-600">Economic Damages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Calculate lost profits and damages in real estate disputes.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/practice-areas/construction-litigation">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-600">Construction Litigation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Construction defects and delays in real estate development projects.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/practice-areas/alter-ego">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-600">Alter Ego</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Alter ego analysis in real estate entity disputes.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How Engel & Engel Helps Real Estate Litigation Attorneys</h2>
              <p className="text-lg text-gray-700 mb-8">
                When the stakes are high, Engel & Engel can serve as your expert in connection with the following:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Investigation with Ownership Issues</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Investigate ownership disputes, title issues, and partnership interest calculations in real estate ventures.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Investigation of Capital Contribution Issues</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Analyze capital contributions, verify funding sources, and determine proper capital account balances.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Analysis of Distributions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Analyze distributions to partners, verify proper allocation, and identify improper distributions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Investigation of Hidden Distributions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Uncover concealed distributions, related party transactions, and undisclosed payments to insiders.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Analysis of Shareholder/Partnership Agreements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Review and analyze partnership agreements, operating agreements, and buy/sell provisions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Analysis of Capital Accounts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Reconstruct capital accounts, verify balances, and determine proper ownership percentages.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Analysis of Historical Revenues and Expenses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Analyze property revenues, operating expenses, and financial performance over time.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Analysis of Loans and Loan Proceeds</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Trace loan proceeds, analyze loan agreements, and verify proper use of borrowed funds.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Analysis of Historical Expenses and Hidden Distributions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Investigate expense accounts for hidden distributions and improper payments.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Analysis of Operating Agreements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Review operating agreements and determine compliance with distribution and management provisions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Analysis of Lost Profits and Damages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Calculate lost profits, diminution in value, and economic damages in real estate disputes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Real Estate Forensic Process</h2>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Case Review</h3>
                      <p className="text-gray-600">
                        Review real estate transaction documents, partnership agreements, and identify key financial issues and disputes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Document Collection</h3>
                      <p className="text-gray-600">
                        Gather financial records, bank statements, capital account statements, operating agreements, and loan documents.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Analysis</h3>
                      <p className="text-gray-600">
                        Analyze revenues, expenses, distributions, capital contributions, and loan proceeds to identify discrepancies.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Investigation</h3>
                      <p className="text-gray-600">
                        Investigate ownership issues, hidden distributions, agreement violations, and calculate damages.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Report & Testimony</h3>
                      <p className="text-gray-600">
                        Prepare comprehensive expert reports and provide credible testimony in court or arbitration proceedings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Engel & Engel</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">$100M+ Experience</h3>
                  <p className="text-gray-600">
                    Arbitration award in excess of $100 million in commercial shopping center buy/sell dispute.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Complex Analysis</h3>
                  <p className="text-gray-600">
                    Extensive experience investigating complex real estate accounting issues and partnership disputes.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Court-Tested</h3>
                  <p className="text-gray-600">
                    Forensic analysis consistent with established financial principles that withstands court scrutiny.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <FAQ items={faqItems} />
            </div>

            <div className="bg-primary-50 rounded-2xl p-8 text-center mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need a Real Estate Litigation Expert?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                For additional information about Engel & Engel's Forensic Accounting Services or a consultation, please contact:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center">
                  <p className="font-semibold text-gray-900">Brandon J. Engel, CPA, CFE</p>
                  <p className="text-gray-600">brandon@engelandengel.com</p>
                  <p className="text-gray-600">(310) 277-2220</p>
                </div>
                <div className="flex gap-3">
                  <a href="tel:(310) 277-2220">
                    <Button className="bg-primary-600 hover:bg-primary-700">Call Now</Button>
                  </a>
                  <Link href="/contact">
                    <Button variant="outline">Contact Us</Button>
                  </Link>
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

