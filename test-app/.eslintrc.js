// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier", "plugin:testing-library/react"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
