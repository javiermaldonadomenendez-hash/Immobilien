'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import PropertyCard, { PropertyCardProps } from './PropertyCard'
import { ArrowRight, SlidersHorizontal } from 'lucide-react'
import Link from 'next/link'

const listings: PropertyCardProps[] = [
  {
    id: 1,
    title: 'Exklusives Penthouse mit Panoramablick über München',
    location: 'Schwabing, München',
    price: '2.850.000 €',
    sqm: 185,
    rooms: 4,
    type: 'Kaufen',
    category: 'Penthouse',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    isExclusive: true,
  },
  {
    id: 2,
    title: 'Elegante Stadtvilla mit privatem Garten',
    location: 'Bogenhausen, München',
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
    title: 'Luxuriöse Maisonette im Herzogpark',
    location: 'Herzogpark, München',
    price: '7.500 € / Monat',
    priceNote: 'zzgl. Nebenkosten',
    sqm: 145,
    rooms: 4,
    type: 'Mieten',
    category: 'Maisonette',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    isExclusive: true,
  },
  {
    id: 4,
    title: 'Moderne Designwohnung am Englischen Garten',
    location: 'Maxvorstadt, München',
    price: '1.195.000 €',
    sqm: 98,
    rooms: 3,
    type: 'Kaufen',
    category: 'Eigentumswohnung',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    isNew: true,
  },
  {
    id: 5,
    title: 'Repräsentatives Stadthaus mit Terrasse',
    location: 'Lehel, München',
    price: '3.490.000 €',
    sqm: 245,
    rooms: 6,
    type: 'Kaufen',
    category: 'Stadthaus',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
  },
  {
    id: 6,
    title: 'Charmante Altbauwohnung mit hohen Decken',
    location: 'Neuhausen, München',
    price: '3.200 € / Monat',
    priceNote: 'inkl. Nebenkosten',
    sqm: 112,
    rooms: 3,
    type: 'Mieten',
    category: 'Altbau',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
  },
]

const filters = ['Alle', 'Kaufen', 'Mieten', 'Exklusiv']

export default function FeaturedListings() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeFilter, setActiveFilter] = useState('Alle')

  const filtered = listings.filter((p) => {
    if (activeFilter === 'Alle') return true
    if (activeFilter === 'Exklusiv') return p.isExclusive
    return p.type === activeFilter
  })

  return (
    <section id="angebote" className="py-28 lg:py-36 bg-offwhite">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-gold" />
                <span className="section-label">Handverlesene Objekte</span>
              </div>
              <h2 className="section-title-dark">
                Ausgewählte{' '}
                <span className="text-gold italic">Angebote</span>
              </h2>
            </div>
            <Link
              href="#kontakt"
              className="hidden lg:flex items-center gap-2 text-sm font-sans font-medium
                         text-warm-gray hover:text-gold transition-colors group"
            >
              Alle Objekte ansehen
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-10 flex-wrap"
        >
          <SlidersHorizontal size={14} className="text-warm-gray" />
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-xs font-sans font-medium tracking-widest uppercase
                          transition-all duration-300 border ${
                            activeFilter === filter
                              ? 'bg-charcoal text-offwhite border-charcoal'
                              : 'bg-transparent text-warm-gray border-warm-light hover:border-charcoal hover:text-charcoal'
                          }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filtered.map((property, i) => (
            <motion.div
              key={property.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <PropertyCard {...property} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="lg:hidden text-center mt-10"
        >
          <Link href="#kontakt" className="btn-outline">
            Alle Objekte ansehen
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
