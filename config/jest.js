/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      astTransformers: {
        before: ['nmde-common/keys-transformer'],
      },
      useESM: true,
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '.+\\.jsx?$': 'babel-jest',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  transformIgnorePatterns: [],
};
