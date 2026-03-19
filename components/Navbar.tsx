'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X, Plus, Phone } from 'lucide-react'

const leftLinks = [
  { href: '/',           label: 'Start' },
  { href: '#leistungen', label: 'Für Eigentümer' },
  { href: '#angebote',   label: 'Immobilienangebote' },
]

const rightLinks = [
  { href: '#bewertung',  label: 'Bewertung' },
  { href: '#ueber-uns',  label: 'Über uns' },
  { href: '#kontakt',    label: 'Kontakt' },
]

const primaryLinks = [...leftLinks, ...rightLinks]

const serviceLinks = [
  { href: '#leistungen', label: 'Immobilie verkaufen' },
  { href: '#leistungen', label: 'Immobilie vermieten' },
  { href: '#leistungen', label: 'Diskrete Vermarktung' },
  { href: '#bewertung',  label: 'Immobilienbewertung' },
  { href: '#angebote',   label: 'Suchauftrag anlegen' },
]

const BRAND_NAME = 'Maldonado & Winz'

// Nav-Link-Klasse: weniger tracking als .label für kompaktere Navbar
const navLinkBase = 'font-sans text-[10.5px] font-medium uppercase tracking-[0.13em] transition-colors duration-200 whitespace-nowrap'

function openBewertungWizard() {
  document.dispatchEvent(new CustomEvent('open-bewertung-wizard'))
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Guard: only update state when value actually changes → avoids re-renders on every scroll event
    const onScroll = () => {
      const next = window.scrollY > 60
      setScrolled(prev => prev === next ? prev : next)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [menuOpen])

  const linkCls = scrolled ? 'text-grey-600 hover:text-brown' : 'text-white/55 hover:text-white'

  return (
    <>
      <motion.header
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-sand/96 backdrop-blur-sm border-b border-grey-200/80'
            : 'bg-transparent border-b border-white/8'
        }`}
      >
        {/* ── Grid: [1fr] [auto] [1fr] → mathematisch exakte Zentrierung ── */}
        <div
          className="max-w-screen-2xl mx-auto px-6 lg:px-14 h-[60px] grid items-center"
          style={{ gridTemplateColumns: '1fr auto 1fr' }}
        >

          {/* COL 1 – Left nav (desktop) / Mobile brand (mobile) */}
          <div className="flex items-center">
            {/* Mobile: Brand-Name links */}
            <Link
              href="/"
              className={`lg:hidden font-display text-[17px] font-light tracking-[0.04em] transition-opacity hover:opacity-70 ${
                scrolled ? 'text-brown' : 'text-white'
              }`}
            >
              {BRAND_NAME}
            </Link>
            {/* Desktop: Nav-Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {leftLinks.map((l) => (
                <Link key={l.label} href={l.href} className={`${navLinkBase} ${linkCls}`}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* COL 2 – Logo (exakt zentriert durch grid-cols [1fr auto 1fr]) */}
          <Link
            href="/"
            className={`flex flex-col items-center px-8 transition-opacity hover:opacity-70 ${
              scrolled ? 'text-brown' : 'text-white'
            }`}
          >
            <span className="font-display text-[20px] font-semibold tracking-[-0.01em] leading-none whitespace-nowrap">
              {BRAND_NAME}
            </span>
            <span className={`hidden lg:block font-sans text-[8.5px] tracking-[0.28em] mt-[5px] whitespace-nowrap ${
              scrolled ? 'text-taupe' : 'text-white/45'
            }`}>
              IMMOBILIEN
            </span>
          </Link>

          {/* COL 3 – Right nav + CTA + Hamburger */}
          <div className="flex items-center justify-end gap-6">
            <nav className="hidden lg:flex items-center gap-6">
              {rightLinks.map((l) => (
                <Link key={l.label} href={l.href} className={`${navLinkBase} ${linkCls}`}>
                  {l.label}
                </Link>
              ))}
            </nav>
            <button
              onClick={openBewertungWizard}
              className={`hidden lg:inline-flex items-center px-5 py-[9px] font-sans text-[10.5px] font-semibold uppercase tracking-[0.13em] transition-colors duration-200 ${
                scrolled
                  ? 'bg-taupe text-sand hover:bg-taupe-dark'
                  : 'bg-taupe/85 text-sand hover:bg-taupe'
              }`}
            >
              Kostenlos bewerten
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Menü öffnen"
              className="flex flex-col justify-center gap-[5px] p-1 group"
            >
              <span className={`block w-[22px] h-px transition-colors ${scrolled ? 'bg-brown' : 'bg-white'} group-hover:opacity-50`} />
              <span className={`block w-[14px] h-px transition-colors ${scrolled ? 'bg-brown' : 'bg-white'} group-hover:opacity-50`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Full-screen overlay menu ─────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[100] bg-sand flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 lg:px-14 h-[60px] border-b border-grey-200">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="font-display text-xl font-light tracking-wide text-brown"
              >
                {BRAND_NAME}
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Menü schließen"
                className="text-grey-400 hover:text-brown transition-colors p-2"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col lg:flex-row overflow-auto">
              {/* Primary links */}
              <div className="flex-1 px-6 lg:px-14 py-10 lg:py-16 border-b lg:border-b-0 lg:border-r border-grey-200">
                <p className="label mb-8 text-taupe">Navigation</p>
                <nav className="space-y-1">
                  {primaryLinks.map((l, i) => (
                    <motion.div
                      key={l.label}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center justify-between py-4 border-b border-grey-100
                                   font-display text-[clamp(2.5rem,8vw,5rem)] font-light text-brown
                                   hover:text-taupe transition-colors duration-200"
                      >
                        {l.label}
                        <Plus size={16} className="text-grey-300 group-hover:rotate-45 group-hover:text-taupe transition-all duration-300" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Sub-links + contact */}
              <div className="lg:w-80 px-6 lg:px-10 py-10 lg:py-16 flex flex-col gap-10">
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
                    <Phone size={13} />
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
