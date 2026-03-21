import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung der Maldonado & Winz Immobilien GmbH gemäß DSGVO.',
  alternates: { canonical: 'https://maldonado-winz.de/datenschutz' },
  robots: { index: false, follow: false },
}

export default function DatenschutzPage() {
  return (
    <section className="bg-sand pt-[76px] min-h-screen" aria-labelledby="datenschutz-heading">
      <div className="max-w-3xl mx-auto px-5 lg:px-12 py-20">
        <h1 id="datenschutz-heading" className="font-display text-4xl font-light text-brown mb-10">
          Datenschutzerklärung
        </h1>

        <div className="font-sans text-grey-600 leading-relaxed space-y-10">

          <section aria-labelledby="ds-verantwortlicher">
            <h2 id="ds-verantwortlicher" className="font-sans text-xs font-semibold uppercase tracking-widest text-taupe mb-3">
              1. Verantwortlicher
            </h2>
            <address className="not-italic">
              <strong className="text-brown">Maldonado & Winz Immobilien GmbH</strong><br />
              Rüttenscheider Str. 52 · 45130 Essen<br />
              Tel: <a href="tel:+4920112345678" className="text-taupe hover:underline">+49 201 1234 5678</a><br />
              E-Mail: <a href="mailto:info@maldonado-winz.de" className="text-taupe hover:underline">info@maldonado-winz.de</a>
            </address>
          </section>

          <section aria-labelledby="ds-erhebung">
            <h2 id="ds-erhebung" className="font-sans text-xs font-semibold uppercase tracking-widest text-taupe mb-3">
              2. Erhebung und Verarbeitung personenbezogener Daten
            </h2>
            <p className="mb-3">
              Wir erheben personenbezogene Daten nur, wenn Sie uns diese im Rahmen eines Kontaktformulars,
              einer E-Mail oder im persönlichen Gespräch mitteilen. Rechtsgrundlage ist Art. 6 Abs. 1
              lit. b DSGVO (Vertragsanbahnung oder -erfüllung) bzw. Ihre Einwilligung nach Art. 6
              Abs. 1 lit. a DSGVO.
            </p>
            <p>
              Die von Ihnen übermittelten Daten (Name, E-Mail, Telefon, Nachricht) werden
              ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
            </p>
          </section>

          <section aria-labelledby="ds-server">
            <h2 id="ds-server" className="font-sans text-xs font-semibold uppercase tracking-widest text-taupe mb-3">
              3. Server-Log-Dateien
            </h2>
            <p>
              Beim Besuch dieser Website werden automatisch technische Informationen (IP-Adresse,
              Browser, Betriebssystem, Uhrzeit) in Server-Log-Dateien gespeichert. Diese Daten
              werden nicht mit personenbezogenen Daten zusammengeführt. Rechtsgrundlage ist
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Sicherheit der Website).
            </p>
          </section>

          <section aria-labelledby="ds-cookies">
            <h2 id="ds-cookies" className="font-sans text-xs font-semibold uppercase tracking-widest text-taupe mb-3">
              4. Cookies
            </h2>
            <p>
              Diese Website verwendet nur technisch notwendige Cookies. Analyse- oder
              Marketing-Cookies werden nicht ohne Ihre ausdrückliche Einwilligung gesetzt.
            </p>
          </section>

          <section aria-labelledby="ds-rechte">
            <h2 id="ds-rechte" className="font-sans text-xs font-semibold uppercase tracking-widest text-taupe mb-3">
              5. Ihre Rechte
            </h2>
            <p className="mb-3">Sie haben das Recht auf:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Beschwerde bei der zuständigen Aufsichtsbehörde (Art. 77 DSGVO)</li>
            </ul>
          </section>

          <section aria-labelledby="ds-speicherdauer">
            <h2 id="ds-speicherdauer" className="font-sans text-xs font-semibold uppercase tracking-widest text-taupe mb-3">
              6. Speicherdauer
            </h2>
            <p>
              Personenbezogene Daten werden gelöscht, sobald sie für den jeweiligen Zweck nicht mehr
              erforderlich sind, spätestens jedoch nach Ablauf der gesetzlichen Aufbewahrungsfristen
              (in der Regel 10 Jahre für geschäftliche Korrespondenz).
            </p>
          </section>

          <section aria-labelledby="ds-maps">
            <h2 id="ds-maps" className="font-sans text-xs font-semibold uppercase tracking-widest text-taupe mb-3">
              7. Google Maps
            </h2>
            <p>
              Auf der Kontaktseite betten wir eine Karte von Google Maps ein. Anbieter ist die
              Google Ireland Limited. Bei Nutzung von Google Maps werden Daten an Google übertragen.
              Weitere Informationen finden Sie in der{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-taupe hover:underline"
              >
                Datenschutzerklärung von Google
              </a>
              .
            </p>
          </section>

          <p className="text-xs text-grey-400 pt-4 border-t border-grey-200">
            Stand: März 2026 · Bei Fragen zum Datenschutz wenden Sie sich an:{' '}
            <a href="mailto:datenschutz@maldonado-winz.de" className="text-taupe hover:underline">
              datenschutz@maldonado-winz.de
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
