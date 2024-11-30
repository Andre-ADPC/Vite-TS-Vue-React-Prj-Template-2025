<script setup lang="ts">
import WelcomeInViteWorld from '../components/WelcomeInViteWorld.vue'

// Dynamic Asset Loading Where required
function getImageUrl(name: string, ext: string): string {
  return new URL(`../assets/images/${name}.${ext}`, import.meta.url).href
}
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo vite" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="./assets/typescript.svg" class="logo ts" alt="TS logo" />
    </a>
    <a href="https://pinia.vuejs.org/" target="_blank">
      <img src="./assets/pinia.svg" class="logo pinia" alt="Pinia logo" />
    </a>
  </div>
  <WelcomeInViteWorld msg="Vite + Vue + TS + Pinia" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.ts:hover {
  filter: drop-shadow(0 0 2em #3179c6aa);
}
.logo.pinia:hover {
  filter: drop-shadow(0 0 2em #ffd24caa);
}
</style>
