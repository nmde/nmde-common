/* eslint-disable @typescript-eslint/no-var-requires */
const keysTransformer = require('../src/keys-transformer');

module.exports = {
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  globals: {
    'ts-jest': {
      astTransformers: {
        before: [keysTransformer],
      },
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
};
