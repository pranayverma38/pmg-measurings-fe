import Link from "next/link";
import Image from "next/image";
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

const HIGHLIGHTS = [
    { value: "40+", label: "Years of expertise" },
    { value: "50+", label: "Product series" },
];

const VALUES = [
    {
        number: "01",
        title: "Precision Engineering",
        description:
            "Every PMG tool is built to exacting tolerances — from blade graduations to lock mechanisms — so professionals can measure with confidence.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
                <path d="M16 8V16L21 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="16" cy="16" r="2" fill="currentColor" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Built to Last",
        description:
            "Impact-resistant casings, corrosion-resistant coatings, and field-tested components designed to withstand demanding job-site conditions.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path
                    d="M16 4L26 9V17C26 23 21.5 27.5 16 28C10.5 27.5 6 23 6 17V9L16 4Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
                <path d="M12 16L15 19L21 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Global Standards",
        description:
            "Manufactured to international quality benchmarks and trusted by distributors, retailers, and tradespeople across multiple markets.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 16H28M16 4C12 8 10 12 10 16C10 20 12 24 16 28C20 24 22 20 22 16C22 12 20 8 16 4Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Innovation at Scale",
        description:
            "A continuously evolving product range — from measuring tapes to spirit levels — backed by decades of hands-on industry expertise.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M8 24L16 8L24 24H8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M13 20H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="16" cy="6" r="2" fill="currentColor" />
            </svg>
        ),
    },
];

export default function AboutStory() {
    return (
        <section className="about-legacy p-relative overflow-hidden">
            {/* ── Hero band ── */}
            <div className="about-legacy__hero">
                <div className="about-legacy__grid-bg" aria-hidden="true" />
                <div className="about-legacy__tape about-legacy__tape--top" aria-hidden="true" />
                <div className="about-legacy__tape about-legacy__tape--bottom" aria-hidden="true" />

                <PageContent className="p-relative z-1">
                    <div className="about-legacy__hero-inner">
                        <div className="about-legacy__hero-copy">
                            <span className="at-btn text-white bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase text-white">
                                    <span className="text-1">Our story</span>
                                    <span className="text-2">Our story</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>

                            <h2 className="about-legacy__title reveal-text mb-0">
                                <RevealText>Legacy of</RevealText>
                                <br />
                                <span className="about-legacy__title-accent">
                                    <RevealText>precision</RevealText>
                                </span>
                            </h2>

                            <p className="about-legacy__lead mb-0">
                                PMG was founded on a singular mission: to redefine the standards of industrial
                                measurement. From a specialized manufacturer to a global leader in hand tools, we
                                deliver excellence to the most demanding markets worldwide.
                            </p>

                            <Link href="/products" className="at-btn about-legacy__cta flex-shrink-0">
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

                        <div className="about-legacy__hero-visual">
                            <div className="about-legacy__image-frame">
                                <Image
                                    src={getProductCoverUrl("SIGNATURE SERIES")}
                                    alt="PMG Signature Series measuring tape"
                                    width={520}
                                    height={640}
                                    className="about-legacy__image"
                                    priority
                                />
                                <div className="about-legacy__image-glow" aria-hidden="true" />
                            </div>
                            <div className="about-legacy__badge" aria-hidden="true">
                                <span className="about-legacy__badge-value">±0.5</span>
                                <span className="about-legacy__badge-label">mm accuracy</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-legacy__highlights">
                        {HIGHLIGHTS.map((item) => (
                            <div key={item.label} className="about-legacy__highlight">
                                <span className="about-legacy__highlight-value">{item.value}</span>
                                <span className="about-legacy__highlight-label">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </PageContent>
            </div>

            {/* ── Values bento grid ── */}
            <div className="about-legacy__values">
                <PageContent>
                    <div className="about-legacy__values-header">
                        <h3 className="about-legacy__values-title fw-600 mb-0">
                            What drives every tool we build
                        </h3>
                        <p className="about-legacy__values-sub neutral-600 mb-0">
                            Four pillars that define our commitment to tradespeople worldwide.
                        </p>
                    </div>

                    <div className="about-legacy__values-grid">
                        {VALUES.map((value, index) => (
                            <article
                                key={value.number}
                                className={`about-legacy__value-card about-legacy__value-card--${index + 1}`}
                            >
                                <div className="about-legacy__value-icon">{value.icon}</div>
                                <span className="about-legacy__value-number">{value.number}</span>
                                <h4 className="about-legacy__value-title fw-600">{value.title}</h4>
                                <p className="about-legacy__value-desc mb-0">{value.description}</p>
                                <div className="about-legacy__value-line" aria-hidden="true" />
                            </article>
                        ))}
                    </div>

                    <div className="about-legacy__products">
                        <AboutProductRange products={ABOUT_PRODUCTS} />
                    </div>
                </PageContent>
            </div>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .about-legacy__hero {
                            position: relative;
                            background: #0a0a0a;
                            color: #fff;
                            padding: clamp(72px, 10vw, 120px) 0 clamp(48px, 6vw, 80px);
                            overflow: hidden;
                        }
                        .about-legacy__grid-bg {
                            position: absolute;
                            inset: 0;
                            background-image:
                                linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
                            background-size: 64px 64px;
                            mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 75%);
                            pointer-events: none;
                        }
                        .about-legacy__tape {
                            position: absolute;
                            left: 0;
                            right: 0;
                            height: 28px;
                            background: repeating-linear-gradient(
                                90deg,
                                #F0460E 0px,
                                #F0460E 2px,
                                transparent 2px,
                                transparent 12px,
                                rgba(255,255,255,0.15) 12px,
                                rgba(255,255,255,0.15) 14px,
                                transparent 14px,
                                transparent 24px
                            );
                            opacity: 0.35;
                            pointer-events: none;
                        }
                        .about-legacy__tape--top { top: 0; }
                        .about-legacy__tape--bottom { bottom: 0; opacity: 0.2; }

                        .about-legacy__hero-inner {
                            display: grid;
                            grid-template-columns: 1fr;
                            gap: 48px;
                            align-items: center;
                        }
                        @media (min-width: 992px) {
                            .about-legacy__hero-inner {
                                grid-template-columns: 1fr 0.85fr;
                                gap: 64px;
                            }
                        }

                        .about-legacy__title {
                            font-size: clamp(2.75rem, 6vw, 5.5rem);
                            font-weight: 600;
                            line-height: 0.95;
                            letter-spacing: -0.03em;
                            color: #fff;
                        }
                        .about-legacy__title-accent {
                            color: #F0460E;
                            display: inline-block;
                        }
                        .about-legacy__lead {
                            margin-top: 28px;
                            max-width: 34rem;
                            font-size: clamp(1rem, 1.5vw, 1.125rem);
                            line-height: 1.7;
                            color: rgba(255,255,255,0.62);
                        }
                        .about-legacy__cta {
                            margin-top: 36px;
                            display: inline-flex;
                        }

                        .about-legacy__hero-visual {
                            position: relative;
                            display: flex;
                            justify-content: center;
                        }
                        .about-legacy__image-frame {
                            position: relative;
                            width: min(100%, 420px);
                            aspect-ratio: 4 / 5;
                            border-radius: 16px;
                            overflow: hidden;
                            border: 1px solid rgba(255,255,255,0.12);
                            background: rgba(255,255,255,0.03);
                        }
                        .about-legacy__image {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            transform: scale(1.02);
                            transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
                        }
                        .about-legacy__image-frame:hover .about-legacy__image {
                            transform: scale(1.06);
                        }
                        .about-legacy__image-glow {
                            position: absolute;
                            inset: auto 10% -20% 10%;
                            height: 40%;
                            background: radial-gradient(ellipse, rgba(240,70,14,0.45) 0%, transparent 70%);
                            filter: blur(24px);
                            pointer-events: none;
                        }
                        .about-legacy__badge {
                            position: absolute;
                            bottom: -12px;
                            left: -8px;
                            display: flex;
                            flex-direction: column;
                            padding: 16px 20px;
                            background: #fff;
                            color: #0a0a0a;
                            border-radius: 12px;
                            box-shadow: 0 16px 48px rgba(0,0,0,0.35);
                        }
                        @media (min-width: 992px) {
                            .about-legacy__badge {
                                bottom: 32px;
                                left: -32px;
                            }
                        }
                        .about-legacy__badge-value {
                            font-size: 1.75rem;
                            font-weight: 700;
                            line-height: 1;
                            letter-spacing: -0.02em;
                            color: #F0460E;
                        }
                        .about-legacy__badge-label {
                            margin-top: 4px;
                            font-size: 0.75rem;
                            font-weight: 600;
                            text-transform: uppercase;
                            letter-spacing: 0.08em;
                            color: rgba(0,0,0,0.5);
                        }

                        .about-legacy__highlights {
                            display: grid;
                            grid-template-columns: repeat(2, 1fr);
                            gap: 1px;
                            margin-top: clamp(48px, 6vw, 72px);
                            background: rgba(255,255,255,0.1);
                            border: 1px solid rgba(255,255,255,0.1);
                            border-radius: 16px;
                            overflow: hidden;
                        }
                        .about-legacy__highlight {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            text-align: center;
                            padding: 28px 16px;
                            background: rgba(255,255,255,0.03);
                            backdrop-filter: blur(8px);
                            transition: background 0.3s ease;
                        }
                        .about-legacy__highlight:hover {
                            background: rgba(240,70,14,0.08);
                        }
                        .about-legacy__highlight-value {
                            font-size: clamp(1.5rem, 3vw, 2.25rem);
                            font-weight: 700;
                            letter-spacing: -0.02em;
                            color: #fff;
                        }
                        .about-legacy__highlight-label {
                            margin-top: 6px;
                            font-size: 0.8125rem;
                            font-weight: 500;
                            color: rgba(255,255,255,0.5);
                        }

                        .about-legacy__values {
                            padding: clamp(64px, 8vw, 100px) 0 clamp(48px, 6vw, 80px);
                            background: #fafafa;
                        }
                        .about-legacy__values-header {
                            display: flex;
                            flex-direction: column;
                            gap: 12px;
                            margin-bottom: 48px;
                            max-width: 36rem;
                        }
                        @media (min-width: 768px) {
                            .about-legacy__values-header {
                                flex-direction: row;
                                align-items: flex-end;
                                justify-content: space-between;
                                max-width: none;
                            }
                            .about-legacy__values-sub {
                                max-width: 22rem;
                                text-align: right;
                            }
                        }
                        .about-legacy__values-title {
                            font-size: clamp(1.5rem, 3vw, 2rem);
                            letter-spacing: -0.02em;
                        }

                        .about-legacy__values-grid {
                            display: grid;
                            grid-template-columns: 1fr;
                            gap: 16px;
                            margin-bottom: clamp(64px, 8vw, 100px);
                        }
                        @media (min-width: 768px) {
                            .about-legacy__values-grid {
                                grid-template-columns: repeat(2, 1fr);
                                gap: 20px;
                            }
                        }
                        @media (min-width: 1200px) {
                            .about-legacy__values-grid {
                                grid-template-columns: repeat(4, 1fr);
                            }
                        }

                        .about-legacy__value-card {
                            position: relative;
                            padding: 32px 28px 36px;
                            background: #fff;
                            border: 1px solid rgba(0,0,0,0.08);
                            border-radius: 16px;
                            overflow: hidden;
                            transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                                        box-shadow 0.35s ease,
                                        border-color 0.35s ease;
                        }
                        .about-legacy__value-card:hover {
                            transform: translateY(-6px);
                            box-shadow: 0 24px 48px rgba(0,0,0,0.08);
                            border-color: rgba(240,70,14,0.25);
                        }
                        .about-legacy__value-card--1 { --card-accent: #F0460E; }
                        .about-legacy__value-card--2 { --card-accent: #111; }
                        .about-legacy__value-card--3 { --card-accent: #F0460E; }
                        .about-legacy__value-card--4 { --card-accent: #111; }

                        .about-legacy__value-icon {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 56px;
                            height: 56px;
                            margin-bottom: 20px;
                            border-radius: 12px;
                            background: rgba(240,70,14,0.08);
                            color: #F0460E;
                            transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
                        }
                        .about-legacy__value-card--2 .about-legacy__value-icon,
                        .about-legacy__value-card--4 .about-legacy__value-icon {
                            background: rgba(0,0,0,0.05);
                            color: #111;
                        }
                        .about-legacy__value-card:hover .about-legacy__value-icon {
                            background: var(--card-accent);
                            color: #fff;
                            transform: scale(1.05);
                        }
                        .about-legacy__value-number {
                            display: block;
                            font-size: 0.75rem;
                            font-weight: 700;
                            letter-spacing: 0.12em;
                            color: rgba(0,0,0,0.25);
                            margin-bottom: 8px;
                        }
                        .about-legacy__value-title {
                            font-size: 1.125rem;
                            letter-spacing: -0.01em;
                            margin-bottom: 12px;
                        }
                        .about-legacy__value-desc {
                            font-size: 0.9375rem;
                            line-height: 1.65;
                            color: rgba(0,0,0,0.55);
                        }
                        .about-legacy__value-line {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            height: 3px;
                            background: var(--card-accent);
                            transform: scaleX(0);
                            transform-origin: left;
                            transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
                        }
                        .about-legacy__value-card:hover .about-legacy__value-line {
                            transform: scaleX(1);
                        }

                        .about-legacy__products {
                            padding-top: 16px;
                            border-top: 1px solid rgba(0,0,0,0.08);
                        }
                    `,
                }}
            />
        </section>
    );
}
