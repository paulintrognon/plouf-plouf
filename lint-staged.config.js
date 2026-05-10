module.exports = {
  // Run type-check on changes to TypeScript files
  '**/*.(ts|tsx)': () => 'pnpm type-check',
  // Format files and check eslint rules for TypeScript and JavaScript files
  '**/*.(js|ts|tsx)': filenames => [
    `pnpm exec eslint --fix ${filenames.join(' ')}`,
    `pnpm exec prettier --write ${filenames.join(' ')}`,
  ],
}
