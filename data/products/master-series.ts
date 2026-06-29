import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "master-series",
    series: "MASTER SERIES",
    title: "PMG MASTER SERIES",
    tagline: "Measure with confidence.",
    excerpt:
        "Built for reliable performance, MASTER SERIES combine lasting durability with precise accuracy for confident measuring every time.",
    description: [
        "Built for reliable performance, MASTER SERIES combine lasting durability with precise accuracy for confident measuring every time.",
        "A strong ABS case, smooth retraction mechanism, and triple rivet hook deliver dependable results on site after site.",
        "Clear, accurate markings and a durable metal clip make MASTER SERIES a trusted choice for everyday professional measuring.",
    ],
    highlights: [
        "Strong ABS case",
        "Smooth retraction mechanism",
        "Triple rivet hook",
        "Durable metal clip & belt",
        "Clear & accurate markings",
        "Compact & lightweight design",
    ],
    additionalInfo: [
        { label: "Available Sizes", value: "3m (16mm), 5m (19mm)" },
        { label: "Case", value: "Strong ABS" },
        { label: "Hook", value: "Triple rivet" },
        { label: "Lock Type", value: "Smooth retraction mechanism" },
        { label: "Series", value: "MASTER SERIES" },
    ],
    sizes: ["3m (16mm)", "5m (19mm)"],
    colors: [{ hex: "#E3F2FD", title: "Blue & White" }],
};

export default product;
