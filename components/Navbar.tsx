'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X, Plus, Phone } from 'lucide-react'

const leftLinks = [
  { href: '/',             label: 'Start' },
  { href: '#leistungen',   label: 'Für Eigentümer' },
  { href: '#angebote',     label: 'Immobilienangebote' },
]

const rightLinks = [
  { href: '#bewertung',    label: 'Bewertung' },
  { href: '#ueber-uns',    label: 'Über uns' },
  { href: '#kontakt',      label: 'Kontakt' },
]

const primaryLinks = [...leftLinks, ...rightLinks]

function openBewertungWizard() {
  document.dispatchEvent(new CustomEvent('open-bewertung-wizard'))
}

const serviceLinks = [
  { href: '#leistungen', label: 'Immobilie verkaufen' },
  { href: '#leistungen', label: 'Immobilie vermieten' },
  { href: '#leistungen', label: 'Diskrete Vermarktung' },
  { href: '#bewertung',  label: 'Immobilienbewertung' },
  { href: '#angebote',   label: 'Suchauftrag anlegen' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navBg = scrolled
    ? 'bg-sand/95 backdrop-blur-sm border-b border-grey-200'
    : 'bg-transparent border-b border-white/10'

  const textCol = scrolled ? 'text-brown' : 'text-sand'

  return (
    <>
      <motion.header
        initial={{ y: -64 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 h-16 relative flex items-center">

          {/* Left nav links */}
          <nav className="hidden lg:flex items-center gap-8">
            {leftLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`label transition-colors ${
                  scrolled ? 'text-grey-500 hover:text-brown' : 'text-white/60 hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Brand – absolute center relative to the header */}
          <Link
            href="/"
            className={`hidden lg:block absolute left-1/2 -translate-x-1/2 font-display text-xl font-light tracking-wide whitespace-nowrap ${textCol} hover:opacity-70 transition-opacity`}
          >
            Maldonado &amp; Winz Immobilien
          </Link>

          {/* Mobile: brand left-aligned */}
          <Link
            href="/"
            className={`lg:hidden font-display text-lg font-light tracking-wide ${textCol} hover:opacity-70 transition-opacity`}
          >
            Maldonado &amp; Winz
          </Link>

          {/* Right: nav links + CTA + Hamburger */}
          <div className="ml-auto flex items-center gap-5">
            <div className="hidden lg:flex items-center gap-8 mr-5">
              {rightLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className={`label transition-colors ${
                    scrolled ? 'text-grey-500 hover:text-brown' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <button
              onClick={openBewertungWizard}
              className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 label transition-colors duration-200 ${
                scrolled
                  ? 'bg-taupe text-sand hover:bg-taupe-dark'
                  : 'bg-taupe/90 text-sand hover:bg-taupe'
              }`}
            >
              Kostenlos bewerten
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className={`flex flex-col gap-[5px] group p-1 ${textCol}`}
              aria-label="Menü öffnen"
            >
              <span className={`block w-6 h-px transition-colors ${scrolled ? 'bg-brown' : 'bg-white'} group-hover:opacity-60`} />
              <span className={`block w-4 h-px transition-colors ${scrolled ? 'bg-brown' : 'bg-white'} group-hover:opacity-60`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Full-screen menu overlay ─────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-sand flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 lg:px-12 h-16 border-b border-grey-200">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="font-display text-2xl font-light tracking-wide text-brown"
              >
                Maldonado Winz
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-grey-400 hover:text-brown transition-colors p-2"
                aria-label="Menü schließen"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col lg:flex-row overflow-auto">
              {/* Primary */}
              <div className="flex-1 px-5 lg:px-12 py-10 lg:py-16 border-b lg:border-b-0 lg:border-r border-grey-200">
                <p className="label mb-8 text-taupe">Navigation</p>
                <nav className="space-y-1">
                  {primaryLinks.map((l, i) => (
                    <motion.div
                      key={l.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center justify-between py-4 border-b border-grey-100
                                   font-display text-[clamp(2.5rem,8vw,5rem)] font-light text-brown
                                   hover:text-taupe transition-colors duration-200"
                      >
                        {l.label}
                        <Plus size={18} className="text-grey-300 group-hover:rotate-45 group-hover:text-taupe transition-all duration-300" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Sub-links + info */}
              <div className="lg:w-80 px-5 lg:px-10 py-10 lg:py-16 flex flex-col gap-10">
                <div>
                  <p className="label mb-6 text-taupe">Leistungen</p>
                  <div className="space-y-3">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        onClick={() => setMenuOpen(false)}
                        className="block label text-grey-500 hover:text-brown transition-colors py-1"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="label mb-4 text-taupe">Direktkontakt</p>
                  <a
                    href="tel:+498912345678"
                    className="flex items-center gap-2 font-sans text-sm text-brown font-medium mb-1 hover:text-taupe transition-colors"
                  >
                    <Phone size={14} />
                    +49 89 1234 5678
                  </a>
                  <p className="font-sans text-sm text-grey-500 leading-relaxed">
                    Rüttenscheider Str. 52<br />
                    45130 Essen
                  </p>
                </div>
                <button
                  onClick={() => { setMenuOpen(false); openBewertungWizard() }}
                  className="btn-gold self-start mt-auto"
                >
                  Immobilie bewerten
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
