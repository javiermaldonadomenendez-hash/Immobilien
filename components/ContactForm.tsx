'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+49 89 1234 5678',
    href: 'tel:+4989123456789',
  },
  {
    icon: Mail,
    label: 'E-Mail',
    value: 'info@maldonado-winz.de',
    href: 'mailto:info@maldonado-winz.de',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Maximilianstraße 12, 80539 München',
    href: 'https://maps.google.com',
  },
]

export default function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Allgemeine Anfrage',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = `w-full bg-transparent border-b border-warm-border text-charcoal
                      placeholder-warm-gray/50 font-sans text-sm py-3 outline-none
                      focus:border-gold transition-colors duration-300`

  return (
    <section id="kontakt" className="py-28 lg:py-36 bg-offwhite-dark relative">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-warm-light" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="section-label">Wir sind für Sie da</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="section-title-dark">
              Kontakt{' '}
              <span className="text-gold italic">aufnehmen</span>
            </h2>
            <p className="text-warm-gray font-sans text-sm max-w-xs">
              Wir antworten innerhalb von 24 Stunden — in der Regel deutlich schneller.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-serif text-charcoal text-2xl font-semibold mb-3">
                Persönliche Beratung
              </h3>
              <p className="text-warm-gray font-sans text-sm leading-relaxed">
                Vereinbaren Sie ein unverbindliches Erstgespräch. Wir nehmen uns Zeit für Ihre
                individuellen Anforderungen.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 border border-warm-light flex items-center justify-center
                                   group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300
                                   flex-shrink-0">
                      <Icon size={15} className="text-warm-gray group-hover:text-gold transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest uppercase font-sans text-warm-gray/60 mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-sans text-sm text-charcoal group-hover:text-gold transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Office hours */}
            <div className="p-6 border border-warm-light bg-white">
              <p className="text-[10px] tracking-widest uppercase font-sans text-gold/70 mb-4">
                Öffnungszeiten
              </p>
              <div className="space-y-2 text-sm font-sans">
                <div className="flex justify-between text-charcoal/70">
                  <span>Mo – Fr</span>
                  <span className="text-charcoal font-medium">09:00 – 18:00</span>
                </div>
                <div className="flex justify-between text-charcoal/70">
                  <span>Samstag</span>
                  <span className="text-charcoal font-medium">10:00 – 14:00</span>
                </div>
                <div className="flex justify-between text-charcoal/50">
                  <span>Sonntag</span>
                  <span>nach Vereinbarung</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-16 h-16 border border-gold flex items-center justify-center mb-6">
                  <CheckCircle2 size={28} className="text-gold" />
                </div>
                <h3 className="font-serif text-charcoal text-2xl font-semibold mb-3">
                  Vielen Dank!
                </h3>
                <p className="text-warm-gray font-sans text-sm leading-relaxed max-w-sm">
                  Ihre Nachricht ist bei uns eingegangen. Wir melden uns innerhalb
                  von 24 Stunden bei Ihnen.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Subject selector */}
                <div className="flex flex-wrap gap-2 pb-4 border-b border-warm-light">
                  {['Allgemeine Anfrage', 'Objekt kaufen', 'Objekt vermieten', 'Bewertung'].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setForm({ ...form, subject: s })}
                      className={`px-4 py-1.5 text-xs font-sans tracking-wide transition-all duration-200
                                  border ${
                                    form.subject === s
                                      ? 'bg-charcoal text-offwhite border-charcoal'
                                      : 'text-warm-gray border-warm-light hover:border-charcoal/40'
                                  }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase font-sans
                                      text-warm-gray/60 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Ihr vollständiger Name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase font-sans
                                      text-warm-gray/60 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="ihre@email.de"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[10px] tracking-widest uppercase font-sans
                                    text-warm-gray/60 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+49 ..."
                    className={inputClass}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] tracking-widest uppercase font-sans
                                    text-warm-gray/60 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Privacy + Submit */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center
                                justify-between gap-4 pt-2">
                  <p className="text-warm-gray/50 text-xs font-sans">
                    Mit dem Absenden stimmen Sie unserer{' '}
                    <a href="#" className="underline hover:text-gold transition-colors">
                      Datenschutzerklärung
                    </a>{' '}
                    zu.
                  </p>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 bg-charcoal text-offwhite
                               px-8 py-4 text-xs font-sans font-semibold tracking-widest uppercase
                               hover:bg-gold hover:text-charcoal transition-all duration-300
                               group flex-shrink-0"
                  >
                    Nachricht senden
                    <Send
                      size={13}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                                 transition-transform duration-300"
                    />
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
