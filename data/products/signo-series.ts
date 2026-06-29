import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "signo-series",
    series: "SIGNO SERIES",
    title: "PMG SIGNO SERIES",
    tagline: "Engineered to stand apart.",
    excerpt:
        "As one of our flagship measuring tapes, SIGNO SERIES combines premium craftsmanship, precision engineering, and a water-resistant body.",
    description: [
        "As one of our flagship measuring tapes, the SIGNO Series combines premium craftsmanship, precision engineering, and a water-resistant body.",
        "It delivers exceptional accuracy, lasting durability, and dependable performance in all types of environment.",
        "Electroplated blade technology, a high-tension stainless steel spring, and triple rivet hook reinforcement set SIGNO apart as a premium professional tool.",
    ],
    highlights: [
        "Strong locking system",
        "Water resistant body",
        "High tension SS spring",
        "Electroplated blade technology",
        "Smooth retraction mechanism",
        "Triple rivet hook for durability",
    ],
    additionalInfo: [
        { label: "Available Sizes", value: "3m (16mm), 5m (19mm)" },
        { label: "Body", value: "Water resistant" },
        { label: "Blade", value: "Electroplated technology" },
        { label: "Spring", value: "High tension stainless steel" },
        { label: "Series", value: "SIGNO SERIES" },
    ],
    sizes: ["3m (16mm)", "5m (19mm)"],
    colors: [
        { hex: "#B76E79", title: "Rose Gold" },
        { hex: "#C0C0C0", title: "Silver" },
        { hex: "#78909C", title: "Grey" },
        { hex: "#2C2C2C", title: "Carbon Fiber" },
    ],
};

export default product;
