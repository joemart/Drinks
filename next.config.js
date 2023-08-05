/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns:[
      {
      protocol: "https",
      hostname: "thecocktaildb.com/api/json/v1/1",
      port: '',
      pathname:"/*"
      }
    ],
    loader:"custom"
  }
}

module.exports = nextConfig