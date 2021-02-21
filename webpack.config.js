const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jpeg'],
    alias: {
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Images': path.resolve(__dirname, 'src/assets/images'),
      '@Helpers': path.resolve(__dirname, 'src/helpers'),
      '@Mockdata': path.resolve(__dirname, 'src/mockdata'),

    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
  ],
  mode: 'development',
  devServer: {
    historyApiFallback: true,
  },
};
