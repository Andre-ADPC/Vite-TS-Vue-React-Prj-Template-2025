# Project_Tree.MD

Use **VSCode File Tree Generator** and run the following command in VS Code's Settings Control Bar:

1. Open a directory in VS Code
2. Right-click on the directory in the explorer panel
3. Select Generate File Tree
4. Copy the Content from the temporary `.vscode` file and save it where required.

## First Phase Prior to Restructuring

project-root/
┣ 📂.vscode
┃ ┣ 📜extensions.json
┃ ┗ 📜settings.json
┣ 📂APIs_GQL
┣ 📂APIs_Rest
┣ 📂BE_WP
┣ 📂DOCS
┃ ┣ 📂Licenses
┃ ┃ ┣ 📜LICENSE
┃ ┃ ┗ 📜LICENSE-MIT.md
┃ ┣ 📜.project_structure_filter
┃ ┣ 📜.project_structure_ignore
┃ ┣ 📜Automated Secure FTP to Remote Directory.md
┃ ┣ 📜Build a Jenkins Pipeline.md
┃ ┣ 📜Debugging TypeScript Functionality.MD
┃ ┣ 📜Experimenting With HTML.md
┃ ┣ 📜Project Landing Page - Tailwind Playground.md
┃ ┣ 📜PROJECT_INITIATION_STEPS.md
┃ ┣ 📜PROJECT_OVERVIEW.md
┃ ┣ 📜project_structure_filtered.txt
┃ ┣ 📜README_VUE.md
┃ ┣ 📜temp.txt
┃ ┗ 📜Vue3_TypeScript_Vite.md
┣ 📂FE_React
┣ 📂FE_Vue
┣ 📂public
┃ ┣ 📜ADPC-dark.svg
┃ ┣ 📜ADPC-light.svg
┃ ┣ 📜android-chrome-192x192.png
┃ ┣ 📜android-chrome-512x512.png
┃ ┣ 📜apple-touch-icon.png
┃ ┣ 📜Copy to HTML Head section.txt
┃ ┣ 📜favicon-16x16.png
┃ ┣ 📜favicon-32x32.png
┃ ┣ 📜favicon.ico
┃ ┣ 📜logo.svg
┃ ┣ 📜og-proj-sm01.jpg
┃ ┣ 📜og-proj-sm01.webp
┃ ┣ 📜og-proj-sm02.webp
┃ ┣ 📜pinia.svg
┃ ┣ 📜typescript.svg
┃ ┣ 📜vite.svg
┃ ┗ 📜vue.svg
┣ 📂src
┃ ┣ 📂assets
┃ ┃ ┣ 📂fonts
┃ ┃ ┣ 📂images
┃ ┃ ┃ ┣ 📜ADPCBanner.jpeg
┃ ┃ ┃ ┣ 📜cypress-light.svg
┃ ┃ ┃ ┣ 📜cypress.svg
┃ ┃ ┃ ┣ 📜playwright.svg
┃ ┃ ┃ ┣ 📜postcss.svg
┃ ┃ ┃ ┣ 📜stylelint-dark.svg
┃ ┃ ┃ ┣ 📜stylelint.svg
┃ ┃ ┃ ┗ 📜tailwind.svg
┃ ┃ ┣ 📂scripts
┃ ┃ ┗ 📂styles
┃ ┃ ┣ 📜adpc-preset.js
┃ ┃ ┣ 📜base.css
┃ ┃ ┣ 📜base.old.css
┃ ┃ ┗ 📜main.css
┃ ┣ 📂components
┃ ┃ ┣ 📂**vitests**
┃ ┃ ┃ ┣ 📂cypress_ct
┃ ┃ ┃ ┣ 📂playwright-ct
┃ ┃ ┃ ┗ 📜HelloWorld.spec.ts
┃ ┃ ┣ 📂grid_templates
┃ ┃ ┃ ┗ 📜VerticalGridPageExample01.vue
┃ ┃ ┣ 📂icons
┃ ┃ ┃ ┣ 📜IconCommunity.vue
┃ ┃ ┃ ┣ 📜IconDocumentation.vue
┃ ┃ ┃ ┣ 📜IconEcosystem.vue
┃ ┃ ┃ ┣ 📜IconSupport.vue
┃ ┃ ┃ ┗ 📜IconTooling.vue
┃ ┃ ┣ 📂navigation_options
┃ ┃ ┃ ┣ 📜NavBar1.vue
┃ ┃ ┃ ┣ 📜NavBar2.vue
┃ ┃ ┃ ┗ 📜NavBar3.vue
┃ ┃ ┣ 📜HelloWorld.vue
┃ ┃ ┣ 📜TheWelcome.vue
┃ ┃ ┣ 📜WelcomeInViteWorld.vue
┃ ┃ ┗ 📜WelcomeItem.vue
┃ ┣ 📂router
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂stores
┃ ┃ ┗ 📜counter.ts
┃ ┣ 📂tests
┃ ┃ ┣ 📂cypress
┃ ┃ ┗ 📂playwright
┃ ┣ 📂views
┃ ┃ ┣ 📜AboutView.vue
┃ ┃ ┗ 📜HomeView.vue
┃ ┣ 📜App.vue
┃ ┣ 📜AppOne.vue
┃ ┗ 📜main.ts
┣ 📜.editorconfig
┣ 📜.gitignore
┣ 📜.prettierrc.json
┣ 📜.stylelintrc.json
┣ 📜critical.ts
┣ 📜env.d.ts
┣ 📜eslint.config copy.js
┣ 📜eslint.config.js
┣ 📜index.html
┣ 📜JenkinsfileExample
┣ 📜package.json
┣ 📜postcss.config.js
┣ 📜README.md
┣ 📜site.webmanifest
┣ 📜tailwind.config copy.ts
┣ 📜tailwind.config.ts
┣ 📜tsconfig.app.json
┣ 📜tsconfig.json
┣ 📜tsconfig.node.json
┣ 📜tsconfig.vitest.json
┣ 📜vite.config.ts
┗ 📜vitest.config.ts

## Recommended Restructuring

project-root/
├── backend/
│ ├── graphql/ # GraphQL resolvers and schema
│ ├── rest/ # REST API handlers
│ ├── wp-plugins/ # WordPress-specific plugins or customizations
│ ├── db/ # Database migrations and seeders
│ └── tests/ # Backend integration and API tests
├── frontend/
│ ├── vue/ # Vue-based frontend
│ │ ├── src/
│ │ ├── tests/ # Unit, integration, and E2E tests
│ │ ├── critical.ts # Critical CSS script
│ │ └── vite.config.ts
│ ├── react/ # React-based frontend
│ │ ├── src/
│ │ ├── tests/ # Unit, integration, and E2E tests
│ │ ├── critical.ts # Critical CSS script
│ │ └── vite.config.ts
├── jenkins/
│ └── Jenkinsfile # Multi-branch pipeline
├── shared/
│ ├── utils/ # Shared utility functions
│ ├── styles/ # Shared Tailwind and global styles
│ └── components/ # Shared components (if applicable)
├── package.json
├── tsconfig.json
└── README.md

## Second Phase After 1st Restructuring

project-root/
┣ 📂.vscode
┃ ┣ 📜extensions.json
┃ ┗ 📜settings.json
┣ 📂Backend
┃ ┣ 📂APIs_GQL
┃ ┣ 📂APIs_Rest
┃ ┣ 📂Database
┃ ┣ 📂Tests
┃ ┗ 📂WordPress
┣ 📂DOCS
┃ ┣ 📂Licenses
┃ ┃ ┣ 📜LICENSE
┃ ┃ ┗ 📜LICENSE-MIT.md
┃ ┣ 📜.project_structure_filter
┃ ┣ 📜.project_structure_ignore
┃ ┣ 📜Automated Secure FTP to Remote Directory.md
┃ ┣ 📜Build a Jenkins Pipeline.md
┃ ┣ 📜Debugging TypeScript Functionality.MD
┃ ┣ 📜Experimenting With HTML.md
┃ ┣ 📜Project Landing Page - Tailwind Playground.md
┃ ┣ 📜PROJECT_INITIATION_STEPS.md
┃ ┣ 📜PROJECT_OVERVIEW.md
┃ ┣ 📜project_structure_filtered.txt
┃ ┣ 📜Project_Tree.MD
┃ ┣ 📜README_VUE.md
┃ ┣ 📜temp.txt
┃ ┗ 📜Vue3_TypeScript_Vite.md
┣ 📂Frontend
┃ ┣ 📂React
┃ ┃ ┣ 📂src
┃ ┃ ┗ 📂Tests
┃ ┗ 📂Vue
┃ ┣ 📂src
┃ ┗ 📂Tests
┣ 📂Jenkins
┃ ┗ 📜Jenkinsfile
┣ 📂public
┃ ┣ 📜ADPC-dark.svg
┃ ┣ 📜ADPC-light.svg
┃ ┣ 📜android-chrome-192x192.png
┃ ┣ 📜android-chrome-512x512.png
┃ ┣ 📜apple-touch-icon.png
┃ ┣ 📜Copy to HTML Head section.txt
┃ ┣ 📜favicon-16x16.png
┃ ┣ 📜favicon-32x32.png
┃ ┣ 📜favicon.ico
┃ ┣ 📜logo.svg
┃ ┣ 📜og-proj-sm01.jpg
┃ ┣ 📜og-proj-sm01.webp
┃ ┣ 📜og-proj-sm02.webp
┃ ┣ 📜pinia.svg
┃ ┣ 📜typescript.svg
┃ ┣ 📜vite.svg
┃ ┗ 📜vue.svg
┣ 📂Shared
┃ ┣ 📂Assets
┃ ┣ 📂scripts
┃ ┣ 📂Styles
┃ ┗ 📂Utils
┣ 📂src
┃ ┣ 📂assets
┃ ┃ ┣ 📂fonts
┃ ┃ ┣ 📂images
┃ ┃ ┃ ┣ 📜ADPCBanner.jpeg
┃ ┃ ┃ ┣ 📜cypress-light.svg
┃ ┃ ┃ ┣ 📜cypress.svg
┃ ┃ ┃ ┣ 📜playwright.svg
┃ ┃ ┃ ┣ 📜postcss.svg
┃ ┃ ┃ ┣ 📜stylelint-dark.svg
┃ ┃ ┃ ┣ 📜stylelint.svg
┃ ┃ ┃ ┗ 📜tailwind.svg
┃ ┃ ┣ 📂scripts
┃ ┃ ┗ 📂styles
┃ ┃ ┣ 📜adpc-preset.js
┃ ┃ ┣ 📜base.css
┃ ┃ ┣ 📜base.old.css
┃ ┃ ┗ 📜main.css
┃ ┣ 📂components
┃ ┃ ┣ 📂**vitests**
┃ ┃ ┃ ┣ 📂cypress_ct
┃ ┃ ┃ ┣ 📂playwright-ct
┃ ┃ ┃ ┗ 📜HelloWorld.spec.ts
┃ ┃ ┣ 📂grid_templates
┃ ┃ ┃ ┗ 📜VerticalGridPageExample01.vue
┃ ┃ ┣ 📂icons
┃ ┃ ┃ ┣ 📜IconCommunity.vue
┃ ┃ ┃ ┣ 📜IconDocumentation.vue
┃ ┃ ┃ ┣ 📜IconEcosystem.vue
┃ ┃ ┃ ┣ 📜IconSupport.vue
┃ ┃ ┃ ┗ 📜IconTooling.vue
┃ ┃ ┣ 📂navigation_options
┃ ┃ ┃ ┣ 📜NavBar1.vue
┃ ┃ ┃ ┣ 📜NavBar2.vue
┃ ┃ ┃ ┗ 📜NavBar3.vue
┃ ┃ ┣ 📜HelloWorld.vue
┃ ┃ ┣ 📜TheWelcome.vue
┃ ┃ ┣ 📜WelcomeInViteWorld.vue
┃ ┃ ┗ 📜WelcomeItem.vue
┃ ┣ 📂router
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂stores
┃ ┃ ┗ 📜counter.ts
┃ ┣ 📂tests
┃ ┃ ┣ 📂cypress
┃ ┃ ┗ 📂playwright
┃ ┣ 📂views
┃ ┃ ┣ 📜AboutView.vue
┃ ┃ ┗ 📜HomeView.vue
┃ ┣ 📜App.vue
┃ ┣ 📜AppOne.vue
┃ ┗ 📜main.ts
┣ 📜.editorconfig
┣ 📜.gitignore
┣ 📜.prettierrc.json
┣ 📜.stylelintrc.json
┣ 📜critical.ts
┣ 📜env.d.ts
┣ 📜eslint.config copy.js
┣ 📜eslint.config.js
┣ 📜index.html
┣ 📜JenkinsfileExample
┣ 📜package.json
┣ 📜postcss.config.js
┣ 📜README.md
┣ 📜site.webmanifest
┣ 📜tailwind.config copy.ts
┣ 📜tailwind.config.ts
┣ 📜tsconfig.app.json
┣ 📜tsconfig.json
┣ 📜tsconfig.node.json
┣ 📜tsconfig.vitest.json
┣ 📜vite.config.ts
┗ 📜vitest.config.ts

## Second Phase After 2nd Restructuring

project-root/
┣ 📂.vscode
┃ ┣ 📜extensions.json
┃ ┗ 📜settings.json
┣ 📂Backend
┃ ┣ 📂APIs_GQL
┃ ┣ 📂APIs_Rest
┃ ┣ 📂Database
┃ ┣ 📂Tests
┃ ┗ 📂WordPress
┣ 📂DOCS
┃ ┣ 📂Licenses
┃ ┃ ┣ 📜LICENSE
┃ ┃ ┗ 📜LICENSE-MIT.md
┃ ┣ 📜.project_structure_filter
┃ ┣ 📜.project_structure_ignore
┃ ┣ 📜Automated Secure FTP to Remote Directory.md
┃ ┣ 📜Build a Jenkins Pipeline.md
┃ ┣ 📜Debugging TypeScript Functionality.MD
┃ ┣ 📜Experimenting With HTML.md
┃ ┣ 📜Project Landing Page - Tailwind Playground.md
┃ ┣ 📜PROJECT_INITIATION_STEPS.md
┃ ┣ 📜PROJECT_OVERVIEW.md
┃ ┣ 📜project_structure_filtered.txt
┃ ┣ 📜Project_Tree.MD
┃ ┣ 📜README_VUE.md
┃ ┣ 📜temp.txt
┃ ┗ 📜Vue3_TypeScript_Vite.md
┣ 📂Frontend
┃ ┣ 📂React
┃ ┃ ┣ 📂src
┃ ┃ ┣ 📂Tests
┃ ┃ ┗ 📜React.html # Will be renamed to index.html if required
┃ ┗ 📂Vue
┃ ┣ 📂src
┃ ┃ ┣ 📂components
┃ ┃ ┃ ┣ 📂**vitests**
┃ ┃ ┃ ┃ ┣ 📂cypress_ct
┃ ┃ ┃ ┃ ┣ 📂playwright-ct
┃ ┃ ┃ ┃ ┗ 📜HelloWorld.spec.ts
┃ ┃ ┃ ┣ 📂grid_templates
┃ ┃ ┃ ┃ ┗ 📜VerticalGridPageExample01.vue
┃ ┃ ┃ ┣ 📂icons
┃ ┃ ┃ ┃ ┣ 📜IconCommunity.vue
┃ ┃ ┃ ┃ ┣ 📜IconDocumentation.vue
┃ ┃ ┃ ┃ ┣ 📜IconEcosystem.vue
┃ ┃ ┃ ┃ ┣ 📜IconSupport.vue
┃ ┃ ┃ ┃ ┗ 📜IconTooling.vue
┃ ┃ ┃ ┣ 📂navigation_options
┃ ┃ ┃ ┃ ┣ 📜NavBar1.vue
┃ ┃ ┃ ┃ ┣ 📜NavBar2.vue
┃ ┃ ┃ ┃ ┗ 📜NavBar3.vue
┃ ┃ ┃ ┣ 📜HelloWorld.vue
┃ ┃ ┃ ┣ 📜TheWelcome.vue
┃ ┃ ┃ ┣ 📜WelcomeInViteWorld.vue
┃ ┃ ┃ ┗ 📜WelcomeItem.vue
┃ ┃ ┣ 📂router
┃ ┃ ┃ ┗ 📜index.ts
┃ ┃ ┣ 📂stores
┃ ┃ ┃ ┗ 📜counter.ts
┃ ┃ ┣ 📂tests
┃ ┃ ┃ ┣ 📂cypress
┃ ┃ ┃ ┗ 📂playwright
┃ ┃ ┣ 📂views
┃ ┃ ┃ ┣ 📜AboutView.vue
┃ ┃ ┃ ┗ 📜HomeView.vue
┃ ┃ ┣ 📜App.vue
┃ ┃ ┣ 📜AppOne.vue
┃ ┃ ┗ 📜main.ts
┃ ┣ 📂Tests
┃ ┣ 📜critical.ts
┃ ┗ 📜Vue.html # Will be renamed to index.html if required
┣ 📂Jenkins
┃ ┣ 📜Jenkinsfile
┃ ┗ 📜JenkinsfileExample
┣ 📂LandingPage
┃ ┣ 📂fonts
┃ ┃ ┣ 📜OpenSans.css
┃ ┃ ┗ 📜Roboto.css
┃ ┣ 📂images
┃ ┃ ┣ 📜ADPCFavicon.png
┃ ┃ ┣ 📜ADPCLogoLight.png
┃ ┃ ┣ 📜bluesky-white.png
┃ ┃ ┣ 📜dev-white.png
┃ ┃ ┣ 📜facebook-white.png
┃ ┃ ┣ 📜FrameworkBlurr-Logo-1.png
┃ ┃ ┣ 📜github-white.png
┃ ┃ ┣ 📜linkedin-white.png
┃ ┃ ┣ 📜photo-1.jpeg
┃ ┃ ┣ 📜photo-2.jpeg
┃ ┃ ┣ 📜react-icon.png
┃ ┃ ┣ 📜stackoverflow-white.png
┃ ┃ ┣ 📜substack-white.png
┃ ┃ ┣ 📜typescript-icon.png
┃ ┃ ┣ 📜up-arrow.png
┃ ┃ ┣ 📜vite-icon.png
┃ ┃ ┣ 📜vue-icon.png
┃ ┃ ┗ 📜X-white.png
┃ ┣ 📂intlTelInput
┃ ┃ ┣ 📜intlTelInput.css
┃ ┃ ┣ 📜intlTelInput.min.js
┃ ┃ ┗ 📜utils.js
┃ ┣ 📂scripts
┃ ┃ ┣ 📜adpc_projects.js
┃ ┃ ┣ 📜adpc_projects.ts
┃ ┃ ┗ 📜jquery.js
┃ ┣ 📂styles
┃ ┃ ┣ 📜adpc_projects.css
┃ ┃ ┗ 📜index.css
┃ ┣ 📜Home.html
┃ ┣ 📜index.html
┃ ┣ 📜landing.html
┃ ┗ 📜site.webmanifest
┣ 📂public
┃ ┣ 📜ADPC-dark.svg
┃ ┣ 📜ADPC-light.svg
┃ ┣ 📜ADPCFavicon.png
┃ ┣ 📜ADPCLogoLight.png
┃ ┣ 📜android-chrome-192x192.png
┃ ┣ 📜android-chrome-512x512.png
┃ ┣ 📜apple-touch-icon.png
┃ ┣ 📜bluesky-white.png
┃ ┣ 📜dev-white.png
┃ ┣ 📜facebook-white.png
┃ ┣ 📜favicon-16x16.png
┃ ┣ 📜favicon-32x32.png
┃ ┣ 📜favicon.ico
┃ ┣ 📜FrameworkBlurr-Logo-1.png
┃ ┣ 📜github-white.png
┃ ┣ 📜Jenkins-1024x556.png
┃ ┣ 📜linkedin-white.png
┃ ┣ 📜logo.svg
┃ ┣ 📜og-proj-sm01.jpg
┃ ┣ 📜og-proj-sm01.webp
┃ ┣ 📜og-proj-sm02.webp
┃ ┣ 📜photo-1.jpeg
┃ ┣ 📜photo-2.jpeg
┃ ┣ 📜pinia.svg
┃ ┣ 📜react-icon.png
┃ ┣ 📜react.svg
┃ ┣ 📜stackoverflow-white.png
┃ ┣ 📜substack-white.png
┃ ┣ 📜typescript-icon.png
┃ ┣ 📜typescript.svg
┃ ┣ 📜up-arrow.png
┃ ┣ 📜vite-icon.png
┃ ┣ 📜vite.svg
┃ ┣ 📜vue-icon.png
┃ ┣ 📜vue.svg
┃ ┗ 📜X-white.png
┣ 📂Shared
┃ ┣ 📂assets
┃ ┃ ┣ 📂fonts
┃ ┃ ┣ 📂images
┃ ┃ ┃ ┣ 📜ADPCBanner.jpeg
┃ ┃ ┃ ┣ 📜cypress-light.svg
┃ ┃ ┃ ┣ 📜cypress.svg
┃ ┃ ┃ ┣ 📜playwright.svg
┃ ┃ ┃ ┣ 📜postcss.svg
┃ ┃ ┃ ┣ 📜stylelint-dark.svg
┃ ┃ ┃ ┣ 📜stylelint.svg
┃ ┃ ┃ ┗ 📜tailwind.svg
┃ ┃ ┣ 📂scripts
┃ ┃ ┃ ┗ 📜adpc-preset.js
┃ ┃ ┗ 📂styles
┃ ┃ ┣ 📜base.css
┃ ┃ ┣ 📜base.old.css
┃ ┃ ┗ 📜main.css
┃ ┗ 📂Utils
┣ 📜.codebasenotes-annotations.json
┣ 📜.editorconfig
┣ 📜.gitignore
┣ 📜.prettierrc.json
┣ 📜.stylelintrc.json
┣ 📜Copy to HTML Head section.txt
┣ 📜env.d.ts
┣ 📜eslint.config copy.js
┣ 📜eslint.config.js
┣ 📜index.html
┣ 📜package.json
┣ 📜package.json.md
┣ 📜postcss.config.js
┣ 📜README.md
┣ 📜site.webmanifest
┣ 📜tailwind.config copy.ts
┣ 📜tailwind.config.ts
┣ 📜tsconfig.app.json
┣ 📜tsconfig.json
┣ 📜tsconfig.node.json
┣ 📜tsconfig.vitest.json
┣ 📜vite.config.ts
┗ 📜vitest.config.ts

## Second Phase After 3rd Restructuring

┣ 📂.vscode
┃ ┣ 📜extensions.json
┃ ┗ 📜settings.json
┣ 📂Backend
┃ ┣ 📂APIs_GQL
┃ ┣ 📂APIs_Rest
┃ ┣ 📂Database
┃ ┣ 📂Tests
┃ ┗ 📂WordPress
┣ 📂DOCS
┃ ┣ 📂Licenses
┃ ┃ ┣ 📜LICENSE
┃ ┃ ┗ 📜LICENSE-MIT.md
┃ ┣ 📜.project_structure_filter
┃ ┣ 📜.project_structure_ignore
┃ ┣ 📜Automated Secure FTP to Remote Directory.md
┃ ┣ 📜Build a Jenkins Pipeline.md
┃ ┣ 📜Building a Scalable Authorization System with Cerbos.md
┃ ┣ 📜Debugging TypeScript Functionality.MD
┃ ┣ 📜Experimenting With HTML.md
┃ ┣ 📜Project Landing Page - Tailwind Playground.md
┃ ┣ 📜PROJECT_INITIATION_STEPS.md
┃ ┣ 📜PROJECT_OVERVIEW.md
┃ ┣ 📜project_structure_filtered.txt
┃ ┣ 📜Project_Tree.MD
┃ ┣ 📜README_VUE.md
┃ ┣ 📜temp.txt
┃ ┗ 📜Vue3_TypeScript_Vite.md
┣ 📂Frontend
┃ ┣ 📂React
┃ ┃ ┣ 📂src
┃ ┃ ┣ 📂Tests
┃ ┃ ┗ 📜React.html
┃ ┗ 📂Vue
┃ ┣ 📂src
┃ ┃ ┣ 📂components
┃ ┃ ┃ ┣ 📂**vitests**
┃ ┃ ┃ ┃ ┣ 📂cypress_ct
┃ ┃ ┃ ┃ ┣ 📂playwright-ct
┃ ┃ ┃ ┃ ┗ 📜HelloWorld.spec.ts
┃ ┃ ┃ ┣ 📂grid_templates
┃ ┃ ┃ ┃ ┗ 📜VerticalGridPageExample01.vue
┃ ┃ ┃ ┣ 📂icons
┃ ┃ ┃ ┃ ┣ 📜IconCommunity.vue
┃ ┃ ┃ ┃ ┣ 📜IconDocumentation.vue
┃ ┃ ┃ ┃ ┣ 📜IconEcosystem.vue
┃ ┃ ┃ ┃ ┣ 📜IconSupport.vue
┃ ┃ ┃ ┃ ┗ 📜IconTooling.vue
┃ ┃ ┃ ┣ 📂navigation_options
┃ ┃ ┃ ┃ ┣ 📜NavBar1.vue
┃ ┃ ┃ ┃ ┣ 📜NavBar2.vue
┃ ┃ ┃ ┃ ┗ 📜NavBar3.vue
┃ ┃ ┃ ┣ 📜HelloWorld.vue
┃ ┃ ┃ ┣ 📜TheWelcome.vue
┃ ┃ ┃ ┣ 📜WelcomeInViteWorld.vue
┃ ┃ ┃ ┗ 📜WelcomeItem.vue
┃ ┃ ┣ 📂router
┃ ┃ ┃ ┗ 📜index.ts
┃ ┃ ┣ 📂stores
┃ ┃ ┃ ┗ 📜counter.ts
┃ ┃ ┣ 📂tests
┃ ┃ ┃ ┣ 📂cypress
┃ ┃ ┃ ┗ 📂playwright
┃ ┃ ┣ 📂views
┃ ┃ ┃ ┣ 📜AboutView.vue
┃ ┃ ┃ ┗ 📜HomeView.vue
┃ ┃ ┣ 📜App.vue
┃ ┃ ┣ 📜AppOne.vue
┃ ┃ ┗ 📜main.ts
┃ ┣ 📂Tests
┃ ┣ 📜critical.ts
┃ ┗ 📜Vue.html
┣ 📂Jenkins
┃ ┣ 📜Jenkinsfile
┃ ┗ 📜JenkinsfileExample
┣ 📂LandingPage
┃ ┣ 📂fonts
┃ ┃ ┣ 📜OpenSans.css
┃ ┃ ┗ 📜Roboto.css
┃ ┣ 📂i18n
┃ ┃ ┣ 📜en.json
┃ ┃ ┗ 📜fr.json
┃ ┣ 📂images
┃ ┃ ┣ 📜ADPCFavicon.png
┃ ┃ ┣ 📜ADPCLogoLight.png
┃ ┃ ┣ 📜bluesky-white.png
┃ ┃ ┣ 📜dev-white.png
┃ ┃ ┣ 📜facebook-white.png
┃ ┃ ┣ 📜FrameworkBlurr-Logo-1.png
┃ ┃ ┣ 📜github-white.png
┃ ┃ ┣ 📜linkedin-white.png
┃ ┃ ┣ 📜photo-1.jpeg
┃ ┃ ┣ 📜photo-2.jpeg
┃ ┃ ┣ 📜react-icon.png
┃ ┃ ┣ 📜stackoverflow-white.png
┃ ┃ ┣ 📜substack-white.png
┃ ┃ ┣ 📜typescript-icon.png
┃ ┃ ┣ 📜up-arrow.png
┃ ┃ ┣ 📜vite-icon.png
┃ ┃ ┣ 📜vue-icon.png
┃ ┃ ┗ 📜X-white.png
┃ ┣ 📂intlTelInput
┃ ┃ ┣ 📜intlTelInput.css
┃ ┃ ┣ 📜intlTelInput.min.js
┃ ┃ ┗ 📜utils.js
┃ ┣ 📂scripts
┃ ┃ ┣ 📜adpc_projects.js
┃ ┃ ┣ 📜adpc_projects.ts
┃ ┃ ┣ 📜jquery.js
┃ ┃ ┗ 📜navigation.ts
┃ ┣ 📂styles
┃ ┃ ┣ 📜adpc_projects.css
┃ ┃ ┗ 📜index.css
┃ ┣ 📜Home.html
┃ ┣ 📜index.html
┃ ┣ 📜manifest.json
┃ ┣ 📜orig.index.html
┃ ┗ 📜site.webmanifest
┣ 📂public
┃ ┣ 📜ADPC-dark.svg
┃ ┣ 📜ADPC-light.svg
┃ ┣ 📜ADPCFavicon.png
┃ ┣ 📜ADPCLogoLight.png
┃ ┣ 📜android-chrome-192x192.png
┃ ┣ 📜android-chrome-512x512.png
┃ ┣ 📜apple-touch-icon.png
┃ ┣ 📜bluesky-white.png
┃ ┣ 📜dev-white.png
┃ ┣ 📜facebook-white.png
┃ ┣ 📜favicon-16x16.png
┃ ┣ 📜favicon-32x32.png
┃ ┣ 📜favicon.ico
┃ ┣ 📜FrameworkBlurr-Logo-1.png
┃ ┣ 📜github-white.png
┃ ┣ 📜Jenkins-1024x556.png
┃ ┣ 📜linkedin-white.png
┃ ┣ 📜logo.svg
┃ ┣ 📜og-proj-sm01.jpg
┃ ┣ 📜og-proj-sm01.webp
┃ ┣ 📜og-proj-sm02.webp
┃ ┣ 📜photo-1.jpeg
┃ ┣ 📜photo-2.jpeg
┃ ┣ 📜pinia.svg
┃ ┣ 📜react-icon.png
┃ ┣ 📜react.svg
┃ ┣ 📜stackoverflow-white.png
┃ ┣ 📜substack-white.png
┃ ┣ 📜typescript-icon.png
┃ ┣ 📜typescript.svg
┃ ┣ 📜up-arrow.png
┃ ┣ 📜vite-icon.png
┃ ┣ 📜vite.svg
┃ ┣ 📜vue-icon.png
┃ ┣ 📜vue.svg
┃ ┗ 📜X-white.png
┣ 📂Shared
┃ ┣ 📂assets
┃ ┃ ┣ 📂fonts
┃ ┃ ┣ 📂images
┃ ┃ ┃ ┣ 📜ADPCBanner.jpeg
┃ ┃ ┃ ┣ 📜cypress-light.svg
┃ ┃ ┃ ┣ 📜cypress.svg
┃ ┃ ┃ ┣ 📜playwright.svg
┃ ┃ ┃ ┣ 📜postcss.svg
┃ ┃ ┃ ┣ 📜stylelint-dark.svg
┃ ┃ ┃ ┣ 📜stylelint.svg
┃ ┃ ┃ ┗ 📜tailwind.svg
┃ ┃ ┣ 📂scripts
┃ ┃ ┃ ┗ 📜adpc-preset.js
┃ ┃ ┗ 📂styles
┃ ┃ ┣ 📜base.css
┃ ┃ ┣ 📜base.old.css
┃ ┃ ┗ 📜main.css
┃ ┗ 📂Utils
┣ 📜.editorconfig
┣ 📜.gitignore
┣ 📜.prettierrc.json
┣ 📜.stylelintrc.json
┣ 📜Copy to HTML Head section.txt
┣ 📜env.d.ts
┣ 📜eslint.config copy.js
┣ 📜eslint.config.js
┣ 📜index.html
┣ 📜package.json
┣ 📜package.json.md
┣ 📜postcss.config.js
┣ 📜README.md
┣ 📜site.webmanifest
┣ 📜tailwind.config copy.ts
┣ 📜tailwind.config.ts
┣ 📜tsconfig.app.json
┣ 📜tsconfig.json
┣ 📜tsconfig.node.json
┣ 📜tsconfig.vitest.json
┣ 📜vite.config.ts
┗ 📜vitest.config.ts
