const komponentSidebar = [{ text: 'Komponenter', link: '/komponenter/' }];

export default {
  title: 'DKFDS-Vue 3 Dokumentation',
  description: 'Just playing around.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/home/' },
      { text: 'Komponenter', link: '/komponenter/' },
    ],
    sidebar: {
      '/home/': [
        {
          text: 'Kom igang',
          items: [
            { text: 'Accordions', link: '/komponenter/accordions' },
            {
              text: 'Section Title B',
              items: [
                { text: 'Item C', link: '/item-c' },
                { text: 'Item D', link: '/item-d' },
              ],
            },
          ],
        },
      ],
      '/komponenter/': [
        {
          text: 'Komponenter',
          collapsible: true,
          items: [
            { text: 'Accordions', link: '/komponenter/accordions' },
            {
              text: 'Section Title B',
              items: [
                { text: 'Item C', link: '/item-c' },
                { text: 'Item D', link: '/item-d' },
              ],
            },
          ],
        },
      ],
    },
  },
};