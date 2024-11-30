<!-- @format -->

# <img src="src\assets\logo.svg" alt="Vue.JS 3 Logo" title="Vue JS Logo" width="40" style="box-shadow: 5px 5px 10px \#ffffff;"> — A Vue 3 Starting Template

---

🔭 This template can be used as a default starting Repository for Vue-based App Development.

The following **Functionality** is built-in.

> 1. [Ni Package Manager](https://github.com/antfu-collective/ni) - Smart, Automated Package Management.
> 2. [TypeScript](https://www.typescriptlang.org/) - For Config & Dev Work.
> 3. [ESLint](https://eslint.org/) Power Linter.
> 4. [Prettier](https://prettier.io/) Code Formating.
> 5. [Vite](https://vite.dev/) Builder & Bundler.
> 6. [Pinia](https://pinia.vuejs.org/) State Manager.
> 7. [Vitest](https://vitest.dev/) - For Unit & Feature Tests.
> 8. [Playwright](https://playwright.dev/) Testing Suite - For all tests Playwright can be used for.
> 9. [Cypress](https://www.cypress.io/) Testing Suite - For all tests Cypress can be used for.
> 10. [Tailwind CSS](https://tailwindcss.com/) - A Utility CSS framework
> 11. [PostCSS](https://postcss.org/) - A tool for transforming CSS with JavaScript.
> 12. [Sass CSS](https://sass-lang.com/) - Syntactically Awesome Style Sheets
> 13. [Less CSS]() -
> 14. [Native CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) - MDN CSS reference
> 15. [StyleLint](https://stylelint.io/) - A mighty CSS linter that helps you avoid errors and enforce conventions.

## Vue-Specific Add-on Features

> - [Vue Router](https://router.vuejs.org/) - The official Router for Vue.js
> - [Path Aliasing](https://jasonwatmore.com/vue-3-vite-add-path-alias-to-src-in-vite-config) - Configure Path Alias maps to speed-up TS Dev Work
> - Example Components - UI Agnostic
> - Auto-import Functionality
> - Authorization & Authentication
> - REST API Composable
> - GraphQL API Composable

### VS Code Extensions for Vue Dev Work

The following recommended IDE Extensions are not exclusive nor inclusive, as it depends a great deal on personal preferences, actual IDE used, and the type of projects getting developed on said Dev Platform.

- [GitLens — Supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - GitLens — Supercharge Git in VS Code
- [ToDo Highlighting](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight) - Highlight `TODO`, `FIXME` and other `annotations` within your code.
- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Support for `create-vue`, Vitesse, Petite-Vue, Volar.
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) - Markdown Support for Visual Studio Code (GitHub Flavour)
- [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) - Markdown Preview Enhanced is an open source project.
- [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets) - These snippets were built to supercharge a workflow in the most seamless manner possible.
- [Vue Ecosystem Snippets](https://marketplace.visualstudio.com/items?itemName=matijao.vue-nuxt-snippets) - Snippets for the modern Vue ecosystem - including Nuxt 3, Pinia, VueUse, Vue Router & Vue Macros.
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Tailwind CSS IntelliSense enhances the Tailwind development experience.
- [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode) - Quokka.js is a developer productivity tool for rapid JavaScript / TypeScript prototyping.
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - Localization Tooling. Manage All Translations in One Place.
- [CodebaseNotes](https://marketplace.visualstudio.com/items?itemName=AlexTsirozidis.codebasenotes)

---

### General Performance-Consideration Approaches Applied

1. Limitting Component Abstractions
2. Apply Lazy-loading to FCP Bundle size
3. Optimise Event Handling using Modifiers
4. Optimise Media Assets
5. Implement Server Side Rendering (SSR)
6. Check the Core Web Vitals

---

## The Template Structure

<img src="src\assets\Template_Tree.png" alt="Template Directory Structure" style="max-width: 100%;">

---

## Adding Unit, Integration, Functional | Feature, and E2E Test Capabilities

Apart from using Vitest for entry-level testing, additional Test capabilities using Playwright's & Cypress' Platforms will be added as the template gets expanded with sample standard best-practise methods and features.

The intent is to add Acceptance and performance Testing Functionality entry-points as well. These tests should obviously expand to include API testing from a Frontend Framework's prespective as well.

This will also roll-over into a formal CI/CD pipeline getting added using Git-based workflows supported by a local Jenkins configuration.

## Adding Generic Forms and UI Components

Generic Forms, Components and other standard-use Design Elements will be added as this template gets expanded.

The aim is to provide a low-friction entry-point for easily adding popular Vue and Nuxt UI frameworks as a particular preference or requirement.

Tailwind CSS supported by PostCSS is built in, and configured to catering for cases where Sass CSS, Less, or vanilla CSS classes might be needed.

## Autentication, Authorization & Encryption Foundations

The template will be pre-configured to apply foundational security principles. Apart from the obvious Auth processes and access management considered a minimum "must-have" demonstrated by [Vue Authenticate](https://github.com/dgrubelic/vue-authenticate), and [Nuxt Auth Utils](https://github.com/atinux/nuxt-auth-utils), the template caters for a best-practise approach to HTTP2/3 secure header employment by building on good [CSP practices](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), as well.

To cater for the evolution in Authentication technologies [Cerbos's JS SDK](https://github.com/cerbos/cerbos-sdk-javascript) and Auth Policy PDP approaches are included. These base-line Auth Policies will enable easy secure integration with REST and GraphQL APIs which might be employed by the Vue SPA only or when combined with a Backend framework of choice.

As a final part security related, the template will be adapted to include interfacing with Rust-based Web Assembly Modules for high quality Encryption | Decryption technology, aimed at surpassing the NIST standards.
Options currently considered to achieve these goals are from [Avarok Cybersecurity](https://github.com/Avarok-Cybersecurity) and [Terra Quantum](https://github.com/terra-quantum-public).

## SEO and SERP Foundations

Depending on how a Vue Application is configured to run, either as SSR or Client-based, SEO and the required SERP results still remain a crucial Business focuspoint. The template allows for employing both static and dynamic Metadata management. Some example guidelines were gained from [Vue Meta](https://github.com/nuxt/vue-meta/tree/next).

---
