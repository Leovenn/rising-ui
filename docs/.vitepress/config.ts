import { defineConfig } from 'vitepress'
export default defineConfig({
  themeConfig: {
    siteTitle: false,
    logo: '/logo.png',
    nav: [
      { text: '指南', link: '/guide/install' },
      { text: '组件', link: '/examples/button/' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://gitee.com/geeksdidi' }],
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
              link: '/guild/quickstart',
            },
          ],
        },
        {
          text: '进阶',
          items: [
            {
              text: 'xx',
              link: '/xx',
            },
          ],
        },
      ],
    },
  },
})
