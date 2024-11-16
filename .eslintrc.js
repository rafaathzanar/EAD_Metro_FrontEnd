module.exports = {
  parser: "@typescript-eslint/parser", // Enables TypeScript parsing
  parserOptions: {
    ecmaVersion: 2020, // or "latest"
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // TypeScript recommended rules
  ],
  rules: {
    // Customize rules if needed
  },
};
