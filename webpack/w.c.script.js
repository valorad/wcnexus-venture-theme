const { resolve } = require("path");
const webpack = require('webpack');

require("babel-polyfill");
 
let pages = ['base', 'single']; // ts file names
let entry = {};

for (let page of pages) {
  entry[page] = [resolve(`./src/assets/ts/${page}.ts`)]
}

entry['base'].unshift('babel-polyfill'); // The global script loads babel-polyfill as well

let config = {

  mode: 'production',

  entry: entry,

  resolve: {
    extensions: ['.ts', '.js']
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /(\.ts)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: "tsconfig.json"
            }
          }
        ]
      }
    ]
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
  


};


module.exports = config;