'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const expertiseAreas = [
    { id: '01', title: 'Economic Damages', href: '/practice-areas/economic-damages' },
    { id: '02', title: 'Fraud Investigation', href: '/practice-areas/fraud-investigation' },
    { id: '03', title: 'Business Valuation', href: '/practice-areas/business-valuation' },
    { id: '04', title: 'Bankruptcy & Insolvency', href: '/practice-areas/bankruptcy-insolvency' },
    { id: '05', title: 'Intellectual Property', href: '/practice-areas/ip-litigation' },
    { id: '06', title: 'Real Estate Litigation', href: '/practice-areas/real-estate-litigation' },
    { id: '07', title: 'Alter Ego & Piercing', href: '/practice-areas/alter-ego' },
    { id: '08', title: 'Arbitration', href: '/practice-areas/arbitration' },
    { id: '09', title: 'Whistleblowing', href: '/practice-areas/whistleblowing' },
    { id: '10', title: 'Employment Litigation', href: '/practice-areas/employment-litigation' },
    { id: '11', title: 'Business Interruption', href: '/practice-areas/business-interruption' },
    { id: '12', title: 'Personal Injury', href: '/practice-areas/personal-injury' },
    { id: '13', title: 'Accounting Malpractice', href: '/practice-areas/accounting-malpractice' },
    { id: '14', title: 'Partnership Disputes', href: '/practice-areas/partnership-disputes' },
    { id: '15', title: 'Trust & Probate', href: '/practice-areas/trust-probate-litigation' }
]

export default function ExpertiseGrid() {
    return (
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
                            <span className="inline-block text-[#D4AF37] font-bold tracking-[0.5em] uppercase text-xs mb-6 px-4 py-1 border border-[#D4AF37]/30 rounded-full">Core Disciplines</span>
                            <h2 className="text-5xl md:text-7xl font-bold text-primary-950 mb-8 leading-[1.1] tracking-tighter">
                                Our Areas of  <br />
                                <span className="font-serif italic text-primary-900 font-medium">Expertise</span>
                            </h2>
                        </motion.div>
                    </div>
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="lg:pl-12 border-l-2 border-[#D4AF37]/20"
                        >
                            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                                Led by Jason A. Engel, our firm provides <span className="text-primary-950 font-bold">surgical financial intuition</span> backed by over 35 years of experience as a financial and economic expert witness across more than 500 complex cases.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {expertiseAreas.map((area, index) => (
                        <Link key={index} href={area.href} className="group transition-all duration-500">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                className="h-40 p-8 bg-white hover:bg-primary-950 transition-all duration-500 flex flex-col justify-between relative overflow-hidden rounded-[2%] shadow-md border border-gray-200"
                            >
                                {/* Background Number Accent */}
                                <span className="absolute -right-4 -bottom-4 text-7xl font-bold text-gray-50 group-hover:text-white/5 transition-colors duration-500 pointer-events-none">
                                    {area.id}
                                </span>

                                <div className="relative z-10 flex justify-between items-start">
                                    <span className="text-[10px] font-bold tracking-[0.3em] text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                                        DISCIPLINE
                                    </span>
                                    <div className="w-6 h-px bg-[#D4AF37] opacity-0 group-hover:w-10 group-hover:opacity-100 transition-all duration-500" />
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-sm md:text-base font-bold tracking-widest text-primary-950 group-hover:text-white transition-all duration-500 leading-tight uppercase">
                                        {area.title}
                                    </h3>
                                </div>

                                {/* Bottom interactive line */}
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-700 ease-in-out" />
                            </motion.div>
                        </Link>
                    ))}
                </div>


            </div>
        </section>
    )
}
