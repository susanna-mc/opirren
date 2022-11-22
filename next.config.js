/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  swcMinify: true,
  compiler: {
    emotion: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Fix issue with `node:` scheme / prefix
  webpack: (config, { webpack }) => {
    config.plugins.push(
      // Remove node: from import specifiers, because
      // Next.js does not yet support node: scheme
      // https://github.com/vercel/next.js/issues/28774
      new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
        resource.request = resource.request.replace(/^node:/, '');
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
