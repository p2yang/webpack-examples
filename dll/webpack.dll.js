const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    vendor: [
      'vue',
      'vue-router',
      'vuex'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'static/lib'),
    filename: '[name].dll.js'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.join(__dirname, '.', '[name]_manifest.json')
    })
  ]
}
