'use client'

import { motion } from 'framer-motion'
import { BedDouble, Maximize2, MapPin, Heart, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export interface PropertyCardProps {
  id: number
  title: string
  location: string
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

export default function PropertyCard({
  title,
  location,
  price,
  priceNote,
  sqm,
  rooms,
  type,
  category,
  image,
  isNew,
  isExclusive,
}: PropertyCardProps) {
  const [liked, setLiked] = useState(false)

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white overflow-hidden shadow-sm hover:shadow-2xl
                 transition-shadow duration-500 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-107"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span
            className={`text-[10px] font-sans font-semibold tracking-widest uppercase px-3 py-1.5 ${
              type === 'Kaufen'
                ? 'bg-gold text-charcoal'
                : 'bg-charcoal text-offwhite'
            }`}
          >
            {type}
          </span>
          {isNew && (
            <span className="text-[10px] font-sans font-semibold tracking-widest uppercase
                             px-3 py-1.5 bg-offwhite text-charcoal">
              Neu
            </span>
          )}
          {isExclusive && (
            <span className="text-[10px] font-sans font-semibold tracking-widest uppercase
                             px-3 py-1.5 bg-charcoal/80 text-gold border border-gold/30">
              Exklusiv
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setLiked(!liked)
          }}
          className="absolute top-4 right-4 w-9 h-9 bg-white/15 backdrop-blur-sm
                     flex items-center justify-center hover:bg-white/25 transition-colors
                     opacity-0 group-hover:opacity-100 duration-300"
          aria-label="Merken"
        >
          <Heart
            size={15}
            className={`transition-colors duration-200 ${
              liked ? 'fill-gold text-gold' : 'text-white'
            }`}
          />
        </button>

        {/* View button overlay */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100
                        transition-all duration-400 translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center justify-between text-white">
            <span className="text-xs font-sans tracking-wide">{category}</span>
            <div className="flex items-center gap-1.5 text-xs font-sans font-medium">
              Ansehen
              <ArrowUpRight size={13} />
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-warm-gray text-xs font-sans mb-2.5">
          <MapPin size={12} className="text-gold" />
          <span>{location}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-charcoal text-xl font-semibold leading-snug mb-4
                       group-hover:text-gold transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {/* Divider */}
        <div className="h-px bg-warm-light mb-4" />

        {/* Stats */}
        <div className="flex items-center gap-5 text-sm text-warm-gray font-sans mb-5">
          <div className="flex items-center gap-1.5">
            <BedDouble size={14} className="text-gold/70" />
            <span>{rooms} Zimmer</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize2 size={14} className="text-gold/70" />
            <span>{sqm} m²</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-end justify-between">
          <div>
            <p className="font-serif text-charcoal text-2xl font-bold">{price}</p>
            {priceNote && (
              <p className="text-warm-gray text-xs font-sans mt-0.5">{priceNote}</p>
            )}
          </div>
          <div
            className="w-9 h-9 border border-gold/30 flex items-center justify-center
                       group-hover:bg-gold group-hover:border-gold transition-all duration-300"
          >
            <ArrowUpRight
              size={15}
              className="text-gold group-hover:text-charcoal transition-colors duration-300"
            />
          </div>
        </div>
      </div>
    </motion.article>
  )
}
