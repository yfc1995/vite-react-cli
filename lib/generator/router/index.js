const path = require('path')


module.exports = (generator, options) => {
  const dependencies = {
    "react-router-dom": "^6.3.0",
  }

  generator.extendPakageJson({
    dependencies
  })

  const fullPath = path.join(__dirname, './template')

  generator.render({
    fullPath,
    data: {
      routerMode: options.routerMode,
    }
  })
}