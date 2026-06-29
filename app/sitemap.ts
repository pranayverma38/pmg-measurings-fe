import type { MetadataRoute } from "next";
import { PRODUCT_SERIES, productSlug } from "@/data/products";
import { getAllowedStaticPaths } from "@/lib/allowedRoutes";

export const dynamic = "force-static";

const DEFAULT_SITE_URL = "https://pmgmeasurings.com";

function getSiteUrl(): string {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
    return siteUrl.replace(/\/+$/, "");
}

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = getSiteUrl();
    const now = new Date();

    const staticEntries: MetadataRoute.Sitemap = getAllowedStaticPaths().map((path) => ({
        url: path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: path === "/" || path === "/home" ? 1 : 0.8,
    }));

    const productEntries: MetadataRoute.Sitemap = PRODUCT_SERIES.map((series) => ({
        url: `${siteUrl}/products/${productSlug(series)}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticEntries, ...productEntries];
}
