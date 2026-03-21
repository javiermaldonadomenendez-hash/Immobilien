import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontaktieren Sie Maldonado & Winz Immobilien in Essen. Kostenlose Erstberatung, Immobilienbewertung und persönliche Beratung im Ruhrgebiet.',
  alternates: { canonical: 'https://maldonado-winz.de/kontakt' },
  openGraph: {
    title: 'Kontakt | Maldonado & Winz Immobilien',
    description: 'Jetzt Kontakt aufnehmen — kostenlos, unverbindlich, persönlich.',
  },
}

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brown pt-[76px]" aria-labelledby="kontakt-heading">
        <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 py-20 lg:py-24">
          <p className="label text-taupe mb-6">Kontakt</p>
          <h1
            id="kontakt-heading"
            className="font-display text-[clamp(3rem,8vw,7rem)] font-light leading-[0.95] text-sand mb-6 max-w-xl"
          >
            Schreiben Sie uns.<br />
            <span className="text-taupe">Wir antworten.</span>
          </h1>
          <p className="font-sans text-sand/60 text-base leading-relaxed max-w-md">
            Innerhalb von 24 Stunden erhalten Sie eine persönliche Antwort von Javier oder Joshua —
            kein automatisches System, kein Call-Center.
          </p>
        </div>
      </section>

      {/* Hauptbereich: Kontaktinfo + Formular */}
      <section className="bg-sand py-16 lg:py-24" aria-label="Kontaktinformationen und Formular">
        <div className="max-w-screen-2xl mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

            {/* Kontaktinfo — NAP-konsistent (local-seo Skill) */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-light text-brown mb-8">
                So erreichen Sie uns
              </h2>

              <address className="not-italic space-y-6">
                <div className="flex items-start gap-4">
                  <Phone size={16} className="text-taupe mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="label text-grey-400 mb-1">Telefon</p>
                    <a
                      href="tel:+4920112345678"
                      className="font-sans text-base text-brown font-medium hover:text-taupe transition-colors"
                    >
                      +49 201 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={16} className="text-taupe mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="label text-grey-400 mb-1">E-Mail</p>
                    <a
                      href="mailto:info@maldonado-winz.de"
                      className="font-sans text-base text-brown font-medium hover:text-taupe transition-colors"
                    >
                      info@maldonado-winz.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin size={16} className="text-taupe mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="label text-grey-400 mb-1">Adresse</p>
                    <p className="font-sans text-base text-brown font-medium leading-relaxed">
                      Rüttenscheider Str. 52<br />
                      45130 Essen
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={16} className="text-taupe mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="label text-grey-400 mb-1">Öffnungszeiten</p>
                    <div className="font-sans text-base text-brown font-medium leading-relaxed">
                      <p>Mo – Fr: 09:00 – 18:00 Uhr</p>
                      <p className="text-grey-400 text-sm mt-1">Termine außerhalb auf Anfrage</p>
                    </div>
                  </div>
                </div>
              </address>

              {/* Google Maps Embed */}
              <div className="mt-10 border border-grey-200 overflow-hidden" aria-label="Standort auf Google Maps">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.9!2d6.9995!3d51.4319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI1JzU1LjAiTiA2wrA1OSc1OC4yIkU!5e0!3m2!1sde!2sde!4v1700000000000"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Maldonado & Winz Immobilien auf Google Maps"
                />
              </div>
            </div>

            {/* Kontaktformular */}
            <div className="lg:col-span-3 bg-grey-50 border border-grey-200 p-8 lg:p-10">
              <h2 className="font-display text-2xl font-light text-brown mb-2">
                Schreiben Sie uns
              </h2>
              <p className="font-sans text-sm text-grey-500 mb-8">
                Alle mit * markierten Felder sind Pflichtfelder.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
