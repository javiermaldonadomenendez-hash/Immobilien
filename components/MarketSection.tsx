'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Home, Zap } from 'lucide-react'

const insights = [
  {
    icon: TrendingUp,
    title: 'Nachfrage bleibt strukturell stark',
    desc: 'Der Münchner Immobilienmarkt zeichnet sich durch ein dauerhaft knappes Angebot bei anhaltend hoher Nachfrage aus — insbesondere für hochwertige Lagen und gut aufgeteilte Wohnimmobilien. Eigentümer profitieren von dieser strukturellen Grundkonstellation.',
  },
  {
    icon: Home,
    title: 'Lage entscheidet mehr denn je',
    desc: 'In einem Marktumfeld mit selektiver Nachfrage rückt die Mikrolage stärker in den Fokus. Objekte in begehrten Stadtteilen, mit guter Infrastruktur und hoher Wohnqualität erzielen nach wie vor Spitzenpreise — wenn sie professionell bewertet und vermarktet werden.',
  },
  {
    icon: Zap,
    title: 'Energieeffizienz als Werttreiber',
    desc: 'Käufer kalkulieren zunehmend langfristig: Energieklasse, Sanierungsstand und technische Ausstattung fließen direkt in die Kaufentscheidung ein. Eine fundierte Aufbereitung dieser Aspekte im Vermarktungsprozess schützt den Verkaufserlös.',
  },
]

export default function MarketSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="markt" ref={ref} className="bg-cream border-t border-grey-200">

      {/* ── Header ─────────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 py-16 border-b border-grey-200
                      flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-gold" />
            <p className="label text-gold">Markt &amp; Trends</p>
          </div>
          <h2 className="display-lg text-navy">Region München</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-sans text-base text-grey-500 max-w-sm leading-relaxed"
        >
          Was Eigentümer heute wissen sollten — ohne Prognosen, die morgen schon überholt sind.
        </motion.p>
      </div>

      {/* ── Content grid ───────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-grey-200 mb-16">
          {insights.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                className="bg-cream p-8 lg:p-10 group hover:bg-navy transition-colors duration-300"
              >
                <Icon
                  size={26}
                  strokeWidth={1.2}
                  className="text-gold mb-6 transition-transform duration-300 group-hover:scale-110"
                />
                <h3 className="font-display text-2xl font-light text-navy group-hover:text-cream
                               transition-colors duration-300 mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="font-sans text-[15px] text-grey-500 group-hover:text-cream/65
                               transition-colors duration-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* ── CTA Bewertung ───────────────────── */}
        <motion.div
          id="bewertung"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-grey-200 border border-grey-200"
        >
          {/* Online Schnellbewertung */}
          <div className="bg-cream p-8 lg:p-10">
            <p className="label text-gold mb-4">Online-Schnellcheck</p>
            <h3 className="font-display text-3xl font-light text-navy mb-4 leading-tight">
              Erster Eindruck in Minuten
            </h3>
            <p className="font-sans text-[15px] text-grey-500 leading-relaxed mb-8">
              Erhalten Sie innerhalb weniger Minuten eine erste indikative Einschätzung des Marktwertes Ihrer Immobilie — kostenlos, unverbindlich und diskret. Als Orientierungshilfe für Ihre nächsten Schritte.
            </p>
            <Link href="#kontakt" className="btn-outline group">
              Schnellbewertung starten
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Persönliche Bewertung */}
          <div className="bg-navy p-8 lg:p-10">
            <p className="label text-gold mb-4">Persönliche Wertermittlung</p>
            <h3 className="font-display text-3xl font-light text-cream mb-4 leading-tight">
              Präzision vor Ort
            </h3>
            <p className="font-sans text-[15px] text-cream/60 leading-relaxed mb-8">
              Bei der professionellen Wertermittlung vor Ort analysieren wir Bauzustand, Lage, Ausstattung und aktuelle Vergleichstransaktionen. Das Ergebnis: ein belastbarer Marktwert als solide Grundlage für Ihren Verkauf oder Ihre Planung.
            </p>
            <Link href="#kontakt" className="btn-outline-light group">
              Termin vereinbaren
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
