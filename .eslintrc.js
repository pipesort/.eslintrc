module.exports = {
  plugins: ["prettier"],
  extends: ["airbnb-typescript", "airbnb/hooks", "prettier", "prettier/react"],
  rules: {
    "prettier/prettier": "error",
  },
  parserOptions: {
    project: "./tsconfig.json",
  },
};
