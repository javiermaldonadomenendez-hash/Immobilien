'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, Check, Phone, Mail, MapPin, Clock } from 'lucide-react'

const topics = [
  'Immobilie verkaufen',
  'Immobilie vermieten',
  'Immobilie kaufen',
  'Wert ermitteln',
  'Off-Market anfragen',
  'Allgemeine Anfrage',
]

const info = [
  { icon: Phone,  label: 'Telefon',     value: '+49 89 1234 5678',              href: 'tel:+498912345678' },
  { icon: Mail,   label: 'E-Mail',      value: 'info@maldonado-winz.de',        href: 'mailto:info@maldonado-winz.de' },
  { icon: MapPin, label: 'Adresse',     value: 'Maximilianstraße 12\n80539 München', href: null },
  { icon: Clock,  label: 'Bürozeiten',  value: 'Mo–Fr 09–18 Uhr\nSa 10–14 Uhr', href: null },
]

export default function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [done, setDone] = useState(false)
  const [topic, setTopic] = useState(topics[0])
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const fieldClass = `w-full bg-transparent border-b border-grey-200 focus:border-navy
                      font-sans text-[15px] text-navy placeholder-grey-300 py-3 outline-none
                      transition-colors duration-200`

  return (
    <section id="kontakt" className="bg-cream border-t border-grey-200" ref={ref}>

      {/* ── Section header ─────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 py-16 border-b border-grey-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-gold" />
              <p className="label text-gold">Wir sind für Sie da</p>
            </div>
            <h2 className="display-lg text-navy">Kontakt</h2>
          </div>
          <p className="font-sans text-base text-grey-500 max-w-xs leading-relaxed">
            Antwort innerhalb von 24 Stunden — meist noch am selben Tag.
          </p>
        </motion.div>
      </div>

      {/* ── Body ─────────────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-grey-200">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 py-14 pr-0 lg:pr-12 space-y-8"
          >
            {info.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-gold/30 flex-shrink-0 mt-0.5">
                    <Icon size={14} strokeWidth={1.5} className="text-gold" />
                  </div>
                  <div>
                    <p className="label text-gold mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-sans text-[15px] text-navy whitespace-pre-line leading-relaxed
                                   hover:text-gold transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-sans text-[15px] text-navy whitespace-pre-line leading-relaxed">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}

            {/* Map placeholder */}
            <div className="relative h-40 bg-grey-100 border border-grey-200 overflow-hidden mt-4">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(28,43,74,0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(28,43,74,0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <div className="w-2 h-2 bg-gold" />
                <p className="label text-navy/50">Maximilianstraße 12, München</p>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 py-14 pl-0 lg:pl-12"
          >
            {done ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-start gap-6 py-10"
              >
                <div className="w-12 h-12 border-2 border-gold flex items-center justify-center">
                  <Check size={18} strokeWidth={1.5} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-4xl font-light text-navy mb-2">Vielen Dank.</h3>
                  <p className="font-sans text-[15px] text-grey-500 leading-relaxed">
                    Ihre Nachricht ist bei uns eingegangen. Wir melden uns schnellstmöglich bei Ihnen.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setDone(true) }}
                className="space-y-8"
              >
                {/* Topic selector */}
                <div>
                  <p className="label text-gold mb-4">Ihr Anliegen</p>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTopic(t)}
                        className={`px-4 py-2.5 label transition-colors duration-200 border min-h-[44px] ${
                          topic === t
                            ? 'bg-navy text-cream border-navy'
                            : 'text-grey-400 border-grey-200 hover:border-navy hover:text-navy'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="label text-gold block mb-2">Name *</label>
                    <input
                      type="text" required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Vollständiger Name"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className="label text-gold block mb-2">E-Mail *</label>
                    <input
                      type="email" required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="ihre@email.de"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="label text-gold block mb-2">Telefon (optional)</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+49 ..."
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className="label text-gold block mb-2">Nachricht *</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Beschreiben Sie Ihr Anliegen kurz..."
                    rows={4}
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <p className="font-sans text-[11px] text-grey-300">
                    Mit Absenden stimmen Sie der{' '}
                    <a href="#" className="underline hover:text-navy transition-colors">
                      Datenschutzerklärung
                    </a>{' '}
                    zu.
                  </p>
                  <button type="submit" className="btn-primary group">
                    Nachricht senden
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
