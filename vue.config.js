module.exports = {
  // 关闭 eslint
  lintOnSave: false,
  // 跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.98.123.211'
      }
    }
  }
}