const path = require('path')

module.exports = {
  "typescript" : { reactDocgen: false },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
    '@react-theming/storybook-addon'
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "webpackFinal": async (config, { configType }) => {
    // Fixes npm packages that depend on some modules
    config.resolve = {
      ...config.resolve,
      alias: {
        "~": path.resolve(__dirname, "..", "src"),
      },
      extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
      fallback: {
        fs: false,
        path: false,
      },
    };

    // Important: return the modified config
    return config;
  },
}