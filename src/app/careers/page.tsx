import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Careers at Engel & Engel | Forensic Accounting Jobs | Los Angeles',
  description: 'Join our team of forensic accounting professionals. Explore career opportunities at Engel & Engel LLP in Los Angeles. Competitive benefits and professional growth.',
}

const benefits = [
  {
    title: 'Professional Development',
    description: 'Continuous learning opportunities and certification support',
    icon: '📚'
  },
  {
    title: 'Competitive Compensation',
    description: 'Market-leading salary and performance-based bonuses',
    icon: '💰'
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs',
    icon: '🏥'
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible schedules and remote work opportunities',
    icon: '⚖️'
  },
  {
    title: 'Expert Mentorship',
    description: 'Learn from industry leaders with 35+ years experience',
    icon: '🎯'
  },
  {
    title: 'Career Growth',
    description: 'Clear advancement paths and leadership opportunities',
    icon: '📈'
  }
]

const positions = [
  {
    title: 'Senior Forensic Accountant',
    type: 'Full-time',
    location: 'Los Angeles, CA',
    experience: '5+ years',
    description: 'Lead complex forensic accounting engagements and provide expert witness testimony in high-stakes litigation matters.',
    requirements: [
      'CPA certification required',
      'CFE certification preferred',
      '5+ years forensic accounting experience',
      'Expert witness experience preferred',
      'Strong analytical and communication skills',
      'Experience with litigation support'
    ],
    responsibilities: [
      'Conduct complex financial investigations',
      'Prepare expert reports and testimony',
      'Lead client engagements and teams',
      'Mentor junior staff members',
      'Develop new business opportunities'
    ]
  },
  {
    title: 'Forensic Accountant',
    type: 'Full-time',
    location: 'Los Angeles, CA',
    experience: '2-5 years',
    description: 'Support forensic accounting investigations and assist with expert witness engagements across various practice areas.',
    requirements: [
      'CPA certification required',
      '2-5 years accounting experience',
      'Forensic accounting experience preferred',
      'Strong Excel and analytical skills',
      'Excellent written communication',
      'Bachelor\'s degree in Accounting or Finance'
    ],
    responsibilities: [
      'Assist with forensic investigations',
      'Prepare financial analyses and reports',
      'Support expert witness engagements',
      'Conduct research and data analysis',
      'Collaborate with legal teams'
    ]
  },
  {
    title: 'Staff Accountant',
    type: 'Full-time',
    location: 'Los Angeles, CA',
    experience: '0-2 years',
    description: 'Entry-level position supporting forensic accounting engagements with opportunities for rapid career advancement.',
    requirements: [
      'Bachelor\'s degree in Accounting or Finance',
      'CPA certification preferred',
      'Strong analytical skills',
      'Proficiency in Excel and accounting software',
      'Detail-oriented with strong work ethic',
      'Interest in forensic accounting'
    ],
    responsibilities: [
      'Support forensic accounting projects',
      'Perform financial data analysis',
      'Assist with report preparation',
      'Conduct research and documentation',
      'Learn from senior team members'
    ]
  }
]

export default function CareersPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 lg:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Join Our Expert Team
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Build your career in forensic accounting with California's premier firm. 
              Work alongside industry leaders on high-profile cases and complex litigation matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#positions">
                <Button size="xl" className="bg-white text-primary-900 hover:bg-gray-100">
                  View Open Positions
                </Button>
              </Link>
              <a href="mailto:careers@engelandengel.com">
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-900">
                  Send Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Engel & Engel?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team that has achieved the largest jury award in forensic accounting history 
              and continues to set the standard for excellence in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">$2.3B</div>
              <div className="text-gray-600">Largest Jury Award</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">35+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Cases Handled</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">6</div>
              <div className="text-gray-600">Professional Certifications</div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p className="text-lg mb-6">
                At Engel & Engel, we believe our people are our greatest asset. We're committed to creating 
                an environment where talented professionals can thrive, grow, and make a meaningful impact 
                on high-stakes litigation matters.
              </p>
              
              <p className="text-lg">
                Our team works on some of the most complex and interesting forensic accounting cases in the 
                country, providing unparalleled learning opportunities and career advancement potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Culture */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Benefits & Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive benefits and a supportive culture that promotes 
              professional growth and work-life balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4 text-2xl">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current career opportunities and join our team of forensic accounting experts.
            </p>
          </div>

          <div className="space-y-8">
            {positions.map((position, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gray-50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <a href="mailto:careers@engelandengel.com?subject=Application for {position.title}">
                        <Button>Apply Now</Button>
                      </a>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">{position.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-gray-600">
                            <span className="text-primary-500 mr-2 mt-1">•</span>
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start text-gray-600">
                            <span className="text-primary-500 mr-2 mt-1">•</span>
                            <span className="text-sm">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">How to Apply</h2>
            <p className="text-xl text-gray-600 mb-12">
              Ready to join our team? Follow these simple steps to submit your application.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Submit Resume</h3>
                <p className="text-gray-600">
                  Email your resume and cover letter to careers@engelandengel.com
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Review</h3>
                <p className="text-gray-600">
                  Our team will review your qualifications and experience
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interview Process</h3>
                <p className="text-gray-600">
                  Meet with our team to discuss the opportunity and your fit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Career?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join our team of forensic accounting experts and work on some of the most 
            challenging and rewarding cases in the industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:careers@engelandengel.com">
              <Button size="xl" className="bg-white text-primary-900 hover:bg-gray-100">
                Send Your Resume
              </Button>
            </a>
            <a href="tel:+13102772220">
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-900">
                Call (310) 277-2220
              </Button>
            </a>
          </div>
          <p className="text-primary-200 text-sm mt-6">
            ✓ Competitive Benefits  ✓ Professional Growth  ✓ Expert Mentorship  ✓ Work-Life Balance
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
