const { fetchZestyRedirects } = require('./src/lib/zesty/fetchRedirects');
const zestyConfig = require('./zesty.config.json');

module.exports = {
  trailingSlash: true,
  // async redirects() {
  //   return await fetchZestyRedirects(zestyConfig);
  // },
  env: {
    zesty: zestyConfig,
  },
  eslint: {
    ignoreDuringBuilds: true,
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
