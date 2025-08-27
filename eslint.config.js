// eslint.config.js
import js from "@eslint/js";

export default [
  // Base recommended rules
  js.configs.recommended,

  // Ignore unnecessary files
  {
    ignores: ["**/*.test.js", "**/*.config.js", "**/out/**"],
  },

  // Custom rules
  {
    rules: {
      semi: ["error", "always"], 
      "prefer-const": "error",   
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], 
    },
  },
];
