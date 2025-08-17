const path = require('path')

/**
 * export an object using the node module system,
 * we use that system because webpack is gonna be read
 * by node.js. 
 * 
*/
module.exports = {
	/**
	 * define inside that object how webpack is gonna work with our project
	 * define all the work-flow needed by webpack into that object ).
	 */
	
	// 1. specify entry and output file.
	/**
	 * relative path entry, define our entry file which is also the entry of the dependency tree.
	 * So that way we can import other dependencies in our entry file and they can be also compiled.
	 */
	mode: 'development', // or 'production' for production mode
	entry: './src/index.jsx',
	module: {
		rules: [
			// first object rule, compile tsx and ts to js
			{
				// regular expression used for test.
				// $ means ends with 'tsx' or 'ts' in our case.
				// original meaning for ., it can be any character so '\' is escaping this meaning.
				test: /\.(tsx)?$/, // test files when compiled, if passed, move into next property.
				use: 'ts-loader', // use the ts-loader on the passed-test file.
				include: [path.resolve(__dirname, 'src')] // where the src files are living.
			},
			// ✅ CRITICAL: You also need a rule for JavaScript files!
			{
				test: /\.(js|jsx)$/, // Matches .js and .jsx
				use: 'babel-loader',
				include: [path.resolve(__dirname, 'src')],
			},
			{
			test: /\.(png|jpe?g|gif)$/i,
			use: [
				{
				loader: 'file-loader',
				},
			],
			}
		]
	},
	// this would resolve the imports in our entry file.
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.png'] // Allow imports without file extensions
	},
	output: {
		// publicPath is the path where the output files are served from.
		// need to bundle again in dev mode to see the changes.
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public') // this is an absolute path for the output file
	},
	devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    historyApiFallback: true,
    compress: true,
    port: 9000, // You can choose any port
    open: true, // Open the browser automatically
  },
}
