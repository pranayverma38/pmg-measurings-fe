import { cpSync, existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = join(process.cwd(), "out");
const NOT_FOUND_FILE = join(OUT_DIR, "404.html");

const ALLOWED_STATIC_SEGMENTS = new Set([
    "home",
    "about-1",
    "distributors",
    "products",
    "contact-1",
]);

const SKIP_DIRS = new Set(["assets", "scripts", "data"]);

function productSlug(name) {
    return name.toLowerCase().replace(/\s+/g, "-");
}

function loadProductSlugs() {
    const seriesFile = join(process.cwd(), "data/products/series.ts");
    const source = readFileSync(seriesFile, "utf8");
    const arrayMatch = source.match(/export const PRODUCT_SERIES = \[([\s\S]*?)\] as const;/);

    if (!arrayMatch) {
        throw new Error("Could not read PRODUCT_SERIES from data/products/series.ts");
    }

    const seriesNames = [...arrayMatch[1].matchAll(/"([^"]+)"/g)].map((match) => match[1]);
    return new Set(seriesNames.map(productSlug));
}

function isAllowedRoute(routePath, productSlugs) {
    const segments = routePath.split("/").filter(Boolean);

    if (segments.length === 0) {
        return true;
    }

    if (segments.length === 1) {
        return ALLOWED_STATIC_SEGMENTS.has(segments[0]);
    }

    if (segments.length === 2 && segments[0] === "products") {
        return productSlugs.has(segments[1]);
    }

    return false;
}

function replaceWithNotFound(targetFile) {
    if (!existsSync(targetFile)) {
        return;
    }

    cpSync(NOT_FOUND_FILE, targetFile);
}

function pruneFlatHtmlFiles(baseDir, routePrefix, productSlugs) {
    for (const entry of readdirSync(baseDir)) {
        if (!entry.endsWith(".html")) {
            continue;
        }

        if (entry === "404.html" || entry === "_not-found.html") {
            continue;
        }

        const segment = entry.replace(/\.html$/, "");
        const routePath =
            routePrefix.length === 0
                ? segment === "index"
                    ? ""
                    : segment
                : `${routePrefix}/${segment}`;

        if (!isAllowedRoute(routePath, productSlugs)) {
            replaceWithNotFound(join(baseDir, entry));
            console.log(`Blocked route: /${routePath || ""}`);
        }
    }
}

function walkRouteDirectories(currentDir, routePath, productSlugs) {
    for (const entry of readdirSync(currentDir)) {
        const fullPath = join(currentDir, entry);
        const stat = statSync(fullPath);

        if (!stat.isDirectory()) {
            continue;
        }

        if (entry.startsWith("_") || SKIP_DIRS.has(entry)) {
            continue;
        }

        const nextRoutePath = routePath ? `${routePath}/${entry}` : entry;

        if (entry === "products") {
            pruneFlatHtmlFiles(fullPath, "products", productSlugs);

            for (const productEntry of readdirSync(fullPath)) {
                const productPath = join(fullPath, productEntry);
                if (!statSync(productPath).isDirectory()) {
                    continue;
                }

                if (!productSlugs.has(productEntry)) {
                    replaceWithNotFound(join(productPath, "index.html"));
                    console.log(`Blocked route: /${nextRoutePath}/${productEntry}`);
                }
            }

            continue;
        }

        if (!isAllowedRoute(nextRoutePath, productSlugs)) {
            replaceWithNotFound(join(fullPath, "index.html"));
            console.log(`Blocked route: /${nextRoutePath}`);
            continue;
        }

        walkRouteDirectories(fullPath, nextRoutePath, productSlugs);
    }
}

function main() {
    if (!existsSync(OUT_DIR)) {
        console.warn("No out/ directory found. Skipping static export pruning.");
        return;
    }

    if (!existsSync(NOT_FOUND_FILE)) {
        throw new Error("Expected out/404.html to exist before pruning disallowed routes.");
    }

    const productSlugs = loadProductSlugs();
    pruneFlatHtmlFiles(OUT_DIR, "", productSlugs);
    walkRouteDirectories(OUT_DIR, "", productSlugs);
}

main();
