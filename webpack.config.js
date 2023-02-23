const WebExtension = require('webpack-target-webextension');
const CopyPlugin = require("copy-webpack-plugin");

const webpack = require('webpack');
const path = require('path');

/** @type {webpack.Configuration} */
const config = {
  resolve: {
    alias: {
      core: path.join(__dirname, 'styled-components'),
    },
  }
}
module.exports = config