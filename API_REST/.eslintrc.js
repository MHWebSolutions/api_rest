module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/first': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'arrow-parens': 'off',
    'no-param-reassign': 'off',
    'no-unused-expressions': 'off',
    'max-len': 'off',
    'consistent-return': 'off',
    'no-empty-function': 'off',
    'linebreak-style': 'off',
    'camelcase': 'off',
    'quote-props': 'off',
  },
};
