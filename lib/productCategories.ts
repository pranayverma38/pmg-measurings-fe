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
        id: "measuring-tapes",
        label: "Measuring Tapes",
        shortLabel: "Measuring Tapes",
        description: "Precision measuring tapes for trade, industry, and everyday use.",
        series: [
            "MASTER SERIES",
            "PRIME SERIES",
            "SIGNATURE SERIES",
            "SIGNO SERIES",
            "LOCK SERIES",
            "LOCKLIINE SERIES",
            "SIDE LOCK SERIES",
            "ECO SERIES",
            "NEW ECO SERIES",
            "POP SERIES",
            "POP SHINE SERIES",
            "LOGO SERIES",
            "TREND SERIES",
            "GLASS SERIES",
            "GRIP SERIES",
            "LINEX SERIES",
            "STEEL TAPE",
        ],
    },
    {
        id: "fiberglass-tapes",
        label: "Fiberglass Tapes",
        shortLabel: "Fiberglass Tapes",
        description: "Long-distance fibreglass measuring tapes for surveying and large-scale layout.",
        series: ["FIBREGLASS GOLD SERIES", "FIBREGLASS PRIME SERIES"],
    },
    {
        id: "spirit-levels",
        label: "Spirit Levels",
        shortLabel: "Spirit Levels",
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
