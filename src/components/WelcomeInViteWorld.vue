<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2 class="heading-scoped">Welcome in Vite World, Vue.JS 3!</h2>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code class="frame-scoped">components/WelcomeInViteWorld.vue</code> to
      test HMR
    </p>
    <p class="para-scope">
      We're also leveraging some Added tech stacks in this Project Template
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Logos to learn more</p>
</template>

<style lang="postcss" scoped>
.read-the-docs {
  color: #41b883;
}
.para-scope {
  @apply font-mono text-lg text-yellow-500 underline-offset-8;
}
.heading-scoped {
  @apply text-3xl font-bold underline underline-offset-8;
}
.outline-scoped {
  @apply m-10 px-2 py-2 focus:outline outline-2 outline-blue-500 border-2 border-teal-600;
}
.frame-scoped {
  @apply m-2 px-4 py-2 focus:outline outline-2 outline-blue-500 border-2 border-teal-600;
}
.position {
  @apply flex items-center justify-center m-10 sm:w-1/3 lg:w-1/4;
}
</style>
