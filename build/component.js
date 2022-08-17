import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/**
 * 删除dist 文件
 */
const removeDir = (dir) => {
  // let files = fs.readdirSync(dir)
  // for (var i = 0; i < files.length; i++) {
  //   let newPath = path.join(dir, files[i])
  //   let stat = fs.statSync(newPath)
  //   //如果是文件夹就递归下去
  //   if (stat.isDirectory()) removeDir(newPath)
  //   //删除文件
  //   else fs.unlinkSync(newPath)
  // }
  fs.readdirSync(dir).forEach((item) => {
    let newPath = path.join(dir, item)
    let stat = fs.statSync(newPath)
    //如果是文件夹就递归下去
    if (stat.isDirectory()) removeDir(newPath)
    //删除文件
    else fs.unlinkSync(newPath)
  })

  fs.rmdirSync(dir) //如果文件夹是空的，就将自己删除掉
}

removeDir(path.join(__dirname, '../dist'))
