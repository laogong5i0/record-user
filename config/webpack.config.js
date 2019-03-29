'use strict';

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (app, defaultConfig) => {
  defaultConfig.plugins.push(
    new CopyPlugin([
      {
        from: path.join(app.baseDir, 'node_modules/nprogress/nprogress.js'),
        to: path.join(app.baseDir, 'build/nprogress.js'),
      },
      {
        from: path.join(app.baseDir, 'node_modules/nprogress/nprogress.css'),
        to: path.join(app.baseDir, 'build/nprogress.css'),
      }
    ])
  );

  return {
    ...defaultConfig,
    entry: {
      // index: [path.join(__dirname, '../client/container/index.jsx')],
      gst: [path.join(__dirname, '../client/pages/gst/index.jsx')],
      login: [path.join(__dirname, '../client/pages/login/index.jsx')],
      // login: [path.join(__dirname, '../client/container/index.jsx')],
    },
    // externals: {
    //   //   react: 'React',
    //   //   'react-dom': 'ReactDOM',
    //   antd: true,
    // },
    resolve: {
      extensions: ['.json', '.js', '.jsx', '.less'],
      alias: {
        client: path.join(app.baseDir, 'client'),
        themes: path.join(app.baseDir, 'client/themes'),
        assets: path.join(__dirname, '../client/assets'),
      },
    },
    // module: {
    //   rules: [{
    //     test: /\.less$/,
    //     use: [{
    //       loader: 'style-loader',
    //     }, {
    //       loader: 'css-loader', // translates CSS into CommonJS
    //     }, {
    //       loader: 'less-loader',
    //       options: {
    //         javascriptEnabled: true,
    //       }
    //     }]
    //   }, {
    //     test: /\.(js|jsx)$/,
    //     exclude: /node_modules/,
    //     loader: 'babel-loader'
    //   }]
    // }
  }
};
