# A Cross-Framework Vite-TS-Vue-React Project Template-2025

It is an experiment to see how tricky and convoluted things might or might not get when you build the exact same App with two JS frameworks at the same time, in the same Repo and then compare their performance, quirks, pains and gains alongside each other on the same hardware, using the same complimentary assets.

It is a continued WIP, growing into the shape I'm looking to achieve every week.

This template should help get you started developing with Vite and TypeScript in Vue.JS 3 and React 19 in the same house. Various Testing and CSS technologies are made available and applied by default.

The project is Domain-Driven Design-based and applies best-practice TDD approaches using Model-Driven evaluation, and Behavioural-Driven Design followed by Unit, Functional, Component, Integration, and End-to-End testing running on both the Playwright and Cypress testing frameworks. I've also included both Vitest and Jest to play around with Unit and Integration testing functionality.

Playwright and Cypress will be put through their paces to see how broad and wide they can be pushed to function from Unit testing all the way through to E2E testing.

For details on how the Project Template is structured, a VitePress Documentation section will be added to the repository's **[DOCS](./DOCS/)** folder once everything is working reliably in the intended starting configuration. You can, if you feel the need, refer to the details covering each section, and expand on those when shaping the template as per your unique project requirements.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

Refer to the `.vscode` configuration file for the recommended extensions. Should other IDEs be preferred, please refer to their respective extension marketplaces for suitable equivalents.

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

Strict Types are applied by default, and various TypeScript IDE tools are used to assist with making the DX clear, controlled and feature-rich, while driven by high quality standards, and practices.

We have added all the key _VS Code Extensions_ we use under the `.vscode` folder. Look out for the `extensions.json` file, they are listed there.

## Customize configuration

See the [Vite Configuration Reference](https://vite.dev/config/).
See the [TypeScript TSConfig Reference](https://www.typescriptlang.org/tsconfig/).

## Project DevOps Employs a Jenkins CI/CD Workflow

The project is served by a locally installed Jenkins Server tunnelled to GitHub via Cloudflare's tunnelling technology. This specific template project will thus be kept up to date and managed in a suitable CI/CD pipeline workflow suited to the various and dynamic platform and framework integrations.

## Detailed Project Scope

For more detail please refer to the **[DOCS](./DOCS/)** folder for now.
The project's tree will give you a bird's eye view of the general layout and how these things are interacting. Most, hopefully all custom JS files will be converted to TypeScript to allow for future maintainability as well as flexibility to test the code in situ, while development progresses.

The Jenkins pipeline is a multi-branch type and is getting structured to accommodate a TDD approach instead of doing Unit and Integration testing as an afterthought. An example [Jenkinsfile](./Jenkins/JenkinsfileExample) will illustrate how the CI/CD process will ultimately function from "continuous commits" through to continuous deployments while the Jenkins server is based on my local machine getting triggered by the Repo's _webhook_ designed for that specific purpose.

## General Project Setup

**NOTE**: The commands here are varied and growing, the final versions will be added here once they have been tested and gotten to work as expected. For more detail on the current **NPM Scripts** available to run, refer to the `"scripts": {...},` section in the `package.json` file.

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
