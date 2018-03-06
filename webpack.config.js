const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: false
});

module.exports = {
    entry: ['babel-polyfill', 'react-hot-loader/patch', './client/main.jsx'],
    output: {
        path: path.resolve('./docs'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.png', '.jpg', '.svg']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            includePaths: ['client/assets/scss/']
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file',
                include: path.resolve('./docs/img')
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};
