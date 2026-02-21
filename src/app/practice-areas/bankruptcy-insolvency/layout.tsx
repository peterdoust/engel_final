import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Bankruptcy & Insolvency Expert Witness | CIRA | Los Angeles | Engel & Engel LLP',
    description: 'Certified Insolvency and Restructuring Advisor (CIRA) providing bankruptcy forensic accounting, solvency analysis, fraudulent transfer investigations in Los Angeles.',
    openGraph: {
        title: 'Bankruptcy & Insolvency Expert Witness | CIRA | Los Angeles',
        description: 'CIRA credentials. Bankruptcy fraud investigation, solvency analysis, fraudulent transfers. Expert witness testimony.',
        url: 'https://engelandengel.com/practice-areas/bankruptcy-insolvency',
        siteName: 'Engel & Engel LLP',
        images: [{
            url: 'https://engelandengel.com/images/og-bankruptcy-insolvency.jpg',
            width: 1200,
            height: 630,
            alt: 'Bankruptcy & Insolvency Expert Witness Services - Los Angeles',
        }],
        locale: 'en_US',
        type: 'website',
    },
}

export default function BankruptcyInsolvencyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
