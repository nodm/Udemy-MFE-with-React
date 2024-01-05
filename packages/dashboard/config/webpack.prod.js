const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJSON = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/dashboardApp/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboardApp',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardAppApp': './src/bootstrap',
      },
      shared: packageJSON.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
