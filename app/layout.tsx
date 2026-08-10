import type { Metadata } from 'next'
import { Titillium_Web, Raleway } from 'next/font/google'
import './globals.css'
import ScrollProgress from '../components/ScrollProgress'
import BackToTop from '../components/BackToTop'

const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Capella Homes – Canberra Home Builder',
  description: 'Custom homes, renovations, and extensions in Canberra and surrounds. 20+ years of experience across three generations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${titillium.variable} ${raleway.variable}`}>
      <body style={{ fontFamily: 'var(--font-sans)' }}>
        <ScrollProgress />
        {children}
        <BackToTop />
      </body>
    </html>
  )
}