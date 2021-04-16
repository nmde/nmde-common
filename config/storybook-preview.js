/* eslint-disable @typescript-eslint/no-var-requires */
const { VApp } = require('vuetify/lib');

module.exports = function preview(vuetify) {
  return {
    decorators: [
      (story) => ({
        components: { story, VApp },
        template: '<v-app><v-main><story /></v-main></v-app>',
        vuetify,
      }),
    ],
    parameters: {
      actions: { argTypesRegex: '^on[A-Z].*' },
    },
  };
};
