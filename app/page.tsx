'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import TrustSection from '@/components/TrustSection'
import Services from '@/components/Services'
import FeaturedListings from '@/components/FeaturedListings'
import AboutUs from '@/components/AboutUs'
import Testimonials from '@/components/Testimonials'
import MarketSection from '@/components/MarketSection'
import FAQ from '@/components/FAQ'
import ClosingCTA from '@/components/ClosingCTA'
import ContactForm from '@/components/ContactForm'
import ImmobilienbewertungWizard from '@/components/ImmobilienbewertungWizard'

export default function HomePage() {
  const [wizardOpen, setWizardOpen] = useState(false)

  useEffect(() => {
    const handler = () => setWizardOpen(true)
    document.addEventListener('open-bewertung-wizard', handler)
    return () => document.removeEventListener('open-bewertung-wizard', handler)
  }, [])

  return (
    <>
      {/* 1. Hero – Claim, 2 CTAs, Trust-Bar */}
      <Hero onBewertungClick={() => setWizardOpen(true)} />

      {/* 2. Warum Maldonado Winz – 4 Markenversprechen */}
      <TrustSection />

      {/* 3. Leistungen – Verkaufen, Vermieten, Bewertung, Suchkunden */}
      <Services onBewertungClick={() => setWizardOpen(true)} />

      {/* 4. Aktuelle Angebote – 3 Premium-Objekte + Off-Market-Teaser */}
      <FeaturedListings />

      {/* 5. Über uns – Philosophie & Team */}
      <AboutUs />

      {/* 6. Kundenstimmen – 4,9/5,0 Rating + 3 Testimonials */}
      <Testimonials />

      {/* 7. Markt & Region – Bewertungs-CTA */}
      <MarketSection onBewertungClick={() => setWizardOpen(true)} />

      {/* 8. FAQ – 7 Fragen & Antworten */}
      <FAQ />

      {/* 9. Closing CTA – Persönliche Einladung */}
      <ClosingCTA onBewertungClick={() => setWizardOpen(true)} />

      {/* 10. Kontaktformular */}
      <ContactForm />

      {/* Immobilienbewertungs-Wizard */}
      <ImmobilienbewertungWizard open={wizardOpen} onClose={() => setWizardOpen(false)} />
    </>
  )
}
