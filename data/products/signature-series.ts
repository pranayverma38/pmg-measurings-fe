import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "signature-series",
    series: "SIGNATURE SERIES",
    title: "PMG SIGNATURE SERIES",
    tagline: "Engineered to resist. Designed to perform.",
    excerpt:
        "As our flagship waterproof measuring tape, SIGNATURE SERIES represents the highest standard of precision, durability, and craftsmanship.",
    description: [
        "As our flagship waterproof measuring tape, SIGNATURE SERIES represents the highest standard of precision, durability, and craftsmanship.",
        "Designed for professionals and built for demanding environments, it delivers reliable performance, lasting strength, and confidence in every measurement.",
        "Water-resistant construction, an electroplated blade, and zinc rivet reinforcement make SIGNATURE the benchmark for premium measuring tools.",
    ],
    highlights: [
        "Water resistant",
        "Electroplated blade",
        "High quality SS spring",
        "Zinc rivet reinforcement",
        "Long lasting durability",
        "Assured quality",
    ],
    additionalInfo: [
        { label: "Available Sizes", value: "3m (16mm), 5m (19mm)" },
        { label: "Blade", value: "Electroplated, water resistant" },
        { label: "Spring", value: "High quality stainless steel" },
        { label: "Reinforcement", value: "Zinc rivet" },
        { label: "Series", value: "SIGNATURE SERIES" },
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
