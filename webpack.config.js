const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const srcDirectory = path.resolve(__dirname, 'src');
const imgDirectory = path.resolve(srcDirectory, 'img');
const distDirectory = path.resolve(__dirname, 'dist');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.[hash].js",
        path: distDirectory,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
            ignoreOrder: true,
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new CopyPlugin({
            patterns: [
                { from: imgDirectory, to: distDirectory },
            ],
        }),
    ],
    resolve: {
        modules: [__dirname, "node_modules"],
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                loader: require.resolve("babel-loader"),
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: [srcDirectory],
                            },
                        },
                    }
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 10000000,
                        name: '[path][name].[ext]',
                        context: srcDirectory,
                        outputPath: distDirectory,
                    }
                }],

            },
        ],
    },
    mode: 'development',
    devServer: {
        hot: true,
        open: true,
        port: 8080,
        // host: 'front-test.beta.aviasales.ru',
        historyApiFallback: true,
        proxy: {
            "/search": "https://front-test.beta.aviasales.ru/search",
            "/tickets": "https://front-test.beta.aviasales.ru/tickets",
        },
        client: {
            progress: true,
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
};
