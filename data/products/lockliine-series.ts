import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "lockliine-series",
    series: "LOCKLIINE SERIES",
    title: "PMG LOCKLINE SERIES",
    tagline: "Reliable locking. Dependable measuring.",
    excerpt:
        "Engineered for dependable performance, LOCKLINE SERIES combine a secure locking system, precise accuracy, and durable construction.",
    description: [
        "Engineered for dependable performance. LOCKLINE SERIES combine a secure locking system, precise accuracy, and durable construction, ensuring confidence in every measurement.",
        "A high-accuracy blade and strong ABS case provide the foundation for consistent readings, while the smooth retraction mechanism keeps operation fluid.",
        "Triple rivet hook reinforcement and a compact, ergonomic design make LOCKLINE a reliable partner for everyday trade work.",
    ],
    highlights: [
        "High accuracy blade",
        "Strong ABS case",
        "Smooth retraction mechanism",
        "Triple rivet hook",
        "Strong locking system",
        "Compact & ergonomic design",
    ],
    additionalInfo: [
        { label: "Available Sizes", value: "3m (19mm), 5m (19mm)" },
        { label: "Lock Type", value: "Strong locking system" },
        { label: "Case", value: "Strong ABS" },
        { label: "Hook", value: "Triple rivet" },
        { label: "Series", value: "LOCKLINE SERIES" },
    ],
    sizes: ["3m (19mm)", "5m (19mm)"],
    colors: [
        { hex: "#D32F2F", title: "Red" },
        { hex: "#2E7D32", title: "Green" },
        { hex: "#1E4A8C", title: "Blue" },
    ],
};

export default product;
