/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {};

console.log('test', path.join(__dirname, 'styles'));

module.exports = {
  ...nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
