'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X, Plus } from 'lucide-react'

const links = [
  { href: '/',            label: 'Start' },
  { href: '#leistungen',  label: 'Leistungen' },
  { href: '#angebote',    label: 'Angebote' },
  { href: '#ueber-uns',   label: 'Über uns' },
  { href: '#kontakt',     label: 'Kontakt' },
]

const subLinks = [
  { href: '#leistungen', label: 'Vermieten' },
  { href: '#leistungen', label: 'Verkaufen' },
  { href: '#leistungen', label: 'Bewerten' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navBg = scrolled
    ? 'bg-paper border-b border-grey-200'
    : 'bg-transparent border-b border-white/10'

  const textCol = scrolled ? 'text-ink' : 'text-paper'

  return (
    <>
      <motion.header
        initial={{ y: -64 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className={`font-display text-2xl tracking-wider ${textCol} hover:opacity-60 transition-opacity`}>
            MW IMMOBILIEN
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`label hover:text-ink transition-colors ${scrolled ? 'text-grey-500 hover:text-ink' : 'text-white/60 hover:text-white'}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-6">
            <Link
              href="#kontakt"
              className={`hidden lg:inline-block border px-5 py-2 label transition-colors duration-200 ${
                scrolled
                  ? 'border-ink text-ink hover:bg-ink hover:text-paper'
                  : 'border-white text-white hover:bg-white hover:text-ink'
              }`}
            >
              Immobilie bewerten
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              className={`flex flex-col gap-[5px] group ${textCol}`}
              aria-label="Menü öffnen"
            >
              <span className={`block w-6 h-px transition-colors ${scrolled ? 'bg-ink' : 'bg-white'} group-hover:bg-grey-400`} />
              <span className={`block w-4 h-px transition-colors ${scrolled ? 'bg-ink' : 'bg-white'} group-hover:bg-grey-400`} />
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-paper flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 lg:px-12 h-16 border-b border-grey-200">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="font-display text-2xl tracking-wider text-ink"
              >
                MW IMMOBILIEN
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-grey-400 hover:text-ink transition-colors"
                aria-label="Menü schließen"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col lg:flex-row overflow-auto">
              {/* Primary */}
              <div className="flex-1 px-6 lg:px-12 py-12 lg:py-16 border-b lg:border-b-0 lg:border-r border-grey-200">
                <p className="label mb-8">Navigation</p>
                <nav className="space-y-1">
                  {links.map((l, i) => (
                    <motion.div
                      key={l.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center justify-between py-4 border-b border-grey-100
                                   font-display text-5xl lg:text-6xl text-ink hover:text-grey-400
                                   transition-colors duration-200"
                      >
                        {l.label}
                        <Plus size={18} className="text-grey-300 group-hover:rotate-45 transition-transform duration-300" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Sub-links + info */}
              <div className="lg:w-80 px-6 lg:px-10 py-12 lg:py-16 flex flex-col gap-10">
                <div>
                  <p className="label mb-6">Leistungen</p>
                  <div className="space-y-3">
                    {subLinks.map((s) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        onClick={() => setMenuOpen(false)}
                        className="block label text-grey-500 hover:text-ink transition-colors py-1"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="label mb-4">Kontakt</p>
                  <p className="font-sans text-sm text-grey-500 leading-relaxed">
                    Maximilianstraße 12<br />
                    80539 München<br />
                    +49 89 1234 5678
                  </p>
                </div>
                <Link
                  href="#kontakt"
                  onClick={() => setMenuOpen(false)}
                  className="btn-ink self-start mt-auto"
                >
                  Immobilie bewerten
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
