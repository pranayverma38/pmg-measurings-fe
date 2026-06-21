import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "grip-series",
    series: "GRIP SERIES",
    title: "GRIP SERIES Measuring Tape",
    excerpt:
        "Ergonomic soft-grip case and secure hold for comfortable, controlled measuring on long shifts.",
    description: [
        "The GRIP SERIES is built around user comfort, featuring a textured soft-grip case that reduces hand fatigue during repeated use.",
        "A dependable locking mechanism keeps your measurement fixed while you mark, cut, or align materials.",
        "Perfect for tradespeople who value control and comfort as much as accuracy.",
    ],
    additionalInfo: [
        { label: "Blade Material", value: "Fibreglass" },
        { label: "Available Lengths", value: "3m, 5m, 8m" },
        { label: "Grip", value: "Soft-touch ergonomic casing" },
        { label: "Lock Type", value: "Push-button lock" },
        { label: "Series", value: "GRIP SERIES" },
    ],
    sizes: ["3m", "5m", "8m"],
    colors: [
        { hex: "#E53935", title: "Red" },
        { hex: "#1A1A1A", title: "Black" },
        { hex: "#F5C518", title: "Yellow" },
    ],
};

export default product;
