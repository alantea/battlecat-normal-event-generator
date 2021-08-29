module.exports = {
    chainWebpack: config => {
      config
      .plugin('html')
      .tap(args => {
        args[0].title = '貓咪時程提醒表'
        return args
      })
    }
  }