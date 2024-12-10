import { generate } from 'critical'
import { resolve } from 'path'
import { promises as fs } from 'fs'

const distPath = resolve(__dirname, 'dist') // Path to the build output directory
const htmlFile = resolve(distPath, 'index.html') // Target the main HTML file

async function inlineCriticalCSS() {
  console.log('Starting Critical CSS extraction...')

  try {
    // Ensure the dist directory exists
    await fs.access(distPath)

    // Generate and inline critical CSS
    const result = await generate({
      inline: true,
      base: distPath,
      src: 'index.html',
      target: {
        html: 'index.html',
        css: 'styles.critical.css', // Optional: Output critical-only CSS file
      },
      dimensions: [
        { width: 375, height: 667 }, // Mobile
        { width: 1920, height: 1080 }, // Desktop
      ],
    })

    console.log('Critical CSS inlined successfully!')
  } catch (error) {
    console.error('Error during Critical CSS extraction:', error)
  }
}

inlineCriticalCSS()
