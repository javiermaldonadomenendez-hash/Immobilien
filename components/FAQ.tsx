'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Wie läuft ein Immobilienverkauf mit Maldonado Winz ab?',
    a: 'Der Prozess beginnt mit einer kostenlosen Wertermittlung vor Ort. Anschließend erarbeiten wir gemeinsam eine Vermarktungsstrategie: professionelle Aufbereitung, hochwertiges Exposé, Ansprache unseres Käufernetzwerks. Wir koordinieren Besichtigungen, führen Preisverhandlungen in Ihrem Sinne und begleiten Sie bis zur notariellen Beurkundung und finalen Übergabe. Insgesamt sieben klar definierte Schritte — mit Ihnen als informierten Auftraggeber in jeder Phase.',
  },
  {
    q: 'Wie wird der Wert meiner Immobilie ermittelt?',
    a: 'Die professionelle Marktwertermittlung basiert auf drei Säulen: der aktuellen Datenlage aus vergleichbaren Transaktionen in Ihrer Mikrolage, einer detaillierten Analyse von Baujahr, Zustand und Ausstattung Ihres Objekts sowie unserer langjährigen Marktkenntnis in München. Das Ergebnis ist kein Daumenrichtwert, sondern eine fundierte Einschätzung, die Ihnen Planungssicherheit gibt.',
  },
  {
    q: 'Wie lange dauert ein typischer Verkauf?',
    a: 'Das hängt von Objektart, Lage und Marktsituation ab. In der Praxis dauert die aktive Vermarktungsphase bei gut aufgestellten Objekten zwischen sechs und zwölf Wochen. Hinzu kommt die Zeit bis zur notariellen Beurkundung. Wir setzen auf Qualität statt Tempo: lieber den richtigen Käufer als den ersten.',
  },
  {
    q: 'Welche Kosten entstehen für mich als Eigentümer?',
    a: 'Unsere Leistungen als Makler werden ausschließlich im Erfolgsfall vergütet. Die Maklerprovision wird in Deutschland seit 2020 in der Regel hälftig zwischen Verkäufer und Käufer geteilt. Vorleistungen wie Bewertung, Exposé-Erstellung und Beratungsgespräche sind kostenlos und unverbindlich. Genaue Konditionen besprechen wir transparent im Erstgespräch.',
  },
  {
    q: 'Warum einen Makler beauftragen statt privat verkaufen?',
    a: 'Ein privater Verkauf erscheint zunächst günstiger. In der Praxis zeigt sich jedoch: Ohne Markterfahrung werden Objekte häufig falsch bewertet, der falsche Käuferkreis angesprochen und Verhandlungsposition verloren. Eigentümer, die mit uns verkaufen, erzielen im Durchschnitt einen spürbar höheren Erlös — die Provision ist dabei meist mehr als gedeckt. Hinzu kommen Zeit, Nerven und rechtliche Sicherheit.',
  },
  {
    q: 'Was unterscheidet Maldonado Winz von anderen Maklern?',
    a: 'Wir sind kein Massenmakler. Unser Boutique-Ansatz bedeutet: persönliche Betreuung durch die Partner selbst, keine Weitergabe an Junior-Mitarbeiter. Unsere Kombination aus Immobilienexpertise und finanziellem Hintergrund ermöglicht ganzheitliche Beratung. Und unser Off-Market-Netzwerk eröffnet Zugänge, die über klassische Portale nicht erreichbar sind.',
  },
  {
    q: 'Bieten Sie auch Immobilienvermietung an?',
    a: 'Ja. Unser Vermietungsservice — die „Maldonado Winz Vermietungsmanufaktur" — übernimmt den gesamten Prozess: von der Marktpreisermittlung über die Mieterauswahl und Bonitätsprüfung bis zur Erstellung des rechtssicheren Mietvertrags. Ziel: der richtige Mieter, der langfristig passt, mit minimalen Risiken für Sie als Eigentümer.',
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" ref={ref} className="bg-cream border-t border-grey-200">

      {/* ── Header ─────────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 py-16 border-b border-grey-200
                      flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-gold" />
            <p className="label text-gold">Häufige Fragen</p>
          </div>
          <h2 className="display-lg text-navy">FAQ</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-sans text-base text-grey-500 max-w-sm leading-relaxed"
        >
          Antworten auf die wichtigsten Fragen rund um Verkauf, Vermietung und Bewertung.
        </motion.p>
      </div>

      {/* ── Accordion ──────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 py-8">
        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="border-b border-grey-200 last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="font-sans text-[15px] font-medium text-navy pr-8 group-hover:text-gold
                                 transition-colors duration-200 leading-snug">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 text-grey-300 group-hover:text-gold transition-colors duration-200">
                  {openIndex === i ? (
                    <Minus size={16} strokeWidth={1.5} />
                  ) : (
                    <Plus size={16} strokeWidth={1.5} />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-[15px] text-grey-500 leading-relaxed pb-6 pr-8">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
