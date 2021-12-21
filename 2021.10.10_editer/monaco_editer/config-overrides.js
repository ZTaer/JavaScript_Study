require('dotenv');
const { aliasJest, configPaths, alias } = require('react-app-rewire-alias');
// eslint-disable-next-line
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const aliasMap = configPaths('./tsconfig.base.json');

module.exports = function override(config, env) {
	const webpackConfig = alias(aliasMap)(config, env);
	webpackConfig.output.publicPath = process.env.PUBLIC_URL;

	// 兼容monaco
	// webpackConfig.plugins.push(
	// 	new CopyWebpackPlugin([
	// 		{ from: 'node_modules/monaco-editor/min/vs/', to: 'vs' },
	// 		// { from: "node_modules/monaco-editor/min-maps/vs/", to: "min-maps/vs" } // source-maps
	// 	])
	// );

	return webpackConfig;
};

module.exports.jest = aliasJest(aliasMap);
