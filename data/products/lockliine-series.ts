import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "lockliine-series",
    series: "LOCKLIINE SERIES",
    title: "LOCKLIINE SERIES Measuring Tape",
    excerpt:
        "Advanced lockline mechanism for smooth blade control and dependable hold during precision layout.",
    description: [
        "The LOCKLIINE SERIES combines PMG's lockline technology with a durable blade for confident measuring in professional settings.",
        "Smooth extension and controlled retraction reduce wear on the blade and internal spring over time.",
        "Well suited for carpentry, interior fit-out, and general construction applications.",
    ],
    additionalInfo: [
        { label: "Blade Material", value: "Fibreglass" },
        { label: "Available Lengths", value: "3m, 5m, 8m" },
        { label: "Lock Type", value: "Lockline mechanism" },
        { label: "Hook", value: "Reinforced end hook" },
        { label: "Series", value: "LOCKLIINE SERIES" },
    ],
    sizes: ["3m", "5m", "8m"],
    colors: [
        { hex: "#00897B", title: "Teal" },
        { hex: "#F5C518", title: "Yellow" },
        { hex: "#1A1A1A", title: "Black" },
    ],
};

export default product;
