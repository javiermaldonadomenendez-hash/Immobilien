'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    num:  '01',
    title: 'Vermieten',
    tag: 'Rental Management',
    desc: 'Wir finden den idealen Mieter — durch gezielte Vermarktung, Bonitätsprüfung und rechtssichere Vertragsgestaltung.',
    stats: [
      { label: 'Ø Vermarktungszeit', value: '18 Tage' },
      { label: 'Vermietungsquote',   value: '99%' },
    ],
    href: '#leistungen',
  },
  {
    num:  '02',
    title: 'Verkaufen',
    tag: 'Sales & Transaction',
    desc: 'Mit datengestützter Preisstrategie, Premium-Marketing und einem exklusiven Käufernetzwerk erzielen wir Spitzenpreise.',
    stats: [
      { label: 'Über Marktwert erzielt', value: 'Ø +8%' },
      { label: 'Off-Market-Anteil',      value: '41%' },
    ],
    href: '#leistungen',
  },
  {
    num:  '03',
    title: 'Bewerten',
    tag: 'Valuation & Advisory',
    desc: 'Präzise Gutachten auf Basis aktueller Marktdaten, Lageanalyse und Vergleichsobjekten — kostenlos und unverbindlich.',
    stats: [
      { label: 'Gutachten ausgestellt', value: '1.200+' },
      { label: 'Erstbewertung',         value: 'Kostenlos' },
    ],
    href: '#kontakt',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="leistungen" ref={ref} className="bg-paper border-t border-grey-200">

      {/* ── Section header ───────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 border-b border-grey-200
                      flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="label mb-4">Was wir für Sie tun</p>
          <h2 className="display-lg text-ink">Leistungen</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-sans text-sm text-grey-400 max-w-xs leading-relaxed"
        >
          Drei Kernleistungen — vollständig auf Ihre Immobilie abgestimmt.
        </motion.p>
      </div>

      {/* ── Cards grid ───────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-grey-200">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={s.href}
                className="group block py-14 px-8 lg:px-10 hover:bg-ink transition-colors
                           duration-400 relative overflow-hidden"
              >
                {/* Background number */}
                <div className="absolute -bottom-8 -right-4 font-display text-[10rem] leading-none
                                text-grey-100 group-hover:text-grey-800 transition-colors duration-400
                                pointer-events-none select-none">
                  {s.num}
                </div>

                <div className="relative z-10">
                  {/* Tag */}
                  <p className="label group-hover:text-grey-400 mb-8 transition-colors duration-300">
                    {s.tag}
                  </p>

                  {/* Title */}
                  <h3 className="font-display text-[clamp(3rem,5vw,5.5rem)] leading-none uppercase
                                 text-ink group-hover:text-paper transition-colors duration-300 mb-6">
                    {s.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-8 h-px bg-grey-200 group-hover:bg-grey-600 mb-6 transition-colors duration-300" />

                  {/* Description */}
                  <p className="font-sans text-sm text-grey-500 group-hover:text-grey-300
                                leading-relaxed mb-10 transition-colors duration-300 max-w-xs">
                    {s.desc}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    {s.stats.map((st, j) => (
                      <div key={j}>
                        <p className="font-display text-3xl text-ink group-hover:text-paper
                                       transition-colors duration-300 leading-none mb-1">
                          {st.value}
                        </p>
                        <p className="label group-hover:text-grey-400 transition-colors duration-300">
                          {st.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 label text-grey-400
                                  group-hover:text-grey-300 transition-colors duration-300">
                    Mehr erfahren
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Bottom border ────────────────────────── */}
      <div className="border-t border-grey-200" />
    </section>
  )
}
