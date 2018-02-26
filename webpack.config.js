var webpack = require('webpack');
var path = require('path');

var SRC = path.resolve(__dirname, 'src');
var BUILD = path.resolve(__dirname, 'build');

var config = {
  entry: [
    SRC + '/App.js',
    SRC + '/index.js'
  ],
  output: {
    path: BUILD,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  }
};

module.exports = config;
