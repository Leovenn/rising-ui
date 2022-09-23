import { markdownConfig } from './plugins/markdown-plugin'
import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'Rising UI',
  // description: 'hello world',
  // base: '/rising-ui-docs',
  // base: '/rising-ui',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo_head.svg' }]],
  lastUpdated: true,
  markdown: {
    config: markdownConfig,
  },
  themeConfig: {
    siteTitle: 'Rising UI',
    logo: '/logo_head.svg',

    nav: [
      { text: '指南', link: '/guide/install' },
      { text: '组件', link: '/examples/button/' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/Leovenn/rising-ui' }],
    sidebar: {
      '/guide/': [
        {
          text: '快速上手',
          items: [
            {
              text: '安装',
              link: '/guide/install',
            },
            {
              text: '快速开始',
              link: '/guide/quickstart',
            },
          ],
        },
        {
          text: '进阶',
          items: [
            {
              text: '国际化',
              link: '/guide/internationalization',
            },
            {
              text: '主题',
              link: '/guide/theme',
            },
            {
              text: '暗黑模式',
              link: '/guide/dark',
            },
          ],
        },
      ],
      '/examples/': [
        {
          text: '基础组件',
          items: [
            {
              text: 'button 按钮',
              link: '/examples/button/',
            },
          ],
        },
      ],
    },
  },
})
