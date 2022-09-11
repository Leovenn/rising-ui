/**
 * editor pkg
 */
// import fs from 'fs'
// import { execSync } from 'child_process'
// import { source_path_pkg, pro_path_pkg } from './utils/constant.js'

// export const initPkgVersion = () => {
//   let pkgContentSourceOld = JSON.parse(fs.readFileSync(source_path_pkg, 'utf8'))
//   let pkgContentProOld = JSON.parse(fs.readFileSync(pro_path_pkg, 'utf8'))

//   /**
//    * 增加可运行脚本
//    */
//   pkgContentProOld['scripts'] = {}
//   pkgContentProOld['scripts']['predeploy'] = 'npm version patch' // # From 1.0.0 -> 1.0.1
//   //   pkgContent['scripts']['predeploy'] = 'npm version minor' // # From 1.0.1 -> 1.1.0
//   //   pkgContent['scripts']['predeploy'] = 'npm version major' // # From 1.1.0 -> 2.0.0

//   /**
//    * 将修改的packa.json 拷贝到dist 目录下
//    */
//   fs.writeFileSync(pro_path_pkg, JSON.stringify(pkgContentProOld), 'utf8')

//   /**
//    * 执行命令 增加版本号 增加版本号
//    */
//   execSync('pnpm run -C dist predeploy', { stdio: 'inherit' })

//   /**
//    * 读取 dist下的packa.json 删除scripts 字段 重新写入
//    */
//   let hasScript = JSON.parse(fs.readFileSync(pro_path_pkg, 'utf8'))
//   if ('scripts' in hasScript) delete hasScript['scripts']
//   fs.writeFileSync(pro_path_pkg, JSON.stringify(hasScript), 'utf8')

//   /**
//    * 修改  packages下rising-ui 下的packa.json 的版本号 并写入
//    */
//   pkgContentSourceOld['version'] = hasScript['version']
//   fs.writeFileSync(source_path_pkg, JSON.stringify(pkgContentSourceOld), 'utf8')
// }

/**
 * remove
 */

// import fs from 'fs'
// import path from 'path'

// /**
//  * 删除目录及下面的文件
//  */
// export const removeDir = (dir) => {
//   try {
//     fs.readdirSync(dir).forEach((item) => {
//       let newPath = path.join(dir, item)
//       let stat = fs.statSync(newPath)
//       //如果是文件夹就递归下去
//       if (stat.isDirectory()) removeDir(newPath)
//       //删除文件
//       else fs.unlinkSync(newPath)
//     })

//     fs.rmdirSync(dir) //如果文件夹是空的，就将自己删除掉
//   } catch (error) {
//     // console.log(error)
//     console.log(`目标目录不存在，自动跳过`)
//   }
// }

/**
 * publish
 */

//  import { initPkgVersion } from './initPkgVersion.js'
//  import { execSync } from 'child_process'

//  /**
//   * 增加版本号 并覆盖旧文件的版本号
//   */
//  initPkgVersion()

//  /**
//   * 执行发布命令
//   */
//  // execSync('pnpm publish', { stdio: 'inherit' })
