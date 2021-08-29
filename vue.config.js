module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/battlecat-normal-event-generator/'
    : '/',
  productionSourceMap: false,
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = '貓咪時程提醒表'
      return args
    })
  }
}