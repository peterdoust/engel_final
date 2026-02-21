import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Real Estate Litigation Expert Witness | Los Angeles | Engel & Engel LLP',
    description: 'Real estate litigation forensic accounting for developers, brokers, owners, buyers, sellers. $100M+ arbitration award experience. Expert witness testimony in Los Angeles.',
    openGraph: {
        title: 'Real Estate Litigation Expert Witness | Los Angeles',
        description: 'Real estate forensic accounting. $100M+ arbitration experience. Expert witness testimony.',
        url: 'https://engelandengel.com/practice-areas/real-estate-litigation',
        siteName: 'Engel & Engel LLP',
        images: [{
            url: 'https://engelandengel.com/images/og-real-estate-litigation.jpg',
            width: 1200,
            height: 630,
            alt: 'Real Estate Litigation Expert Witness Services - Los Angeles',
        }],
        locale: 'en_US',
        type: 'website',
    },
}

export default function RealEstateLitigationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
