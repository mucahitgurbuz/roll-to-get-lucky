const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = (env, argv) => {
  const config = {
    entry: './src/index.tsx',
    devtool: 'source-map',
    output: {
      path: path.join(__dirname, '/build'),
      filename: '[name].[hash].js',
      publicPath: '/',
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    resolve: {
      mainFields: ['main', 'module'],
      extensions: ['.mjs', '.js', '.json', '.ts', '.tsx', '.css'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)([\?]?.*)$/,
          loader: 'awesome-typescript-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },

        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
      ],
    },
    node: {
      fs: 'empty',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
      }),
      new CopyPlugin([
        {
          from: 'public',
        },
      ]),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      hot: true,
      open: true,
      inline: true,
      host: '0.0.0.0',
      port: 3000,
      progress: true,
      publicPath: '/',
    },
  }

  if (argv.mode === 'development') {
    config.output.filename = 'bundle.min.js'
  }

  return config
}
