import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "lock-series",
    series: "LOCK SERIES",
    title: "PMG LOCK SERIES",
    tagline: "Precision that stays locked.",
    excerpt:
        "Engineered for reliability, LOCK SERIES delivers secure locking, smooth operation, and dependable performance for everyday measuring tasks.",
    description: [
        "Engineered for reliability. The LOCK SERIES delivers secure locking, smooth operation, and dependable performance for everyday measuring tasks.",
        "Heavy-duty ABS housing and a strong locking system keep measurements firmly in place, while the high-visibility precision blade ensures clear readings.",
        "Available in extended lengths up to 10m, LOCK SERIES scales from quick checks to longer layout and surveying work.",
    ],
    highlights: [
        "Heavy-duty ABS housing",
        "Durable metal clip & belt",
        "Strong locking system",
        "Triple-rivet reinforced hook",
        "High-visibility precision blade",
        "Smooth retraction mechanism",
    ],
    additionalInfo: [
        { label: "Available Sizes", value: "3m (16mm), 5m (19mm), 7.5m (25mm), 10m (25mm)" },
        { label: "Lock Type", value: "Strong locking system" },
        { label: "Case", value: "Heavy-duty ABS housing" },
        { label: "Blade", value: "High-visibility precision" },
        { label: "Series", value: "LOCK SERIES" },
    ],
    sizes: ["3m (16mm)", "5m (19mm)", "7.5m (25mm)", "10m (25mm)"],
    colors: [
        { hex: "#F5C518", title: "Yellow" },
        { hex: "#1A1A1A", title: "Black" },
    ],
};

export default product;
