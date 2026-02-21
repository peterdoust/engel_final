import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Personal Injury Economic Damages Expert | Forensic Accountant Los Angeles',
    description: 'Forensic accounting expertise in personal injury economic damages, lost earnings, and life care cost analysis for both plaintiffs and defendants.',
    openGraph: {
        title: 'Personal Injury Economic Damages Expert | Forensic Accountant',
        description: 'Expert analysis and calculation of economic damages in personal injury cases. Over 1,000 calculations performed.',
        url: 'https://engelandengel.com/practice-areas/personal-injury',
        siteName: 'Engel & Engel LLP',
        images: [{
            url: 'https://engelandengel.com/images/og-personal-injury.jpg',
            width: 1200,
            height: 630,
            alt: 'Personal Injury Forensic Accounting - Los Angeles',
        }],
        locale: 'en_US',
        type: 'website',
    },
}

export default function PersonalInjuryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
