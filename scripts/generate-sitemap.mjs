import { createClient } from "@sanity/client";
import { mkdirSync, writeFileSync } from "node:fs";

const SITE_URL = "https://pelcre.myworkss.workers.dev";

const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/projects", priority: "0.9", changefreq: "weekly" },
  { path: "/services", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.6", changefreq: "monthly" },
];

const client = createClient({
  projectId: "cmdikf3a",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function main() {
  let slugs = [];
  try {
    slugs = await client.fetch(
      `*[_type == "project" && defined(slug.current)].slug.current`,
    );
  } catch (err) {
    console.warn(
      "generate-sitemap: could not fetch project slugs from Sanity, falling back to static routes only.",
      err.message,
    );
  }

  const today = new Date().toISOString().slice(0, 10);

  const urlEntries = [
    ...STATIC_ROUTES.map(
      ({ path, priority, changefreq }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
    ),
    ...slugs.map(
      (slug) => `  <url>
    <loc>${SITE_URL}/projects/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`,
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.join("\n")}
</urlset>
`;

  mkdirSync("public", { recursive: true });
  writeFileSync("public/sitemap.xml", xml, "utf-8");
  console.log(`generate-sitemap: wrote ${urlEntries.length} URLs to public/sitemap.xml`);
}

main();
