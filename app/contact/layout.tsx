import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — Get in Touch',
  description: 'Get in touch with Capella Homes to discuss your custom home, renovation, or extension project in Canberra. Call 0419 989 799 or send us a message.',
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
