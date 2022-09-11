import { spawn } from 'child_process'
import { rootPath } from './constant'
export const run = (command: string) => {
  const [cmd, ...args] = command.split(' ')
  return new Promise((resolve, reject) => {
    const app = spawn(cmd, args, {
      cwd: rootPath,
      stdio: 'inherit',
      shell: true,
    })
    app.on('close', resolve)
  })
}
