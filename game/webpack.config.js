const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    // 指定入口文件
    entry: './src/index.ts',
    // 指定打包文件所在目录
    output: {
        // 指定打包文件目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件的文件
        filename: 'bundle.js',
        // 配置打包环境
        environment: {
            // 不使用箭头函数
            arrowFunction: false,
            // 不使用 const 命名
            const: false
        }
    },
    // 指定 webpack 打包时使用的模块
    module: {
        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,
                // loader(加载顺序是从后往前) => 先使用 ts-loader 转换成为 JS, 然后将 JS 通过 babel 进行适配
                use: [
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        // 设置 babel
                        options: {
                            // 设置预定义环境
                            presets: [[
                                '@babel/preset-env',// 指定环境的插件
                                // 配置信息
                                {
                                    // 兼容性环境
                                    targets: {
                                        'chrome': '88'
                                    },
                                    // 指定 corejs 的版本
                                    'corejs': '3',
                                    // 使用 corejs 方式 'usage' 表示 按需进行加载
                                    'useBuiltIns': 'usage'
                                }
                            ]]
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node-modules/
            },
            // 指定 less 文件处理
            {
                test: /\.less$/,
                // 指定顺序从下到上(less处理完=>css处理完=>style处理)
                use: [
                    "style-loader",
                    "css-loader",
                    // postcss
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [[
                                    "postcss-preset-env",
                                    {
                                        // 兼容所有浏览器最新的两个版本
                                        browsers: 'last 2 versions'
                                    }
                                ]]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    // 配置 webpack 插件
    plugins: [
        // 监视文件修改
        new HtmlWebpackPlugin({
            title: '贪吃蛇',
            // 自定义模板
            template: "./src/index.html"
        }),
        // 编译后清空文件
        new CleanWebpackPlugin()
    ],
    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    },
    mode: 'development'
}
