'use strict';

const path = require('path');

module.exports = appInfo => ({
  keys: 'secret',
  webpack: {
    custom: {
      configPath: path.join(__dirname, './webpack.config.js'),
    },
  },
  router: {
    root:'/container',
    entry: 'container',
  },
  static: {
    dir: [
      {
        prefix: '/public',
        dir: path.join(appInfo.baseDir, '/app/public'),
      },
      {
        prefix: '/build',
        dir: path.join(appInfo.baseDir, '/build'),
      },
    ],
  },
});
