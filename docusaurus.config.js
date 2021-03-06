module.exports = {
  title: 'AirReps',
  tagline: 'An open, non-profit community of enthusiasts.',
  url: 'https://airreps.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'AirReps', // GitHub org/user name.
  projectName: 'airreps.github.io', // deployment repo.
  themeConfig: {
    hideableSidebar: true,
    announcementBar: {
      id: 'supportus',
      content:
        '🎯 Want to contribute? <a target="_blank" rel="noopener noreferrer" href="https://github.com/AirReps/website-content/tree/edit">Fork our documentation and create a PR!</a> 🎯',
    },
    navbar: {
      hideOnScroll: true,
      title: 'AirReps',
      logo: {
        alt: 'Airreps',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://www.reddit.com/r/AirReps',
          label: 'Reddit',
          position: 'left',
        },
       {
          href: 'https://airreps.link/discord',
          label: 'Discord',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Guides',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
       {
            title: 'Community',
            items: [
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/AirReps',
              },
              {
                label: 'Discord',
                href: 'https://airreps.link/discord',
              }
            ],
          },
        {
          title: 'Applications',
          items: [
            {
              label: 'Google Play Store',
              href: 'https://airreps.info/android',
            },
//            {
//              label: 'iOS ()',
//              href: '',
//            },
          ],
        },
      ],
      copyright: `AirReps is an open-source community, all content within is public domain.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/AirReps/website-content/tree/edit',
        },
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
