const precss = require('precss');
const autoprefixer = require('autoprefixer');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './static-assets', to: '' }
      ]
    }) 
  ],  

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
  },

  entry: {
    "inspection-page": './pages/inspection-page.tsx',        
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name]-bundle.js',
    publicPath: '/'
  },

  watchOptions: {
    ignored: /node_modules/,
    poll: 1000
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      {        
        test: /\.(ts|js)x?$/, // Include ts, tsx, js, and jsx files.
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () =>
                [precss, autoprefixer]
            }
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      }
    ]
  }
};