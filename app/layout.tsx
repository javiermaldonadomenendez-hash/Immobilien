import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileStickyBar from '@/components/MobileStickyBar'
import { JsonLd, organizationSchema } from '@/components/JsonLd'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://maldonado-winz.de'),
  title: {
    default: 'Immobilienmakler Essen | Maldonado & Winz Immobilien',
    template: '%s | Maldonado & Winz Immobilien',
  },
  description:
    'Ihr Boutique-Immobilienmakler in Essen. Wir verkaufen und vermieten hochwertige Wohnimmobilien im Ruhrgebiet — diskret, kompetent und auf Augenhöhe. Jetzt kostenlose Immobilienbewertung anfragen.',
  keywords: [
    'Immobilienmakler Essen',
    'Immobilie verkaufen Essen',
    'Immobilienbewertung Essen',
    'Premium Immobilien Ruhrgebiet',
    'Boutique Makler Essen',
    'Maldonado Winz',
  ],
  authors: [{ name: 'Maldonado & Winz Immobilien' }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Maldonado & Winz Immobilien',
    title: 'Immobilienmakler Essen | Maldonado & Winz',
    description:
      'Boutique-Makler für hochwertige Wohnimmobilien in Essen. Diskret. Kompetent. Auf Augenhöhe.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Maldonado & Winz Immobilien' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Immobilienmakler Essen | Maldonado & Winz',
    description: 'Boutique-Makler für hochwertige Wohnimmobilien in Essen.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://maldonado-winz.de' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        {/* Accessibility: Skip-Link */}
        <a href="#main-content" className="skip-link">
          Zum Hauptinhalt springen
        </a>

        <JsonLd data={organizationSchema} />

        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  )
}
