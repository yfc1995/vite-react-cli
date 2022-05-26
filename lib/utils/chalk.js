
const chalk = require('chalk')
const log = console.log

function logDefatultSeparator(text) {
  return `**********${text}**********`
}
const colors = ['red', 'yellow', 'green']
const colorMethods = {}

function getColors() {
  colors.forEach(color => {
    colorMethods[color] = text => log(chalk[color](logDefatultSeparator(text)))
  })
  return colorMethods
}

module.exports = getColors()