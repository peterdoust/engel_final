'use client'

import React, { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SchemaMarkup from '@/components/seo/SchemaMarkup'

const teamMembers = [
  {
    name: 'Jason A. Engel',
    credentials: 'CPA, CFE, CIRA, CVA, MAFF, ABV',
    role: 'Managing Member',
    image: '/images/team/jason-engel.jpg',
    email: 'jasonengel@engelandengel.com',
    phone: '(310) 277-2220'
  },
  {
    name: 'Brandon J. Engel',
    credentials: 'CPA, CFE',
    role: 'Partner',
    image: '/images/team/brandon-engel.jpg',
    email: 'brandon@engelandengel.com',
    phone: '(310) 277-2220'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting contact form:', error)
      alert('There was an error sending your message. Please try again or call (310) 277-2220.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <main className="bg-white min-h-screen flex flex-col">
        <Header />
        <section className="flex-grow flex items-center justify-center py-32">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto p-12 bg-white border border-gold/20 shadow-2xl relative"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gold" />
              <div className="w-20 h-20 bg-primary-950 flex items-center justify-center mx-auto mb-8 rounded-none">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-primary-950 mb-6 uppercase tracking-widest leading-tight">Liaison Request <br />Received</h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                Your inquiry has been successfully transmitted to our principal authorities. We prioritize all high-stakes communications and will respond with the required urgency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary-950 text-white hover:bg-gold px-10 rounded-none h-14 font-bold tracking-widest uppercase transition-all"
                >
                  Return to Contact
                </Button>
                <a href="tel:3102772220">
                  <Button variant="outline" className="border-primary-950 text-primary-950 hover:bg-primary-950 hover:text-white px-10 rounded-none h-14 font-bold tracking-widest uppercase transition-all">
                    Immediate Call
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="bg-white">
      <SchemaMarkup
        type="LocalBusiness"
        data={{
          name: "Engel & Engel LLP",
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
      <Header />

      {/* Hero Section - Homepage Style */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Los Angeles Finance District"
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">
              Contact <br />
              <span className="font-serif italic font-medium text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">Us</span>
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
                Connect With Our <br />
                <span className="font-serif italic text-primary-900 normal-case">Principal Authorities</span>
              </h2>
              <p className="text-xl text-gray-800 leading-relaxed mb-8">
                Ready to initiate a forensic audit or require expert witness testimony? Connect with our team for a secure, professional consultation. Our experts are prepared to handle high-stakes financial investigations with the utmost confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section - Branded Split Layout */}
      <section className="relative py-24 md:py-32 bg-primary-950 overflow-hidden text-white shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.08)_0%,transparent_60%)]" />
          <div className="absolute left-10 top-0 bottom-0 w-px bg-white/5" />
          <div className="absolute right-10 top-0 bottom-0 w-px bg-white/5" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Team Profiles */}
            <div className="lg:col-span-12 xl:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16"
              >
                <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tighter">
                  Secure Professional <br />
                  <span className="font-serif italic text-gold">Representation</span>
                </h3>
              </motion.div>

              <div className="space-y-6">
                {teamMembers.map((member, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.8 }}
                    className="flex items-center space-x-6 p-6 border border-white/10 group hover:border-gold/50 transition-all duration-500 bg-white/5 backdrop-blur-sm"
                  >
                    <div className="relative w-20 h-20 overflow-hidden rounded-full border-2 border-gold/20">
                      <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white transition-colors">{member.name}</h3>
                      <p className="text-xs font-bold text-gold/80 tracking-widest uppercase mb-1">{member.credentials}</p>
                      <p className="text-xs text-primary-100/40 uppercase tracking-widest">{member.role}</p>
                      <div className="mt-2 flex flex-col space-y-1">
                        <a href={`mailto:${member.email}`} className="text-xs text-primary-100/60 hover:text-gold transition-colors">{member.email}</a>
                        <a href={`tel:${member.phone.replace(/\D/g, '')}`} className="text-xs text-primary-100/60 hover:text-gold transition-colors">{member.phone}</a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Premium Inquiry Form */}
            <div className="lg:col-span-12 xl:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative p-8 md:p-16 bg-white shadow-2xl overflow-hidden"
              >
                <div className="absolute top-0 left-0 bottom-0 w-2 bg-gold" />
                <h3 className="text-2xl md:text-3xl font-bold text-primary-950 mb-10 uppercase tracking-widest leading-none">Initialize Liaison Request</h3>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[10px] font-bold text-primary-950 uppercase tracking-[0.3em] mb-2">Subject Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="FULL NAME*"
                        className="w-full px-4 py-3 bg-gray-50 border-b-2 border-primary-950/10 focus:border-gold outline-none transition-all text-primary-950 font-bold placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-primary-950 uppercase tracking-[0.3em] mb-2">Legal Interest</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="FIRM OR INDIVIDUAL EMAIL*"
                        className="w-full px-4 py-3 bg-gray-50 border-b-2 border-primary-950/10 focus:border-gold outline-none transition-all text-primary-950 font-bold placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-primary-950 uppercase tracking-[0.3em] mb-2">Primary Audio</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="CONTACT NUMBER"
                        className="w-full px-4 py-3 bg-gray-50 border-b-2 border-primary-950/10 focus:border-gold outline-none transition-all text-primary-950 font-bold placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-[10px] font-bold text-primary-950 uppercase tracking-[0.3em] mb-2">Affiliation</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="COMPANY OR LAW FIRM"
                        className="w-full px-4 py-3 bg-gray-50 border-b-2 border-primary-950/10 focus:border-gold outline-none transition-all text-primary-950 font-bold placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-primary-950 uppercase tracking-[0.3em] mb-2">Executive Summary</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="BRIEF CASE OVERVIEW"
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-50 border-b-2 border-primary-950/10 focus:border-gold outline-none transition-all text-primary-950 font-bold placeholder:text-gray-400 resize-none"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="md:col-span-2 pt-8">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-8 bg-primary-950 hover:bg-gold text-white font-bold tracking-[0.5em] uppercase text-xs transition-all duration-500 rounded-none group relative overflow-hidden"
                    >
                      <span className="relative z-10">{isSubmitting ? 'TRANSMITTING...' : 'INITIALIZE LIAISON REQUEST'}</span>
                      <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </Button>
                    <p className="mt-6 text-[10px] text-primary-950/60 text-center tracking-widest uppercase font-bold">
                      All communications are handled with strict professional confidentiality.
                    </p>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section - Branded */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-gold font-bold tracking-[0.4em] uppercase text-xs mb-6 px-4 py-1 border border-gold/30 rounded-full">Headquarters</span>
              <h3 className="text-4xl font-bold text-primary-950 mb-8 tracking-tighter uppercase leading-none">Los Angeles Office</h3>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mr-6 group-hover:bg-primary-950 transition-colors duration-500">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-primary-950 uppercase tracking-widest mb-1">Address</p>
                    <p className="text-gray-600 font-light text-lg">
                      350 S Grand Avenue, Suite 3160<br />
                      Los Angeles, CA 90071
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mr-6 group-hover:bg-primary-950 transition-colors duration-500">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-primary-950 uppercase tracking-widest mb-1">Telephone</p>
                    <a href="tel:3102772220" className="text-gold font-bold text-2xl hover:text-primary-950 transition-colors">(310) 277-2220</a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mr-6 group-hover:bg-primary-950 transition-colors duration-500">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-primary-950 uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:info@engelandengel.com" className="text-primary-950 font-bold hover:text-gold transition-colors underline decoration-gold/30">info@engelandengel.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] w-full bg-gray-100 shadow-2xl">
              <Image
                src="/images/forensic-accounting-experts.jpg"
                alt="Los Angeles Office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border-[20px] border-white/10" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
