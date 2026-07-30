import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project — a sibling pnpm-workspace.yaml
  // one level up (unrelated to this site) was otherwise being inferred as root.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
