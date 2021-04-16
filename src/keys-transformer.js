// eslint-disable-next-line @typescript-eslint/no-var-requires
const { default: keysTransformer } = require('ts-transformer-keys/transformer');

module.exports = {
  /**
   * Transformer factory
   *
   * @param {*} cs factory context
   * @returns {*} the key transformer
   */
  factory(cs) {
    return (ctx) => keysTransformer(cs.tsCompiler.program)(ctx);
  },
  name: 'keys-transformer',
  version: 1,
};
