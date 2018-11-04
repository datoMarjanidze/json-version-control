var path = require('path');

module.exports = {
  entry: {
    index: './index.ts',
    test: './test.ts' 
  },
  devtool: 'inline-source-map',
  mode: 'none',
  watch: true,
  node: {
    process: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    libraryTarget: 'commonjs',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};