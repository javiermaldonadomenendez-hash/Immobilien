import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const col1 = [
  { label: 'Immobilie verkaufen',   href: '#leistungen' },
  { label: 'Immobilie vermieten',   href: '#leistungen' },
  { label: 'Diskrete Vermarktung',  href: '#leistungen' },
  { label: 'Immobilienbewertung',   href: '#bewertung'  },
  { label: 'Suchauftrag anlegen',   href: '#angebote'   },
]
const col2 = [
  { label: 'Über uns',        href: '#ueber-uns' },
  { label: 'Team',            href: '#ueber-uns' },
  { label: 'Markt & Wissen',  href: '#markt'     },
  { label: 'FAQ',             href: '#faq'        },
  { label: 'Kontakt',         href: '#kontakt'    },
]
const col3 = [
  { label: 'Impressum',      href: '#' },
  { label: 'Datenschutz',    href: '#' },
  { label: 'AGB',            href: '#' },
]
const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn',  href: '#' },
  { label: 'Facebook',  href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-brown text-sand">

      {/* ── CTA strip ──────────────────────────── */}
      <div className="border-b border-brown-800">
        <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 py-20
                        flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          <div>
            <p className="label text-taupe mb-6">Bereit für den nächsten Schritt?</p>
            <h3 className="font-display text-[clamp(3rem,7vw,7rem)] font-light leading-[0.92] text-sand">
              Immobilie<br />
              <span className="text-taupe">kostenlos</span><br />
              bewerten
            </h3>
          </div>
          <Link
            href="#bewertung"
            className="group flex items-center gap-3 bg-taupe px-8 py-4
                       label text-sand hover:bg-taupe-dark
                       transition-colors duration-300 flex-shrink-0 min-h-[48px]"
          >
            Wert ermitteln
            <ArrowUpRight
              size={13}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </div>
      </div>

      {/* ── Main columns ───────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-0 lg:divide-x lg:divide-brown-800">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-2 lg:pr-12">
            <p className="font-display text-3xl font-light tracking-wide text-sand mb-2">
              Maldonado Winz
            </p>
            <p className="label text-taupe mb-4">Immobilien</p>
            <p className="font-sans text-sm text-sand/40 leading-relaxed max-w-xs mb-8">
              Boutique-Makler für hochwertige Wohnimmobilien in Essen und dem Ruhrgebiet.
              Diskret. Kompetent. Auf Augenhöhe.
            </p>
            {/* Socials */}
            <div className="flex gap-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="label text-sand/30 hover:text-taupe transition-colors duration-200
                             flex items-center gap-1 group"
                >
                  {s.label}
                  <ArrowUpRight
                    size={9}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5
                               group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {[
            { title: 'Leistungen',   links: col1 },
            { title: 'Unternehmen',  links: col2 },
            { title: 'Rechtliches',  links: col3 },
          ].map((col) => (
            <div key={col.title} className="lg:px-10">
              <p className="label text-taupe mb-6">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="font-sans text-sm text-sand/40 hover:text-taupe
                                 transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────── */}
      <div className="border-t border-brown-800">
        <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 py-5
                        flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="label text-sand/25">
            © {new Date().getFullYear()} Maldonado Winz Immobilien GmbH · Essen
          </p>
          <p className="label text-sand/15">
            Rüttenscheid · Bredeney · Stadtmitte · Werden · Kettwig
          </p>
        </div>
      </div>
    </footer>
  )
}
