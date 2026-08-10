import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services — New Construction, Renovation & Extension',
  description: 'From new custom builds to renovations and extensions, Capella Homes delivers uniquely crafted construction solutions across Canberra and the surrounds.',
  alternates: { canonical: '/services' },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
