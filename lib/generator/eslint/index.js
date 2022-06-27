const path = require('path');

module.exports = (generator) => {

  const scripts = {
    "lint": "eslint --fix --ext .js,.jsx src",
    "prepare": "husky install",
    "checkEslintCommit": "pnpm lint:commit",
    "lint:commit": "lint-staged",
  }

  const devDependencies = {
    "eslint": "^8.18.0",
    "eslint-plugin-react": "^7.30.1",
    "husky": "^8.0.0",
    "lint-staged": "^13.0.2",
    "vite-plugin-eslint": "^1.6.1"
  };
  
  generator.extendPakageJson({
    devDependencies,
    scripts,
    'lint-staged' : {
      "src/**/*.{js,jsx}": [
        "eslint --fix"
      ]
    }
  });

  const fullPath = path.join(__dirname, './template');

  generator.render({
    fullPath
  });
}