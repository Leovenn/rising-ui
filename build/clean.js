import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { removeDir } from './remove.js'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
removeDir(path.join(__dirname, '../rising-ui'))
