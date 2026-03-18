import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileStickyBar from '@/components/MobileStickyBar'

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
  title: 'Maldonado Winz Immobilien — Premium Immobilienmakler Essen',
  description:
    'Boutique-Makler für hochwertige Wohnimmobilien in Essen. Diskrete Vermarktung, tiefgreifende Beratung, maximaler Verkaufserlös. Jetzt Immobilie kostenlos bewerten.',
  keywords: [
    'Immobilienmakler Essen', 'Premium Immobilien', 'Immobilie verkaufen Essen',
    'Immobilienbewertung', 'Off-Market Immobilien', 'Maldonado Winz',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  )
}
