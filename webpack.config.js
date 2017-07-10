var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
    home: './js/home',
    work: './js/work',
    projects: './js/projects',
    leadership: './js/leadership',
    press: './js/press',
    index: './js/index',
    vendors: ['react']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "[name].min.js",
    chunkFilename: '[id].chunk.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],
};