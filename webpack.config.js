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
			"TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
			"TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
			"TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
			"TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
			"ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
			"animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
			"debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
		}
	},

};
