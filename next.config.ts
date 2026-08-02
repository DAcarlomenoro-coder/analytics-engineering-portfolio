import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project — a sibling pnpm-workspace.yaml
  // one level up (unrelated to this site) was otherwise being inferred as root.
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Certification slugs were renamed to match the public/credentials/<slug>
  // asset folders (sql-associate → datacamp-sql-associate, etc.). Permanent
  // (308) redirects from the old routes in case either was shared/indexed
  // before the rename.
  async redirects() {
    return [
      {
        source: "/certifications/sql-associate",
        destination: "/certifications/datacamp-sql-associate",
        permanent: true,
      },
      {
        source: "/certifications/ai-for-data-analysts",
        destination: "/certifications/datacamp-ai-for-data-analysts",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
