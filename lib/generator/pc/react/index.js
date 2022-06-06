const path = require('path')

module.exports = (generator, options = { features: [], reouterMode: false }, name) => {
  const dependencies = {
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.2.0",
    "@testing-library/user-event": "^13.5.0",
    "loadsh": "^0.0.4",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-redux": "^8.0.2",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }
  if (options.features.includes('antd')) {
    dependencies["antd"] =  "^4.20.6"
  }
  
  const devDependencies = {
    "babel-plugin-import": "^1.13.5",
    "customize-cra": "^1.0.0",
    "customize-cra-less-loader": "^2.0.0",
    "http-proxy-middleware": "^2.0.6",
    "less": "^4.1.2",
    "less-loader": "^11.0.0",
    "lodash-webpack-plugin": "^0.11.6",
    "moment-locales-webpack-plugin": "^1.2.0",
    "react-app-rewired": "^2.2.1",
    "webpackbar": "^5.0.2"
  }

  generator.extendPakageJson({
    dependencies,
    devDependencies,
    scripts: {
      start: "react-app-rewired start",
      build: "react-app-rewired build",
      test: "react-app-rewired test",
      eject: "react-scripts eject"
    },
    eslintConfig: {
      extends: [
        "react-app",
        "react-app/jest"
      ]
    },
    browserslist: {
      production: [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      development: [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    },
  })

  const fullPath = path.join(__dirname, './template')

  generator.render({
    fullPath,
    data: {
      needRedux: options.features.includes('redux'),
      needRouter: options.features.includes('router'),
      projectName: name,
      needAntd: options.features.includes('antd')
    }
  })
}