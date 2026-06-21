import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "fibreglass-gold-series",
    series: "FIBREGLASS GOLD SERIES",
    title: "FIBREGLASS GOLD SERIES Measuring Tape",
    excerpt:
        "Premium fibreglass blade with gold-accent styling, built for accuracy and long-lasting performance in demanding environments.",
    description: [
        "The FIBREGLASS GOLD SERIES features a high-grade fibreglass blade designed to resist moisture, abrasion, and everyday job-site wear.",
        "Bold gold-accent detailing makes this series easy to identify on site, while the secure locking system holds measurements firmly in place.",
        "A trusted choice for professionals who want premium build quality with consistent, readable markings.",
    ],
    additionalInfo: [
        { label: "Blade Material", value: "Premium fibreglass" },
        { label: "Available Lengths", value: "3m, 5m, 8m, 10m" },
        { label: "Lock Type", value: "Auto-lock with release button" },
        { label: "Marking", value: "High-contrast metric/imperial scale" },
        { label: "Series", value: "FIBREGLASS GOLD SERIES" },
    ],
    sizes: ["3m", "5m", "8m", "10m"],
    colors: [
        { hex: "#D4AF37", title: "Gold" },
        { hex: "#F5C518", title: "Yellow" },
        { hex: "#1A1A1A", title: "Black" },
    ],
};

export default product;
