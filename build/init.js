import fs from 'fs'
import { source_path_pkg, pro_path_pkg, readme_path, pro_path } from './constant.js'

export const initPkg = () => {
  // 读取 packages下rising-ui 下的packa.json
  let pkgContent = JSON.parse(fs.readFileSync(source_path_pkg, 'utf8'))

  pkgContent['name'] = 'rising-ui'
  pkgContent['main'] = 'lib/index.cjs'
  pkgContent['module'] = 'es/index.m.js'

  /**
   * 将修改的packa.json 拷贝到dist 目录下
   */
  fs.writeFileSync(pro_path_pkg, JSON.stringify(pkgContent))
}

export const initReadme = () => fs.writeFileSync(pro_path + '/README.md', fs.readFileSync(readme_path, 'utf8'))
