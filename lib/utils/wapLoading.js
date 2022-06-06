const ora = require('ora')
const fs = require('fs-extra')
const path = require('path')
async function wrapLoading(fn, message, ...args) {
  const spinner = ora(message)
  spinner.start()
  try {
    const result = await fn(...args)
    spinner.succeed()
    return result
  } catch(error) {
    spinner.fail('请求失败')
  }
}

const deleteFile = (filePath) => new Promise((resolve, reject) => {
  const spinner = ora('删除中文件中...')
  spinner.start()
  try {
    fs.readdir(filePath, async (err, names) => {
      if (err) spinner.succeed()
      const arr = [...names]
      const remove = () => {
        spinner.color = 'yellow'
	      spinner.text = `删除${arr[0]}`
        fs.remove(path.join(filePath, arr[0])).then((res) => {
          arr.shift()
          if (arr.length > 0) {
            remove()
          } else {
            deleteSuccess(resolve, filePath, spinner)
          }
        }).catch(console.log)
      }
      if (arr.length) {
        remove()
      } else {
        deleteSuccess(resolve, filePath, spinner)
      }
    })
    
  } catch(error) {
    spinner.fail('删除失败')
    reject(error)
  }
})


function deleteSuccess(resolve, filePath, spinner) {
  spinner.color = 'green'
  spinner.text = `删除成功`
  spinner.succeed()
  fs.removeSync(filePath)
  resolve('成功')
}


module.exports = {
  deleteFile,
  wrapLoading
}