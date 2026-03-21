import type { Metadata } from 'next'
import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import { WizardButton } from '@/components/WizardTrigger'

export const metadata: Metadata = {
  title: 'Leistungen',
  description:
    'Professionelle Immobilienvermittlung in Essen: Verkaufen, Vermieten, Bewertung und Suchkunden. Maldonado & Winz — Ihr Boutique-Makler im Ruhrgebiet.',
  alternates: { canonical: 'https://maldonado-winz.de/leistungen' },
  openGraph: {
    title: 'Leistungen | Maldonado & Winz Immobilien',
    description: 'Immobilie verkaufen, vermieten oder bewerten in Essen. Professionell, diskret, auf Augenhöhe.',
  },
}


const services = [
  {
    id: 'verkaufen',
    num: '01',
    title: 'Immobilie verkaufen — zum bestmöglichen Preis',
    tag: 'Verkauf & Transaktion',
    intro:
      'Sie möchten Ihre Immobilie verkaufen und dabei weder Zeit noch Geld verlieren? Wir begleiten Sie durch jeden Schritt — von der ersten Werteinschätzung bis zur notariellen Beurkundung.',
    bullets: [
      'Kostenlose Marktpreisanalyse und Verkaufsstrategie',
      'Professionelle Fotografie und 3D-Rundgang',
      'Zugang zu unserem vorqualifizierten Käufernetzwerk',
      'Diskrete Vermarktung ohne öffentliche Ausschreibung (auf Wunsch)',
      'Komplette Kaufabwicklung und Notarkoordination',
      'Durchschnittliche Verkaufsdauer: 4–8 Wochen',
    ],
    result:
      'Das Ergebnis: Sie erzielen den maximalen Erlös — ohne Stress, ohne unqualifizierte Besichtigungen, ohne böse Überraschungen.',
    cta: 'Verkaufsgespräch anfragen',
    ctaHref: '/kontakt',
  },
  {
    id: 'vermieten',
    num: '02',
    title: 'Immobilie vermieten — mit dem richtigen Mieter',
    tag: 'Vermietungsmanufaktur',
    intro:
      'Ein falscher Mieter kostet Sie Zeit, Nerven und Geld. Wir übernehmen den gesamten Vermietungsprozess und übergeben Ihnen ausschließlich sorgfältig geprüfte Mietinteressenten.',
    bullets: [
      'Vollständige Vermarktung auf allen relevanten Portalen',
      'Mieter-Bonitätsprüfung und Selbstauskunft',
      'Professionelle Besichtigungen in Ihrem Namen',
      'Rechtssichere Mietvertragsgestaltung',
      'Übergabe mit lückenlosem Protokoll',
      'Auf Wunsch: Verwaltung nach Vermietung',
    ],
    result:
      'Das Ergebnis: Ein zuverlässiger Mieter, ein rechtssicherer Vertrag und Entlastung pur — von Anfang an.',
    cta: 'Vermietungsanfrage stellen',
    ctaHref: '/kontakt',
  },
  {
    id: 'bewertung',
    num: '03',
    title: 'Immobilienbewertung — kostenlos und präzise',
    tag: 'Marktwertermittlung',
    intro:
      'Wissen Sie, was Ihre Immobilie heute wirklich wert ist? Viele Eigentümer verschenken Geld durch falsche Preiserwartungen — oder lassen sich von unseriösen Angeboten blenden.',
    bullets: [
      '100 % kostenlos und unverbindlich',
      'Bewertung auf Basis aktueller Marktdaten (Essen / Ruhrgebiet)',
      'Persönliche Vor-Ort-Analyse mit Lagebewertung',
      'Vergleich mit verkauften Objekten in Ihrer Umgebung',
      'Schriftliches Gutachten auf Anfrage',
      'Schnelle Online-Ersteinschätzung via Bewertungs-Wizard',
    ],
    result:
      'Das Ergebnis: Eine realistische Preisgrundlage — als solide Basis für alle weiteren Entscheidungen.',
    cta: 'Kostenlos bewerten lassen',
    ctaHref: null, // opens wizard
  },
  {
    id: 'suchkunden',
    num: '04',
    title: 'Suchauftrag — Traumimmobilie finden',
    tag: 'Käufer & Mieter',
    intro:
      'Sie suchen eine bestimmte Immobilie, finden aber nichts Passendes auf den Portalen? Das liegt oft daran, dass die besten Objekte nie öffentlich inseriert werden.',
    bullets: [
      'Aufnahme in unseren vorqualifizierten Suchkundenstamm',
      'Frühzeitiger Zugang zu Off-Market-Angeboten',
      'Persönliche Beratung zu Lage, Preis und Marktentwicklung',
      'Aktive Suche in unserem Netzwerk (Eigentümer, Verwalter, Notare)',
      'Keine Provision bei Kauf über unseren Suchauftrag*',
      '*gilt für Käufer unter bestimmten Bedingungen',
    ],
    result:
      'Das Ergebnis: Sie erfahren von passenden Immobilien, bevor sie auf dem Markt erscheinen — und sichern sich einen echten Wettbewerbsvorteil.',
    cta: 'Suchauftrag anlegen',
    ctaHref: '/kontakt',
  },
]

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brown pt-[76px]" aria-labelledby="leistungen-heading">
        <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 py-20 lg:py-28">
          <p className="label text-taupe mb-6">Was wir für Sie tun</p>
          <h1
            id="leistungen-heading"
            className="font-display text-[clamp(3rem,8vw,7rem)] font-light leading-[0.95] text-sand mb-8 max-w-2xl"
          >
            Vier Leistungen.<br />
            <span className="text-taupe">Ein Ziel.</span>
          </h1>
          <p className="font-sans text-sand/60 text-lg leading-relaxed max-w-lg">
            Ob Verkauf, Vermietung, Bewertung oder Suchauftrag — wir begleiten Sie
            persönlich und professionell durch jeden Schritt.
          </p>
        </div>
      </section>

      {/* Services */}
      <div className="bg-sand">
        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`border-b border-grey-200 ${i % 2 === 1 ? 'bg-grey-50' : 'bg-sand'}`}
            aria-labelledby={`service-${s.id}-heading`}
          >
            <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 py-16 lg:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                {/* Left */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="font-display text-5xl font-light text-taupe/40">{s.num}</span>
                    <div>
                      <p className="label text-taupe">{s.tag}</p>
                    </div>
                  </div>
                  {/* H2 nach web-copywriting Skill: [Leistungsname] — [Kurznutzen] */}
                  <h2
                    id={`service-${s.id}-heading`}
                    className="font-display text-[clamp(2rem,4vw,3.2rem)] font-light text-brown leading-[1.1] mb-6"
                  >
                    {s.title}
                  </h2>
                  <p className="font-sans text-grey-600 leading-relaxed">{s.intro}</p>
                </div>

                {/* Right */}
                <div>
                  <ul className="space-y-3 mb-8" aria-label={`Leistungen im Bereich ${s.tag}`}>
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check size={14} className="text-taupe mt-1 flex-shrink-0" aria-hidden="true" />
                        <span className="font-sans text-sm text-grey-600 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Ergebnis-Satz */}
                  <p className="font-sans text-sm text-brown font-medium leading-relaxed mb-8 pl-5 border-l-2 border-taupe">
                    {s.result}
                  </p>

                  {/* CTA */}
                  {s.ctaHref ? (
                    <Link href={s.ctaHref} className="btn-primary group">
                      {s.cta}
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                    </Link>
                  ) : (
                    <WizardButton label={s.cta} />
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Closing CTA */}
      <section className="bg-brown py-20 lg:py-28" aria-labelledby="leistungen-cta-heading">
        <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 text-center">
          <p className="label text-taupe mb-6">Bereit?</p>
          <h2
            id="leistungen-cta-heading"
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light text-sand mb-6"
          >
            Sprechen wir über Ihre Immobilie.
          </h2>
          <p className="font-sans text-sand/60 mb-10 max-w-md mx-auto">
            Kostenloses Erstgespräch — 30 Minuten, persönlich oder telefonisch.
            Ohne Verpflichtung.
          </p>
          <Link href="/kontakt" className="btn-gold group">
            Jetzt Kontakt aufnehmen
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
