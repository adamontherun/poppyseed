import type { MetadataRoute } from "next";
import { DOCS, SITE } from "../lib/docs";

export default function sitemap(): MetadataRoute.Sitemap {
	return ["/", "/docs", ...DOCS.map((d) => `/docs/${d.slug}`), "/travel"].map((path) => ({ url: `${SITE}${path}` }));
}
