import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "master-series",
    series: "MASTER SERIES",
    title: "MASTER SERIES Measuring Tape",
    excerpt:
        "Professional-grade measuring tape with reinforced construction for heavy-duty daily use.",
    description: [
        "MASTER SERIES is PMG's workhorse range, designed for professionals who need a tough, accurate tape they can rely on every day.",
        "Reinforced internal components and a robust case withstand drops, dust, and demanding site conditions.",
        "Clear markings and a stable blade profile help you measure faster with confidence.",
    ],
    additionalInfo: [
        { label: "Blade Material", value: "Heavy-duty fibreglass" },
        { label: "Available Lengths", value: "5m, 8m, 10m" },
        { label: "Case", value: "Reinforced ABS with belt clip" },
        { label: "Lock Type", value: "Auto-lock" },
        { label: "Series", value: "MASTER SERIES" },
    ],
    sizes: ["5m", "8m", "10m"],
    colors: [
        { hex: "#1A1A1A", title: "Black" },
        { hex: "#F5C518", title: "Yellow" },
        { hex: "#37474F", title: "Charcoal" },
    ],
};

export default product;
