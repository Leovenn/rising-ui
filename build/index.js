import { removeDir } from './remove.js'
import { initPkg, initReadme } from './init.js'
import { copyPackageFiles } from './copyPackageFiles.js'
import { pro_path_assets } from './constant.js'

copyPackageFiles(['es', 'lib'])

/**
 * 拷贝package.josn 并修改发布字段
 */
initPkg()

/**
 * 拷贝README 文档
 */
initReadme()
/**
 * 移除dist/assets
 */
removeDir(pro_path_assets)
