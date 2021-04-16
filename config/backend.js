/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const repl = require('repl');
const { merge } = require('webpack-merge');
const packageJson = require('../package.json');
const common = require('./common');

const exclude = [];
const externals = {};
exclude
  // eslint-disable-next-line no-underscore-dangle
  .concat(repl._builtinLibs)
  .concat(Object.keys(packageJson.dependencies))
  .forEach((lib) => {
    externals[lib] = `commonjs ${lib}`;
  });

module.exports = function backend(input, output) {
  return merge(common(output), {
    entry: {
      backend: input,
    },
    externals,
    node: false,
  });
};
