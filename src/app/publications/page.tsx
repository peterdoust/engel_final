'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

interface Publication {
  title: string
  subtitle?: string
  image: string
}

interface Category {
  id: string
  number: string
  title: string
  publications: Publication[]
}

const categories: Category[] = [
  {
    id: 'economic-damages',
    number: '01',
    title: 'Economic Damages',
    publications: [
      {
        title: 'Framework for the Calculation of Lost Profits: Part I',
        image: 'https://engelandengel.com/wp-content/uploads/2019/04/Framework-for-the-Calculation-of-Lost-Profits-Part-I-775x1024.png',
      },
      {
        title: 'Framework for the Calculation of Lost Profits: Part II',
        subtitle: 'The Element of Certainty',
        image: 'https://engelandengel.com/wp-content/uploads/2019/04/Framework-for-the-Calculation-of-Lost-Profits-Part-II-775x1024.png',
      },
      {
        title: 'Framework for the Calculation of Lost Profits: Part III',
        subtitle: 'Prospective Lost Profits',
        image: 'https://engelandengel.com/wp-content/uploads/2019/04/Framework-for-the-Calculation-of-Lost-Profits-Part-III-775x1024.png',
      },
      {
        title: 'Framework for the Calculation of Lost Profits: Part IV',
        subtitle: 'Unestablished Businesses',
        image: 'https://engelandengel.com/wp-content/uploads/2019/04/Framework-for-the-Calculation-of-Lost-Profits-Part-IV-775x1024.png',
      },
      {
        title: 'Framework for the Calculation of Lost Profits: Part V',
        subtitle: 'Mitigation of Damages',
        image: 'https://engelandengel.com/wp-content/uploads/2019/04/Framework-for-the-Calculation-of-Lost-Profits-Part-V-775x1024.png',
      },
      {
        title: 'Discounting Future Lost Profits',
        image: 'https://engelandengel.com/wp-content/uploads/2019/04/Discounting-Future-Lost-Profits-775x1024.png',
      },
    ],
  },
  {
    id: 'infringement-damages',
    number: '02',
    title: 'Infringement Damages',
    publications: [
      {
        title: 'Framework for the Calculation of Infringement Damages: Part I',
        subtitle: 'Trademark Infringement Damages Under the Lanham Act',
        image: 'https://engelandengel.com/wp-content/uploads/2019/04/Framework-for-the-Calculation-of-Infringement-Damages-Part-I-775x1024.png',
      },
      {
        title: 'Framework for the Calculation of Infringement Damages: Part II',
        subtitle: 'Patent Infringement Damages',
        image: 'https://engelandengel.com/wp-content/uploads/2019/04/Framework-for-the-Calculation-of-Infringement-Damages-Part-II-775x1024.png',
      },
    ],
  },
  {
    id: 'fraudulent-transfers',
    number: '03',
    title: 'Fraudulent Transfers',
    publications: [
      {
        title: 'Fraudulent Transfers',
        subtitle: 'The Element of Insolvency',
        image: 'https://engelandengel.com/wp-content/uploads/2019/04/Fraudulent-Transfers-The-Element-of-Insolvency-775x1024.png',
      },
      {
        title: 'Fraudulent Transfers',
        subtitle: 'The Element of Reasonably Equivalent Value',
        image: 'https://engelandengel.com/wp-content/uploads/2019/04/Fraudulent-Transfers-The-Element-of-Reasonably-Equivalent-Value-775x1024.png',
      },
      {
        title: 'Fraudulent Transfers',
        subtitle: 'The Element of Unreasonably Small Capital',
        image: 'https://engelandengel.com/wp-content/uploads/2019/04/Fraudulent-Transfers-The-Element-of-Unreasonably-Small-Capital-775x1024.png',
      },
      {
        title: 'Fraudulent Transfers',
        subtitle: 'The Element of Inability to Pay Debts as They Mature',
        image: 'https://engelandengel.com/wp-content/uploads/2019/04/Fraudulent-Transfers-The-Element-of-Inability-to-Pay-Debts-as-They-Mature-775x1024.png',
      },
    ],
  },
  {
    id: 'alter-ego',
    number: '04',
    title: 'Alter Ego',
    publications: [
      {
        title: 'Investigation & Discovery of Alter Ego Factors',
        image: 'https://engelandengel.com/wp-content/uploads/2019/04/Investigation-Discovery-of-Alter-Ego-Factors-775x1024.png',
      },
      {
        title: 'Alter Ego',
        subtitle: 'The Element of Undercapitalization',
        image: 'https://engelandengel.com/wp-content/uploads/2019/04/Alter-Ego-The-Element-of-Undercapitalization-775x1024.png',
      },
    ],
  },
  {
    id: 'employment-damages',
    number: '05',
    title: 'Employment Damages',
    publications: [
      {
        title: 'Framework for the Calculation of Employment Damages',
        image: 'https://engelandengel.com/wp-content/uploads/2019/04/Framework-for-the-Calculation-of-Employment-Damages-775x1024.png',
      },
    ],
  },
  {
    id: 'business-valuation',
    number: '06',
    title: 'Business Valuation',
    publications: [
      {
        title: 'Business Valuation Under California Corporate Code Section 2000',
        image: 'https://engelandengel.com/wp-content/uploads/2019/04/Business-Valuation-Under-California-Corporate-Code-Section-2000-775x1024.png',
      },
    ],
  },
  {
    id: 'admissibility',
    number: '07',
    title: 'Admissibility of Expert Testimony',
    publications: [
      {
        title: 'Admissibility of Expert Testimony',
        subtitle: 'The Element of Reliability',
        image: 'https://engelandengel.com/wp-content/uploads/2019/04/Admissibility-of-Expert-Testimony-The-Element-of-Reliability-775x1024.png',
      },
      {
        title: 'The Business Records Exception to the Hearsay Rule',
        subtitle: 'The Admissibility of Financial Records as Evidence in Federal and State Court',
        image: 'https://engelandengel.com/wp-content/uploads/2021/11/The-Business-Records-Exception-Hearsay-Rule-932-775x1024.png',
      },
    ],
  },
  {
    id: 'deposition-outline',
    number: '08',
    title: 'Deposition Outline for Officers & Executives',
    publications: [
      {
        title: 'Deposition Outline for Officers & Executives',
        image: 'https://engelandengel.com/wp-content/uploads/2019/04/Deposition-Outline-for-Officers-Executives-775x1024.png',
      },
    ],
  },
  {
    id: 'document-request',
    number: '09',
    title: 'Document Request for Accounting & Business Records',
    publications: [
      {
        title: 'Document Request for Accounting & Business Records',
        image: 'https://engelandengel.com/wp-content/uploads/2019/04/Document-Request-for-Accounting-Business-Records-775x1024.png',
      },
    ],
  },
]

const navItems = [
  { id: 'economic-damages', label: 'Economic Damages' },
  { id: 'infringement-damages', label: 'Infringement Damages' },
  { id: 'fraudulent-transfers', label: 'Fraudulent Transfers' },
  { id: 'alter-ego', label: 'Alter Ego' },
  { id: 'employment-damages', label: 'Employment Damages' },
  { id: 'business-valuation', label: 'Business Valuation' },
  { id: 'admissibility', label: 'Admissibility' },
  { id: 'deposition-outline', label: 'Deposition Outline' },
  { id: 'document-request', label: 'Document Request' },
]

const sidebarItems = [
  { id: 'economic-damages', label: 'Economic Damages' },
  { id: 'infringement-damages', label: 'Infringement Damages' },
  { id: 'fraudulent-transfers', label: 'Fraudulent Transfers' },
  { id: 'alter-ego', label: 'Alter Ego' },
  { id: 'employment-damages', label: 'Employment Damages' },
  { id: 'business-valuation', label: 'Business Valuation' },
  { id: 'admissibility', label: 'Admissibility of Expert Testimony' },
  { id: 'deposition-outline', label: 'Deposition Outline' },
  { id: 'document-request', label: 'Document Request' },
]

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
  'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
  'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming', 'Armed Forces Americas', 'Armed Forces Europe',
  'Armed Forces Pacific',
]

function PublicationCard({
  publication,
  onRequestClick,
}: {
  publication: Publication
  onRequestClick: (title: string) => void
}) {
  const fullTitle = publication.subtitle
    ? `${publication.title}: "${publication.subtitle}"`
    : publication.title

  return (
    <article className="pub-card group bg-white rounded-lg overflow-hidden border border-gray-200/50">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={publication.image}
          alt={fullTitle}
          className="pub-image w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className=" text-lg font-semibold text-gray-900 leading-snug mb-4">
          {publication.title}
          {publication.subtitle && (
            <>
              : <em className="text-gray-600">&ldquo;{publication.subtitle}&rdquo;</em>
            </>
          )}
        </h3>
        <button
          onClick={() => onRequestClick(fullTitle)}
          className="request-link text-xs tracking-wider uppercase font-semibold text-[#D4AF37] hover:text-[#b8962f] transition-colors"
        >
          Request This Publication
        </button>
      </div>
    </article>
  )
}

export default function PublicationsPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [activeSection, setActiveSection] = useState(sidebarItems[0]?.id || '')

  const openModal = useCallback((title: string) => {
    setModalTitle(title)
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeModal = useCallback(() => {
    setModalOpen(false)
    document.body.style.overflow = ''
  }, [])

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      alert('Thank you for your request. We will be in touch shortly.')
      closeModal()
        ; (e.target as HTMLFormElement).reset()
    },
    [closeModal]
  )

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [closeModal])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    const elements = sidebarItems
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[]

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-950">
        <div className="absolute inset-0 bg-primary-950 opacity-95" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
          <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="400" y2="400" stroke="white" strokeWidth="0.5" />
            <line x1="50" y1="0" x2="400" y2="350" stroke="white" strokeWidth="0.3" />
            <line x1="100" y1="0" x2="400" y2="300" stroke="white" strokeWidth="0.3" />
            <line x1="150" y1="0" x2="400" y2="250" stroke="white" strokeWidth="0.3" />
            <line x1="200" y1="0" x2="400" y2="200" stroke="white" strokeWidth="0.3" />
            <line x1="0" y1="50" x2="350" y2="400" stroke="white" strokeWidth="0.3" />
            <line x1="0" y1="100" x2="300" y2="400" stroke="white" strokeWidth="0.3" />
            <line x1="0" y1="150" x2="250" y2="400" stroke="white" strokeWidth="0.3" />
            <line x1="0" y1="200" x2="200" y2="400" stroke="white" strokeWidth="0.3" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 md:py-32 lg:py-40 pt-40 md:pt-48 lg:pt-52">
          <div className="max-w-3xl">
            <p className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-6 font-medium">
              Engel &amp; Engel LLP
            </p>
            <h1 className=" text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight">
              Publications
            </h1>
            <div className="w-12 h-[2px] bg-[#D4AF37] mt-8 mb-6" />
            <p className="text-primary-200 text-lg leading-relaxed max-w-xl font-light">
              Authoritative resources spanning economic damages, business valuation, fraudulent
              transfers, and expert testimony admissibility.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Sidebar (Desktop) */}
          <aside className="hidden lg:block lg:w-56 shrink-0">
            <div className="sticky top-24">
              <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-semibold mb-6">
                Categories
              </p>
              <nav className="flex flex-col gap-1" aria-label="Publication categories sidebar">
                {sidebarItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={`sidebar-link text-sm py-2 pl-3 rounded-r border-l-2 transition-colors ${activeSection === item.id
                        ? 'text-primary-950 border-primary-950 font-medium bg-primary-50/50'
                        : 'text-gray-500 border-transparent hover:text-gray-700'
                      }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Publications Grid */}
          <div className="flex-1 min-w-0">
            {categories.map((category, categoryIndex) => (
              <section
                key={category.id}
                id={category.id}
                className={`category-section scroll-mt-24 ${categoryIndex < categories.length - 1 ? 'mb-20' : 'mb-8'
                  }`}
              >
                <div className="section-divider pb-5 mb-10 border-b border-gray-200">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold mb-2">
                    {category.number}
                  </p>
                  <h2 className=" text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
                    {category.title}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  {category.publications.map((publication, pubIndex) => (
                    <PublicationCard
                      key={pubIndex}
                      publication={publication}
                      onRequestClick={openModal}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Request Publication Modal */}
      <div
        className={`pub-modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 ${modalOpen ? 'active' : ''
          }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
      >
        <div
          className="absolute inset-0 bg-primary-950/60 backdrop-blur-sm"
          onClick={closeModal}
        />
        <div className="pub-modal-panel relative bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
          {/* Modal Header */}
          <div className="sticky top-0 bg-white z-10 px-8 pt-8 pb-4 border-b border-gray-100">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold mb-1">
                  Request Publication
                </p>
                <h3
                  id="modalTitle"
                  className=" text-xl font-semibold text-gray-900 leading-snug"
                >
                  {modalTitle}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-700"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Modal Body / Form */}
          <div className="px-8 py-6">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-medium text-gray-600 mb-1.5">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors bg-gray-50/50"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-medium text-gray-600 mb-1.5">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors bg-gray-50/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="firmName" className="block text-xs font-medium text-gray-600 mb-1.5">
                  Firm Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firmName"
                  name="firmName"
                  required
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors bg-gray-50/50"
                />
              </div>

              <div>
                <label htmlFor="practiceArea" className="block text-xs font-medium text-gray-600 mb-1.5">
                  Practice Area <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="practiceArea"
                  name="practiceArea"
                  required
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors bg-gray-50/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-600 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors bg-gray-50/50"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-gray-600 mb-1.5">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors bg-gray-50/50"
                  />
                </div>
              </div>

              <fieldset>
                <legend className="block text-xs font-medium text-gray-600 mb-1.5">
                  Address <span className="text-red-500">*</span>
                </legend>
                <div className="space-y-3">
                  <input
                    type="text"
                    name="street"
                    placeholder="Street Address"
                    required
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors bg-gray-50/50 placeholder:text-gray-300"
                  />
                  <input
                    type="text"
                    name="address2"
                    placeholder="Address Line 2"
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors bg-gray-50/50 placeholder:text-gray-300"
                  />
                  <div className="grid grid-cols-5 gap-3">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      required
                      className="col-span-2 w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors bg-gray-50/50 placeholder:text-gray-300"
                    />
                    <select
                      name="state"
                      required
                      className="col-span-2 w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors bg-gray-50/50 text-gray-600"
                    >
                      <option value="">State</option>
                      {US_STATES.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      name="zip"
                      placeholder="ZIP"
                      required
                      className="col-span-1 w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors bg-gray-50/50 placeholder:text-gray-300"
                    />
                  </div>
                </div>
              </fieldset>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-primary-900 text-white text-xs tracking-[0.15em] uppercase font-semibold rounded-lg hover:bg-primary-800 active:bg-primary-950 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:ring-offset-2"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

