var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: './scripts/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./styles/main.css')
    ],
    resolve: {
        extensions: ['', '.js']
    }
}
