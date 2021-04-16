/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  globals: {
    'ts-jest': {
      astTransformers: {
        before: ['nmde-common/keys-transformer'],
      },
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
};
