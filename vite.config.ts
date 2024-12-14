import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import react from '@vitejs/plugin-react'

// Configure multi-page setup and paths
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools(), react()],
  resolve: {
    alias: {
      // Base alias for Shared folder
      '@shared': fileURLToPath(new URL('./Shared', import.meta.url)),
      // Alias specific to Vue sub-project
      '@vue': fileURLToPath(new URL('./Frontend/Vue', import.meta.url)),
      // Alias for React sub-project (mocked for now)
      '@react': fileURLToPath(new URL('./Frontend/React', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      // Define entry points for different sub-projects
      input: {
        root: fileURLToPath(new URL('./index.html', import.meta.url)), // Root landing selector
        landing: fileURLToPath(new URL('./index.landing.html', import.meta.url)), // Landing page
        vue: fileURLToPath(new URL('./Frontend/Vue/index.vue.html', import.meta.url)), // Vue app
        react: fileURLToPath(new URL('./Frontend/React/index.react.html', import.meta.url)), // React app
      },
      output: {
        dir: 'dist', // Unified build directory for all sub-projects
      },
    },
  },
  server: {
    open: '/index.html', // Default entry point
  },
})
