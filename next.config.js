/** @type {import('next').NextConfig} */
const withSass = require("@zeit/next-sass");
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};


module.exports = nextConfig;
