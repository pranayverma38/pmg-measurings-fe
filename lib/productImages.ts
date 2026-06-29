import fs from "fs";
import path from "path";

const PMG_PRODUCTS_DIR = path.join(process.cwd(), "public/assets/imgs/pmgproducts");

/** Series that reuse another series' product image folder until dedicated assets exist. */
const PRODUCT_IMAGE_SOURCE: Record<string, string> = {
    "SIGNO SERIES": "SIGNATURE SERIES",
    "TREND SERIES": "ECO SERIES",
    "FIBREGLASS PRIME SERIES": "FIBREGLASS GOLD SERIES",
};

function productImageUrl(series: string, file: string): string {
    return `/assets/imgs/pmgproducts/${encodeURIComponent(series)}/${file}`;
}

export function resolveProductImageSeries(series: string): string {
    return PRODUCT_IMAGE_SOURCE[series] ?? series;
}

export function getProductImages(series: string): string[] {
    const imageSeries = resolveProductImageSeries(series);
    const dir = path.join(PMG_PRODUCTS_DIR, imageSeries);

    if (!fs.existsSync(dir)) {
        return [];
    }

    return fs
        .readdirSync(dir)
        .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
        .sort()
        .map((file) => productImageUrl(imageSeries, file));
}

export function getProductCoverImage(series: string): string | undefined {
    return getProductImages(series)[0];
}
