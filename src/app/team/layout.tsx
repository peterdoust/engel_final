import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Team of Forensic Accountants | Engel & Engel LLP | Los Angeles',
    description: 'Meet our expert team of forensic accounting professionals: Jason A. Engel (CPA, CFE, CIRA, CVA, MAFF, ABV), Brandon J. Engel (CPA, CFE, ABV), and Douglas H. Engel (CPA, MBA). 35+ years of experience in Los Angeles.',
}

export default function TeamLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
