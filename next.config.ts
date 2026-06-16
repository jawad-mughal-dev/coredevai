import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root to this project directory. Without this,
    // Turbopack can mistakenly infer a parent directory as the root
    // (e.g. if a lockfile/config exists higher up), which breaks
    // resolution of packages like `tailwindcss` from this project's
    // node_modules.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
