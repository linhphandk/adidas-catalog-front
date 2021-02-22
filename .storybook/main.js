const path = require('path');

// your app's webpack.config.js
const custom = require('../webpack.config.js');

module.exports = {
  "stories": [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/*.stories.@(js|jsx|ts|tsx)",
    "../src/features/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/features/*.stories.@(js|jsx|ts|tsx)"

  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-viewport",
    '@storybook/addon-docs'
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: (config) => {
    custom.module.rules.push({
      test: /\.stories\.tsx?$/,
      loaders: [{
        loader: require.resolve('@storybook/source-loader'),
        options: {
          parser: 'typescript'
        },
      }, ],
      enforce: 'pre',
    })
    return {
      ...config,
      module: {
        ...config.module,
        rules: config.module.rules
        
      },
      resolve: {
        ...config.resolve,
        ...custom.resolve
      }
      
    };
  }
}