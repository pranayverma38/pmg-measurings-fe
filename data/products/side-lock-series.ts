import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "side-lock-series",
    series: "SIDE LOCK SERIES",
    title: "PMG SIDE LOCK SERIES",
    tagline: "Effortless control. Reliable precision.",
    excerpt:
        "Featuring a convenient side-lock design, SIDE LOCK SERIES combine effortless control, smooth operation, and dependable measuring accuracy.",
    description: [
        "Featuring a convenient side-lock design, the SIDE LOCK SERIES combine effortless control, smooth operation, and dependable measuring accuracy in a compact design.",
        "A high-accuracy blade and strong ABS case deliver consistent readings, while the smooth retraction mechanism keeps every pull and return fluid.",
        "Durable metal clip and belt attachment make this compact, lightweight series easy to carry and ready for everyday site work.",
    ],
    highlights: [
        "Side locking system",
        "Smooth retraction mechanism",
        "High accuracy blade",
        "Strong ABS case",
        "Durable metal clip & belt",
        "Compact & lightweight design",
    ],
    additionalInfo: [
        { label: "Available Sizes", value: "3m (16mm), 5m (19mm)" },
        { label: "Lock Type", value: "Side locking system" },
        { label: "Case", value: "Strong ABS" },
        { label: "Blade", value: "High accuracy" },
        { label: "Series", value: "SIDE LOCK SERIES" },
    ],
    sizes: ["3m (16mm)", "5m (19mm)"],
    colors: [{ hex: "#E3F2FD", title: "Blue & White" }],
};

export default product;
