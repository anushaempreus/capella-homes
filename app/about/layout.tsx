import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — Three Generations of Canberra Builders',
  description: 'Capella Homes is a family building business spanning three generations, with over 20 years of experience delivering custom homes, renovations, and extensions across Canberra.',
  alternates: { canonical: '/about' },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
