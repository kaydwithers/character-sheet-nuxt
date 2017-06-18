module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Dungeons & Dragons — 5E Character Sheet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', href: './assets/fonts/Plain-Light.woff', as: 'font', type: 'font/woff', crossorigin: '' },
      { rel: 'preload', href: './assets/fonts/Plain-Thin.woff', as: 'font', type: 'font/woff', crossorigin: '' },
      { rel: 'preload', href: './assets/fonts/Plain-Bold.woff', as: 'font', type: 'font/woff', crossorigin: '' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [ 'tachyons/css/tachyons.css' ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
