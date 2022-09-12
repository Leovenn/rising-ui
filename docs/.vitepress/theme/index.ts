// .vitepress/theme/index.js

import DefaultTheme from 'vitepress/theme'
import { RButton } from '@rising-ui/rising-ui'
import '@rising-ui/theme-chalk/src/index.less'
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.

    // import('@sage-ui/components').then((module) => {
    //   console.log(module)
    //   app.use(module)
    // })
    // console.log(RButton)
    // app.use('RButton', RButton)
    app.component('RButton', RButton)
  },
}
