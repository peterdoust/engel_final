'use client'

import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function BankruptcyInsolvencyPage() {
  const serviceItems = [
    "Bankruptcy Fraud Investigation",
    "Solvency Analysis",
    "Preference Analysis",
    "Liquidation Analysis",
    "Adequate Protection Analysis",
    "Reorganization Plans",
    "Fraudulent Transfers",
    "Fair Value and Fair Market Value Valuations",
    "Analysis of Undercapitalization",
    "Analysis of Reasonably Equivalent Value",
    "Investigation of Hidden Distributions",
    "Expert Witness Testimony"
  ]

  const publications = [
    {
      title: 'Fraudulent Transfers: "The Element of Insolvency"',
      href: '/publications'
    },
    {
      title: 'Fraudulent Transfers: "The Element of Reasonably Equivalent Value"',
      href: '/publications'
    },
    {
      title: 'Fraudulent Transfers: "The Element of Reasonably Small Capital"',
      href: '/publications'
    },
    {
      title: 'Fraudulent Transfers: "The Element of Inability to Pay Debts as they Mature"',
      href: '/publications'
    }
  ]

  return (
    <main className="bg-white">
      {/* SEOMarkup Components - Preserved */}
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

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Bankruptcy and Insolvency"
            fill
            className="object-cover brightness-[0.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-transparent to-primary-950" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-6">
              <Breadcrumbs items={[
                { label: 'Practice Areas', href: '/practice-areas' },
                { label: 'Bankruptcy & Insolvency', href: '/practice-areas/bankruptcy-insolvency' }
              ]} />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">
              Bankruptcy & <br />
              <span className="font-serif italic font-medium text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">Insolvency</span>
            </h1>

            <div className="flex items-center justify-center space-x-6 mb-12 overflow-hidden max-w-2xl mx-auto">
              <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <h2 className="text-sm md:text-base font-bold text-primary-100 tracking-[0.4em] uppercase whitespace-nowrap">
                Sophisticated Financial Support
              </h2>
              <div className="h-[2px] flex-grow bg-gradient-to-l from-transparent via-gold/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 xl:col-span-5 relative">
              <div className="relative inline-block mb-10">
                <div className="absolute -inset-4 border border-gold/30 rounded-sm translate-x-2 translate-y-2 z-0" />
                <div className="relative z-10 bg-primary-950 text-white p-10 md:p-14 rounded-sm shadow-2xl">
                  <span className="block text-sm font-bold tracking-[0.5em] uppercase text-gold mb-2">Established</span>
                  <span className="block text-6xl md:text-8xl font-serif italic mb-6">1994</span>
                  <div className="h-[2px] w-16 bg-gold mb-6" />
                  <p className="text-primary-100 text-lg leading-relaxed font-light">
                    Three decades of uncompromising financial integrity and forensic excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-12 xl:col-span-7 flex flex-col justify-center lg:pt-10">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-8 leading-tight tracking-tight uppercase">
                Forensic Bankruptcy <br />
                <span className="font-serif italic text-primary-900 normal-case font-medium">Investigation and Analysis</span>
              </h2>
              <div className="space-y-6 text-xl text-gray-800 leading-relaxed font-light">
                <p>
                  Bankruptcy lawyers require sophisticated support when litigating financial bankruptcy issues. Debtors, trustees, shareholders, and creditors often need forensic accounting investigations and turn to Engel & Engel to pierce through layers of documents and reconstruct a truthful picture of relevant financial facts.
                </p>
                <p>
                  With a credentialed Certified Insolvency and Restructuring Advisor (CIRA), Engel & Engel is a qualified, go-to resource for bankruptcy forensic accounting services. Overall, Engel & Engel has the qualifications and experience to conduct a forensic bankruptcy investigation and analysis that is consistent with established legal principles and able to withstand the scrutiny of the court.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 md:py-32 bg-primary-950 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.08)_0%,transparent_60%)]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block text-gold font-bold tracking-[0.5em] uppercase text-xs mb-6 px-4 py-1 border border-gold/30 rounded-full">Core Expertise</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight uppercase">
              How Engel & Engel Helps <span className="font-serif italic text-gold normal-case font-medium">Bankruptcy Attorneys</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceItems.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-gold transition-all duration-500 relative flex items-center min-h-[140px]"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-500" />
                <h3 className="text-sm font-bold tracking-widest text-white group-hover:text-gold transition-all duration-500 uppercase leading-relaxed">
                  {service}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Publications Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-gold font-bold tracking-[0.4em] uppercase text-xs mb-6 px-4 py-1 border border-gold/30 rounded-full">Academic Authority</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-8 tracking-tighter uppercase leading-tight">
                Research <br />
                <span className="font-serif italic text-primary-900 normal-case font-medium">Publications</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                Engel & Engel has published the following bankruptcy related publications in connection with fraudulent transfers:
              </p>

              <div className="space-y-4">
                {publications.map((pub, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 p-5 border border-gray-100 hover:border-gold/30 bg-gray-50/30 group transition-all"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <Link href={pub.href} className="text-lg font-bold text-primary-950 hover:text-gold transition-colors underline underline-offset-4 decoration-gold/20">
                      {pub.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[600px] w-full bg-gray-100 shadow-2xl overflow-hidden"
            >
              <Image
                src="https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Law Research & Forensic Analysis"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-950/20" />
              <div className="absolute inset-0 border-[20px] border-white/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto p-12 border border-gray-100 bg-white rounded-sm relative group overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-2 h-full bg-gold" />

            <p className="text-gray-600 italic mb-10 text-xl font-serif">
              For additional information about Engel & Engel&apos;s Forensic Accounting Services or a consultation, please contact:
            </p>

            <div className="text-primary-950">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter">Brandon J. Engel, <span className="text-gold font-serif italic text-2xl md:text-3xl font-medium">CPA, CFE</span></h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mt-8">
                <a
                  href="mailto:brandon@engelandengel.com"
                  className="text-lg font-bold tracking-widest uppercase hover:text-gold transition-colors underline decoration-gold/30 pb-1"
                >
                  brandon@engelandengel.com
                </a>
                <a
                  href="tel:310-277-2220"
                  className="text-2xl font-bold text-primary-950 hover:text-gold transition-colors"
                >
                  310-277-2220
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
