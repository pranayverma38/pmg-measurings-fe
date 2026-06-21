import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "eco-series",
    series: "ECO SERIES",
    title: "ECO SERIES Measuring Tape",
    excerpt:
        "Lightweight eco-conscious measuring tape with a durable fibreglass blade and smooth retraction for everyday trade use.",
    description: [
        "The ECO SERIES combines reliable measurement accuracy with a lightweight, ergonomic design suited for daily professional tasks.",
        "Its fibreglass blade resists stretching and wear, while the compact case is easy to carry and comfortable to hold over long work sessions.",
        "Ideal for carpenters, electricians, and DIY professionals who need a dependable tape without unnecessary bulk.",
    ],
    additionalInfo: [
        { label: "Blade Material", value: "Fibreglass" },
        { label: "Available Lengths", value: "3m, 5m, 8m" },
        { label: "Lock Type", value: "Push-button lock" },
        { label: "Case", value: "Lightweight ABS" },
        { label: "Series", value: "ECO SERIES" },
    ],
    sizes: ["3m", "5m", "8m"],
    colors: [
        { hex: "#2E7D32", title: "Green" },
        { hex: "#F5C518", title: "Yellow" },
        { hex: "#1A1A1A", title: "Black" },
    ],
};

export default product;
