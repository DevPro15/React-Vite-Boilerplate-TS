// config-overrides.js

module.exports = function override(config) {
  const svgRule = {
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          // svgr options can be added here
        },
      },
      "url-loader", // This loader converts SVGs to base64 URIs
    ],
  };

  // Find the existing rule for SVGs and remove it
  config.module.rules = config.module.rules.filter(
    (rule) => !(rule.test && rule.test.toString().includes("svg"))
  );

  // Add the new SVG rule
  config.module.rules.push(svgRule);

  return config;
};
