module.exports = function preview(vuetify) {
  return {
    decorators: [
      (story) => ({
        components: { story },
        template: '<story />',
        vuetify,
      }),
    ],
    parameters: {
      actions: { argTypesRegex: '^on[A-Z].*' },
    },
  };
};
