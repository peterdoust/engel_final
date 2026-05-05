'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        }),
      });

      if (!response.ok) throw new Error('Failed');

      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      alert('Error sending message');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center bg-[#0f3574] text-white">
          <div className="text-center">
            <h1 className="text-3xl">Message Received</h1>
            <p>We will respond within 24 hours.</p>
            <Button onClick={() => setIsSubmitted(false)} className="mt-6">
              Send Another
            </Button>
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

        {/* HERO */}
        <section className="pt-28 pb-10 bg-[#0f3574] text-white text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>
        </section>

        <section className="bg-[#0f3574] text-white py-16">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* LEFT: CONTACT CARDS */}
            <div className="space-y-6">
              {contactPersons.map((p, i) => (
                <div key={i} className="bg-white/10 p-6 rounded-xl">
                  <Image src={p.image} width={80} height={80} alt={p.name} />
                  <h3 className="font-bold mt-3">{p.name}</h3>
                  <p>{p.address}</p>
                  <p>{p.city}</p>
                </div>
              ))}
            </div>

            {/* RIGHT: FORM */}
            <form onSubmit={handleSubmit} className="bg-white text-black p-8 rounded-xl space-y-4">

              <input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border"
                required
              />

              <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border"
                required
              />

              <input
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 border"
              />

              <input
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full p-3 border"
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 border"
                rows={5}
              />

              <Button disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </section>

        {/* MAP */}
        <section className="h-[500px]">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18..."
          />
        </section>

      </main>

      <Footer />
    </>
  );
}
