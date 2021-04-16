/* eslint-disable @typescript-eslint/no-var-requires */
const { default: keysTransformer } = require('ts-transformer-keys/transformer');
const babelConfig = require('../babel');

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
              options: babelConfig(),
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
