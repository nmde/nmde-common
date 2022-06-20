module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    require('eslint-config-airbnb-typescript/base'),
    'eslint:recommended',
    require('@typescript-eslint/eslint-plugin/dist/configs/recommended'),
    require('eslint-plugin-jsdoc').configs.recommended,
  ],
  parser: require('@typescript-eslint/parser'),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    project: 'tsconfig.json',
  },
  plugins: [
    require('@typescript-eslint/eslint-plugin'),
    require('eslint-plugin-sort-class-members'),
    require('eslint-plugin-jsdoc'),
    require('eslint-plugin-tsdoc'),
  ],
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 'warn',
    'implicit-arrow-linebreak': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: false,
          order: 'asc',
        },
        groups: [['builtin', 'external', 'internal']],
      },
    ],
    'jsdoc/check-indentation': 1,
    'jsdoc/check-line-alignment': 1,
    'jsdoc/match-description': 1,
    'jsdoc/require-description': 1,
    'jsdoc/require-description-complete-sentence': 1,
    'jsdoc/require-file-overview': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns-type': 'off',
    'linebreak-style': 'off',
    'operator-linebreak': 'off',
    'require-jsdoc': [
      'error',
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
        },
      },
    ],
    'sort-class-members/sort-class-members': [
      2,
      {
        accessorPairPositioning: 'getThenSet',
        order: [
          '[static-properties]',
          '[static-methods]',
          '[properties]',
          '[conventional-private-properties]',
          'constructor',
          '[methods]',
          '[conventional-private-methods]',
        ],
      },
    ],
    'sort-keys': 'warn',
    'sort-vars': 'warn',
    'tsdoc/syntax': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
