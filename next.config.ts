// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/Component/Privacy', // The old route
        destination: '/',   // The new route (home page)
        permanent: true,    // Indicates whether the redirect is permanent (HTTP 308) or temporary (HTTP 307)
      },
    ];
  },
};
 
