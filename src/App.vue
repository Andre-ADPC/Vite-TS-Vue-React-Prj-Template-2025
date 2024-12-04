<script setup lang="ts">
import WelcomeInViteWorld from './components/WelcomeInViteWorld.vue'

// Dynamic Asset Loading Where required
function getImageUrl(name: string, ext: string): string {
  return new URL(`/images/${name}.${ext}`, import.meta.url).href
}
</script>

<template>
  <WelcomeInViteWorld msg="Welcome in Vite World, Vue.JS 3!" />
</template>

<style></style>
