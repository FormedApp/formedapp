var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); 

var HTMLWebpackPlugin = new HtmlWebpackPlugin({
  template:   './app/index.html',
  hash: true,
  filename: 'index.html',
  inject: 'body',
});
var HotReloader = new webpack.HotModuleReplacementPlugin();

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/App.js'
  ],
  output: {
    "publicPath": "/",
    path: 'dist',
    filename: 'index_bundle.js',
  },
  devServer: {
    port: 3000
  },
  module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }
		]
	},
  plugins: [HTMLWebpackPlugin, HotReloader, new ExtractTextPlugin('[name].css')]
};
