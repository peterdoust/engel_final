import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Business Interruption Expert Witness | Forensic Accountant Los Angeles',
    description: 'Forensic accounting expertise in evaluating business interruption claims, lost profits analysis, and insurance claims for both plaintiffs and defendants.',
    openGraph: {
        title: 'Business Interruption Expert Witness | Forensic Accountant',
        description: 'Expert analysis and evaluation of business interruption claims in a wide variety of industries. Court-tested testimony.',
        url: 'https://engelandengel.com/practice-areas/business-interruption',
        siteName: 'Engel & Engel LLP',
        images: [{
            url: 'https://engelandengel.com/images/og-business-interruption.jpg',
            width: 1200,
            height: 630,
            alt: 'Business Interruption Forensic Accounting - Los Angeles',
        }],
        locale: 'en_US',
        type: 'website',
    },
}

export default function BusinessInterruptionLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
