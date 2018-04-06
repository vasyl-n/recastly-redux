const path = require('path');
var SRC_DIR = path.join(__dirname, '/src');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
    entry: { bundle: './src/index.jsx' },
    output: {
        path: DIST_DIR,
        filename: 'bundle.js'
      },
    module : {
        rules: [
            {
                test: /.jsx/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['es2015', 'react']
                }
              }
        ]
    },
    watch: true
  };