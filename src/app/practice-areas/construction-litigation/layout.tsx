import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Construction Litigation Expert Witness | Los Angeles | Engel & Engel LLP',
    description: 'Construction defect forensic accounting for contractors, developers, owners. Cost overruns, delays, change orders. Expert witness testimony in Los Angeles.',
    openGraph: {
        title: 'Construction Litigation Expert Witness | Los Angeles',
        description: 'Construction defect forensic accounting. Cost overruns, delays, change orders.',
        url: 'https://engelandengel.com/practice-areas/construction-litigation',
        siteName: 'Engel & Engel LLP',
        images: [{
            url: 'https://engelandengel.com/images/og-construction-litigation.jpg',
            width: 1200,
            height: 630,
            alt: 'Construction Litigation Expert Witness Services - Los Angeles',
        }],
        locale: 'en_US',
        type: 'website',
    },
}

export default function ConstructionLitigationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
