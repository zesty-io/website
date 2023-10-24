// const { fetchZestyRedirects } = require('./src/lib/zesty/fetchRedirects');
const zestyConfig = require('./zesty.config.json');

module.exports = {
  trailingSlash: true,
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

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }
    return config;
  },
};
