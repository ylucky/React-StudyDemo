// const path = require('path')
module.exports = {
  entry: './src/main.js', // 入口
  output: {
    path: __dirname + '/build', // 打包的文件路径
    filename: 'bundle.js'// 打包的文件名
  },
  devServer: {
    inline: true,
    port: 4444
  },
  module: {
    rules: [{ // 打包规则
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'react', 'stage-2']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  }
}
