import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "new-eco-series",
    series: "NEW ECO SERIES",
    title: "NEW ECO SERIES Measuring Tape",
    excerpt:
        "Updated eco-friendly design with improved blade coating and smoother retraction for modern job-site workflows.",
    description: [
        "NEW ECO SERIES builds on the original ECO range with refined materials and an upgraded retraction system.",
        "The lighter case and improved blade coating make it easier to handle while maintaining PMG's measurement accuracy standards.",
        "An excellent upgrade for teams looking for efficient, sustainable tooling without compromising durability.",
    ],
    additionalInfo: [
        { label: "Blade Material", value: "Eco fibreglass blend" },
        { label: "Available Lengths", value: "3m, 5m, 8m" },
        { label: "Lock Type", value: "Push-button lock" },
        { label: "Upgrade", value: "Improved blade coating & spring" },
        { label: "Series", value: "NEW ECO SERIES" },
    ],
    sizes: ["3m", "5m", "8m"],
    colors: [
        { hex: "#43A047", title: "Green" },
        { hex: "#A5D6A7", title: "Light Green" },
        { hex: "#F5C518", title: "Yellow" },
    ],
};

export default product;
