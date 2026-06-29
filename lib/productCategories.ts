import type { ProductSeries } from "@/data/products";

export type ProductCategory = {
    id: string;
    label: string;
    shortLabel: string;
    description: string;
    series: ProductSeries[];
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
    {
        id: "professional",
        label: "Professional Series",
        shortLabel: "Professional",
        description: "Heavy-duty measuring tapes engineered for daily trade and industrial use.",
        series: [
            "MASTER SERIES",
            "PRIME SERIES",
            "SIGNATURE SERIES",
            "LOCK SERIES",
            "LOCKLIINE SERIES",
            "SIDE LOCK SERIES",
        ],
    },
    {
        id: "everyday",
        label: "Everyday & Value",
        shortLabel: "Everyday",
        description: "Reliable, accessible measuring solutions for home, DIY, and general trade.",
        series: ["ECO SERIES", "NEW ECO SERIES", "POP SERIES", "POP SHINE SERIES", "LOGO SERIES"],
    },
    {
        id: "specialty",
        label: "Specialty Tapes",
        shortLabel: "Specialty",
        description: "Material-specific blades designed for unique applications and environments.",
        series: [
            "FIBREGLASS GOLD SERIES",
            "GLASS SERIES",
            "GRIP SERIES",
            "LINEX SERIES",
            "STEEL TAPE",
        ],
    },
    {
        id: "levels",
        label: "Levels & Alignment",
        shortLabel: "Levels",
        description: "Precision levelling tools for construction, cabinetry, and installation work.",
        series: ["SPIRIT LEVEL"],
    },
];

export function getCategoryForSeries(series: ProductSeries): ProductCategory | undefined {
    return PRODUCT_CATEGORIES.find((category) => category.series.includes(series));
}

export function getRelatedSeries(series: ProductSeries, limit = 4): ProductSeries[] {
    const category = getCategoryForSeries(series);
    if (!category) return [];

    return category.series.filter((item) => item !== series).slice(0, limit);
}
