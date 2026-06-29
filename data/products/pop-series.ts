import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "pop-series",
    series: "POP SERIES",
    title: "PMG POP SERIES",
    tagline: "Locks accuracy in place.",
    excerpt:
        "Designed for professionals who demand precision and convenience, POP SERIES combine an automatic locking system with effortless blade retraction.",
    description: [
        "Designed for professionals who demand precision and convenience. POP SERIES combine an Automatic Locking System with effortless blade retraction for smooth operation and reliable performance every time.",
        "Heavy-duty ABS housing and a triple-rivet reinforced hook provide durability on demanding job sites.",
        "The quick lock release button gives you fast, confident control when measuring and marking.",
    ],
    highlights: [
        "Heavy-duty ABS housing",
        "Automatic locking system",
        "Smooth retraction mechanism",
        "Quick lock release button",
        "Durable metal clip & belt",
        "Triple-rivet reinforced hook",
    ],
    additionalInfo: [
        { label: "Available Sizes", value: "3m (16mm), 5m (19mm)" },
        { label: "Lock Type", value: "Automatic locking system" },
        { label: "Release", value: "Quick lock release button" },
        { label: "Case", value: "Heavy-duty ABS housing" },
        { label: "Series", value: "POP SERIES" },
    ],
    sizes: ["3m (16mm)", "5m (19mm)"],
    colors: [
        { hex: "#F57C00", title: "Orange" },
        { hex: "#D32F2F", title: "Red" },
        { hex: "#FFFFFF", title: "White" },
    ],
};

export default product;
