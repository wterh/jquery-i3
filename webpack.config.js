const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// Получаем массив файлов CSS
const cssFiles = glob.sync('./src/css/*.css');

// Получаем массив файлов JS
const jsFiles = glob.sync('./src/js/*.js');

module.exports = [
    // Сборка несжатого варианта
    {
        mode: 'development',
        entry: {
            // Создаем объект, где ключи - это названия бандлов,
            // а значения - это массивы файлов, которые нужно подключить
            main: jsFiles,
            style: cssFiles
        },
        output: {
            filename: 'jquery.i3.[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx','.css'],
            preferRelative: true,
            modules: [
                'node_modules'
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'jquery.i3.[name].bundle.css'
            })
        ]
    },
    // Сборка сжатого варианта
    {
        mode: 'production',
        entry: {
            // Создаем объект, где ключи - это названия бандлов,
            // а значения - это массивы файлов, которые нужно подключить
            main: jsFiles,
            style: cssFiles
        },
        output: {
            filename: 'jquery.i3.[name].bundle.min.js',
            path: path.resolve(__dirname, 'dist')
        },
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()]
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx','.css'],
            preferRelative: true,
            modules: [
                'node_modules'
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'jquery.i3.[name].bundle.css'
            })
        ]
    }
];
