const { description, authors } = require('../../package.json')

module.exports = {
  dest: 'dist',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#base
   */
  base: '/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Homepage',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  theme: require.resolve('./theme'),
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Posts',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tags/',
      },
      {
        text: 'My CV',
        link: '/cv/'
      }
    ],
    avatarImg: '/assets/img/avatar.png',
    tagName: authors.tagName,
    socialPage: 'https://facebook.com/linhnt2611',
    socialLinks: {
      github: 'https://github.com/nguyentienlinh2611',
      linkedin: 'https://linkedin.com/in/nguyentienlinh2611',
      facebook: 'https://facebook.com/linhnt2611'
    },
    personalities: ['is a Software Engineer', 'is trash talk', 'is CSS noob', 'is shy', 'is JavaScript lover', 'is friendly!', 'is game addict', 'is an OOP Programmer', 'is verbose', 'is funny!', 'is a sleepaholic', 'can count to 3']
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
  paginationComponent: 'SimplePagination'
}
