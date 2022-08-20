import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const pro_path = join(__dirname, '../dist')

const pro_path_assets = join(pro_path, '/assets')

const pro_path_pkg = join(pro_path, '/package.json')

const source_path = join(__dirname, '../packages/rising-ui')

const source_path_pkg = join(source_path, '/package.json')

const readme_path = join(__dirname, '../README.md')

export { pro_path, pro_path_assets, pro_path_pkg, source_path, source_path_pkg, readme_path }
