const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const IgnoreEmitPlugin = require("ignore-emit-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
// const fs = require("fs");

// const dirCont = fs.readdirSync(path.resolve(__dirname, "src/html"));
// const files = dirCont.filter((elm) => elm.match(/.*\.(ejs?)/gi));

// console.log(files);

// let htmlPageNames = ["equip-warrior", "equip-wizard", "tab2"];
// let multipleHtmlPlugins = files.map((name) => {
//   name = name.slice(0, -4);
//   // console.log(name);
//   return new HtmlWebpackPlugin({
//     template: `./src/html/${name}.ejs`, // relative path to the HTML files
//     filename: `html/${name}.html`, // output HTML files
//   });
// });

module.exports = (env) => {
  const config = {
    target: "web",
    mode: "development",
    devtool: "source-map",
    devServer: {
      static: path.resolve(__dirname, "dist"),
      host: "127.0.0.1",
      // port: 10000,
      open: false,
      hot: false,
      liveReload: true,
      watchFiles: ["src/**/*", "src/html/*"],
      devMiddleware: {
        writeToDisk: true,
      },
    },
    performance: {
      maxAssetSize: 1000000,
      maxEntrypointSize: 1000000,
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
      runtimeChunk: "single",
    },
    entry: {
      main: path.resolve(__dirname, "src/main.ts"),
      styles: [
        path.resolve(__dirname, "./src/css/default.css"),
        path.resolve(__dirname, "./src/css/buttons.css"),
        path.resolve(__dirname, "./src/css/colors.css"),
        path.resolve(__dirname, "./src/css/modal.css"),
        path.resolve(__dirname, "./src/css/index.css"),
        path.resolve(__dirname, "./src/css/icons.css"),
        path.resolve(__dirname, "./src/css/input.css"),
        path.resolve(__dirname, "./src/css/heading.css"),
        path.resolve(__dirname, "./src/css/tooltip.css"),
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
            to: "img",
          },
          {
            from: path.resolve(__dirname, "src/favicon.ico"),
            to({ context, absoluteFilename }) {
              return "[name][ext]";
            },
          },
          {
            from: path.resolve(__dirname, "src/font"),
            to({ context, absoluteFilename }) {
              return "font/[name][ext]";
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
      roots: [path.resolve(__dirname, "dist")],
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
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: { loader: "html-loader" },
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          type: "asset/resource",
          // generator: {
          //   filename: 'img/[hash][ext]'
          // }
        },
        // {
        //   test: /\.ejs$/i,
        //   use: ["html-loader", "template-ejs-loader"],
        // },
      ],
    },

    stats: {
      modules: true,
      warnings: false,
      version: true,
      timings: true,
      performance: false,
      hash: false,
      errors: true,
      errorDetails: true,
      colors: true,
      builtAt: false,
    },
  };

  if (env.production) {
    config.mode = "production";
    config.output.clean = true;
    config.optimization.runtimeChunk = false;
    delete config.devServer;
    delete config.devtool;
    // console.log(config);
  }
  return config;
};
