/* eslint-disable @typescript-eslint/no-var-requires */
const proposalClassProperties = require('@babel/plugin-proposal-class-properties');
const proposalDecorators = require('@babel/plugin-proposal-decorators');
const babelPresetEnv = require('@babel/preset-env');
const babelPresetTypescript = require('@babel/preset-typescript');
const babelPresetJSX = require('@vue/babel-preset-jsx');

module.exports = () => ({
  plugins: [
    [
      proposalDecorators,
      {
        legacy: true,
      },
    ],
    [
      proposalClassProperties,
      {
        loose: true,
      },
    ],
  ],
  presets: [
    babelPresetJSX,
    [babelPresetEnv, { targets: { node: 'current' } }],
    babelPresetTypescript,
  ],
});
