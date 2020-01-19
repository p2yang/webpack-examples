const webpack = require('webpack')

module.exports = {
  entry: {
    app: './app.js'
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./vendor_manifest.json')
    })
  ]
}
