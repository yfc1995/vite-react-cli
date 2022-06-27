const path = require('path');

module.exports = (generator) => {

  const devDependencies = {
    "jest": "^28.1.1",
  };

  const scripts = {
    "test": "jest"
  }

  generator.extendPakageJson({
    devDependencies,
    scripts
  });

  const fullPath = path.join(__dirname, './template');

  generator.render({
    fullPath
  });
}