var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack           = require('webpack'),
    autoprefixer      = require('autoprefixer'),
    precss            = require('precss');

module.exports = {
    entry: './scripts/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader'])
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader'])
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    jshint: {
        esversion: 6
    },
    postcss: function() {
        return [autoprefixer({browsers: ['last 2 versions']})];
    },
    plugins: [
        new ExtractTextPlugin('./styles/bundle.css'),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        })
    ],
    resolve: {
        extensions: ['', '.js']
    }
}
