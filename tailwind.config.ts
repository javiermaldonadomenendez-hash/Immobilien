import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core
        ink:    '#1A1A18',   // Warmes Fast-Schwarz
        paper:  '#FFFFFF',

        // Hintergrund
        sand:   '#F5F0E8',   // Warmes Beige/Sand
        'sand-dark': '#EDE6D6', // Etwas dunkleres Beige für Kontrast

        // Brand – Braun
        brown:  '#5C4A3A',   // Primärfarbe Dunkelbraun
        'brown-800': '#3E3028',
        'brown-600': '#7A6455',
        'brown-200': '#D4C4B0',
        'brown-100': '#EDE6D6',

        // Akzent – Warmes Taupe
        taupe:  '#9C8B7A',
        'taupe-light': '#B8A898',
        'taupe-dark':  '#7A6B5C',

        // Neutrals Hellgrau (kühler Kontrast)
        'grey-50':  '#F8F8F6',
        'grey-100': '#F0EFEC',
        'grey-200': '#E2E0DB',
        'grey-300': '#C8C4BC',
        'grey-400': '#A8A49C',
        'grey-500': '#888480',
        'grey-600': '#6A6660',
        'grey-800': '#3A3830',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'Times New Roman', 'serif'],
        sans:    ['var(--font-inter)', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '10xl': ['10rem',  { lineHeight: '0.9' }],
        '11xl': ['12rem',  { lineHeight: '0.88' }],
        '12xl': ['14rem',  { lineHeight: '0.85' }],
        '13xl': ['16rem',  { lineHeight: '0.82' }],
      },
      letterSpacing: {
        'editorial': '0.25em',
        'widest-2': '0.35em',
      },
      borderWidth: {
        '0.5': '0.5px',
      },
    },
  },
  plugins: [],
}

export default config
