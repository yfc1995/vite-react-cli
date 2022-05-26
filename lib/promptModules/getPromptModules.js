const names = require('./index')

module.exports = () => names.map(name => require(`./${name}`))