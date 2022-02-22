module.exports = {
    env: {
        zesty: {
            "instance_zuid": "8-aaeffee09b-7w6v22",
            "stage" : "https://kfg6bckb-dev.webengine.zesty.io",
            "production" : "https://www.zesty.io",
            "stage_password" : "",
            "auth" : "", // this can set APP_SID as cookie to get access, or a user login
            "src_dir" : "/src" // leave blank for /src as default
        },
        eslint: {
            // Warning: This allows production builds to successfully complete even if
            // your project has ESLint errors.
            ignoreDuringBuilds: true,
        },
    }
  }