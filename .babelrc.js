  
const env = require('./env-config');
module.exports = {
    'presets': [
      'next/babel'
    ],
    'plugins': [
      ['transform-define', env],
      ["react-optimized-image/plugin"]
    ]
  }