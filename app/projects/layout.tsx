import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Projects — Recent Builds in Canberra',
  description: "A look at recent Capella Homes projects across Canberra, including Pearce, Charity House, O'Connor, and Garran.",
  alternates: { canonical: '/projects' },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
