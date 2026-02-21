'use client'

import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function EconomicDamagesPage() {
  const damageCategories = [
    "Contract Damages", "Lost Profits", "Fraud Damages", "Lost Goodwill",
    "Compensatory Damages", "Out of Pocket Damages", "Mitigation Analysis", "Rescission Damages",
    "Reliance Damages", "Benefit of the Bargain Damages", "IP Infringement Damages", "Construction Damages and Delay Claims",
    "Business Interruption Damages", "Unestablished Business Damages", "Reputational Damages", "Employment Damages"
  ]

  const publications = [
    "Framework for the Calculation of Infringement Damages Part I: Trademark Infringement Damages Under the Lanham Act",
    "Framework for the Calculation of Infringement Damages Part II: Patent Infringement Damages",
    "Framework for the Calculation of Damages: Projected Lost Earnings",
    "Financial Principles for Calculating Lost Profits",
    "The Element of Certainty in Calculating Lost Profits",
    "Prospective Lost Profits",
    "Calculating Lost Profits for Unestablished Businesses",
    "Mitigation of Damages",
    "Discounting Future Lost Profits",
    "Admissibility of Expert Testimony: “The Element of Reliability”",
    "The Business Records Exception to the Hearsay Rule: “The Admissibility of Financial Records as Evidence in Federal and State Court”"
  ]

  return (
    <main className="bg-white">
      <SchemaMarkup
        type="ProfessionalService"
        data={{
          name: "Economic Damages - Engel & Engel LLP",
          description: "Over 1,000 economic damage analyses for business litigation. Expert witness testimony in Los Angeles.",
          serviceType: "Forensic Accounting",
          address: {
            street: "11766 Wilshire Blvd, Suite 1170",
            zip: "90025"
          }
        }}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1920"
            alt="Economic Damages"
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
                { label: 'Economic Damages', href: '/practice-areas/economic-damages' }
              ]} />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">
              <span className="font-serif italic font-medium text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">Economic</span> <br />
              Damages
            </h1>

            <div className="flex items-center justify-center space-x-6 mb-12 overflow-hidden max-w-2xl mx-auto">
              <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <h2 className="text-sm md:text-base font-bold text-primary-100 tracking-[0.4em] uppercase whitespace-nowrap">
                Unrivaled Financial Expertise
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
                Forensic Analysis of <br />
                <span className="font-serif italic text-primary-900 normal-case font-medium">Economic Damages</span>
              </h2>
              <div className="space-y-6 text-xl text-gray-800 leading-relaxed font-light">
                <p>
                  Business litigation often requires a forensic analysis of economic damages. Engel & Engel has conducted over 1,000 economic damage analyses for both plaintiffs and defendants in a wide variety of industries.
                </p>
                <p>
                  Our economic damage qualifications are highlighted with a credentialed Master Analyst in Financial Forensics (MAFF) and over 10 research publications in connection with economic damages. Overall, Engel & Engel has the credentials and experience to prepare damage models that are consistent with established financial principles and are able to withstand the scrutiny of the court.
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
              Economic Damage <span className="font-serif italic text-gold normal-case font-medium">Analyses</span>
            </h2>
            <p className="text-xl text-primary-100/70 max-w-3xl mx-auto font-light">
              When the stakes are high, Engel & Engel can serve as your expert in connection with the following:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {damageCategories.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="group h-32 p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-gold/50 transition-all duration-500 flex flex-col justify-center relative rounded-sm"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-500" />
                <h3 className="text-sm font-bold tracking-widest text-white group-hover:text-gold transition-all duration-500 uppercase leading-snug text-center">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Publications Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-gold font-bold tracking-[0.4em] uppercase text-xs mb-6 px-4 py-1 border border-gold/30 rounded-full">Academic Authority</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-8 tracking-tighter uppercase leading-tight font-sans">
                Research <br />
                <span className="font-serif italic text-primary-900 normal-case font-medium">Publications</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-10 font-light">
                Engel & Engel has published various research publications in connection with the following topics relating to the Framework for the Calculation of Lost Profits:
              </p>
            </motion.div>

            <div className="space-y-4">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 border-l-2 border-gold/30 bg-gray-50/50 hover:bg-primary-950 group transition-all duration-300 rounded-r-sm"
                >
                  <p className="text-primary-900 group-hover:text-white font-medium transition-colors">
                    {pub}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden text-center">
        <div className="container-custom relative z-10">
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
