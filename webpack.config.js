var path = require("path");
const UnglifyJSPplugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: {
    app: ["./js/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "prod.js"


  },
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }
  ]
},
  plugins:[
    new UnglifyJSPplugin()
  ]
};
