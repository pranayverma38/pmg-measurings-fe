import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "pop-shine-series",
    series: "POP SHINE SERIES",
    title: "POP SHINE SERIES Measuring Tape",
    excerpt:
        "Gloss-finish case with vivid colours and a polished look — precision measuring with standout style.",
    description: [
        "POP SHINE SERIES adds a glossy finish to PMG's popular POP design language, creating a premium retail-ready appearance.",
        "Behind the shine is the same dependable blade and locking system trusted by PMG users worldwide.",
        "Ideal for gift sets, promotional packs, and professionals who want tools that look as good as they perform.",
    ],
    additionalInfo: [
        { label: "Blade Material", value: "Fibreglass" },
        { label: "Available Lengths", value: "3m, 5m" },
        { label: "Finish", value: "High-gloss case coating" },
        { label: "Lock Type", value: "Push-button lock" },
        { label: "Series", value: "POP SHINE SERIES" },
    ],
    sizes: ["3m", "5m"],
    colors: [
        { hex: "#FF4081", title: "Hot Pink" },
        { hex: "#7C4DFF", title: "Violet" },
        { hex: "#FFD740", title: "Amber" },
    ],
};

export default product;
