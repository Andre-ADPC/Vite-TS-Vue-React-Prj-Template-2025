import type { Config } from 'tailwindcss'
import tailwindcssOpentype from 'tailwindcss-opentype'

const config: Config = {
  content: ['./src/**/*.{html,js,ts,vue}', './components/**/*.{html,js,ts,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    // The plugin might be missing some properties required by Tailwind's PluginCreator type. This is common with third-party plugins that don't fully conform to Tailwind's expected structure.

    // Explicitly define the plugin as a valid function for Tailwind
    tailwindcssOpentype as unknown as (params: { addUtilities: any; e: any; theme: any }) => void,
  ],
}

export default config
