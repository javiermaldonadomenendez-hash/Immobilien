'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Search, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const [deal, setDeal] = useState<'Kaufen' | 'Mieten'>('Kaufen')
  const [location, setLocation] = useState('')

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY   = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const textY  = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const fadeOut = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] max-h-[1080px] overflow-hidden bg-ink flex flex-col">

      {/* ── Background image (parallax) ───────────── */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&q=90"
          alt="Architektur"
          fill
          priority
          className="object-cover object-center grayscale brightness-50"
          sizes="100vw"
        />
      </motion.div>

      {/* ── Vertical label – right edge ──────────────*/}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3">
        <span className="label text-white/30 [writing-mode:vertical-lr] tracking-[0.35em]">
          München · Deutschland · Est. 2008
        </span>
        <div className="w-px h-16 bg-white/15" />
      </div>

      {/* ── Main content ─────────────────────────── */}
      <motion.div
        style={{ y: textY, opacity: fadeOut }}
        className="relative z-10 flex-1 flex flex-col justify-end pb-24 px-6 lg:px-12 max-w-screen-2xl mx-auto w-full"
      >
        {/* Issue tag */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="label text-white/40 mb-6"
        >
          Collection 2024 — Premium Portfolio
        </motion.p>

        {/* Headline */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-paper leading-none uppercase
                       text-[clamp(4.5rem,13vw,13rem)]"
          >
            Premium
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-paper leading-none uppercase
                       text-[clamp(4.5rem,13vw,13rem)]"
          >
            Immobilien
          </motion.h1>
        </div>

        {/* Sub-row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <p className="font-sans text-white/50 text-sm font-light max-w-xs leading-relaxed">
            Handverlesene Objekte für anspruchsvolle Käufer.<br />
            Diskret, professionell, exklusiv.
          </p>
          <Link href="#angebote" className="btn-outline-ink border-white text-white hover:bg-white hover:text-ink group">
            Objekte ansehen
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Floating search bar ───────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 bg-paper border-t border-grey-200"
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-stretch">

            {/* Deal type toggle */}
            <div className="flex border-r border-grey-200">
              {(['Kaufen', 'Mieten'] as const).map((d) => (
                <button
                  key={d}
                  onClick={() => setDeal(d)}
                  className={`px-7 py-5 label transition-colors duration-200 ${
                    deal === d
                      ? 'bg-ink text-paper'
                      : 'text-grey-400 hover:text-ink'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {/* Location input */}
            <div className="flex-1 flex items-center gap-3 px-6 py-4 border-r border-grey-200">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Ort, Stadtteil oder PLZ"
                className="w-full bg-transparent font-sans text-sm text-ink placeholder-grey-300
                           outline-none"
              />
            </div>

            {/* Type select */}
            <div className="flex items-center px-6 py-4 border-r border-grey-200">
              <select className="bg-transparent font-sans text-sm text-grey-400 outline-none cursor-pointer
                                 hover:text-ink transition-colors appearance-none pr-3">
                <option>Alle Typen</option>
                <option>Wohnung</option>
                <option>Haus</option>
                <option>Villa</option>
                <option>Penthouse</option>
              </select>
            </div>

            {/* Price select */}
            <div className="flex items-center px-6 py-4 border-r border-grey-200">
              <select className="bg-transparent font-sans text-sm text-grey-400 outline-none cursor-pointer
                                 hover:text-ink transition-colors appearance-none pr-3">
                <option>Alle Preise</option>
                <option>bis 500T €</option>
                <option>500T – 1 Mio €</option>
                <option>1 – 2 Mio €</option>
                <option>ab 2 Mio €</option>
              </select>
            </div>

            {/* Submit */}
            <button className="flex items-center justify-center gap-2.5 bg-ink text-paper
                               px-10 py-5 label hover:bg-grey-800 transition-colors group">
              <Search size={13} />
              Suchen
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
