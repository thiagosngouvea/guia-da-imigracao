module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@routes": "./src/routes",
            "@context": "./src/context",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@services": "./src/services",
            "@styles": "./src/styles",
          },
          relativeSourceLocation: true,
        },
      ],
    ],
  };
};
