'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, TrendingUp, BarChart3, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Building2,
    number: '01',
    title: 'Vermieten',
    subtitle: 'Ihr Objekt in besten Händen',
    description:
      'Wir finden den idealen Mieter für Ihre Immobilie — diskret, schnell und zu marktgerechten Konditionen. Von der Objektaufnahme bis zur Schlüsselübergabe.',
    features: ['Professionelles Home Staging', 'Bonitätsprüfung', 'Rechtssichere Mietverträge'],
    href: '#leistungen',
    accent: 'Bis zu 30% schneller vermietet',
  },
  {
    icon: TrendingUp,
    number: '02',
    title: 'Verkaufen',
    subtitle: 'Maximaler Erlös garantiert',
    description:
      'Mit unserem exklusiven Netzwerk und datengetriebenen Preisstrategie erzielen wir für Ihre Immobilie den bestmöglichen Verkaufspreis am Markt.',
    features: ['Premium-Vermarktung', '3D-Visualisierungen', 'Off-Market Zugänge'],
    href: '#leistungen',
    accent: 'Ø 8% über Marktwert erzielt',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Bewerten',
    subtitle: 'Fundiert & marktgerecht',
    description:
      'Eine präzise Immobilienbewertung ist die Basis für jede erfolgreiche Transaktion. Unsere zertifizierten Experten liefern fundierte Gutachten.',
    features: ['Zertifizierte Gutachter', 'Marktanalyse inklusive', 'Kostenlos & unverbindlich'],
    href: '#kontakt',
    accent: 'Kostenlose Erstbewertung',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="leistungen" className="py-28 lg:py-36 bg-charcoal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-48 w-96 h-96 rounded-full
                      bg-gold/4 blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="section-label">Was wir für Sie tun</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="section-title-light max-w-lg">
              Unsere{' '}
              <span className="text-gold italic">Leistungen</span>
            </h2>
            <p className="text-offwhite/45 font-sans text-base leading-relaxed max-w-xs lg:max-w-sm">
              Maßgeschneiderte Lösungen für jeden Aspekt Ihrer Immobilientransaktion.
            </p>
          </div>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-warm-border">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className="group bg-charcoal-light p-8 lg:p-10 h-full flex flex-col
                             hover:bg-charcoal-mid transition-all duration-500 cursor-default"
                >
                  {/* Number + Icon */}
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-serif text-5xl font-bold text-warm-border
                                     group-hover:text-gold/20 transition-colors duration-500">
                      {service.number}
                    </span>
                    <div className="w-14 h-14 border border-warm-border group-hover:border-gold/40
                                   flex items-center justify-center transition-all duration-500
                                   group-hover:bg-gold/8">
                      <Icon
                        size={22}
                        className="text-warm-gray group-hover:text-gold transition-colors duration-500"
                      />
                    </div>
                  </div>

                  {/* Accent tag */}
                  <div className="mb-5">
                    <span className="inline-block text-[10px] tracking-widest uppercase font-sans
                                     text-gold/70 border border-gold/25 px-3 py-1">
                      {service.accent}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-3xl text-offwhite font-semibold mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gold text-sm font-sans mb-5">{service.subtitle}</p>
                  <p className="text-offwhite/45 font-sans text-sm leading-relaxed mb-8 flex-1">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-offwhite/55 font-sans">
                        <span className="w-1.5 h-1.5 bg-gold/60 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-sm text-gold/70 hover:text-gold
                               font-sans font-medium tracking-wide group/link transition-colors duration-200"
                  >
                    Mehr erfahren
                    <ArrowRight
                      size={14}
                      className="group-hover/link:translate-x-1.5 transition-transform duration-300"
                    />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
