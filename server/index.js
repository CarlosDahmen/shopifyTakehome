const express = require('express');
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const path = require('path')
const volleyball = require('volleyball')

const app = express();
const config = require('../webpack.config.js')
const compiler = webpack(config)

const port = 3000;

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
)

app.use(volleyball.custom( true ))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', require('./api'));
app.use(express.static(path.resolve(__dirname, '..', 'dist')))
app.use(express.static(path.resolve(__dirname, '..','dist', 'public')))

app.use('/', (req, res, next) => res.sendFile(path.join(__dirname, '../public/index.html')) )

// app.listen(port, () => {
//   (`App listening on port ${port}`)
// });

module.exports = app;
