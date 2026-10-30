import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/work`, priority: 0.8 },
    { url: `${base}/journal`, priority: 0.8 },
    ...projects.map((p) => ({ url: `${base}/work/${p.slug}`, priority: 0.7 })),
    ...articles.map((a) => ({ url: `${base}/journal/${a.slug}`, lastModified: a.date, priority: 0.6 })),
  ];
}
