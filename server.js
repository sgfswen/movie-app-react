'use strict';

const
  path = require('path'),
  express = require('express'),
  webpack = require('webpack');

const
  webpackDevMiddleware = require('webpack-dev-middleware'),
  webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./webpack.config.js');

const
  app = express(),
  compiler = webpack(config),
  join = path.join;

app.use(express.static(join(__dirname, './dist')));

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true,
    progress: true
  }
}));
app.use(webpackHotMiddleware(compiler));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(8080, function () {
  console.log('Listening on port 8080!');
});