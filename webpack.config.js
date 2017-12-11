const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js',
    vendor: './src/vendor.js'
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "static/js/[name].js"
  },

  module: {
    rules: [
      {
        // scoped scss
        test: /\.scss$/,
        include: path.resolve(__dirname, './src/assets/scss/scoped'),
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./static/css/[name].css"
            }
          },
          {
            loader: "sass-loader",
            options: {
              outputStyle: 'compressed'
            }
          }
        ]
      },
      {
        // global scss including node modules
        test: /\.scss$/,
        exclude: path.resolve(__dirname, './src/assets/scss/scoped'),
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
      },
      {
        // scoped javascript
        test: /\.js$/,
        include: path.resolve(__dirname, './src/assets/js/scoped'),
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./static/js/[name].js"
            }
          },
          {
            loader: "babel-loader"
          }
        ]
      },
      // global javascript
      { 
        test: /\.js$/,
        exclude: [
          /node_modules/,
          path.resolve(__dirname, './src/assets/js/scoped'),
        ],
        use: "babel-loader"
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new CleanWebpackPlugin(['dist']),
    
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
       },
       { 
        from: path.resolve(__dirname, "./LICENSE"),
        to: ''
       }
    ]),

    new ExtractTextPlugin('./static/css/[name].css'),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })

  ]
}