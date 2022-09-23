// .vitepress/theme/index.js

import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { RButton } from '@rising-ui/rising-ui'
import '@rising-ui/theme-chalk/src/index.less'
import Demo from '../../base/Demo.vue'
// import 'prismjs/themes/prism-solarizedlight.min.css'
import 'prismjs/themes/prism-okaidia.min.css'

const define = <T>(value: T): T => value

// t define = <T>(value: T): T => value
export default define<Theme>({
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.

    // import('@sage-ui/components').then((module) => {
    //   console.log(module)
    //   app.use(module)
    // })
    // console.log(RButton)
    // app.use('RButton', RButton)
    app.component('RButton', RButton)
    app.component('Demo', Demo)
  },
})
