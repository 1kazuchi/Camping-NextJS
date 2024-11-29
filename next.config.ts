import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "15MB",
    },
    //reactStrictMode: true
  },
  reactStrictMode: false,
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'wthnzljbzubykhqcawwx.supabase.co'
      }
    ]
  }
};

export default nextConfig;
