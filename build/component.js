import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { removeDir } from './remove.js'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const copyRisingUi = (e) => {
  e.forEach((item) => {
    const myPath = path.join(__dirname, `../rising-ui/${item}/rising-ui/`)
    const targetPath = path.join(__dirname, `../rising-ui/${item}/`)
    fs.readdir(myPath, (err, files) => {
      if (err) {
        console.log(err)
      } else {
        // fs.cp(myPath + filePath, targetPath + filePath, () => {})

        files.forEach((filePath) => fs.writeFileSync(targetPath + filePath, fs.readFileSync(myPath + filePath)))
        console.log(myPath)
        removeDir(myPath)
      }
    })
  })
}

/**
 * 移除dist
 */
removeDir(path.join(__dirname, '../dist'))
/**
 * 拷贝package 文件到 根目录 并删除packages
 */
copyRisingUi(['es', 'lib'])
