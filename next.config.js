const svgLoader = {
  test: /\.svg$/,
  use: ["@svgr/webpack"],
};
module.exports = {
  webpack(config) {
    config.module.rules.push(svgLoader);
    return config;
  },
  future: {
    webpack5: true,
  },
};
