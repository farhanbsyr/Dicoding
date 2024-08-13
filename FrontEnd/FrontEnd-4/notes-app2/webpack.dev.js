const { merge } = require("webpack-merge");
const path = require("path");
const webpackCommon = require("./webpack.common");
module.exports = merge(webpackCommon, {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    watchFiles: ["index.html", "src/**/*"],
    open: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
});
