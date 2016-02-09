  var path = require('path');
  var webpack = require('webpack');


  module.exports = {
  context: path.join(__dirname, '.'),
  entry: {
    app: "./app/App.js"
  },
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
    module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}