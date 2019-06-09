const path = require("path");

module.exports = {
	output: {
		filename: "[name].js"
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: require.resolve("babel-loader"),
					query: {
						presets: [
							["@babel/preset-env", { modules: false }]
						]
					}
				}
			}
		]
	},
	resolve: {
		alias: {
			"%blocks%": path.resolve(__dirname, "src/blocks"),
			$: path.resolve('node_modules', 'jquery/dist/jquery.min.js'),
			jQuery: path.resolve('node_modules', 'jquery/dist/jquery.min.js'),
			"window.jQuery":  path.resolve('node_modules', 'jquery/dist/jquery.min.js'),
		}
	},

};
