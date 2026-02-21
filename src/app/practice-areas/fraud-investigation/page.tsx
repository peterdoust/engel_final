'use client'

import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import SchemaMarkup from '@/components/seo/SchemaMarkup'

export default function FraudInvestigationPage() {
  const serviceItems = [
    "Contract Fraud",
    "Money Laundering",
    "Misappropriation of Funds",
    "Securities Fraud",
    "Fraudulent & Misleading Financial Statements",
    "Construction Fraud",
    "Insurance Fraud",
    "Embezzlement Schemes",
    "Ponzi Schemes",
    "Employee Embezzlement",
    "International Money Laundering",
    "Bankruptcy Fraud",
    "Tracing of Fraudulent Funds",
    "Real Estate Fraud",
    "Inventory Fraud",
    "Expert Witness Testimony"
  ]

  return (
    <main className="bg-white">
      <SchemaMarkup
        type="ProfessionalService"
        data={{
          name: "Fraud Investigation - Engel & Engel LLP",
          description: "Certified Fraud Examiners conducting comprehensive fraud investigations in Los Angeles and California.",
          serviceType: "Forensic Accounting",
          address: {
            street: "11766 Wilshire Blvd, Suite 1170",
            zip: "90025"
          }
        }}
      />

      <Header />

      {/* Hero Section - Business Valuation Pattern */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1920"
            alt="Fraud Investigation Expert Witness"
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
                { label: 'Fraud Investigation', href: '/practice-areas/fraud-investigation' }
              ]} />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">
              Fraud <br />
              <span className="font-serif italic font-medium text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">Investigation</span>
            </h1>

            <div className="flex items-center justify-center space-x-6 mb-12 overflow-hidden max-w-2xl mx-auto">
              <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <h2 className="text-sm md:text-base font-bold text-primary-100 tracking-[0.4em] uppercase whitespace-nowrap">
                Certified Fraud Examiner (CFE) Expertise
              </h2>
              <div className="h-[2px] flex-grow bg-gradient-to-l from-transparent via-gold/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section - Architectural Grid Background */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 relative">
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

            <div className="lg:col-span-7 flex flex-col justify-center lg:pt-10">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-8 leading-tight tracking-tight uppercase">
                Expertise and <br />
                <span className="font-serif italic text-primary-900 normal-case font-medium">Investigatory Techniques</span>
              </h2>
              <div className="space-y-6 text-xl text-gray-800 leading-relaxed font-light">
                <p>
                  With the expertise of Certified Fraud Examiners, Engel & Engel has conducted hundreds of fraud investigations in connection with a variety of fraudulent schemes for both plaintiffs and defendants. We apply cutting-edge investigatory techniques to separate fact from fiction and reconstruct a truthful picture of the relevant financial facts.
                </p>
                <p>
                  We rely on decades of experience and powerful analytical tools to expose hidden transactions, detect manipulated and erroneous information, and identify inconsistencies contained in relevant business records.
                </p>
                <p>
                  Overall, Engel & Engel has the qualifications and experience to conduct fraud investigations that are consistent with established financial principles and can withstand the scrutiny of the court.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Premium Grid */}
      <section className="relative py-24 md:py-32 bg-primary-950 overflow-hidden text-white shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.08)_0%,transparent_60%)]" />
          <div className="absolute left-10 top-0 bottom-0 w-px bg-white/5" />
          <div className="absolute right-10 top-0 bottom-0 w-px bg-white/5" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight uppercase">
              How Engel & Engel Helps in <span className="font-serif italic text-gold normal-case font-medium">Fraud Investigations</span>
            </h2>
            <p className="text-xl text-primary-100/70 max-w-3xl mx-auto font-light">
              When the stakes are high, Engel & Engel can serve as your expert in investigating, detecting and uncovering financial fraud in connection with the following:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 tracking-wider">
            {serviceItems.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-gold/50 transition-all duration-500 relative min-h-[160px] flex items-center"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-500" />
                <h3 className="text-sm font-bold tracking-widest text-white group-hover:text-gold transition-all duration-500 uppercase leading-snug">
                  {service}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section - Branded Style */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto p-12 border border-gray-100 bg-gray-50/50 rounded-sm relative group overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-2 h-full bg-gold" />

            <p className="text-gray-600 italic mb-10 text-xl font-serif">
              For additional information about Engel & Engel&apos;s Forensic Accounting Services or a consultation, please contact:
            </p>

            <div className="text-primary-950">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter uppercase font-sans">Brandon J. Engel, <span className="text-gold font-serif italic text-2xl md:text-3xl font-medium normal-case">CPA, CFE</span></h3>
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
