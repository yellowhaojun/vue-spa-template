const path = require('path')

module.exports = {
  // 编译时候的配置
  build: {
    publicPath: '', // 通用路径
    cssSourceMap: false, // cssSourceMap
    devtool: 'none' // sourceMap
  },
  // 开发时使用的配置
  dev: {
    autoOpenBrowser: true, // 是否自动启动
    cssSourceMap: false, // cssSourceMap
    proxy: {}, // 代理
    publicPath: '', // 通用路径
    port: 8080, // 端口号
    devtool: 'cheap-module-source-map', // sourceMap
    hash: true // 是否开启hash
  },
  // 通用配置
  common: {
    // externals
    externals: [],
    // alias配置
    alias: {
      '@': path.join(__dirname, './src')
    },
    // eslint 配置
    eslint: {
      open: false, // 是否开启eslint，默认开启
      files: ['./src'], // 需要验证的目录
      exclude: ['node_modules'], // 需要过滤的目录，默认['node_modules']
      extensions: ['.vue', '.jsx', '.ts', '.tsx'] // 需要验证的格式
    },
    // entry入口
    entry: {
      'app': './src/main.ts' // 使用相对路径
    },
    // 用于标示是库还是应用
    type: 'app', // app 应用 lib 库
    multiple: false, // 是否开启多页配置，开启多页模式以后，entry配置会失效
    multipleType: 'pack' // 多页的编译模式，pack分包模式，item字页面模式
  }
}