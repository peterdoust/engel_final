'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Forensic Accounting',
    description: 'Surgical financial analysis and investigative auditing for complex litigation and corporate disputes.',
    href: '/services/forensic-accounting',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6M5 21h14a2 2 0 002-2V7l-5-5H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Expert Witness Testimony',
    description: 'Court-proven testimony and economic damage calculations delivered with unrivaled persuasive authority.',
    href: '/services/expert-witness-testimony',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-3.5-2M12 20l-3-1.5M12 20l3-1.5M3 9l9 5 9-5" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Joint Retention Program',
    description: 'Unbiased, neutral financial consultancy designed to resolve multi-party disputes with surgical efficiency.',
    href: '/services/joint-retention-program',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Internal Investigations',
    description: 'Discrete, deep-level investigations into corporate fraud, embezzlement, and financial irregularities.',
    href: '/services/internal-investigations',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    )
  }
]

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  // Move background image slower than scroll for parallax depth
  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
      {/* Parallax Background Image */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 scale-110"
      >
        <Image
          src="/images/forensic-accounting-experts.jpg"
          alt="Forensic Accounting Experts"
          fill
          className="object-cover brightness-[0.25]"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 z-[1] bg-primary-950/70" />

      {/* Top & Bottom separator lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-[2]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-[2]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none z-[2]" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tighter">
                Specialized <br />
                <span className="font-serif italic text-[#D4AF37]">Strategic Solutions</span>
              </h2>
              <div className="h-1 w-20 bg-[#D4AF37] mb-8" />
            </motion.div>
          </div>
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-primary-100/80 text-lg md:text-2xl font-light leading-relaxed mb-0"
            >
              We bring surgical precision to financial forensics. Our team is dedicated to providing court-proven expertise for the most complex and sensitive legal disputes nationwide.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative h-64 p-6 bg-primary-900 border border-white/10 rounded-sm flex flex-col overflow-hidden hover:border-[#D4AF37]/40 hover:bg-primary-950 transition-all duration-500"
              >
                {/* Top row: number + arrow */}
                <div className="flex justify-between items-center mb-4 shrink-0">
                  <span className="text-[#D4AF37] font-bold text-xs tracking-[0.4em] uppercase">{service.number}</span>

                </div>

                {/* Icon — shrinks on hover to make room for description */}
                <div className="flex justify-center text-white/25 group-hover:text-[#D4AF37]/50 transition-all duration-500 mb-3 shrink-0 group-hover:scale-75 group-hover:-translate-y-1 origin-top">
                  <div className="w-14 h-14 [&>svg]:w-14 [&>svg]:h-14">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-500 leading-tight uppercase tracking-widest mb-2 shrink-0">
                  {service.title}
                </h3>

                {/* Gold underline */}
                <div className="h-px w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-700 mb-3 shrink-0" />

                {/* Description — fades in below on hover */}
                <p className="text-white/60 text-xs leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100 line-clamp-3">
                  {service.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
