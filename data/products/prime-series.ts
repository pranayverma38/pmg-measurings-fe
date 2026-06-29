import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "prime-series",
    series: "PRIME SERIES",
    title: "PMG PRIME SERIES",
    tagline: "Precision at its prime.",
    excerpt:
        "Designed to be the benchmark of everyday measuring, PRIME SERIES combine dependable accuracy, smooth operation, and lasting durability.",
    description: [
        "Designed to be the benchmark of everyday measuring. The PRIME SERIES combine dependable accuracy, smooth operation, and lasting durability in a refined and versatile design.",
        "Heavy-duty ABS housing and a triple rivet hook provide the strength needed for regular professional use.",
        "An ergonomic compact design and durable metal clip make PRIME SERIES a refined choice for tradespeople who expect more from their tools.",
    ],
    highlights: [
        "Heavy-duty ABS housing",
        "Smooth retraction mechanism",
        "Durable metal clip & belt",
        "Triple rivet hook",
        "Ergonomic compact design",
        "High accuracy blade",
    ],
    additionalInfo: [
        { label: "Available Sizes", value: "3m (16mm), 5m (19mm)" },
        { label: "Case", value: "Heavy-duty ABS housing" },
        { label: "Hook", value: "Triple rivet" },
        { label: "Blade", value: "High accuracy" },
        { label: "Series", value: "PRIME SERIES" },
    ],
    sizes: ["3m (16mm)", "5m (19mm)"],
    colors: [{ hex: "#E3F2FD", title: "Blue & White" }],
};

export default product;
