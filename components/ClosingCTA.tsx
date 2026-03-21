'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'

export default function ClosingCTA({ onBewertungClick }: { onBewertungClick?: () => void }) {
  return (
    <section
      className="bg-brown py-24 lg:py-32"
      aria-labelledby="closing-cta-heading"
    >
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label text-taupe mb-6"
          >
            Ihr nächster Schritt
          </motion.p>

          {/* Headline */}
          <motion.h2
            id="closing-cta-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] text-sand mb-6"
          >
            Lernen Sie uns<br />persönlich kennen.
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-sand/60 text-base leading-relaxed mb-10 max-w-lg mx-auto"
          >
            Ein kostenloses Erstgespräch — ohne Verpflichtung.
            Wir hören zu, verstehen Ihre Situation und zeigen Ihnen,
            was realistisch möglich ist.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={onBewertungClick}
              className="btn-gold group"
              aria-label="Kostenloses Erstgespräch buchen"
            >
              Kostenloses Erstgespräch
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </button>
            <a
              href="tel:+4920112345678"
              className="btn-outline-light group"
              aria-label="Direkt anrufen: +49 201 1234 5678"
            >
              <Phone size={13} aria-hidden="true" />
              Direkt anrufen
            </a>
          </motion.div>

          {/* Mini-Trust */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 font-sans text-[11px] text-sand/25 uppercase tracking-widest"
          >
            4,9/5,0 · 84 Google-Bewertungen · Kostenlos & unverbindlich
          </motion.p>
        </div>
      </div>
    </section>
  )
}
