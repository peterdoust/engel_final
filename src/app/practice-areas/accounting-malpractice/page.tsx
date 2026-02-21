'use client'

import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import SchemaMarkup from '@/components/seo/SchemaMarkup'

export default function AccountingMalpracticePage() {
  const serviceItems = [
    "Analysis and Evaluation of Misleading Financial Statements",
    "Analysis and Evaluation of Accounting and Auditing Standard of Care",
    "Analysis and Identification of Relevant GAAP and GAAS Principles",
    "Economic Damages Analysis",
    "Materiality Analysis",
    "Disclosure Analysis in Accordance with GAAP and GAAS",
    "Expert Witness Testimony"
  ]

  return (
    <main className="bg-white">
      <SchemaMarkup type="Organization" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, socialMedia: ["https://www.linkedin.com/company/engel-engel-llp"] }} />
      <SchemaMarkup type="LocalBusiness" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, geo: { latitude: "34.0522", longitude: "-118.2437" } }} />
      <SchemaMarkup type="ProfessionalService" data={{ name: "Accounting Malpractice Expert Witness Services", description: "Forensic expertise in evaluating financial statements for GAAP and GAAS compliance in malpractice matters.", serviceType: "Forensic Accounting - Accounting Malpractice", address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" } }} />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1920"
            alt="Accounting Malpractice Expert Witness"
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
                { label: 'Accounting Malpractice', href: '/practice-areas/accounting-malpractice' }
              ]} />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">
              Accounting <br />
              <span className="font-serif italic font-medium text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">Malpractice</span>
            </h1>

            <div className="flex items-center justify-center space-x-6 mb-12 overflow-hidden max-w-2xl mx-auto">
              <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <h2 className="text-sm md:text-base font-bold text-primary-100 tracking-[0.4em] uppercase whitespace-nowrap">
                GAAP & GAAS Standard of Care Expert
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
              <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-8 leading-tight tracking-tight uppercase font-sans">
                Standard of Care <br />
                <span className="font-serif italic text-primary-900 normal-case font-medium">Expert Witness Services</span>
              </h2>
              <div className="space-y-6 text-xl text-gray-800 leading-relaxed font-light">
                <p>
                  Whether by error or manipulation of financial statements, Engel & Engel possesses the expertise and experience to investigate whether or not financial statements have been prepared in accordance with Generally Accepted Accounting Principles (GAAP) and General Accepted Auditing Standards (GAAS).
                </p>
                <p>
                  Overall, Engel & Engel is qualified to serve as your expert in connection with accounting malpractice matters for both plaintiffs and defendants, and prepare analyses that are consistent with established accounting principles and are able to withstand the scrutiny of the court.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
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
            <span className="inline-block text-gold font-bold tracking-[0.5em] uppercase text-xs mb-6 px-4 py-1 border border-gold/30 rounded-full">Practice Area</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight uppercase">
              How Engel & Engel Helps Attorneys in <span className="font-serif italic text-gold normal-case font-medium">Accounting Malpractice Matters</span>
            </h2>
            <p className="text-xl text-primary-100/70 max-w-3xl mx-auto font-light">
              When the stakes are high, Engel & Engel can serve as your expert in connection with the following:
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

      {/* Visual Support Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-8 tracking-tighter uppercase leading-tight font-sans">
                Professional <br />
                <span className="font-serif italic text-primary-900 normal-case font-medium">Diligence & Oversight</span>
              </h2>
              <div className="space-y-6 text-xl text-gray-800 leading-relaxed font-light">
                <p>
                  Our evaluation of audit failure and accounting negligence is rooted in a deep understanding of standard of care. We provide the clear, objective, and authoritative analysis required for complex malpractice litigation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] w-full bg-gray-100 shadow-2xl overflow-hidden rounded-sm group"
            >
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200"
                alt="Accounting Standards Analysis"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary-950/20" />
              <div className="absolute inset-0 border-[20px] border-white/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto p-12 border border-gray-100 bg-white rounded-sm relative group overflow-hidden shadow-2xl">
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
