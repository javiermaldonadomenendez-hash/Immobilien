'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const stats = [
  { value: '15+',  label: 'Jahre Erfahrung',        detail: 'im Essener Markt' },
  { value: '500+', label: 'Objekte vermittelt',      detail: 'Verkauf & Vermietung' },
  { value: '4,9',  label: 'Google-Bewertung',        detail: 'aus 84 Rezensionen' },
  { value: '98%',  label: 'Kundenzufriedenheit',     detail: 'empfehlen uns weiter' },
]

export default function SocialProofStrip() {
  return (
    <section aria-label="Kennzahlen und Bewertungen" className="bg-sand border-b border-grey-200">
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-grey-200">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="px-6 py-8 text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-1">
                {item.value === '4,9' && (
                  <Star size={14} className="fill-taupe text-taupe" aria-hidden="true" />
                )}
                <p className="font-display text-[2rem] font-medium text-brown leading-none">
                  {item.value}
                </p>
              </div>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-widest text-grey-600 mb-0.5">
                {item.label}
              </p>
              <p className="font-sans text-[11px] text-grey-400">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
