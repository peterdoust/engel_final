'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export default function Hero() {
  const bulletPoints = [
    { label: '35+', sub: 'Year Practice' },
    { label: '500+', sub: 'Expert Testimonies' },
    { label: '25+', sub: 'Publications' },
    { label: '6', sub: 'Certifications' },
    { label: 'Big 4', sub: 'Experience' },
    { label: '$2.3B', sub: 'Jury Award' }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with layers of depth */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/2525903/pexels-photo-2525903.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280"
          alt="Los Angeles Downtown Skyline"
          fill
          className="object-cover brightness-[0.3]"
          priority
          sizes="100vw"
        />
        {/* Layered gradients for a cinematic look */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-transparent to-primary-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.3)_0%,transparent_70%)]" />
      </div>

      {/* Decorative architectural elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-20">
        <div className="absolute left-10 top-0 bottom-0 w-px bg-white/20" />
        <div className="absolute right-10 top-0 bottom-0 w-px bg-white/20" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="max-w-6xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">
              <span className="font-serif italic font-medium text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">California&apos;s Top</span> <br />
              Forensic Accountants
            </h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '100%' }}
              transition={{ delay: 0.5, duration: 1.2 }}
              className="flex items-center justify-center space-x-6 mb-16 overflow-hidden max-w-2xl mx-auto"
            >
              <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
              <h2 className="text-sm md:text-base font-bold text-primary-100 tracking-[0.4em] uppercase whitespace-nowrap">
                Unrivaled Financial Expertise
              </h2>
              <div className="h-[2px] flex-grow bg-gradient-to-l from-transparent via-[#D4AF37]/50 to-transparent" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 mb-20"
          >
            {bulletPoints.map((point, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="group relative p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-sm hover:bg-white/10 hover:border-[#D4AF37]/40 transition-all duration-500"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors font-serif">
                  {point.label}
                </div>
                <div className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-primary-100 opacity-60 group-hover:opacity-100 transition-opacity">
                  {point.sub}
                </div>
              </motion.div>
            ))}
          </motion.div>


        </div>
      </div>

      {/* Modern, architectural scroll indicator */}
      <motion.div
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/60 to-transparent relative">
          <motion.div
            animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D4AF37] rounded-full blur-[2px]"
          />
        </div>
      </motion.div>
    </section>
  )
}
