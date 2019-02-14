const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/},
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]'
            }
          }
        ]
      }
    ],

  },
  devtool: 'source-map-loader',
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  }
};
