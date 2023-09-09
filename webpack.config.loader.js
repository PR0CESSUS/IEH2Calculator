const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const path = require("path");

module.exports = {
  target: "web",
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    host: "127.0.0.1",
    open: false,
    hot: false,
    liveReload: true,
    watchFiles: ["src/**/*", "src/html/*"],
    devMiddleware: {
      writeToDisk: true,
    },
  },
  entry: {
    saveFileLoader: path.resolve(__dirname, "src/ts/SaveFileLoader.ts"),
    // settings: "./src/js/settings.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "test.html",
      template: "src/html/import.ejs",
      inject: false,
      hash: true,
    }),
    new NodePolyfillPlugin({
      includeAliases: ["Buffer", "stream", "crypto"],
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // clean: true,
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
};
