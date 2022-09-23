import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T>(comp: T) => {
  ;(comp as SFCWithInstall<T>).install = (app: App): void => {
    app.component(comp as any, comp as SFCWithInstall<T>)
  }

  return comp as SFCWithInstall<T>
}
