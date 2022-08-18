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

const copyRisingUi = (e) => {
  e.forEach((item) => {
    const myPath = path.join(__dirname, `../rising-ui/${item}/rising-ui/`)
    const targetPath = path.join(__dirname, `../rising-ui/${item}/`)
    fs.readdir(myPath, (err, files) => {
      if (err) {
        console.log(err)
      } else {
        files.forEach((filePath) => {
          // fs.cp(myPath + filePath, targetPath + filePath, () => {})
          fs.writeFileSync(targetPath + filePath, fs.readFileSync(myPath + filePath))
        })
        console.log(myPath)
        removeDir(myPath)
      }
    })
  })
}
copyRisingUi(['es', 'lib'])
// console.log(JSON.parse(fs.readFileSync('package.json', 'utf8')))
