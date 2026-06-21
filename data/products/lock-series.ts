import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "lock-series",
    series: "LOCK SERIES",
    title: "LOCK SERIES Measuring Tape",
    excerpt:
        "Strong blade lock system that holds firm under pressure — ideal for solo measuring and marking tasks.",
    description: [
        "LOCK SERIES measuring tapes are engineered with a reinforced locking mechanism that keeps the blade securely in position.",
        "This makes one-person measuring easier, especially when working at height or across long spans.",
        "Built for reliability, the series delivers consistent performance shift after shift.",
    ],
    additionalInfo: [
        { label: "Blade Material", value: "Fibreglass" },
        { label: "Available Lengths", value: "3m, 5m, 8m" },
        { label: "Lock Type", value: "Heavy-duty push lock" },
        { label: "Case", value: "Impact-resistant ABS" },
        { label: "Series", value: "LOCK SERIES" },
    ],
    sizes: ["3m", "5m", "8m"],
    colors: [
        { hex: "#F5C518", title: "Yellow" },
        { hex: "#1A1A1A", title: "Black" },
        { hex: "#FF6F00", title: "Orange" },
    ],
};

export default product;
