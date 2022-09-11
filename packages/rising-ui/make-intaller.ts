import type { App, Plugin } from '@vue/runtime-core'
import { INSTALLED_KEY } from '@rising-ui/constants'
export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App & { [key: symbol]: boolean }) => {
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))
  }

  return { install }
}
