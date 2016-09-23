const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('../package.json');
const autoprefixer = require('autoprefixer');
const nodeExternals = require('webpack-node-externals');
const dependencies = Object.keys(pkg.dependencies).slice();


module.exports = [
  {
    name: conf.name+'-vendor',
    entry: dependencies,
    output: {
        path: path.join(process.cwd(), conf.paths.dist),
        filename: conf.name+'-vendor.js'
    },
    loaders:[
      {
        test: /.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: 'css?minimize!!postcss'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate', 'babel'
        ]
      },
      {
        test: /.html$/,
        loaders: [
          'html'
        ]
      }
      // { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader:"url?limit=10000&mimetype=application/font-woff" },
      // { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ],
    plugins: [
    new HtmlWebpackPlugin({
      title: 'vendor',
      template: conf.path.src('index.html'),
      inject: true,
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        jQuery: 'jquery'
    })
    ]
  },
  {
      name: conf.name,
      externals: [nodeExternals()],
      dependencies: [conf.name+'-vendor'],
      entry: {
          declaration:`./${conf.path.src('index')}`,
      },
      output: {
          path:  path.join(process.cwd(), conf.paths.dist),
          filename: "[name].js"
      },
      module : {
      loaders:[
        {
          test: /.json$/,
          loaders: [
            'json'
          ]
        },
        {
          test: /\.css$/,
          loaders: ExtractTextPlugin.extract({
            fallbackLoader: 'style',
            loader: 'css?minimize!!postcss'
          })
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: [
            'ng-annotate', 'babel'
          ]
        },
        {
          test: /.html$/,
          loaders: [
            'html'
          ]
        },
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader:"url?limit=10000&mimetype=application/font-woff" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
      ]
      },
      plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin(conf.name+'.css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
              compress: {unused: true, dead_code: true} // eslint-disable-line camelcase
        }),
        new HtmlWebpackPlugin({
          title: 'declaration',
          template: conf.path.src('index.html'),
          inject: true,
        })
      ]
    }
];
