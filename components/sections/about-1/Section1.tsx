import RevealText from "@/components/effects/RevealText";
import PageContent from "@/components/shared/PageContent";
import AboutHeroSlider from "@/components/sections/about-1/AboutHeroSlider";
import { buildProductCoverSlides } from "@/lib/productImages";

const HERO_SLIDES = buildProductCoverSlides(
    ["GLASS SERIES", "LOCKLIINE SERIES", "PRIME SERIES", "ECO SERIES", "LINEX SERIES", "SIGNATURE SERIES"],
    (series) => `PMG ${series}`
);

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const HIGHLIGHTS = [
    "Precision measuring tapes and spirit levels",
    "Durable construction for demanding job sites",
    "Trusted by distributors and professionals worldwide",
    "Continuous innovation across product series",
];

export default function Section1() {
    return (
        <section className="sec-1-about overflow-hidden pt-120 pb-60 bg-neutral-50">
            <PageContent>
                <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                    <span className="text-uppercase">
                        <span className="text-1">About PMG</span>
                        <span className="text-2">About PMG</span>
                    </span>
                    <i>
                        {ARROW_SVG}
                        {ARROW_SVG}
                    </i>
                </span>
                <h1 className="section-title fw-600 reveal-text mb-4">
                    <RevealText>
                        Crafting durable and accurate measuring solutions for professionals worldwide
                    </RevealText>
                </h1>
                <p className="fz-font-lg neutral-600 mb-50" style={{ maxWidth: "42rem" }}>
                    We are a precision tools brand dedicated to engineering hand tools that tradespeople
                    can rely on — from measuring tapes and spirit levels to specialty hardware built for
                    accuracy, longevity, and performance on every job.
                </p>
                <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                    {HIGHLIGHTS.map((item) => (
                        <li key={item} className="d-flex align-items-start gap-3">
                            <span className="neutral-900 mt-1 flex-shrink-0" aria-hidden="true">
                                {ARROW_SVG}
                            </span>
                            <span className="fz-font-md fw-500 neutral-800">{item}</span>
                        </li>
                    ))}
                </ul>
            </PageContent>

            <AboutHeroSlider slides={HERO_SLIDES} />
        </section>
    );
}
