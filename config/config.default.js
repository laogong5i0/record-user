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
    root: '/pages',
    entry: 'page',
  },
  react: {
    static: true,
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
  mysql: {
    clients: {
      // clientId, 获取client实例，需要通过 app.mysql.get('clientId') 获取
      db1: {
        // host
        host: '127.0.0.1',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: '12345678',
        // 数据库名
        database: 'users_test',
      },
      // ...
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
    // ...
    // 所有数据库配置的默认值
    // default: {

    // },
  }
});

// exports.mysql = {
//   clients: {
//     // clientId, 获取client实例，需要通过 app.mysql.get('clientId') 获取
//     db1: {
//       // host
//       host: '127.0.0.1',
//       // 端口号
//       port: '3306',
//       // 用户名
//       user: 'root',
//       // 密码
//       password: '12345678',
//       // 数据库名
//       database: 'test',
//     },

//   },
//   // 所有数据库配置的默认值
//   // default: {

//   // },

//   // 是否加载到 app 上，默认开启
//   app: true,
//   // 是否加载到 agent 上，默认关闭
//   agent: false,
// };
