require('dotenv').config();
const path = require('path');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const db = require('./server/db/models/');
const schema = require('./server/schemas/');

const PORT = 8080;
const app = express();

// hot module reload with webpack middleware
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
}));
app.use(webpackHotMiddleware(compiler));

// graphQL http server
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  pretty: true,
}));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

// handle client side routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  });
});
