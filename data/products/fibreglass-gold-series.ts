import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "fibreglass-gold-series",
    series: "FIBREGLASS GOLD SERIES",
    title: "PMG FIBREGLASS GOLD SERIES",
    tagline: "Measure far. Measure right.",
    excerpt:
        "Built with high-quality fibreglass for accurate long-distance measuring, designed for professionals who demand durability and reliability.",
    description: [
        "Built with high quality fibreglass for accurate long distance measuring. The FIBREGLASS GOLD SERIES is designed for professionals who demand durability and reliability in every measure.",
        "A smooth rewind system and lightweight, compact design make extended measuring sessions more manageable on large sites.",
        "Heavy-duty ABS housing and a durable metal hook ensure this long-reach tape stands up to demanding outdoor and industrial environments.",
    ],
    highlights: [
        "Heavy-duty ABS housing",
        "Smooth rewind system",
        "Lightweight & compact design",
        "High accuracy blade",
        "Durable metal hook",
    ],
    additionalInfo: [
        { label: "Available Sizes", value: "15m, 30m" },
        { label: "Blade", value: "High-quality fibreglass" },
        { label: "Rewind", value: "Smooth rewind system" },
        { label: "Hook", value: "Durable metal" },
        { label: "Series", value: "FIBREGLASS GOLD SERIES" },
    ],
    sizes: ["15m", "30m"],
    colors: [{ hex: "#E3F2FD", title: "Blue & White" }],
};

export default product;
