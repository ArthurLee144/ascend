const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

app.listen(3000, () => {
  console.log('Ascend app is listening on port 3000');
});
