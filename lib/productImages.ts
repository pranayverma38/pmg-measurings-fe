import fs from "fs";
import path from "path";
import { formatProductSize } from "@/lib/formatProductSize";

const PMG_PRODUCTS_DIR = path.join(process.cwd(), "public/assets/imgs/pmgproducts");

export const PRODUCT_IMAGE_FALLBACK = "/assets/imgs/logopmg/pmglogo.png";

/** Series that reuse another series' product image folder until dedicated assets exist. */
const PRODUCT_IMAGE_SOURCE: Record<string, string> = {
    "SIGNO SERIES": "SIGNATURE SERIES",
    "TREND SERIES": "ECO SERIES",
    "FIBREGLASS PRIME SERIES": "FIBREGLASS GOLD SERIES",
};

function productImageUrl(series: string, ...segments: string[]): string {
    const parts = [series, ...segments.filter(Boolean)].map((part) => encodeURIComponent(part));
    return `/assets/imgs/pmgproducts/${parts.join("/")}`;
}

function readImageFiles(dir: string): string[] {
    if (!fs.existsSync(dir)) {
        return [];
    }

    return fs.readdirSync(dir).filter((file) => /\.(png|jpe?g|webp)$/i.test(file));
}

function imageNumericKey(filename: string): number {
    const base = path.parse(filename).name;
    const digitsOnly = base.match(/^(\d+)$/);
    if (digitsOnly) {
        return Number(digitsOnly[1]);
    }

    const firstNumber = base.match(/(\d+)/);
    return firstNumber ? Number(firstNumber[1]) : Number.MAX_SAFE_INTEGER;
}

function sortImageFiles(files: string[]): string[] {
    return [...files].sort((a, b) => {
        const diff = imageNumericKey(a) - imageNumericKey(b);
        if (diff !== 0) {
            return diff;
        }

        return a.localeCompare(b, undefined, { numeric: true });
    });
}

function listImageFiles(dir: string): string[] {
    return sortImageFiles(readImageFiles(dir));
}

function getSizeFolders(seriesDir: string): string[] {
    if (!fs.existsSync(seriesDir)) {
        return [];
    }

    return fs
        .readdirSync(seriesDir, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name)
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

export function resolveProductImageSeries(series: string): string {
    return PRODUCT_IMAGE_SOURCE[series] ?? series;
}

export function getProductImagesForSize(series: string, size: string): string[] {
    const imageSeries = resolveProductImageSeries(series);
    const sizeFolder = formatProductSize(size);
    const dir = path.join(PMG_PRODUCTS_DIR, imageSeries, sizeFolder);

    return listImageFiles(dir).map((file) => productImageUrl(imageSeries, sizeFolder, file));
}

export function getProductImagesBySize(series: string, sizes: string[]): Record<string, string[]> {
    return Object.fromEntries(sizes.map((size) => [size, getProductImagesForSize(series, size)]));
}

export function getProductImages(series: string): string[] {
    const imageSeries = resolveProductImageSeries(series);
    const dir = path.join(PMG_PRODUCTS_DIR, imageSeries);

    const sizeFolders = getSizeFolders(dir);
    if (sizeFolders.length > 0) {
        return sizeFolders.flatMap((sizeFolder) =>
            listImageFiles(path.join(dir, sizeFolder)).map((file) =>
                productImageUrl(imageSeries, sizeFolder, file)
            )
        );
    }

    return listImageFiles(dir).map((file) => productImageUrl(imageSeries, file));
}

export function getProductCoverImage(series: string): string | undefined {
    const imageSeries = resolveProductImageSeries(series);
    const dir = path.join(PMG_PRODUCTS_DIR, imageSeries);

    const sizeFolders = getSizeFolders(dir);
    if (sizeFolders.length > 0) {
        for (const sizeFolder of sizeFolders) {
            const primaryFile = listImageFiles(path.join(dir, sizeFolder))[0];
            if (primaryFile) {
                return productImageUrl(imageSeries, sizeFolder, primaryFile);
            }
        }
        return undefined;
    }

    const primaryFile = listImageFiles(dir)[0];
    return primaryFile ? productImageUrl(imageSeries, primaryFile) : undefined;
}

export function getProductCoverUrl(series: string): string {
    return getProductCoverImage(series) ?? PRODUCT_IMAGE_FALLBACK;
}

export function buildProductCoverSlides(
    seriesList: readonly string[],
    altForSeries: (series: string) => string = (series) => `PMG ${series}`
): { src: string; alt: string }[] {
    return seriesList.map((series) => ({
        src: getProductCoverUrl(series),
        alt: altForSeries(series),
    }));
}
