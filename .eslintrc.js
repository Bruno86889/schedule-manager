module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "eslint-plugin-import-helpers"],
  rules: {
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: [
          "module",
          "/^@nestjs/",
          ["/./", "/.factory/", "/.dto/", "/.builder/", "/.adapter/", "/.handler/"],
          [("parent", "sibling", "index")],
        ],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
  },
};
