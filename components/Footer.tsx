import Link from 'next/link'
import { Instagram, Linkedin, Facebook, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  Leistungen: [
    { label: 'Immobilie vermieten', href: '#leistungen' },
    { label: 'Immobilie verkaufen', href: '#leistungen' },
    { label: 'Immobilie bewerten', href: '#kontakt' },
    { label: 'Immobilienberatung', href: '#kontakt' },
  ],
  Unternehmen: [
    { label: 'Über uns', href: '#ueber-uns' },
    { label: 'Unser Team', href: '#ueber-uns' },
    { label: 'Karriere', href: '#kontakt' },
    { label: 'Presse', href: '#kontakt' },
  ],
  Rechtliches: [
    { label: 'Impressum', href: '#' },
    { label: 'Datenschutz', href: '#' },
    { label: 'AGB', href: '#' },
    { label: 'Widerrufsrecht', href: '#' },
  ],
}

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-warm-border">

      {/* CTA Banner */}
      <div className="border-b border-warm-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <p className="section-label mb-3">Bereit für den nächsten Schritt?</p>
              <h3 className="font-serif text-offwhite text-3xl lg:text-4xl font-semibold">
                Lassen Sie Ihre Immobilie{' '}
                <span className="text-gold italic">kostenlos bewerten.</span>
              </h3>
            </div>
            <Link
              href="#kontakt"
              className="flex items-center gap-3 bg-gold text-charcoal px-8 py-4
                         text-xs font-sans font-semibold tracking-widest uppercase
                         hover:bg-gold-light transition-all duration-300 group flex-shrink-0"
            >
              Jetzt anfragen
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="w-9 h-9 border border-gold flex items-center justify-center
                              group-hover:bg-gold transition-all duration-300">
                <span className="font-serif text-gold group-hover:text-charcoal text-sm font-bold
                                 transition-colors duration-300">
                  MW
                </span>
              </div>
              <div>
                <p className="font-serif text-offwhite text-base font-semibold leading-none">
                  Maldonado-Winz
                </p>
                <p className="text-gold text-[10px] tracking-[0.25em] uppercase font-sans">
                  Immobilien
                </p>
              </div>
            </Link>

            <p className="text-offwhite/35 font-sans text-sm leading-relaxed max-w-xs mb-8">
              Ihr exklusiver Partner für Premium-Immobilien in München und der umliegenden Region.
              Diskret. Professionell. Erfolgreich.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-warm-border flex items-center justify-center
                             hover:border-gold hover:bg-gold/8 transition-all duration-300 group"
                >
                  <Icon
                    size={14}
                    className="text-warm-gray group-hover:text-gold transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-[10px] tracking-[0.25em] uppercase font-sans text-gold/60 mb-5">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-offwhite/35 hover:text-gold font-sans text-sm
                                 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="border-t border-warm-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
          <div className="relative h-32 bg-charcoal-light border border-warm-border
                          flex items-center justify-center overflow-hidden">
            {/* Stylized map grid */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(197,160,89,0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(197,160,89,0.3) 1px, transparent 1px)
                `,
                backgroundSize: '32px 32px',
              }}
            />
            <div className="relative z-10 text-center">
              <div className="w-3 h-3 bg-gold rounded-full mx-auto mb-2
                              shadow-[0_0_12px_rgba(197,160,89,0.6)]" />
              <p className="text-offwhite/40 font-sans text-xs tracking-widest uppercase">
                Maximilianstraße 12, 80539 München
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-offwhite/25 font-sans text-xs">
              © {new Date().getFullYear()} Maldonado-Winz Immobilien GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-5 text-xs font-sans">
              <Link href="#" className="text-offwhite/25 hover:text-gold transition-colors">
                Impressum
              </Link>
              <Link href="#" className="text-offwhite/25 hover:text-gold transition-colors">
                Datenschutz
              </Link>
              <Link href="#" className="text-offwhite/25 hover:text-gold transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
