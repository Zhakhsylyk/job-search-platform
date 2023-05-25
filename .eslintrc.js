module.exports = {
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@components", "./src/components"],
          ["@pages", "./src/components/screens"],
          ["@assets", "./src/assets"],
          ["@images", "./src/assets/images"],
          ["@icons", "./src/assets/icons"],
        ],
        extensions: [".ts", ".js", ".jsx", ".json"],
      },
    },
  },
};
