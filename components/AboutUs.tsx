'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Award, Users, Handshake, ArrowRight, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const milestones = [
  { icon: Shield, text: 'Gegründet 2008 in München' },
  { icon: Award, text: 'Ausgezeichnet als Top-Makler 2022–2024' },
  { icon: Users, text: 'Team aus 12 zertifizierten Experten' },
  { icon: Handshake, text: 'Über 500 erfolgreiche Transaktionen' },
]

const values = [
  'Diskretion & Vertrauensschutz',
  'Transparente Kommunikation',
  'Marktführende Expertise',
  'Persönliche Betreuung',
]

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="ueber-uns" className="py-28 lg:py-36 bg-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-gold/3 blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=85"
                alt="Maldonado-Winz Immobilien Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -right-6 lg:-right-10 bg-gold p-7 shadow-2xl"
            >
              <p className="font-serif text-5xl font-bold text-charcoal leading-none">15+</p>
              <p className="text-charcoal/75 text-xs tracking-widest uppercase font-sans font-medium mt-2">
                Jahre
                <br />
                Erfahrung
              </p>
            </motion.div>

            {/* Secondary image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-8 -left-6 lg:-left-8 w-36 h-36 overflow-hidden
                         border-4 border-charcoal shadow-xl hidden lg:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80"
                alt="Immobilien Expertise"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold" />
              <span className="section-label">Wer wir sind</span>
            </div>

            <h2 className="section-title-light mb-2">
              Über{' '}
              <span className="text-gold italic">uns</span>
            </h2>
            <h3 className="font-sans text-offwhite/40 text-lg font-light mb-8 tracking-wide">
              Maldonado-Winz Immobilien GmbH
            </h3>

            <p className="text-offwhite/55 font-sans text-base leading-relaxed mb-6">
              Seit 2008 sind wir der exklusive Ansprechpartner für anspruchsvolle Immobilientransaktionen
              in München und der umliegenden Region. Was uns antreibt, ist die Überzeugung, dass
              jede Immobilie eine Geschichte erzählt — und wir helfen Ihnen, die richtige zu schreiben.
            </p>

            <p className="text-offwhite/40 font-sans text-sm leading-relaxed mb-10">
              Unser Team aus zertifizierten Immobilienexperten verbindet tiefes Marktverständnis
              mit einem exklusiven Netzwerk aus Privatkunden, Investoren und institutionellen Käufern.
              Diskret. Professionell. Erfolgreich.
            </p>

            {/* Values */}
            <ul className="space-y-3 mb-10">
              {values.map((value, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3 text-offwhite/65 font-sans text-sm"
                >
                  <CheckCircle2 size={15} className="text-gold flex-shrink-0" />
                  {value}
                </motion.li>
              ))}
            </ul>

            {/* Milestones */}
            <div className="grid grid-cols-2 gap-4 mb-10 p-6 border border-warm-border">
              {milestones.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex items-start gap-3">
                    <Icon size={14} className="text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-offwhite/45 text-xs font-sans leading-relaxed">
                      {item.text}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="#kontakt" className="btn-primary">
                Kennenlernen
              </Link>
              <Link
                href="#leistungen"
                className="flex items-center gap-2 text-sm font-sans text-gold/70
                           hover:text-gold transition-colors self-center group"
              >
                Unsere Leistungen
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
