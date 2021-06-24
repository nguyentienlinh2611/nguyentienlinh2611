const path = require('path')
const pick = require('lodash/pick')

module.exports = themeConfig => {
    /**
     * Default theme configuration
     */
    themeConfig = Object.assign(themeConfig, {
        logo: '',
        nav: themeConfig.nav || [
            {
                text: 'Blog',
                link: '/',
            },
            {
                text: 'Tags',
                link: '/tag/',
            },
        ]
    })

    /**
     * Configure blog plugin
     */
    const defaultBlogPluginOptions = {
        directories: [
            {
                id: 'post',
                dirname: '_posts',
                path: '/',
            },
        ],
        frontmatters: [
            {
                id: 'tag',
                keys: ['tags'],
                path: '/tag/',
            },
        ],
        globalPagination: {
            lengthPerPage: 6,
        },
    }

    let resolvedFeedOptions
    const isFeedEnabled = themeConfig.feed && themeConfig.feed.canonical_base
    if (isFeedEnabled) {
        const {
            rss = true,
            atom = true,
            json = true,
            ...feedOptions
        } = themeConfig.feed
        resolvedFeedOptions = Object.assign({}, feedOptions, {
            feeds: {
                rss2: { enable: rss },
                atom1: { enable: atom },
                json1: { enable: json },
            },
        })
    }

    const properties = [
        'directories',
        'frontmatters',
        'globalPagination',
        'sitemap',
        'comment',
        'newsletter',
    ]
    const themeConfigPluginOptions = {
        ...pick(themeConfig, properties),
        feed: resolvedFeedOptions,
    }

    const blogPluginOptions = Object.assign(
        {},
        themeConfig.classifierConfig || defaultBlogPluginOptions,
        themeConfigPluginOptions
    )

    /**
     * Integrate plugins
     */

    const enableSmoothScroll = themeConfig.smoothScroll === true

    const plugins = [
        ['@vuepress/blog', blogPluginOptions],
        '@vuepress/plugin-nprogress',
        ['@vuepress/medium-zoom', true],
        [
            '@vuepress/search',
            {
                searchMaxSuggestions: 10,
            },
        ],
        ['smooth-scroll', enableSmoothScroll]
    ]

    /**
     * Enable pwa
     */
    if (themeConfig.pwa) {
        plugins.push([
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true,
            },
        ])
    }

    const chainWebpack = (config) => {
        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();

        svgRule
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-svg-loader')
            .loader('vue-svg-loader');
    }

    return {
        plugins,
        chainWebpack,
        define: {
            THEME_BLOG_PAGINATION_COMPONENT: themeConfig.paginationComponent
                ? themeConfig.paginationComponent
                : 'Pagination',
        },
        alias: {
            fonts: path.resolve(__dirname, 'fonts'),
        },

    }
}
