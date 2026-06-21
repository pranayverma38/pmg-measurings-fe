import defaultProduct from "./default";
import ecoSeries from "./eco-series";
import fibreglassGoldSeries from "./fibreglass-gold-series";
import glassSeries from "./glass-series";
import gripSeries from "./grip-series";
import linexSeries from "./linex-series";
import lockSeries from "./lock-series";
import lockliineSeries from "./lockliine-series";
import logoSeries from "./logo-series";
import masterSeries from "./master-series";
import newEcoSeries from "./new-eco-series";
import popSeries from "./pop-series";
import popShineSeries from "./pop-shine-series";
import primeSeries from "./prime-series";
import sideLockSeries from "./side-lock-series";
import signatureSeries from "./signature-series";
import spiritLevel from "./spirit-level";
import steelTape from "./steel-tape";
import { productSlug, type ProductSeries } from "./series";
import type { ProductDetails } from "./types";

export type { ProductColor, ProductDetails, ProductSpec } from "./types";
export {
    PRODUCT_SERIES,
    getProductBySlug,
    productHref,
    productSlug,
    type ProductSeries,
} from "./series";

const PRODUCT_DETAILS_BY_SLUG: Record<string, ProductDetails> = {
    [ecoSeries.slug]: ecoSeries,
    [fibreglassGoldSeries.slug]: fibreglassGoldSeries,
    [glassSeries.slug]: glassSeries,
    [gripSeries.slug]: gripSeries,
    [linexSeries.slug]: linexSeries,
    [lockSeries.slug]: lockSeries,
    [lockliineSeries.slug]: lockliineSeries,
    [logoSeries.slug]: logoSeries,
    [masterSeries.slug]: masterSeries,
    [newEcoSeries.slug]: newEcoSeries,
    [popSeries.slug]: popSeries,
    [popShineSeries.slug]: popShineSeries,
    [primeSeries.slug]: primeSeries,
    [sideLockSeries.slug]: sideLockSeries,
    [signatureSeries.slug]: signatureSeries,
    [spiritLevel.slug]: spiritLevel,
    [steelTape.slug]: steelTape,
};

export function getProductDetails(slug: string): ProductDetails | undefined {
    return PRODUCT_DETAILS_BY_SLUG[slug];
}

export function getProductDetailsBySeries(series: ProductSeries): ProductDetails {
    return getProductDetails(productSlug(series)) ?? defaultProduct;
}

export function getAllProductDetails(): ProductDetails[] {
    return Object.values(PRODUCT_DETAILS_BY_SLUG);
}
