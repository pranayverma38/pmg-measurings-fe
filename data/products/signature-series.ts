import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "signature-series",
    series: "SIGNATURE SERIES",
    title: "SIGNATURE SERIES Measuring Tape",
    excerpt:
        "PMG's signature design language — refined aesthetics paired with professional-grade measurement performance.",
    description: [
        "SIGNATURE SERIES embodies PMG's design identity with a sleek case profile and carefully finished details.",
        "Engineered for professionals who appreciate both form and function, this series delivers accurate readings in a premium package.",
        "A flagship-style option for distributors and users who want PMG quality with distinctive visual appeal.",
    ],
    additionalInfo: [
        { label: "Blade Material", value: "Premium fibreglass" },
        { label: "Available Lengths", value: "3m, 5m, 8m, 10m" },
        { label: "Design", value: "Signature PMG styling" },
        { label: "Lock Type", value: "Auto-lock" },
        { label: "Series", value: "SIGNATURE SERIES" },
    ],
    sizes: ["3m", "5m", "8m", "10m"],
    colors: [
        { hex: "#212121", title: "Onyx" },
        { hex: "#C0A062", title: "Champagne Gold" },
        { hex: "#F5C518", title: "Yellow" },
    ],
};

export default product;
