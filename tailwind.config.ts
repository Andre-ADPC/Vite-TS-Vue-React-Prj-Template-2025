import type { Config } from 'tailwindcss'
import tailwindcssOpentype from 'tailwindcss-opentype'

const config: Config = {
  content: [
    './index.html', // Include the entry HTML
    './src/**/*.{vue,js,ts,jsx,tsx}', // Include all Vue and TypeScript files
    './components/**/*.{vue,js,ts}', // Include components
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    // The plugin might be missing some properties required by Tailwind's PluginCreator type. This is common with third-party plugins that don't fully conform to Tailwind's expected structure.

    // Explicitly define the plugin as a valid function for Tailwind
    tailwindcssOpentype as unknown as (params: { addUtilities: any; e: any; theme: any }) => void,
  ],
}

export default config
