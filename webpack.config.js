const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    server: './src/server.ts'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node',
  externals: [nodeExternals({
    whitelist: [
      /^@angular\/material/,
      /^@agm\/core/,
      /^@ng-bootstrap\/ng-bootstrap/,
      /^ngx-sharebuttons/,
      /^ng2-social-login/,
      /^ngx-pagination/
    ]
  })],
  node: {
    __dirname: true
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
