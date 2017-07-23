const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')
const morgan = require('morgan')
const express = require('express')

let port = 3003
let compiler = webpack(config)
let app = new (express)()
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: '/' }))
app.use(webpackHotMiddleware(compiler))
app.use(morgan('dev'))

app.use(express.static('./public'))

app.listen(port, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})
