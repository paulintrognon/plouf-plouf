module.exports = {
  root: true,
  overrides: [
    {
      files: '*.js',
      env: {
        es6: true,
        node: true
      },
    },
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
        '@typescript-eslint/no-unused-vars': ['error'],
        "@typescript-eslint/explicit-function-return-type": [
          "warn",
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true
          }
        ],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
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
