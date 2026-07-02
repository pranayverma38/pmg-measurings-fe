import Link from "next/link";
import RevealText from "@/components/effects/RevealText";
import PageContent from "@/components/shared/PageContent";
import AboutProductRange from "@/components/sections/about-1/AboutProductRange";
import { getProductCoverUrl } from "@/lib/productImages";
import type { ProductSeries } from "@/data/products/series";

const FEATURED_SERIES = [
    "SIDE LOCK SERIES",
    "NEW ECO SERIES",
    "LOCK SERIES",
    "SIGNATURE SERIES",
    "GLASS SERIES",
    "PRIME SERIES",
    "ECO SERIES",
    "GRIP SERIES",
] as const satisfies readonly ProductSeries[];

const ABOUT_PRODUCTS = FEATURED_SERIES.map((series) => ({
    series,
    img: getProductCoverUrl(series),
}));

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const VALUES = [
    {
        number: "01",
        title: "Precision Engineering",
        description:
            "Every PMG tool is built to exacting tolerances — from blade graduations to lock mechanisms — so professionals can measure with confidence.",
    },
    {
        number: "02",
        title: "Built to Last",
        description:
            "Impact-resistant casings, corrosion-resistant coatings, and field-tested components designed to withstand demanding job-site conditions.",
    },
    {
        number: "03",
        title: "Global Standards",
        description:
            "Manufactured to international quality benchmarks and trusted by distributors, retailers, and tradespeople across multiple markets.",
    },
    {
        number: "04",
        title: "Innovation at Scale",
        description:
            "A continuously evolving product range — from measuring tapes to spirit levels — backed by decades of hands-on industry expertise.",
    },
];

export default function AboutStory() {
    return (
        <section className="sec-2-about-story pt-60 pb-80">
            <PageContent>
                <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-4 pb-50">
                    <div style={{ maxWidth: "36rem" }}>
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">Our story</span>
                                <span className="text-2">Our story</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h2 className="fw-600 reveal-text mb-3">
                            <RevealText>Legacy of precision</RevealText>
                        </h2>
                        <p className="fz-font-md neutral-600 mb-0">
                            PMG was founded on a singular mission: to redefine the standards of industrial
                            measurement. From a specialized manufacturer to a global leader in hand tools, we
                            deliver excellence to the most demanding markets worldwide.
                        </p>
                    </div>
                    <Link href="/shop" className="at-btn flex-shrink-0">
                        <span>
                            <span className="text-1 text-capitalize">Explore products</span>
                            <span className="text-2 text-capitalize">Explore products</span>
                        </span>
                        <i>
                            {ARROW_SVG}
                            {ARROW_SVG}
                        </i>
                    </Link>
                </div>

                <div className="row g-3 pb-80">
                    {VALUES.map((value) => (
                        <div key={value.number} className="col-md-6">
                            <div className="at-service-card hover-up border-100 rounded-2 overflow-hidden p-relative bg-neutral-0 z-index-3 h-100">
                                <div className="at-service-card-content p-4 p-md-5">
                                    <div className="at-service-card-number">
                                        <h6 className="fw-600 neutral-300 mb-0">[{value.number}]</h6>
                                    </div>
                                    <h4 className="mt-3 fw-600 fz-font-xl">{value.title}</h4>
                                    <div className="at-service-card-description">
                                        <p className="mb-0 neutral-600 fz-font-md">{value.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <AboutProductRange products={ABOUT_PRODUCTS} />
            </PageContent>
        </section>
    );
}
