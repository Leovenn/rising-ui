// .vitepress/theme/index.js

import DefaultTheme from 'vitepress/theme'
import sageui from '@sage-ui/sage-ui'
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.

    // import('@sage-ui/components').then((module) => {
    //   console.log(module)
    //   app.use(module)
    // })

    app.use(sageui)
  },
}
