import type { ProductDetails } from "./types";

const defaultProduct: ProductDetails = {
    slug: "default",
    series: "ECO SERIES",
    title: "PMG Measuring Tape",
    excerpt:
        "A precision-engineered measuring tape built for accuracy, durability, and everyday professional use across job sites and workshops.",
    description: [
        "PMG measuring tapes are designed for professionals who demand reliable measurements every time. High-quality blade material, a secure locking mechanism, and an ergonomic case make this tool dependable for daily use.",
        "The blade is clearly marked for easy reading, while the case is built to withstand tough working conditions. Whether you are on a construction site or in a workshop, PMG delivers consistent performance.",
        "Trusted by distributors and tradespeople worldwide, PMG continues to set the standard for precision hand tools.",
    ],
    additionalInfo: [
        { label: "Blade Material", value: "Fibreglass / Steel (varies by series)" },
        { label: "Case Material", value: "ABS impact-resistant plastic" },
        { label: "Lock Type", value: "Push-button blade lock" },
        { label: "Accuracy", value: "EC Class II" },
        { label: "Origin", value: "Engineered by PMG" },
    ],
    sizes: ["3m", "5m", "8m"],
    colors: [
        { hex: "#F5C518", title: "Yellow" },
        { hex: "#1A1A1A", title: "Black" },
        { hex: "#1E4A8C", title: "Blue" },
    ],
};

export default defaultProduct;
