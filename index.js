/* eslint-disable @typescript-eslint/no-var-requires */
const backend = require('./config/backend.config');
const frontend = require('./config/frontend.config');
const main = require('./config/storybook-main.js');
const preview = require('./config/storybook-preview');

module.exports = {
  backend,
  frontend,
  main,
  preview,
};
