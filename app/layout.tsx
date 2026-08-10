import type { Metadata, Viewport } from 'next'
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

const SITE_URL = 'https://capellahomes.com.au'
const SITE_NAME = 'Capella Homes'
const DEFAULT_TITLE = 'Capella Homes | Custom Home Builder, Canberra ACT'
const DEFAULT_DESCRIPTION = 'Custom homes, renovations, and extensions in Canberra and surrounds. 20+ years of experience across three generations.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | Capella Homes',
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    'custom home builder Canberra',
    'home renovations Canberra',
    'home extensions Canberra',
    'Capella Homes',
    'Canberra builder',
    'ACT home builder',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: 'en_AU',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Capella Homes — Canberra custom home builder' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-white.png`,
  image: `${SITE_URL}/og.jpg`,
  telephone: '+61419989799',
  email: 'info@capellahomes.com.au',
  foundingDate: '2003',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Canberra',
    addressRegion: 'ACT',
    addressCountry: 'AU',
  },
  areaServed: 'Canberra ACT',
  sameAs: [
    'https://www.facebook.com/profile.php?id=61550950030102',
    'https://www.instagram.com/capellahomesact/',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${titillium.variable} ${raleway.variable}`}>
      <body style={{ fontFamily: 'var(--font-sans)' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <ScrollProgress />
        {children}
        <BackToTop />
      </body>
    </html>
  )
}