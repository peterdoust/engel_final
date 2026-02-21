import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Business Valuation Expert Witness | CVA, ABV | Los Angeles | Engel & Engel LLP',
    description: 'Certified Valuation Analyst (CVA) and Accreditation in Business Valuation (ABV) credentials. 100+ business valuations. Expert witness testimony in Los Angeles.',
    openGraph: {
        title: 'Business Valuation Expert Witness | CVA, ABV | Los Angeles',
        description: 'CVA and ABV credentials. 100+ business valuations. Expert witness testimony.',
        url: 'https://engelandengel.com/practice-areas/business-valuation',
        siteName: 'Engel & Engel LLP',
        images: [{
            url: 'https://engelandengel.com/images/og-business-valuation.jpg',
            width: 1200,
            height: 630,
            alt: 'Business Valuation Expert Witness Services - Los Angeles',
        }],
        locale: 'en_US',
        type: 'website',
    },
}

export default function BusinessValuationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
