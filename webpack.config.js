const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// webpack 中所配置訊息都應該寫在 module.exports 中
module.exports = {
  // 指定入口文件
  entry: './src/index.ts',
  // 指定打包文件所袃目錄
  output: {
    // 指定打包文件的目錄
    path: path.resolve(__dirname, 'dist'),
    // 打包後的文件名
    filename: 'bundle.js',
  },

  // 指定 webpack 打包時的模組
  module: {
    // 指定加在規則
    rules: [
      {
        // test 指定規則生效的文件
        test: /\.ts$/,
        // 要使用的 loader
        use: [
          // 設定 babel
          {
            // 指定加載器
            loader: 'babel-loader',
            // 設定 babel
            options: {
              // 設定預定義的環境
              presets: [
                [
                  // 指定環境的套件
                  '@babel/preset-env',
                  // 配置訊息
                  {
                    // 要兼容目標的瀏覽器
                    targets: {
                      chrome: '88',
                    },
                    // 指定 corejs 的版本
                    corejs: '3',
                    // 使用 corejs 的方法， "usage" 表示按需加載
                    useBuiltIns: 'usage',
                  },
                ],
              ],
            },
          },
          'ts-loader',
        ],
        // 要排除的文件
        exclude: /node-modules/,
      },

      // 設置 less 文件的處理
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 引入 postcss
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browsers: 'last 2 versions',
                    },
                  ],
                ],
              },
            },
          },
          'less-loader',
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title: '貪吃蛇',
      template: './src/index.html',
    }),
  ],

  // 用來設置引用模組
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
