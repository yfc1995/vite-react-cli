module.exports = api => {
  api.injectFeaturePrompts({
    name: 'Router',
    value: 'router'
  })

  api.injectPrompts({
    type: 'list',
    name: 'routerMode',
    message: '请选择路由方式',
    choices: [
      {
        name:'History',
        value: 'history'
      },
      {
        name: 'Hash',
        value: 'hash'
      }
    ],
    when: answers => answers.features && answers.features.includes('router')
  })
}