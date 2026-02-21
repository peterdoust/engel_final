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

export default function ConstructionLitigationPage() {
  const serviceItems = [
    "Construction Fraud Investigation",
    "Construction Damage Analysis",
    "Construction Defect Damages",
    "Construction Delay Damages",
    "Eichleay Formula Calculations",
    "Construction Accounting",
    "Investigation of Change Orders",
    "Bid Analysis",
    "Construction Cost Investigation",
    "Construction Loan Analysis",
    "Construction Budget Analysis",
    "Expert Witness Testimony"
  ]

  return (
    <main className="bg-white">
      {/* SEOMarkup Components - Preserved and refined */}
      <SchemaMarkup type="Organization" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, socialMedia: ["https://www.linkedin.com/company/engel-engel-llp"] }} />
      <SchemaMarkup type="LocalBusiness" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, geo: { latitude: "34.0522", longitude: "-118.2437" } }} />
      <SchemaMarkup type="ProfessionalService" data={{ name: "Construction Litigation Expert Witness Services", description: "Construction defect forensic accounting for contractors, developers, owners in Los Angeles", serviceType: "Forensic Accounting - Construction Litigation", address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" } }} />
      <SchemaMarkup type="HowTo" data={{
        name: "How to Conduct Construction Forensic Analysis",
        description: "Our proven 5-step process for construction litigation forensic accounting",
        steps: [
          { name: "Initial Project Review", text: "Review construction contracts, change orders, schedules, and identify key financial disputes." },
          { name: "Document Collection", text: "Gather project financial records, payment applications, lien waivers, and cost documentation." },
          { name: "Cost Analysis", text: "Analyze project costs, change orders, cost overruns, and payment histories." },
          { name: "Delay & Damage Analysis", text: "Analyze construction delays, calculate damages, and determine responsibility." },
          { name: "Expert Report & Testimony", text: "Prepare detailed reports and provide expert witness testimony in construction litigation." }
        ]
      }} />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920"
            alt="Construction Litigation"
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
                { label: 'Construction Litigation', href: '/practice-areas/construction-litigation' }
              ]} />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">
              Construction <br />
              <span className="font-serif italic font-medium text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">Litigation</span>
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
                    Three decades of uncompromising financial integrity and forensic excellence in construction disputes.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-12 xl:col-span-7 flex flex-col justify-center lg:pt-10">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-8 leading-tight tracking-tight uppercase">
                Forensic Analysis of <br />
                <span className="font-serif italic text-primary-900 normal-case font-medium">Complex Construction Issues</span>
              </h2>
              <div className="space-y-6 text-xl text-gray-800 leading-relaxed font-light">
                <p>
                  Construction litigation often demands the financial expertise of a forensic accountant. Engel & Engel has extensive experience in conducting forensic investigations and providing expert testimony in connection with construction litigation for both plaintiffs and defendants.
                </p>
                <p>
                  Builders, general contractors, developers, subcontractors, and owners have turned to Engel & Engel’s expertise in financial issues relating to disputes in construction projects. Overall, Engel & Engel has the qualifications and experience to investigate and opine on complex construction issues that are consistent with established financial principles.
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
            <span className="inline-block text-gold font-bold tracking-[0.5em] uppercase text-xs mb-6 px-4 py-1 border border-gold/30 rounded-full">Practice Areas</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight uppercase">
              How Engel & Engel Helps <span className="font-serif italic text-gold normal-case font-medium">Construction Litigation Attorneys</span>
            </h2>
            <p className="text-xl text-primary-100/70 max-w-3xl mx-auto font-light">
              When the stakes are high, Engel & Engel can serve as your expert in connection with the following:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-8 tracking-tighter uppercase leading-tight">
                Integrity in <br />
                <span className="font-serif italic text-primary-900 normal-case font-medium">Construction Projects</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Whether representing builders, developers, or subcontractors, we bring comprehensive financial oversight to every construction dispute. Our analysis follows established project accounting principles, providing the clarity needed to resolve complex financial claims.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px] w-full bg-gray-100 shadow-2xl overflow-hidden rounded-sm"
            >
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200"
                alt="Construction Management"
                fill
                className="object-cover"
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
