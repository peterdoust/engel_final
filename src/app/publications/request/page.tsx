'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const publicationCategories = {
  'economic-damages': {
    title: 'Economic Damages',
    publications: [
      'Framework for the Calculation of Lost Profits: Part I',
      'Framework for the Calculation of Lost Profits: Part II: "The Element of Certainty"',
      'Framework for the Calculation of Lost Profits: Part III: "Prospective Lost Profits"',
      'Framework for the Calculation of Lost Profits: Part IV: "Unestablished Businesses"',
      'Framework for the Calculation of Lost Profits: Part V: "Mitigation of Damages"',
      'Discounting Future Lost Profits'
    ]
  },
  'infringement-damages': {
    title: 'Infringement Damages',
    publications: [
      'Framework for the Calculation of Infringement Damages: Part I: "Trademark Infringement Damages Under the Lanham Act"',
      'Framework for the Calculation of Infringement Damages: Part II "Patent Infringement Damages"'
    ]
  },
  'fraudulent-transfers': {
    title: 'Fraudulent Transfers',
    publications: [
      'Fraudulent Transfers: "The Element of Insolvency"',
      'Fraudulent Transfers: "The Element of Reasonably Equivalent Value"',
      'Fraudulent Transfers: "The Element of Unreasonably Small Capital"',
      'Fraudulent Transfers: "The Element of Inability to Pay Debts as They Mature"'
    ]
  },
  'alter-ego': {
    title: 'Alter Ego',
    publications: [
      'Investigation & Discovery of Alter Ego Factors',
      'Alter Ego: "The Element of Undercapitalization"'
    ]
  },
  'employment-damages': {
    title: 'Employment Damages',
    publications: [
      'Framework for the Calculation of Employment Damages'
    ]
  },
  'business-valuation': {
    title: 'Business Valuation',
    publications: [
      'Business Valuation Under California Corporate Code Section 2000'
    ]
  },
  'expert-witness': {
    title: 'Expert Witness Testimony',
    publications: [
      'Admissibility of Expert Testimony: "The Element of Reliability"',
      'The Business Records Exception to the Hearsay Rule: "The Admissibility of Financial Records as Evidence in Federal and State Court"'
    ]
  },
  'legal-resources': {
    title: 'Legal Resources',
    publications: [
      'Deposition Outline for Officers & Executives',
      'Document Request for Accounting & Business Records'
    ]
  }
}

function PublicationRequestForm() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedPublications, setSelectedPublications] = useState<string[]>([])
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    firmName: '',
    practiceArea: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const category = searchParams.get('category')
    if (category && publicationCategories[category as keyof typeof publicationCategories]) {
      setSelectedCategory(category)
      // Pre-select all publications in the category
      const categoryData = publicationCategories[category as keyof typeof publicationCategories]
      setSelectedPublications(categoryData.publications)
    }
  }, [searchParams])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePublicationToggle = (publication: string) => {
    setSelectedPublications(prev => 
      prev.includes(publication)
        ? prev.filter(p => p !== publication)
        : [...prev, publication]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const submissionData = {
        ...formData,
        requestedPublications: selectedPublications,
        category: selectedCategory,
        timestamp: new Date().toISOString()
      }

      // Send email to peter@gcs.la
      const response = await fetch('/api/send-publication-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      if (!response.ok) {
        throw new Error('Failed to send publication request')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting request:', error)
      alert('There was an error submitting your request. Please try again or call (310) 277-2220.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <main>
        <Header />
        <section className="pt-16 lg:pt-20 min-h-screen bg-gray-50 flex items-center">
          <div className="container-custom py-20">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Request Submitted Successfully</h1>
              <p className="text-xl text-gray-600 mb-8">
                Thank you for your interest in our publications. We will review your request and send the requested 
                publications to your email address within 1-2 business days.
              </p>
              <div className="space-y-4">
                <a href="/publications">
                  <Button size="lg">Back to Publications</Button>
                </a>
                <div className="text-gray-500">
                  <p>Questions? Call us at <a href="tel:+13102772220" className="text-primary-600 font-semibold">(310) 277-2220</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 lg:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Request Publications
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Request access to our comprehensive research publications on forensic accounting, 
              economic damages, and expert witness testimony.
            </p>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription>Please provide your contact details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firmName" className="block text-sm font-medium text-gray-700 mb-2">
                        Firm/Organization Name *
                      </label>
                      <input
                        type="text"
                        id="firmName"
                        name="firmName"
                        required
                        value={formData.firmName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="practiceArea" className="block text-sm font-medium text-gray-700 mb-2">
                        Practice Area *
                      </label>
                      <select
                        id="practiceArea"
                        name="practiceArea"
                        required
                        value={formData.practiceArea}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">Select Practice Area</option>
                        <option value="litigation">Litigation</option>
                        <option value="forensic-accounting">Forensic Accounting</option>
                        <option value="corporate-law">Corporate Law</option>
                        <option value="intellectual-property">Intellectual Property</option>
                        <option value="employment-law">Employment Law</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="construction">Construction</option>
                        <option value="personal-injury">Personal Injury</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Publication Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Select Publications</CardTitle>
                  <CardDescription>Choose the publications you would like to receive</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {Object.entries(publicationCategories).map(([categoryKey, category]) => (
                      <div key={categoryKey} className="border border-gray-200 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h3>
                        <div className="space-y-2">
                          {category.publications.map((publication, index) => (
                            <label key={index} className="flex items-start space-x-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedPublications.includes(publication)}
                                onChange={() => handlePublicationToggle(publication)}
                                className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                              />
                              <span className="text-sm text-gray-700 font-medium leading-relaxed">{publication}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Additional Information</CardTitle>
                  <CardDescription>Optional: Tell us more about your request</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please let us know how you plan to use these publications or any specific questions you have..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  size="xl"
                  disabled={isSubmitting || selectedPublications.length === 0}
                  className="min-w-48"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Publications'}
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  * Required fields. Publications will be sent to your email address within 1-2 business days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function PublicationRequestPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PublicationRequestForm />
    </Suspense>
  )
}
