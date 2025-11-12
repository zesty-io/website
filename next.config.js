const zestyConfig = require('./zesty.config.json');
const { docsRedirects } = require('./src/config/redirects');

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

  async redirects() {
    return [...docsRedirects];
  },
};

// Injected content via Sentry wizard below

const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withSentryConfig(module.exports, {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: 'zestyio',
  project: 'website-accounts',

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  // tunnelRoute: "/monitoring",

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
});
