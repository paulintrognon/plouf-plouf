module.exports = {
  root: true,
  overrides: [
    {
      files: 'src/**/*',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
      ],
      rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        '@typescript-eslint/no-use-before-define': ['error', { 'functions': false }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/prop-types': 'off',
      }
    },
    {
      files: 'cypress/**/*',
      plugins: ["cypress"],
      extends: ["eslint:recommended", "plugin:prettier/recommended", "plugin:cypress/recommended"],
      env: {
        es6: true,
        node: true
      },
      rules: {
        "prettier/prettier": ["error", {}, { usePrettierrc: true }]
      }
    }
  ]
}
