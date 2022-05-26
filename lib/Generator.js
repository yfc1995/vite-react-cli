const path = require('path')
const fs = require('fs-extra')
const colors = require('./utils/chalk')
const copyTemplate = require('./utils/copyDir')

class Generator {
  constructor(pkgjson) {
    this.pkg = pkgjson
    this.sources = []
  }

  extendPakageJson(pkgjson) {
    const pkg = this.pkg
    for (const key in pkgjson) {
      if (pkgjson.hasOwnProperty(key)) {
        const element = pkgjson[key];
        pkg[key] ? (pkg[key] = { ...pkg[key], ...element }) : pkg[key] = element
      }
    }
  }

  generator(name) {
    colors.green('开始创建项目:' + name)
    const pkg = JSON.stringify(this.pkg, null, 2)
    return copyTemplate(this.sources, name).then(() => {
      return this.writePkg(name, pkg)
    }).then(() => {
      colors.green('创建成功')
    }).catch(err => {
      colors.red(`创建失败，原因是：${err}`)
    })
  }

  writePkg(name, pkgjson) {
    return new Promise((resolve, reject) => {
      const currentParh = path.join(process.cwd(), name, './package.json')
      fs.writeFile(currentParh, pkgjson, (err => {
        err ? reject('写入package.json失败:' + err) : resolve()
      }))
    })
  }

  render(sourceConfig) {
    this.sources.push(sourceConfig)
  }



}

module.exports = Generator