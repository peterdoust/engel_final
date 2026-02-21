import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Employment Litigation Expert Witness | Forensic Accountant Los Angeles',
    description: 'Forensic accounting expertise in employment litigation, wage & hour claims, and calculating economic damages for both plaintiffs and defendants.',
    openGraph: {
        title: 'Employment Litigation Expert Witness | Forensic Accountant',
        description: 'Expert analysis and calculation of economic damages in employment litigation matters. Court-tested testimony.',
        url: 'https://engelandengel.com/practice-areas/employment-litigation',
        siteName: 'Engel & Engel LLP',
        images: [{
            url: 'https://engelandengel.com/images/og-employment-litigation.jpg',
            width: 1200,
            height: 630,
            alt: 'Employment Litigation Forensic Accounting - Los Angeles',
        }],
        locale: 'en_US',
        type: 'website',
    },
}

export default function EmploymentLitigationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
