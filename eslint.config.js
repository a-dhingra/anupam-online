import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    // Not linted: build output, deps, and the vendored shadcn/ui primitives
    // (kept as-is from upstream) plus the unrendered WIP gallery.
    ignores: [
      "build",
      "node_modules",
      "src/components/ui/**",
      "src/components/ImagesSection.tsx",
    ],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // The Figma export leans on a few unused imports/vars; keep them as
      // warnings so they surface without blocking the build.
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
);
