'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero({ onBewertungClick }: { onBewertungClick?: () => void }) {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY    = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const textY   = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const fadeOut = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <section
      ref={ref}
      aria-label="Willkommen bei Maldonado & Winz Immobilien"
      className="relative h-screen min-h-[700px] max-h-[1100px] overflow-hidden bg-brown flex flex-col"
    >

      {/* ── Hintergrundbild (Parallax) ───────────── */}
      <motion.div className="absolute inset-0" style={{ y: imgY }} aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=90"
          alt=""
          fill
          priority
          className="object-cover object-center brightness-[0.35]"
          sizes="100vw"
        />
      </motion.div>

      {/* ── Gradient-Overlay ─────────────────────── */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-brown/30 via-transparent to-brown/70 pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Standort-Indikator rechts ─────────────── */}
      <div
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-white/30 [writing-mode:vertical-lr]">
          Essen · Ruhrgebiet · NRW
        </span>
        <div className="w-px h-16 bg-taupe/40" />
      </div>

      {/* ── Hauptinhalt ──────────────────────────── */}
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
          <div className="w-8 h-px bg-taupe" aria-hidden="true" />
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-taupe">
            Boutique Immobilienmakler · Essen
          </span>
        </motion.div>

        {/* Headline — Formel: [Ergebnis] für [Zielgruppe] (web-copywriting Skill) */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-sand leading-[0.92]
                       text-[clamp(4rem,11vw,10.5rem)]"
          >
            Mehr Erlös.
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-sand/60 leading-[0.92]
                       text-[clamp(4rem,11vw,10.5rem)]"
          >
            Weniger Stress.
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
            <p className="font-sans text-sand/70 text-base font-light leading-relaxed mb-2">
              Wir verkaufen und vermieten Ihre Immobilie in Essen —
              diskret, professionell und zum bestmöglichen Preis.
            </p>
            <div className="flex items-center gap-2 font-sans text-[11px] text-white/40 uppercase tracking-widest">
              <MapPin size={11} aria-hidden="true" />
              <span>Spezialisiert auf Premium-Wohnimmobilien in Essen</span>
            </div>
          </div>

          {/* CTAs — primärer oben, sekundärer daneben (CRO Skill: CTA above the fold) */}
          <div className="flex flex-col sm:flex-row items-start gap-3 w-full sm:w-auto">
            <button
              onClick={onBewertungClick}
              className="btn-gold group w-full sm:w-auto justify-center"
              aria-label="Kostenlose Immobilienbewertung starten"
            >
              Kostenlos bewerten
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </button>
            <Link
              href="/kontakt"
              className="btn-outline-light group w-full sm:w-auto justify-center"
            >
              Beratungsgespräch
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
