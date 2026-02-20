'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const practiceAreas = [
  { name: 'Economic Damages', href: '/practice-areas/economic-damages' },
  { name: 'Fraud Investigation', href: '/practice-areas/fraud-investigation' },
  { name: 'Business Valuation', href: '/practice-areas/business-valuation' },
  { name: 'Bankruptcy & Insolvency', href: '/practice-areas/bankruptcy-insolvency' },
  { name: 'Real Estate Litigation', href: '/practice-areas/real-estate-litigation' },
  { name: 'Construction Litigation', href: '/practice-areas/construction-litigation' },
  { name: 'Alter Ego', href: '/practice-areas/alter-ego' },
  { name: 'Fraudulent Transfers', href: '/practice-areas/fraudulent-transfers' },
  { name: 'Employment Litigation', href: '/practice-areas/employment-litigation' },
  { name: 'Business Interruption', href: '/practice-areas/business-interruption' },
  { name: 'Personal Injury', href: '/practice-areas/personal-injury' },
  { name: 'Accounting Malpractice', href: '/practice-areas/accounting-malpractice' },
  { name: 'Partnership Disputes', href: '/practice-areas/partnership-disputes' },
  { name: 'Defamation', href: '/practice-areas/defamation' },
  { name: 'Trust & Probate Litigation', href: '/practice-areas/trust-probate-litigation' },
  { name: 'IP Litigation', href: '/practice-areas/ip-litigation' },
]

const services = [
  { name: 'Forensic Accounting', href: '/services/forensic-accounting' },
  { name: 'Expert Witness Testimony', href: '/services/expert-witness-testimony' },
  { name: 'Joint Retention Program', href: '/services/joint-retention-program' },
  { name: 'Internal Investigations', href: '/services/internal-investigations' },
]

const aboutDropdown = [
  { name: 'Our Team', href: '/team' },
  { name: 'Events', href: '/events' },
  { name: 'Careers', href: '/careers' },
]

const navigation = [
  { name: 'Cases', href: '/cases' },
  { name: 'Publications', href: '/publications' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPracticeAreasOpen, setIsPracticeAreasOpen] = useState(false)
  const [isMobilePracticeAreasOpen, setIsMobilePracticeAreasOpen] = useState(false)
  const [isDarkBackground, setIsDarkBackground] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false)
  const practiceAreasDropdownRef = useRef<HTMLDivElement>(null)
  const servicesDropdownRef = useRef<HTMLDivElement>(null)
  const aboutDropdownRef = useRef<HTMLDivElement>(null)

  // Combined scroll handler for both isScrolled and isDarkBackground
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // Update scroll state for white bar (trigger at 10px for faster response)
      setIsScrolled(scrollY > 10)

      // AUTOMATIC DARK BACKGROUND DETECTION
      // Instead of maintaining a hardcoded list, we automatically detect
      // if the page has a dark hero section by checking the background color
      // of the element directly below the header
      if (scrollY < 100) {
        // Get the first section element (usually the hero)
        const firstSection = document.querySelector('main > section:first-of-type')

        if (firstSection) {
          const bgColor = window.getComputedStyle(firstSection).backgroundColor
          const bgImage = window.getComputedStyle(firstSection).backgroundImage

          // Check if it has a dark background (gradient or solid color)
          // Dark backgrounds typically have rgb values < 100 for all channels
          // or have a gradient background image
          const hasDarkBg = bgImage.includes('gradient') ||
                           bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/) &&
                           bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)?.slice(1, 4).every(val => parseInt(val) < 100)

          setIsDarkBackground(hasDarkBg || false)
        } else {
          setIsDarkBackground(false)
        }
      } else {
        setIsDarkBackground(false)
      }
    }

    // Set initial state
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (practiceAreasDropdownRef.current && !practiceAreasDropdownRef.current.contains(event.target as Node)) {
        setIsPracticeAreasOpen(false)
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* ========================================
              APPROVED LOGO CONFIGURATION - LOCKED - DO NOT MODIFY
              ========================================
              White Logo (Dark BG): /images/logo-accountants-white-font.png (280×56px)
              Dark Logo (Light BG): /images/logo.png (200×48px)
              See APPROVED-LOGOS.md for full documentation
              ======================================== */}
          <Link href="/" className="flex items-center">
            <div className="relative h-14 w-auto">
              <Image
                src={isDarkBackground && !isScrolled ? "/images/logo-accountants-white-font.png" : "/images/logo.png"}
                alt="Engel & Engel Forensic Accounting"
                width={isDarkBackground && !isScrolled ? 280 : 200}
                height={isDarkBackground && !isScrolled ? 56 : 48}
                className={isDarkBackground && !isScrolled ? "h-14 w-auto object-contain transition-all duration-300" : "h-12 w-auto object-contain transition-all duration-300"}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* About Dropdown - FIRST */}
            <div className="relative" ref={aboutDropdownRef}>
              <button
                type="button"
                className={cn(
                  'flex items-center text-sm font-medium transition-colors duration-200 hover:text-primary-600',
                  isScrolled ? 'text-gray-700' : 'text-white hover:text-primary-200'
                )}
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                onMouseEnter={() => {
                  setIsAboutOpen(true)
                  setIsServicesOpen(false)
                  setIsPracticeAreasOpen(false)
                }}
              >
                About
                <svg
                  className={cn(
                    'ml-1 h-4 w-4 transition-transform duration-200',
                    isAboutOpen ? 'rotate-180' : ''
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {/* About Dropdown Menu */}
              {isAboutOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                  onMouseLeave={() => setIsAboutOpen(false)}
                >
                  <div className="grid grid-cols-1 gap-1 p-2">
                    {aboutDropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors duration-200"
                        onClick={() => setIsAboutOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Cases - SECOND */}
            <Link
              href="/cases"
              className={cn(
                'text-sm font-medium transition-colors duration-200 hover:text-primary-600',
                isScrolled ? 'text-gray-700' : 'text-white hover:text-primary-200'
              )}
            >
              Cases
            </Link>

            {/* Publications - THIRD */}
            <Link
              href="/publications"
              className={cn(
                'text-sm font-medium transition-colors duration-200 hover:text-primary-600',
                isScrolled ? 'text-gray-700' : 'text-white hover:text-primary-200'
              )}
            >
              Publications
            </Link>

            {/* Services Dropdown - FOURTH */}
            <div className="relative" ref={servicesDropdownRef}>
              <button
                type="button"
                className={cn(
                  'flex items-center text-sm font-medium transition-colors duration-200 hover:text-primary-600',
                  isScrolled ? 'text-gray-700' : 'text-white hover:text-primary-200'
                )}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => {
                  setIsServicesOpen(true)
                  setIsPracticeAreasOpen(false)
                  setIsAboutOpen(false)
                }}
              >
                Services
                <svg
                  className={cn(
                    'ml-1 h-4 w-4 transition-transform duration-200',
                    isServicesOpen ? 'rotate-180' : ''
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {/* Services Dropdown Menu */}
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="px-4 py-2 border-b border-gray-100">
                    <Link
                      href="/services"
                      className="text-sm font-semibold text-primary-600 hover:text-primary-700"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      All Services →
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors duration-200"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Practice Areas Dropdown - FIFTH */}
            <div className="relative" ref={practiceAreasDropdownRef}>
              <button
                type="button"
                className={cn(
                  'flex items-center text-sm font-medium transition-colors duration-200 hover:text-primary-600',
                  isScrolled ? 'text-gray-700' : 'text-white hover:text-primary-200'
                )}
                onClick={() => setIsPracticeAreasOpen(!isPracticeAreasOpen)}
                onMouseEnter={() => {
                  setIsPracticeAreasOpen(true)
                  setIsServicesOpen(false)
                  setIsAboutOpen(false)
                }}
              >
                Practice Areas
                <svg
                  className={cn(
                    'ml-1 h-4 w-4 transition-transform duration-200',
                    isPracticeAreasOpen ? 'rotate-180' : ''
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {/* Practice Areas Dropdown Menu */}
              {isPracticeAreasOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 max-h-[calc(100vh-120px)] overflow-y-auto"
                  onMouseLeave={() => setIsPracticeAreasOpen(false)}
                >
                  <div className="px-4 py-2 border-b border-gray-100 sticky top-0 bg-white z-10">
                    <Link
                      href="/practice-areas"
                      className="text-sm font-semibold text-primary-600 hover:text-primary-700"
                      onClick={() => setIsPracticeAreasOpen(false)}
                    >
                      All Practice Areas →
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-2">
                    {practiceAreas.map((area) => (
                      <Link
                        key={area.name}
                        href={area.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors duration-200"
                        onClick={() => setIsPracticeAreasOpen(false)}
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact - SIXTH */}
            <Link
              href="/contact"
              className={cn(
                'text-sm font-medium transition-colors duration-200 hover:text-primary-600',
                isScrolled ? 'text-gray-700' : 'text-white hover:text-primary-200'
              )}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact">
              <Button size="sm">
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={cn(
                'h-6 w-6 transition-colors',
                isScrolled ? 'text-gray-700' : 'text-white'
              )}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100 shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
              {/* Mobile Practice Areas */}
              <div>
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => {
                    setIsMobilePracticeAreasOpen(!isMobilePracticeAreasOpen)
                    setIsMobileServicesOpen(false)
                    setIsMobileAboutOpen(false)
                  }}
                >
                  Practice Areas
                  <svg
                    className={cn(
                      'h-4 w-4 transition-transform duration-200',
                      isMobilePracticeAreasOpen ? 'rotate-180' : ''
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {isMobilePracticeAreasOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    <Link
                      href="/services"
                      className="block px-3 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-md transition-colors duration-200"
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        setIsMobilePracticeAreasOpen(false)
                      }}
                    >
                      All Services →
                    </Link>
                    {practiceAreas.map((area) => (
                      <Link
                        key={area.name}
                        href={area.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors duration-200"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsMobilePracticeAreasOpen(false)
                        }}
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => {
                    setIsMobileServicesOpen(!isMobileServicesOpen)
                    setIsMobilePracticeAreasOpen(false)
                    setIsMobileAboutOpen(false)
                  }}
                >
                  Services
                  <svg
                    className={cn(
                      'h-4 w-4 transition-transform duration-200',
                      isMobileServicesOpen ? 'rotate-180' : ''
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {isMobileServicesOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    <Link
                      href="/services"
                      className="block px-3 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-md transition-colors duration-200"
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        setIsMobileServicesOpen(false)
                      }}
                    >
                      All Services →
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors duration-200"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsMobileServicesOpen(false)
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile About Dropdown */}
              <div>
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => {
                    setIsMobileAboutOpen(!isMobileAboutOpen)
                    setIsMobilePracticeAreasOpen(false)
                    setIsMobileServicesOpen(false)
                  }}
                >
                  About
                  <svg
                    className={cn(
                      'h-4 w-4 transition-transform duration-200',
                      isMobileAboutOpen ? 'rotate-180' : ''
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {isMobileAboutOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    {aboutDropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors duration-200"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsMobileAboutOpen(false)
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Regular Mobile Navigation Items */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 space-y-2">
                <Link href="/contact" className="block">
                  <Button size="sm" fullWidth>
                    Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
