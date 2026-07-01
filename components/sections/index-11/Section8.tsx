import Image from "next/image";
import { Fragment } from "react";

type MarqueeImage = {
    src: string;
    alt: string;
};

type MarqueePart = string | MarqueeImage;

type MarqueeRow = {
    direction: "scroll-move-right" | "scroll-move-left";
    parts: MarqueePart[];
};

const MARQUEE_ROWS: MarqueeRow[] = [
    {
        direction: "scroll-move-right",
        parts: [
            "Film",
            "that",
            { src: "/assets/imgs/pages/home-11/img-3.webp", alt: "" },
            "moves",
            "people",
            { src: "/assets/imgs/pages/home-11/img-7.webp", alt: "" },
            "--",
        ],
    },
    {
        direction: "scroll-move-left",
        parts: [
            "--",
            "Motion",
            { src: "/assets/imgs/pages/home-11/img-5.webp", alt: "" },
            "design",
            "with",
            { src: "/assets/imgs/pages/home-11/img-9.webp", alt: "" },
            "soul",
        ],
    },
    {
        direction: "scroll-move-right",
        parts: [
            "From",
            { src: "/assets/imgs/pages/home-11/img-11.webp", alt: "" },
            "brief",
            "to",
            "premiere",
            { src: "/assets/imgs/pages/home-11/img-13.webp", alt: "" },
            "--",
        ],
    },
];

function MarqueeImagePill({ image }: { image: MarqueeImage }) {
    return (
        <span className="sec-8-home-11__img-pill">
            <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={267}
                loading="lazy"
                decoding="async"
            />
        </span>
    );
}

function MarqueeRowContent({ row }: { row: MarqueeRow }) {
    return row.parts.map((part, index) => {
        const spacer = index > 0 ? "\u00a0\u00a0" : null;

        if (typeof part === "string") {
            return (
                <Fragment key={index}>
                    {spacer}
                    {part}
                </Fragment>
            );
        }

        return (
            <Fragment key={index}>
                {spacer}
                <MarqueeImagePill image={part} />
            </Fragment>
        );
    });
}

export default function Section8() {
    return (
        <section className="sec-8-home-11 pb-110" aria-label="Call to action">
            <div className="sec-8-home-11__bg" aria-hidden="true">
                <div className="anim-zoomin-wrap sec-8-home-11__bg-wrap position-relative">
                    <Image
                        className="anim-zoomin sec-8-home-11__bg-img"
                        src="/assets/imgs/pages/home-11/bg.webp"
                        alt="orisa"
                        fill
                        sizes="100vw"
                        loading="lazy"
                        decoding="async"
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="sec-8-home-11__bg-overlay" aria-hidden="true" />
            </div>

            <div className="sec-8-home-11__inner">
                {MARQUEE_ROWS.map((row, index) => (
                    <div key={index} className="sec-8-home-11__type-wrap overflow-hidden" aria-hidden="true">
                        <div className={`sec-8-home-11__big-line ${row.direction} mb-0`}>
                            <MarqueeRowContent row={row} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
