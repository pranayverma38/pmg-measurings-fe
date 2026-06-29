import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "steel-tape",
    series: "STEEL TAPE",
    title: "PMG STEEL TAPE",
    tagline: "Made of steel. Made to last.",
    excerpt:
        "Crafted with a durable steel body, STEEL TAPE delivers reliable accuracy, smooth blade action, and long-lasting performance in a compact design.",
    description: [
        "Crafted with a durable steel body, the STEEL TAPE delivers reliable accuracy, smooth blade action, and long-lasting performance in a compact design.",
        "The compact pocket design makes it easy to carry for quick measurements, while the secure metal hook holds position reliably.",
        "A smooth retraction mechanism and high-accuracy blade ensure dependable results in a tool built to endure daily use.",
    ],
    highlights: [
        "Durable steel body",
        "Compact pocket design",
        "Smooth retraction mechanism",
        "High accuracy blade",
        "Secure metal hook",
    ],
    additionalInfo: [
        { label: "Available Size", value: "2m (13mm)" },
        { label: "Body", value: "Durable steel" },
        { label: "Design", value: "Compact pocket format" },
        { label: "Hook", value: "Secure metal hook" },
        { label: "Series", value: "STEEL TAPE" },
    ],
    sizes: ["2m (13mm)"],
    colors: [{ hex: "#78909C", title: "Steel" }],
};

export default product;
