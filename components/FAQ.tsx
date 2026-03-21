'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { JsonLd } from '@/components/JsonLd'

const faqs = [
  {
    q: 'Was kostet eine Immobilienbewertung bei Maldonado & Winz?',
    a: 'Unsere Immobilienbewertung ist für Sie vollkommen kostenfrei und unverbindlich. Wir analysieren Ihre Immobilie anhand aktueller Marktdaten und geben Ihnen eine realistische Einschätzung des erzielbaren Verkaufspreises.',
  },
  {
    q: 'Wie lange dauert es, eine Immobilie in Essen zu verkaufen?',
    a: 'Gut vorbereitete Immobilien verkaufen wir im Durchschnitt innerhalb von 4–8 Wochen. Der genaue Zeitraum hängt vom Objekt, dem Preis und der aktuellen Nachfrage ab. Durch unseren Suchkundenstamm können wir in vielen Fällen deutlich schneller passende Käufer finden.',
  },
  {
    q: 'Arbeiten Sie diskret — auch ohne öffentliche Vermarktung?',
    a: 'Ja. Viele unserer Kunden möchten keine öffentliche Ausschreibung. In diesen Fällen vermitteln wir ausschließlich über unseren vorqualifizierten Suchkundenstamm — ohne Zeitungsinserate, ohne Plakate, ohne Online-Portale.',
  },
  {
    q: 'Welche Immobilien vermitteln Sie in Essen?',
    a: 'Wir sind auf hochwertige Wohnimmobilien spezialisiert: Eigentumswohnungen, Einfamilienhäuser, Villen und Mehrfamilienhäuser in Essen und dem Ruhrgebiet — insbesondere in Rüttenscheid, Bredeney, Werden, Kettwig und Stadtmitte.',
  },
  {
    q: 'Was ist der Unterschied zu einem normalen Makler?',
    a: 'Als Boutique-Büro betreuen wir bewusst nur wenige Objekte gleichzeitig. Das bedeutet: persönliche Ansprechpartner statt Call-Center, individuelle Vermarktungsstrategien statt Masseninserate und echte Marktkenntnisse statt oberflächlicher Beratung.',
  },
  {
    q: 'Wann ist der beste Zeitpunkt, meine Immobilie zu verkaufen?',
    a: 'Den "perfekten" Zeitpunkt gibt es selten. Entscheidend ist eine gute Vorbereitung: professionelle Fotos, ein marktgerechter Preis und die richtige Zielgruppe. In einem persönlichen Gespräch analysieren wir gemeinsam Ihre Situation und empfehlen die beste Strategie.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-sand py-24 lg:py-32" aria-labelledby="faq-heading">
      <JsonLd data={faqSchema} />

      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="mb-14 text-center">
            <p className="label-brown mb-4">Häufige Fragen</p>
            <h2 id="faq-heading" className="display-sm text-brown">
              Ihre Fragen —<br />unsere Antworten
            </h2>
          </div>

          {/* Akkordeon */}
          <div className="divide-y divide-grey-200">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left
                             font-sans text-base font-medium text-brown hover:text-taupe
                             transition-colors duration-200"
                >
                  <span>{faq.q}</span>
                  <Plus
                    size={16}
                    strokeWidth={1.5}
                    className={`flex-shrink-0 text-taupe transition-transform duration-300 ${
                      open === i ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-grey-600 leading-relaxed pb-6 pr-8">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
