// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
      MONGODB_URI: process.env.MONGODB_URI,
    },
    images: {
      domains: ["placehold.co", "lh3.googleusercontent.com","res.cloudinary.com"],
    },
    
  };
  
  export default nextConfig;
  