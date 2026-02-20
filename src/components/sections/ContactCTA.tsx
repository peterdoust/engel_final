'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export default function ContactCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-primary-950 overflow-hidden text-white shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
      {/* Cinematic architectural background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.08)_0%,transparent_60%)]" />
        <div className="absolute left-10 top-0 bottom-0 w-px bg-white/5" />
        <div className="absolute right-10 top-0 bottom-0 w-px bg-white/5" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Context & Leads */}
          <div className="lg:col-span-12 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tighter">
                Secure Professional <br />
                <span className="font-serif italic text-[#D4AF37]">Representation</span>
              </h2>
              <p className="text-primary-100/60 text-lg md:text-xl font-light leading-relaxed mb-16 max-w-xl">
                Ready to initiate a forensic audit or require expert witness testimony? Connect with our principal authorities for a secure consultation.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  name: 'Jason A. Engel',
                  role: 'Managing Member',
                  creds: 'CPA, CFE, CIRA, CVA, MAFF, ABV',
                  image: '/images/team/jason-engel.jpg',
                  email: 'jason@engelandengel.com'
                },
                {
                  name: 'Brandon J. Engel',
                  role: 'Senior Consultant',
                  creds: 'CPA, CFE',
                  image: '/images/team/brandon-engel.jpg',
                  email: 'brandon@engelandengel.com'
                }
              ].map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                  className="flex items-center space-x-6 p-6 border border-white/10 group hover:border-[#D4AF37]/50 transition-all duration-500 bg-white/5 backdrop-blur-sm"
                >
                  <div className="relative w-20 h-20 overflow-hidden rounded-full border-2 border-[#D4AF37]/20">
                    <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white transition-colors">{member.name}</h3>
                    <p className="text-xs font-bold text-[#D4AF37]/80 tracking-widest uppercase mb-1">{member.creds}</p>
                    <p className="text-xs text-primary-100/40 uppercase tracking-widest">{member.role}</p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={`mailto:${member.email}`} className="text-[#D4AF37] hover:underline text-xs tracking-widest uppercase font-bold">Inquire</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Stakes Inquiry Form */}
          <div className="lg:col-span-12 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative p-8 md:p-16 bg-white shadow-2xl overflow-hidden"
            >
              {/* Form Side Accent */}
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#D4AF37]" />

              <h3 className="text-2xl md:text-3xl font-bold text-primary-950 mb-10 uppercase tracking-widest">Contact Us</h3>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-bold text-primary-950 uppercase tracking-[0.3em] mb-2">Subject Name</label>
                    <input type="text" placeholder="FULL NAME*" className="w-full px-4 py-3 bg-gray-50 border-b-2 border-primary-950/10 focus:border-[#D4AF37] outline-none transition-all text-primary-950 font-bold placeholder:text-gray-400" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-primary-950 uppercase tracking-[0.3em] mb-2">Legal Interest</label>
                    <input type="email" placeholder="FIRM OR INDIVIDUAL EMAIL*" className="w-full px-4 py-3 bg-gray-50 border-b-2 border-primary-950/10 focus:border-[#D4AF37] outline-none transition-all text-primary-950 font-bold placeholder:text-gray-400" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-primary-950 uppercase tracking-[0.3em] mb-2">Primary Audio</label>
                    <input type="text" placeholder="CONTACT NUMBER" className="w-full px-4 py-3 bg-gray-50 border-b-2 border-primary-950/10 focus:border-[#D4AF37] outline-none transition-all text-primary-950 font-bold placeholder:text-gray-400" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-bold text-primary-950 uppercase tracking-[0.3em] mb-2">Executive Summary</label>
                    <textarea placeholder="BRIEF CASE OVERVIEW" rows={6} className="w-full px-4 py-3 bg-gray-50 border-b-2 border-primary-950/10 focus:border-[#D4AF37] outline-none transition-all text-primary-950 font-bold placeholder:text-gray-400 resize-none"></textarea>
                  </div>
                </div>

                <div className="md:col-span-2 pt-8">
                  <Button className="w-full py-8 bg-primary-950 hover:bg-[#D4AF37] text-white font-bold tracking-[0.5em] uppercase text-xs transition-all duration-500 rounded-none group relative overflow-hidden">
                    <span className="relative z-10">INITIALIZE LIAISON REQUEST</span>
                    <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </Button>
                  <p className="mt-6 text-[10px] text-primary-950/60 text-center tracking-widest uppercase font-bold">
                    All communications are handled with strict professional confidentiality.
                  </p>
                </div>
              </form>
            </motion.div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-100 transition-opacity">
              <div className="text-center">
                <p className="text-[10px] font-bold tracking-widest uppercase text-white">Los Angeles Headquarters</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold tracking-widest uppercase text-white">(310) 277-2220</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold tracking-widest uppercase text-white">California</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold tracking-widest uppercase text-white">Nationwide Reach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
