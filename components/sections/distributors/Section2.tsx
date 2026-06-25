import Link from "next/link";
import RevealText from "@/components/effects/RevealText";
import DistributorsContent from "@/components/sections/distributors/DistributorsContent";

// Distributors Section 2 - Benefits & partnership process

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const BENEFITS = [
    {
        number: "01",
        title: "Exclusive Distribution",
        description:
            "Secure protected territory rights and build a defensible position in your region with PMG's recognised product lines.",
    },
    {
        number: "02",
        title: "Competitive Margins",
        description:
            "Access wholesale pricing structures designed for sustainable growth, with volume incentives and seasonal programmes.",
    },
    {
        number: "03",
        title: "Marketing Support",
        description:
            "Receive product imagery, point-of-sale materials, and co-branded campaigns to drive demand in your market.",
    },
    {
        number: "04",
        title: "Reliable Supply Chain",
        description:
            "Count on consistent stock availability, fast fulfilment, and a product range trusted by tradespeople worldwide.",
    },
];

const PROCESS_STEPS = [
    {
        step: "Step 01",
        title: "Submit your inquiry",
        desc: "Share your company profile, market coverage, and distribution experience through the form below.",
    },
    {
        step: "Step 02",
        title: "Qualification review",
        desc: "Our partnerships team evaluates your application and schedules a discovery call within 3–5 business days.",
    },
    {
        step: "Step 03",
        title: "Agreement & onboarding",
        desc: "Approved partners receive pricing, territory confirmation, and access to our distributor resource portal.",
    },
    {
        step: "Step 04",
        title: "Launch & grow",
        desc: "Begin stocking PMG products with ongoing sales support, training, and promotional opportunities.",
    },
];

export default function Section2() {
    return (
        <section className="sec-2-distributors pt-60 pb-80">
            <DistributorsContent>
                <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-4 pb-50">
                    <div style={{ maxWidth: "36rem" }}>
                        <h2 className="fw-600 reveal-text mb-3">
                            <RevealText>Why partner with PMG</RevealText>
                        </h2>
                        <p className="fz-font-md neutral-600 mb-0">
                            PMG combines precision engineering with a product portfolio that distributors can
                            confidently stand behind — from measuring tapes to spirit levels and specialty hardware.
                        </p>
                    </div>
                    <Link href="#distributor-inquiry" className="at-btn flex-shrink-0">
                        <span>
                            <span className="text-1 text-capitalize">Apply now</span>
                            <span className="text-2 text-capitalize">Apply now</span>
                        </span>
                        <i>
                            {ARROW_SVG}
                            {ARROW_SVG}
                        </i>
                    </Link>
                </div>

                <div className="row g-3 pb-80">
                    {BENEFITS.map((benefit) => (
                        <div key={benefit.number} className="col-md-6">
                            <div className="at-service-card hover-up border-100 rounded-2 overflow-hidden p-relative bg-neutral-0 z-index-3 h-100">
                                <div className="at-service-card-content p-4 p-md-5">
                                    <div className="at-service-card-number">
                                        <h6 className="fw-600 neutral-300 mb-0">[{benefit.number}]</h6>
                                    </div>
                                    <h4 className="mt-3 fw-600 fz-font-xl">{benefit.title}</h4>
                                    <div className="at-service-card-description">
                                        <p className="mb-0 neutral-600 fz-font-md">{benefit.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                    <span className="text-uppercase">
                        <span className="text-1">How it works</span>
                        <span className="text-2">How it works</span>
                    </span>
                    <i>
                        {ARROW_SVG}
                        {ARROW_SVG}
                    </i>
                </span>
                <h3 className="fw-600 reveal-text mb-50">
                    <RevealText>Your path to exclusive distributor status</RevealText>
                </h3>

                <ul className="journey-list distributors-journey-list" role="list">
                    {PROCESS_STEPS.map((item) => (
                        <li key={item.step} className="journey-list__item scroll-move-up">
                            <span className="journey-list__date">{item.step}</span>
                            <div className="journey-list__body">
                                <h6 className="journey-list__title neutral-900">{item.title}</h6>
                                <p className="journey-list__desc mb-0">{item.desc}</p>
                            </div>
                            <span className="journey-list__link" aria-hidden="true">
                                {ARROW_SVG}
                            </span>
                        </li>
                    ))}
                </ul>
            </DistributorsContent>
        </section>
    );
}
