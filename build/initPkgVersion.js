import fs from 'fs'
import { execSync } from 'child_process'
import { source_path_pkg, pro_path_pkg } from './constant.js'

export const initPkgVersion = () => {
  let pkgContentSourceOld = JSON.parse(fs.readFileSync(source_path_pkg, 'utf8'))
  let pkgContentProOld = JSON.parse(fs.readFileSync(pro_path_pkg, 'utf8'))

  /**
   * 增加可运行脚本
   */
  pkgContentProOld['scripts'] = {}
  pkgContentProOld['scripts']['predeploy'] = 'npm version patch' // # From 1.0.0 -> 1.0.1
  //   pkgContent['scripts']['predeploy'] = 'npm version minor' // # From 1.0.1 -> 1.1.0
  //   pkgContent['scripts']['predeploy'] = 'npm version major' // # From 1.1.0 -> 2.0.0

  /**
   * 将修改的packa.json 拷贝到dist 目录下
   */
  fs.writeFileSync(pro_path_pkg, JSON.stringify(pkgContentProOld))

  /**
   * 执行命令 增加版本号 增加版本号
   */
  execSync('pnpm run -C dist predeploy', { stdio: 'inherit' })

  /**
   * 读取 dist下的packa.json 删除scripts 字段 重新写入
   */
  let hasScript = JSON.parse(fs.readFileSync(pro_path_pkg, 'utf8'))
  if ('scripts' in hasScript) delete hasScript['scripts']
  fs.writeFileSync(pro_path_pkg, JSON.stringify(hasScript))

  /**
   * 修改  packages下rising-ui 下的packa.json 的版本号 并写入
   */
  pkgContentSourceOld['version'] = hasScript['version']
  fs.writeFileSync(source_path_pkg, JSON.stringify(pkgContentSourceOld))
}
