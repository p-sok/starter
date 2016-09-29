var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack           = require('webpack'),
    autoprefixer      = require('autoprefixer'),
    precss            = require('precss'),
    isProduction      = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './scripts/index.js',
    output: {
        path: 'dist/',
        filename: 'bundle.js'
    },
    watch: isProduction,
    devServer: {
        inline: true
    },
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
            },
            {
              test: /\.(eot|svg|ttf|woff|woff2)$/,
              loader: 'file?name=dist/fonts/[name].[ext]'
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file?name=dist/images/[name].[ext]'
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
        new ExtractTextPlugin('bundle.css'),
        new webpack.optimize.UglifyJsPlugin({
            minimize: isProduction,
            compress: {
                warnings: false
            }
        })
    ],
    resolve: {
        extensions: ['', '.js']
    }
}
