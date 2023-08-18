const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/", // Create a public path for the app
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "Webpack Plugin",
      }),
      // Add and configure workbox plugins for a service worker and manifest file.
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: "JATE",
        short_name: "JATE",
        description: "",
        background_color: "#ffffff",
        theme_color: "#000000",
        crossorigin: "use-credentials", // or 'anonymous' if needed
        icons: [
          {
            src: path.resolve("src/images/logo.png"), // Replace with your icon path
            destination: path.join("assets", "icons"),
            sizes: [16, 32, 96, 144],
          },
        ],
      }),
      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "src-sw.js",
      }),
    ],

    module: {
      rules: [
        {
          // Add CSS loaders and babel to webpack.
          //CSS loaders
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          //babel loader
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
  };
};
