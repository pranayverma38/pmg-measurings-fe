import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "glass-series",
    series: "GLASS SERIES",
    title: "PMG GLASS SERIES",
    tagline: "Transparent by design. Precise by nature.",
    excerpt:
        "Featuring a transparent body and smooth single-lock mechanism, GLASS SERIES delivers clear visibility and reliable measuring accuracy.",
    description: [
        "Featuring a transparent body and smooth single-lock mechanism, the GLASS SERIES delivers clear visibility and reliable measuring accuracy.",
        "The transparent ABS case lets you monitor the blade and mechanism at a glance, while the strong locking system holds measurements securely.",
        "Heavy-duty hook, durable metal clip, and compact ergonomic design make GLASS SERIES a distinctive choice for professionals who value visibility and precision.",
    ],
    highlights: [
        "Transparent ABS case",
        "Strong locking system",
        "Smooth retraction mechanism",
        "Heavy-duty hook",
        "Durable metal clip & belt",
        "Compact & ergonomic design",
    ],
    additionalInfo: [
        { label: "Available Sizes", value: "3m (19mm), 5m (19mm)" },
        { label: "Case", value: "Transparent ABS" },
        { label: "Lock Type", value: "Smooth single-lock mechanism" },
        { label: "Hook", value: "Heavy-duty" },
        { label: "Series", value: "GLASS SERIES" },
    ],
    sizes: ["3m (19mm)", "5m (19mm)"],
    colors: [
        { hex: "#D32F2F", title: "Red" },
        { hex: "#F5C518", title: "Yellow" },
        { hex: "#2E7D32", title: "Green" },
    ],
};

export default product;
