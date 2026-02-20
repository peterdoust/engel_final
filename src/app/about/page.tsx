'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Certifications from '@/components/sections/Certifications'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const firmStats = [
  {
    number: '35+',
    label: 'Years Experience',
    description: 'Forensic accounting practice since 1994'
  },
  {
    number: '500+',
    label: 'Forensic Cases',
    description: 'Complex litigation matters handled'
  },
  {
    number: '20+',
    label: 'Research Publications',
    description: 'Authored publications and frameworks'
  },
  {
    number: '$2.3B',
    label: 'Largest Jury Award',
    description: 'Record-setting case result'
  },
  {
    number: '6',
    label: 'Professional Certifications',
    description: 'CPA, CFE, CIRA, CVA, MAFF, ABV'
  },
  {
    number: '100+',
    label: 'Court Testimonies',
    description: 'Expert witness appearances'
  }
]



const practiceAreas = [
  { name: 'Economic Damages', url: '/practice-areas/economic-damages' },
  { name: 'Fraud Investigation', url: '/practice-areas/fraud-investigation' },
  { name: 'Business Valuation', url: '/practice-areas/business-valuation' },
  { name: 'Bankruptcy & Insolvency', url: '/practice-areas/bankruptcy-insolvency' },
  { name: 'Intellectual Property (IP) Litigation', url: '/practice-areas/intellectual-property-litigation' },
  { name: 'Real Estate Litigation', url: '/practice-areas/real-estate-litigation' },
  { name: 'Construction Litigation', url: '/practice-areas/construction-litigation' },
  { name: 'Alter Ego', url: '/practice-areas/alter-ego' },
  { name: 'Fraudulent Transfers', url: '/practice-areas/fraudulent-transfers' },
  { name: 'Employment Litigation', url: '/practice-areas/employment-litigation' },
  { name: 'Business Interruption', url: '/practice-areas/business-interruption' },
  { name: 'Personal Injury', url: '/practice-areas/personal-injury' },
  { name: 'Accounting Malpractice', url: '/practice-areas/accounting-malpractice' },
  { name: 'Partnership / Shareholder Disputes', url: '/practice-areas/partnership-shareholder-disputes' }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-primary-200">California's Top</span> Forensic Accountants
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-primary-100">
              Over 35 years of expertise in forensic accounting and expert witness testimony
            </p>
            <p className="text-lg text-primary-200 mb-8">
              ✓ $2.3 Billion Jury Award  ✓ 500+ Cases  ✓ Big 4 Experience  ✓ 6 Professional Certifications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary-900 hover:bg-primary-50">
                  Free Consultation
                </Button>
              </Link>
              <Link href="tel:(310) 277-2220">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-900">
                  Call (310) 277-2220
                </Button>
              </Link>
            </div>
            <p className="text-primary-200 text-sm mt-4">
              We offer free consultations regarding your matter.
            </p>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let Our Numbers Do The Talking</h2>
            <p className="text-xl text-gray-600">Proven track record of excellence in forensic accounting</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">35+</div>
              <div className="text-sm text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Forensic Cases</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">20+</div>
              <div className="text-sm text-gray-600">Research Publications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">6</div>
              <div className="text-sm text-gray-600">Professional Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">Big 4</div>
              <div className="text-sm text-gray-600">Forensic Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">$2.3B</div>
              <div className="text-sm text-gray-600">Jury Award</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                From Strategy to Testimony
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Established in Los Angeles in 1994, <strong>Engel & Engel LLP</strong> has positioned itself as one of the premier providers of forensic accounting and advisory services, not only in California, but nationwide as well.
                </p>
                <p>
                  We provide private practice law firms, as well as in-house counsel of Fortune 500 to middle-market companies, complex business litigation support, including fraud investigations, economic damages, business valuation, bankruptcy and insolvency, alter ego, IP litigation, employment litigation, real estate litigation, construction litigation and a variety of other litigation matters.
                </p>
                <p>
                  With over <strong>35 years in the forensic accounting industry</strong>, working with attorneys and legal teams in and out of the courtroom, Engel & Engel brings credentials, expertise, and careful attention to each and every case.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-primary-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary-900 mb-6">Why Choose Engel & Engel?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Proven Expertise:</strong> Over 500 forensic accounting cases successfully handled</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Exceptional Credentials:</strong> Multiple professional certifications and Big 4 experience</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Thought Leadership:</strong> 20+ authored research publications in forensic accounting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Nationwide Reach:</strong> Serving clients from Fortune 500 to middle-market companies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Certifications</h2>
            <p className="text-xl text-gray-600">The credibility of our testimony is enhanced by our exemplary credentials</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
            {[
              { name: 'CPA', fullName: 'Certified Public Accountant', image: '/images/certifications/CPA.png', alt: 'AICPA - American Institute of CPAs' },
              { name: 'CFE', fullName: 'Certified Fraud Examiner', image: '/images/certifications/CFE.png', alt: 'ACFE - Association of Certified Fraud Examiners' },
              { name: 'CIRA', fullName: 'Certified Insolvency & Restructuring Advisor', image: '/images/certifications/CIRA.png', alt: 'AIRA - Association of Insolvency & Restructuring Advisors' },
              { name: 'CVA', fullName: 'Certified Valuation Analyst', image: '/images/certifications/CVA.png', alt: 'NACVA - National Association of Certified Valuators and Analysts' },
              { name: 'MAFF', fullName: 'Master Analyst in Financial Forensics', image: '/images/certifications/MAFF.png', alt: 'MAFF - Master Analyst in Financial Forensics' },
              { name: 'ABV', fullName: 'Accredited in Business Valuation', image: '/images/certifications/ABV.png', alt: 'ABV - Accredited in Business Valuation' }
            ].map((cert, index) => (
              <div key={index} className="flex flex-col items-center justify-center group">
                <div className="relative w-full aspect-square max-w-[180px] transition-all duration-300 group-hover:scale-110">
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <p className="mt-4 text-sm font-semibold text-gray-700 text-center group-hover:text-primary-700 transition-colors">
                  {cert.name}
                </p>
                <p className="text-xs text-gray-500 text-center mt-1 hidden md:block">
                  {cert.fullName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main About Content - Selling Points */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                From Strategy to Testimony
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Established in Los Angeles in 1994, <strong>Engel & Engel LLP</strong> has positioned itself as one of the premier providers of forensic accounting and advisory services, not only in California, but nationwide as well.
                </p>
                <p>
                  We provide private practice law firms, as well as in-house counsel of Fortune 500 to middle-market companies, complex business litigation support, including fraud investigations, economic damages, business valuation, bankruptcy and insolvency, alter ego, IP litigation, employment litigation, real estate litigation, construction litigation and a variety of other litigation matters.
                </p>
                <p>
                  With over <strong>35 years in the forensic accounting industry</strong>, working with attorneys and legal teams in and out of the courtroom, Engel & Engel brings credentials, expertise, and careful attention to each and every case.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-primary-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary-900 mb-6">Why Choose Engel & Engel?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Proven Expertise:</strong> Over 500 forensic accounting cases successfully handled</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Exceptional Credentials:</strong> Multiple professional certifications and Big 4 experience</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Thought Leadership:</strong> 20+ authored research publications in forensic accounting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Nationwide Reach:</strong> Serving clients from Fortune 500 to middle-market companies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Story</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-6">
                With over 35 years of experience, Engel & Engel, LLP has positioned itself as one of the premier
                providers of forensic accounting and advisory services in the United States. We provide private
                practice law firms, as well as in-house counsel of Fortune 500 to middle-market companies, complex
                business litigation support, including fraud investigations, economic damages, business valuation,
                bankruptcy and insolvency, alter ego, IP litigation, employment litigation, real estate litigation,
                construction litigation and a variety of other litigation matters.
              </p>

              <p className="text-lg mb-6">
                With over 35 years in the forensic accounting industry, working with attorneys and legal
                teams in and out of the courtroom, Engel & Engel brings credentials, expertise, and careful
                attention to each and every case. Our qualifications make us the right choice for developing
                thoughtful strategies, investigating the particulars, and finally, delivering analysis and
                calculations with sound and persuasive testimony.
              </p>

              <p className="text-lg">
                We offer free consultations regarding your matter. Please contact Brandon Engel at
                <a href="tel:+13102772220" className="text-primary-600 font-semibold"> (310) 277-2220</a>
                or complete our contact form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Firm Statistics */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Let Our Numbers Do The Talking</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three decades of forensic accounting excellence demonstrated through measurable results
              and professional achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {firmStats.map((stat, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                  <CardTitle className="text-xl mb-2">{stat.label}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {stat.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Certifications */}
      <Certifications
        backgroundColor="white"
        subtitle="The credibility of our testimony is enhanced by our exemplary credentials and professional certifications across multiple disciplines."
      />

      {/* Areas of Expertise */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Areas of Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jason A. Engel, CPA, CFE, CIRA, CVA, MAFF, ABV, has served as a financial and
              economic expert witness for over 35 years and in over 500 cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {practiceAreas.map((area, index) => (
              <Link key={index} href={area.url}>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md hover:border-primary-300 transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-800 font-medium group-hover:text-primary-700 transition-colors duration-200">{area.name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Big Four Experience */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Big Four Forensic Experience</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our team brings extensive experience from major accounting firms, providing the depth
                  of knowledge and professional rigor expected in complex litigation matters.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  This Big Four background, combined with our specialized forensic accounting focus,
                  ensures that our clients receive the highest level of professional service and
                  expert analysis.
                </p>
                <Link href="/services">
                  <Button size="lg">
                    View Our Services
                  </Button>
                </Link>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Engel & Engel?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Proven Track Record</h4>
                      <p className="text-gray-600">$2.3 billion jury award and 500+ successful cases</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Comprehensive Expertise</h4>
                      <p className="text-gray-600">Six professional certifications and 35+ years experience</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Published Research</h4>
                      <p className="text-gray-600">20+ research publications and thought leadership</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Nationwide Service</h4>
                      <p className="text-gray-600">Serving clients across California and nationwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Our Team</h2>
            <p className="text-xl text-gray-600 mb-12">
              Located in downtown Los Angeles, we serve clients throughout California and nationwide.
              Contact us today for a free consultation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="text-left">
                <CardHeader>
                  <CardTitle className="text-xl">Jason A. Engel</CardTitle>
                  <CardDescription className="text-lg">CPA, CFE, CIRA, CVA, MAFF, ABV</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    <p>350 S Grand Avenue, Suite 3160</p>
                    <p>Los Angeles, CA 90071</p>
                    <p>Tel: <a href="tel:+13102772220" className="text-primary-600 font-semibold">(310) 277-2220</a></p>
                    <p>Fax: (310) 277-2212</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-left">
                <CardHeader>
                  <CardTitle className="text-xl">Brandon J. Engel</CardTitle>
                  <CardDescription className="text-lg">CPA, CFE</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    <p>350 S Grand Avenue, Suite 3160</p>
                    <p>Los Angeles, CA 90071</p>
                    <p>Tel: <a href="tel:+13102772220" className="text-primary-600 font-semibold">(310) 277-2220</a></p>
                    <p>Fax: (310) 277-2212</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our 35+ years of forensic accounting expertise
            can support your litigation matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="xl" className="bg-white text-primary-900 hover:bg-gray-100">
                Free Consultation
              </Button>
            </Link>
            <a href="tel:+13102772220">
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-900">
                Call (310) 277-2220
              </Button>
            </a>
          </div>
          <p className="text-primary-200 text-sm mt-6">
            ✓ 35+ Years Experience  ✓ $2.3 Billion Award  ✓ 500+ Cases  ✓ Free Consultation
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
