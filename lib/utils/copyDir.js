const path = require('path')
const fs = require('fs-extra')
const ejs = require('ejs')
const colors = require('./chalk')

let flat = 0
let fileCount = 0
let dirCount = 0

function copyDir(sourceDir, currentDir, data = { routerMode: false, needRedux: false, projectName: ''}, resolve) {
  flat++
  fs.readdir(sourceDir, (err, names) => {
    flat--
    if (err) throw err
    names.forEach(name => {
      fileCount++
      const fullCurrentDir = path.join(currentDir, name)
      const fullSourceDir = path.join(sourceDir, name)
      fs.stat(fullSourceDir, (err, stats) => {
        if (err) throw err
        if (stats && stats.isDirectory()) {
          dirCount++
          checkDirIsExisting(fullCurrentDir).then(() => {
            dirCount--
            fileCount--
            copyDir(fullSourceDir, fullCurrentDir, data, resolve)
            checkIsCopyCompleted(resolve)
          }).catch(console.error)
        } else {
          checkDirIsExisting(currentDir).then(() => {
            const template = fs.readFileSync(fullSourceDir, 'utf-8')
            const renderTemplate = ejs.render(template, data)
            colors.yellow('创建模板：' + name)
            fs.writeFileSync(fullCurrentDir, renderTemplate)
            fileCount--
            checkIsCopyCompleted(resolve)
          }).catch(console.error)
        }
      })
    })
  })
}

function checkDirIsExisting(fullCurrentDir) {
  return new Promise((resolve, reject) => {
    fs.stat(fullCurrentDir, err => {
      if (err) {
        fs.mkdir(fullCurrentDir, err => {
          if (err) {
            reject(`目录不存在:${err}` )
            return
          }
          resolve()
        })
      }
      resolve()
    })
  })
}

function checkIsCopyCompleted(resolve) {
  if (flat === 0 && dirCount === 0 && fileCount === 0) resolve()
}

function copyTemplate(sourcesConfig, name) {
  return new Promise((resolve, reject) => {
    const currentDir = path.join(process.cwd(), name)
    checkDirIsExisting(currentDir).then(() => {
      sourcesConfig.forEach(sourceConfig => {
        copyDir(sourceConfig.fullPath, currentDir, sourceConfig.data, resolve)
      })
    })
  })
}

module.exports = copyTemplate