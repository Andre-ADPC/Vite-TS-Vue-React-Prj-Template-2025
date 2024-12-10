<script setup lang="ts">
import { ref } from 'vue'
// Dynamic Asset Loading Where required
function getImageUrl(name: string, ext: string): string {
  return new URL(`/images/${name}.${ext}`, import.meta.url).href
}
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <section
    class="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-10 pt-10 sm:pb-16 sm:pt-16 lg:pb-24 lg:pt-24 xl:pb-32 xl:pt-40 mt-10"
  >
    <!-- Underlying Hero Image -->
    <div class="relative h-screen w-full">
      <img src="/og-proj-sm01.webp" alt="Background Image" class="hero-image" />
      <div class="absolute inset-0 bg-black bg-opacity-0"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0">
        <div class="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-4xl font-bold tracking-tight text-yellow-600 sm:text-6xl">
              Refreshingly Sustainable:
              <span class="text-gray-900">Boxed </span
              ><span class="text-gray-400 line-through decoration-red-900">Software </span
              ><span class="text-red-900">Hotware</span
              ><span class=""><sup class="font-features text-gray-900 sups">*</sup></span>
            </h1>

            <h2 class="mt-6 text-lg leading-8 text-gray-800">
              Choose a more dev-friendly way to "hydrate" with our 100% adaptable solutions.
            </h2>
          </div>
          <div class="m-10 flex items-center justify-center text-4xl font-black">
            <h2>Vite + TS + Vue + Pinia</h2>
          </div>
          <div>
            <h3 class="heading-scoped">{{ msg }}</h3>
          </div>
        </div>

        <!-- Icon Group One Start -->
        <div class="mx-auto my-8 max-w-2xl rounded-lg border-2 border-dashed border-gray-500 bg-gray-400 p-4 shadow-xl">
          <div class="m-2 mx-auto grid w-full grid-cols-4 gap-14">
            <div class="rounded-lg bg-gray-300">
              <a href="#" target="_blank">
                <svg
                  class="h-auto w-28"
                  fill="current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="-25 -25 100 100"
                >
                  <path
                    d="M11 39h7.5V26.5h11V39H37V19.5L24 9.75 11 19.5Zm-3 3V18L24 6l16 12v24H26.5V29.5h-5V42Zm16-17.65Z"
                  />
                </svg>
              </a>
            </div>
            <div class="rounded-lg bg-gray-300">
              <a href="#">
                <svg
                  class="h-auto w-28"
                  fill="current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="-25 -25 100 100"
                >
                  <path
                    d="M12 40q-3.3 0-5.65-2.35Q4 35.3 4 32V16q0-3.3 2.35-5.65Q8.7 8 12 8h24q3.3 0 5.65 2.35Q44 12.7 44 16v16q0 3.3-2.35 5.65Q39.3 40 36 40Zm0-23.5h24q1.45 0 2.725.45Q40 17.4 41 18.25V16q0-2.1-1.45-3.55Q38.1 11 36 11H12q-2.1 0-3.55 1.45Q7 13.9 7 16v2.25q1-.85 2.275-1.3Q10.55 16.5 12 16.5Zm-4.85 6.8L31 29.05q.35.1.725.025.375-.075.625-.325l8-6.7q-.65-1.15-1.8-1.85-1.15-.7-2.55-.7H12q-1.75 0-3.1 1.075T7.15 23.3Z"
                  />
                </svg>
              </a>
            </div>
            <div class="rounded-lg bg-gray-300">
              <a href="#">
                <svg
                  class="h-auto w-28"
                  fill="current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="-25 -25 100 100"
                >
                  <path
                    d="M12 28.05h15.65v-3H12Zm0-6.5h24v-3H12Zm0-6.5h24v-3H12ZM4 44V7q0-1.15.9-2.075Q5.8 4 7 4h34q1.15 0 2.075.925Q44 5.85 44 7v26q0 1.15-.925 2.075Q42.15 36 41 36H12Zm3-7.25L10.75 33H41V7H7ZM7 7v29.75Z"
                  />
                </svg>
              </a>
            </div>
            <div class="rounded-lg bg-gray-300">
              <a href="#">
                <svg
                  class="h-auto w-28"
                  fill="current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="-25 -25 100 100"
                >
                  <path
                    d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Zm3-3h26v-1.7q0-.8-.475-1.525-.475-.725-1.175-1.075-3.2-1.55-5.85-2.125Q26.85 30 24 30t-5.55.575q-2.7.575-5.85 2.125-.7.35-1.15 1.075Q11 34.5 11 35.3Zm13-16.05q1.95 0 3.225-1.275Q28.5 18.4 28.5 16.45q0-1.95-1.275-3.225Q25.95 11.95 24 11.95q-1.95 0-3.225 1.275Q19.5 14.5 19.5 16.45q0 1.95 1.275 3.225Q22.05 20.95 24 20.95Zm0-4.5ZM24 37Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <!-- Icon Group One END -->
        <h3 class="text-center font-mono text-xl font-bold leading-8 text-yellow-600 underline-offset-8">
          We're also leveraging some Added tech stacks in this Project Template
        </h3>
        <!-- Icon Group Two Start -->
        <div class="mx-auto my-4 max-w-max rounded-lg border-2 border-dashed border-gray-500 bg-gray-400 p-4 shadow-xl">
          <div class="m-2 mx-auto grid w-full grid-cols-5 gap-16">
            <div class="rounded-lg bg-gray-300">
              <a href="#" target="_blank">
                <svg
                  class="h-auto w-16"
                  fill="current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="-25 -25 100 100"
                >
                  <path
                    d="M11 39h7.5V26.5h11V39H37V19.5L24 9.75 11 19.5Zm-3 3V18L24 6l16 12v24H26.5V29.5h-5V42Zm16-17.65Z"
                  />
                </svg>
                Icon 1
              </a>
            </div>
            <div class="rounded-lg bg-gray-300">
              <a href="#">
                <svg
                  class="h-auto w-16"
                  fill="current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="-25 -25 100 100"
                >
                  <path
                    d="M12 40q-3.3 0-5.65-2.35Q4 35.3 4 32V16q0-3.3 2.35-5.65Q8.7 8 12 8h24q3.3 0 5.65 2.35Q44 12.7 44 16v16q0 3.3-2.35 5.65Q39.3 40 36 40Zm0-23.5h24q1.45 0 2.725.45Q40 17.4 41 18.25V16q0-2.1-1.45-3.55Q38.1 11 36 11H12q-2.1 0-3.55 1.45Q7 13.9 7 16v2.25q1-.85 2.275-1.3Q10.55 16.5 12 16.5Zm-4.85 6.8L31 29.05q.35.1.725.025.375-.075.625-.325l8-6.7q-.65-1.15-1.8-1.85-1.15-.7-2.55-.7H12q-1.75 0-3.1 1.075T7.15 23.3Z"
                  />
                </svg>
                Icon 2
              </a>
            </div>
            <div class="rounded-lg bg-gray-300">
              <a href="#">
                <svg
                  class="h-auto w-16"
                  fill="current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="-25 -25 100 100"
                >
                  <path
                    d="M12 28.05h15.65v-3H12Zm0-6.5h24v-3H12Zm0-6.5h24v-3H12ZM4 44V7q0-1.15.9-2.075Q5.8 4 7 4h34q1.15 0 2.075.925Q44 5.85 44 7v26q0 1.15-.925 2.075Q42.15 36 41 36H12Zm3-7.25L10.75 33H41V7H7ZM7 7v29.75Z"
                  />
                </svg>
                Icon 3
              </a>
            </div>
            <div class="rounded-lg bg-gray-300">
              <a href="#">
                <svg
                  class="h-auto w-16"
                  fill="current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="-25 -25 100 100"
                >
                  <path
                    d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Zm3-3h26v-1.7q0-.8-.475-1.525-.475-.725-1.175-1.075-3.2-1.55-5.85-2.125Q26.85 30 24 30t-5.55.575q-2.7.575-5.85 2.125-.7.35-1.15 1.075Q11 34.5 11 35.3Zm13-16.05q1.95 0 3.225-1.275Q28.5 18.4 28.5 16.45q0-1.95-1.275-3.225Q25.95 11.95 24 11.95q-1.95 0-3.225 1.275Q19.5 14.5 19.5 16.45q0 1.95 1.275 3.225Q22.05 20.95 24 20.95Zm0-4.5ZM24 37Z"
                  />
                </svg>
                Icon 4
              </a>
            </div>
            <div class="rounded-lg bg-gray-300">
              <a href="#">
                <svg
                  class="h-auto w-16"
                  fill="current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="-25 -25 100 100"
                >
                  <path
                    d="M11 39h7.5V26.5h11V39H37V19.5L24 9.75 11 19.5Zm-3 3V18L24 6l16 12v24H26.5V29.5h-5V42Zm16-17.65Z"
                  />
                </svg>
                Icon 5
              </a>
            </div>
          </div>
          <!-- Icon Group Two END -->
        </div>
        <p class="text-lime-800">Click on the Logos to learn more</p>
      </div>
    </div>
    <div class="relative inset-0 flex flex-col items-center justify-center">
      <p class="text-gray-250 text-sm">
        * Hotware<sup class="font-features sups">TM</sup> is a trademark of ADPC Projects (IE)
      </p>
    </div>
  </section>

  <section>
    <div class="m-2 flex items-center justify-center gap-x-6">
      <a
        class="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        href="/login"
        >Count Test:
        <button type="button" @click="count++">count is {{ count }}</button>
      </a>
    </div>

    <div class="m-10 flex items-center justify-center">
      <button type="button" @click="count++">count is {{ count }}</button>
    </div>

    <div class="m-4 flex items-center justify-center gap-4">
      <p>
        <span>Edit</span>
        <span
          ><button
            class="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 border-2 border-solid border-green-800 p-4 font-semibold text-green-800"
            href="./src/components/WelcomeInViteWorld.vue"
          >
            components/WelcomeInViteWorld.vue
          </button></span
        ><span> to test HMR</span>
      </p>
    </div>
    <div class="m-10 flex items-center justify-center gap-4">
      <p>
        Check out
        <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
        starter
      </p>
      <p>
        Learn more about IDE Support for Vue in the
        <a
          href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
          target="_blank"
          class="font-bold text-green-800"
          >Vue Docs Scaling up Guide.</a
        >
      </p>
    </div>
  </section>

  <section>
    <div
      class="bg-left-top bg-no-repeat"
      style="background-image: url(https://images.unsplash.com/photo-1511183984173-2d821acc8407)"
    ></div>
    <div
      class="bg-top bg-no-repeat"
      style="background-image: url(https://images.unsplash.com/photo-1511183984173-2d821acc8407)"
    ></div>
    <div
      class="bg-right-top bg-no-repeat"
      style="background-image: url(https://images.unsplash.com/photo-1511183984173-2d821acc8407)"
    ></div>
    <div
      class="bg-left bg-no-repeat"
      style="background-image: url(https://images.unsplash.com/photo-1511183984173-2d821acc8407)"
    ></div>
    <div
      class="bg-center bg-no-repeat"
      style="background-image: url(https://images.unsplash.com/photo-1511183984173-2d821acc8407)"
    ></div>
    <div
      class="bg-right bg-no-repeat"
      style="background-image: url(https://images.unsplash.com/photo-1511183984173-2d821acc8407)"
    ></div>
    <div
      class="bg-left-bottom bg-no-repeat"
      style="background-image: url(https://images.unsplash.com/photo-1511183984173-2d821acc8407)"
    ></div>
    <div
      class="bg-bottom bg-no-repeat"
      style="background-image: url(https://images.unsplash.com/photo-1511183984173-2d821acc8407)"
    ></div>
    <div
      class="bg-right-bottom bg-no-repeat"
      style="background-image: url(https://images.unsplash.com/photo-1511183984173-2d821acc8407)"
    ></div>
  </section>

  <!--   <section>
    <div class="flex items-center justify-center p-12">
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png" alt="gfg" />
    </div>
    <div
      class="text-primary-200 current m-10 flex items-center justify-center rounded bg-green-500 p-12 px-3 py-2 font-medium leading-5 hover:bg-yellow-700 hover:fill-white hover:text-white"
    >
      <svg
        class="mr-1 inline-block h-auto w-10"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        stroke="currentColor"
        width="100%"
        height="100%"
        viewBox="0 -25 100 100"
      >
        <path
          d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Zm3-3h26v-1.7q0-.8-.475-1.525-.475-.725-1.175-1.075-3.2-1.55-5.85-2.125Q26.85 30 24 30t-5.55.575q-2.7.575-5.85 2.125-.7.35-1.15 1.075Q11 34.5 11 35.3Zm13-16.05q1.95 0 3.225-1.275Q28.5 18.4 28.5 16.45q0-1.95-1.275-3.225Q25.95 11.95 24 11.95q-1.95 0-3.225 1.275Q19.5 14.5 19.5 16.45q0 1.95 1.275 3.225Q22.05 20.95 24 20.95Zm0-4.5ZM24 37Z"
        /></svg
      >Woohoo!
    </div>

    <div>
      <button
        class="text-primary-100 m-2 inline-flex items-center rounded bg-green-500 px-2 py-2 font-medium leading-5 text-white hover:bg-purple-700 hover:text-white"
      >
        <svg
          class="mr-1 inline-block h-5 w-5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          ></path>
        </svg>
        Woohoo!
      </button>
    </div>
  </section> -->
</template>

<style lang="postcss" scoped>
.section1 {
  @apply relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-10 pt-10 sm:pb-16 sm:pt-16 lg:pb-24 lg:pt-24 xl:pb-32 xl:pt-40;
}

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
.hero-image {
  @apply absolute inset-0 h-full w-full object-cover blur-sm filter;
}
.position {
  @apply flex items-center justify-center m-10 sm:w-1/3 lg:w-1/4;
}
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
