const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// console.log('lllllll', path.resolve(__dirname, 'src/components/stories'))
const config = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {
    contentBase: __dirname + '/dist',
    port: 3008,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?css/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      // {
      //   test: /\.s?ass$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       // options: {
      //       //   // you can specify a publicPath here
      //       //   // by default it uses publicPath in webpackOptions.output
      //       //   // publicPath: '../',
      //       //   // hmr: process.env.NODE_ENV === 'development',
      //       // },
      //     },
      //     'css-loader',
      //     'sass-loader'
      //   ],
      // },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        exclude: [
          path.resolve(__dirname, 'src/components/stories'),
          /node_modules/
        ]
      }
    ]
  },
  resolve: {
      alias: {
        testAlias: path.resolve(__dirname, 'src/testAlias')
      }
  }
}
console.log('config :' , config)

module.exports = config