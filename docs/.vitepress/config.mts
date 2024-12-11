import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "codbex",
  description: "High-Productivity Application Platform for Developers, Software Vendors and Enterprises",
  base: '/codbex-sample-vitepress',
  sitemap: {
    hostname: 'https://www.codbex.com/codbex-sample-vitepress/'
  },
  head: [
    ['link', { rel: 'icon', href: '/codbex-sample-vitepress/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/codbex/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/codbex/' }
    ],

    lastUpdated: {
      formatOptions: {
        dateStyle: 'long',
        timeStyle: undefined,
      }
    },

    search: {
      provider: 'local',
      options: {
        detailedView: true,
      }
    }
  }
})
