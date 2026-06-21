import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "linex-series",
    series: "LINEX SERIES",
    title: "LINEX SERIES Measuring Tape",
    excerpt:
        "Clean linear markings and a rigid blade profile for fast, accurate layout and marking work.",
    description: [
        "LINEX SERIES tapes feature crisp, easy-to-read scale markings that help reduce reading errors on busy job sites.",
        "The blade profile is engineered for stability when extended, making it easier to measure vertically and horizontally.",
        "A practical everyday tool for builders, installers, and site supervisors.",
    ],
    additionalInfo: [
        { label: "Blade Material", value: "Fibreglass" },
        { label: "Available Lengths", value: "3m, 5m, 8m, 10m" },
        { label: "Marking Style", value: "High-visibility linear scale" },
        { label: "Lock Type", value: "Blade lock button" },
        { label: "Series", value: "LINEX SERIES" },
    ],
    sizes: ["3m", "5m", "8m", "10m"],
    colors: [
        { hex: "#1565C0", title: "Blue" },
        { hex: "#F5C518", title: "Yellow" },
        { hex: "#424242", title: "Grey" },
    ],
};

export default product;
