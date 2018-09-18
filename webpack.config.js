const path = require("path");
const Dotenv = require("dotenv-webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["react", "es2015", "stage-0"],
          plugins: ["transform-class-properties"]
        }
      }
      // {
      //   test: /\.css?$/,
      //   loaders: ExtractTextPlugin.extract(
      //     "style-loader!css-loader?modules=true&localIdentName=[name]_[local]_[hash:base64:5]"
      //   )
      // }

      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: ["css-loader"]
      //   })
      // }
    ]
  },
  // plugins: [new ExtractTextPlugin("styles.css")]
  plugins: [
    new Dotenv()
    // new HtmlWebpackPlugin({
    //   inject: false,
    //   template: "./public/index.html",

    //   // Pass the full url with the key!
    //   apiUrl: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
    //     process.env.GOOGLE_MAP
    //   }`
    // })
  ]
};
