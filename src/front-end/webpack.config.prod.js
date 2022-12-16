const precss = require('precss');
const autoprefixer = require('autoprefixer');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: false,
 
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
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader' // inject CSS to page
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS modules
          },
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: () =>
                // post css plugins, can be exported to postcss.config.js
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
