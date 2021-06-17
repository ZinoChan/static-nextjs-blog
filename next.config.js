const debug = process.env.NODE_ENV !== 'production'

// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {}],
  {
    assetPrefix: !debug ? '/static-nextjs-blog/' : '',
  }

]);