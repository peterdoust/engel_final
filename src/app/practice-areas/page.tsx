import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Practice Areas | Engel & Engel - Expert Forensic Accounting Services',
  description: 'Comprehensive forensic accounting and expert testimony services across multiple practice areas. 30+ years of experience in complex litigation support.',
  keywords: 'forensic accounting, expert testimony, litigation support, business valuation, fraud investigation, economic damages',
}

const practiceAreas = [
  {
    title: 'Trust & Probate Litigation',
    description: 'Expert analysis of trust and estate disputes, fiduciary breaches, and inheritance conflicts with comprehensive financial investigation.',
    href: '/practice-areas/trust-probate-litigation',
  },
  {
    title: 'Business Valuation',
    description: 'Precise business valuations for litigation, divorce, tax planning, and transaction purposes using industry-leading methodologies.',
    href: '/practice-areas/business-valuation',
  },
  {
    title: 'Fraud Investigation',
    description: 'Comprehensive fraud detection and investigation services with detailed forensic analysis and expert testimony support.',
    href: '/practice-areas/fraud-investigation',
  },
  {
    title: 'Economic Damages',
    description: 'Quantification of economic losses in commercial litigation, personal injury, and wrongful termination cases.',
    href: '/practice-areas/economic-damages',
  },
  {
    title: 'Partnership Disputes',
    description: 'Resolution of complex partnership and shareholder disputes through detailed financial analysis and valuation services.',
    href: '/practice-areas/partnership-disputes',
  },
  {
    title: 'Bankruptcy & Insolvency',
    description: 'Expert analysis in bankruptcy proceedings, insolvency matters, and creditor rights with comprehensive financial review.',
    href: '/practice-areas/bankruptcy-insolvency',
  },
  {
    title: 'Business Interruption',
    description: 'Calculation of business interruption losses for insurance claims and litigation with detailed economic analysis.',
    href: '/practice-areas/business-interruption',
  },
  {
    title: 'Construction Litigation',
    description: 'Specialized forensic accounting for construction disputes, delay claims, and cost overrun analysis.',
    href: '/practice-areas/construction-litigation',
  },
  {
    title: 'Employment Litigation',
    description: 'Expert analysis of wage and hour disputes, discrimination claims, and wrongful termination damages.',
    href: '/practice-areas/employment-litigation',
  },
  {
    title: 'IP Litigation',
    description: 'Valuation and damages analysis for intellectual property disputes, including patents, trademarks, and trade secrets.',
    href: '/practice-areas/ip-litigation',
  },
  {
    title: 'Real Estate Litigation',
    description: 'Comprehensive analysis of real estate disputes, property valuations, and development project assessments.',
    href: '/practice-areas/real-estate-litigation',
  },
  {
    title: 'Personal Injury',
    description: 'Economic loss calculations for personal injury cases, including lost earnings and future damages analysis.',
    href: '/practice-areas/personal-injury',
  },
  {
    title: 'Accounting Malpractice',
    description: 'Expert analysis of accounting malpractice claims with detailed professional standards review and damages assessment.',
    href: '/practice-areas/accounting-malpractice',
  },
  {
    title: 'Fraudulent Transfers',
    description: 'Investigation and analysis of fraudulent transfer claims with comprehensive asset tracing and recovery strategies.',
    href: '/practice-areas/fraudulent-transfers',
  },
  {
    title: 'Alter Ego',
    description: 'Complex alter ego and piercing the corporate veil analysis with detailed corporate structure investigation.',
    href: '/practice-areas/alter-ego',
  },
  {
    title: 'Defamation',
    description: 'Economic damages analysis for defamation cases, including reputation harm and business loss quantification.',
    href: '/practice-areas/defamation',
  }
]

const firmStats = [
  {
    number: '30+',
    label: 'Years of Forensic Accounting Excellence',
    subtitle: 'Established 1994'
  },
  {
    number: '500+',
    label: 'Complex Cases Successfully Resolved',
    subtitle: 'Nationwide Experience'
  },
  {
    number: '20',
    label: 'Peer-Reviewed Research Publications',
    subtitle: 'Industry Thought Leadership'
  },
  {
    number: '6',
    label: 'Professional Certifications',
    subtitle: 'CPA, CFE, CIRA, CVA, MAFF, ABV'
  },
  {
    number: 'Big 4',
    label: 'Forensic Accounting Background',
    subtitle: 'Elite Training & Experience'
  },
  {
    number: '$2.3B',
    label: 'Record Jury Award Achievement',
    subtitle: 'Proven Court Success'
  }
]

export default function PracticeAreasPage() {
  return (
    <div>
      <Header />
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/2525903/pexels-photo-2525903.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280"
            alt="Los Angeles Downtown Skyline"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-gradient opacity-75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 container-custom text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
              Expert Forensic Accounting
              <br />
              <span className="text-primary-300">Across All Practice Areas</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-stagger-1">
              Comprehensive expertise across 16 specialized practice areas, delivering precise analysis 
              and expert testimony for complex litigation matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animate-stagger-2">
              <Link href="/contact">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Schedule Consultation
                </button>
              </Link>
              <a href="tel:(310) 277-2220">
                <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                  Call (310) 277-2220
                </button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up animate-stagger-3">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-300 mb-2">30+</div>
                <div className="text-gray-300 text-sm md:text-base">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-300 mb-2">500+</div>
                <div className="text-gray-300 text-sm md:text-base">Cases Handled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-300 mb-2">16</div>
                <div className="text-gray-300 text-sm md:text-base">Practice Areas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-300 mb-2">$2.3B</div>
                <div className="text-gray-300 text-sm md:text-base">Record Award</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Practice Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive forensic accounting expertise across diverse practice areas, 
              delivering precise analysis and expert testimony for complex litigation matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {practiceAreas.map((area, index) => (
              <Link key={area.title} href={area.href} className="group block">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full">
                  <div className="p-6 h-full flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                      {area.description}
                    </p>
                    <div className="mt-4 flex items-center text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
                      <span className="text-sm font-semibold">Learn More</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Let Our Numbers Do The Talking */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Parallax Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Let Our Numbers
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Do The Talking
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Three decades of excellence in forensic accounting with a proven track record of success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {firmStats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-blue-100 mb-2 leading-tight">
                    {stat.label}
                  </div>
                  <div className="text-sm text-blue-200/80 leading-relaxed">
                    {stat.subtitle}
                  </div>
                </div>

                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-blue-100 text-lg mb-6">
              Ready to experience the difference that expertise makes?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(310) 277-2220">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Call (310) 277-2220
                </button>
              </a>
              <Link href="/contact">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
