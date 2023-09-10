const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const IgnoreEmitPlugin = require("ignore-emit-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          type: "css/mini-extract",
          name: "styles",
          chunks: "all",
          enforce: true,
        },
      },
    },
    // runtimeChunk: "single",
  },
  entry: {
    main: path.resolve(__dirname, "src/main.ts"),
    saveFileLoader: path.resolve(__dirname, "src/ts/SaveFileLoader.ts"),
    styles: [
      path.resolve(__dirname, "./src/css/default.css"),
      path.resolve(__dirname, "./src/css/buttons.css"),
      path.resolve(__dirname, "./src/css/colors.css"),
      path.resolve(__dirname, "./src/css/modal.css"),
      path.resolve(__dirname, "./src/css/index.css"),
      path.resolve(__dirname, "./src/css/icons.css"),
      path.resolve(__dirname, "./src/css/input.css"),
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["main"],
      template: "src/index.ejs",
      hash: true,
    }),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/img"),
          to({ context, absoluteFilename }) {
            return "img/[name][ext]";
          },
        },
        {
          from: path.resolve(__dirname, "src/html"),
          to: path.resolve(__dirname, "dist/html"),
        },
        {
          from: path.resolve(__dirname, "src/favicon.ico"),
          to({ context, absoluteFilename }) {
            return "[name][ext]";
          },
        },
        {
          from: path.resolve(__dirname, "src/ts/data", "default.json"),
          to({ context, absoluteFilename }) {
            return "data/[name][ext]";
          },
        },
      ],
    }),

    new MiniCssExtractPlugin({
      filename: "[name]-bundle.css",
    }),
    new IgnoreEmitPlugin(["styles.bundle.js"]),
    new NodePolyfillPlugin({
      includeAliases: ["Buffer", "stream", "crypto"],
    }),
  ],

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
      // {
      //   test: /\.css$/,
      //   use: [MiniCssExtractPlugin.loader, "css-loader"],
      // },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
        ],
      },
    ],
  },

  stats: {
    modules: true,
    warnings: false,
    version: true,
    timings: true,
    performance: false,
    hash: true,
    errors: true,
    errorDetails: true,
    colors: true,
    builtAt: true,
  },
};
