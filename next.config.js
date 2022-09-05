const { fetchZestyRedirects } = require('./src/lib/zesty/fetchRedirects');

module.exports = {
  images: {
    domains: ['kfg6bckb.media.zestyio.com'],
  },
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
    eslint: {
      ignoreDuringBuilds: true,
    },
  },
};
