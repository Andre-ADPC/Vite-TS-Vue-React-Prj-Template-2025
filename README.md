# The Desired Project Name => Vite-TS-Vue-Prj-Template-2025

This template should help get you started developing with Vite and TypeScript in Vue.JS 3. Various CSS technologies are made available by default.

The project is Domain-Driven Design-based and applies best-practice TDD aproaches using Model-Driven evaluation, Behavioural Design followed by Unit, Functional, Component, Integration, and End-to-End testing running on both the Playwright and Cypress testing frameworks.

For detail on how the Project Template is structured, a VitePress Documentation section is added in the repository's **[DOCS](./DOCS/)** folder. You can refer to the details covering each section, and expand on those when shaping the template into as per your unique requirements.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

Refer to the `.vscode` configuration file for the recommended extensions. Should other IDEs be preferred, please refer to thier respective extension marketplaces for suitable equivalents.

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

Strict Types are applied by default, and various TypeScript IDE tools are used to assist with making the DX clear, controlled and feature-rich, while driven by high quality standards, and practices.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project DevOps Employs a Jenkins CI/CD Workflow

The project is served by a locally installed Jenkins Server tunnelled to GithHub via Cloudflare's tunelling technology. This specific template project will thus be kept up to date and managed in a suitable CI/CD pipeline workflow suited to the various and dynamic platform and framework integrations.

## Detailed Project Scope

Fore detail please refer to ...

## Project Setup

### Installing Packages from `package.json`

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Running Component, Functional and E2E Tests

These tests can each be ran with their respective scripts.

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
