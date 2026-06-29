import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "eco-series",
    series: "ECO SERIES",
    title: "PMG ECO SERIES",
    tagline: "Everyday accuracy, everyday value.",
    excerpt:
        "Simple, durable, and engineered for dependable performance — ECO SERIES delivers reliable accuracy for everyday measuring needs.",
    description: [
        "Simple, durable, and engineered for dependable performance. ECO SERIES delivers reliable accuracy and lasting functionality, making it an ideal choice for everyday measuring needs.",
        "A high-accuracy blade, strong ABS case, and smooth retraction mechanism provide consistent results without unnecessary complexity.",
        "Triple rivet hook reinforcement and a durable metal clip ensure this value-focused series holds up to regular professional use.",
    ],
    highlights: [
        "High accuracy blade",
        "Strong ABS case",
        "Smooth retraction mechanism",
        "Triple rivet hook",
        "Durable metal clip & belt",
        "Assured quality",
    ],
    additionalInfo: [
        { label: "Available Sizes", value: "3m (16mm), 5m (19mm)" },
        { label: "Case", value: "Strong ABS" },
        { label: "Hook", value: "Triple rivet" },
        { label: "Blade", value: "High accuracy" },
        { label: "Series", value: "ECO SERIES" },
    ],
    sizes: ["3m (16mm)", "5m (19mm)"],
    colors: [
        { hex: "#E3F2FD", title: "Blue & White" },
        { hex: "#D32F2F", title: "Red" },
        { hex: "#F5C518", title: "Yellow" },
        { hex: "#2E7D32", title: "Green" },
    ],
};

export default product;
