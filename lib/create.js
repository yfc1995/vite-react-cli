
const path = require('path')
const fs = require('fs-extra')
const inquirer = require('inquirer')
const Creator = require('./Creator')
const defaultFeaturePrompts = require('./utils/defaultFeaturePrompts')
const PromptModulesApi = require('./PromptModulesApi')
const getPromptModules = require('./promptModules/getPromptModules')
const Generator = require('./Generator')
const executeCommand = require('./utils/executeCommand')
const colors = require('./utils/chalk')
const figlet = require('figlet')

async function judgeOperation(name, options) {

  const { isCancel } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'isCancel',
      message: `你想要创建一个项目${name}?`
    }
  ])

  if (!isCancel) {
    process.exit(1)
    return
  }


  const filePath = path.join(process.cwd(), name)
  if (!fs.existsSync(filePath)) {
    createApp(name)
    return
  }
  if (options.fource) {
    fs.removeSync(name)
    createApp(name)
    return
  }
  const { isCover } = await inquirer.prompt([
    {
      name: 'isCover',
      type: 'list',
      message: '文件已存在，是否覆盖？',
      choices: [
        {
          name: '覆盖',
          value: 'cover'
        },
        {
          name: '取消',
          value: false
        }
      ]
    }
  ])
  if (isCover === 'cover') {
    fs.removeSync(filePath)
    createApp(name)
    return
  }
}


async function createApp(name) {
  const creator = new Creator()
  
  creator.injectFeaturePrompt(defaultFeaturePrompts)

  const promptModuleApi = new PromptModulesApi(creator)

  const promptModules = getPromptModules()

  promptModules.forEach(module => module(promptModuleApi))


  const finallyPrompts = creator.getFinallyPrompts()

  const answers = await inquirer.prompt(finallyPrompts)


  const pkgjson = {
    name,
    version: '0.1.0',
    dependencies: {},
    devDependencies: {}
  }

  answers.features = ['react', ...answers.features]

  const generator = new Generator(pkgjson)
 
  
  answers.features.forEach(template => {
    const templatePaht = path.join(__dirname, './generator', template)
    if (fs.existsSync(templatePaht)) {
      require(`./generator/${template}`)(generator, answers, name)
    }
  })

  await generator.generator(name)

  colors.yellow(`开始下载依赖`)
  await executeCommand('git', ['init'], path.join(process.cwd(), name))
  await executeCommand('npm', ['install'], path.join(process.cwd(), name))

  console.log('\r\n' + figlet.textSync('success', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
  }))

  colors.green('cd ' + name)
  colors.green('npm start')
}

module.exports = judgeOperation