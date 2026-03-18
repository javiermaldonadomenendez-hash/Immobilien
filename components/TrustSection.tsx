'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck, Scale, BrainCircuit, UserCheck } from 'lucide-react'

const pillars = [
  {
    icon: BrainCircuit,
    title: 'Beratungstiefe, die überzeugt',
    desc: 'Wir begleiten Sie weit über den Vertragsabschluss hinaus. Unser Ansatz: vollständige Transparenz in allen Phasen, klare Empfehlungen und keine versteckten Eigeninteressen. Nur Ihre Entscheidung zählt.',
  },
  {
    icon: ShieldCheck,
    title: 'Finanz- & Versicherungskompetenz',
    desc: 'Als Boutique-Makler mit Hintergrund in Finanzen und Versicherungswesen denken wir Immobilientransaktionen ganzheitlich. Von der Bewertung bis zur optimalen Strukturierung des Kaufvertrags.',
  },
  {
    icon: Scale,
    title: 'Diskrete Vermarktung',
    desc: 'Nicht jedes Objekt gehört ins öffentliche Schaufenster. Unser Off-Market-Netzwerk ermöglicht die stille, professionelle Vermarktung an vorgemerkte Kaufinteressenten — ohne Preisdruck durch breite Verbreitung.',
  },
  {
    icon: UserCheck,
    title: 'Strukturierte Prozesse',
    desc: 'Von der ersten Bewertung bis zur Notarunterschrift folgen wir einem klaren, erprobten Ablauf. Sie wissen zu jedem Zeitpunkt, was als Nächstes passiert. Keine Überraschungen, keine Verzögerungen.',
  },
]

export default function TrustSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-navy border-t border-navy-800">

      {/* ── Header ─────────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 py-16 border-b border-navy-800
                      flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-gold" />
            <p className="label text-gold">Warum Maldonado Winz</p>
          </div>
          <h2 className="display-lg text-cream">Unser Versprechen</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-sans text-base text-cream/50 max-w-sm leading-relaxed"
        >
          Was uns von klassischen Maklerbüros unterscheidet — in vier konkreten Punkten.
        </motion.p>
      </div>

      {/* ── Pillars ─────────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-navy-800">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="py-12 px-6 lg:px-8 group hover:bg-navy-800 transition-colors duration-300"
              >
                <Icon
                  size={28}
                  strokeWidth={1.2}
                  className="text-gold mb-8 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-display text-[1.75rem] font-light text-cream leading-tight mb-4">
                  {p.title}
                </h3>
                <p className="font-sans text-[15px] text-cream/55 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="border-t border-navy-800" />
    </section>
  )
}
