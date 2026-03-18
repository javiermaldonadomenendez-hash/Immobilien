'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    quote: 'Herr Maldonado hat unsere Immobilie in Bredeney diskret, professionell und deutlich über dem von uns erhofften Preis verkauft. Die Beratung war zu jeder Zeit transparent — keine leeren Versprechen, nur verlässliche Arbeit.',
    author: 'Dr. H. & A. Bauer',
    role: 'Verkäufer · Bredeney',
    rating: 5,
    index: '01',
  },
  {
    quote: 'Wir haben Herrn Winz mit einem Suchauftrag beauftragt und innerhalb weniger Wochen unser Traumhaus über ein Off-Market-Angebot gefunden. Der Zugang zu Objekten, die nie inseriert werden, ist Gold wert.',
    author: 'Familie M. Schreiber',
    role: 'Käufer · Rüttenscheid',
    rating: 5,
    index: '02',
  },
  {
    quote: 'Die Wertermittlung für unser Portfolio war fundiert, nachvollziehbar und lieferte genau die Grundlage, die wir für unsere Investitionsentscheidung benötigten. Ein Makler, der denkt wie ein Unternehmer.',
    author: 'W. Steinmetz',
    role: 'Investor · Essen',
    rating: 5,
    index: '03',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-brown border-t border-brown-800 overflow-hidden" ref={ref}>

      {/* ── Header ──────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 py-16 border-b border-brown-800">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-taupe" />
              <p className="label text-taupe">Was unsere Kunden sagen</p>
            </div>
            <h2 className="display-lg text-sand">Kundenstimmen</h2>
          </motion.div>

          {/* Rating summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col items-start lg:items-end gap-1"
          >
            <div className="flex items-center gap-2">
              <span className="font-display text-4xl font-light text-sand">4,9</span>
              <span className="font-display text-2xl font-light text-sand/30">/ 5,0</span>
            </div>
            <div className="flex gap-1 my-1">
              {Array.from({ length: 5 }).map((_, j) => (
                <span key={j} className="text-taupe text-sm">★</span>
              ))}
            </div>
            <p className="label text-sand/40">aus 84 Google-Bewertungen</p>
          </motion.div>
        </div>
      </div>

      {/* ── Cards ──────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-brown-800">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="py-12 px-6 lg:px-10 group hover:bg-brown-800 transition-colors duration-300"
            >
              {/* Index */}
              <p className="label text-brown-600 mb-8">{t.index}</p>

              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-taupe text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-sand/65 text-[15px] leading-relaxed mb-10
                             group-hover:text-sand/80 transition-colors duration-300">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px bg-brown-800 group-hover:bg-taupe/30 mb-6 transition-colors duration-300" />

              {/* Author */}
              <p className="font-sans text-[15px] text-sand font-medium">{t.author}</p>
              <p className="label text-sand/30 mt-1">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Bottom ticker ──────────────────── */}
      <div className="border-t border-brown-800 overflow-hidden py-4">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex gap-16 whitespace-nowrap w-max"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="label text-brown-600 flex items-center gap-16">
              Verkaufen · Vermieten · Bewerten
              <span className="text-taupe/30">·</span>
              Maldonado Winz Immobilien
              <span className="text-taupe/30">·</span>
              Essen
              <span className="text-taupe/30">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
