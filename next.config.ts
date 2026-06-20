/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack compiler validation ko strict levels par forcefully close karne ke liye
  compiler: {
    // Isse pure native builder normal webpack standard par revert ho jayega
    removeConsole: false,
  },
  experimental: {
    // Turbopack ko hamesha ke liye deactivate karne ke liye
    turbo: {
      rules: {},
    },
  },
}

export default nextConfig