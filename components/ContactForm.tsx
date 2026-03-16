'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

const topics = ['Allgemeine Anfrage', 'Objekt kaufen', 'Objekt mieten', 'Immobilie bewerten', 'Off-Market']

const info = [
  { label: 'Telefon',  value: '+49 89 1234 5678' },
  { label: 'E-Mail',   value: 'info@maldonado-winz.de' },
  { label: 'Adresse',  value: 'Maximilianstraße 12\n80539 München' },
  { label: 'Bürozeiten', value: 'Mo–Fr 09–18 Uhr\nSa 10–14 Uhr' },
]

export default function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [done, setDone] = useState(false)
  const [topic, setTopic] = useState(topics[0])
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const fieldClass = `w-full bg-transparent border-b border-grey-200 focus:border-ink
                      font-sans text-sm text-ink placeholder-grey-300 py-3 outline-none
                      transition-colors duration-200`

  return (
    <section id="kontakt" className="bg-paper border-t border-grey-200" ref={ref}>

      {/* ── Section header ───────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 border-b border-grey-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6"
        >
          <div>
            <p className="label mb-4">Wir sind für Sie da</p>
            <h2 className="display-lg text-ink">Kontakt</h2>
          </div>
          <p className="font-sans text-sm text-grey-400 max-w-xs leading-relaxed">
            Antwort innerhalb von 24 Stunden — meist deutlich schneller.
          </p>
        </motion.div>
      </div>

      {/* ── Body ─────────────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-grey-200">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 py-14 pr-0 lg:pr-12 space-y-10"
          >
            {info.map((item, i) => (
              <div key={i}>
                <p className="label mb-2">{item.label}</p>
                <p className="font-sans text-sm text-ink whitespace-pre-line leading-relaxed">
                  {item.value}
                </p>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="relative h-40 bg-grey-100 border border-grey-200 overflow-hidden">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(10,10,10,0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(10,10,10,0.15) 1px, transparent 1px)
                  `,
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <div className="w-2 h-2 bg-ink" />
                <p className="label text-grey-400">Maximilianstraße 12</p>
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
                <div className="w-12 h-12 border border-grey-200 flex items-center justify-center">
                  <Check size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-4xl text-ink uppercase mb-2">Danke.</h3>
                  <p className="font-sans text-sm text-grey-400 leading-relaxed">
                    Ihre Nachricht ist eingegangen — wir melden uns in Kürze.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setDone(true) }}
                className="space-y-10"
              >
                {/* Topic selector */}
                <div>
                  <p className="label mb-4">Ihr Anliegen</p>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTopic(t)}
                        className={`px-4 py-2 label transition-colors duration-200 border ${
                          topic === t
                            ? 'bg-ink text-paper border-ink'
                            : 'text-grey-400 border-grey-200 hover:border-grey-400 hover:text-ink'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div>
                    <label className="label block mb-2">Name *</label>
                    <input
                      type="text" required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Vollständiger Name"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className="label block mb-2">E-Mail *</label>
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
                  <label className="label block mb-2">Telefon</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+49 ..."
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className="label block mb-2">Nachricht *</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    rows={4}
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <p className="font-sans text-[11px] text-grey-300">
                    Mit Absenden stimmen Sie der{' '}
                    <a href="#" className="underline hover:text-ink transition-colors">
                      Datenschutzerklärung
                    </a>{' '}
                    zu.
                  </p>
                  <button type="submit" className="btn-ink group">
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
