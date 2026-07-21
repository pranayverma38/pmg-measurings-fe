import Image from "next/image";
import { Fragment } from "react";

type MarqueeRow = {
    direction: "scroll-move-right" | "scroll-move-left";
    parts: string[];
};

const MARQUEE_ROWS: MarqueeRow[] = [
    {
        direction: "scroll-move-right",
        parts: ["Tapes", "that", "measure", "every", "job", "--"],
    },
    {
        direction: "scroll-move-left",
        parts: ["--", "Precision", "tools", "built", "to", "last"],
    },
    {
        direction: "scroll-move-right",
        parts: ["From", "factory", "floor", "to", "field", "site", "--"],
    },
];

function MarqueeRowContent({ row }: { row: MarqueeRow }) {
    return row.parts.map((part, index) => {
        const spacer = index > 0 ? "\u00a0\u00a0" : null;

        return (
            <Fragment key={index}>
                {spacer}
                {part}
            </Fragment>
        );
    });
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
                        <div className={`sec-8-home-11__big-line ${row.direction} mb-0`}>
                            <MarqueeRowContent row={row} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
