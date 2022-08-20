import fs from 'fs'
import { join } from 'path'
import { removeDir } from './remove.js'
import { pro_path } from './constant.js'
/**
 * 解压生产环境 package 目录 提取文件到目标目录
 * @param {*} e  = ['es','lib']
 */
export const copyPackageFiles = (e) => {
  e.forEach((item) => {
    const myPath = join(pro_path, `/${item}/rising-ui/`)
    const targetPath = join(pro_path, `/${item}/`)
    fs.readdir(myPath, (err, files) => {
      if (err) console.log(err)
      else {
        files.forEach((fileName) => {
          /**
           * 替换路径
           */
          let source = fs.readFileSync(myPath + fileName, 'utf-8').replaceAll('../', './')
          fs.writeFileSync(targetPath + fileName, source, 'utf-8')
        })
        removeDir(myPath)
      }
    })
  })
}
