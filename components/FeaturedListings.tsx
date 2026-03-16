'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import PropertyCard, { PropertyCardProps } from './PropertyCard'
import { ArrowRight } from 'lucide-react'

const listings: PropertyCardProps[] = [
  {
    id: 1, ref_nr: 'MW-0091',
    title: 'Penthouse mit Panoramablick über München',
    location: 'München', district: 'Schwabing',
    price: '2.850.000 €', sqm: 185, rooms: 4,
    type: 'Kaufen', category: 'Penthouse',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    isExclusive: true,
  },
  {
    id: 2, ref_nr: 'MW-0087',
    title: 'Elegante Stadtvilla mit privatem Garten',
    location: 'München', district: 'Bogenhausen',
    price: '4.200.000 €', sqm: 320, rooms: 7,
    type: 'Kaufen', category: 'Villa',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    isNew: true,
  },
  {
    id: 3, ref_nr: 'MW-0083',
    title: 'Luxuriöse Maisonette im Herzogpark',
    location: 'München', district: 'Herzogpark',
    price: '7.500 € / Monat', priceNote: 'zzgl. NK',
    sqm: 145, rooms: 4,
    type: 'Mieten', category: 'Maisonette',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    isExclusive: true,
  },
  {
    id: 4, ref_nr: 'MW-0079',
    title: 'Designwohnung am Englischen Garten',
    location: 'München', district: 'Maxvorstadt',
    price: '1.195.000 €', sqm: 98, rooms: 3,
    type: 'Kaufen', category: 'Eigentumswohnung',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    isNew: true,
  },
  {
    id: 5, ref_nr: 'MW-0074',
    title: 'Repräsentatives Stadthaus mit Dachterrasse',
    location: 'München', district: 'Lehel',
    price: '3.490.000 €', sqm: 245, rooms: 6,
    type: 'Kaufen', category: 'Stadthaus',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
  },
  {
    id: 6, ref_nr: 'MW-0068',
    title: 'Jugendstil-Altbauwohnung mit Stuckdecken',
    location: 'München', district: 'Neuhausen',
    price: '3.200 € / Monat', priceNote: 'inkl. NK',
    sqm: 112, rooms: 3,
    type: 'Mieten', category: 'Altbau',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
  },
]

const filters = ['Alle', 'Kaufen', 'Mieten', 'Exklusiv', 'Neu']

export default function FeaturedListings() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState('Alle')

  const filtered = listings.filter((p) => {
    if (active === 'Alle')    return true
    if (active === 'Exklusiv') return p.isExclusive
    if (active === 'Neu')      return p.isNew
    return p.type === active
  })

  return (
    <section id="angebote" className="bg-grey-50 border-t border-grey-200">

      {/* ── Header ───────────────────────────────── */}
      <div ref={ref} className="max-w-screen-2xl mx-auto px-6 lg:px-12 pt-16 pb-10
                                border-b border-grey-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8"
        >
          <div>
            <p className="label mb-4">Handverlesene Objekte</p>
            <h2 className="display-lg text-ink">Angebote</h2>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-1 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2.5 label transition-colors duration-200 border ${
                  active === f
                    ? 'bg-ink text-paper border-ink'
                    : 'text-grey-400 border-grey-200 hover:border-grey-400 hover:text-ink bg-paper'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Count + View all ─────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-5 border-b border-grey-200
                      flex items-center justify-between">
        <span className="label text-grey-400">{filtered.length} Objekte</span>
        <button className="btn-ghost">
          Alle ansehen
          <ArrowRight size={11} />
        </button>
      </div>

      {/* ── Grid ─────────────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-12">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-grey-200">
          {filtered.map((property, i) => (
            <motion.div
              key={property.id}
              layout
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="bg-grey-50"
            >
              <PropertyCard {...property} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
