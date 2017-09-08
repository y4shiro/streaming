const path = require('path');

module.exports = {

  entry: {
    js: "./src/js/entry.js"
  },

  output: {
    path: path.join(__dirname, '/dist'),
    filename: "./js/bundle.js"
  },

  module: {
    rules : [
      {
        test: /\.css/,
        exclude: /node_modules/,
        loaders: [
          'style-loader', 
          {
            loader: 'css-loader',
              options: {url: false}
          }
        ]
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
