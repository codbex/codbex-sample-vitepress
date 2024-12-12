import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "codbex",
  description: "High-Productivity Application Platform for Developers, Software Vendors and Enterprises",
  base: '/codbex-sample-vitepress',
  sitemap: {
    hostname: 'https://www.codbex.com/codbex-sample-vitepress/'
  },
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/codbex-sample-vitepress/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Products', link: '/products/atlas' },
      { text: 'About', link: '/about' }
    ],

    sidebar: {
      '/products': [
        {
          text: 'Products',
          items: [
            { text: 'Atlas', link: '/products/atlas' },
            { text: 'Helios', link: '/products/helios' },
            { text: 'Hades', link: '/products/hades' },
            { text: 'Oceanus', link: '/products/oceanus' },
            { text: 'Hyperion', link: '/products/hyperion' },
            { text: 'Iapetus', link: '/products/iapetus' },
            { text: 'Rhea', link: '/products/rhea' },
            { text: 'Kronos', link: '/products/kronos' },
          ]
        }
      ],
      '/legal': [
        {
          text: 'Legal',
          items: [
            { text: 'Privacy Policy', link: '/legal/privacy-policy' },
            { text: 'Terms of Service', link: '/legal/terms-of-service' },
            { text: 'Code of Business Conduct', link: '/legal/code-of-conduct' },
            { text: 'e-Communication Policy', link: '/legal/e-communications-policy' },
            { text: 'Vendor Terms', link: '/legal/vendor-terms' },
          ]
        }
      ],
    },

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
    },

    editLink: {
      pattern: 'https://github.com/codbex/codbex-sample-vitepress/edit/main/docs/:path',
    },

    footer: {
      copyright: 'Copyright © 2022-present codbex ltd.',
      message: '<a href="legal/terms-of-service">Terms</a> & <a href="legal/privacy-policy">Privacy</a>'
    }
  }
})
