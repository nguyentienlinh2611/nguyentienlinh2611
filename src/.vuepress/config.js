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
  title: 'LinhNT\'s Blog',
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
        link: '/tag/',
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
    personalities: ['is a Software Engineer', 'is trash talk', 'is CSS noob', 'is shy', 'is JavaScript lover', 'is friendly!', 'is game addict', 'is an OOP Programmer', 'is verbose', 'is funny!', 'is a sleepaholic', 'can count to 3'],
    newsletter: {
      endpoint: 'https://github.us6.list-manage.com/subscribe/post?u=d53149f7943c78ca21b5b4130&amp;id=2b6ff0fbc8',
      content: 'Subscribe to get notified whenever my new post comes out!\n I create a new article on a whim, but I will try to keep doing this regularly 😄'
    },
    sitemap: {
      hostname: 'https://nguyentienlinh2611.github.io/'
    },
    feed: {
      canonical_base: 'https://nguyentienlinh2611.github.io/',
    },
    comment: {
      service: 'vssue',
      owner: 'nguyentienlinh2611',
      repo: 'nguyentienlinh2611.github.io',
      clientId: 'e8f9d8b492216d6f1e77',
      clientSecret: 'b3c66c1e891a3be47ef53fa7f48e1982a2f66ca5'
    }
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
