require('dotenv').config();
import path from 'path';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import graphqlHttp from 'express-graphql';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';
import db from './server/db/models/';
import schema from './server/schema/';

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
app.use('/graphql', graphqlHttp({
  schema,
  graphiql: true,
  pretty: true,
}));

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
