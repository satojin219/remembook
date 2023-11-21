/** @type {import('next').NextConfig} */
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { merge } = require("webpack-merge")

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir:
      true |
      {
        optimizeFonts: true,
        enabled: true,
        silent: true,
      },
  },
  webpack: (config) => {
    return merge(config, {
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ],
      },
      plugins: [
        new VanillaExtractPlugin(),
        new MiniCssExtractPlugin({
          filename: "static/chunks/[contenthash].css",
          chunkFilename: "static/chunks/[contenthash].css",
        }),
      ],
    })
  },
}

module.exports = nextConfig
