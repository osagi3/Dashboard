import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  // 1. Use the recommended JS defaults
  js.configs.recommended,
  // 2. Use the recommended React defaults
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      // 3. Merges browser globals so 'window', 'document', etc. are recognized
      globals: {
        ...globals.browser,
      },
    },
    // 4. This is where the magic happens
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
];
