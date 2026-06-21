import fs from "fs";
import path from "path";

const PMG_PRODUCTS_DIR = path.join(process.cwd(), "public/assets/imgs/pmgproducts");

function productImageUrl(series: string, file: string): string {
    return `/assets/imgs/pmgproducts/${encodeURIComponent(series)}/${file}`;
}

export function getProductImages(series: string): string[] {
    const dir = path.join(PMG_PRODUCTS_DIR, series);

    if (!fs.existsSync(dir)) {
        return [];
    }

    return fs
        .readdirSync(dir)
        .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
        .sort()
        .map((file) => productImageUrl(series, file));
}

export function getProductCoverImage(series: string): string | undefined {
    return getProductImages(series)[0];
}
