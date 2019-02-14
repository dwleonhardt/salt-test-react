
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('../../webpack.dev.config.js')
  const compiler = webpack(config)
  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
}
app.use(express.static(__dirname +'./../../dist'));

app.get('/*', function(req: Request, res: any) {
  res.sendFile(path.join(__dirname, './../../dist/index.html'), function(err: Error) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
app.listen(port);