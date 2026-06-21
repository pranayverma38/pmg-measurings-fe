import type { ProductSeries } from "./series";

export type ProductColor = {
    hex: string;
    title: string;
};

export type ProductSpec = {
    label: string;
    value: string;
};

export type ProductDetails = {
    slug: string;
    series: ProductSeries;
    title: string;
    excerpt: string;
    description: string[];
    additionalInfo: ProductSpec[];
    sizes: string[];
    colors: ProductColor[];
};
