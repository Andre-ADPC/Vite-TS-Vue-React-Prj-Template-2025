# Vite-TS-Vue-Prj-Template-2025

Every time you choose to apply a rule(s), explicitly state the rule(s) in the output. You can abbreviate the rule description to a single word or phrase.
Always address me by my first name, "Andre".

## Project Context

This is an open source project template for a combined Vue.js and React.js project with TypeScript, Pinia, Tailwind CSS, Daisy UI, Shadcn UI, and a Headless WordPress instance connected to MySQL and PostgreSQL databases. Both JS frameworks and libraries will be applied to build the exact-same elements, components, and pages. The purpose is to demonstrate the abilities and differences between the two JS frameworks and libraries.

- It is maintained via GitHub Actions and GitHub Pages and employs a local Jenkins server for CI/CD.
- There are three key client UIs:
  - A standard HTML5, CSS3 and vanilla JS UI which will be hosted on GitHub Pages.
  - A Vue.js UI which will be hosted on Cloudflare Pages.
  - A React.js UI which will be hosted on Cloudflare Pages.
- The headless WordPress Backend instance is hosted on an entry-level Hetzner VPS server.
- The core development process is based on DDD, BDD, MDD, and TDD.
  - Although the demonstration UI is not required to be overly complicated, the codebase's test coverage score should be as high as possible, meaning we test everything. Starting with creating tests for existing code, and verifying the tests pass before merging the code into the main branch of each of the three client UIs, the headless WordPress Backend instance, as well as the database schemas.

## Code Style and Structure

- Write concise, technical, and strictly-typed TypeScript code with accurate examples and comments where the functionality might not be that obvious.
- Use functional and declarative programming patterns; avoid classes.
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError)
- Structure repository files as follows:

```shell
server/
├── src/
    ├── components/     # Shared React components
    ├── hooks/          # Custom React hooks
    ├── utils/          # Helper functions
    ├── types/          # TypeScript types
    └── lib/            # Shared libraries
extension/
├── src/
    ├── background/     # Service worker scripts
    ├── content/        # Content scripts
    ├── popup/          # Extension popup UI
    ├── options/        # Extension options page
    ├── components/     # Shared React components
    ├── hooks/          # Custom React hooks
    ├── utils/          # Helper functions
    ├── lib/            # Shared libraries
    ├── types/          # TypeScript types
    └── storage/        # Chrome storage utilities
shared/
├── src/
    ├── types/          # TypeScript types, only used for shared types between server and extension
    └── utils/          # Helper functions, only used for shared functions between server and extension
```

## Tech Stack

- Vite.js
- TypeScript
- Vue.js
- Pinia
- React.js
- Zustand
- Tailwind CSS
- Daisy UI
- Shadcn UI
- Headless WordPress
- Node.js
- MySQL
- PostgreSQL
- Jenkins
- GitHub Actions
- GitHub Pages
- Cloudflare Pages
- Vitest
- Jest
- Playwright
- Cypress
- VitePress
- Cerbos Authentication & Authorization Policies

## Naming Conventions

We will always apply a "A single file per Page/Component/Element" rule. Don't be shy to use suitably-descriptive, long file names. The more descriptive they are, the easier it is to find related files and code sections.

- Use uppercase combined with PascalCase for **ALL** Directories, Component and Element files (e.g., `./components/FormWizard.vue` and .`/components/FormWizard.ts/js.jsx/js.tsx`, etc.) **WHERE POSSIBLE**. (cases like `./../src/assets/..` are exceptions.)
- Use lowercase with dashes for all asset files (e.g., `./assets/styles/form-wizard.css/js/jsx/ts/tsx`, etc.)
- Favor named exports for components and utilities
- Apply camelCase for the following:
  - Event handlers should also be prefixed with "handle" or "on" (eg., `const handleInputChange` or `const onButtonClick`).
  - Utility Files, Functions and Custom Hooks (e.g., `formValidator.ts`, `const getFormattedDate`, `const useCustomHook`, etc.)
  - State Variables and Props (e.g., `const myStateVariable`, `const myProp`, etc.)
  - Higher Order Components (e.g., `const withAuth = (Component) => { ... }` or `const withTheme = (Component) => { ... }`, etc.)

## Folder and File Location Conventions

- Use a single file per Component/Element
- Use a single file per Page
- Use a single file per Layout
- Use a single file per Store
- Use a single file per Service
- Use a single file per Hook
- Use a single file per Utility
- Use a single file per Type
- Use the dedicated and related folders for tests, from Unit tests through to E2E tests.
- Use the dedicated and related folders for state management related to each framework.

## TypeScript Usage

- Use TypeScript for all code where possible and prefer `interfaces` over `types`.
- Avoid `enums`; use `const` objects with `'as const'` assertion.
- Use functional components with TypeScript interfaces.
- Define strict types for message passing between different parts of the extension.
- Prefer named exports instead of default exports. This makes it easier to search for specific exports.
- Use absolute imports for all files `@/...`
- Avoid `try/catch` blocks unless there's good reason to translate or handle errors in that abstraction.
- Use explicit return types for all functions.

## State Management

- Using Pinia, the focus should be on SSR support and data persistence for the Vue portion of the project.
- Use Vue Composition API context for organized, modular logic and global state when needed to ensure logic reusability through Composables.
- Using Zustand, the focus should be on SSR support and data persistence for the React portion of the project.
- Use React Context for global state when needed.
- Implement proper state persistence using `./../Stores/[some-file-name].ts`
- Implement proper cleanup in useEffect hooks

## Syntax and Formatting

- Use "function" keyword for pure functions
- Avoid unnecessary curly braces in conditionals
- Use declarative JSX
- Implement proper TypeScript discriminated unions for message types

## UI and Styling

- Use Shadcn UI and Radix for components
- use `npx shadcn@latest add <component-name>` to add new shadcn components
- Implement Tailwind CSS for styling
- Consider extension-specific constraints (popup dimensions, permissions)
- Follow Material Design guidelines for Chrome extensions
- When adding new shadcn component, document the installation command

## Error Handling

- Implement proper error boundaries
- Log errors appropriately for debugging
- Provide user-friendly error messages
- Handle network failures gracefully

## Testing

- Write unit tests for utilities and components
- Implement E2E tests for critical flows
- Test across different Chrome versions
- Test memory usage and performance

## Security

- Implement Content Security Policy
- Sanitize user inputs
- Handle sensitive data properly
- Follow Chrome extension security best practices
- Implement proper CORS handling

## Git Usage

Commit Message Prefixes:

- "fix:" for bug fixes
- "feat:" for new features
- "perf:" for performance improvements
- "docs:" for documentation changes
- "style:" for formatting changes
- "refactor:" for code refactoring
- "test:" for adding missing tests
- "chore:" for maintenance tasks

Rules:

- Use lowercase for commit messages
- Keep the summary line concise
- Include description for non-obvious changes
- Reference issue numbers when applicable

## Documentation

- Maintain clear README with setup instructions
- Document API interactions and data flows
- Keep manifest.json well-documented
- Don't include comments unless it's for complex logic
- Document permission requirements

## Development Workflow

- Use proper version control
- Implement proper code review process
- Test in multiple environments
- Follow semantic versioning for releases
- Maintain changelog
