export const PRODUCT_SERIES = [
    "ECO SERIES",
    "FIBREGLASS GOLD SERIES",
    "GLASS SERIES",
    "GRIP SERIES",
    "LINEX SERIES",
    "LOCK SERIES",
    "LOCKLIINE SERIES",
    "LOGO SERIES",
    "MASTER SERIES",
    "NEW ECO SERIES",
    "POP SERIES",
    "POP SHINE SERIES",
    "PRIME SERIES",
    "SIDE LOCK SERIES",
    "SIGNATURE SERIES",
    "SPIRIT LEVEL",
    "STEEL TAPE",
] as const;

export type ProductSeries = (typeof PRODUCT_SERIES)[number];

export function productSlug(name: string): string {
    return name.toLowerCase().replace(/\s+/g, "-");
}

export function productHref(name: string): string {
    return `/products/${productSlug(name)}`;
}

export function getProductBySlug(slug: string): ProductSeries | undefined {
    return PRODUCT_SERIES.find((series) => productSlug(series) === slug);
}
