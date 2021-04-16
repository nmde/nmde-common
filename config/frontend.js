/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const sass = require('sass');
const { merge } = require('webpack-merge');
const common = require('./common');

module.exports = function frontend(input, output) {
  return merge(common(output), {
    entry: {
      frontend: input,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.s(c|a)ss$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: sass,
                sassOptions: {
                  indentedSyntax: true,
                },
              },
            },
          ],
        },
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        },
        {
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]',
          },
          test: /\.(jpe?g|png|gif|svg)$/i,
        },
      ],
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
    },
  });
};
