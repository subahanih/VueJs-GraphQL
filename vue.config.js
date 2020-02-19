module.exports = {
  pluginOptions: {
    apollo: {
      enableMocks: false,
      enableEngine: false
    }
  },
  devServer: {
    proxy: 'http://localhost:4000/graphql',
  }
}
