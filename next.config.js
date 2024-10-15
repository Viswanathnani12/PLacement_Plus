const isGithubPages = process.env.NODE_ENV === "production";

const repoName = "PLacement_Plus"; // Replace with your GitHub repository name

module.exports = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: isGithubPages ? `/${repoName}/` : "/",
};
