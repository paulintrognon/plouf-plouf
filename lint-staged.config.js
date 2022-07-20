module.exports = {
  // Run type-check on changes to TypeScript files
  '**/*.(ts|tsx)': () => 'yarn type-check',
  // Format files and check eslint rules for TypeScript and JavaScript files
  '**/*.(js|ts|tsx)': filenames => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],
}
