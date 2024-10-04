const path = require('path');

module.exports = {
  generateBuildId: async () => {
    return "storybook-storybook-web";
  },
  reactStrictMode: true,
  basePath: process.env.BASE_PATH,
  env: {
    BASE_PATH: process.env.BASE_PATH,
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
    ENV_KEY: process.env.ENV_KEY,
    X_CODE: process.env.X_CODE,
    CLIENT_NAME: process.env.CLIENT_NAME,
    HOST_URL: process.env.HOST_URL,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
