const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');


// Webpack 5 最简配置
module.exports = {
  // 入口文件（打包的起点）
  entry: './src/index.js',
  
  // 输出配置（打包后的文件）
  output: {
    filename: 'bundle.js', // 输出的文件名
    path: path.resolve(__dirname, 'dist'), // 输出目录
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // 指定你的HTML模板文件
    })
  ]
};