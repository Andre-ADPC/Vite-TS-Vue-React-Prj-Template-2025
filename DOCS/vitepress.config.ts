import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Project Documentation',
  description: 'Comprehensive documentation for the project.',
  base: '/',
  themeConfig: {
    logo: '/docs-logo.png', // Place a logo image in the DOCS folder
    siteTitle: 'Project Docs',
    nav: [
      { text: 'Home', link: '/index.md' },
      { text: 'Coding Rules', link: '/AI-Assisted Dev Documentation/Cursor IDE/cursor-rules.md' },
      { text: 'API Docs', link: '/API Documentation/api' },
      { text: 'Business', link: '/Business Domain Documentation/business' },
      { text: 'Model-Driven Dev', link: '/Model-Driven Dev Documentation/model' },
      { text: 'General Project Docs', link: '/General Project Documentation/document' },
    ],
    sidebar: {
      '/Licenses/': [{ text: 'Licenses', link: '/Licenses/license' }],
      '/AI-Assisted Dev Documentation/Cursor IDE/cursor-rules.md': [
        { text: 'Cursor IDE Rule Set', link: '/AI-Assisted Dev Documentation/Cursor IDE/cursor-rules.md' },
      ],
      '/API Documentation/': [{ text: 'API Overview', link: '/API Documentation/api' }],
      '/Business Domain Documentation/': [{ text: 'Business Docs', link: '/Business Domain Documentation/business' }],
      '/Model-Driven Dev Documentation/': [
        { text: 'Model Driven Development', link: '/Model-Driven Dev Documentation/model' },
      ],
      '/General Project Documentation/': [
        { text: 'General Project Documentation', link: '/General Project Documentation/document' },
      ],
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 - ADPC Projects | A  Vite-TS-Vue-Prj-Template-2025',
    },
  },
  markdown: {
    lineNumbers: true,
  },
})
