var path = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  entry: path.join(__dirname, '/src/js/index.js'),
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/dist/',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      },
      {
        test: /\.svg$/,
        loader: 'babel!svg-react',
      }
    ]
  },
  postcss: function () {
    return [autoprefixer, precss];
  },
  devtool: 'source-map'
};
