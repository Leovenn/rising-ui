import fs from 'fs'
import path from 'path'

/**
 * 删除dist 文件
 */
export const removeDir = (dir) => {
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
