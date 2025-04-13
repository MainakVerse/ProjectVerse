/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optional: if you're using static export (SSG only)
  // output: 'export',

  // Optional: add custom extensions if you ever use `.mdx` or `.page.tsx` in the future
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  // Optional but helps with SEO via headers or redirects later
  reactStrictMode: true,
  trailingSlash: true, // SEO-friendly URLs: /about/ instead of /about

  // Recommended for image optimization (auto by Next.js)
  images: {
    domains: ['projectverse.shop'], // Add image CDN or hosting domain if needed
  },
};

export default nextConfig;
