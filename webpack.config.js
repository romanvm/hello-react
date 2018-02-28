var webpack = require('webpack');
var path = require('path');
// var BundleTracker = require('webpack-bundle-tracker');

var SRC = path.resolve(__dirname, 'src');
var BUILD = path.resolve(__dirname, 'build');

var config = {
  entry: [
    SRC + '/App.jsx',
    SRC + '/index.jsx'
  ],
  output: {
    path: BUILD,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:8]'
            }
          }
        ]
      },
      {
        test: /\.(gif|jpg|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: './img/[name].[hash:8].[ext]'
          },
        },
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
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    // new BundleTracker({
    //   filename: './webpack-stats.json',
    //   indent: 2
    // })
  ],
  devServer: {
    contentBase: BUILD,
    compress: true,
    port: 3000,
    watchContentBase: true
  }
};

module.exports = config;
