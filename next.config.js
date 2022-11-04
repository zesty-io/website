const { fetchZestyRedirects } = require('./src/lib/zesty/fetchRedirects');

module.exports = {
  trailingSlash: true,
  async redirects() {
    return await fetchZestyRedirects();
  },
  env: {
    zesty: {
      instance_zuid: '8-aaeffee09b-7w6v22',
      stage: 'https://kfg6bckb-dev.webengine.zesty.io',
      production: 'https://www.zesty.io',
      stage_password: '',
      auth: '',
      src_dir: '/src',
    },
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
