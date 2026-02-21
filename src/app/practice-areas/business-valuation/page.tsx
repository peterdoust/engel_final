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

export default function BusinessValuationEnhancedPage() {
  const serviceItems = [
    "Minority Shareholder Valuation",
    "Corporate Mergers & Acquisitions",
    "Corporate and Partnership Dissolutions",
    "Corporation Code 2000 Valuation",
    "Net Worth Valuation",
    "Shareholder & Partnership Disputes",
    "Economic Damage Analysis",
    "Fair Value Solvency Analysis",
    "Estate Valuation",
    "Buy and Sell Agreements",
    "Buyout Agreements",
    "Expert Witness Testimony"
  ]

  return (
    <main className="bg-white">
      {/* SEOMarkup Components - Preserved */}
      <SchemaMarkup
        type="Organization"
        data={{
          address: {
            street: "350 S Grand Avenue, Suite 3160",
            city: "Los Angeles",
            state: "CA",
            zip: "90071"
          },
          telephone: "(310) 277-2220",
          email: "info@engelandengel.com"
        }}
      />

      <SchemaMarkup
        type="LocalBusiness"
        data={{
          address: {
            street: "350 S Grand Avenue, Suite 3160",
            city: "Los Angeles",
            state: "CA",
            zip: "90071"
          },
          geo: {
            latitude: "34.0522",
            longitude: "-118.2437"
          }
        }}
      />

      <SchemaMarkup
        type="ProfessionalService"
        data={{
          name: "Business Valuation Expert Witness Services",
          description: "Certified business valuation experts (CVA, ABV) with 100+ valuations in Los Angeles and throughout California",
          serviceType: "Forensic Accounting - Business Valuation",
          address: {
            street: "350 S Grand Avenue, Suite 3160",
            zip: "90071"
          }
        }}
      />

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

      <Header />

      {/* Hero Section - Homepage Style */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Business Valuation Services"
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
                { label: 'Business Valuation', href: '/practice-areas/business-valuation' }
              ]} />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">
              Business <br />
              <span className="font-serif italic font-medium text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">Valuation</span>
            </h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '100%' }}
              transition={{ delay: 0.5, duration: 1.2 }}
              className="flex items-center justify-center space-x-6 mb-12 overflow-hidden max-w-2xl mx-auto"
            >
              <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <h2 className="text-sm md:text-base font-bold text-primary-100 tracking-[0.4em] uppercase whitespace-nowrap">
                High-Stakes Financial Expertise
              </h2>
              <div className="h-[2px] flex-grow bg-gradient-to-l from-transparent via-gold/50 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section - Homepage Pattern */}
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
                <span className="font-serif italic text-primary-900 normal-case font-medium">Qualifications</span>
              </h2>
              <div className="space-y-6 text-xl text-gray-800 leading-relaxed">
                <p>
                  Engel & Engel possesses extensive experience and qualifications to provide business valuation services and serve as your valuation expert. Our qualifications include two business valuation credentials, Certified Valuation Analyst (CVA) and Accreditation in Business Valuation (ABV). Our experience includes over 100 business valuations in a wide variety of industries.
                </p>
                <p>
                  Overall, Engel & Engel has the credentials and experience to prepare business valuations that are consistent with established valuation principles and are able to withstand the scrutiny of the court.
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
              Business Valuation Forensic Accounting <span className="font-serif italic text-gold normal-case font-medium">Services</span>
            </h2>
            <p className="text-xl text-primary-100/70 max-w-3xl mx-auto font-light">
              When the stakes are high, Engel & Engel can serve as your expert in connection with the following:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceItems.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-gold/50 transition-all duration-500 relative"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-500" />
                <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors duration-300">
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
              <p className="text-xl text-gray-700 leading-relaxed mb-10">
                Engel & Engel has published the following research publication in connection with business valuation:
              </p>
              <div className="p-8 border-l-4 border-gold bg-gray-50 group hover:bg-primary-950 transition-all duration-500">
                <Link href="/publications" className="block text-2xl font-bold text-primary-950 group-hover:text-white transition-colors underline decoration-gold/30">
                  Business Valuation Under California Corporate Code Section 2000
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] w-full bg-gray-100 shadow-2xl overflow-hidden"
            >
              <Image
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Research Publications"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-950/20" />
              <div className="absolute inset-0 border-[20px] border-white/10" />
            </motion.div>
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
