module.exports = {
  title: 'Beaver Builder Knowledge Base',
  tagline: 'Frequently asked questions and support documentation for Beaver Builder products.',
  url: 'https://docs.wpbeaverbuilder.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'beaverbuilder',
  projectName: 'docs',
  onBrokenLinks: 'warn',
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  scripts: [
    {
      src: 'https://kit.fontawesome.com/71592fd01a.js',
      defer: true,
    },
  ],
  themeConfig: {
    image: 'img/bb-soc-logo.png',
    algolia: {
      apiKey: 'fa19c2d00714189b023a571e59f6e1c5',
      appId: '30TMM3CYV0',
      indexName: 'bbdocs',
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    prism: {
      additionalLanguages: ['php'],
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: 'announcement-bar',
      content:
        '🎉 New <a href="https://app.assistant.pro/community" target="_blank" rel="noopener">Beaver Builder template marketplace!</a> Get started for FREE at <a href="https://assistant.pro/" target="_blank" rel="noopener">Assistant.Pro</a>.',
      backgroundColor: '#1b7497',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
        logo: {
        alt: 'Return to Beaver Builder',
        src: 'bb-logo-inline.png',
        href: 'https://www.wpbeaverbuilder.com/',
        target: '_self',
      },
      items: [
        {
          href: '/',
          position: 'left',
          className: 'header-home-icon',
          'aria-label': 'Docs Home',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'beaver-builder/introduction/index',
          label: 'Beaver Builder',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'beaver-themer/introduction/index',
          label: 'Beaver Themer',
        },
        {
          to: '/bb-theme',
          label: 'BB Theme',
          position: 'left',
          activeBasePath: 'bb-theme',
        },
        {
          to: '/assistant',
          label: 'Assistant',
          position: 'left',
          activeBasePath: 'assistant',
        },
        {
          href: 'https://courses.wpbeaverbuilder.com/',
          label: 'Courses',
          position: 'right',
          target: '_blank',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Beaver Builder',
              to: '/beaver-builder',
            },
            {
              label: 'Beaver Themer',
              to: '/beaver-themer',
            },
            {
              label: 'BB Theme',
              to: '/bb-theme',
            },
            {
              label: 'Assistant',
              to: '/assistant',
            }
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Blog',
              to: 'https://www.wpbeaverbuilder.com/blog/',
            },
            {
              label: 'Pricing',
              to: 'https://www.wpbeaverbuilder.com/pricing/',
            },
            {
              label: 'Courses',
              href: 'https://courses.wpbeaverbuilder.com/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/c/BeaverBuilderWP',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/groups/beaverbuilders/',
            },
            {
              label: 'Slack',
              href: 'https://beaverbuilders.slack.com/join/shared_invite/zt-p4cb3bl0-gACU3QD8r25RPlaIoh3YAA#/shared-invite/email',
            },
            {
              label: 'Forums',
              href: 'https://community.wpbeaverbuilder.com/',
            },
            {
              label: 'Discord',
              href: 'https://www.wpbeaverbuilder.com/discord/',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy',
              href: 'https://www.wpbeaverbuilder.com/privacy-policy/',
            },
            {
              label: 'Terms',
              href: 'https://www.wpbeaverbuilder.com/terms-and-conditions/',
            },
          ],
        },
      ],
      logo: {
        alt: 'Beaver Builder Logo',
        src: '/img/bb-logo-light.png',
        href: 'https://www.wpbeaverbuilder.com/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Beaver Builder.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-X18SJZNXS8',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
};
