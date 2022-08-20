import { initPkgVersion } from './initPkgVersion.js'
import { execSync } from 'child_process'

/**
 * 增加版本号 并覆盖旧文件的版本号
 */
initPkgVersion()

/**
 * 执行发布命令
 */
execSync('pnpm publish', { stdio: 'inherit' })
