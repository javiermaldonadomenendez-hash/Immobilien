'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowLeft, CheckCircle, Building2, Home, Landmark, type LucideIcon } from 'lucide-react'

// ── Types ────────────────────────────────────────────────────────────────────

type PropertyType = 'Wohnung' | 'Einfamilienhaus' | 'Mehrfamilienhaus' | ''

interface FormData {
  adresse: string
  objektart: PropertyType
  baujahr: string
  wohnflaeche: string
  grundstuecksflaeche: string
  zimmer: number
  etagen: number
  balkon: number
  gaestetoilette: number
  garage: number
  stellplaetze: number
  vorname: string
  nachname: string
  email: string
  telefon: string
  einwilligung: boolean
}

const initialData: FormData = {
  adresse: '',
  objektart: '',
  baujahr: '',
  wohnflaeche: '',
  grundstuecksflaeche: '',
  zimmer: 1,
  etagen: 1,
  balkon: 0,
  gaestetoilette: 0,
  garage: 0,
  stellplaetze: 0,
  vorname: '',
  nachname: '',
  email: '',
  telefon: '',
  einwilligung: false,
}

// ── Sub-components ───────────────────────────────────────────────────────────

function Counter({
  value,
  onChange,
  min = 0,
}: {
  value: number
  onChange: (v: number) => void
  min?: number
}) {
  return (
    <div className="flex items-stretch border border-grey-200 bg-white">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="w-11 flex items-center justify-center text-grey-500 hover:text-brown hover:bg-grey-50 transition-colors text-lg font-light"
      >
        −
      </button>
      <div className="flex-1 flex items-center justify-center font-sans text-sm text-brown py-3 border-x border-grey-200 min-w-[4rem]">
        {value}
      </div>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="w-11 flex items-center justify-center text-grey-500 hover:text-brown hover:bg-grey-50 transition-colors text-lg font-light"
      >
        +
      </button>
    </div>
  )
}

function TextInput({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  suffix,
  required,
}: {
  label: string
  placeholder: string
  value: string
  onChange: (v: string) => void
  type?: string
  suffix?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-sans text-sm text-brown font-medium">
        {label}{required && '*'}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full border border-grey-200 bg-white px-4 py-3 font-sans text-sm text-brown placeholder:text-grey-300 focus:outline-none focus:border-taupe transition-colors"
          required={required}
        />
        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 font-sans text-xs text-grey-400">
            {suffix}
          </span>
        )}
      </div>
    </div>
  )
}

// ── Step components ──────────────────────────────────────────────────────────

function StepAdresse({ data, setData }: { data: FormData; setData: (d: FormData) => void }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-sm text-brown font-medium">Wie viel ist Ihre Immobilie wert?</label>
        <input
          type="text"
          value={data.adresse}
          onChange={(e) => setData({ ...data, adresse: e.target.value })}
          placeholder="Adresse*"
          className="w-full border border-grey-200 bg-white px-4 py-3.5 font-sans text-sm text-brown placeholder:text-grey-300 focus:outline-none focus:border-taupe transition-colors"
          autoFocus
        />
      </div>
    </div>
  )
}

function StepObjektart({ data, setData }: { data: FormData; setData: (d: FormData) => void }) {
  const types: { label: PropertyType; Icon: LucideIcon }[] = [
    { label: 'Wohnung', Icon: Building2 },
    { label: 'Einfamilienhaus', Icon: Home },
    { label: 'Mehrfamilienhaus', Icon: Landmark },
  ]

  return (
    <div className="grid grid-cols-3 gap-4">
      {types.map(({ label, Icon }) => (
        <button
          key={label}
          type="button"
          onClick={() => setData({ ...data, objektart: label })}
          className={`flex flex-col items-center justify-center gap-4 py-8 px-4 border transition-colors duration-200 ${
            data.objektart === label
              ? 'border-taupe bg-taupe/10 text-brown'
              : 'border-grey-200 bg-white text-grey-500 hover:border-taupe/50 hover:text-brown'
          }`}
        >
          <Icon size={36} strokeWidth={1} />
          <span className="font-sans text-sm">{label}</span>
        </button>
      ))}
    </div>
  )
}

function StepEckdaten({ data, setData }: { data: FormData; setData: (d: FormData) => void }) {
  return (
    <div className="space-y-6">
      <TextInput
        label="Baujahr"
        placeholder="z. B. 1950"
        value={data.baujahr}
        onChange={(v) => setData({ ...data, baujahr: v })}
        required
      />

      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="Wohnfläche"
          placeholder="Wohnfläche"
          value={data.wohnflaeche}
          onChange={(v) => setData({ ...data, wohnflaeche: v })}
          suffix="m²"
          required
        />
        <TextInput
          label="Grundstücksfläche"
          placeholder="Grundstücksfläche"
          value={data.grundstuecksflaeche}
          onChange={(v) => setData({ ...data, grundstuecksflaeche: v })}
          suffix="m²"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-sm text-brown font-medium">Anzahl der Zimmer*</label>
          <Counter value={data.zimmer} onChange={(v) => setData({ ...data, zimmer: v })} min={1} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-sm text-brown font-medium">Anzahl Etagen*</label>
          <Counter value={data.etagen} onChange={(v) => setData({ ...data, etagen: v })} min={1} />
        </div>
      </div>
    </div>
  )
}

function StepDetails({ data, setData }: { data: FormData; setData: (d: FormData) => void }) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-sm text-brown font-medium">Balkon / Terrasse</label>
        <Counter value={data.balkon} onChange={(v) => setData({ ...data, balkon: v })} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-sm text-brown font-medium">Gästetoilette</label>
        <Counter value={data.gaestetoilette} onChange={(v) => setData({ ...data, gaestetoilette: v })} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-sm text-brown font-medium">Garage</label>
        <Counter value={data.garage} onChange={(v) => setData({ ...data, garage: v })} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-sm text-brown font-medium">Stellplätze</label>
        <Counter value={data.stellplaetze} onChange={(v) => setData({ ...data, stellplaetze: v })} />
      </div>
    </div>
  )
}

function StepKontakt({ data, setData }: { data: FormData; setData: (d: FormData) => void }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="Vorname"
          placeholder="Vorname"
          value={data.vorname}
          onChange={(v) => setData({ ...data, vorname: v })}
          required
        />
        <TextInput
          label="Nachname"
          placeholder="Nachname"
          value={data.nachname}
          onChange={(v) => setData({ ...data, nachname: v })}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="E-Mail"
          placeholder="E-Mail"
          value={data.email}
          onChange={(v) => setData({ ...data, email: v })}
          type="email"
          required
        />
        <TextInput
          label="Telefonnummer (Optional)"
          placeholder="Telefonnummer"
          value={data.telefon}
          onChange={(v) => setData({ ...data, telefon: v })}
          type="tel"
        />
      </div>
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          checked={data.einwilligung}
          onChange={(e) => setData({ ...data, einwilligung: e.target.checked })}
          className="mt-0.5 w-4 h-4 border border-grey-300 accent-taupe flex-shrink-0"
        />
        <span className="font-sans text-xs text-grey-500 leading-relaxed">
          Ich willige der Verarbeitung meiner Daten zum Zwecke der Auswertung ein. Die Maldonado &amp; Winz Immobilien GmbH darf mich per E-Mail oder Telefon für vertiefende Informationen kontaktieren.
        </span>
      </label>
    </div>
  )
}

// ── Step config ──────────────────────────────────────────────────────────────

const steps = [
  { id: 0, title: '', subtitle: '', sectionLabel: '' },
  { id: 1, title: 'Welche Objektart möchten Sie bewerten?', subtitle: '', sectionLabel: 'Objektart' },
  { id: 2, title: 'Welche Eckdaten hat Ihre Immobilie?', subtitle: '', sectionLabel: 'Eckdaten der Immobilie' },
  { id: 3, title: 'Weitere Details der Immobilie', subtitle: '', sectionLabel: 'Weitere Details der Immobilie' },
  { id: 4, title: 'Bitte geben Sie Ihre Kontaktinformationen an', subtitle: '', sectionLabel: 'Bewertung starten' },
]

// ── Main component ───────────────────────────────────────────────────────────

interface Props {
  open: boolean
  onClose: () => void
}

export default function ImmobilienbewertungWizard({ open, onClose }: Props) {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormData>(initialData)
  const [submitted, setSubmitted] = useState(false)

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Reset on close
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setStep(0)
        setData(initialData)
        setSubmitted(false)
      }, 350)
    }
  }, [open])

  const handleClose = useCallback(() => onClose(), [onClose])

  const canProceed = () => {
    if (step === 0) return data.adresse.trim().length > 0
    if (step === 1) return data.objektart !== ''
    if (step === 2) return data.baujahr.trim() && data.wohnflaeche.trim() && data.grundstuecksflaeche.trim()
    if (step === 3) return true
    if (step === 4) return data.vorname.trim() && data.nachname.trim() && data.email.trim() && data.einwilligung
    return false
  }

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
    else handleSubmit()
  }

  const handleSubmit = () => {
    // In production: send data to backend/CRM
    console.log('Immobilienbewertung submitted:', data)
    setSubmitted(true)
  }

  const progress = step === 0 ? 0 : (step / 4) * 100

  const currentStepConfig = steps[step] ?? steps[0]

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-brown/40" onClick={handleClose} />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl bg-sand shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Progress bar */}
            <div className="h-0.5 bg-grey-200 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-brown"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Section label */}
            {step > 0 && currentStepConfig.sectionLabel && (
              <div className="px-8 pt-5 pb-0">
                <p className="font-sans text-xs uppercase tracking-widest text-grey-400">
                  {currentStepConfig.sectionLabel}
                </p>
              </div>
            )}

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-grey-400 hover:text-brown transition-colors p-2"
              aria-label="Schließen"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            {/* Content */}
            <div className="px-8 py-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center text-center py-8 gap-5"
                >
                  <CheckCircle size={48} strokeWidth={1} className="text-taupe" />
                  <div>
                    <p className="label text-taupe mb-2">Online Immobilie bewerten</p>
                    <h2 className="font-display text-3xl font-light text-brown mb-4">
                      Vielen Dank, {data.vorname}!
                    </h2>
                    <p className="font-sans text-sm text-grey-500 max-w-sm leading-relaxed">
                      Wir haben Ihre Anfrage erhalten und werden uns in Kürze bei Ihnen melden,
                      um eine fundierte Bewertung Ihrer Immobilie zu erstellen.
                    </p>
                  </div>
                  <button onClick={handleClose} className="btn-gold mt-4">
                    Schließen
                  </button>
                </motion.div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    {/* Header */}
                    <div className="mb-8 text-center">
                      <p className="label text-taupe mb-3">Online Immobilie bewerten</p>
                      {step === 0 ? null : (
                        <h2 className="font-display text-[clamp(1.5rem,4vw,2.25rem)] font-light text-brown leading-tight">
                          {currentStepConfig.title}
                        </h2>
                      )}
                      {step === 0 && (
                        <h2 className="font-display text-[clamp(1.5rem,4vw,2.25rem)] font-light text-brown leading-tight sr-only">
                          Online Immobilie bewerten
                        </h2>
                      )}
                    </div>

                    {/* Step content */}
                    {step === 0 && <StepAdresse data={data} setData={setData} />}
                    {step === 1 && <StepObjektart data={data} setData={setData} />}
                    {step === 2 && <StepEckdaten data={data} setData={setData} />}
                    {step === 3 && <StepDetails data={data} setData={setData} />}
                    {step === 4 && <StepKontakt data={data} setData={setData} />}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {!submitted && (
              <div className="px-8 pb-8 flex items-center justify-between border-t border-grey-200 pt-5">
                {/* Back */}
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="w-10 h-10 flex items-center justify-center border border-grey-200 text-grey-500 hover:text-brown hover:border-brown transition-colors"
                    aria-label="Zurück"
                  >
                    <ArrowLeft size={16} strokeWidth={1.5} />
                  </button>
                ) : (
                  <div />
                )}

                {/* Trust badge */}
                {step > 0 && (
                  <p className="font-sans text-xs text-grey-400 flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full border border-grey-300 flex items-center justify-center text-[9px]">✓</span>
                    Kostenlos &amp; unverbindlich
                  </p>
                )}

                {/* Next / Submit */}
                <button
                  type="button"
                  onClick={step === 0 ? handleNext : handleNext}
                  disabled={!canProceed()}
                  className={`px-6 py-2.5 font-sans text-sm font-medium transition-colors duration-200 ${
                    step === 0
                      ? 'bg-taupe text-sand hover:bg-taupe-dark disabled:opacity-40 disabled:cursor-not-allowed'
                      : 'bg-brown text-sand hover:bg-brown-800 disabled:opacity-40 disabled:cursor-not-allowed'
                  }`}
                >
                  {step === 0 ? 'Bewertung starten' : step === 4 ? 'Absenden' : 'Weiter'}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
