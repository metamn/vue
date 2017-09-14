const path = require('path');

var baseWebpackConfig = require('../build/webpack.base.conf')
var merge = require('webpack-merge')

module.exports = merge(
  baseWebpackConfig,
  {
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: 'vue-markdown-loader',
          include: path.resolve(__dirname, '../')
        }
      ]
    }
  }
)
