module.exports = {
  publicPath: 'https://flipbook.azurewebsites.net',
  css: {
    extract: false
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('url-loader')
        .loader('url-loader')
        .end()
      .use('svgo-loader')
        .loader('svgo-loader')
        .options({ plugins: [ { removeViewBox: false } ] })
        .end()
  }
}
