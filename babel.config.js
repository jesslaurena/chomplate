module.exports = function (api) {
    api.cache(true);
    return {
      presets: [
        'babel-preset-expo', // Expo preset for React Native/Expo
      ],
    };
  };