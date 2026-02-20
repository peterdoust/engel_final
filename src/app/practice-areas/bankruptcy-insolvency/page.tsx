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
  title: 'Bankruptcy & Insolvency Expert Witness | CIRA | Los Angeles | Engel & Engel LLP',
  description: 'Certified Insolvency and Restructuring Advisor (CIRA) providing bankruptcy forensic accounting, solvency analysis, fraudulent transfer investigations in Los Angeles.',
  
  openGraph: {
    title: 'Bankruptcy & Insolvency Expert Witness | CIRA | Los Angeles',
    description: 'CIRA credentials. Bankruptcy fraud investigation, solvency analysis, fraudulent transfers. Expert witness testimony.',
    url: 'https://engelandengel.com/practice-areas/bankruptcy-insolvency',
    siteName: 'Engel & Engel LLP',
    images: [{
      url: 'https://engelandengel.com/images/og-bankruptcy-insolvency.jpg',
      width: 1200,
      height: 630,
      alt: 'Bankruptcy & Insolvency Expert Witness Services - Los Angeles',
    }],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Bankruptcy & Insolvency Expert Witness | CIRA | Los Angeles',
    description: 'CIRA credentials. Bankruptcy forensic accounting. Expert witness testimony.',
    images: ['https://engelandengel.com/images/twitter-bankruptcy-insolvency.jpg'],
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
    canonical: 'https://engelandengel.com/practice-areas/bankruptcy-insolvency',
  },
}

export default function BankruptcyInsolvencyEnhancedPage() {
  const faqItems = [
    {
      question: "What is a CIRA credential and why does it matter?",
      answer: "CIRA (Certified Insolvency and Restructuring Advisor) is a specialized credential for bankruptcy and insolvency professionals. It demonstrates expertise in bankruptcy law, financial restructuring, and insolvency analysis - critical for providing credible expert testimony."
    },
    {
      question: "What is a solvency analysis in bankruptcy?",
      answer: "A solvency analysis determines whether a company was solvent or insolvent at a specific point in time. This is critical for fraudulent transfer claims, preference actions, and determining whether a company had adequate capital."
    },
    {
      question: "What are fraudulent transfers in bankruptcy?",
      answer: "Fraudulent transfers are asset transfers made to defraud creditors or while the company was insolvent. We investigate these transfers, analyze insolvency, reasonably equivalent value, and small capital to support or defend fraudulent transfer claims."
    },
    {
      question: "Can you help with bankruptcy fraud investigations?",
      answer: "Yes, we conduct comprehensive bankruptcy fraud investigations including hidden assets, concealed distributions, false financial statements, and other fraudulent conduct in bankruptcy proceedings."
    },
    {
      question: "Do you work for debtors, creditors, or trustees?",
      answer: "We work for all parties in bankruptcy litigation - debtors, creditors, trustees, and shareholders. Our objective is to provide accurate forensic analysis regardless of which party retains us."
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
        name: "Bankruptcy & Insolvency Expert Witness Services",
        description: "CIRA credentialed bankruptcy forensic accounting in Los Angeles and throughout California",
        serviceType: "Forensic Accounting - Bankruptcy & Insolvency",
        address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }
      }} />
      
      <SchemaMarkup type="HowTo" data={{
        name: "How to Conduct a Bankruptcy Forensic Investigation",
        description: "Our proven 5-step process for bankruptcy forensic accounting",
        steps: [
          { name: "Initial Assessment", text: "Review bankruptcy filings, financial statements, and identify investigation scope." },
          { name: "Document Analysis", text: "Analyze financial records, transactions, and asset transfers during relevant periods." },
          { name: "Solvency Analysis", text: "Determine solvency status using balance sheet and cash flow tests." },
          { name: "Forensic Investigation", text: "Investigate fraudulent transfers, preferences, hidden assets, and bankruptcy fraud." },
          { name: "Expert Report & Testimony", text: "Prepare detailed reports and provide expert witness testimony in bankruptcy court." }
        ]
      }} />
      
      <SchemaMarkup type="FAQ" data={{ questions: faqItems }} />
      
      <Header />
      
      <section className="pt-16 lg:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom py-20">
          <Breadcrumbs items={[
            { label: 'Practice Areas', href: '/practice-areas' },
            { label: 'Bankruptcy & Insolvency', href: '/practice-areas/bankruptcy-insolvency' }
          ]} />
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Bankruptcy & Insolvency
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              CIRA credentials with extensive bankruptcy forensic accounting and expert witness experience.
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
                Bankruptcy lawyers require sophisticated support when litigating financial bankruptcy issues. Debtors, trustees, shareholders, and creditors often need forensic accounting investigations and turn to Engel & Engel to pierce through layers of documents and reconstruct a truthful picture of relevant financial facts. With a credentialed Certified Insolvency and Restructuring Advisor (CIRA), Engel & Engel is a qualified, go-to resource for bankruptcy forensic accounting services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Overall, Engel & Engel has the qualifications and experience to conduct a forensic bankruptcy investigation and analysis that is consistent with established legal principles and able to withstand the scrutiny of the court.
              </p>
            </div>

            <div className="mb-12 bg-primary-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Bankruptcy & Insolvency Expert Witness in Los Angeles
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Serving Los Angeles County, Orange County, Ventura County, San Bernardino County, Riverside County, and throughout Southern California. Our Los Angeles office provides comprehensive bankruptcy forensic accounting services for bankruptcy attorneys, trustees, and creditors throughout the region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you need a bankruptcy expert for cases in downtown Los Angeles, Santa Monica, Beverly Hills, Pasadena, Irvine, San Diego, or anywhere in California, our CIRA credentialed experts are ready to assist with solvency analysis, fraudulent transfer investigations, bankruptcy fraud, and all types of bankruptcy litigation support.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Forensic Accounting Services</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our bankruptcy services often complement other forensic accounting specialties:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/practice-areas/fraudulent-transfers">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-600">Fraudulent Transfers</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Investigate and analyze fraudulent transfers in bankruptcy proceedings.
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
                        Bankruptcy fraud investigations including hidden assets and false statements.
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
                        Solvency analysis and fair value determinations for bankruptcy cases.
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
                        Calculate damages in bankruptcy adversary proceedings and litigation.
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
                        Alter ego analysis in bankruptcy veil piercing cases.
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
                        Partnership and shareholder disputes in bankruptcy contexts.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How Engel & Engel Helps Bankruptcy Attorneys</h2>
              <p className="text-lg text-gray-700 mb-8">
                When the stakes are high, Engel & Engel can serve as your expert in connection with the following:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <CardTitle className="text-lg">Bankruptcy Fraud Investigation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Investigate hidden assets, concealed distributions, and fraudulent conduct in bankruptcy proceedings.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <CardTitle className="text-lg">Solvency Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Determine solvency status using balance sheet and cash flow tests for fraudulent transfer claims.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <CardTitle className="text-lg">Preference Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Analyze preferential transfers made within 90 days (or 1 year for insiders) before bankruptcy.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <CardTitle className="text-lg">Liquidation Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Calculate liquidation values and recovery analysis for creditors and trustees.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <CardTitle className="text-lg">Adequate Protection Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Analyze whether creditors have adequate protection for their secured interests.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <CardTitle className="text-lg">Reorganization Plans</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Financial analysis and feasibility studies for Chapter 11 reorganization plans.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <CardTitle className="text-lg">Fraudulent Transfers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Investigate transfers made to defraud creditors or while insolvent.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <CardTitle className="text-lg">Fair Value and Fair Market Value Valuations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Determine fair value and fair market value for bankruptcy purposes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <CardTitle className="text-lg">Analysis of Undercapitalization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Determine whether a company was adequately capitalized at formation or transfer.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <CardTitle className="text-lg">Analysis of Reasonably Equivalent Value</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Analyze whether transfers provided reasonably equivalent value to the debtor.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <CardTitle className="text-lg">Investigation of Hidden Distributions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Uncover concealed distributions to insiders and related parties.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <CardTitle className="text-lg">Expert Witness Testimony</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Credible expert witness testimony in bankruptcy court and adversary proceedings.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Publications</h2>
              <p className="text-lg text-gray-700 mb-6">
                Engel & Engel has published the following bankruptcy related publications:
              </p>

              <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
                <div className="flex items-start group">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <Link href="/publications" className="text-gray-700 text-lg hover:text-primary-700 hover:underline transition-colors">
                    Fraudulent Transfers: "The Element of Insolvency"
                  </Link>
                </div>
                <div className="flex items-start group">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <Link href="/publications" className="text-gray-700 text-lg hover:text-primary-700 hover:underline transition-colors">
                    Fraudulent Transfers: "The Element of Reasonably Equivalent Value"
                  </Link>
                </div>
                <div className="flex items-start group">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <Link href="/publications" className="text-gray-700 text-lg hover:text-primary-700 hover:underline transition-colors">
                    Fraudulent Transfers: "The Element of Unreasonably Small Capital"
                  </Link>
                </div>
                <div className="flex items-start group">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <Link href="/publications" className="text-gray-700 text-lg hover:text-primary-700 hover:underline transition-colors">
                    Fraudulent Transfers: "The Element of Inability to Pay Debts as They Mature"
                  </Link>
                </div>

                <div className="mt-8 text-center pt-4">
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

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Bankruptcy Investigation Process</h2>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Assessment</h3>
                      <p className="text-gray-600">
                        Review bankruptcy filings, financial statements, and identify investigation scope and key issues.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Document Analysis</h3>
                      <p className="text-gray-600">
                        Analyze financial records, transactions, and asset transfers during relevant periods before bankruptcy.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Solvency Analysis</h3>
                      <p className="text-gray-600">
                        Determine solvency status using balance sheet test, cash flow test, and capital adequacy analysis.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Forensic Investigation</h3>
                      <p className="text-gray-600">
                        Investigate fraudulent transfers, preferences, hidden assets, and bankruptcy fraud.
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
                        Prepare detailed expert reports and provide credible testimony in bankruptcy court.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">CIRA Credential</h3>
                  <p className="text-gray-600">
                    Certified Insolvency and Restructuring Advisor (CIRA) - the premier bankruptcy credential.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Published Research</h3>
                  <p className="text-gray-600">
                    Four published research articles on fraudulent transfer elements demonstrating thought leadership.
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
                    Extensive experience providing expert testimony in bankruptcy court and adversary proceedings.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <FAQ items={faqItems} />
            </div>

            <div className="bg-primary-50 rounded-2xl p-8 text-center mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need a Bankruptcy & Insolvency Expert?
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

