import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "prime-series",
    series: "PRIME SERIES",
    title: "PRIME SERIES Measuring Tape",
    excerpt:
        "Flagship PMG measuring tape with premium materials, refined ergonomics, and superior blade stability.",
    description: [
        "PRIME SERIES represents PMG at its best — a flagship range combining premium blade quality with a precision-engineered case.",
        "The wider blade profile improves rigidity when measuring over distance, reducing blade flex and improving accuracy.",
        "Designed for master tradespeople and specialists who expect top-tier performance from every tool.",
    ],
    additionalInfo: [
        { label: "Blade Material", value: "Premium fibreglass" },
        { label: "Available Lengths", value: "5m, 8m, 10m" },
        { label: "Blade Width", value: "27mm" },
        { label: "Lock Type", value: "Auto-lock with override" },
        { label: "Series", value: "PRIME SERIES" },
    ],
    sizes: ["5m", "8m", "10m"],
    colors: [
        { hex: "#1A1A1A", title: "Black" },
        { hex: "#B8860B", title: "Dark Gold" },
        { hex: "#F5C518", title: "Yellow" },
    ],
};

export default product;
