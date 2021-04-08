const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
            options: { transpileOnly: true } //  ビルドの高速化
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: {} },
          "css-loader"
        ]
      },
      { test: /\.png$/, loader: "url-loader" }
    ]
  },

  /**
   * @field resolve
   * @description
   * import する際の拡張子指定の省略化
   * エイリアスの指定
   */
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "~src": path.resolve(__dirname, "../src"),
      "~api": path.resolve(__dirname, "../src/api"),
      "~assets": path.resolve(__dirname, "../src/assets"),
      "~redux": path.resolve(__dirname, "../src/redux"),
      "~@types": path.resolve(__dirname, "../src/@types"),
      "~views": path.resolve(__dirname, "../src/views")
    }
  },
  plugins: [
    new MiniCssExtractPlugin({}),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      favicon: "./public/favicon.png"
    })
  ]
};

module.exports = config;
