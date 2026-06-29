import { getProductBySlug } from "@/data/products";

export const ALLOWED_STATIC_PATHS = new Set([
    "/",
    "/home",
    "/about-1",
    "/distributors",
    "/products",
    "/contact-1",
]);

const PRODUCT_DETAIL_PATH = /^\/products\/([^/]+)$/;

export function isAllowedPath(pathname: string): boolean {
    const normalizedPath = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

    if (ALLOWED_STATIC_PATHS.has(normalizedPath)) {
        return true;
    }

    const productMatch = normalizedPath.match(PRODUCT_DETAIL_PATH);
    if (productMatch) {
        return getProductBySlug(productMatch[1]) !== undefined;
    }

    return false;
}

export function getAllowedStaticPaths(): string[] {
    return Array.from(ALLOWED_STATIC_PATHS);
}
