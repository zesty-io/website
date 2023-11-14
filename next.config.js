const zestyConfig = require('./zesty.config.json');

module.exports = {
  trailingSlash: true,
  env: {
    zesty: zestyConfig,
  },

  images: {
    domains: [
      'be93523bd41e2e475e74-e4edef19ad51123442eaceed55c78461.ssl.cf2.rackcdn.com',
      '39ntbr6g.media.zestyio.com',
      'kfg6bckb.media.zestyio.com',
    ],
  },
  swcMinify: true,
};
