'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '15+',    label: 'Jahre am Markt' },
  { value: '500+',   label: 'Objekte vermittelt' },
  { value: '€2Mrd',  label: 'Transaktionsvolumen' },
  { value: '98%',    label: 'Kundenzufriedenheit' },
]

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="ueber-uns" ref={ref} className="bg-paper border-t border-grey-200 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[720px]">

          {/* ── Left: Content ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="px-6 lg:px-12 py-20 flex flex-col justify-between border-r border-grey-200"
          >
            <div>
              <p className="label mb-8">Wer wir sind</p>

              {/* Massive headline */}
              <div className="overflow-hidden mb-1">
                <motion.div
                  initial={{ y: '100%' }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h2 className="font-display text-[clamp(5rem,10vw,9rem)] leading-none uppercase text-ink">
                    Über
                  </h2>
                </motion.div>
              </div>
              <div className="overflow-hidden mb-12">
                <motion.div
                  initial={{ y: '100%' }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ delay: 0.06, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h2 className="font-display text-[clamp(5rem,10vw,9rem)] leading-none uppercase text-ink">
                    uns
                  </h2>
                </motion.div>
              </div>

              <p className="font-sans text-sm text-grey-500 leading-relaxed max-w-sm mb-6">
                Seit 2008 sind wir der exklusive Ansprechpartner für anspruchsvolle
                Immobilientransaktionen in München. Was uns antreibt: die Überzeugung,
                dass jede Immobilie eine Geschichte erzählt — und wir helfen Ihnen,
                die richtige zu schreiben.
              </p>
              <p className="font-sans text-sm text-grey-400 leading-relaxed max-w-sm mb-12">
                Unser Team verbindet tiefes Marktverständnis mit einem exklusiven
                Netzwerk aus Privatkunden, Investoren und institutionellen Käufern.
                Diskret. Professionell. Erfolgreich.
              </p>

              <Link href="#kontakt" className="btn-outline-ink">
                Kennenlernen
                <ArrowRight size={12} />
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-px bg-grey-200 mt-16 border border-grey-200">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
                  className="bg-paper p-6 group hover:bg-ink transition-colors duration-300 cursor-default"
                >
                  <p className="font-display text-4xl text-ink group-hover:text-paper
                                transition-colors duration-300 leading-none mb-1">
                    {s.value}
                  </p>
                  <p className="label group-hover:text-grey-400 transition-colors duration-300">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Image ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[500px] lg:min-h-0 overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=85"
              alt="Maldonado-Winz Immobilien"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Editorial overlay text */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-paper/95 p-6">
                <p className="label text-grey-400 mb-1">Unser Büro</p>
                <p className="font-sans text-sm text-ink font-medium">
                  Maximilianstraße 12, München
                </p>
              </div>
            </div>

            {/* Corner marker */}
            <div className="absolute top-8 right-8 w-12 h-12 border border-white/30 flex items-center justify-center">
              <span className="label text-white/50 text-[8px]">2008–</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
