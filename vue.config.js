const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
	publicPath: process.env.NODE_ENV === "production" ?
		"/production-sub-path/" : "/",
	outputDir: "dist",
	assetsDir: "/static",
	indexPath: "index.html",
	lintOnSave: process.env.NODE_ENV !== "production",
	devServer: {
		overlay: {
			warnings: false,
			errors: true
		}
	},
	runtimeCompiler: process.env.NODE_ENV !== "production",
	transpileDependencies: [],
	productionSourceMap: process.env.NODE_ENV !== "production",
	crossorigin: undefined,
	integrity: false,
	configureWebpack: {
		optimization: {
			minimizer: [
				new UglifyJsPlugin({
					uglifyOptions: {
						compress: {
							warnings: false,
							drop_console: true, //console
							drop_debugger: false,
							pure_funcs: ["console.log", "console.dir"] //移除console
						}
					}
				})
			]
		}
	},
	// devServer: {
	// 	port: 8085,
	// },
	css: {
		modules: false,
		extract: process.env.NODE_ENV === "production",
		sourceMap: false,
		loaderOptions: {}
	},

	parallel: require("os").cpus().length > 1,
	// pwa: {},
}
//  configureWebpack: {
//  	plugins: [
//  		new MyAwesomeWebpackPlugin()
//  	]
//  },
//  configureWebpack: config => {
//  	if (process.env.NODE_ENV === "production") {
//  		// 为生产环境修改配置...
//  	} else {
//  		// 为开发环境修改配置...
//  	}
//  },