import Image from "next/image";

const PMG_PRODUCTS_BASE = "/assets/imgs/pmgproducts";

const productSrc = (series: string, file: string) =>
    `${PMG_PRODUCTS_BASE}/${encodeURIComponent(series)}/${file}`;

type MarqueeImage = {
    series: string;
    file: string;
    alt: string;
};

type MarqueeRow = {
    direction: "scroll-move-right" | "scroll-move-left";
    parts: (string | MarqueeImage)[];
};

const MARQUEE_ROWS: MarqueeRow[] = [
    {
        direction: "scroll-move-right",
        parts: [
            "Tapes",
            "that",
            { series: "MASTER SERIES", file: "IMG_8282.png", alt: "PMG Master Series measuring tape" },
            "measure",
            "every",
            "job",
            { series: "SIGNATURE SERIES", file: "IMG_8196.png", alt: "PMG Signature Series measuring tape" },
            "--",
        ],
    },
    {
        direction: "scroll-move-left",
        parts: [
            "--",
            "Precision",
            { series: "GLASS SERIES", file: "IMG_8075.png", alt: "PMG Glass Series measuring tape" },
            "tools",
            "built",
            { series: "GRIP SERIES", file: "IMG_8010.png", alt: "PMG Grip Series measuring tape" },
            "to",
            "last",
        ],
    },
    {
        direction: "scroll-move-right",
        parts: [
            "From",
            { series: "LOCK SERIES", file: "IMG_7983.png", alt: "PMG Lock Series measuring tape" },
            "factory",
            "floor",
            "to",
            "field",
            { series: "ECO SERIES", file: "IMG_8241.png", alt: "PMG Eco Series measuring tape" },
            "site",
            "--",
        ],
    },
];

function MarqueeImagePill({ image }: { image: MarqueeImage }) {
    return (
        <span className="sec-8-home-11__img-pill">
            <Image
                src={productSrc(image.series, image.file)}
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
    return (
        <>
            {row.parts.map((part, index) => (
                <span key={index}>
                    {index > 0 ? "\u00a0" : null}
                    {typeof part === "string" ? part : <MarqueeImagePill image={part} />}
                </span>
            ))}
        </>
    );
}

export default function HomeSection8() {
    return (
        <section className="sec-8-home-11 pb-110" aria-label="PMG measuring tools showcase">
            <div className="sec-8-home-11__bg" aria-hidden="true">
                <div className="anim-zoomin-wrap sec-8-home-11__bg-wrap position-relative">
                    <Image
                        className="anim-zoomin sec-8-home-11__bg-img"
                        src="/assets/imgs/pmgotherimages/ai-generated-IMAGE.jpg"
                        alt=""
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
                        <p className={`sec-8-home-11__big-line ${row.direction} mb-0`}>
                            <MarqueeRowContent row={row} />
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
