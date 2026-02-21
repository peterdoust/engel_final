import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Fraudulent Transfers Expert Witness | Forensic Accountant Los Angeles',
    description: 'Forensic investigations and financial analyses of fraudulent transfers in bankruptcy and business litigation. Expert witness testimony in Los Angeles.',
    openGraph: {
        title: 'Fraudulent Transfers Expert Witness | Forensic Accountant',
        description: 'Expert analysis of fraudulent transfers, solvency, and reasonably equivalent value. Court-tested testimony.',
        url: 'https://engelandengel.com/practice-areas/fraudulent-transfers',
        siteName: 'Engel & Engel LLP',
        images: [{
            url: 'https://engelandengel.com/images/og-fraudulent-transfers.jpg',
            width: 1200,
            height: 630,
            alt: 'Fraudulent Transfers Forensic Accounting - Los Angeles',
        }],
        locale: 'en_US',
        type: 'website',
    },
}

export default function FraudulentTransfersLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
