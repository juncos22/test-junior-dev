const path = require('path');
const defaultConfig = require("./node_modules/@wordpress/scripts/config/webpack.config");
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const globImporter = require('node-sass-glob-importer');
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

const config = {
	...defaultConfig,
	plugins: [
		/**
		 * Remove previous instance
		 */
		...defaultConfig.plugins.filter((plugin) => plugin.constructor.name !== 'DependencyExtractionWebpackPlugin'),
		new DependencyExtractionWebpackPlugin({
			requestToExternal: (request, external) => {
				const externals = {
					'customize-controls': ['wp', 'customize'],
					'customize-preview': ['wp', 'customize'],
					'ct-events': ['window', 'ctEvents'],
					'ct-options': ['window', 'blocksyOptions'],
				}

				return externals[request] || external;
			}
		}),
	],
};

module.exports = [
	//Customize
	{
		...config,
		entry: {
			'index': path.resolve(__dirname, 'src', './customize/controls/index.js'),
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, '../build/customize/controls/js/'),
		},
		optimization: {
			minimize: isProduction,
		},
	},
	{
		...config,
		entry: {
			'index': path.resolve(__dirname, 'src', './customize/preview/index.js'),
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, '../build/customize/preview/js/'),
		},
		optimization: {
			minimize: isProduction,
		},
	},
	//Gutenberg
	{
		...config,
		entry: {
			'index': path.resolve(__dirname, 'src', './gutenberg/blocks/index.js'),
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, '../build/gutenberg/blocks/js/'),
		},
		optimization: {
			minimize: isProduction,
		},
	},
	{
		...config,
		entry: {
			'index': path.resolve(__dirname, 'src', './gutenberg/editor/index.js'),
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, '../build/gutenberg/editor/js/'),
		},
		optimization: {
			minimize: isProduction,
		},
	},
	{
		...config,
		entry: {
			'index': path.resolve(__dirname, 'src', './gutenberg/globals/index.js'),
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, '../build/gutenberg/globals/js/'),
		},
		optimization: {
			minimize: isProduction,
		},
	},
	{
		...config,
		entry: {
			'index': path.resolve(__dirname, 'src', './gutenberg/blocks/style.scss'),
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, '../build/gutenberg/blocks/css/'),
		},
		module: {
			...config.module,
			rules: [
				{
					test: /\.scss$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader'
						},
						{
							loader: 'sass-loader',
							options: {
								sassOptions: {
									importer: globImporter()
								}
							}
						}
					]
				}
			]
		},
		plugins: [
			new RemoveEmptyScriptsPlugin(),
			new MiniCssExtractPlugin({
				filename: 'style.css'
			}),
		]
	},
	{
		...config,
		entry: {
			'index': path.resolve(__dirname, 'src', './gutenberg/blocks/editor.scss'),
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, '../build/gutenberg/blocks/css/'),
		},
		module: {
			...config.module,
			rules: [
				{
					test: /\.scss$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader'
						},
						{
							loader: 'sass-loader',
							options: {
								sassOptions: {
									importer: globImporter()
								}
							}
						}
					]
				}
			]
		},
		plugins: [
			new RemoveEmptyScriptsPlugin(),
			new MiniCssExtractPlugin({
				filename: 'editor.css'
			}),
		]
	},
] 