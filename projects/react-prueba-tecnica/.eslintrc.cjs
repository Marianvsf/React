module.exports = {
  parser: "@babel/eslint-parser",

  env: {
    browser: true,
    es2020: true,
  },

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
  ],

  settings: {
    react: {
      version: "detect",
    },
  },
};
