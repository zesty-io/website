module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    Zesty: true,
    dataLayer: true,
  },
  extends: [
    'plugin:react/recommended',
    'google',
    'prettier',
    'plugin:cypress/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import', 'unused-imports'],
  rules: {
    'require-jsdoc': 0,
    'valid-jsdoc': 0,
    'no-undef': 'error',
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'no-var': 0,
    'no-array-constructor': 0,
    'spaced-comment': 0,
    'react/display-name': 0,
    'spaced-comment': 0,
    'import/extensions': 0,
    'one-var': 0,
    'react/jsx-no-target-blank': 0,
    'new-cap': 0,
    'react/prop-types': 0,
    'react/jsx-key': 0,
    'require-jsdoc': 0,
    'prefer-const': 0,
    camelcase: 0,
    'no-use-before-define': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'tsx'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.tsx', 'ts'],
      },
    },
  },
};
