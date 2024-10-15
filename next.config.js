// next.config.js
module.exports = {
  output: "export", // This tells Next.js to output static files.
  distDir: "out", // Set output folder to 'out' (default for static exports).
  images: {
    unoptimized: true, // Disable Next.js image optimization for static export (useful for GitHub Pages).
  },
  trailingSlash: true, // Add a trailing slash to routes (optional, helps with routing in GitHub Pages).
  assetPrefix: "./", // Add a relative path prefix for assets (important for GitHub Pages).
};
