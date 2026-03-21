import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der Maldonado & Winz Immobilien GmbH, Essen.',
  alternates: { canonical: 'https://maldonado-winz.de/impressum' },
  robots: { index: false, follow: false },
}

export default function ImpressumPage() {
  return (
    <section className="bg-sand pt-[76px] min-h-screen" aria-labelledby="impressum-heading">
      <div className="max-w-3xl mx-auto px-5 lg:px-12 py-20">
        <h1 id="impressum-heading" className="font-display text-4xl font-light text-brown mb-10">
          Impressum
        </h1>

        <div className="prose prose-sm max-w-none font-sans text-grey-600 leading-relaxed space-y-8">

          <section aria-labelledby="impressum-angaben">
            <h2 id="impressum-angaben" className="font-sans text-xs font-semibold uppercase tracking-widest text-taupe mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <address className="not-italic">
              <strong className="text-brown">Maldonado & Winz Immobilien GmbH</strong><br />
              Rüttenscheider Str. 52<br />
              45130 Essen<br />
              Deutschland
            </address>
          </section>

          <section aria-labelledby="impressum-vertreten">
            <h2 id="impressum-vertreten" className="font-sans text-xs font-semibold uppercase tracking-widest text-taupe mb-3">
              Vertreten durch
            </h2>
            <p>Javier Maldonado, Joshua Winz (Geschäftsführer)</p>
          </section>

          <section aria-labelledby="impressum-kontakt">
            <h2 id="impressum-kontakt" className="font-sans text-xs font-semibold uppercase tracking-widest text-taupe mb-3">
              Kontakt
            </h2>
            <p>
              Telefon:{' '}
              <a href="tel:+4920112345678" className="text-taupe hover:underline">
                +49 201 1234 5678
              </a>
              <br />
              E-Mail:{' '}
              <a href="mailto:info@maldonado-winz.de" className="text-taupe hover:underline">
                info@maldonado-winz.de
              </a>
            </p>
          </section>

          <section aria-labelledby="impressum-register">
            <h2 id="impressum-register" className="font-sans text-xs font-semibold uppercase tracking-widest text-taupe mb-3">
              Registereintrag
            </h2>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Essen<br />
              Registernummer: HRB XXXXX
            </p>
          </section>

          <section aria-labelledby="impressum-ust">
            <h2 id="impressum-ust" className="font-sans text-xs font-semibold uppercase tracking-widest text-taupe mb-3">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              DE XXX XXX XXX
            </p>
          </section>

          <section aria-labelledby="impressum-berufsrecht">
            <h2 id="impressum-berufsrecht" className="font-sans text-xs font-semibold uppercase tracking-widest text-taupe mb-3">
              Berufsrechtliche Angaben
            </h2>
            <p>
              Erlaubnis nach § 34c GewO (Immobilienmakler) erteilt durch die zuständige Behörde.<br />
              Berufsbezeichnung: Immobilienmakler (Deutschland)
            </p>
          </section>

          <section aria-labelledby="impressum-haftung">
            <h2 id="impressum-haftung" className="font-sans text-xs font-semibold uppercase tracking-widest text-taupe mb-3">
              Haftungsausschluss
            </h2>
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
              keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für
              eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </section>

          <section aria-labelledby="impressum-streitbeilegung">
            <h2 id="impressum-streitbeilegung" className="font-sans text-xs font-semibold uppercase tracking-widest text-taupe mb-3">
              Online-Streitbeilegung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.
              Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder
              verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
