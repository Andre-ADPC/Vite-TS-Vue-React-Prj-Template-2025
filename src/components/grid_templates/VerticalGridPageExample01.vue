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
  <div class="bg-white">
    <header class="bg-green-700 text-white text-center py-12">
      <div>
        <h3 class="h3-scoped mt-10">{{ msg }}</h3>
      </div>
      <h1 class="text-4xl font-bold mt-16">About Us</h1>
    </header>

    <section class="text-center py-12 px-4">
      <h2 class="h2-scoped">Mission And Values</h2>
      <p class="mt-4 text-gray-700 max-w-2xl mx-auto">
        Our mission is to provide exceptional business application development solutions services with a focus on
        availability, reliability, and continued support. We don't do "code". We engineer solutions, from all involved
        disciplines:<br />
      </p>
      <div class="flex justify-center space-x-8 mt-8 animate-fadeIn">
        <div class="transition transform hover:scale-110">
          <h3 class="h3-scoped">8+</h3>
          <p class="text-gray-700">Specialists</p>
        </div>
        <div class="transition transform hover:scale-110">
          <h3 class="h3-scoped">15+</h3>
          <p class="text-gray-700">Years of Experience</p>
        </div>
      </div>
    </section>

    <section class="bg-green-700 text-white py-12 px-4">
      <h2 class="text-2xl font-bold text-center">Our Vision</h2>
      <p class="mt-4 text-center max-w-2xl mx-auto">
        Application development solutions anytime, anywhere. We aim to revolutionize the application development
        industry by making quality application development solutions accessible to everyone.
      </p>
    </section>

    <section class="text-center py-12 px-4">
      <h2 class="h2-scoped">Our Application Development Solution Specialties</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        <div class="card-1">
          <h3 class="h3-scoped">Domain-Driven Design</h3>
        </div>
        <div class="card-1">
          <h3 class="h3-scoped">Model-Driven Development</h3>
        </div>
        <div class="card-1">
          <h3 class="h3-scoped">Behaviour-Driven Development</h3>
        </div>
        <div class="card-1">
          <h3 class="h3-scoped">Test-Driven Development</h3>
        </div>
      </div>
    </section>

    <section class="bg-gray-100 py-12 px-4">
      <h2 class="text-2xl font-bold text-center">State-Of-The-Art Technology</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
        <div class="card-2">
          <h3 class="h3-scoped">Advanced Business Implementations</h3>
          <p class="para-scope">
            We utilize the latest Software Technologies for designing and developing accurate, scalable and sustainable
            business solutions.
          </p>
        </div>
        <div class="card-3">
          <h3 class="h3-scoped">Virtual Meetings & Consultation</h3>
          <p class="para-scope">
            Consult with our specialists from the comfort of your office or home to address your requirements in a
            relaxed, yet focussed environment.
          </p>
        </div>
        <div class="card-2">
          <h3 class="h3-scoped">Agentic AI Development</h3>
          <p class="para-scope">
            We are not only referring to "Talking Heads" here. We develop various AI-based solutions and integrate them
            with your Business solutions. From first generation AI Chat-Assistants through to the leading-edge Agentic
            AI solutions and beyond while leveraging both public data and LLMs as well as Agents which will work and
            apply your business' private data and self-hosted LLM solutions.
          </p>
        </div>
        <div class="card-3">
          <h3 class="h3-scoped">Website and Webapp Development</h3>
          <p class="para-scope">
            We create encrypted, secure, authenticated yet easy access options to your business' websites and
            applications. Your business will be reachable from anywhere in the world, while being regional-conscious,
            and available in all the languages your business needs to function in.
          </p>
        </div>
      </div>
    </section>

    <section class="text-center py-12 px-4">
      <h2 class="h2-scoped">Committed To Your Business Health And Growth</h2>
      <p class="para-scope">
        There are various ways you can initiate your process of going forward and discover how we can be a partner
        alongside you on the path of future possibilities.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        <div class="card-1">
          <h3 class="h3-scoped">Book an Appointment</h3>
        </div>
        <div class="card-1">
          <h3 class="h3-scoped">Connect With Well-Informed Team Members</h3>
        </div>
        <div class="card-1">
          <h3 class="h3-scoped">Total Transparency and Common Sense</h3>
        </div>
        <div class="card-1">
          <h3 class="h3-scoped">Dive Into Deeper Consultation With Us</h3>
        </div>
      </div>
    </section>

    <section class="bg-green-700 text-white text-center py-12 px-4">
      <h2 class="h2-scoped">Client Testimonials</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
        <div class="card-4">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique mi."</p>
          <h3 class="mt-4 font-bold">- Client A</h3>
        </div>
        <div class="card-4">
          <p>"Nullam ac augue eget diam posuere vehicula. Vivamus quis nulla ac justo euismod posuere."</p>
          <h3 class="mt-4 font-bold">- Client B</h3>
        </div>
        <div class="card-4">
          <p>"Fusce tincidunt, arcu nec vestibulum tincidunt, eros massa ullamcorper urna."</p>
          <h3 class="mt-4 font-bold">- Client C</h3>
        </div>
      </div>
    </section>

    <section class="text-center py-12 px-4 w-full">
      <h2 class="h2-scoped">Get Answers To the Most Frequently Asked Questions</h2>
      <div class="mt-8">
        <div class="card-2">
          <h3 class="h3-scoped">How do I make an appointment online?</h3>
          <p class="para-scope">
            You can book an appointment online through our website or mobile app from
            [here](https://link.to.appointment.ui).
          </p>
        </div>
        <div class="card-3">
          <h3 class="h3-scoped">What types of software tests do you offer?</h3>
          <p class="para-scope">
            We offer a wide range of software tests including End-to-End tests, CI/CD pipelines, and more.
          </p>
        </div>
        <div class="card-2">
          <h3 class="h3-scoped">Do you accept payment plans?</h3>
          <p class="para-scope">
            Yes, we accept most common payment-settlement plans. Chat to us to discover how we could leverage your
            business cashflow to optimise the development finance outlay required
          </p>
        </div>
      </div>
    </section>

    <footer class="bg-green-700 text-white text-center py-8">
      <p>&copy; Copyright [Your Name] . All rights reserved. Made By [Your Dev Agency]</p>
    </footer>
  </div>
</template>

<style lang="postcss" scoped>
.read-the-docs {
  color: #41b883;
}
.card-1 {
  @apply p-4 shadow-lg rounded-lg bg-green-200 hover:bg-green-300 transition-colors;
}
.card-4 {
  @apply p-4 shadow-lg rounded-lg bg-green-600 hover:bg-green-400 transition-colors;
}
.card-2 {
  @apply p-4 border rounded-lg shadow-md bg-green-600 hover:bg-green-400  transition transform hover:scale-100 scale-90;
}
.card-3 {
  @apply p-4 border rounded-lg shadow-md bg-gray-100 hover:bg-gray-200  transition transform hover:scale-100 scale-90;
}
.para-scope {
  @apply font-mono mt-6;
}
.h1-scoped {
  @apply text-4xl font-bold mt-16;
}
.h2-scoped {
  @apply text-3xl font-bold text-center mt-14;
}
.h3-scoped {
  @apply text-2xl font-bold underline underline-offset-8;
}
.outline-scoped {
  @apply m-10 px-2 py-2 focus:outline outline-2 outline-blue-500 border-2 border-teal-600;
}
.frame-scoped {
  @apply m-2 px-4 py-2 focus:outline outline-2 outline-blue-500 border-2 border-teal-600;
}
.hero-image {
  @apply m-10 px-2 py-2 flex-auto;
}
.position-4-items {
  @apply flex items-center justify-center m-10 sm:w-1/3 lg:w-1/4;
}
.icon {
  height: 1.5em;
  padding: 0.5em;
  will-change: filter;
  transition: filter 300ms;
}
.icon.highlight:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
