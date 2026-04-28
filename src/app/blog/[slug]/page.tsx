import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'

// Real blog posts data from engelandengel.com
const blogPosts = {
  'forensic-accountants-uncover-evidence-operational-business-records': {
    title: 'How Forensic Accountants Uncover Critical Evidence with Operational and Underlying Business Records',
    description: 'Providing your forensic accountant with operational and underlying business records can be just as critical as providing financial statements, and in some matters it can reveal the key piece of evidence that shifts the direction of a case.',
    content: `
      <p>Providing your forensic accountant with operational and underlying business records can be just as critical as providing financial statements, and in some matters it can reveal the key piece of evidence that shifts the direction of a case. In complex litigation, the most persuasive evidence is often found in records that show the underlying operations of the business. By analyzing these records alongside the financials, forensic accountants can uncover proof of misconduct, identify transactional patterns and irregularities, and explain how an organization actually operated from the inside. In many cases, these records are the "needle in the haystack" that provides the factfinder with clear, persuasive evidence that financial statements alone cannot reveal.</p>

      <h2>Key Operational Records That Reveal Critical Evidence</h2>

      <ul>
        <li><strong>Employment litigation:</strong> Timesheets and payroll records can demonstrate whether employees consistently missed required breaks or did not receive overtime pay.</li>
        <li><strong>Construction litigation:</strong> Pay applications, continuation sheets, change orders, budgets, invoices, and schedules of values can demonstrate performance shortfalls, cost shifting, overbilling, and related-party transactions.</li>
        <li><strong>Real estate litigation:</strong> Rent rolls, loan documents, lease agreements, property management records, invoices, and utility bills can uncover misappropriation of funds, diversion of rent revenues, and related-party transactions.</li>
        <li><strong>Intellectual property litigation:</strong> Damages analyses are strengthened by examining product unit data, licensing reports, contracts, franchise agreements, and customer usage records.</li>
        <li><strong>Calculating damages:</strong> Website analytics, production schedules, inventory records, contracts, invoices, shipping documents, and payment processing data often don't just reveal sales activity but also capacity and demand.</li>
      </ul>

      <h2>Strategic Advantage for Legal Counsel</h2>

      <p>For attorneys, the value of working with a forensic accountant lies in providing access to these operational and underlying business records so that no critical detail is overlooked. Supplying this information early in discovery not only helps identify irregularities and support or challenge allegations, but it also gives counsel a strategic advantage. The ability to connect operational and underlying business records back to the facts of the case can be the differentiator, allowing attorneys to present stronger arguments, anticipate opposing claims, and highlight the evidence that ultimately carries the most weight in court.</p>
    `,
    author: 'Brandon Engel, CPA, CFE, ABV',
    authorRole: 'Partner & Senior Forensic Accountant',
    authorBio: 'Brandon Engel is a Certified Public Accountant and Certified Fraud Examiner With  30+ years of experience in forensic accounting and fraud investigation. As a partner at Engel & Engel LLP, Brandon has testified in hundreds of cases and helped secure substantial judgments for clients in complex litigation matters.',
    publishDate: '2024-09-11T09:00:00-08:00',
    modifiedDate: '2024-09-11T09:00:00-08:00',
    readTime: '7 min read',
    wordCount: 1800,
    category: 'Forensic Accounting',
    tags: ['#ForensicAccounting', '#BusinessRecords', '#LegalEvidence', '#ExpertWitness', '#FinancialAnalysis', '#Litigation'],
    image: '/images/blog/underlying-records-financial-statements.avif',
    imageAlt: 'Underlying records in financial statements - forensic accounting analysis'
  },
  'what-to-look-for-when-retaining-forensic-accountant': {
    title: 'What To Look For When Retaining a Forensic Accountant',
    description: 'When litigation hinges on the clarity of financial facts, a skilled forensic accountant can be the difference between prevailing and watching your case unravel.',
    content: `
      <p>When litigation hinges on the clarity of financial facts, a skilled forensic accountant can be the difference between prevailing and watching your case unravel. The selection of the right expert is crucial to the success of your case, and understanding what qualifications and characteristics to look for can make all the difference in achieving a favorable outcome.</p>

      <h2>Essential Qualifications to Evaluate</h2>

      <h3>Professional Certifications</h3>
      <ul>
        <li><strong>CPA (Certified Public Accountant):</strong> The foundation of accounting expertise</li>
        <li><strong>CFE (Certified Fraud Examiner):</strong> Specialized fraud investigation training</li>
        <li><strong>CIRA (Certified Insolvency & Restructuring Advisor):</strong> Bankruptcy and insolvency expertise</li>
        <li><strong>CVA (Certified Valuation Analyst):</strong> Business valuation specialization</li>
        <li><strong>MAFF (Master Analyst in Financial Forensics):</strong> Advanced forensic accounting credentials</li>
        <li><strong>ABV (Accredited in Business Valuation):</strong> AICPA business valuation credential</li>
      </ul>

      <h3>Experience and Track Record</h3>
      <p>Look for experts with substantial experience in cases similar to yours. A forensic accountant with 30+ years of experience and hundreds of cases under their belt brings invaluable expertise to complex litigation matters.</p>

      <h2>Key Considerations for Expert Selection</h2>

      <p>The ideal forensic accountant should have experience testifying as an expert witness, a strong understanding of legal procedures, and the ability to communicate complex financial concepts clearly to judges and juries. They should also have experience working with Big Law firms and be trial-ready for high-stakes litigation.</p>
    `,
    author: 'Brandon Engel, CPA, CFE, ABV',
    authorRole: 'Partner & Senior Forensic Accountant',
    authorBio: 'Brandon Engel is a Certified Public Accountant and Certified Fraud Examiner With  30+ years of experience in forensic accounting and fraud investigation. As a partner at Engel & Engel LLP, Brandon has testified in hundreds of cases and helped secure substantial judgments for clients in complex litigation matters.',
    publishDate: '2024-07-29T09:00:00-08:00',
    modifiedDate: '2024-07-29T09:00:00-08:00',
    readTime: '6 min read',
    wordCount: 1500,
    category: 'Expert Selection',
    tags: ['#ForensicAccountant', '#ExpertWitness', '#LegalConsultation', '#ExpertSelection', '#Litigation', '#BigLaw'],
    image: '/images/blog/retaining-forensic-accountant.avif',
    imageAlt: 'Professional consultation for retaining a forensic accountant - expert selection process'
  },
  'critical-action-steps-preserving-evidence-after-embezzlement': {
    title: 'The Most Critical Action Steps for Preserving Evidence after an Embezzlement',
    description: 'Preserving accounting evidence after an embezzlement is crucial for pursuing the perpetrator of the fraud in civil and criminal courts.',
    content: `
      <p>Preserving accounting evidence after an embezzlement is crucial for pursuing the perpetrator of the fraud in civil and criminal courts. Forged checks, duplicate payments, fake expenses, hidden personal expenses, and inflated expenses are only a few of the countless ways an employee can embezzle from within an organization.</p>

      <h2>Immediate Action Steps</h2>

      <h3>1. Secure Access and Lock Out the Suspect</h3>
      <p>The first step to preserving evidence is to ensure that the suspect has been completely locked out of the organization's physical and digital records. The suspect should immediately be removed of access from the organization's physical devices, all accounting records including accounting software, banking access and records, credit cards, invoices, payroll, and internal document systems.</p>

      <h3>2. Preserve Accounting Records</h3>
      <p>If the suspect of the fraud had access to the organization's bank accounts and the organization's accounting records, the trail of evidence leading to the fraud may have been left within the organization's accounting records. To preserve this key evidence, it's essential to immediately make a complete copy of the organization's accounting records including the accounting software and general ledger exactly as the suspect left it.</p>

      <h3>3. Maintain Audit Trails</h3>
      <p>By making a copy of the organization's accounting software, the organization can also preserve the audit log within the accounting software. The audit log is a feature of the accounting software that tracks the creation, modification, and deletion of transactions. This allows the forensic investigator to identify who recorded the fraudulent entries, when they were recorded, and what the entries were.</p>

      <h2>Working with Forensic Experts</h2>

      <p>During the course of the fraud investigation, the investigator may identify falsified accounting entries and fraudulent journal entries that need to be corrected. By making a copy of the accounting software and general ledger, the organization can begin to correct their books while still preserving the fraudulent entries. This also allows the forensic accounting investigator to present the falsified entries, as well as the corrected entries, in court.</p>

      <p>It may also be necessary for the organization to retain the services of a digital forensics investigator to preserve the digital evidence associated with the embezzlement.</p>

      <p>As Certified Fraud Examiners, Engel & Engel has conducted hundreds of fraud investigations and testified as expert witnesses in numerous cases that have led to substantial fraud judgements.</p>
    `,
    author: 'Brandon Engel, CPA, CFE, ABV',
    authorRole: 'Partner & Senior Forensic Accountant',
    authorBio: 'Brandon Engel is a Certified Public Accountant and Certified Fraud Examiner With  30+ years of experience in forensic accounting and fraud investigation. As a partner at Engel & Engel LLP, Brandon has testified in hundreds of cases and helped secure substantial judgments for clients in complex litigation matters.',
    publishDate: '2024-07-14T09:00:00-08:00',
    modifiedDate: '2024-07-14T09:00:00-08:00',
    readTime: '8 min read',
    wordCount: 2000,
    category: 'Fraud Investigation',
    tags: ['#Embezzlement', '#FraudInvestigation', '#EvidencePreservation', '#CertifiedFraudExaminer', '#ForensicAccounting', '#TrialReady'],
    image: '/images/blog/critical-actions-evidence-embezzlement.avif',
    imageAlt: 'Critical action steps to preserve evidence in an embezzlement case'
  },
  'key-documents-forensic-accounting-experts-need-discovery': {
    title: '4 Key Documents Most Forensic Accounting Experts Need Before Discovery Closes',
    description: 'Whether your forensic accountant is retained to calculate economic damages, conduct a fraud investigation, or perform a business valuation, these four financial documents can almost always serve as the foundation.',
    content: `
      <p>Whether your forensic accountant is retained to calculate economic damages, conduct a fraud investigation, or perform a business valuation, these four financial documents can almost always serve as the foundation to assess the financial issues in any forensic accounting case. In some cases, these four financial documents may be everything your forensic accountant needs to prepare a sound financial analysis and testify in deposition or trial.</p>

      <h2>The Four Essential Documents</h2>

      <p>With these four documents, your forensic accountant will have the ability to:</p>

      <ol>
        <li>Assess the financial history and analyze trends of the entity through their financial statements.</li>
        <li>Investigate specific transactions and how they were recorded in the general ledger.</li>
        <li>Understand how the entity reported its financials under penalty of perjury to the IRS.</li>
        <li>Analyze the distributions taken out and the contributions put in by the owners of the entity.</li>
        <li>Verify specific transactions in the bank records and verify the accuracy of the financial statements.</li>
      </ol>

      <h2>Document Categories</h2>

      <h3>1. Financial Statements</h3>
      <p>Complete financial statements provide the foundation for understanding the entity's financial position and performance over time.</p>

      <h3>2. General Ledgers</h3>
      <p>Detailed general ledger records allow forensic accountants to trace individual transactions and identify irregularities.</p>

      <h3>3. Tax Returns</h3>
      <p>Tax returns show how the entity reported its financial information to the IRS under penalty of perjury.</p>

      <h3>4. Bank Statements</h3>
      <p>Bank statements provide independent verification of financial transactions and cash flows.</p>

      <h2>Case Applications</h2>

      <p>Since every case presents its own set of distinct issues, your expert may need to request additional financial and business records to conduct their analysis. While it's always best to retain your experts early, if you find yourself in a position where discovery is closing and you haven't spoken with your financial expert, requesting these four key financial documents may be just what your forensic accounting expert needs.</p>

      <p>Obtaining (1) Financial Statements (2) General Ledgers, (3) Tax Returns, and (4) Bank Statements will most likely be crucial to your forensic accounting expert in the following types of cases: Economic Damages, Fraud Investigation, Business Valuation, Bankruptcy & Insolvency, Intellectual Property (IP) Litigation, Real Estate Litigation, Construction Litigation, Alter Ego, Fraudulent Transfers, Employment Litigation, Business Interruption, Personal Injury, Accounting Malpractice, and Partnership / Shareholder Disputes.</p>
    `,
    author: 'Brandon Engel, CPA, CFE, ABV',
    authorRole: 'Partner & Senior Forensic Accountant',
    authorBio: 'Brandon Engel is a Certified Public Accountant and Certified Fraud Examiner With  30+ years of experience in forensic accounting and fraud investigation. As a partner at Engel & Engel LLP, Brandon has testified in hundreds of cases and helped secure substantial judgments for clients in complex litigation matters.',
    publishDate: '2024-06-24T09:00:00-08:00',
    modifiedDate: '2024-06-24T09:00:00-08:00',
    readTime: '5 min read',
    wordCount: 1200,
    category: 'Document Discovery',
    tags: ['#LitigationDocuments', '#Discovery', '#ForensicAccounting', '#DamagesExperts', '#BigLaw', '#TrialReady'],
    image: '/images/blog/documents-forensic-accountants-need-1.avif',
    imageAlt: 'Key documents that forensic accounting experts need for discovery and analysis'
  }
}

type Props = {
  params: { slug: string }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: 'Post Not Found | Engel & Engel Blog',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} | Engel & Engel Blog`,
    description: post.description,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author }],
    creator: post.author,
    publisher: 'Engel & Engel Forensic Accounting',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://engelandengel.com'),
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${params.slug}`,
      siteName: 'Engel & Engel Forensic Accounting',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.publishDate,
      modifiedTime: post.modifiedDate,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
      creator: '@engelandengel',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `https://engelandengel.com${post.image}`,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole,
      description: post.authorBio,
      worksFor: {
        '@type': 'Organization',
        name: 'Engel & Engel Forensic Accounting'
      }
    },
    publisher: {
      '@type': 'Organization',
      name: 'Engel & Engel Forensic Accounting',
      logo: {
        '@type': 'ImageObject',
        url: 'https://engelandengel.com/images/logo-accountants-white-font.png',
        width: 200,
        height: 60
      }
    },
    datePublished: post.publishDate,
    dateModified: post.modifiedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://engelandengel.com/blog/${params.slug}`
    },
    wordCount: post.wordCount,
    keywords: post.tags.join(', '),
    articleSection: post.category,
    about: post.category,
    inLanguage: 'en-US'
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      <main>
        <Header />

        {/* Hero Banner with Full Image - Extends Behind Header */}
        <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          </div>

          <div className="relative z-10 h-full flex items-end">
            <div className="container mx-auto px-6 pb-16">
              <div className="max-w-4xl mx-auto">
                {/* Breadcrumb Navigation - Positioned over image */}
                <nav aria-label="Breadcrumb" className="mb-8 hidden">
                  <ol className="flex items-center space-x-2 text-sm text-white/80">
                    <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                    <li className="text-white/60">/</li>
                    <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                    <li className="text-white/60">/</li>
                    <li className="text-white font-medium">{post.category}</li>
                  </ol>
                </nav>

                <div className="mb-4">
                  <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase bg-[#D4AF37] text-primary-950 px-3 py-1">
                    {post.category}
                  </span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {post.title}
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl">
                  {post.description}
                </p>
                <div className="flex flex-wrap items-center gap-6 text-white/90">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium text-white">{post.author}</div>
                      <div className="text-sm text-white/70">{post.authorRole}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white/80">
                    <span>{new Date(post.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag, index) => (
                  <span key={index} className="text-[10px] font-bold tracking-wider uppercase bg-slate-50 text-slate-500 px-3 py-1.5 border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-ul:my-4 prose-ol:my-4 prose-li:my-1"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

            </div>
          </div>
        </article>

        {/* Related Articles Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary-950 mb-4">Continue Reading</h2>
                <p className="text-xl text-gray-600">
                  Explore more expert insights on forensic accounting and litigation support
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(blogPosts)
                  .filter(([slug]) => slug !== params.slug)
                  .slice(0, 3)
                  .map(([slug, relatedPost]) => (
                    <div key={slug} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.imageAlt}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="text-[10px] font-bold tracking-[0.3em] uppercase bg-[#D4AF37] text-primary-950 px-3 py-1">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 leading-tight">
                          <Link href={`/blog/${slug}`} className="text-primary-950 hover:text-[#0f3574] transition-colors tracking-tight">
                            {relatedPost.title}
                          </Link>
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {relatedPost.description.length > 120
                            ? `${relatedPost.description.substring(0, 120)}...`
                            : relatedPost.description}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {relatedPost.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="text-[9px] font-bold tracking-wider uppercase bg-slate-50 text-slate-400 px-2 py-0.5 border border-slate-100">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500">
                            <div className="font-medium">{relatedPost.author}</div>
                            <div>{relatedPost.readTime}</div>
                          </div>
                          <Link href={`/blog/${slug}`} className="group">
                            <span className="flex items-center gap-2 text-[#D4AF37] font-bold text-xs group-hover:gap-4 transition-all duration-300">
                              Read
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* View All Articles Button */}
              <div className="text-center mt-12">
                <Link href="/blog">
                  <Button as="span" className="bg-primary-950 hover:bg-black text-white" size="lg">
                    View All Articles
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary-950 text-white p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">Need Expert Forensic Accounting Services?</h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Contact Engel & Engel LLP for professional forensic accounting, fraud investigation,
                  and expert witness testimony services. Over 30+ years of experience with hundreds of successful cases.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button as="span" className="bg-white text-primary-950 hover:bg-blue-50" size="lg">
                      Get Free Consultation
                    </Button>
                  </Link>
                  <Link href="/blog">
                    <Button as="span" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-950" size="lg">
                      Read More Articles
                    </Button>
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Call:</span>
                      <span>(310) 277-2220</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Email:</span>
                      <span>info@engelandengel.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
