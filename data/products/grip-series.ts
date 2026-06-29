import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "grip-series",
    series: "GRIP SERIES",
    title: "PMG GRIP SERIES",
    tagline: "Every measure starts with a better grip.",
    excerpt:
        "Engineered for maximum control, GRIP SERIES feature an ergonomic grip and triple-lock system for precise, secure measuring.",
    description: [
        "Engineered for maximum control. GRIP SERIES feature an ergonomic grip and Triple-Lock System for precise, secure, and confident measuring.",
        "Heavy-duty ABS housing and a triple rivet hook provide the durability professionals expect on active job sites.",
        "Smooth retraction and a durable metal clip complete a design focused on comfort, control, and reliable accuracy.",
    ],
    highlights: [
        "Heavy-duty ABS housing",
        "Triple lock control system",
        "Ergonomic grip case",
        "Durable metal clip & belt",
        "Smooth retraction mechanism",
        "Triple rivet hook",
    ],
    additionalInfo: [
        { label: "Available Sizes", value: "3m (16mm), 5m (19mm)" },
        { label: "Grip", value: "Ergonomic grip case" },
        { label: "Lock Type", value: "Triple lock control system" },
        { label: "Case", value: "Heavy-duty ABS housing" },
        { label: "Series", value: "GRIP SERIES" },
    ],
    sizes: ["3m (16mm)", "5m (19mm)"],
    colors: [
        { hex: "#D32F2F", title: "Red" },
        { hex: "#F5C518", title: "Yellow" },
    ],
};

export default product;
