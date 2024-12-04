import type { Config } from 'tailwindcss'

export default {
  content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-opentype')],
} satisfies Config
