var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack           = require('webpack'),
    autoprefixer      = require('autoprefixer'),
    precss            = require('precss'),
    isProduction      = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './scripts/app.js',
    output: {
        path: __dirname + '/dist',
        filename: isProduction ? 'bundle.min.js' : 'bundle.js'
    },
    watch: !isProduction,
    devServer: {
        inline: true,
        hot: true,
        port: 8080,
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                exclude: /node_modules/,
                use:[
                    'jshint-loader',
                    { loader: "jshint-loader", options: { camelcase: true, emitErrors: false, failOnHint: false } }
                ]
            }
        ],
        rules: [
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader'],
                    publicPath: '/dist'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader'],
                    publicPath: '/dist'
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: 'file?name=dist/fonts/[name].[ext]'
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: 'file?name=dist/images/[name].[ext]'
            }
        ]
    },
    plugins: isProduction ? [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            options: {
                postcss: [ autoprefixer ]
            }
        }),
        new ExtractTextPlugin({
            filename: 'bundle.min.css',
            disable: false,
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
              warnings: false,
              drop_console: false,
            }
        }),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 15
        }),
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 10000
        })
    ] : [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.js', '.scss', '.vue'],
        alias: {vue: 'vue/dist/vue.js'}
    }
}
