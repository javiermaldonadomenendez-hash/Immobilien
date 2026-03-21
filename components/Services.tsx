'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'Verkaufen',
    tag: 'Verkauf & Transaktion',
    desc: 'Mit datengestützter Preisstrategie, professioneller Aufbereitung und einem exklusiven Käufernetzwerk erzielen wir für Ihre Immobilie den bestmöglichen Erlös — diskret, strukturiert und verbindlich.',
    cta: 'Mehr erfahren',
    href: '/leistungen',
    accent: true,
  },
  {
    num: '02',
    title: 'Vermieten',
    tag: 'Vermietungsmanufaktur',
    desc: 'Wir übernehmen den gesamten Vermietungsprozess: von der Vermarktung über die Mieterauswahl bis zum rechtssicheren Mietvertrag. Entlastung pur — mit passendem Mieter als Ergebnis.',
    cta: 'Mehr erfahren',
    href: '/leistungen',
    accent: false,
  },
  {
    num: '03',
    title: 'Bewertung',
    tag: 'Marktwertermittlung',
    desc: 'Präzise Wertermittlung auf Basis aktueller Marktdaten, Lagebewertung und Vergleichsobjekten. Kostenlos und unverbindlich — als solide Grundlage für alle weiteren Entscheidungen.',
    cta: 'Wert ermitteln',
    href: '/leistungen',
    accent: false,
  },
  {
    num: '04',
    title: 'Suchkunden',
    tag: 'Käufer & Mieter',
    desc: 'Hinterlegen Sie Ihr Suchprofil und erhalten Sie frühzeitigen Zugang zu passenden Objekten — inklusive exklusiver Off-Market-Angebote, die nie öffentlich inseriert werden.',
    cta: 'Suchauftrag anlegen',
    href: '/leistungen',
    accent: false,
  },
]

export default function Services({ onBewertungClick }: { onBewertungClick?: () => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="leistungen" ref={ref} className="bg-sand border-t border-grey-200">

      {/* ── Section header ─────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 py-16 border-b border-grey-200
                      flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-taupe" />
            <p className="label text-taupe">Was wir für Sie tun</p>
          </div>
          <h2 className="display-lg text-brown">Unsere Leistungen</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-sans text-base text-grey-500 max-w-sm leading-relaxed"
        >
          Vier Kernleistungen — vollständig auf Ihre Immobilie und Ihre Ziele abgestimmt.
        </motion.p>
      </div>

      {/* ── Service cards ─────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-grey-200">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {s.num === '03' && onBewertungClick ? (
              <button
                onClick={onBewertungClick}
                className={`group block w-full text-left py-12 px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden hover:bg-brown`}
              >
                <div className="absolute -bottom-6 -right-2 font-display text-[8rem] leading-none pointer-events-none select-none transition-colors duration-300 text-grey-100 group-hover:text-white/5">
                  {s.num}
                </div>
                <div className="relative z-10">
                  <p className="label mb-6 transition-colors duration-300 text-grey-400 group-hover:text-taupe">{s.tag}</p>
                  <div className="w-8 h-0.5 mb-6 transition-colors duration-300 bg-grey-200 group-hover:bg-taupe" />
                  <h3 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-none font-light mb-6 transition-colors duration-300 text-brown group-hover:text-sand">{s.title}</h3>
                  <p className="font-sans text-[15px] leading-relaxed mb-10 transition-colors duration-300 text-grey-500 group-hover:text-sand/70">{s.desc}</p>
                  <div className="flex items-center gap-2 label transition-colors duration-300 text-grey-400 group-hover:text-taupe">
                    {s.cta}
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </button>
              ) : (
              <Link
                href={s.href}
                className={`group block py-12 px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden
                            ${s.accent ? 'bg-brown hover:bg-brown-800' : 'hover:bg-brown'}`}
              >
                {/* Background number */}
                <div className={`absolute -bottom-6 -right-2 font-display text-[8rem] leading-none
                                pointer-events-none select-none transition-colors duration-300
                                ${s.accent ? 'text-white/5 group-hover:text-white/8' : 'text-grey-100 group-hover:text-white/5'}`}>
                  {s.num}
                </div>

                <div className="relative z-10">
                  {/* Tag */}
                  <p className={`label mb-6 transition-colors duration-300
                                 ${s.accent ? 'text-taupe' : 'text-grey-400 group-hover:text-taupe'}`}>
                    {s.tag}
                  </p>

                  {/* Gold accent line */}
                  <div className={`w-8 h-0.5 mb-6 transition-colors duration-300
                                   ${s.accent ? 'bg-taupe' : 'bg-grey-200 group-hover:bg-taupe'}`} />

                  {/* Title */}
                  <h3 className={`font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-none font-light mb-6
                                  transition-colors duration-300
                                  ${s.accent ? 'text-sand' : 'text-brown group-hover:text-sand'}`}>
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className={`font-sans text-[15px] leading-relaxed mb-10 transition-colors duration-300
                                 ${s.accent ? 'text-sand/70' : 'text-grey-500 group-hover:text-sand/70'}`}>
                    {s.desc}
                  </p>

                  {/* CTA */}
                  <div className={`flex items-center gap-2 label transition-colors duration-300
                                   ${s.accent ? 'text-taupe' : 'text-grey-400 group-hover:text-taupe'}`}>
                    {s.cta}
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="border-t border-grey-200" />
    </section>
  )
}
