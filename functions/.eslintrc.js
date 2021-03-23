module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    quotes: ["error", "double"],
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8, // or 2017
  },
};
