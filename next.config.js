/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com','cdn.pixabay.com',
    'static-assets-web.flixcart.com',"w0.peakpx.com"],
  }

}

module.exports = nextConfig
 