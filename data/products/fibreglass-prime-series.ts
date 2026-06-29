import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "fibreglass-prime-series",
    series: "FIBREGLASS PRIME SERIES",
    title: "PMG FIBREGLASS PRIME SERIES",
    tagline: "Precision that goes the distance.",
    excerpt:
        "Built with high-quality fibreglass for accurate long-distance measuring, designed for professionals who demand durability and reliability.",
    description: [
        "Built with high quality fibreglass for accurate long distance measuring. The FIBREGLASS PRIME SERIES is designed for professionals who demand durability and reliability in every measure.",
        "Available in lengths up to 50m, this series is engineered for surveying, large-scale layout, and extended outdoor measuring tasks.",
        "A smooth rewind system, lightweight compact design, and durable metal hook deliver dependable performance across every length.",
    ],
    highlights: [
        "Heavy-duty ABS housing",
        "Smooth rewind system",
        "Lightweight & compact design",
        "High accuracy blade",
        "Durable metal hook",
    ],
    additionalInfo: [
        { label: "Available Sizes", value: "15m, 30m, 50m" },
        { label: "Blade", value: "High-quality fibreglass" },
        { label: "Rewind", value: "Smooth rewind system" },
        { label: "Hook", value: "Durable metal" },
        { label: "Series", value: "FIBREGLASS PRIME SERIES" },
    ],
    sizes: ["15m", "30m", "50m"],
    colors: [{ hex: "#E3F2FD", title: "Blue & White" }],
};

export default product;
