const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: ['webpack-hot-middleware/client', './public/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  resolve: {
    mainFields: ['browser', 'esnext', 'main']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|web_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }]
      }, {
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true,
            localIdentName: '[name]__[local]__[hash:base64:5]'
          }
        }]
      }, {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
