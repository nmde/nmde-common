/* eslint-disable @typescript-eslint/no-var-requires */
const { default: keysTransformer } = require('ts-transformer-keys/transformer');

module.exports = function common(output) {
  return {
    mode: process.env.NODE_ENV || 'development',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: [
                  [
                    '@babel/plugin-proposal-decorators',
                    {
                      legacy: true,
                    },
                  ],
                  '@babel/plugin-proposal-class-properties',
                ],
                presets: [
                  '@vue/babel-preset-jsx',
                  ['@babel/preset-env', { targets: { node: 'current' } }],
                  '@babel/preset-typescript',
                ],
              },
            },
            {
              loader: 'ts-loader',
              options: {
                getCustomTransformers: (program) => ({
                  before: [keysTransformer(program)],
                }),
              },
            },
          ],
        },
      ],
    },
    output: {
      filename: '[name].js',
      path: output,
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
  };
};
