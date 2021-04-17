/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./common');

module.exports = function backend(input, output) {
  return merge(common(output), {
    entry: {
      backend: input,
    },
    externals: [nodeExternals()],
    node: false,
    target: 'node',
  });
};
