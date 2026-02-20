import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forensic Accounting Resources | Expert Guides & Tools | Engel & Engel',
  description: 'Free forensic accounting resources, guides, calculators, and expert insights for legal professionals. 35+ years of expertise from Los Angeles CPA experts.',
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
