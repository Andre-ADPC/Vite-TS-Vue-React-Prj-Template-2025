import { hopeTheme } from 'vuepress-theme-hope'

export default {
  lang: 'en-US',
  title: 'Project Documentation',
  description: 'Enhanced Documentation with VuePress Hope Theme',
  theme: hopeTheme({
    // TODO: Site settings - GitHub Pages Setup still requires Admin action.
    hostname: 'https://your-site.github.io',
    logo: '/docs-logo.png', // Add your logo image here
    author: 'Andre Du Plessis - ADPC Projects (IE)',

    // Navbar settings
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Components', link: '/components/' },
    ],

    // Sidebar settings
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          collapsible: true,
          children: ['/guide/using-vue.md', '/guide/using-react.md'],
        },
      ],
    },

    // Features
    plugins: {
      mdEnhance: {
        tabs: true,
        codetabs: true,
        demo: true, // For Vue component demos
        presentation: true, // For creating slides
      },
    },
  }),
}
