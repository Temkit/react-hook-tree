const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/tree.js",
  output: {
    path: path.resolve("lib"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: ["url-loader"]
      }
    ]
  },

  resolve: {
    extensions: [".js", ".css"]
  },
  externals: {
    react: "commonjs react"
  }
};
