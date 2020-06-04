module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
      // '/test': {
      //   target: 'http://192.168.199.190:9001/',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '/test': ''
      //   }
      // }
    }
  },
  // 打包后不生成吗map文件
  productionSourceMap: false,
  // 真正的按需加载
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
  },
  assetsDir: './'
}
