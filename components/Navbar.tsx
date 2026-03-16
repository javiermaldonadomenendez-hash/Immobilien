'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Startseite' },
  {
    label: 'Leistungen',
    dropdown: [
      { href: '#leistungen', label: 'Vermieten' },
      { href: '#leistungen', label: 'Verkaufen' },
      { href: '#leistungen', label: 'Bewerten' },
    ],
  },
  { href: '#angebote', label: 'Angebote' },
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal/96 backdrop-blur-xl border-b border-warm-border shadow-2xl'
          : 'bg-gradient-to-b from-charcoal/80 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-9 h-9 border border-gold flex items-center justify-center
                              group-hover:bg-gold transition-all duration-300">
                <span className="font-serif text-gold group-hover:text-charcoal text-sm font-bold
                                 transition-colors duration-300">
                  MW
                </span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-gold" />
            </div>
            <div className="leading-tight">
              <p className="font-serif text-offwhite text-base font-semibold tracking-wide leading-none">
                Maldonado-Winz
              </p>
              <p className="text-gold text-[10px] tracking-[0.25em] uppercase font-sans font-medium">
                Immobilien
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1.5 text-offwhite/75 hover:text-gold
                                     transition-colors duration-200 text-sm tracking-wide font-sans">
                    {link.label}
                    <motion.div
                      animate={{ rotate: dropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={13} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48
                                   bg-charcoal border border-warm-border shadow-2xl overflow-hidden"
                      >
                        <div className="h-px bg-gold w-full" />
                        {link.dropdown.map((item, i) => (
                          <Link
                            key={i}
                            href={item.href}
                            className="flex items-center gap-3 px-5 py-3.5 text-sm text-offwhite/65
                                       hover:text-gold hover:bg-white/4 transition-all duration-200
                                       border-b border-warm-border/40 last:border-b-0 font-sans
                                       group/item"
                          >
                            <span className="w-1 h-1 rounded-full bg-gold/40 group-hover/item:bg-gold
                                           transition-colors" />
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="text-offwhite/75 hover:text-gold transition-colors duration-200
                             text-sm tracking-wide font-sans relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold
                                   transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="#kontakt"
              className="hidden lg:inline-flex items-center bg-gold text-charcoal
                         px-6 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase
                         hover:bg-gold-light transition-all duration-300 font-sans"
            >
              Immobilie bewerten
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-offwhite hover:text-gold transition-colors p-1"
              aria-label="Menü öffnen"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}>
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}>
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-charcoal border-t border-warm-border overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link, i) =>
                link.dropdown ? (
                  <div key={link.label} className="py-2">
                    <p className="text-gold/60 text-[10px] tracking-[0.3em] uppercase font-sans mb-3 px-2">
                      {link.label}
                    </p>
                    {link.dropdown.map((item, j) => (
                      <Link
                        key={j}
                        href={item.href}
                        className="flex items-center gap-3 py-2.5 pl-4 text-sm text-offwhite/65
                                   hover:text-gold transition-colors font-sans"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="w-1 h-1 rounded-full bg-gold/40" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href!}
                    className="block py-3 px-2 text-sm text-offwhite/75 hover:text-gold
                               transition-colors font-sans border-b border-warm-border/30"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-4">
                <Link
                  href="#kontakt"
                  className="block bg-gold text-charcoal text-center px-6 py-3.5
                             text-xs font-semibold tracking-widest uppercase font-sans"
                  onClick={() => setMobileOpen(false)}
                >
                  Immobilie bewerten
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
