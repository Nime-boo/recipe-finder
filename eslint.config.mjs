import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect", // Auto-detect React version
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Disable rule since React 17+ doesn't require import
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
