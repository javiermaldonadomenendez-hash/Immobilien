import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Maldonado & Winz Immobilien: Boutique-Makler mit 15+ Jahren Erfahrung in Essen. Lernen Sie unser Team kennen — persönlich, ehrlich, auf Augenhöhe.',
  alternates: { canonical: 'https://maldonado-winz.de/ueber-uns' },
  openGraph: {
    title: 'Über uns | Maldonado & Winz Immobilien',
    description: '15+ Jahre Erfahrung, 500+ vermittelte Objekte, 4,9/5 Google-Bewertung. Ihr Boutique-Makler in Essen.',
  },
}

const teamMembers = [
  {
    name: 'Javier Maldonado',
    role: 'Geschäftsführender Gesellschafter',
    bio: 'Javier ist seit über 15 Jahren im Essener Immobilienmarkt tätig. Er hat mehr als 300 Objekte erfolgreich vermittelt und kennt jeden Stadtteil aus dem Effeff. Sein Fokus: ehrliche Beratung und maximaler Erlös für seine Kunden.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
  },
  {
    name: 'Joshua Winz',
    role: 'Geschäftsführender Gesellschafter',
    bio: 'Joshua bringt fundiertes Know-how in Finanzierung und Versicherung mit. Er begleitet Käufer und Verkäufer durch alle wirtschaftlichen Aspekte einer Immobilientransaktion — transparent und verständlich.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
  },
]

const values = [
  { title: 'Transparenz',    desc: 'Klare Kommunikation. Keine versteckten Kosten. Keine Überraschungen.' },
  { title: 'Verbindlichkeit', desc: 'Was wir versprechen, halten wir — pünktlich und zuverlässig.' },
  { title: 'Ehrlichkeit',    desc: 'Auch wenn die Wahrheit unbequem ist: Sie bekommen unsere echte Einschätzung.' },
  { title: 'Diskretion',     desc: 'Ihre Immobilie, Ihre Privatsphäre. Diskretion ist bei uns Standard, kein Zusatz.' },
]

const stats = [
  { value: '15+',  label: 'Jahre Erfahrung' },
  { value: '500+', label: 'Objekte vermittelt' },
  { value: '4,9',  label: 'Google-Bewertung' },
  { value: '2',    label: 'Geschäftsführer, kein Call-Center' },
]

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brown pt-[76px]" aria-labelledby="about-heading">
        <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 py-20 lg:py-28">
          <p className="label text-taupe mb-6">Über uns</p>
          <h1
            id="about-heading"
            className="font-display text-[clamp(3rem,8vw,7rem)] font-light leading-[0.95] text-sand mb-8 max-w-2xl"
          >
            Makler, die Sie<br />
            <span className="text-taupe">wirklich kennen.</span>
          </h1>
          {/* Über-Uns nach web-copywriting Skill: Nutzen-zentriert, Warum-Aussage zuerst */}
          <p className="font-sans text-sand/60 text-lg leading-relaxed max-w-xl">
            Hinter Maldonado & Winz steckt ein einfacher Gedanke: Eigentümer und Käufer
            verdienen eine ehrliche, persönliche Beratung — ohne Verkaufsdruck,
            ohne Massenabfertigung, ohne böse Überraschungen.
          </p>
        </div>
      </section>

      {/* Zahlen-Trust */}
      <section className="bg-sand border-b border-grey-200" aria-label="Unsere Kennzahlen">
        <div className="max-w-screen-2xl mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-grey-200">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-10 text-center">
                <p className="font-display text-[2.5rem] font-medium text-brown leading-none mb-2">
                  {s.value}
                </p>
                <p className="font-sans text-[11px] uppercase tracking-widest text-grey-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warum existieren wir */}
      <section className="bg-sand py-20 lg:py-28" aria-labelledby="why-heading">
        <div className="max-w-screen-2xl mx-auto px-5 lg:px-12">
          <div className="max-w-3xl">
            <p className="label-brown mb-6">Unsere Geschichte</p>
            <h2 id="why-heading" className="display-sm text-brown mb-8">
              Warum wir gegründet haben.
            </h2>
            <div className="space-y-5 font-sans text-grey-600 leading-relaxed text-base">
              <p>
                Javier Maldonado und Joshua Winz haben beide erlebt, was es bedeutet, mit einem
                Makler zusammenzuarbeiten, der mehr an seiner Provision interessiert ist als am
                bestmöglichen Ergebnis für den Kunden. Das wollten sie ändern.
              </p>
              <p>
                Seit über 15 Jahren vermitteln sie gemeinsam Wohnimmobilien in Essen und dem
                Ruhrgebiet — nicht als anonymes Call-Center, sondern als persönliche Ansprechpartner,
                die Ihre Situation wirklich verstehen.
              </p>
              <p>
                Ihr Versprechen: Transparente Preise. Keine Überraschungen. Ergebnisse, die Sie
                messen können — und die Ihren Interessen dienen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-grey-50 py-20 lg:py-28 border-y border-grey-200" aria-labelledby="team-heading">
        <div className="max-w-screen-2xl mx-auto px-5 lg:px-12">
          <p className="label-brown mb-6">Das Team</p>
          <h2 id="team-heading" className="display-sm text-brown mb-14">
            Persönliche Ansprechpartner —<br />keine Weiterleitungen.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {teamMembers.map((m) => (
              <article key={m.name} className="bg-white border border-grey-200">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={m.img}
                    alt={`Foto von ${m.name}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-light text-brown mb-1">{m.name}</h3>
                  <p className="label text-taupe mb-5">{m.role}</p>
                  <p className="font-sans text-sm text-grey-600 leading-relaxed">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Kernwerte */}
      <section className="bg-sand py-20 lg:py-28" aria-labelledby="values-heading">
        <div className="max-w-screen-2xl mx-auto px-5 lg:px-12">
          <p className="label-brown mb-6">Unsere Werte</p>
          <h2 id="values-heading" className="display-sm text-brown mb-12">
            Wofür wir stehen.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-grey-50 border border-grey-200 p-8">
                <div className="w-8 h-0.5 bg-taupe mb-6" aria-hidden="true" />
                <h3 className="font-display text-xl font-light text-brown mb-3">{v.title}</h3>
                <p className="font-sans text-sm text-grey-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brown py-20 lg:py-28" aria-labelledby="about-cta-heading">
        <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 text-center">
          <h2 id="about-cta-heading" className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light text-sand mb-6">
            Lernen Sie uns persönlich kennen.
          </h2>
          <p className="font-sans text-sand/60 mb-10 max-w-md mx-auto">
            Ein 30-minütiges Erstgespräch — kostenlos, unverbindlich, in Ihrer Sprache.
          </p>
          <Link href="/kontakt" className="btn-gold group">
            Erstgespräch vereinbaren
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
