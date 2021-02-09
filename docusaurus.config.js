module.exports = {
  title: 'AirReps',
  tagline: 'An open, non-profit community of enthusiasts.',
  url: 'https://airreps.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'AirReps', // Usually your GitHub org/user name.
  projectName: 'airreps.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
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
              href: 'https://play.google.com/store/apps/details?id=com.airoha.utapp.sdk',
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
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
