const { adjustStyleLoaders, fixBabelImports, override, addWebpackAlias, addWebpackPlugin} = require("customize-cra")
const path = require('path')
const WebpackBar = require("webpackbar")
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

const resolve = _path => path.resolve(__dirname, _path)
module.exports = override(
  fixBabelImports("lodash", {
    libraryDirectory: "",
    camel2DashComponentName: false
  }),
  addWebpackAlias({
    "@": resolve('src'),
    '@cpm': resolve('src/components'),
    '@api': resolve("src/api"),
    '@assets': resolve("src/assets"),
    '@pages': resolve("src/pages"),
    '@router': resolve("src/router"),
    '@img': resolve("src/assets/images"),
    '@utils': resolve("src/utils"),
    '@store': resolve("src/store/modules")
  }),
  addWebpackPlugin(
    new WebpackBar({
      name: process.env.NODE_ENV !== "production" ? "正在启动" : "正在打包",
      color: "#fa8c16"
    }),
    new MomentLocalesPlugin()
  ),
  adjustStyleLoaders(rule => {
    if (rule.test.toString().includes('scss')) {
      rule.use.push({
        loader: require.resolve('sass-resources-loader'),
        options: {
          resources: [resolve("./src/styles/theme.scss")]
        }
      });
    }
  })
)
