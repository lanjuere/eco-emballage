const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  resolve: {
    root: path.src,
    extensions: ['', '.ts', '.js'],
    alias: {
      materializecss: 'materialize-css/dist/css/materialize.css',
      materialize: 'materialize-css/dist/js/materialize.js'
    }
  },
  module: {
    loaders: [
      {
        test: /.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css',
          'postcss'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate'
        ]
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass!resolve-url!sass?sourceMap'
      },
      {
        test: /.less$/,
        loaders:[
          'style-loader!resolve-url!css-loader!less-loader'
        ]
      },
      {
        test: /.html$/,
        loaders: [
          'html'
        ]
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader:"url?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { // Materialize
        test: /materialize-css\/dist\/js\/materialize\.js/,
        loader: 'imports?materializecss'
      },
      { // Materialize CSS only
        test: /materialize\.css$/,
        loader: 'style!css'
      },
      { // component stylesheets
        test:  /^((?!materialize).)*\.css$/,
        loader: 'raw'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html'),
      inject: true
    }),
     new webpack.ProvidePlugin({
       // for Materialize
       $: "jquery",
       jQuery: "jquery",
       "window.jQuery": "jquery",
       Hammer: "hammerjs/hammer"
     })
  ],
  postcss: () => [autoprefixer],
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.join(process.cwd(), conf.paths.tmp),
    filename: 'index.js'
  },
  entry: [
    `./${conf.path.src('index')}`
  ]
};
