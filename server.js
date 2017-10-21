const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const graphqlHTTP = require('express-graphql');
const schema = require('./server/schema.js');

const app = express();

//hot module reload with webpack middleware
var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}));
app.use(webpackHotMiddleware(compiler));

//graphQL http server
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
