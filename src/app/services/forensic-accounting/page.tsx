'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'

const serviceCategories = [
  {
    title: "Economic Damages",
    items: [
      "Contract Damages", "Lost Profits", "Fraud Damages", "Lost Goodwill",
      "Compensatory Damages", "Out of Pocket Damages", "Mitigation Analysis",
      "Rescission Damages", "Reliance Damages", "Benefit of the Bargain Damages",
      "IP Infringement Damages", "Construction Damages and Delay Claims",
      "Business Interruption Damages", "Unestablished Business Damages",
      "Reputational Damages", "Employment Damages"
    ]
  },
  {
    title: "Fraud Investigation",
    items: [
      "Contract Fraud", "Money Laundering", "Misappropriation of Funds",
      "Securities Fraud", "Fraudulent & Misleading Financial Statements",
      "Construction Fraud", "Insurance Fraud", "Embezzlement Schemes",
      "Ponzi Schemes", "Employee Embezzlement", "International Money Laundering",
      "Bankruptcy Fraud", "Tracing of Fraudulent Funds", "Real Estate Fraud",
      "Inventory Fraud", "Expert Witness Testimony"
    ]
  },
  {
    title: "Business Valuation",
    items: [
      "Corporate Valuation", "Minority Shareholder Valuation",
      "Corporate Mergers & Acquisitions", "Corporate and Partnership Dissolutions",
      "Corporation Code 2000 Valuation", "Net Worth Valuation",
      "Shareholder & Partnership Disputes", "Economic Damage Analysis",
      "Fair Value Solvency Analysis", "Estate Valuation",
      "Buy and Sell Agreements", "Buyout Agreements", "Expert Witness Testimony"
    ]
  },
  {
    title: "Bankruptcy & Insolvency",
    items: [
      "Bankruptcy Fraud Investigation", "Solvency Analysis", "Preference Analysis",
      "Liquidation Analysis", "Adequate Protection Analysis", "Reorganization Plans",
      "Fraudulent Transfers", "Fair Value and Fair Market Value Valuations",
      "Analysis of Undercapitalization", "Analysis or Reasonably Equivalent Value",
      "Investigation of Hidden Distributions", "Expert Witness Testimony"
    ]
  },
  {
    title: "IP Litigation",
    items: [
      "Infringement Damages", "Misappropriation of Trade Secrets",
      "Unfair Business Competition", "Lost Profits Analysis", "Market Share Analysis",
      "Mitigation Analysis", "Reasonable Royalty Analysis", "Panduit Test",
      "Analysis of Substitute Products", "Corrective Advertising", "Expert Witness Testimony"
    ]
  },
  {
    title: "Real Estate Litigation",
    items: [
      "Investigation with Ownership Issues", "Investigation of Capital Contribution Issues",
      "Analysis of Distributions", "Investigation of Hidden Distributions",
      "Analysis of Shareholder/Partnership Agreements", "Analysis of Capital Accounts",
      "Analysis of Historical Revenues and Expenses", "Analysis of Loans and Loan proceeds",
      "Analysis of Historical Expenses and Hidden Distributions", "Analysis of Operating Agreements",
      "Analysis of Lost Profits and Damages"
    ]
  },
  {
    title: "Construction Litigation",
    items: [
      "Construction Fraud Investigation", "Construction Damage Analysis",
      "Construction Defect Damages", "Construction Delay Damages",
      "Eichleay Formula Calculations", "Construction Accounting",
      "Investigation of Change Orders", "Bid Analysis", "Construction Cost Investigation",
      "Construction Loan Analysis", "Construction Budget Analysis", "Expert Witness Testimony"
    ]
  },
  {
    title: "Alter Ego",
    items: [
      "Analysis of Alter Ego Factors", "Analysis of Undercapitalization",
      "Commingling of Funds", "Diversion of Corporate Funds",
      "Separate Books and Records", "Separate Bank Accounts",
      "Separate Employees and Offices", "Analysis of Reasonable Compensation",
      "Analysis of Related Party Transactions", "Analysis of Hidden Distributions",
      "Expert Witness Testimony"
    ]
  },
  {
    title: "Fraudulent Transfers",
    items: [
      "Analysis of Reasonable Equivalent Value", "Solvency Analysis",
      "Analysis of Ability to Pay Debts as they Become Due",
      "Analysis of Undercapitalization", "Tracing of Fraudulent Transactions",
      "Business Fair Market Valuation", "Business Fair Valuation",
      "Valuation of Intangible Assets", "Liquidation Analysis",
      "Financial Fraud Investigations", "Expert Witness Testimony"
    ]
  },
  {
    title: "Employment Litigation",
    items: [
      "Historical Lost Earnings", "Projected Lost Earnings", "Lost Benefits",
      "Mitigation Analysis", "Expert Witness Testimony"
    ]
  },
  {
    title: "Business Interruption",
    items: [
      "Lost Sales Due to Business Interruption", "Lost Profits Due to Business Interruption",
      "Lost Goodwill Due to Business Interruption",
      "Expenses Incurred in Connection with Business Interruption",
      "Mitigation Analysis in Connection with Business Interruption",
      "Analysis of Market Conditions Relating to Business Interruption",
      "Expert Witness Testimony"
    ]
  },
  {
    title: "Personal Injury",
    items: [
      "Historical Lost Earnings", "Projected Lost Earnings", "Historical Medical Costs",
      "Projected Medical Costs", "Mitigation Analysis", "Analysis of Life-care Plans",
      "Analysis of Cost Reports", "Expert Witness Testimony"
    ]
  },
  {
    title: "Accounting Malpractice",
    items: [
      "Analysis and Evaluation of Misleading Financial Statements",
      "Analysis and Evaluation of Accounting and Auditing Standard of Care",
      "Analysis and Identification of Relevant GAAP and GAAS Principles",
      "Economic Damages Analysis", "Materiality Analysis",
      "Disclosure Analysis in Accordance with GAAP and GAAS", "Expert Witness Testimony"
    ]
  },
  {
    title: "Partnership/Shareholder Disputes",
    items: [
      "Dissolution Accounting", "Shareholder Valuation", "Shareholder Derivative Claims",
      "Minority Shareholder Discount",
      "Business Valuation in Accordance with California Corporations Code Section 2000",
      "Excess Officer’s Compensation", "Concealment of Distributions", "Ownership Disputes",
      "Shareholder & Partnership Provisions for Shareholder Buyouts",
      "Investigation of Misappropriation of Funds and Fraud"
    ]
  }
]

const industryExpertise = [
  "Aerospace", "Agriculture", "Apparel", "Art Galleries and Museums",
  "Automobile", "Charitable and Nonprofits", "Construction", "Cannabis",
  "Distributorships", "Education", "Entertainment", "Finance",
  "Franchises", "Government", "Home Owners Associations (HOA)",
  "Hospitality (Food & Beverage, Restaurants)", "Hospitals / Healthcare Facilities",
  "Imports & Exports", "Insurance & Reinsurance", "Investment",
  "Manufacturing", "Medical Practices", "Media & Entertainment",
  "Professional Services Practices", "Real Estate Acquisition & Investment",
  "Real Estate Property Management", "Retail", "Shipping and Transportation",
  "Investments", "Warehousing", "Technology"
]

export default function ForensicAccountingPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280"
            alt="Forensic Accounting Analysis"
            fill
            className="object-cover brightness-[0.25]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-transparent to-primary-950" />
        </div>

        <div className="relative z-10 container-custom">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">
                <span className="font-serif italic font-medium text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">Forensic</span> <br />
                Accounting Services
              </h1>

              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ delay: 0.5, duration: 1.2 }}
                className="flex items-center justify-center space-x-6 mb-12 overflow-hidden max-w-2xl mx-auto"
              >
                <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
                <h2 className="text-sm md:text-base font-bold text-primary-100 tracking-[0.4em] uppercase whitespace-nowrap">
                  Unrivaled Financial Expertise
                </h2>
                <div className="h-[2px] flex-grow bg-gradient-to-l from-transparent via-[#D4AF37]/50 to-transparent" />
              </motion.div>

              <p className="text-xl text-primary-100/80 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                Over 30 years of forensic accounting expertise serving Los Angeles law firms, corporations, and private companies in complex financial litigation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="xl" className="bg-[#D4AF37] text-primary-950 hover:bg-white transition-colors tracking-widest uppercase text-xs font-bold px-12 py-8 rounded-none">
                  <a href="tel:3102772220">Call (310) 277-2220</a>
                </Button>
                <Link href="/contact">
                  <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white hover:text-primary-950 transition-all tracking-widest uppercase text-xs font-bold px-12 py-8 rounded-none">
                    Free Consultation
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section - Matching Homepage Style */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.18)]">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 relative">
              <div className="relative inline-block mb-10">
                <div className="absolute -inset-4 border border-[#D4AF37]/30 rounded-sm translate-x-2 translate-y-2 z-0" />
                <div className="relative z-10 bg-primary-950 text-white p-10 md:p-14 rounded-sm shadow-2xl">
                  <span className="block text-sm font-bold tracking-[0.5em] uppercase text-[#D4AF37] mb-2">Practice</span>
                  <span className="block text-6xl md:text-8xl font-serif italic mb-6">30+</span>
                  <div className="h-[2px] w-16 bg-[#D4AF37] mb-6" />
                  <p className="text-primary-100 text-lg leading-relaxed font-light">
                    Years of uncompromising financial integrity and forensic excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center lg:pt-10">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-8 leading-tight">
                Los Angeles forensic <br />
                <span className="font-serif italic text-primary-900 font-medium">Accounting Firm</span>
              </h2>

              <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
                <p>
                  Engel & Engel is a Los Angeles forensic accounting firm. For over 30 years, we have provided clients with high-level forensic accounting services. Our clients include top law firms, public corporations, and private companies, seeking forensic accounting services on a variety of litigation issues for both plaintiffs and defendants. Our experience includes testifying in state, federal, and bankruptcy courts.
                </p>
                <p>
                  We rely on decades of experience and powerful analytical tools to expose hidden transactions, detect manipulated and erroneous information, and identify inconsistencies contained in relevant business records. We work with trial counsel to build a compelling forensic analysis that is understandable to judges and juries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative py-24 md:py-32 bg-[#f8f9fa] overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="mb-20">
            <span className="inline-block text-[#D4AF37] font-bold tracking-[0.5em] uppercase text-xs mb-6 px-4 py-1 border border-[#D4AF37]/30 rounded-full">Strategic Solutions</span>
            <h2 className="text-5xl md:text-7xl font-bold text-primary-950 mb-8 leading-[1.1] tracking-tighter">
              When the Stakes <br />
              <span className="font-serif italic text-primary-900 font-medium">Are High</span>
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <h3 className="text-xl font-bold text-primary-950 mb-6 uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600 leading-tight">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section - Redesigned for Visibility */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]">
        {/* Subtle structural background lines */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block text-[#D4AF37] font-bold tracking-[0.5em] uppercase text-xs mb-6 px-4 py-1 border border-[#D4AF37]/20 rounded-full">Sectors Served</span>
            <h2 className="text-4xl md:text-6xl font-bold text-primary-950 mb-8 tracking-tighter">
              Industry <span className="font-serif italic text-primary-900">Expertise</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Our depth of experience spans nearly every sector of the modern economy, providing court-proven financial analysis tailored to specific industry standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-8">
            {industryExpertise.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="group cursor-default"
              >
                <div className="text-sm font-bold tracking-widest uppercase text-primary-950/70 group-hover:text-primary-950 transition-colors py-3 border-b border-gray-100 group-hover:border-[#D4AF37]/50 relative transition-all duration-300">
                  {industry}
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 pt-16 border-t border-gray-100 text-center">
            <p className="font-serif italic text-2xl text-primary-950 max-w-4xl mx-auto leading-relaxed">
              "We provide high-level forensic accounting services that withstand the scrutiny of the court, regardless of industry complexity."
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
