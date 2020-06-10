const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
var dotenv = require('dotenv').config({path: __dirname + '/.env'});
var webpack = require('webpack');

module.exports = {
   context: __dirname,
   entry: './src/index.js',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'bundle.js',
      publicPath: '/',
   },
   devServer: {
      historyApiFallback: true
   },
   optimization: {
      runtimeChunk: 'single',
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader',
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         }
]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html'
      }),
      new webpack.DefinePlugin({
         "process.env": JSON.stringify(dotenv.parsed)
     }),
   ]
};