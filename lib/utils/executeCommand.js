const execa = require('execa')

module.exports = function executeCommand(cmmand, argv, cwd) {
  return new Promise((resolve, reject) => {
    const child = execa(cmmand, argv, {
      cwd,
      stdio: ['inherit', 'pipe', 'inherit']
    })
    child.stdout.on('data', buffer => {
      process.stdout.write(buffer)
    })

    child.on('close', code => {
      if (code !== 0) {
        reject(new Error('命令失败：' + cmmand))
        return
      }
      resolve()
    })
  })
}