const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: "./",
    },
  },
};

// index que muestre una imagen svg y que cuando pase el mouse encima me muestre cualquier leyenda, una
// etiqueta con un mensaje.

// que este cargada en base64 con un input, convertir el archivo en base 64
