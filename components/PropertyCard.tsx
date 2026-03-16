'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BedDouble, Maximize2, Plus, Check } from 'lucide-react'
import Image from 'next/image'

export interface PropertyCardProps {
  id: number
  ref_nr: string
  title: string
  location: string
  district: string
  price: string
  priceNote?: string
  sqm: number
  rooms: number
  type: 'Kaufen' | 'Mieten'
  category: string
  image: string
  isNew?: boolean
  isExclusive?: boolean
}

export default function PropertyCard(p: PropertyCardProps) {
  const [saved, setSaved] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className="group bg-paper border border-grey-200 overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image ──────────────────────────────── */}
      <div className="relative overflow-hidden aspect-[3/4] bg-grey-100">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover grayscale-[20%] transition-transform duration-700
                     group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-ink/40 pointer-events-none"
        />

        {/* Badges */}
        <div className="absolute top-0 left-0 right-0 flex justify-between p-4">
          <div className="flex gap-1.5">
            {p.isNew && (
              <span className="label bg-paper text-ink px-3 py-1.5">Neu</span>
            )}
            {p.isExclusive && (
              <span className="label bg-ink text-paper px-3 py-1.5">Exklusiv</span>
            )}
          </div>
          <span className={`label px-3 py-1.5 ${
            p.type === 'Kaufen' ? 'bg-ink text-paper' : 'bg-paper text-ink'
          }`}>
            {p.type}
          </span>
        </div>

        {/* Ref number bottom-left */}
        <div className="absolute bottom-4 left-4">
          <span className="label text-white/50">{p.ref_nr}</span>
        </div>

        {/* "Zur Merkliste" CTA — slides up on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.button
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => { e.stopPropagation(); setSaved(!saved) }}
              className={`absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2.5
                          py-4 label transition-colors duration-200 ${
                            saved
                              ? 'bg-grey-200 text-ink'
                              : 'bg-paper text-ink hover:bg-ink hover:text-paper'
                          }`}
            >
              {saved ? (
                <><Check size={11} strokeWidth={2.5} /> Gemerkt</>
              ) : (
                <><Plus size={11} strokeWidth={2.5} /> Zur Merkliste</>
              )}
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* ── Info ───────────────────────────────── */}
      <div className="p-5 border-t border-grey-200">

        {/* Category + location */}
        <div className="flex items-center justify-between mb-3">
          <span className="label text-grey-400">{p.category}</span>
          <span className="label text-grey-300">{p.district}</span>
        </div>

        {/* Title */}
        <h3 className="font-sans text-[15px] font-medium text-ink leading-snug mb-4
                       line-clamp-2 group-hover:text-grey-600 transition-colors duration-200">
          {p.title}
        </h3>

        {/* Stats */}
        <div className="flex items-center gap-5 text-grey-400 font-sans text-xs mb-4">
          <span className="flex items-center gap-1.5">
            <BedDouble size={12} strokeWidth={1.5} />
            {p.rooms} Zimmer
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize2 size={12} strokeWidth={1.5} />
            {p.sqm} m²
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-grey-200 mb-4" />

        {/* Price */}
        <div className="flex items-end justify-between">
          <div>
            <p className="font-display text-2xl text-ink tracking-wide">{p.price}</p>
            {p.priceNote && (
              <p className="label text-grey-300 mt-0.5">{p.priceNote}</p>
            )}
          </div>
          <div className="label text-grey-300 hover:text-ink transition-colors">
            {p.location}
          </div>
        </div>
      </div>
    </article>
  )
}
