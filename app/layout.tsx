import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Maldonado-Winz Immobilien | Premium Immobilienmakler',
  description:
    'Ihr exklusiver Partner für Premium-Immobilien. Wir verkaufen, vermieten und bewerten Ihre Immobilie mit höchster Sorgfalt und Professionalität.',
  keywords: ['Immobilien', 'Makler', 'Premium', 'Luxus', 'Kaufen', 'Mieten', 'Bewertung'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
