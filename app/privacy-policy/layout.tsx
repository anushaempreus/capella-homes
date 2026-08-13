import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Capella Homes collects, uses, and protects your personal information.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: false, follow: true },
}

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children
}
