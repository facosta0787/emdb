module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  plugins: ['prettier', 'json'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
      },
    ],
    'react-native/no-inline-styles': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-fragments': 'off',
    'import/prefer-default-export': 'off',
  },
};
