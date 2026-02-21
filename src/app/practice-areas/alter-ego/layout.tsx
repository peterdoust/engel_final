import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Alter Ego Expert Witness | Forensic Accountant Los Angeles',
    description: 'Forensic investigations and financial analyses in connection with the courts’ 28 alter ego factors. Expert witness testimony in Los Angeles.',
    openGraph: {
        title: 'Alter Ego Expert Witness | Forensic Accountant',
        description: 'Expert analysis of 28 alter ego factors. Undercapitalization, commingling of funds, and hidden distributions.',
        url: 'https://engelandengel.com/practice-areas/alter-ego',
        siteName: 'Engel & Engel LLP',
        images: [{
            url: 'https://engelandengel.com/images/og-alter-ego.jpg',
            width: 1200,
            height: 630,
            alt: 'Alter Ego Forensic Accounting - Los Angeles',
        }],
        locale: 'en_US',
        type: 'website',
    },
}

export default function AlterEgoLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
