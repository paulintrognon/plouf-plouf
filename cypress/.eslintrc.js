module.exports = {
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
