// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const withTM = require('next-transpile-modules')(['@impulsogov/design-system']);

module.exports = withTM({
  reactStrictMode: true,
});