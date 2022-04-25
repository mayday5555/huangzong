const { resolve } = require('path');

module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: [resolve(__dirname, './tsconfig.json'), resolve(__dirname, './tsconfig.eslint.json')],
    extraFileExtensions: ['.vue'],
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
  },
};
