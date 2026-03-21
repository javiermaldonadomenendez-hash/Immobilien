'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Hero from '@/components/Hero'
import SocialProofStrip from '@/components/SocialProofStrip'
import Services from '@/components/Services'
import FeaturedListings from '@/components/FeaturedListings'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import ClosingCTA from '@/components/ClosingCTA'
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
      {/* 1. Hero — Headline-Formel, 2 CTAs, CTA above the fold */}
      <Hero onBewertungClick={() => setWizardOpen(true)} />

      {/* 2. Social Proof Strip — direkt unter Hero, vor dem Scrollen sichtbar */}
      <SocialProofStrip />

      {/* 3. Leistungen-Teaser — 4 Karten mit CTA zu /leistungen */}
      <Services onBewertungClick={() => setWizardOpen(true)} />

      {/* 4. Aktuelle Angebote */}
      <FeaturedListings />

      {/* 5. Über uns Teaser — nutzen-zentriert, You-Fokus (web-copywriting Skill) */}
      <AboutTeaser />

      {/* 6. Testimonials — Social Proof ausführlich */}
      <Testimonials />

      {/* 7. FAQ — mit FAQPage JSON-LD Schema */}
      <FAQ />

      {/* 8. Closing CTA — spezifisch: "Kostenloses Erstgespräch" */}
      <ClosingCTA onBewertungClick={() => setWizardOpen(true)} />

      {/* Modal: Immobilienbewertungs-Wizard */}
      <ImmobilienbewertungWizard open={wizardOpen} onClose={() => setWizardOpen(false)} />
    </>
  )
}

function AboutTeaser() {
  return (
    <section
      className="bg-grey-50 py-20 lg:py-28 border-y border-grey-200"
      aria-labelledby="about-teaser-heading"
    >
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="label-brown mb-6">Über uns</p>
            {/* Headline nach web-copywriting Skill: Nutzen-zentriert, nicht ich-zentriert */}
            <h2 id="about-teaser-heading" className="display-sm text-brown mb-6">
              Ihr Immobilienmakler<br />
              in Essen — auf Augenhöhe.
            </h2>
            <p className="font-sans text-grey-600 leading-relaxed mb-4">
              Hinter Maldonado & Winz steckt ein einfacher Gedanke: Eigentümer und Käufer verdienen
              eine ehrliche, persönliche Beratung — ohne Verkaufsdruck, ohne Überraschungen.
            </p>
            <p className="font-sans text-grey-600 leading-relaxed mb-8">
              Seit über 15 Jahren vermitteln wir hochwertige Wohnimmobilien im Ruhrgebiet.
              Nicht als Massenmakler, sondern als Boutique-Büro mit echtem Fokus auf Ihre Ziele.
            </p>
            <Link href="/ueber-uns" className="btn-outline group">
              Unser Team kennenlernen
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </Link>
          </motion.div>

          {/* Werte — 4 Kernwerte (brand-guidelines Skill) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { title: 'Transparenz',    desc: 'Klare Kommunikation. Keine versteckten Kosten.' },
              { title: 'Verbindlichkeit', desc: 'Was wir versprechen, halten wir.' },
              { title: 'Ehrlichkeit',    desc: 'Auch wenn die Wahrheit unbequem ist.' },
              { title: 'Diskretion',     desc: 'Ihre Privatsphäre ist unser Standard.' },
            ].map((v) => (
              <div key={v.title} className="bg-white border border-grey-200 p-6">
                <div className="w-6 h-0.5 bg-taupe mb-4" aria-hidden="true" />
                <h3 className="font-display text-xl font-light text-brown mb-2">{v.title}</h3>
                <p className="font-sans text-sm text-grey-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
