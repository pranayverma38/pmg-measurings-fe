import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "logo-series",
    series: "LOGO SERIES",
    title: "LOGO SERIES Measuring Tape",
    excerpt:
        "Branded PMG design with standout logo styling — a professional tool that represents quality on every job.",
    description: [
        "LOGO SERIES tapes showcase PMG's brand identity while delivering the accuracy and durability the name is known for.",
        "The bold case design makes the tool easy to spot in a toolbox or on site, reducing lost-tool downtime.",
        "A popular choice for distributors and teams who want visible brand presence with dependable performance.",
    ],
    additionalInfo: [
        { label: "Blade Material", value: "Fibreglass" },
        { label: "Available Lengths", value: "3m, 5m, 8m" },
        { label: "Branding", value: "PMG logo on case and blade" },
        { label: "Lock Type", value: "Push-button lock" },
        { label: "Series", value: "LOGO SERIES" },
    ],
    sizes: ["3m", "5m", "8m"],
    colors: [
        { hex: "#C62828", title: "Red" },
        { hex: "#F5C518", title: "Yellow" },
        { hex: "#1A1A1A", title: "Black" },
    ],
};

export default product;
