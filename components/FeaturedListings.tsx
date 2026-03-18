'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import PropertyCard, { PropertyCardProps } from './PropertyCard'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const listings: PropertyCardProps[] = [
  {
    id: 1,
    ref_nr: 'MW-0091',
    title: 'Penthouse mit Panoramablick über die Münchner Altstadt',
    location: 'München',
    district: 'Schwabing-West',
    price: '2.850.000 €',
    sqm: 195,
    rooms: 4,
    type: 'Kaufen',
    category: 'Penthouse',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    isExclusive: true,
  },
  {
    id: 2,
    ref_nr: 'MW-0087',
    title: 'Elegante Stadtvilla mit privatem Garten und Pool',
    location: 'München',
    district: 'Bogenhausen',
    price: '4.200.000 €',
    sqm: 320,
    rooms: 7,
    type: 'Kaufen',
    category: 'Villa',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    isNew: true,
  },
  {
    id: 3,
    ref_nr: 'MW-0083',
    title: 'Repräsentatives Stadthaus mit Dachterrasse im Lehel',
    location: 'München',
    district: 'Lehel',
    price: '3.490.000 €',
    sqm: 248,
    rooms: 6,
    type: 'Kaufen',
    category: 'Stadthaus',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    isExclusive: true,
  },
]

export default function FeaturedListings() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="angebote" className="bg-cream border-t border-grey-200">

      {/* ── Header ─────────────────────────────── */}
      <div ref={ref} className="max-w-screen-2xl mx-auto px-5 lg:px-12 pt-16 pb-10 border-b border-grey-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-gold" />
              <p className="label text-gold">Handverlesene Objekte</p>
            </div>
            <h2 className="display-lg text-navy">Aktuelle Angebote</h2>
          </div>
          <p className="font-sans text-base text-grey-500 max-w-xs leading-relaxed">
            Eine Auswahl exklusiver Wohnimmobilien aus unserem aktuellen Portfolio.
          </p>
        </motion.div>
      </div>

      {/* ── Count + View all ──────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 py-5 border-b border-grey-200
                      flex items-center justify-between">
        <span className="label text-grey-400">{listings.length} Objekte</span>
        <Link href="#kontakt" className="btn-ghost group">
          Alle Angebote anfragen
          <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* ── Grid ─────────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-grey-200">
          {listings.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-cream"
            >
              <PropertyCard {...property} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Off-Market Teaser ─────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-navy px-8 py-10 lg:py-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <div>
            <p className="label text-gold mb-3">Off-Market Angebote</p>
            <h3 className="font-display text-[clamp(1.8rem,3vw,3rem)] font-light text-cream leading-tight mb-2">
              Exklusive Objekte, die nie öffentlich inseriert werden.
            </h3>
            <p className="font-sans text-[15px] text-cream/60 max-w-md leading-relaxed">
              Für vorgemerkte Kaufinteressenten pflegen wir einen diskreten Zugang zu Immobilien, die außerhalb der üblichen Portale vermarktet werden.
            </p>
          </div>
          <Link href="#kontakt" className="btn-gold flex-shrink-0">
            Suchauftrag anlegen
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
