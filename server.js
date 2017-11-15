require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const graphqlHTTP = require('express-graphql');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const db = require('./server/db/models/');
const schema = require('./server/schemas/');

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// request body cookie parser
app.use(cookieParser());

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

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve('./dist/index.html'));
// });

// handle client side routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

db.sequelize.sync({}).then(() => {
  console.info('INFO - Database sync complete.');
  console.info('SETUP - Starting server...');
  app.listen(port, (error) => {
    if (error) {
      console.error('ERROR - Unable to start server');
    } else {
      console.info(`INFO - Server started on port ${port}`);
    }
  });
})
  .catch(() => {
    console.error('ERROR - Unable to sync database.');
    console.error('ERROR - Server not started.');
  });
