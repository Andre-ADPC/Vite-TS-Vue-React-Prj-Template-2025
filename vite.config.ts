import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./Frontend/Vue/src', import.meta.url)),
      '@shared': fileURLToPath(new URL('./Shared', import.meta.url)),
    },
  },
  build: {
    // Multi-page setup: handle Landing Page and Vue app
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        vue: fileURLToPath(new URL('./Frontend/Vue/index.html', import.meta.url)),
      },
      output: {
        dir: './dist',
      },
    },
  },
})
