var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var entries = process.env.NODE_ENV === "production" ? [ './entry.js'] : [
    'webpack-dev-server/client?http://localhost:8080',
    './entry.js'
]

var plugins = process.env.NODE_ENV === "production" ?
[
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
  })
]
:[
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin()
]


module.exports = {
    resolve: {
        modulesDirectories: ["node_modules", "bower_components", "."],
        extensions: ["", ".js", ".min.js", ".scss"]
    },
    entry: {
        app: entries
    },
    devtool: "source-map",
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: ".",
        inline: true,
        watch: true,
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("css-loader?sourceMap!sass-loader?sourceMap&sourceMapContents")
            },
            {
                test: /\.(ttf|eot|woff|svg|jpe?g|gif|png)[\?]?.*$/,
                loader: 'url',
                query: {
                    name: '[name][hash].[ext]',
                    limit: 10000
                }
            },
            {
                test: /\.js$/,
                loader: "babel",
                exclude: [
                    /node_modules/,
                    /libs/,
                    /vendor/,
                    /bower_components/,
                ]
            },
            {
                test: /\.css$/,
                loader: "style!css?sourceMap",
                exclude: [
                    /node_modules/,
                    /libs/,
                    /vendor/
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css?[hash]")
    ].concat(plugins)
};
