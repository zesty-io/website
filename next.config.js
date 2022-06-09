module.exports = {
  "trailingSlash": true,
  "env": {
    "zesty": {
      "instance_zuid": "8-aaeffee09b-7w6v22",
      "stage": "https://kfg6bckb-dev.webengine.zesty.io",
      "production": "https://www.zesty.io",
      "stage_password": "",
      "auth": "",
      "src_dir": "/src"
    },
    "eslint": {
      "ignoreDuringBuilds": true
    }
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'edge-cache-tags',
            value: '8-aaeffee09b-7w6v22',
          },
          {
            key: 'surrogate-key',
            value: '8-aaeffee09b-7w6v22',
          },
        ],
      },
      {
        source: '/marketplace/:path*',
        headers: [
          {
            key: 'edge-cache-tags',
            value: '8-acadafe9d5-q3tfds',
          },
          {
            key: 'surrogate-key',
            value: '8-acadafe9d5-q3tfds',
          },
        ],
      },
    ]
  },
}