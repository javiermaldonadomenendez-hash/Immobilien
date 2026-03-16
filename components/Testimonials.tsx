'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    quote: 'Wir haben unsere Villa deutlich über Marktwert verkauft. Die Diskretion und Professionalität ist beispiellos.',
    author: 'Dr. H. Bauer',
    role: 'Verkäufer · Bogenhausen',
    index: '001',
  },
  {
    quote: 'In weniger als drei Wochen die perfekte Mietwohnung in Schwabing. Persönliche Betreuung auf höchstem Niveau.',
    author: 'S. & T. Klein',
    role: 'Mieter · Schwabing',
    index: '002',
  },
  {
    quote: 'Die Bewertung unseres Portfolios war präzise und lieferte genau die Grundlage für unsere Investitionsentscheidungen.',
    author: 'W. Steinmetz',
    role: 'Investor · München',
    index: '003',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-ink border-t border-grey-800 overflow-hidden" ref={ref}>

      {/* ── Header ─────────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 border-b border-grey-800
                      flex items-end justify-between">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="label text-grey-600 mb-4">Kundenstimmen</p>
          <h2 className="display-lg text-paper">Vertrauen</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="hidden lg:block label text-grey-600 text-right"
        >
          {testimonials.length} Bewertungen
        </motion.p>
      </div>

      {/* ── Cards ──────────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-grey-800">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="py-14 px-8 lg:px-10 group hover:bg-grey-800 transition-colors duration-300"
            >
              {/* Index */}
              <p className="label text-grey-600 mb-8">{t.index}</p>

              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-paper/30 text-xs group-hover:text-paper/60
                                           transition-colors duration-300">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-grey-400 text-sm leading-relaxed italic mb-10
                             group-hover:text-grey-300 transition-colors duration-300">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px bg-grey-800 group-hover:bg-grey-600 mb-6 transition-colors duration-300" />

              {/* Author */}
              <p className="font-sans text-sm text-paper font-medium">{t.author}</p>
              <p className="label text-grey-600 mt-1">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Bottom ticker ──────────────────────── */}
      <div className="border-t border-grey-800 overflow-hidden py-4">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex gap-16 whitespace-nowrap w-max"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="label text-grey-700 flex items-center gap-16">
              Vermieten · Verkaufen · Bewerten
              <span className="text-grey-800">—</span>
              Maldonado-Winz Immobilien
              <span className="text-grey-800">—</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
