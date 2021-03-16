module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  runtimeCompiler: true,
  chainWebpack: (config) => {
    // Disable prefetching and preloading
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  }
}
