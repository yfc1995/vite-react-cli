const path = require('path')

module.exports = (generator, options = { features: [], reouterMode: false }, name) => {
  let pakageJson = {
    

  }
  let dependencies = {
    "less": "^4.1.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.3.0"
  }
  let devDependencies = {
    "@types/node": "^18.0.0",
    "@vitejs/plugin-react": "^1.3.0",
    "vite": "^2.9.9",
    "vite-plugin-dynamic-import-module": "^0.2.1",
  }
  if (options.projectType === 'PC') {
    dependencies["antd"] =  "^4.21.3";
    devDependencies['vite-plugin-style-import'] = "^1.4.1"
  } else {
    dependencies["antd-mobile"] =  "^5.16.1";
  }

  

  const scripts = {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }

  pakageJson = {
    dependencies,
    devDependencies,
    scripts,
    ...pakageJson,
  }




  generator.extendPakageJson({
    ...pakageJson
  })

  const fullPath = path.join(__dirname, './template')

  generator.render({
    fullPath,
    data: {
      needRedux: options.features.includes('redux'),
      needRouter: options.features.includes('router'),
      projectName: name,
      needAntd: options.features.includes('antd'),
      projectType: options.projectType
    }
  })
}