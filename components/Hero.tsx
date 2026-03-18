'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY    = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const textY   = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const fadeOut = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] max-h-[1100px] overflow-hidden bg-navy flex flex-col">

      {/* ── Background image (parallax) ───────────── */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=90"
          alt="Hochwertige Wohnimmobilie"
          fill
          priority
          className="object-cover object-center brightness-[0.35]"
          sizes="100vw"
        />
      </motion.div>

      {/* ── Subtle gradient overlay ─────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy/70 pointer-events-none" />

      {/* ── Gold accent line – right ─────────────── */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3">
        <span className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-white/30 [writing-mode:vertical-lr]">
          München · Bayern · Deutschland
        </span>
        <div className="w-px h-16 bg-gold/40" />
      </div>

      {/* ── Main content ─────────────────────────── */}
      <motion.div
        style={{ y: textY, opacity: fadeOut }}
        className="relative z-10 flex-1 flex flex-col justify-end pb-10 px-5 lg:px-12 max-w-screen-2xl mx-auto w-full"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-px bg-gold" />
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-gold">
            Boutique Immobilienmakler · München
          </span>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-cream leading-[0.92]
                       text-[clamp(4rem,11vw,10.5rem)]"
          >
            Werte verstehen.
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-cream/60 leading-[0.92]
                       text-[clamp(4rem,11vw,10.5rem)]"
          >
            Immobilien gestalten.
          </motion.h1>
        </div>

        {/* Sub-row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12"
        >
          <div className="max-w-sm">
            <p className="font-sans text-cream/70 text-base font-light leading-relaxed mb-2">
              Diskrete Vermarktung. Tiefgreifende Beratung. Maximaler Erlös.
            </p>
            <div className="flex items-center gap-2 font-sans text-[11px] text-white/40 uppercase tracking-widest">
              <MapPin size={11} />
              Spezialisiert auf Premium-Wohnimmobilien in München
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-3 w-full sm:w-auto">
            <Link href="#bewertung" className="btn-gold group w-full sm:w-auto justify-center">
              Immobilie bewerten
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link href="#kontakt" className="btn-outline-light group w-full sm:w-auto justify-center">
              Beratungsgespräch
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Trust bar ────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="relative z-10 bg-cream/95 backdrop-blur-sm border-t border-grey-200"
      >
        <div className="max-w-screen-2xl mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-grey-200">
            {[
              { value: '15+',   label: 'Jahre Erfahrung' },
              { value: '500+',  label: 'Objekte vermittelt' },
              { value: '98%',   label: 'Kundenzufriedenheit' },
              { value: '4,9',   label: 'Google-Bewertung' },
            ].map((item) => (
              <div key={item.label} className="px-6 py-5 text-center">
                <p className="font-display text-2xl font-medium text-navy leading-none mb-1">
                  {item.value}
                </p>
                <p className="font-sans text-[10px] uppercase tracking-widest text-grey-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
