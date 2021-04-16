/* eslint-disable @typescript-eslint/no-var-requires */
const { mergeWithCustomize } = require('webpack-merge');
const frontend = require('./frontend.config');

module.exports = function main(entry) {
  return {
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    stories: ['../stories/**/*.stories.ts'],
    webpackFinal: async (config) => {
      const frontendConfig = frontend();
      // Prevent the default frontend entry & output from being merged
      delete frontendConfig.entry;
      delete frontendConfig.output;
      const newConfig = mergeWithCustomize({
        /**
         * Force Storybook to use our configuration for certain types of files
         * Also removes our rules for assets so that Storybook places them in the correct location
         *
         * @param {*} a the Storybook configuration
         * @param {*} b the local frontend configuration
         * @param {*} key the object key
         * @returns {*} the modified object
         */
        customizeObject(a, b, key) {
          if (key === 'module') {
            // Force Storybook to use our configuration for .tsx files
            // And remove our rules for assets so that Storybook places them in the correct location
            const newRules = [];
            [...a.rules, ...b.rules].forEach((rule) => {
              if (rule.test.source === '\\.tsx?$') {
                if (rule.use.length >= 2) {
                  newRules.push(rule);
                }
              } else if (rule.test.source === '\\.css$') {
                if (rule.sideEffects === true) {
                  newRules.push(rule);
                }
              } else if (rule.loader !== 'file-loader') {
                newRules.push(rule);
              }
            });
            return {
              rules: newRules,
            };
          }
          return a;
        },
      })(config, frontendConfig);
      // Add bootstrap.ts as an entry
      newConfig.entry.push(entry);
      return newConfig;
    },
  };
};
