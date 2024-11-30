# Project Initiation Steps And the Commands Used

There are various options we will add to shape this Repo into something Practical, yet retain as much flexibility as possible. From a Business' POV we want to get going AQAP using good practises, reliable Overall Project Structures, and make the DX / DevOps as pleasant as possible to enable teams to focus on the Business Objectives instead of wrestling with Code Bases.

The assumption is made that we are **<u>starting</u>** the **Project Template** development process on a **<u>local machine</u>**.
To do so efficiently following the steps below seem to be a good way to go about it.

For more details on any of the shortened-version of the process, follow the internal links on the **Content Menu**.

- [Project Initiation Steps And the Commands Used](#project-initiation-steps-and-the-commands-used)
    - [A. The recommended way to start a **Vite-powered Vue** project - (Vue.JS Official)](#a-the-recommended-way-to-start-a-vite-powered-vue-project---vuejs-official)
    - [B. Initialising the Project Repository for Git VC](#b-initialising-the-project-repository-for-git-vc)
    - [C. Continuing to configure and install the rest of the Project's Packages](#c-continuing-to-configure-and-install-the-rest-of-the-projects-packages)
- [1. The Current Project Template Status Recap](#1-the-current-project-template-status-recap)
  - [1.1 Vue 3 + TypeScript + Vite](#11-vue-3--typescript--vite)
    - [Circling Back to The Project Template Objective](#circling-back-to-the-project-template-objective)
  - [1.4 Adding CSS Frameworks and Utilities](#14-adding-css-frameworks-and-utilities)
    - [1.4.1 Tailwind CSS + PostCSS Processing](#141-tailwind-css--postcss-processing)
      - [1.4.1.1 Initialize Tailwind and PostCSS](#1411-initialize-tailwind-and-postcss)
    - [Recommendations](#recommendations)
    - [Summary of Options](#summary-of-options)
    - [Options for Tailwind + PostCSS Configuration](#options-for-tailwind--postcss-configuration)
      - [**1. JavaScript Configuration (Standard)**](#1-javascript-configuration-standard)
      - [**2. TypeScript for Tailwind Config**](#2-typescript-for-tailwind-config)
      - [**3. ESM Configuration for Tailwind**](#3-esm-configuration-for-tailwind)
      - [**4. CommonJS Configuration (Legacy or Node Compatibility)**](#4-commonjs-configuration-legacy-or-node-compatibility)
      - [1.4.1.2 Add Tailwind , PostCSS, and Entry-CSS Directive Configurations](#1412-add-tailwind--postcss-and-entry-css-directive-configurations)
        - [a. The PostCSS Configuration File Content](#a-the-postcss-configuration-file-content)
        - [b. The Tailwind Configuration File Content](#b-the-tailwind-configuration-file-content)
        - [c. The Starting `main.css` File Content](#c-the-starting-maincss-file-content)
      - [1.4.1.3 Testing Tailwind's Installation \& Configuration](#1413-testing-tailwinds-installation--configuration)
    - [1.4.2 Adding SCSS and Sass CSS Functionality](#142-adding-scss-and-sass-css-functionality)
    - [1.4.3 Add Less CSS Functionality](#143-add-less-css-functionality)
    - [1.4.4 Add Standard CSS Functionality](#144-add-standard-css-functionality)
    - [1.4.5 Adding Stylelint](#145-adding-stylelint)
  - [1.5 Optimizing Your Tailwind Setup for Production](#15-optimizing-your-tailwind-setup-for-production)
    - [1.5.1 Production Run Code Minification with Vite](#151-production-run-code-minification-with-vite)
      - [1.5.1.1 Splitting JS and CSS Minification](#1511-splitting-js-and-css-minification)
  - [1.6 Adding \& Configuring IDE Extensions](#16-adding--configuring-ide-extensions)
- [2. Testing the Project's Initial Functionality](#2-testing-the-projects-initial-functionality)
  - [2.1 Create Test Components in Vue](#21-create-test-components-in-vue)
    - [2.1.1 Create Routers for the Test Components](#211-create-routers-for-the-test-components)
    - [2.1.2 Check if Routers Work](#212-check-if-routers-work)
  - [2.2 Create Pinia Stores](#22-create-pinia-stores)
  - [2.3 Install and Configure Auto-import Plugin](#23-install-and-configure-auto-import-plugin)
- [3. Add Testing Functionality to the Project](#3-add-testing-functionality-to-the-project)
  - [3.1 Adding Vitest Unit Testing Features](#31-adding-vitest-unit-testing-features)
- [10. Removing Redundant Project Elements](#10-removing-redundant-project-elements)

---

$${{\color{red}\bf NOTE:}}$$

Remain aware of <u>exactly where you are</u> in the Project's File Structure when executing these _"short-hand"_ commands. If done via your terminal, verify you are positioned correctly. To refer to detail about each command, have a peek at the official documentation related to them for clarity and additional `--switch` options they might offer.

---

### A. [The recommended way to start a **Vite-powered Vue** project](https://github.com/vuejs/create-vue) - (Vue.JS Official)

- `npm create vue@latest`
- `> npx`
- `> create-vue`
- `TheDesiredProjectName`
- Use `TAB` to toggle between <u>`No`</u> / `Yes`
- Use the `⬆` `⬇` to select other options which will be offered where relevant.

**NOTE**: We want to install our Testing Frameworks later, using the Framework Vendor's more Flexible and customisable installation processes.

**The progress so far:**

```js
PS C:\Laragon\www\00-TEMP> npm create vue@latest

> npx
> create-vue


Vue.js - The Progressive JavaScript Framework

✔ Project name: ... TheDesiredProjectName
✔ Package name: ... thedesiredprojectname
✔ Add TypeScript? ... No / Yes
✔ Add JSX Support? ... No / Yes
✔ Add Vue Router for Single Page Application development? ... No / Yes
✔ Add Pinia for state management? ... No / Yes
✔ Add Vitest for Unit Testing? ... No / Yes
❌ Add an End-to-End Testing Solution? » No
✔ Add ESLint for code quality? » Yes, and speed up with Oxlint (experimental)
✔ Add Prettier for code formatting? ... No / Yes

Scaffolding project in C:\Laragon\www\00-TEMP\TheDesiredProjectName...

Done. Now run:

  cd TheDesiredProjectName
  npm install
  npm run format
  npm run dev

PS C:\Laragon\www\00-TEMP>
```

### B. [Initialising the Project Repository for Git VC](https://github.com/git-guides/git-init)

- `git init`

1. Link The Project to GitHub, GitLab, Bitbucket, etc.

- [Linking to GitHub](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
- [Linking to GitLab](https://docs.gitlab.com/ee/user/project/index.html)
- [Linking to BitBucket](https://bitbucket.org/product/guides/basics/four-starting-steps#step-2-set-up-locally-collaborate-globally)

### C. Continuing to configure and install the rest of the Project's Packages

> Up to this point we have the Project Directory and the options `create-vue` offers us completed. We have our Project Repository on <u>Local</u> and Cloud-based (optional, but highly recommended) Version Control.

I became aware of Anthony Fu's `NI` Package Manager "Wrapper" while learning how to work with Tres.JS during the Nov 2024 Vue.JS Forge session.

It is not completly "there" yet, but I fully get the frustration with all the long commands one typically need to type out when initiating and maintain projects, or working with other package managers you arn't quite that familliar with.

I think it's well worth it to install **[NI](https://github.com/antfu-collective/ni)** and learn how it makes life a bit more pleasant while shaping code. You can [read more about it here](https://github.com/antfu-collective/ni?tab=readme-ov-file#readme).

**So let's recap on the next steps we need to implement.**

# 1. The Current Project Template Status Recap

## 1.1 Vue 3 + TypeScript + Vite

The template we have created to <u>this point</u> should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, so check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Next, learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

Using `create-vue` we managed to get all the initial scaffolding executed in less than 5 minutes.

✔ Done Adding TypeScript
✔ Done Adding JSX Support
✔ Done Adding Vue Router
✔ Done Adding Pinia
✔ Done Adding Vitest
✔ Done Adding ESLint and Prettier

### Circling Back to The Project Template Objective

However, we want to finetune and add the functionality capabilities to allow for more flexible scenarios, like evaluating not only <u>Playwright Testing functionality, but that of Cypress as well</u> for example.
This leaves Users of this template to quickly get going with the approach of choice, while having the Project pre-configured to use additional options already built in, without getting tangled too much in the tricky TypeScript/Vite configurations.

There are a number options we will add to shape this Repo into something Practical, yet retain as much flexibility as possible.

To streamline the final version of the project, Users can simply remove packages and utilities they don't want before pushing to Staging and Production.

## 1.4 Adding CSS Frameworks and Utilities

$$
{
\colorbox{red}{\space Verify the validity of the Tailwind and PostCSS configurations with TypeScript!}
}
$$

### 1.4.1 Tailwind CSS + PostCSS Processing

Installing with **NPM**
Use `npm install -D tailwindcss postcss autoprefixer vite` or `npm install -D tailwindcss@latest postcss@latest autoprefixer@latest vite@latest`

Installing with **NI**
`ni -D tailwindcss postcss autoprefixer vite` or `ni -D tailwindcss@latest postcss@latest autoprefixer@latest vite@latest`

#### 1.4.1.1 Initialize Tailwind and PostCSS

There's still seems to be a lot of confusion regarding the file-type format of various configuration files are concerned (I'm one of the confused).

In a Vite + Vue.js + TypeScript project with Tailwind CSS and PostCSS, you have several options for configuration file types. Here's a breakdown of when and why to use each file type, based on the official documentation:

$$
{
\colorbox{red}{\space Verify the validity of the Tailwind and PostCSS configurations with TypeScript!}
}
$$

1. **TypeScript (`*.ts`) Configuration Files**  
   TypeScript configuration files for Tailwind CSS (`tailwind.config.ts`) are explicitly supported. This is useful if your project uses TypeScript consistently and you want to take advantage of type checking and auto-completion for Tailwind's configuration.  
   To generate a TypeScript Tailwind config file, use the `--ts` flag:

```bash
npx tailwindcss init --ts
```

The `postcss.config.js` file will still be a `.js` file by default because PostCSS itself does not natively support TypeScript in its configuration. You can manually manage type support for PostCSS if needed.

2. **JavaScript (`*.js`) Files**  
   JavaScript configuration files (`tailwind.config.js`, `postcss.config.js`) are the default and most broadly supported file types. These are recommended if you:

- Want simplicity and compatibility.
- Do not require advanced type-checking features.
- Are sharing the project with team members unfamiliar with TypeScript.

This option is especially ideal for PostCSS, as PostCSS plugins are typically written and configured in plain JavaScript.

4. **ESM Module approach (`*.esm`) Files**

$$
{
\colorbox{red}{\space Verify the validity of the Tailwind and PostCSS configurations for TS ESM and CJS file types!}
}
$$

5. **CommonJS (`*.cjs`) Files**  
   Use CommonJS (`*.cjs`) files if your project uses a Node.js environment that enforces CommonJS modules (or lacks ESM support). For example, if your Vite project is configured with ESM syntax but you need compatibility with a Node.js tool that requires CommonJS, this may be the right choice.

This also applies to situations where you’re using older or incompatible PostCSS tools requiring `module.exports` syntax instead of ESM `export`.

### Recommendations

- Use `tailwind.config.ts` for Tailwind if your project is TypeScript-based. It integrates smoothly with TypeScript and provides better developer tooling.
- Use `postcss.config.js` as JavaScript is the standard for PostCSS and ensures the broadest compatibility.
- For projects combining ESM and legacy Node.js environments, consider `*.cjs` for PostCSS if compatibility issues arise.

This mix of file types maintains TypeScript's advantages for Tailwind while aligning with PostCSS's JavaScript-centric ecosystem.

### Summary of Options

The most reliable configuration for your Vue.js + Vite + TypeScript project depends on your preferred file types and compatibility needs. Here's a refined comparison:

---

### Options for Tailwind + PostCSS Configuration

Upgrading Tailwind CSS to Version **4.X.Y**
≈ tailwindcss v4.0.0-beta.2
Installing with **NPX**
`npx @tailwindcss/upgrade@next`

Installing with **NI**
`nlx @tailwindcss/upgrade@next`

#### **1. JavaScript Configuration (Standard)**

This approach prioritizes compatibility across all tools:

**NOTE**: The following installation `switches` are used:

$$
{
\colorbox{red}{\space Verify the validity of the Tailwind and PostCSS configurations with TypeScript!}
}
$$

**<u>The documentation from all angles suck. It is unclear, and vague.</u>**

- `-D` for `"devDependencies": { ...` in the `package.json` file.
- `-p` to create the "default" `tailwind.config.js` file together with the default `postcss.config.js` file.

- `--esm` to create a `postcss.esm` file in the project root.
- `--ts`to create a `tailwind.config.js` file in the project root.

Installing with **NPM**

```bash
npm install -D tailwindcss postcss autoprefixer vite
npm install -D tailwindcss postcss autoprefixer


npx tailwindcss init -p
```

Installing with **NI**

```bash
ni -D tailwindcss postcss autoprefixer vite
ni -D tailwindcss postcss autoprefixer


nlx tailwindcss init -p
```

#### **2. TypeScript for Tailwind Config**

If you want strong TypeScript type checking for Tailwind:

Installing with **NPM**

```bash
npm install -D tailwindcss postcss autoprefixer vite
npm install -D tailwindcss postcss autoprefixer
```

or

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest vite@latest  ??
```

or

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest ??
```

Then run:

```bash
npx tailwindcss init --ts -p
```

Installing with **NI**

```bash
ni -D tailwindcss postcss autoprefixer
```

or

```bash
ni -D tailwindcss postcss autoprefixer vite
```

or

```bash
ni -D tailwindcss@latest postcss@latest autoprefixer@latest ??
```

or

```bash
ni -D tailwindcss@latest postcss@latest autoprefixer@latest ??vite@latest
```

Then run:

```bash
nlx tailwindcss init --ts -p
```

#### **3. ESM Configuration for Tailwind**

For projects using modern ES Module syntax:

Installing with **NPM**

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest vite@latest ??
npm install -D tailwindcss postcss autoprefixer vite ??


npx tailwindcss init --esm -p
```

Installing with **NI**

```bash
ni -D tailwindcss@latest postcss@latest autoprefixer@latest vite@latest ??
ni -D tailwindcss postcss autoprefixer vite ??


nlx tailwindcss init --esm -p
```

#### **4. CommonJS Configuration (Legacy or Node Compatibility)**

When working with Node.js tools requiring CommonJS:

Installing with **NPM**

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest vite@latest ??
npm install -D tailwindcss postcss autoprefixer vite ??


npx tailwindcss init -p
```

Installing with **NI**

```bash
ni -D tailwindcss@latest postcss@latest autoprefixer@latest vite@latest ??
ni -D tailwindcss postcss autoprefixer vite ??


nlx tailwindcss init -p
```

Then rename configs to `tailwind.config.cjs` and `postcss.config.cjs`, modifying `export default` to `module.exports`.

---

**Comparison**:

- **Use `.js`**: Default and simple setup, widely compatible.
- **Use `.ts`**: Adds TypeScript type safety, great for teams with TypeScript workflows.
- **Use `.cjs`**: For legacy Node.js or backward compatibility.
- **Use `.esm`**: When adhering to modern ES Module standards.

Your setup aligns with Tailwind's, PostCSS's, and Vite's latest practices.

---

#### 1.4.1.2 Add Tailwind , PostCSS, and Entry-CSS Directive Configurations

##### a. The PostCSS Configuration File Content

<html>
<div class="relative z-10 col-span-3 -ml-10 shadow-lg bg-slate-800 rounded-xl xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10"><div class="relative flex text-xs leading-6 text-slate-400"><div class="flex items-center flex-none px-4 py-1 mt-2 border-t border-b text-sky-300 border-t-transparent border-b-sky-300">postcss.config.js</div><div class="flex flex-auto pt-2 overflow-hidden rounded-tr-xl"><div class="flex-auto -mr-px border rounded-tl bg-slate-700/50 border-slate-500/30"></div></div><div class="absolute right-0 flex items-center h-8 pr-4 top-2"><div class="relative flex -mr-2"><button type="button" class="text-slate-500 hover:text-slate-400"><svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-8 h-8"><path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path><path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path></svg></button></div></div></div><div class="relative"><pre class="flex overflow-auto text-sm leading-6 text-slate-50 ligatures-none" style="position: relative;"><code class="flex-none min-w-full p-5"><span class="block token"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>
</span><span class="block token"><span class="token plain">  </span><span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>
</span><span class="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]"><span class="token plain">    </span><span class="token literal-property property">tailwindcss</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token plain"></span>
</span><span class="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]"><span class="token plain">    </span><span class="token literal-property property">autoprefixer</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token plain"></span>
</span><span class="block token"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>
</span><span class="block token"><span class="token plain"></span><span class="token punctuation">}</span>
</span></code></pre></div></div>
</html>

##### b. The Tailwind Configuration File Content

<html>
<div class="relative z-10 col-span-3 -ml-10 shadow-lg bg-slate-800 rounded-xl xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10"><div class="relative flex text-xs leading-6 text-slate-400"><div class="flex items-center flex-none px-4 py-1 mt-2 border-t border-b text-sky-300 border-t-transparent border-b-sky-300">tailwind.config.js</div><div class="flex flex-auto pt-2 overflow-hidden rounded-tr-xl"><div class="flex-auto -mr-px border rounded-tl bg-slate-700/50 border-slate-500/30"></div></div><div class="absolute right-0 flex items-center h-8 pr-4 top-2"><div class="relative flex -mr-2"><button type="button" class="text-slate-500 hover:text-slate-400"><svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-8 h-8"><path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path><path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path></svg></button></div></div></div><div class="relative"><pre class="flex overflow-auto text-sm leading-6 text-slate-50 ligatures-none" style="position: relative;"><code class="flex-none min-w-full p-5"><span class="block token"><span class="token doc-comment comment">/** </span><span class="token doc-comment comment keyword">@type</span><span class="token doc-comment comment"> </span><span class="token doc-comment comment class-name punctuation">{</span><span class="token doc-comment comment class-name keyword">import</span><span class="token doc-comment comment class-name punctuation">(</span><span class="token doc-comment comment class-name string">'tailwindcss'</span><span class="token doc-comment comment class-name punctuation">)</span><span class="token doc-comment comment class-name punctuation">.</span><span class="token doc-comment comment class-name">Config</span><span class="token doc-comment comment class-name punctuation">}</span><span class="token doc-comment comment"> */</span><span class="token plain"></span>
</span><span class="block token"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>
</span><span class="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]"><span class="token plain">  </span><span class="token literal-property property">content</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">[</span><span class="token string">"./src/**/*.{html,js}"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token plain"></span>
</span><span class="block token"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>
</span><span class="block token"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token plain"></span>
</span><span class="block token"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token plain"></span>
</span><span class="block token"><span class="token plain">  </span><span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token plain"></span>
</span><span class="block token"><span class="token plain"></span><span class="token punctuation">}</span>
</span></code></pre></div></div>
</html>

##### c. The Starting `main.css` File Content

<html>
<div class="relative z-10 col-span-3 -ml-10 shadow-lg bg-slate-800 rounded-xl xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10"><div class="relative flex text-xs leading-6 text-slate-400"><div class="flex items-center flex-none px-4 py-1 mt-2 border-t border-b text-sky-300 border-t-transparent border-b-sky-300">main.css</div><div class="flex flex-auto pt-2 overflow-hidden rounded-tr-xl"><div class="flex-auto -mr-px border rounded-tl bg-slate-700/50 border-slate-500/30"></div></div><div class="absolute right-0 flex items-center h-8 pr-4 top-2"><div class="relative flex -mr-2"><button type="button" class="text-slate-500 hover:text-slate-400"><svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-8 h-8"><path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path><path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path></svg></button></div></div></div><div class="relative"><pre class="flex overflow-auto text-sm leading-6 text-slate-50 ligatures-none" style="position: relative;"><code class="flex-none min-w-full p-5"><span class="token atrule"><span class="token rule">@tailwind</span> base<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@tailwind</span> components<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@tailwind</span> utilities<span class="token punctuation">;</span></span></code></pre></div></div>
</html>

#### 1.4.1.3 Testing Tailwind's Installation & Configuration

Create and add some Tailwind `class` directives to the Project using a `My_TailwindCSS_test.html` file:
(Place it in a `test` folder that's not getting packaged with a project build)

<html>
<div class="relative z-10 col-span-3 -ml-10 shadow-lg bg-slate-800 rounded-xl xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10"><div class="relative flex text-xs leading-6 text-slate-400"><div class="flex items-center flex-none px-4 py-1 mt-2 border-t border-b text-sky-300 border-t-transparent border-b-sky-300">My_TailwindCSS_test.html</div><div class="flex flex-auto pt-2 overflow-hidden rounded-tr-xl"><div class="flex-auto -mr-px border rounded-tl bg-slate-700/50 border-slate-500/30"></div></div><div class="absolute right-0 flex items-center h-8 pr-4 top-2"><div class="relative flex -mr-2"><button type="button" class="text-slate-500 hover:text-slate-400"><svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-8 h-8"><path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path><path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path></svg></button></div></div></div><div class="relative"><pre class="flex overflow-auto text-sm leading-6 text-slate-50 ligatures-none" style="position: relative;"><code class="flex-none min-w-full p-5"><span class="block token"><span class="token doctype punctuation">&lt;!</span><span class="token doctype doctype-tag">Doctype</span><span class="token doctype"> </span><span class="token doctype name">html</span><span class="token doctype punctuation">&gt;</span><span class="token plain"></span>
</span><span class="block token"><span class="token plain"></span><span class="token tag punctuation">&lt;</span><span class="token tag">html</span><span class="token tag punctuation">&gt;</span><span class="token plain"></span>
</span><span class="block token"><span class="token plain"></span><span class="token tag punctuation">&lt;</span><span class="token tag">head</span><span class="token tag punctuation">&gt;</span><span class="token plain"></span>
</span><span class="block token"><span class="token plain">  </span><span class="token tag punctuation">&lt;</span><span class="token tag">meta</span><span class="token tag"> </span><span class="token tag attr-name">charset</span><span class="token tag attr-value punctuation attr-equals">=</span><span class="token tag attr-value punctuation">"</span><span class="token tag attr-value">UTF-8</span><span class="token tag attr-value punctuation">"</span><span class="token tag punctuation">&gt;</span><span class="token plain"></span>
</span><span class="block token"><span class="token plain">  </span><span class="token tag punctuation">&lt;</span><span class="token tag">meta</span><span class="token tag"> </span><span class="token tag attr-name">name</span><span class="token tag attr-value punctuation attr-equals">=</span><span class="token tag attr-value punctuation">"</span><span class="token tag attr-value">viewport</span><span class="token tag attr-value punctuation">"</span><span class="token tag"> </span><span class="token tag attr-name">content</span><span class="token tag attr-value punctuation attr-equals">=</span><span class="token tag attr-value punctuation">"</span><span class="token tag attr-value">width=device-width, initial-scale=1.0</span><span class="token tag attr-value punctuation">"</span><span class="token tag punctuation">&gt;</span><span class="token plain"></span>
</span><span class="block token"><span class="token plain">  </span><span class="token tag punctuation">&lt;</span><span class="token tag">link</span><span class="token tag"> </span><span class="token tag attr-name">rel</span><span class="token tag attr-value punctuation attr-equals">=</span><span class="token tag attr-value punctuation">"</span><span class="token tag attr-value">image/svg+xml</span><span class="token tag attr-value punctuation">"</span><span class="token tag"> </span><span class="token tag attr-name">href</span><span class="token tag attr-value punctuation attr-equals">=</span><span class="token tag attr-value punctuation">"</span><span class="token tag attr-value">/vite.svg</span><span class="token tag attr-value punctuation">"</span><span class="token tag punctuation">&gt;</span><span class="token plain">
<span class="token tag punctuation">&lt;</span><span class="token tag"></span><span class="token tag">title</span><span class="token tag punctuation">&gt;</span><span class="token plain"></span> </span>Vite + Vue + TypeScript + Pinia </span><span class="token tag attr-value punctuation"></span><span class="token tag punctuation">&lt;/</span><span class="token tag">title</span><span class="token tag punctuation">&gt;</span><span class="token plain"></span>
</span>
</span><span class="block token"><span class="token plain"></span><span class="token tag punctuation">&lt;/</span><span class="token tag">head</span><span class="token tag punctuation">&gt;</span><span class="token plain"></span>
</span><span class="block token"><span class="token plain"></span><span class="token tag punctuation">&lt;</span><span class="token tag">body</span><span class="token tag punctuation">&gt;</span><span class="token plain"></span>
</span><span class="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]"><span class="token plain">  </span><span class="token tag punctuation">&lt;</span><span class="token tag">h1</span><span class="token tag"> </span><span class="token tag attr-name">class</span><span class="token tag attr-value punctuation attr-equals">=</span><span class="token tag attr-value punctuation">"</span><span class="token tag attr-value">text-3xl font-bold underline</span><span class="token tag attr-value punctuation">"</span><span class="token tag punctuation">&gt;</span><span class="token plain"></span>
</span><span class="token plain block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">    Hello, and Welcome in Vite World, Vue.JS 3!
</span><span class="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]"><span class="token plain">  </span><span class="token tag punctuation">&lt;/</span><span class="token tag">h1</span><span class="token tag punctuation">&gt;</span><span class="token plain"></span>
</span><span class="block token"><span class="token plain"></span><span class="token tag punctuation">&lt;/</span><span class="token tag">body</span><span class="token tag punctuation">&gt;</span><span class="token plain"></span>
</span><span class="block token"><span class="token plain"></span><span class="token tag punctuation">&lt;/</span><span class="token tag">html</span><span class="token tag punctuation">&gt;</span>
</span></code></pre></div></div>
</html>

### 1.4.2 Adding SCSS and Sass CSS Functionality

To add Sass Functionality add it with:

Installing with **NPM**

`npm install -D sass`

Installing with **NI**

```bash
ni -D sass
```

### 1.4.3 Add Less CSS Functionality

### 1.4.4 Add Standard CSS Functionality

Adding "nested CSS" functionality management:

Installing with **NPM**

`npm install -D postcss-nested`

Installing with **NI**

```bash
ni -D postcss-nested
```

### 1.4.5 Adding Stylelint

Getting Started with [StyleLint](https://stylelint.io/user-guide/get-started)

Installing with **NPM**

```bash
npm install stylelint-config-standard --save-dev
```

```bash
npm init stylelint --ts
```

Installing with **NI**

```bash
ni stylelint-config-standard --save-dev

```

You can now lint your CSS files using:

Linting with **NPM**
`npx stylelint "**/*.css"`

Linting with **NI**
`nlx stylelint "**/*.css"`

We recommend you lint your CSS before applying any transformations. You can do this by either:
`npm install -D postcss-import`

Fore more detail on fine-grained configurations refer to the [StyleLint Documentation](https://stylelint.io/) as well as [Awesome StyleLint's Documentation](https://stylelint.io/awesome-stylelint/).

## 1.5 Optimizing Your Tailwind Setup for Production

Tailwind typically creates many utility classes for all the available CSS properties under the hood. This is great for a Development run but not so much for a **Production build** since every byte sent over the wire that isn't needed is entirely wasted.

### 1.5.1 Production Run Code Minification with Vite

This is one of the core SEO issues any Client-facing web-based application needs to have configured and sorted out already. The prep for that starts with Vite and the bundling task it handles. It's core functionality actually, apart from the great DX it provided to devs with its HMR feature.

Tailwind CSS facilitates purging all the unused CSS in order to ship a project without any extra bloat.
To configure this, edit the postcss.config.js and add the `production directives` shown below.

#### 1.5.1.1 Splitting JS and CSS Minification

[CSSnano](https://github.com/cssnano/cssnano), a modular minifier, built on top of the PostCSS ecosystem, can be combined with Vite if correctly configured to focus on CSS minification only if required. Refer to Vite's [Disable CSS minification (independently of JS)](https://github.com/vitejs/vite/issues/5619) functionality **[TO CONFIRM]**:

```bash
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'production' ? {
            cssnano: {}
        } : {})
    }
}
```

This will purge your Tailwind classes but only in Production. In Dev, you keep all of them to make it easier to play around with styling.

## 1.6 Adding & Configuring IDE Extensions

Refer to [VS Code Extensions for Vue Dev Work](./DOCS/PROJECT_OVERVIEW.md) in the Project Overview.

# 2. Testing the Project's Initial Functionality

## 2.1 Create Test Components in Vue

### 2.1.1 Create Routers for the Test Components

### 2.1.2 Check if Routers Work

## 2.2 Create Pinia Stores

## 2.3 Install and Configure Auto-import Plugin

# 3. Add Testing Functionality to the Project

## 3.1 Adding Vitest Unit Testing Features

# 10. Removing Redundant Project Elements

- [Uninstalling packages and dependencies - npm Docs](https://docs.npmjs.com/uninstalling-packages-and-dependencies/)
- [Guide to disable typescript and remove dependencies](https://github.com/cawa-93/vite-electron-builder/discussions/339)
