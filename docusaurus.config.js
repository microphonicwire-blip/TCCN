// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Criminal Database',
  tagline: 'Official records for the server',
  favicon: 'img/favicon.ico',

  url: 'https://YOUR_USERNAME.github.io',
  baseUrl: '/YOUR_REPO_NAME/',

  organizationName: 'YOUR_USERNAME',
  projectName: 'YOUR_REPO_NAME',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '🚔 Criminal Database',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'incidentsSidebar',
            position: 'left',
            label: 'Incidents',
          },
          {
            type: 'docSidebar',
            sidebarId: 'eventsSidebar',
            position: 'left',
            label: 'Events',
          },
          {
            type: 'docSidebar',
            sidebarId: 'peopleSidebar',
            position: 'left',
            label: 'People',
          },
          {
            href: 'https://discord.gg/YOUR_INVITE',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Criminal Database. Built with Docusaurus.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;
