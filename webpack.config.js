const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: false
});

const getPath = p => path.resolve(path.join(__dirname, p));

module.exports = {
    entry: ['babel-polyfill', 'react-hot-loader/patch', './client/main.jsx'],
    output: {
        path: path.resolve('./docs'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.png', '.jpg', '.svg'],
        alias: {
            '#Components': getPath('client/components'),
            '#Assets': getPath('client/assets')
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }]
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
