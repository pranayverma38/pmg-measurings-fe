import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "linex-series",
    series: "LINEX SERIES",
    title: "PMG LINEX SERIES",
    tagline: "Transparent by design. Precise by nature.",
    excerpt:
        "Featuring a transparent body and secure locking system, the LINEX SERIES delivers smooth operation and reliable measuring accuracy.",
    description: [
        "Featuring a transparent body and secure locking system, the LINEX SERIES delivers smooth operation and reliable measuring accuracy.",
        "A strong locking system and smooth retraction mechanism keep every measurement steady, while the heavy-duty hook and durable metal clip stand up to daily trade use.",
        "Compact and ergonomic, LINEX is built for professionals who want clear visibility and dependable precision on every job.",
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
        { label: "Lock Type", value: "Strong locking system" },
        { label: "Hook", value: "Heavy-duty hook" },
        { label: "Series", value: "LINEX SERIES" },
    ],
    sizes: ["3m (19mm)", "5m (19mm)"],
    colors: [
        { hex: "#FFFFFF", title: "White" },
        { hex: "#D32F2F", title: "Red" },
        { hex: "#F5C518", title: "Yellow" },
    ],
};

export default product;
