const baseConfig = require("./webpack.config.base");
const { merge } = require("webpack-merge");
const webpack = require("webpack");

//	System Enviroment Variable
const DOMAIN_API = JSON.stringify("http://localhost:4000");

const config = merge(baseConfig, {
	mode: "development",
	devServer: {
		contentBase: "dist",
		open: true,
		//  https://qiita.com/shoota/items/b5aeb5d3e54a971ad67b
		historyApiFallback: true,
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				DOMAIN_API,
			},
		}),
	],
});

module.exports = config;
