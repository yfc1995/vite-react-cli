const { createProxyMiddleware } = require('http-proxy-middleware')

// 根据这个值判断是否是开发环境还是测试环境
const env = process.env.APP_ENV
let url = 'http://172.16.82.214/'
if (env === 'test') {
  url = 'http://172.16.82.43/'
} else if (env === 'zhihui') {
  url = 'http://192.168.112.156:8081/zzhd/'
}

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
      target: url, //配置转发目标地址(能返回数据的服务器地址)
      changeOrigin: true, //控制服务器接收到的请求头中host字段的值
      // pathRewrite: { '^/api': '' }, //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)

    })
  )
}
