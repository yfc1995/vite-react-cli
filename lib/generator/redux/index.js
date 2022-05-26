const path = require('path');

module.exports = generator => {

  const dependencies = {
    "@reduxjs/toolkit": "^1.8.2",
    "react-redux": "^8.0.2",
  };

  generator.extendPakageJson({
    dependencies,
  });

  const fullPath = path.join(__dirname, './template');

  generator.render({ fullPath });
}