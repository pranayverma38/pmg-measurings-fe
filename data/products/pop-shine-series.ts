import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "pop-shine-series",
    series: "POP SHINE SERIES",
    title: "PMG POP SHINE SERIES",
    tagline: "Transparency meets accuracy.",
    excerpt:
        "Featuring a transparent ABS case and automatic locking system, POP SHINE SERIES delivers precision and reliable performance in a modern design.",
    description: [
        "Featuring a Transparent ABS Case and Automatic Locking System, POP SHINE SERIES delivers precision, convenience, and reliable performance in a modern, eye-catching design.",
        "The transparent housing lets you see the mechanism at work, while the smooth retraction mechanism and quick lock release button keep operation effortless.",
        "Triple-rivet reinforced hook and durable metal clip ensure lasting strength for everyday professional use.",
    ],
    highlights: [
        "Transparent ABS case",
        "Automatic locking system",
        "Smooth retraction mechanism",
        "Quick lock release button",
        "Durable metal clip & belt",
        "Triple-rivet reinforced hook",
    ],
    additionalInfo: [
        { label: "Available Sizes", value: "3m (16mm), 5m (19mm)" },
        { label: "Case", value: "Transparent ABS" },
        { label: "Lock Type", value: "Automatic locking system" },
        { label: "Release", value: "Quick lock release button" },
        { label: "Series", value: "POP SHINE SERIES" },
    ],
    sizes: ["3m (16mm)", "5m (19mm)"],
    colors: [
        { hex: "#D32F2F", title: "Red" },
        { hex: "#1E4A8C", title: "Blue" },
        { hex: "#FFFFFF", title: "White" },
    ],
};

export default product;
