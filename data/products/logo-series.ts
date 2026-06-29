import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "logo-series",
    series: "LOGO SERIES",
    title: "PMG LOGO SERIES",
    tagline: "Designed to perform.",
    excerpt:
        "Designed for everyday professionals, LOGO SERIES combine reliable accuracy, durable construction, and smooth performance in a compact design.",
    description: [
        "Designed for everyday professionals. LOGO SERIES combine reliable accuracy, durable construction, and smooth performance in a compact, lightweight design.",
        "Heavy-duty ABS housing and a triple-rivet reinforced hook provide strength where it matters most, while the high-visibility precision blade keeps readings clear.",
        "Available in extended lengths up to 10m, LOGO SERIES scales from quick site checks to longer layout work.",
    ],
    highlights: [
        "Heavy-duty ABS housing",
        "Durable metal clip & belt",
        "Triple-rivet reinforced hook",
        "High-visibility precision blade",
        "Smooth retraction mechanism",
        "Compact & lightweight design",
    ],
    additionalInfo: [
        { label: "Available Sizes", value: "3m (16mm), 5m (19mm), 7.5m (25mm), 10m (25mm)" },
        { label: "Case", value: "Heavy-duty ABS housing" },
        { label: "Hook", value: "Triple-rivet reinforced" },
        { label: "Blade", value: "High-visibility precision" },
        { label: "Series", value: "LOGO SERIES" },
    ],
    sizes: ["3m (16mm)", "5m (19mm)", "7.5m (25mm)", "10m (25mm)"],
    colors: [
        { hex: "#2E7D32", title: "Green" },
        { hex: "#1E4A8C", title: "Blue" },
        { hex: "#1A1A1A", title: "Black" },
    ],
};

export default product;
