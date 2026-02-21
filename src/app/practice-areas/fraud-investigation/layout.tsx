import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Fraud Investigation - Engel & Engel LLP | Certified Fraud Examiners',
    description: 'Certified Fraud Examiners conducting comprehensive fraud investigations in Los Angeles and California. Expert witness testimony in financial fraud cases.',
    openGraph: {
        title: 'Fraud Investigation Expert Witness | Los Angeles | Engel & Engel LLP',
        description: 'Certified Fraud Examiners. Financial fraud investigations, embezzlement schemes, securities fraud. Expert witness testimony.',
        url: 'https://engelandengel.com/practice-areas/fraud-investigation',
        siteName: 'Engel & Engel LLP',
        images: [{
            url: 'https://engelandengel.com/images/og-fraud-investigation.jpg',
            width: 1200,
            height: 630,
            alt: 'Fraud Investigation Expert Witness Services - Los Angeles',
        }],
        locale: 'en_US',
        type: 'website',
    },
}

export default function FraudInvestigationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
