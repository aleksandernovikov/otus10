var path = require('path');
// var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

let conf = {
    context: __dirname,
    entry: './src/main',

    output: {
        path: path.resolve('../static/'),
        filename: "[name]-[hash].js",
        publicPath: 'static/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [
                            "@babel/plugin-transform-react-jsx",
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

        ]
    },

    resolve: {
        extensions: ['.js']
    },

    devtool: 'inline-source-map',

    plugins: [
        new BundleTracker({
            filename: '../webpack-stats.json'
        })
    ]
};

module.exports = conf;