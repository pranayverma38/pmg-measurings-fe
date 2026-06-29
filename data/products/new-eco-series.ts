import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "new-eco-series",
    series: "NEW ECO SERIES",
    title: "PMG NEW ECO SERIES",
    tagline: "Built for everyday precision.",
    excerpt:
        "A trusted measuring tape engineered for everyday professionals, delivering dependable accuracy, durable construction, and smooth performance.",
    description: [
        "A trusted measuring tape engineered for everyday professionals. The NEW ECO SERIES delivers dependable accuracy, durable construction, and smooth performance in every measurement.",
        "Heavy-duty ABS housing and a bottom lock system provide secure, stable readings, while the high-accuracy blade ensures consistent results.",
        "With a durable metal clip and smooth retraction mechanism, NEW ECO SERIES is engineered for reliable performance day in and day out.",
    ],
    highlights: [
        "Bottom lock system",
        "Durable metal clip & belt",
        "Heavy-duty ABS housing",
        "Smooth retraction mechanism",
        "High accuracy blade",
        "Reliable performance",
    ],
    additionalInfo: [
        { label: "Available Sizes", value: "3m (16mm), 5m (19mm)" },
        { label: "Case", value: "Heavy-duty ABS housing" },
        { label: "Lock Type", value: "Bottom lock system" },
        { label: "Blade", value: "High accuracy" },
        { label: "Series", value: "NEW ECO SERIES" },
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
