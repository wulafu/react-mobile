const { whenDev } = require("@craco/craco");
const CracoAlias = require("craco-alias");
const VConsolePlugin = require("vconsole-webpack-plugin");
const path = require("path");

module.exports = {
  style: {
    postcss: {
      loaderOptions: {
        postcssOptions: {
          config: path.resolve(__dirname, "postcss.config.js"),
        },
      },
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.extend.json",
      },
    },
  ],
  webpack: {
    plugins: [...whenDev(() => [new VConsolePlugin({ enable: true })], [])],
  },
};
