import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Engel & Engel - Premier Forensic Accounting Firm in Los Angeles',
    template: '%s | Engel & Engel'
  },
  description: 'Los Angeles\' premier forensic accounting firm with 35+ years of experience in fraud investigation, expert witness testimony, and business valuation. Rapid response, court-proven expertise.',
  keywords: [
    'forensic accountant Los Angeles',
    'fraud investigation',
    'expert witness accounting',
    'business valuation',
    'litigation support',
    'financial fraud detection',
    'Los Angeles CPA',
    'forensic audit'
  ],
  authors: [{ name: 'Engel & Engel' }],
  creator: 'Engel & Engel',
  publisher: 'Engel & Engel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://engelengel.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://engelengel.com',
    title: 'Engel & Engel - Premier Forensic Accounting Firm in Los Angeles',
    description: 'Los Angeles\' premier forensic accounting firm with 35+ years of experience in fraud investigation, expert witness testimony, and business valuation.',
    siteName: 'Engel & Engel',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Engel & Engel Forensic Accounting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engel & Engel - Premier Forensic Accounting Firm in Los Angeles',
    description: 'Los Angeles\' premier forensic accounting firm with 35+ years of experience in fraud investigation, expert witness testimony, and business valuation.',
    images: ['/images/twitter-image.jpg'],
    creator: '@engelengel',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="msapplication-TileColor" content="#1e3a8a" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Engel & Engel",
              "description": "Premier forensic accounting firm specializing in fraud investigation, expert witness testimony, and business valuation services.",
              "url": "https://engelengel.com",
              "telephone": "+1-310-277-2220",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "350 S Grand Avenue, Suite 3160",
                "addressLocality": "Los Angeles",
                "addressRegion": "CA",
                "postalCode": "90071",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "34.0522",
                "longitude": "-118.2437"
              },
              "openingHours": "Mo-Fr 08:00-18:00",
              "priceRange": "$$$$",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "34.0522",
                  "longitude": "-118.2437"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Forensic Accounting Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Fraud Investigation",
                      "description": "Comprehensive fraud detection and investigation services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Expert Witness Testimony",
                      "description": "Court-ready financial testimony and litigation support"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Business Valuation",
                      "description": "Accurate business valuations using industry-standard methodologies"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        
        {/* Analytics Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics 4
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  )
}
