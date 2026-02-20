import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Engel & Engel | Los Angeles Forensic Accounting | (310) 277-2220',
  description: 'Contact Engel & Engel forensic accounting experts in Los Angeles. Call (310) 277-2220 for free consultation. Located at 350 S Grand Avenue, Suite 3160.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
