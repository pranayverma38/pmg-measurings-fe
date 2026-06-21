import type { ProductDetails } from "./types";

const product: ProductDetails = {
    slug: "pop-series",
    series: "POP SERIES",
    title: "POP SERIES Measuring Tape",
    excerpt:
        "Vibrant, eye-catching design with reliable PMG accuracy — built to stand out on any toolbox shelf.",
    description: [
        "POP SERIES brings bold colour and modern styling to PMG's measuring tape lineup without sacrificing function.",
        "The bright case makes the tool easy to find on cluttered job sites, while the blade delivers clear, dependable readings.",
        "Popular with retail customers and professionals who want a tape that's as visible as it is accurate.",
    ],
    additionalInfo: [
        { label: "Blade Material", value: "Fibreglass" },
        { label: "Available Lengths", value: "3m, 5m" },
        { label: "Design", value: "Bold pop-colour casing" },
        { label: "Lock Type", value: "Slide lock" },
        { label: "Series", value: "POP SERIES" },
    ],
    sizes: ["3m", "5m"],
    colors: [
        { hex: "#E91E63", title: "Pink" },
        { hex: "#9C27B0", title: "Purple" },
        { hex: "#00BCD4", title: "Cyan" },
    ],
};

export default product;
