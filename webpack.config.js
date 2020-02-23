const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {'main': './main/main.js', 'symbol': './symbol/Symbol.js'},
	output: {
		path: path.resolve(__dirname),
		filename: '[name]/dist/bundle.js',
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: {presets: ['@babel/env']},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			
		],
	},
	resolve: {extensions: ['*', '.js', '.jsx']},
	devServer: {
		contentBase: path.join(__dirname, 'symbol/public'),
		port: 3000,
		publicPath: 'http://localhost:3000/symbol/dist/',
		//hotOnly: true,
		open: true,
		historyApiFallback: true,
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
};
console.log("out = " + module.exports.output.path)
