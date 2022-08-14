import type { App, Plugin } from 'vue'

const preFix = 's-'

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T>(comp: T) => {
  console.log(comp)
  const c: any = comp
  const name = `${preFix}${c.__file.slice(c.__file.lastIndexOf('/') + 1).replace('.vue', '')}`
  console.log(name)
  console.log(c.__file.slice(c.__file.lastIndexOf('/') + 1).replace('.vue', ''))
  ;(comp as SFCWithInstall<T>).install = function (app: App) {
    // app.component((comp as any).name, comp)
    app.component(name, comp)
  }

  return comp as SFCWithInstall<T>
}
