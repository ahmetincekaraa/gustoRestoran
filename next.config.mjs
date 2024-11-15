/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  i18n: {
    locales: ['tr', 'en'],
    defaultLocale: 'tr',
    localeDetection:false,    
  },
};

export default nextConfig;
