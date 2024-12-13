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
      {
        text: 'Updates',
        items: [
          { text: 'News', link: '/news' },
          { text: 'Marketing', link: '/marketing' },
          { text: 'Technology', link: '/technology' },
          { text: 'Sales', link: '/sales' },
        ]
      },
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
      '/news': [
        {
          text: 'News',
          items: [
            { text: 'Celebrating Two Years of Excellence', link: '/news/2024/04/01/codbex-two-years' },
            { text: 'First Anniversary', link: '/news/2023/04/01/first-anniversary' },
            { text: 'Company Dedicated to Developers Productivity', link: '/news/2022/04/01/codbex-established' },
          ]
        }
      ],
      '/marketing': [
        {
          text: 'Marketing',
          items: [
            { text: 'Kronos - Timeless Solution for Modern Challenges', link: '/marketing/2024/06/05/kronos-timeless-solution' },
            { text: 'Unleash Service Integrations with Iapetus', link: '/marketing/2024/03/26/iapetus-unleash-service-integration' },
            { text: 'Unlocking Enterprise Efficiency with Hyperion', link: '/marketing/2024/03/20/hyperion-unlocking-enterprise-efficiency' },
            { text: 'Dive into Innovation with Oceanus', link: '/marketing/2024/01/23/oceanus-dive-into-innovation' },
            { text: 'Explore and Manage Databases in the Cloud', link: '/marketing/2023/10/11/hades-explore-and-manage-databases-in-the-cloud' },
            { text: 'Ultimate Cloud IDE for JavaScript and TypeScript', link: '/marketing/2023/09/26/helios-ultimate-cloud-ide-for-javascript-and-typescript' },
            { text: 'The Titans of Low Code', link: '/marketing/2023/06/07/the-titans-of-low-code' },
            { text: 'What is Low Code Platform', link: '/marketing/2022/04/01/what-is-low-code' },
          ]
        }
      ],
      '/technology': [
        {
          text: 'Technology',
          items: [
            { text: 'Building and Releasing Docker Image for codbex Applications', link: '/technology/2024/11/18/build-and-release-docker-image-for-codbex-applications' },
            { text: 'Migrate BW Query (BEx) with ABAP to Snowflake with Tableau', link: '/technology/2024/10/27/migrate-bex-abap-snowflake-tableau' },
            { text: 'Implement Snowflake UDF for leave request days calculation', link: '/technology/2024/09/18/snowflake-udf-leave-days' },
            { text: 'Deploy codbex products on Snowflake', link: '/technology/2024/09/11/deploy-codbex-products-on-snowflake' },
            { text: 'Iapetus - Implement ETL for Sales Orders', link: '/technology/2024/08/15/orders-etl' },
            { text: 'Hyperion - Implement a BPM application for leave requests', link: '/technology/2024/07/17/leave-request-bpm-app' },
            { text: 'Kronos - Run easily ABAP code for free in 5 minutes', link: '/technology/2024/06/25/run-abap-for-free' },
            { text: 'Snowflake and Helios - A Harmonious Tale of Data and Development', link: '/technology/2024/04/03/snowflake-and-helios' },
            { text: 'The Technology Stack behind Our Products', link: '/technology/2022/06/15/technology-stack-behind-our-products' },
          ]
        }
      ],
      '/sales': [
        {
          text: 'Sales',
          items: [
            { text: 'How the "White-Label" Business Model Works?', link: '/sales/2022/07/14/how-white-label-works' },
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
    },

    externalLinkIcon: true
  }
})
