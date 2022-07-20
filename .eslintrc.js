module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'next', 'next/core-web-vitals', 'prettier'],
  overrides: [
    {
      files: 'src/**/*',
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'next',
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier',
      ],
      rules: {
        // We will use TypeScript's types for component props instead
        'react/prop-types': 'off',

        // No need to import React when using Next.js
        'react/react-in-jsx-scope': 'off',

        // This rule is not compatible with Next.js's <Link /> components
        'jsx-a11y/anchor-is-valid': 'off',

        // No need for this rule
        'react/display-name': 'off',

        // No unused vars
        '@typescript-eslint/no-unused-vars': ['error'],

        // Require return types on functions where useful
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        'sort-imports': [
          'error',
          {
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
          },
        ],

        'import/order': [
          'warn',
          {
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
              {
                pattern: 'next/**',
                group: 'external',
                position: 'before',
              },
            ],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },
    {
      files: 'cypress/**/*',
      plugins: ['cypress'],
      extends: ['eslint:recommended', 'plugin:cypress/recommended'],
      env: {
        es6: true,
        node: true,
      },
    },
  ],
}
