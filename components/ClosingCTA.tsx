'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export default function ClosingCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-sand border-t border-grey-200 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="px-5 lg:px-12 py-20 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-px bg-taupe" />
                <p className="label text-taupe">Persönliche Einladung</p>
              </div>

              <h2 className="font-display text-[clamp(3rem,7vw,6rem)] font-light text-brown leading-[0.95] mb-8">
                Lassen Sie uns<br />
                <span className="text-taupe">miteinander sprechen.</span>
              </h2>

              <p className="font-sans text-base text-grey-600 leading-relaxed max-w-md mb-4">
                Jede Immobilie hat ihre eigene Geschichte — und jede Situation verdient eine individuelle Antwort. Ob Sie verkaufen, vermieten oder einfach wissen möchten, was Ihre Immobilie heute wert ist: Wir nehmen uns die Zeit für Sie.
              </p>
              <p className="font-sans text-[15px] text-grey-500 leading-relaxed max-w-md mb-12">
                — Javier Maldonado &amp; Thomas Winz
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="#kontakt" className="btn-gold group">
                  Erstgespräch vereinbaren
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <a href="tel:+498912345678" className="btn-outline group flex items-center gap-2">
                  <Phone size={13} />
                  Direkt anrufen
                </a>
              </div>
            </div>

            {/* Process steps */}
            <div className="mt-16 grid grid-cols-3 gap-4">
              {[
                { step: '01', label: 'Kostenloses Erstgespräch' },
                { step: '02', label: 'Bewertung & Strategie' },
                { step: '03', label: 'Erfolgreiche Vermittlung' },
              ].map((s) => (
                <div key={s.step} className="border-t-2 border-taupe pt-4">
                  <p className="font-display text-2xl font-light text-brown/30 mb-2">{s.step}</p>
                  <p className="font-sans text-[13px] text-grey-500 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[400px] lg:min-h-0 overflow-hidden border-l border-grey-200"
          >
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85"
              alt="Maldonado Winz Immobilien Beratung"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-brown/30" />

            {/* Overlay card */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-sand/95 p-6 border-l-4 border-taupe">
                <p className="label text-taupe mb-2">Ihr nächster Schritt</p>
                <p className="font-display text-xl font-light text-brown">
                  Kostenlose Immobilienbewertung
                </p>
                <p className="font-sans text-sm text-grey-500 mt-1">
                  Unverbindlich · Professionell · In Ihrer Region
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
