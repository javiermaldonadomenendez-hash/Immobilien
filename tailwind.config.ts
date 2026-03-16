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
        ink: '#0A0A0A',
        paper: '#FFFFFF',
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
        display: ['var(--font-bebas)', 'Impact', 'Arial Narrow', 'sans-serif'],
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
