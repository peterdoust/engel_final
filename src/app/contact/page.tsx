'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const contactPersons = [
  {
    header: 'Forensic Accounting Services',
    name: 'Jason A. Engel, CPA, CFE, CIRA, CVA, MAFF, ABV',
    image: '/images/team/jason-engel.jpg',
    address: '350 S Grand Avenue, Suite 3160',
    city: 'Los Angeles, CA 90071',
    phone: '(310) 277-2220',
    direct: '(310) 277-5986',
    email: 'jasonengel@engelandengel.com',
  },
  {
    header: 'Forensic Accounting Services',
    name: 'Brandon J. Engel, CPA, CFE, ABV',
    image: '/images/team/brandon-engel.jpg',
    address: '350 S Grand Avenue, Suite 3160',
    city: 'Los Angeles, CA 90071',
    phone: '(310) 277-2220',
    direct: '(310) 579-0115',
    email: 'brandon@engelandengel.com',
  }
];

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('There was an error sending your message. Please try again or call (310) 277-2220.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className="bg-[#0f3574] min-h-screen text-white flex items-center justify-center pt-20">
          <div className="container-custom py-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <h1 className="text-[2.5rem] font-bold text-white">Message Received</h1>
              <p className="text-xl text-slate-400 mb-10 font-light">
                Thank you for contacting Engel & Engel. We will respond within 24 hours.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-[#D4AF37] text-black font-bold px-10 py-4"
              >
                Send Another Message
              </Button>
            </motion.div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">

        <section className="bg-primary-950 text-white py-24 text-center">
          <h1 className="text-4xl font-bold">Contact</h1>
        </section>

        <section className="bg-primary-950 py-20">
          <div className="container-custom grid lg:grid-cols-12 gap-10">

            {/* LEFT SIDE */}
            <div className="lg:col-span-5 space-y-6">
              {contactPersons.map((person, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-xl text-white">
                  <p className="text-[#D4AF37] text-xs uppercase">{person.header}</p>
                  <p className="font-bold">{person.name}</p>
                  <p>{person.address}, {person.city}</p>
                  <p>{person.phone}</p>
                  <p>{person.direct}</p>
                  <p>{person.email}</p>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="lg:col-span-7 bg-white p-10 rounded-xl">

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME */}
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Your Name *"
                  required
                  className="w-full p-3 border"
                />

                {/* EMAIL */}
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Your Email *"
                  required
                  className="w-full p-3 border"
                />

                {/* PHONE */}
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Your Phone"
                  className="w-full p-3 border"
                />

                {/* MESSAGE */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Your Message"
                  className="w-full p-3 border"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0f3574] text-white py-4"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

              </form>
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
