import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "steel-tape",
    series: "STEEL TAPE",
    title: "PMG Steel Measuring Tape",
    excerpt:
        "Heavy-duty steel blade measuring tape for maximum rigidity and precision on structural and industrial jobs.",
    description: [
        "STEEL TAPE models use a hardened steel blade that offers superior rigidity compared to fibreglass alternatives.",
        "This makes them ideal for measuring long spans, steel fabrication, and industrial applications where blade stability matters.",
        "Built with a robust case and reliable lock system to handle tough environments day after day.",
    ],
    additionalInfo: [
        { label: "Blade Material", value: "Hardened steel" },
        { label: "Available Lengths", value: "3m, 5m, 8m, 10m" },
        { label: "Blade Coating", value: "Anti-rust lacquer" },
        { label: "Lock Type", value: "Heavy-duty lock" },
        { label: "Series", value: "STEEL TAPE" },
    ],
    sizes: ["3m", "5m", "8m", "10m"],
    colors: [
        { hex: "#607D8B", title: "Steel Grey" },
        { hex: "#F5C518", title: "Yellow" },
        { hex: "#1A1A1A", title: "Black" },
    ],
};

export default product;
