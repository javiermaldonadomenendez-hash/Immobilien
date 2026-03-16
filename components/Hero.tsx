'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Search, MapPin, Home, TrendingUp, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { value: '15+', label: 'Jahre Erfahrung' },
  { value: '500+', label: 'Objekte vermittelt' },
  { value: '98%', label: 'Kundenzufriedenheit' },
  { value: '€2Mrd+', label: 'Transaktionsvolumen' },
]

export default function Hero() {
  const [location, setLocation] = useState('')
  const [propertyType, setPropertyType] = useState('alle')
  const [dealType, setDealType] = useState('kaufen')
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=90"
          alt="Premium Immobilien"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Multi-layer overlay for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/70 to-charcoal/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-charcoal/20" />
        <div className="absolute inset-0 bg-charcoal/10" />
      </motion.div>

      {/* Decorative gold accent lines */}
      <div className="absolute top-1/3 right-12 w-px h-48 bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden lg:block" />
      <div className="absolute bottom-32 left-12 w-32 h-px bg-gradient-to-r from-gold/40 to-transparent hidden lg:block" />

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-center"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16 w-full">
          <div className="max-w-3xl">

            {/* Label */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-gold" />
              <span className="section-label">Premium Immobilienmakler — München & Umgebung</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-offwhite text-5xl sm:text-6xl lg:text-7xl xl:text-8xl
                         font-bold leading-[1.05] mb-6"
            >
              Exzellenz in
              <br />
              <span className="text-gold italic">Immobilien.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-offwhite/60 text-lg lg:text-xl font-sans font-light leading-relaxed
                         mb-12 max-w-xl"
            >
              Wir verbinden anspruchsvolle Käufer mit außergewöhnlichen Immobilien.
              Vertrauen, Diskretion und Expertise seit über 15 Jahren.
            </motion.p>

            {/* Search Bar */}
            <motion.div variants={itemVariants}>
              <div className="bg-offwhite/8 backdrop-blur-xl border border-white/10 overflow-hidden
                              shadow-2xl shadow-charcoal/50">
                {/* Tabs */}
                <div className="flex border-b border-white/10">
                  {['Kaufen', 'Mieten'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setDealType(tab.toLowerCase())}
                      className={`flex-1 py-3 text-xs tracking-widest uppercase font-sans font-medium
                                  transition-all duration-300 ${
                                    dealType === tab.toLowerCase()
                                      ? 'bg-gold text-charcoal'
                                      : 'text-offwhite/50 hover:text-offwhite/80'
                                  }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Inputs */}
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 flex items-center gap-3 px-5 py-4 border-b md:border-b-0
                                  md:border-r border-white/10">
                    <MapPin size={16} className="text-gold flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Ort, Stadteil oder PLZ"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="bg-transparent text-offwhite placeholder-offwhite/30 text-sm
                                 outline-none w-full font-sans"
                    />
                  </div>

                  <div className="flex items-center gap-3 px-5 py-4 border-b md:border-b-0
                                  md:border-r border-white/10">
                    <Home size={16} className="text-gold flex-shrink-0" />
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="bg-transparent text-offwhite/70 text-sm outline-none
                                 cursor-pointer font-sans appearance-none pr-4"
                    >
                      <option value="alle">Alle Typen</option>
                      <option value="wohnung">Wohnung</option>
                      <option value="haus">Haus</option>
                      <option value="villa">Villa</option>
                      <option value="penthouse">Penthouse</option>
                      <option value="gewerbe">Gewerbe</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-3 px-5 py-4 border-b md:border-b-0
                                  md:border-r border-white/10">
                    <TrendingUp size={16} className="text-gold flex-shrink-0" />
                    <select
                      className="bg-transparent text-offwhite/70 text-sm outline-none
                                 cursor-pointer font-sans appearance-none pr-4"
                    >
                      <option>Alle Preise</option>
                      <option>bis 500.000 €</option>
                      <option>500T – 1 Mio €</option>
                      <option>1 – 2 Mio €</option>
                      <option>2 – 5 Mio €</option>
                      <option>ab 5 Mio €</option>
                    </select>
                  </div>

                  <button
                    className="flex items-center justify-center gap-2 bg-gold text-charcoal
                               px-8 py-4 font-sans font-semibold text-sm tracking-widest uppercase
                               hover:bg-gold-light transition-all duration-300 group"
                  >
                    <Search size={15} className="group-hover:scale-110 transition-transform" />
                    Suchen
                  </button>
                </div>
              </div>

              <p className="text-offwhite/30 text-xs font-sans mt-3 ml-1">
                Aktuell{' '}
                <span className="text-gold font-medium">47 Premium-Objekte</span>{' '}
                in Ihrer Region verfügbar
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        className="relative z-10 border-t border-white/10 bg-charcoal/60 backdrop-blur-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="py-6 px-8 text-center hover:bg-white/3 transition-colors group"
              >
                <p className="font-serif text-2xl lg:text-3xl text-gold font-bold group-hover:scale-105
                               transition-transform duration-300 origin-bottom">
                  {stat.value}
                </p>
                <p className="text-offwhite/45 text-xs tracking-widest uppercase font-sans mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-32 right-10 hidden lg:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity }}
      >
        <span className="text-offwhite/30 text-[9px] tracking-[0.3em] uppercase font-sans
                         [writing-mode:vertical-lr]">
          Scrollen
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={14} className="text-gold" />
        </motion.div>
      </motion.div>
    </section>
  )
}
