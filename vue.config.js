module.exports = {
  devServer: {
    host: 'http://localhost:8080',
    proxy: 'http://localhost:8000'
  },
  "transpileDependencies": [
    "vuetify"
  ]
}