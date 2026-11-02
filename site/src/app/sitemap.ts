import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://anvayan.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, priority: 1 },
    { url: `${SITE_URL}/contact`, priority: 0.8 },
    { url: `${SITE_URL}/privacy`, priority: 0.3 },
    { url: `${SITE_URL}/terms`, priority: 0.3 },
  ];
}
