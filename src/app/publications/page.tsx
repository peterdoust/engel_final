import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Publications | Forensic Accounting Research | Engel & Engel',
  description: 'Comprehensive research publications on economic damages, infringement damages, fraudulent transfers, business valuation, and expert witness testimony by Engel & Engel.',
}

const publicationCategories = [
  {
    title: 'Economic Damages',
    description: 'Comprehensive framework for calculating lost profits and economic damages',
    publications: [
      'Framework for the Calculation of Lost Profits: Part I',
      'Framework for the Calculation of Lost Profits: Part II: "The Element of Certainty"',
      'Framework for the Calculation of Lost Profits: Part III: "Prospective Lost Profits"',
      'Framework for the Calculation of Lost Profits: Part IV: "Unestablished Businesses"',
      'Framework for the Calculation of Lost Profits: Part V: "Mitigation of Damages"',
      'Discounting Future Lost Profits'
    ],
    icon: '📊',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'Infringement Damages',
    description: 'Framework for calculating trademark and patent infringement damages',
    publications: [
      'Framework for the Calculation of Infringement Damages: Part I: "Trademark Infringement Damages Under the Lanham Act"',
      'Framework for the Calculation of Infringement Damages: Part II "Patent Infringement Damages"'
    ],
    icon: '⚖️',
    color: 'bg-green-100 text-green-600'
  },
  {
    title: 'Fraudulent Transfers',
    description: 'Analysis of fraudulent transfer elements and legal requirements',
    publications: [
      'Fraudulent Transfers: "The Element of Insolvency"',
      'Fraudulent Transfers: "The Element of Reasonably Equivalent Value"',
      'Fraudulent Transfers: "The Element of Unreasonably Small Capital"',
      'Fraudulent Transfers: "The Element of Inability to Pay Debts as They Mature"'
    ],
    icon: '🔍',
    color: 'bg-red-100 text-red-600'
  },
  {
    title: 'Alter Ego',
    description: 'Investigation and analysis of alter ego factors in corporate litigation',
    publications: [
      'Investigation & Discovery of Alter Ego Factors',
      'Alter Ego: "The Element of Undercapitalization"'
    ],
    icon: '🏢',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    title: 'Employment Damages',
    description: 'Framework for calculating employment-related economic damages',
    publications: [
      'Framework for the Calculation of Employment Damages'
    ],
    icon: '👤',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    title: 'Business Valuation',
    description: 'Business valuation under California Corporate Code requirements',
    publications: [
      'Business Valuation Under California Corporate Code Section 2000'
    ],
    icon: '💰',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    title: 'Expert Witness Testimony',
    description: 'Admissibility and reliability of expert testimony and evidence',
    publications: [
      'Admissibility of Expert Testimony: "The Element of Reliability"',
      'The Business Records Exception to the Hearsay Rule: "The Admissibility of Financial Records as Evidence in Federal and State Court"'
    ],
    icon: '🎯',
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    title: 'Legal Resources',
    description: 'Practical resources for legal professionals and litigation support',
    publications: [
      'Deposition Outline for Officers & Executives',
      'Document Request for Accounting & Business Records'
    ],
    icon: '📚',
    color: 'bg-teal-100 text-teal-600'
  }
]

export default function PublicationsPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 lg:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Publications
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Comprehensive research publications on forensic accounting, economic damages, 
              and expert witness testimony from The Forensic Accounting Perspective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/publications/request">
                <Button size="xl" className="bg-white text-primary-900 hover:bg-gray-100">
                  Request Publications
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

      {/* Publications Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Research & Expertise
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Engel & Engel has published extensive research across multiple areas of forensic accounting, 
              providing theoretical foundations and practical methodologies for complex litigation matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">20+</div>
              <div className="text-gray-600">Research Publications</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">8</div>
              <div className="text-gray-600">Practice Areas Covered</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">35+</div>
              <div className="text-gray-600">Years of Research</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">Court Applications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Publication Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research publications cover the full spectrum of forensic accounting practice areas, 
              providing in-depth analysis and practical frameworks for complex litigation matters.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {publicationCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${category.color}`}>
                      {category.icon}
                    </div>
                    <div className="text-sm text-gray-500">
                      {category.publications.length} Publication{category.publications.length > 1 ? 's' : ''}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-3">{category.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.publications.map((publication, pubIndex) => (
                      <div key={pubIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0 mt-2"></div>
                        <div className="text-sm text-gray-700 leading-relaxed font-semibold">{publication}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link href={`/publications/request?category=${category.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        Request These Publications
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Publications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlighted research publications that have been widely referenced 
              in forensic accounting practice and litigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary-600">
              <CardHeader>
                <div className="text-4xl mb-4">📊</div>
                <CardTitle className="text-lg mb-3 text-primary-700">Lost Profits Framework Series</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Comprehensive five-part series covering all aspects of lost profits calculation,
                  from basic principles to complex scenarios involving unestablished businesses.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/publications/request?category=economic-damages">
                  <Button variant="outline" size="sm" className="w-full">Request Series</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary-600">
              <CardHeader>
                <div className="text-4xl mb-4">🔍</div>
                <CardTitle className="text-lg mb-3 text-primary-700">Fraudulent Transfers Analysis</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Four-part series analyzing the key elements of fraudulent transfers,
                  including insolvency, reasonably equivalent value, and undercapitalization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/publications/request?category=fraudulent-transfers">
                  <Button variant="outline" size="sm" className="w-full">Request Series</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary-600">
              <CardHeader>
                <div className="text-4xl mb-4">🎯</div>
                <CardTitle className="text-lg mb-3 text-primary-700">Expert Witness Testimony</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Essential publications on the admissibility and reliability of expert testimony,
                  including business records exceptions to hearsay rules.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/publications/request?category=expert-witness">
                  <Button variant="outline" size="sm" className="w-full">Request Publications</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Request Publications */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Request Publications</h2>
            <p className="text-xl text-gray-600 mb-12">
              All publications are available to legal professionals, forensic accountants, 
              and other qualified practitioners. Contact us to request specific publications.
            </p>
            
            <div className="bg-white rounded-xl p-8 shadow-soft">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Request</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Contact Us</h4>
                        <p className="text-gray-600">Call (310) 277-2220 or use our contact form</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Specify Publications</h4>
                        <p className="text-gray-600">Let us know which publications you need</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Receive Publications</h4>
                        <p className="text-gray-600">Publications delivered electronically</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-primary-600 mb-2">Free</div>
                    <div className="text-gray-600">For Qualified Professionals</div>
                  </div>
                  <div className="space-y-3">
                    <Link href="/publications/request">
                      <Button size="lg" className="w-full">
                        Request Publications
                      </Button>
                    </Link>
                    <a href="tel:+13102772220">
                      <Button variant="outline" size="lg" className="w-full">
                        Call (310) 277-2220
                      </Button>
                    </a>
                  </div>
                </div>
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
            Our published research demonstrates our deep expertise in forensic accounting. 
            Contact us to discuss how our knowledge can support your case.
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
            ✓ 20+ Research Publications  ✓ 35+ Years Experience  ✓ Court-Qualified Experts
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
