import { removeDir } from './remove.js'
import { initPkg } from './initPkg.js'
import { copyPackageFiles } from './copyPackageFiles.js'
import { pro_path_assets } from './constant.js'

copyPackageFiles(['es', 'lib'])

/**
 * 拷贝package.josn 并修改发布字段
 */
initPkg()

/**
 * 移除dist/assets
 */
removeDir(pro_path_assets)
