import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Partnership / Shareholder Disputes Expert Witness | Forensic Accountant Los Angeles',
    description: 'Forensic accounting expertise in corporate partnership disputes, including dissolution accounting, shareholder valuation, and investigations under California Corporations Code Section 2000.',
    openGraph: {
        title: 'Partnership / Shareholder Disputes Expert Witness | Forensic Accountant',
        description: 'Expert analysis and investigation of partnership and shareholder disputes. Involved in over 100 cases including Section 2000 dissolutions.',
        url: 'https://engelandengel.com/practice-areas/partnership-disputes',
        siteName: 'Engel & Engel LLP',
        images: [{
            url: 'https://engelandengel.com/images/og-partnership-disputes.jpg',
            width: 1200,
            height: 630,
            alt: 'Partnership / Shareholder Disputes Forensic Accounting - Los Angeles',
        }],
        locale: 'en_US',
        type: 'website',
    },
}

export default function PartnershipDisputesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
