import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Accounting Malpractice Expert Witness | Forensic Accountant Los Angeles',
    description: 'Forensic accounting expertise in investigating whether or not financial statements have been prepared in accordance with GAAP and GAAS in malpractice matters.',
    openGraph: {
        title: 'Accounting Malpractice Expert Witness | Forensic Accountant',
        description: 'Expert analysis and evaluation of accounting and auditing standard of care. GAAP and GAAS compliance expertise.',
        url: 'https://engelandengel.com/practice-areas/accounting-malpractice',
        siteName: 'Engel & Engel LLP',
        images: [{
            url: 'https://engelandengel.com/images/og-accounting-malpractice.jpg',
            width: 1200,
            height: 630,
            alt: 'Accounting Malpractice Forensic Accounting - Los Angeles',
        }],
        locale: 'en_US',
        type: 'website',
    },
}

export default function AccountingMalpracticeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
