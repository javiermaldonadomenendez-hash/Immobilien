'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Phone, Star } from 'lucide-react'

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden
                     bg-sand border-t border-grey-200 shadow-lg
                     pb-[env(safe-area-inset-bottom)]"
        >
          <div className="flex items-stretch divide-x divide-grey-200">
            {/* Anrufen */}
            <a
              href="tel:+498912345678"
              className="flex-1 flex flex-col items-center justify-center gap-1 py-3.5 px-4
                         hover:bg-grey-50 transition-colors active:bg-grey-100"
            >
              <Phone size={18} strokeWidth={1.5} className="text-brown" />
              <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-brown">
                Anrufen
              </span>
            </a>

            {/* Bewertung starten (primary CTA) */}
            <Link
              href="#bewertung"
              className="flex-[2] flex flex-col items-center justify-center gap-1 py-3.5 px-4
                         bg-taupe hover:bg-taupe-dark transition-colors active:bg-taupe-dark"
            >
              <Star size={18} strokeWidth={1.5} className="text-sand" />
              <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-sand">
                Immobilie bewerten
              </span>
            </Link>

            {/* Kontakt */}
            <Link
              href="#kontakt"
              className="flex-1 flex flex-col items-center justify-center gap-1 py-3.5 px-4
                         hover:bg-grey-50 transition-colors active:bg-grey-100"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="1.5" className="text-brown">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-brown">
                Kontakt
              </span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
