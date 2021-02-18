module.exports = {
  plugins: ["prettier"],
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "prettier",
    "prettier/react",
    "plugin:unicorn/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
    "unicorn/no-array-for-each": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-null": "off",
    "unicorn/filename-case": [
      "error",
      {
        case: "camelCase",
      },
    ],
  },
  parserOptions: {
    project: "./tsconfig.json",
  },
  overrides: [
    {
      files: ["src/components/**/*.tsx"],
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            case: "pascalCase",
          },
        ],
      },
    },
    {
      files: ["src/pages/**/*.tsx"],
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            case: "kebabCase",
          },
        ],
      },
    },
  ],
};
