'use client'

import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SchemaMarkup from '@/components/seo/SchemaMarkup'

const fraudCategories = [
  "Contract Fraud", "Ponzi Schemes",
  "Money Laundering", "Employee Embezzlement",
  "Misappropriation of Funds", "International Money Laundering",
  "Securities Fraud", "Bankruptcy Fraud",
  "Fraudulent & Misleading Financial Statements", "Tracing of Fraudulent Funds",
  "Construction Fraud", "Real Estate Fraud",
  "Insurance Fraud", "Inventory Fraud",
  "Embezzlement Schemes", "Expert Witness Testimony"
]

export default function FraudInvestigationPage() {
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

      {/* Hero Section - Homepage Style */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/4031604/pexels-photo-4031604.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Financial Investigation"
            fill
            className="object-cover brightness-[0.25]"
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">
              <span className="font-serif italic font-medium text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">Fraud</span> <br />
              Investigation
            </h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '100%' }}
              transition={{ delay: 0.5, duration: 1.2 }}
              className="flex items-center justify-center space-x-6 mb-12 overflow-hidden max-w-2xl mx-auto"
            >
              <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <h2 className="text-sm md:text-base font-bold text-primary-100 tracking-[0.4em] uppercase whitespace-nowrap">
                Unrivaled Financial Expertise
              </h2>
              <div className="h-[2px] flex-grow bg-gradient-to-l from-transparent via-gold/50 to-transparent" />
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <a href="tel:310-277-2220">
                <Button size="xl" className="bg-gold hover:bg-gold/90 text-primary-950 border-none font-bold px-12 rounded-none">
                  Call 310-277-2220
                </Button>
              </a>
              <Link href="/contact">
                <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-950 px-12 rounded-none">
                  Request Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section - Exact Content from Image */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        {/* Architectural Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Identity Column */}
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

            {/* Main Text Content */}
            <div className="lg:col-span-7 flex flex-col justify-center lg:pt-10">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8">
                With the expertise of Certified Fraud Examiners, Engel & Engel has conducted hundreds of fraud investigations in connection with a variety of fraudulent schemes for both plaintiffs and defendants. We apply cutting-edge investigatory techniques to separate fact from fiction and reconstruct a truthful picture of the relevant financial facts.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We rely on decades of experience and powerful analytical tools to expose hidden transactions, detect manipulated and erroneous information, and identify inconsistencies contained in relevant business records. Overall, Engel & Engel has the qualifications and experience to conduct fraud investigations that are consistent with established financial principles and can withstand the scrutiny of the court.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section - Branded Style */}
      <section className="relative py-24 md:py-32 bg-[#f8f9fa] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
        {/* Structural background lines */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-primary-950" />
          <div className="absolute left-2/4 top-0 bottom-0 w-px bg-primary-950" />
          <div className="absolute left-3/4 top-0 bottom-0 w-px bg-primary-950" />
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-24">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block text-gold font-bold tracking-[0.5em] uppercase text-xs mb-6 px-4 py-1 border border-gold/30 rounded-full">Core Expertise</span>
                <h2 className="text-4xl md:text-6xl font-bold text-primary-950 mb-8 leading-[1.1] tracking-tighter">
                  How Engel & Engel Helps in <br />
                  <span className="font-serif italic text-primary-900 font-medium">Fraud Investigations</span>
                </h2>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="lg:pl-12 border-l-2 border-gold/20"
              >
                <p className="text-xl text-gray-700 font-light leading-relaxed">
                  When the stakes are high, Engel & Engel can serve as your expert in investigating, detecting and uncovering financial fraud in connection with the following:
                </p>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {fraudCategories.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group h-32 p-6 bg-white hover:bg-primary-950 transition-all duration-500 flex flex-col justify-center relative overflow-hidden rounded-sm shadow-md border border-gray-100"
              >
                <div className="relative z-10">
                  <h3 className="text-sm font-bold tracking-widest text-primary-950 group-hover:text-white transition-all duration-500 leading-tight uppercase">
                    {item}
                  </h3>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gold group-hover:w-full transition-all duration-700 ease-in-out" />
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
