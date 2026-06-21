import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "side-lock-series",
    series: "SIDE LOCK SERIES",
    title: "SIDE LOCK SERIES Measuring Tape",
    excerpt:
        "Side-mounted lock button for quick one-handed operation — measure, lock, and mark without repositioning your grip.",
    description: [
        "SIDE LOCK SERIES features a conveniently placed side lock button that allows faster one-handed blade control.",
        "This design is especially useful when holding materials with your other hand or working in tight spaces.",
        "Combined with PMG's durable blade and clear markings, it is a practical upgrade for efficiency-focused professionals.",
    ],
    additionalInfo: [
        { label: "Blade Material", value: "Fibreglass" },
        { label: "Available Lengths", value: "3m, 5m, 8m" },
        { label: "Lock Type", value: "Side-mounted push lock" },
        { label: "Case", value: "Ergonomic ABS" },
        { label: "Series", value: "SIDE LOCK SERIES" },
    ],
    sizes: ["3m", "5m", "8m"],
    colors: [
        { hex: "#F5C518", title: "Yellow" },
        { hex: "#1565C0", title: "Blue" },
        { hex: "#1A1A1A", title: "Black" },
    ],
};

export default product;
