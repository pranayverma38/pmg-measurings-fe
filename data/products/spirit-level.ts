import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "spirit-level",
    series: "SPIRIT LEVEL",
    title: "PMG Spirit Level",
    excerpt:
        "Precision spirit level with high-visibility vials for accurate horizontal and vertical alignment.",
    description: [
        "PMG Spirit Levels are built for accurate levelling in construction, cabinetry, and installation work.",
        "High-visibility vials make it easy to read alignment in bright or low-light conditions.",
        "Lightweight yet rigid aluminium or plastic profiles (varies by model) ensure long-term durability on site.",
    ],
    additionalInfo: [
        { label: "Tool Type", value: "Spirit level" },
        { label: "Available Lengths", value: "30cm, 60cm, 90cm" },
        { label: "Vials", value: "Horizontal & vertical" },
        { label: "Accuracy", value: "±0.5mm/m" },
        { label: "Series", value: "SPIRIT LEVEL" },
    ],
    sizes: ["30cm", "60cm", "90cm"],
    colors: [
        { hex: "#F5C518", title: "Yellow" },
        { hex: "#1A1A1A", title: "Black" },
        { hex: "#78909C", title: "Silver Grey" },
    ],
};

export default product;
