module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@atoms": "./src/components/atoms",
            "@styles": "./src/styles",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@molecules": "./src/components/molecules",
            "@assets": "./src/assets"
          }
        }
      ]
    ]
  };
};
