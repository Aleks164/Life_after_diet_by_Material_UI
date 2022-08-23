/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === "development";
const PREFIX = "/Life_after_diet_by_Material_UI/";

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: resolve(__dirname, "./src/index"),
  devtool:
    process.env.NODE_ENV === "production"
      ? "hidden-source-map"
      : "eval-source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  devServer: {
    port: 9000,
    historyApiFallback: true,
  },
  output: {
    path: resolve(__dirname, "dist"),
    publicPath: isDev ? "/" : PREFIX,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "./images/[contenthash][ext]",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      SPOON_API_KEY: JSON.stringify(process.env.SPOON_API_KEY),
      FB_API_KEY: JSON.stringify(process.env.FB_API_KEY),
      IS_DEV: process.env.NODE_ENV === "development",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "404.html",
    })
  ],
};

