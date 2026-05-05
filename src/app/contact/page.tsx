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

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("FORM DATA BEFORE SEND:", formData);

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
      console.error(error);
      alert('Error sending message.');
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
            <h1 className="text-4xl font-bold">Message Received</h1>
            <p className="mt-4 text-slate-300">
              We will respond within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)} className="mt-8">
              Send Another Message
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

      <main className="min-h-screen bg-primary-950 text-white pt-32">
        <div className="container-custom max-w-3xl mx-auto">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full p-3 text-black rounded"
              required
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="w-full p-3 text-black rounded"
              required
            />

            {/* PHONE */}
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
              className="w-full p-3 text-black rounded"
            />

            {/* COMPANY */}
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Company"
              className="w-full p-3 text-black rounded"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              className="w-full p-3 text-black rounded h-40"
              required
            />

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

          </form>

        </div>
      </main>

      <Footer />
    </>
  );
}
