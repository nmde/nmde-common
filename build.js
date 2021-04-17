/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const frontend = require('./config/frontend');

module.exports = frontend(
  path.join(__dirname, 'components', 'vuetify-tsx', 'index.ts'),
  path.join(__dirname, 'dist'),
);
