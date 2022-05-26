#! /usr/bin/env node

const program = require('commander')
const figlet = require('figlet')
const judgeOperation = require('../lib/create')

program.version(require('../package.json').version)
  .command('create [name]')
  .description('创建一个项目')
  .option('-f --fource', '是否覆盖原有项目')
  .action((name, options) => {
    judgeOperation(name, options)
  })

program.on('--help', () => {
  console.log('\r\n' + figlet.textSync('xy-cli', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
  }))
})


program.parse(process.argv)