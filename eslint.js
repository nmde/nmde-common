module.exports = {
  extends: [
    "airbnb-typescript/base",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsdoc/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "sort-class-members", "jsdoc"],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
    project: "tsconfig.json",
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true,
    jest: true,
  },
  rules: {
    "@typescript-eslint/explicit-member-accessibility": "warn",
    "sort-keys": "warn",
    "sort-vars": "warn",
    "linebreak-style": "off",
    "import/order": [
      "error",
      {
        groups: [["builtin", "external", "internal"]],
        alphabetize: {
          order: "asc",
          caseInsensitive: false,
        },
      },
    ],
    "sort-class-members/sort-class-members": [
      2,
      {
        order: [
          "[static-properties]",
          "[static-methods]",
          "[properties]",
          "[conventional-private-properties]",
          "constructor",
          "[methods]",
          "[conventional-private-methods]",
        ],
        accessorPairPositioning: "getThenSet",
      },
    ],
    "require-jsdoc": [
      "error",
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
