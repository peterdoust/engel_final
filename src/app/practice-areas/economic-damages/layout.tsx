import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Economic Damages Accountant - Forensic Accounting Los Angeles',
    description: 'Business litigation often requires a forensic analysis of economic damages. Engel & Engel has conducted over 1,000 economic damage analyses for both plaintiffs and defendants in a wide variety of industries.',
    openGraph: {
        title: 'Economic Damages Accountant - Forensic Accounting Los Angeles',
        description: 'Business litigation often requires a forensic analysis of economic damages. Over 1,000 analyses conducted.',
        url: 'https://engelandengel.com/practice-areas/economic-damages',
        siteName: 'Engel & Engel LLP',
        images: [{
            url: 'https://engelandengel.com/images/og-economic-damages.jpg',
            width: 1200,
            height: 630,
            alt: 'Economic Damages Forensic Accounting - Los Angeles',
        }],
        locale: 'en_US',
        type: 'website',
    },
}

export default function EconomicDamagesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
