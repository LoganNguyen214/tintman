import type { NextConfig } from "next";

// Set only in the GitHub Pages Actions build (see .github/workflows/deploy.yml),
// since the project page is served at /tintman/, not the domain root.
// Remove this env var from the workflow once a custom domain is attached.
const basePath = process.env.GITHUB_PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
};

export default nextConfig;
