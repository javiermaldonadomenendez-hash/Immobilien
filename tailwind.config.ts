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
        ink:    '#0A0A0A',
        paper:  '#FFFFFF',
        cream:  '#FAF8F4',   // Hintergrund Off-White/Creme

        // Brand
        navy:   '#1C2B4A',   // Primärfarbe Dunkelblau
        'navy-800': '#152038',
        'navy-600': '#2D4270',
        'navy-200': '#D0D9EC',
        'navy-100': '#EAF0F7',

        gold:   '#B8955A',   // Akzentfarbe Gold/Cognac
        'gold-light': '#D4B483',
        'gold-dark':  '#8C6E3C',

        // Neutrals
        'grey-50':  '#FAFAFA',
        'grey-100': '#F4F4F4',
        'grey-200': '#E8E8E8',
        'grey-300': '#D0D0D0',
        'grey-400': '#A0A0A0',
        'grey-500': '#808080',
        'grey-600': '#5A5A5A',
        'grey-800': '#2A2A2A',
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
