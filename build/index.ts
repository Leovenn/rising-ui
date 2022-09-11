import { proPath, rootPath, sourcePath } from './utils/constant'
import { run } from './utils/run'
import { copy, readJsonSync, remove, writeJson } from 'fs-extra'
import less from 'gulp-less'
import autoprefixer from 'gulp-autoprefixer'
import { dest, src } from 'gulp'

/**
 * 移除dist 目录
 */
export const removeDist = () => remove(proPath)

/**
 * 打包组件库
 */
export const buildComponents = async () => {
  await run(`cd ${rootPath}`)
  await run('pnpm run build:vite')
}

/**
 * 拷贝dist/lib和es目录/rising-ui 下的文件 提取到es 和 lib 目录
 * 移除dist/lib和es目录中的rising-ui文件夹
 */
export const unpackRising = async () => {
  await copy(`${proPath}/es/rising-ui`, `${proPath}/es`)
  await copy(`${proPath}/lib/rising-ui`, `${proPath}/lib`)
  await remove(`${proPath}/es/rising-ui`)
  await remove(`${proPath}/lib/rising-ui`)
}

/**
 * 拷贝 package.json 并修改 拷贝md  拷贝样式源码文件 移除dist/assets 目录
 */
export const copyPkgAndMd = async () => {
  await writeJson(`${proPath}/package.json`, { ...readJsonSync(`${sourcePath}/rising-ui/package.json`), name: 'rising-ui', main: 'lib/index.cjs', module: 'es/index.mjs', type: 'module' })
  await copy(`${rootPath}/README.md`, `${proPath}/README.md`)
  await copy(`${sourcePath}/theme-chalk/src`, `${proPath}/theme-chalk/src`)
  await remove(`${proPath}/assets`)
}

/**
 * 打包组件库样式
 */

export const buildStyle = () =>
  src(`${sourcePath}/theme-chalk/src/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${proPath}/theme-chalk`))
