const
  path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = path.resolve;

module.exports = {
  entry: {
    main: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './main.js'
    ],
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'react-hot-loader'
    ]
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  context: resolve(__dirname, 'src'),
  devtool: 'eval-source-map',
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
    hot: true
  },
  module: {
    rules: [
      { test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};