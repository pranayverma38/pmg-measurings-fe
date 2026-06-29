import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "spirit-level",
    series: "SPIRIT LEVEL",
    title: "PMG Magnetic Spirit Level",
    tagline: "Master every alignment.",
    excerpt:
        "Designed for accurate levelling and alignment, featuring precision vials, a durable impact-resistant body, and built-in magnets.",
    description: [
        "Designed for accurate leveling and alignment, the MASTER MAGNETIC LEVEL features precision vials, a durable impact-resistant body, and built-in magnets for installation and finishing work.",
        "Powerful built-in magnets keep the level firmly in place on metal surfaces, freeing both hands for precise adjustments.",
        "A high-visibility rectangular vial and 0.5 mm/m accuracy deliver the confidence professionals need for construction, cabinetry, and installation work.",
    ],
    highlights: [
        "Powerful built-in magnets",
        "High-visibility rectangular vial",
        "0.5 mm/m accuracy",
        "Heavy-duty ABS housing",
        "Lightweight & easy to handle",
    ],
    additionalInfo: [
        { label: "Available Size", value: "30cm" },
        { label: "Accuracy", value: "0.5 mm/m" },
        { label: "Vial", value: "High-visibility rectangular" },
        { label: "Housing", value: "Heavy-duty ABS" },
        { label: "Series", value: "MAGNETIC SPIRIT LEVEL" },
    ],
    sizes: ["30cm"],
    colors: [
        { hex: "#D32F2F", title: "Red" },
        { hex: "#F5C518", title: "Yellow" },
        { hex: "#1E4A8C", title: "Blue" },
    ],
};

export default product;
