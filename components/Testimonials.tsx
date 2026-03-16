'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    quote:
      'Dank Maldonado-Winz haben wir unsere Villa deutlich über dem Marktwert verkauft. Die Diskretion und Professionalität des Teams ist beispiellos.',
    author: 'Dr. Heinrich Bauer',
    role: 'Verkäufer, Bogenhausen',
    image: 'https://picsum.photos/seed/person1/100/100',
    rating: 5,
  },
  {
    quote:
      'In weniger als drei Wochen haben sie uns die perfekte Mietwohnung in Schwabing gefunden. Persönliche Betreuung auf höchstem Niveau.',
    author: 'Sarah & Thomas Klein',
    role: 'Mieter, Schwabing',
    image: 'https://picsum.photos/seed/person2/100/100',
    rating: 5,
  },
  {
    quote:
      'Die Bewertung unseres Portfolios war präzise, fundiert und lieferte uns genau die Grundlage, die wir für unsere Investitionsentscheidungen brauchten.',
    author: 'Wolfgang Steinmetz',
    role: 'Investor, München',
    image: 'https://picsum.photos/seed/person3/100/100',
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 lg:py-36 bg-offwhite relative overflow-hidden">
      {/* Background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif
                      text-[12rem] lg:text-[18rem] font-bold text-charcoal/3 whitespace-nowrap
                      pointer-events-none select-none leading-none">
        Vertrauen
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="section-label">Was unsere Kunden sagen</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="section-title-dark">
            Stimmen unserer{' '}
            <span className="text-gold italic">Kunden</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-8 border border-warm-light hover:border-gold/30
                         transition-all duration-500 group relative"
            >
              {/* Gold accent top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gold/0
                              group-hover:bg-gold/60 transition-all duration-500" />

              {/* Quote icon */}
              <Quote size={32} className="text-gold/25 mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-gold text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal/65 font-sans text-sm leading-relaxed mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-warm-light">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={t.image} alt={t.author} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-charcoal">{t.author}</p>
                  <p className="font-sans text-xs text-warm-gray">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
