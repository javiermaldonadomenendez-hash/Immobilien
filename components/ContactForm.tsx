'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

type FormState = 'idle' | 'sending' | 'success'

const topics = [
  'Immobilie verkaufen',
  'Immobilie vermieten',
  'Immobilienbewertung',
  'Suchauftrag anlegen',
  'Allgemeine Anfrage',
]

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
    consent: false,
  })

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim())    e.name    = 'Bitte geben Sie Ihren Namen an.'
    if (!form.email.trim())   e.email   = 'Bitte geben Sie Ihre E-Mail-Adresse an.'
    if (!form.topic)          e.topic   = 'Bitte wählen Sie ein Thema aus.'
    if (!form.message.trim()) e.message = 'Bitte schreiben Sie uns eine kurze Nachricht.'
    if (!form.consent)        e.consent = 'Bitte bestätigen Sie die Datenschutzerklärung.'
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setState('sending')
    // Platzhalter für Backend-Integration
    await new Promise((r) => setTimeout(r, 1200))
    setState('success')
  }

  if (state === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-6 py-20 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="w-14 h-14 rounded-full bg-taupe/10 flex items-center justify-center">
          <Check size={24} className="text-taupe" aria-hidden="true" />
        </div>
        <div>
          <p className="font-display text-2xl text-brown mb-2">Vielen Dank!</p>
          <p className="font-sans text-grey-500 text-sm leading-relaxed max-w-xs">
            Wir melden uns innerhalb von 24 Stunden bei Ihnen. Für dringende Anliegen
            erreichen Sie uns direkt unter{' '}
            <a href="tel:+4920112345678" className="text-taupe hover:underline">
              +49 201 1234 5678
            </a>
            .
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Kontaktformular">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Name */}
        <div>
          <label htmlFor="cf-name" className="label text-grey-500 mb-2 block">
            Name *
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'cf-name-error' : undefined}
            placeholder="Ihr vollständiger Name"
            className={`w-full bg-white border px-4 py-3 font-sans text-sm text-ink placeholder:text-grey-300
                        focus:outline-none focus:border-taupe transition-colors ${
                          errors.name ? 'border-red-400' : 'border-grey-200'
                        }`}
          />
          {errors.name && (
            <p id="cf-name-error" role="alert" className="mt-1 font-sans text-xs text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        {/* E-Mail */}
        <div>
          <label htmlFor="cf-email" className="label text-grey-500 mb-2 block">
            E-Mail *
          </label>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'cf-email-error' : undefined}
            placeholder="ihre@email.de"
            className={`w-full bg-white border px-4 py-3 font-sans text-sm text-ink placeholder:text-grey-300
                        focus:outline-none focus:border-taupe transition-colors ${
                          errors.email ? 'border-red-400' : 'border-grey-200'
                        }`}
          />
          {errors.email && (
            <p id="cf-email-error" role="alert" className="mt-1 font-sans text-xs text-red-500">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Thema */}
      <div className="mb-4">
        <label htmlFor="cf-topic" className="label text-grey-500 mb-2 block">
          Thema *
        </label>
        <select
          id="cf-topic"
          value={form.topic}
          onChange={(e) => setForm({ ...form, topic: e.target.value })}
          aria-invalid={!!errors.topic}
          aria-describedby={errors.topic ? 'cf-topic-error' : undefined}
          className={`w-full bg-white border px-4 py-3 font-sans text-sm text-ink
                      focus:outline-none focus:border-taupe transition-colors ${
                        errors.topic ? 'border-red-400' : 'border-grey-200'
                      }`}
        >
          <option value="">Bitte wählen …</option>
          {topics.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors.topic && (
          <p id="cf-topic-error" role="alert" className="mt-1 font-sans text-xs text-red-500">
            {errors.topic}
          </p>
        )}
      </div>

      {/* Nachricht */}
      <div className="mb-5">
        <label htmlFor="cf-message" className="label text-grey-500 mb-2 block">
          Nachricht *
        </label>
        <textarea
          id="cf-message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'cf-message-error' : undefined}
          placeholder="Womit können wir Ihnen helfen?"
          className={`w-full bg-white border px-4 py-3 font-sans text-sm text-ink placeholder:text-grey-300
                      focus:outline-none focus:border-taupe transition-colors resize-none ${
                        errors.message ? 'border-red-400' : 'border-grey-200'
                      }`}
        />
        {errors.message && (
          <p id="cf-message-error" role="alert" className="mt-1 font-sans text-xs text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      {/* DSGVO-Checkbox */}
      <div className="mb-6">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => setForm({ ...form, consent: e.target.checked })}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? 'cf-consent-error' : undefined}
            className="mt-0.5 flex-shrink-0 accent-taupe"
          />
          <span className="font-sans text-xs text-grey-500 leading-relaxed">
            Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
            <a href="/datenschutz" className="text-taupe hover:underline">
              Datenschutzerklärung
            </a>{' '}
            zu. *
          </span>
        </label>
        {errors.consent && (
          <p id="cf-consent-error" role="alert" className="mt-1 font-sans text-xs text-red-500">
            {errors.consent}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={state === 'sending'}
        className="btn-gold group w-full justify-center disabled:opacity-60"
        aria-label="Anfrage absenden"
      >
        {state === 'sending' ? 'Wird gesendet …' : 'Jetzt Anfrage senden'}
        {state !== 'sending' && (
          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
        )}
      </button>
    </form>
  )
}
