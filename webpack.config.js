var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var SRC = path.resolve(__dirname, 'src');
var BUILD = path.resolve(__dirname, 'build');

var config = {
  entry: SRC + '/index.jsx',
  output: {
    path: BUILD,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-3', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:8]'
            }
          }
        })
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
      // {
      //   test: /\.(svg|woff2?|ttf|eot)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: './fonts/[name].[ext]'
      //     },
      //   },
      // }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ],
  devServer: {
    contentBase: BUILD,
    compress: true,
    port: 3000,
    watchContentBase: true,
    historyApiFallback: true
  }
};

module.exports = config;
