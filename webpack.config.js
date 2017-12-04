const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "static/js/bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader'
              }
            ]
          }
        )
      }
    ]
  },

  plugins: [
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery'
    // }),
    new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: "src/layouts/index.html"
    //   // chunks: [] // to tell what bundles to inject.
    //   // name configured at entry point using a javascript object {}
    // }),
    // new HtmlWebpackPlugin({
    //   filename: '404.html',
    //   template: "src/layouts/404.html"
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'list.html',
    //   template: "src/layouts/_default/list.html"
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'single.html',
    //   template: "src/layouts/_default/single.html"
    // }),
    
    new CopyWebpackPlugin([
      { 
        from: path.resolve(__dirname, "./src/archetypes"),
        to: 'archetypes',
        ignore: [".gitkeep"]
       },
       { 
        from: path.resolve(__dirname, "./src/layouts"),
        to: 'layouts',
        ignore: [".gitkeep"]
       },
       { 
        from: path.resolve(__dirname, "./src/static"),
        to: 'static',
        ignore: [".gitkeep"]
       },
       { 
        from: path.resolve(__dirname, "./src/theme.toml"),
        to: ''
       }
    ]),

    new ExtractTextPlugin('./static/css/[name].css'),

    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     warnings: false
    //   }
    // })

    
  ]




}