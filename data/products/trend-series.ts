import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "trend-series",
    series: "TREND SERIES",
    title: "TREND by PMG",
    tagline: "Measure with confidence.",
    excerpt:
        "Engineered for convenience and reliability, TREND SERIES features a strong blade, smooth retraction, and durable construction for accurate measurements.",
    description: [
        "Engineered for convenience and reliability, the TREND SERIES by PMG features a strong blade, smooth retraction system, and durable construction ensuring accurate measurements.",
        "An impact-resistant ABS case protects the mechanism on active job sites, while clear, easy-to-see markings reduce reading errors.",
        "Triple rivet hook reinforcement and a durable metal clip deliver the lasting strength tradespeople need from an everyday measuring tape.",
    ],
    highlights: [
        "Impact resistant ABS case",
        "Strong & accurate blade",
        "Smooth retraction mechanism",
        "Durable metal clip & belt",
        "Triple rivet hook for durability",
        "Clear & easy to see markings",
    ],
    additionalInfo: [
        { label: "Available Sizes", value: "3m (19mm), 5m (19mm)" },
        { label: "Case", value: "Impact resistant ABS" },
        { label: "Hook", value: "Triple rivet" },
        { label: "Markings", value: "Clear & easy to see" },
        { label: "Series", value: "TREND SERIES" },
    ],
    sizes: ["3m (19mm)", "5m (19mm)"],
    colors: [
        { hex: "#8B1A1A", title: "Red & Black" },
        { hex: "#E3F2FD", title: "Blue & White" },
    ],
};

export default product;
