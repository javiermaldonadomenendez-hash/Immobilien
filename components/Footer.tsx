import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const col1 = [
  { label: 'Vermieten',        href: '#leistungen' },
  { label: 'Verkaufen',        href: '#leistungen' },
  { label: 'Bewerten',         href: '#kontakt'    },
  { label: 'Off-Market',       href: '#kontakt'    },
  { label: 'Investmentberatung', href: '#kontakt'  },
]
const col2 = [
  { label: 'Über uns',   href: '#ueber-uns' },
  { label: 'Team',       href: '#ueber-uns' },
  { label: 'Karriere',   href: '#kontakt'   },
  { label: 'Presse',     href: '#kontakt'   },
]
const col3 = [
  { label: 'Impressum',        href: '#' },
  { label: 'Datenschutz',      href: '#' },
  { label: 'AGB',              href: '#' },
  { label: 'Widerrufsrecht',   href: '#' },
]
const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn',  href: '#' },
  { label: 'Facebook',  href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">

      {/* ── CTA strip ──────────────────────────── */}
      <div className="border-b border-grey-800">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-20
                        flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          <div>
            <p className="label text-grey-600 mb-6">Bereit für den nächsten Schritt?</p>
            <h3 className="font-display text-[clamp(3rem,7vw,7rem)] leading-none uppercase text-paper">
              Immobilie<br />
              <span className="text-grey-600">kostenlos</span><br />
              Bewerten
            </h3>
          </div>
          <Link
            href="#kontakt"
            className="group flex items-center gap-3 border border-grey-600 px-8 py-4
                       label text-grey-400 hover:border-paper hover:text-paper
                       transition-colors duration-300 flex-shrink-0"
          >
            Jetzt anfragen
            <ArrowUpRight
              size={13}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </div>
      </div>

      {/* ── Main columns ───────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-0 lg:divide-x lg:divide-grey-800">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-2 lg:pr-12">
            <p className="font-display text-3xl tracking-wider text-paper mb-4">
              MW IMMOBILIEN
            </p>
            <p className="font-sans text-xs text-grey-600 leading-relaxed max-w-xs mb-8">
              Ihr exklusiver Partner für Premium-Immobilien in München
              und der umliegenden Region. Seit 2008.
            </p>
            {/* Socials */}
            <div className="flex gap-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="label text-grey-600 hover:text-paper transition-colors duration-200
                             flex items-center gap-1 group"
                >
                  {s.label}
                  <ArrowUpRight
                    size={9}
                    className="opacity-0 group-hover:opacity-100 transition-opacity
                               group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                               transition-transform"
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
              <p className="label text-grey-600 mb-6">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="font-sans text-xs text-grey-500 hover:text-paper
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
      <div className="border-t border-grey-800">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-5
                        flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="label text-grey-700">
            © {new Date().getFullYear()} Maldonado-Winz Immobilien GmbH
          </p>
          <p className="label text-grey-800">
            München · Schwabing · Bogenhausen · Maxvorstadt
          </p>
        </div>
      </div>
    </footer>
  )
}
