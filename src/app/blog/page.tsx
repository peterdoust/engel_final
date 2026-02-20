import React from 'react'
import Head from 'next/head'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'

// Real blog posts from engelandengel.com integrated with SEO optimization
const featuredPost = {
  id: 1,
  title: 'How Forensic Accountants Uncover Critical Evidence with Operational and Underlying Business Records',
  excerpt: 'Providing your forensic accountant with operational and underlying business records can be just as critical as providing financial statements, and in some matters it can reveal the key piece of evidence that shifts the direction of a case.',
  author: 'Brandon Engel, CPA, CFE',
  publishDate: '2024-09-11',
  readTime: '7 min read',
  category: 'Forensic Accounting',
  slug: 'forensic-accountants-uncover-evidence-operational-business-records',
  image: 'https://engelandengel.com/wp-content/uploads/2025/09/underlying-records-financial-statements.jpg',
  imageAlt: 'Underlying records in financial statements - forensic accounting analysis',
  tags: ['#ForensicAccounting', '#BusinessRecords', '#LegalEvidence', '#ExpertWitness', '#FinancialAnalysis', '#Litigation'],
  url: 'https://engelandengel.com/how-forensic-accountants-uncover-critical-evidence-with-operational-and-underlying-business-records/'
}

const blogPosts = [
  {
    id: 2,
    title: 'What To Look For When Retaining a Forensic Accountant',
    excerpt: 'When litigation hinges on the clarity of financial facts, a skilled forensic accountant can be the difference between prevailing and watching your case unravel.',
    author: 'Brandon Engel, CPA, CFE',
    publishDate: '2024-07-29',
    readTime: '6 min read',
    category: 'Expert Selection',
    slug: 'what-to-look-for-when-retaining-forensic-accountant',
    image: 'https://engelandengel.com/wp-content/uploads/2025/07/retaining-forensic-accountant.jpg',
    imageAlt: 'Professional consultation for retaining a forensic accountant - expert selection process',
    tags: ['#ForensicAccountant', '#ExpertWitness', '#LegalConsultation', '#ExpertSelection', '#Litigation', '#BigLaw'],
    url: 'https://engelandengel.com/what-to-look-for-when-retaining-a-forensic-accountant/'
  },
  {
    id: 3,
    title: 'The Most Critical Action Steps for Preserving Evidence after an Embezzlement',
    excerpt: 'Preserving accounting evidence after an embezzlement is crucial for pursuing the perpetrator of the fraud in civil and criminal courts.',
    author: 'Brandon Engel, CPA, CFE',
    publishDate: '2024-07-14',
    readTime: '8 min read',
    category: 'Fraud Investigation',
    slug: 'critical-action-steps-preserving-evidence-after-embezzlement',
    image: 'https://engelandengel.com/wp-content/uploads/2025/07/critical-actions-evidence-embezzlement.jpg',
    imageAlt: 'Critical action steps to preserve evidence in an embezzlement case',
    tags: ['#Embezzlement', '#FraudInvestigation', '#EvidencePreservation', '#CertifiedFraudExaminer', '#ForensicAccounting', '#TrialReady'],
    url: 'https://engelandengel.com/the-most-critical-action-steps-for-preserving-evidence-after-an-embezzlement/'
  },
  {
    id: 4,
    title: '4 Key Documents Most Forensic Accounting Experts Need Before Discovery Closes',
    excerpt: 'Whether your forensic accountant is retained to calculate economic damages, conduct a fraud investigation, or perform a business valuation, these four financial documents can almost always serve as the foundation.',
    author: 'Brandon Engel, CPA, CFE',
    publishDate: '2024-06-24',
    readTime: '5 min read',
    category: 'Document Discovery',
    slug: 'key-documents-forensic-accounting-experts-need-discovery',
    image: 'https://engelandengel.com/wp-content/uploads/2025/06/documents-forensic-accountants-need-1.jpg',
    imageAlt: 'Key documents that forensic accounting experts need for discovery and analysis',
    tags: ['#LitigationDocuments', '#Discovery', '#ForensicAccounting', '#DamagesExperts', '#BigLaw', '#TrialReady'],
    url: 'https://engelandengel.com/4-key-documents-most-forensic-accounting-experts-need-before-discovery-closes/'
  }
]

const categories = [
  'All Posts',
  'Forensic Accounting',
  'Expert Selection',
  'Fraud Investigation',
  'Document Discovery'
]

export default function BlogPage() {
  // Enhanced SEO structured data for search engines
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "The Forensic Accounting Perspective",
    "description": "Expert forensic accounting insights, fraud investigation techniques, and litigation support strategies from certified professionals at Engel & Engel LLP.",
    "url": "https://engelandengel.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Engel & Engel LLP",
      "url": "https://engelandengel.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://engelandengel.com/wp-content/uploads/2022/02/forensic-accounting-los-angeles-scaled.jpg"
      }
    },
    "blogPost": [featuredPost, ...blogPosts].map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "datePublished": post.publishDate,
      "url": post.url || `https://engelandengel.com/blog/${post.slug}`,
      "image": post.image,
      "keywords": post.tags?.join(', ').replace(/#/g, '') || "forensic accounting, expert witness, litigation support"
    }))
  }

  // Blog page with professional images from engelandengel.com
  return (
    <>
      <Head>
        <title>The Forensic Accounting Perspective | Expert Insights & Analysis | Engel & Engel LLP</title>
        <meta name="description" content="Expert forensic accounting insights, fraud investigation techniques, and litigation support strategies from certified professionals. Stay informed with the latest industry analysis and case studies." />
        <meta name="keywords" content="forensic accounting, fraud investigation, expert witness, litigation support, financial analysis, embezzlement, business valuation, economic damages, big law, trial ready, certified fraud examiner" />
        <meta name="author" content="Engel & Engel LLP" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://engelandengel.com/blog" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://engelandengel.com/blog" />
        <meta property="og:title" content="The Forensic Accounting Perspective | Expert Insights & Analysis" />
        <meta property="og:description" content="Expert forensic accounting insights, fraud investigation techniques, and litigation support strategies from certified professionals." />
        <meta property="og:image" content="https://engelandengel.com/wp-content/uploads/2022/02/forensic-accounting-los-angeles-scaled.jpg" />
        <meta property="og:site_name" content="Engel & Engel LLP" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://engelandengel.com/blog" />
        <meta property="twitter:title" content="The Forensic Accounting Perspective | Expert Insights & Analysis" />
        <meta property="twitter:description" content="Expert forensic accounting insights, fraud investigation techniques, and litigation support strategies from certified professionals." />
        <meta property="twitter:image" content="https://engelandengel.com/wp-content/uploads/2022/02/forensic-accounting-los-angeles-scaled.jpg" />

        {/* Additional SEO */}
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogStructuredData)
          }}
        />
      </Head>

      <Header />

      {/* Hero Section - Extends Behind Header */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white pt-20 lg:pt-24 pb-20">
        <div className="absolute inset-0">
          <Image
            src="https://engelandengel.com/wp-content/uploads/2022/02/forensic-accounting-los-angeles-scaled.jpg"
            alt="Forensic accounting professionals at work"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb Navigation - Positioned over image */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center justify-center space-x-2 text-sm text-white/80">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/60">/</li>
                <li className="text-white font-medium">The Forensic Accounting Perspective</li>
              </ol>
            </nav>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              The Forensic Accounting Perspective
            </h1>
            <p className="text-xl lg:text-2xl mb-4 text-blue-100">
              Expert insights, case studies, and professional guidance from leading forensic accountants
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <span className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm">#ForensicAccounting</span>
              <span className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm">#ExpertWitness</span>
              <span className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm">#BigLaw</span>
              <span className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm">#TrialReady</span>
              <span className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm">#CertifiedFraudExaminer</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-900 hover:bg-blue-50">
                Subscribe to Newsletter
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Browse Categories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Article</h2>
            <Card className="overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.imageAlt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-semibold mb-1">{featuredPost.category}</div>
                    <div className="text-xs opacity-90">{featuredPost.readTime}</div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm text-gray-500">
                      <div className="font-medium">{featuredPost.author}</div>
                      <div>{featuredPost.publishDate} • {featuredPost.readTime}</div>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Read Full Article
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'All Posts' ? 'primary' : 'outline'}
                  className={category === 'All Posts' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="block">
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 text-white text-sm">
                        {post.readTime}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl leading-tight hover:text-blue-600 transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <CardDescription className="text-gray-600 mb-3 leading-relaxed flex-1">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="text-sm text-gray-500">
                          <div className="font-medium">{post.author}</div>
                          <div>{post.publishDate} • {post.readTime}</div>
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="sm">
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 text-gray-300">
              Get the latest insights on forensic accounting, fraud investigation, and expert witness testimony
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Let Our Numbers Do The Talking */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Parallax Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Let Our Numbers
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Do The Talking
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Three decades of excellence in forensic accounting with a proven track record of success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                number: '30+',
                label: 'Years of Forensic Accounting Excellence',
                subtitle: 'Established 1994'
              },
              {
                number: '500+',
                label: 'Complex Cases Successfully Resolved',
                subtitle: 'Nationwide Experience'
              },
              {
                number: '20',
                label: 'Peer-Reviewed Research Publications',
                subtitle: 'Industry Thought Leadership'
              },
              {
                number: '6',
                label: 'Professional Certifications',
                subtitle: 'CPA, CFE, CIRA, CVA, MAFF, ABV'
              },
              {
                number: 'Big 4',
                label: 'Forensic Accounting Background',
                subtitle: 'Elite Training & Experience'
              },
              {
                number: '$2.3B',
                label: 'Record Jury Award Achievement',
                subtitle: 'Proven Court Success'
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-blue-100 mb-2 leading-tight">
                    {stat.label}
                  </div>
                  <div className="text-sm text-blue-200/80 leading-relaxed">
                    {stat.subtitle}
                  </div>
                </div>

                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-blue-100 text-lg mb-6">
              Ready to experience the difference that expertise makes?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(310) 277-2220">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Call (310) 277-2220
                </button>
              </a>
              <Link href="/contact">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
