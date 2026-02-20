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
  title: 'Business Valuation Expert Witness | CVA, ABV | Los Angeles | Engel & Engel LLP',
  description: 'Certified Valuation Analyst (CVA) and Accreditation in Business Valuation (ABV) with 100+ business valuations. Expert witness testimony in Los Angeles and California.',
  
  // Open Graph
  openGraph: {
    title: 'Business Valuation Expert Witness | CVA, ABV | Los Angeles',
    description: 'Certified Valuation Analyst (CVA) and ABV credentials. 100+ business valuations. Expert witness testimony in Los Angeles.',
    url: 'https://engelandengel.com/practice-areas/business-valuation',
    siteName: 'Engel & Engel LLP',
    images: [
      {
        url: 'https://engelandengel.com/images/og-business-valuation.jpg',
        width: 1200,
        height: 630,
        alt: 'Business Valuation Expert Witness Services - Los Angeles',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Business Valuation Expert Witness | CVA, ABV | Los Angeles',
    description: 'CVA and ABV credentials. 100+ business valuations. Expert witness testimony.',
    images: ['https://engelandengel.com/images/twitter-business-valuation.jpg'],
  },
  
  // Robots
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
  
  // Canonical
  alternates: {
    canonical: 'https://engelandengel.com/practice-areas/business-valuation',
  },
}

export default function BusinessValuationEnhancedPage() {
  const faqItems = [
    {
      question: "What credentials do you have for business valuation?",
      answer: "Our team holds two business valuation credentials: Certified Valuation Analyst (CVA) and Accreditation in Business Valuation (ABV). We have completed over 100 business valuations across diverse industries."
    },
    {
      question: "What types of business valuations do you perform?",
      answer: "We perform all types of business valuations including minority shareholder valuations, fair value solvency analysis, estate valuations, merger & acquisition valuations, partnership dissolution valuations, and California Corporate Code Section 2000 valuations."
    },
    {
      question: "Can you provide expert witness testimony for business valuation cases?",
      answer: "Yes, we regularly provide expert witness testimony in business valuation disputes. Our valuations are prepared consistent with established valuation principles and can withstand court scrutiny and cross-examination."
    },
    {
      question: "How long does a business valuation take?",
      answer: "The timeline varies based on business complexity and data availability, but most valuations take 4-8 weeks. We work efficiently to gather financial information, analyze data, and prepare comprehensive valuation reports."
    },
    {
      question: "What valuation methods do you use?",
      answer: "We use all three standard valuation approaches: Income Approach (discounted cash flow), Market Approach (comparable company analysis), and Asset Approach (adjusted net asset method). The appropriate method depends on the business type and valuation purpose."
    }
  ]

  return (
    <main>
      {/* Organization Schema */}
      <SchemaMarkup 
        type="Organization" 
        data={{
          address: {
            street: "11766 Wilshire Blvd, Suite 1170",
            zip: "90025"
          },
          socialMedia: [
            "https://www.linkedin.com/company/engel-engel-llp"
          ]
        }}
      />
      
      {/* LocalBusiness Schema */}
      <SchemaMarkup 
        type="LocalBusiness" 
        data={{
          address: {
            street: "11766 Wilshire Blvd, Suite 1170",
            zip: "90025"
          },
          geo: {
            latitude: "34.0522",
            longitude: "-118.2437"
          }
        }}
      />
      
      {/* Service Schema */}
      <SchemaMarkup 
        type="ProfessionalService" 
        data={{
          name: "Business Valuation Expert Witness Services",
          description: "Certified business valuation experts (CVA, ABV) with 100+ valuations in Los Angeles and throughout California",
          serviceType: "Forensic Accounting - Business Valuation",
          address: {
            street: "11766 Wilshire Blvd, Suite 1170",
            zip: "90025"
          }
        }}
      />
      
      {/* HowTo Schema */}
      <SchemaMarkup 
        type="HowTo" 
        data={{
          name: "How to Conduct a Business Valuation",
          description: "Our proven 5-step process for conducting comprehensive business valuations",
          steps: [
            {
              name: "Initial Engagement",
              text: "Understand valuation purpose, business operations, and gather preliminary financial information."
            },
            {
              name: "Financial Analysis",
              text: "Analyze historical financial statements, normalize earnings, and identify value drivers."
            },
            {
              name: "Valuation Methodology Selection",
              text: "Select appropriate valuation approaches (Income, Market, Asset) based on business characteristics."
            },
            {
              name: "Valuation Calculation",
              text: "Apply valuation methods, calculate business value, and determine appropriate discounts/premiums."
            },
            {
              name: "Report & Testimony",
              text: "Prepare detailed valuation report and provide expert witness testimony if needed."
            }
          ]
        }}
      />
      
      {/* FAQ Schema */}
      <SchemaMarkup 
        type="FAQ" 
        data={{
          questions: faqItems
        }}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 lg:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom py-20">
          <Breadcrumbs items={[
            { label: 'Practice Areas', href: '/practice-areas' },
            { label: 'Business Valuation', href: '/practice-areas/business-valuation' }
          ]} />
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Business Valuation
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              CVA and ABV credentials with 100+ business valuations across diverse industries.
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

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction - FROM ORIGINAL SITE */}
            <div className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Engel & Engel possesses extensive experience and qualifications to provide business valuation services and serve as your valuation expert. Our qualifications include two business valuation credentials, Certified Valuation Analyst (CVA) and Accreditation in Business Valuation (ABV). Our experience includes over 100 business valuations in a wide variety of industries.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Overall, Engel & Engel has the credentials and experience to prepare business valuations that are consistent with established valuation principles and are able to withstand the scrutiny of the court.
              </p>
            </div>

            {/* Local SEO Content */}
            <div className="mb-12 bg-primary-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Business Valuation Expert Witness in Los Angeles
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Serving Los Angeles County, Orange County, Ventura County, San Bernardino County, Riverside County, and throughout Southern California. Our Los Angeles office provides comprehensive business valuation services for attorneys, businesses, and individuals throughout the region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you need a business valuation expert for cases in downtown Los Angeles, Santa Monica, Beverly Hills, Pasadena, Irvine, San Diego, or anywhere in California, our CVA and ABV credentialed experts are ready to assist with shareholder disputes, mergers & acquisitions, estate planning, and all types of business valuation needs.
              </p>
            </div>

            {/* Related Services - Internal Linking */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Forensic Accounting Services</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our business valuation services often complement other forensic accounting specialties:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/practice-areas/economic-damages">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-600">Economic Damages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Lost business value and goodwill calculations require expert valuation analysis.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/practice-areas/partnership-disputes">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-600">Partnership Disputes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Shareholder and partnership disputes often require business valuation for buyouts.
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
                        Fraud can significantly impact business value and require forensic analysis.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/practice-areas/bankruptcy-insolvency">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-600">Bankruptcy & Insolvency</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Solvency analysis and fair value determinations in bankruptcy proceedings.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/practice-areas/trust-probate-litigation">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-600">Trust & Probate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Estate valuations for trust and probate litigation matters.
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
                        Business valuation in alter ego and veil piercing cases.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>

            {/* Business Valuation Forensic Accounting Services - FROM ORIGINAL SITE */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Business Valuation Forensic Accounting Services</h2>
              <p className="text-lg text-gray-700 mb-8">
                When the stakes are high, Engel & Engel can serve as your expert in connection with the following:
              </p>

              {/* ALL 13 VALUATION TYPES FROM ORIGINAL SITE - Professional Clean Design */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Minority Shareholder Valuation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Valuation of minority ownership interests with appropriate discounts for lack of control and marketability.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Corporate Mergers & Acquisitions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Business valuation for M&A transactions, purchase price allocation, and fairness opinions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Corporate and Partnership Dissolutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Valuation of business interests in dissolution proceedings and buyout scenarios.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Corporation Code 2000 Valuation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      California Corporate Code Section 2000 valuations for dissenting shareholder rights.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Net Worth Valuation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Asset-based valuation approach for businesses with significant tangible assets.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Shareholder & Partnership Disputes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Business valuation for shareholder oppression, partnership disputes, and buyout litigation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Economic Damage Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Lost business value calculations in litigation involving business torts and damages.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Fair Value Solvency Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Solvency opinions and fair value determinations for bankruptcy and fraudulent transfer cases.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Estate Valuation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Business valuation for estate tax, gift tax, and estate planning purposes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Buy and Sell Agreements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Valuation for buy-sell agreement purposes and formula development.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Buyout Agreements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Business valuation for partner and shareholder buyout transactions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Expert Witness Testimony</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Credible expert witness testimony on business valuation matters in litigation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Research Publications - FROM ORIGINAL SITE */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Publications</h2>
              <p className="text-lg text-gray-700 mb-6">
                Engel & Engel has published the following research publication in connection with business valuation:
              </p>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start group">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <Link href="/publications" className="text-gray-700 text-lg hover:text-primary-700 hover:underline transition-colors">
                    Business Valuation Under California Corporate Code Section 2000
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
            </div>

            {/* Our Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Business Valuation Process</h2>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Engagement</h3>
                      <p className="text-gray-600">
                        Understand valuation purpose, business operations, industry dynamics, and gather preliminary financial information.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Analysis</h3>
                      <p className="text-gray-600">
                        Analyze historical financial statements, normalize earnings, identify value drivers, and assess financial performance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Valuation Methodology Selection</h3>
                      <p className="text-gray-600">
                        Select appropriate valuation approaches (Income, Market, Asset) based on business characteristics and valuation purpose.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Valuation Calculation</h3>
                      <p className="text-gray-600">
                        Apply valuation methods, calculate business value, and determine appropriate discounts and premiums.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Report & Testimony</h3>
                      <p className="text-gray-600">
                        Prepare detailed valuation report and provide expert witness testimony if needed for litigation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Engel & Engel</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Dual Credentials</h3>
                  <p className="text-gray-600">
                    Certified Valuation Analyst (CVA) and Accreditation in Business Valuation (ABV) credentials.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Extensive Experience</h3>
                  <p className="text-gray-600">
                    Over 100 business valuations completed across diverse industries and valuation purposes.
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
                    Valuations prepared consistent with established principles that withstand court scrutiny.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto">
              <FAQ items={faqItems} />
            </div>

            {/* Contact CTA - FROM ORIGINAL SITE */}
            <div className="bg-primary-50 rounded-2xl p-8 text-center mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need a Business Valuation Expert?
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

