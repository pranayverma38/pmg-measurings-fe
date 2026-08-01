import fs from "fs";
import path from "path";
import { formatProductSize } from "@/lib/formatProductSize";

const PMG_PRODUCTS_DIR = path.join(process.cwd(), "public/assets/imgs/pmgproducts");

export const PRODUCT_IMAGE_FALLBACK = "/assets/imgs/logopmg/pmglogo.png";
export const PRODUCT_COMING_SOON_IMAGE = "/assets/imgs/pmgproducts/coming-soon.svg";

/** Series that show a Coming Soon placeholder instead of product photos. */
const COMING_SOON_SERIES = new Set([
    "SIGNO SERIES",
    "TREND SERIES",
    "FIBREGLASS PRIME SERIES",
]);

function productImageUrl(series: string, ...segments: string[]): string {
    const parts = [series, ...segments.filter(Boolean)].map((part) => encodeURIComponent(part));
    return `/assets/imgs/pmgproducts/${parts.join("/")}`;
}

function readImageFiles(dir: string): string[] {
    if (!fs.existsSync(dir)) {
        return [];
    }

    return fs.readdirSync(dir).filter((file) => /\.(png|jpe?g|webp|svg)$/i.test(file));
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

function normalizeProductFolderName(value: string): string {
    return value.trim().toLowerCase();
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

function orderFolders(series: string, parentSegments: string[], folders: string[]): string[] {
    if (series === "SPIRIT LEVEL" && parentSegments.length === 1) {
        return [...folders].sort((a, b) => {
            const aScore = normalizeProductFolderName(a) === "yellow" ? 0 : 1;
            const bScore = normalizeProductFolderName(b) === "yellow" ? 0 : 1;

            if (aScore !== bScore) {
                return aScore - bScore;
            }

            return a.localeCompare(b, undefined, { numeric: true });
        });
    }

    return folders;
}

function listProductImageUrlsRecursively(
    dir: string,
    series: string,
    parentSegments: string[] = []
): string[] {
    if (!fs.existsSync(dir)) {
        return [];
    }

    const directImages = listImageFiles(dir).map((file) => productImageUrl(series, ...parentSegments, file));
    const childFolders = orderFolders(series, parentSegments, getSizeFolders(dir));

    return [
        ...directImages,
        ...childFolders.flatMap((folder) =>
            listProductImageUrlsRecursively(path.join(dir, folder), series, [...parentSegments, folder])
        ),
    ];
}

export function isComingSoonSeries(series: string): boolean {
    return COMING_SOON_SERIES.has(series);
}

export function resolveProductImageSeries(series: string): string {
    return series;
}

export function getProductImagesForSize(series: string, size: string): string[] {
    if (isComingSoonSeries(series)) {
        return [PRODUCT_COMING_SOON_IMAGE];
    }

    const imageSeries = resolveProductImageSeries(series);
    const sizeFolder = formatProductSize(size);
    const dir = path.join(PMG_PRODUCTS_DIR, imageSeries, sizeFolder);

    return listProductImageUrlsRecursively(dir, imageSeries, [sizeFolder]);
}

export function getProductImagesBySize(series: string, sizes: string[]): Record<string, string[]> {
    return Object.fromEntries(sizes.map((size) => [size, getProductImagesForSize(series, size)]));
}

export function getProductImagesForColor(series: string, size: string, color: string): string[] {
    if (isComingSoonSeries(series)) {
        return [PRODUCT_COMING_SOON_IMAGE];
    }

    const imageSeries = resolveProductImageSeries(series);
    const sizeFolder = formatProductSize(size);
    const colorFolder = normalizeProductFolderName(color);
    const dir = path.join(PMG_PRODUCTS_DIR, imageSeries, sizeFolder, colorFolder);

    return listProductImageUrlsRecursively(dir, imageSeries, [sizeFolder, colorFolder]);
}

export function getProductImagesByColor(
    series: string,
    size: string,
    colors: string[]
): Record<string, string[]> {
    return Object.fromEntries(
        colors.map((color) => [normalizeProductFolderName(color), getProductImagesForColor(series, size, color)])
    );
}

export function getProductImages(series: string): string[] {
    if (isComingSoonSeries(series)) {
        return [PRODUCT_COMING_SOON_IMAGE];
    }

    const imageSeries = resolveProductImageSeries(series);
    const dir = path.join(PMG_PRODUCTS_DIR, imageSeries);
    return listProductImageUrlsRecursively(dir, imageSeries);
}

export function getProductCoverImage(series: string): string | undefined {
    if (isComingSoonSeries(series)) {
        return PRODUCT_COMING_SOON_IMAGE;
    }

    return getProductImages(series)[0];
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
