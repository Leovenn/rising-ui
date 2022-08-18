import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const myPath = path.join(__dirname, '../dist')

fs.readdir(myPath, (err, files) => {
  if (err) {
    console.log(err)
  } else {
    console.log(files)
  }
})
console.log(path.join(__dirname, '../dist'))
