const path = require('path');

module.exports = {
  entry: './client/index.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
