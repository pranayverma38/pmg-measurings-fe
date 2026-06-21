import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "glass-series",
    series: "GLASS SERIES",
    title: "GLASS SERIES Measuring Tape",
    excerpt:
        "Clear, glass-fibre reinforced blade with excellent flexibility and visibility for precise indoor and outdoor measurements.",
    description: [
        "GLASS SERIES measuring tapes use a glass-fibre reinforced blade that stays flat during extension and returns smoothly into the case.",
        "The blade coating improves readability in varied lighting conditions, helping you work faster with fewer measurement errors.",
        "Designed for professionals who need a flexible yet stable tape for framing, fitting, and layout work.",
    ],
    additionalInfo: [
        { label: "Blade Material", value: "Glass-fibre reinforced" },
        { label: "Available Lengths", value: "3m, 5m, 8m" },
        { label: "Lock Type", value: "Slide lock" },
        { label: "Blade Width", value: "25mm" },
        { label: "Series", value: "GLASS SERIES" },
    ],
    sizes: ["3m", "5m", "8m"],
    colors: [
        { hex: "#4FC3F7", title: "Sky Blue" },
        { hex: "#F5C518", title: "Yellow" },
        { hex: "#FFFFFF", title: "White" },
    ],
};

export default product;
