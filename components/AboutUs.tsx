'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const partners = [
  {
    name: 'Javier Maldonado',
    role: 'Geschäftsführender Partner',
    focus: 'Vermarktung · Verhandlung · Bewertung',
    bio: 'Mit über zwölf Jahren Erfahrung im Essener Premium-Immobilienmarkt begleitet Javier Maldonado seine Mandanten von der ersten Einschätzung bis zur finalen Übergabe. Sein Hintergrund in der Finanzberatung schärft seinen Blick für wirtschaftliche Zusammenhänge — zum klaren Vorteil seiner Verkäufer.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=85',
  },
  {
    name: 'Thomas Winz',
    role: 'Partner & Transaktionsberatung',
    focus: 'Projektentwicklung · Recht · Off-Market',
    bio: 'Thomas Winz verbindet juristisches Fachwissen mit langjähriger Praxis in der Immobilientransaktion. Ob diskreter Off-Market-Verkauf, komplexe Eigentümerstrukturen oder Projektentwicklung: er analysiert, strukturiert und schützt die Interessen seiner Mandanten mit ruhiger Hand.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85',
  },
]

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="ueber-uns" ref={ref} className="bg-sand border-t border-grey-200 overflow-hidden">

      {/* ── Philosophy block ────────────────────── */}
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="px-5 lg:px-12 py-20 flex flex-col justify-between border-r border-grey-200"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-px bg-taupe" />
                <p className="label text-taupe">Über uns</p>
              </div>

              <div className="overflow-hidden mb-2">
                <motion.div
                  initial={{ y: '100%' }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h2 className="font-display text-[clamp(4rem,9vw,8rem)] leading-[0.9] font-light text-brown">
                    Philosophie
                  </h2>
                </motion.div>
              </div>
              <div className="overflow-hidden mb-12">
                <motion.div
                  initial={{ y: '100%' }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ delay: 0.06, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h2 className="font-display text-[clamp(4rem,9vw,8rem)] leading-[0.9] font-light text-brown/40">
                    & Ansatz
                  </h2>
                </motion.div>
              </div>

              <p className="font-sans text-base text-grey-600 leading-relaxed max-w-sm mb-6">
                Maldonado Winz Immobilien wurde gegründet aus der Überzeugung, dass gute Immobilienberatung mehr ist als Objekte zu vermitteln. Es geht darum, Menschen in bedeutsamen Lebensmomenten richtig zu begleiten — ehrlich, kompetent und auf Augenhöhe.
              </p>
              <p className="font-sans text-[15px] text-grey-500 leading-relaxed max-w-sm mb-6">
                Unser Team vereint Immobilienexpertise mit einem tiefen Verständnis für Finanzen, Recht und persönliche Lebensplanung. Diese Kombination macht uns zu mehr als einem Makler — wir sind Ihr strategischer Partner beim Immobilienthema.
              </p>
              <p className="font-sans text-[15px] text-grey-500 leading-relaxed max-w-sm mb-12">
                Verbindlichkeit, Transparenz und langfristige Beziehungen sind keine Versprechen bei uns — es ist unsere Arbeitsweise.
              </p>

              <Link href="#kontakt" className="btn-outline group">
                Kennenlernen
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Values row */}
            <div className="grid grid-cols-2 gap-px bg-grey-200 mt-16 border border-grey-200">
              {[
                { value: 'Transparenz',   sub: 'Kein Kleingedrucktes' },
                { value: 'Verbindlichkeit', sub: 'Worte mit Gewicht' },
                { value: 'Ehrlichkeit',   sub: 'Auch wenn es unbequem ist' },
                { value: 'Diskretion',    sub: 'Immer und in jeder Phase' },
              ].map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
                  className="bg-sand p-6 group hover:bg-brown transition-colors duration-300 cursor-default"
                >
                  <p className="font-display text-xl font-medium text-brown group-hover:text-sand
                                transition-colors duration-300 leading-tight mb-1">
                    {v.value}
                  </p>
                  <p className="label text-grey-400 group-hover:text-taupe transition-colors duration-300">
                    {v.sub}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[500px] lg:min-h-0 overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=85"
              alt="Maldonado Winz Immobilien Büro"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-brown/20" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-sand/95 p-6 border-l-4 border-taupe">
                <p className="label text-taupe mb-1">Unser Büro</p>
                <p className="font-sans text-sm text-brown font-medium">
                  Rüttenscheider Str. 52, 45130 Essen
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Team section ───────────────────────── */}
      <div className="border-t border-grey-200">
        <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 py-16 border-b border-grey-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-taupe" />
            <p className="label text-taupe">Die Partner</p>
          </div>
          <h2 className="display-md text-brown">Team Maldonado Winz</h2>
        </div>
        <div className="max-w-screen-2xl mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-grey-200">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
                className="py-14 px-0 lg:px-8 first:lg:pl-0 last:lg:pr-0 flex flex-col sm:flex-row gap-8"
              >
                {/* Portrait */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover grayscale"
                    sizes="128px"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-taupe" />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <p className="label text-taupe mb-2">{partner.role}</p>
                  <h3 className="font-display text-3xl font-light text-brown mb-1">{partner.name}</h3>
                  <p className="font-sans text-[11px] uppercase tracking-widest text-grey-400 mb-4">
                    {partner.focus}
                  </p>
                  <p className="font-sans text-[15px] text-grey-500 leading-relaxed">
                    {partner.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
