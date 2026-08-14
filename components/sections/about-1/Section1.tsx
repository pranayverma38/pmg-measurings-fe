import RevealText from "@/components/effects/RevealText";
import PageContent from "@/components/shared/PageContent";
import AboutHeroSlider from "@/components/sections/about-1/AboutHeroSlider";
import InteractiveHeroSection from "@/components/shared/InteractiveHeroSection";
import LiquidGlassBadge from "@/components/shared/LiquidGlassBadge";
import { buildProductCoverSlides } from "@/lib/productImages";

const HERO_SLIDES = buildProductCoverSlides(
    ["GLASS SERIES", "LOCKLIINE SERIES", "PRIME SERIES", "ECO SERIES", "LINEX SERIES", "SIGNATURE SERIES"],
    (series) => `PMG ${series}`
);

const ARROW_SVG = (
    <svg width="10" height="10" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor"/>
    </svg>
);

const HIGHLIGHTS = [
    "Precision measuring tapes and spirit levels",
    "Durable construction for demanding job sites",
    "Trusted by distributors and professionals worldwide",
    "Continuous innovation across product series",
];

const SPEC_ROWS = [
    { label: "Accuracy", value: "±0.5mm" },
    { label: "Range", value: "3 – 50 mtr" },
    { label: "Products", value: "50+ series" },
    { label: "Markets", value: "Global" },
];

export default function Section1() {
    return (
        <InteractiveHeroSection className="pmg-about-hero sec-1-about">

            <div className="pmg-about-hero__tape pmg-about-hero__tape--top" aria-hidden="true" />

            <PageContent className="pmg-about-hero__body z-1">

                {/* ── Left column ─────────────────────────────────────── */}
                <div className="pmg-about-hero__left">

                    <div className="pmg-about-hero__eyebrow-row">
                        <LiquidGlassBadge cornerRadius={999} style={{ display: "inline-flex" }}>
                            <span className="pmg-about-hero__eyebrow-pill">
                                About PMG
                                <span className="pmg-about-hero__eyebrow-arrow">{ARROW_SVG}</span>
                            </span>
                        </LiquidGlassBadge>
                        <span className="pmg-about-hero__index" aria-hidden="true">01</span>
                    </div>

                    <h1 className="pmg-about-hero__title reveal-text">
                        <RevealText>
                            Crafting durable and{" "}
                            <em className="pmg-about-hero__title-accent">accurate</em>{" "}
                            measuring solutions for professionals worldwide
                        </RevealText>
                    </h1>

                    <p className="pmg-about-hero__lead">
                        We are a precision tools brand dedicated to engineering hand tools that tradespeople
                        can rely on — from measuring tapes and spirit levels to specialty hardware built for
                        accuracy, longevity, and performance on every job.
                    </p>

                    <ul className="pmg-about-hero__highlights">
                        {HIGHLIGHTS.map((item) => (
                            <li key={item} className="pmg-about-hero__highlight">
                                <span className="pmg-about-hero__highlight-icon" aria-hidden="true">{ARROW_SVG}</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                </div>

                {/* ── Right column — spec panel ────────────────────────── */}
                <div className="pmg-about-hero__right" aria-hidden="true">
                    <div className="pmg-about-hero__panel">
                        <div className="pmg-about-hero__panel-glow" />

                        <div className="pmg-about-hero__panel-header">
                            <span className="pmg-about-hero__panel-label">Precision specs</span>
                            <span className="pmg-about-hero__panel-dot" />
                        </div>

                        <div className="pmg-about-hero__specs">
                            {SPEC_ROWS.map((row) => (
                                <div key={row.label} className="pmg-about-hero__spec-row">
                                    <span className="pmg-about-hero__spec-label">{row.label}</span>
                                    <span className="pmg-about-hero__spec-value">{row.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pmg-about-hero__ruler-visual" aria-hidden="true">
                            {Array.from({ length: 26 }, (_, i) => (
                                <div key={i} className={`pmg-about-hero__tick${i % 5 === 0 ? " is-major" : ""}`}>
                                    {i % 5 === 0 && <span className="pmg-about-hero__tick-label">{i * 2}</span>}
                                </div>
                            ))}
                        </div>

                        <div className="pmg-about-hero__wordmark">PMG</div>
                    </div>
                </div>

            </PageContent>

            <div className="pmg-about-hero__tape pmg-about-hero__tape--bottom" aria-hidden="true" />

            <AboutHeroSlider slides={HERO_SLIDES} />

            <style dangerouslySetInnerHTML={{ __html: `
                .pmg-about-hero {
                    position: relative;
                    min-height: 100svh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .pmg-about-hero__tape {
                    position: relative;
                    height: 3px;
                    background: linear-gradient(90deg, transparent 0%, #ed431c 20%, #ed431c 80%, transparent 100%);
                    opacity: 0.7;
                    flex-shrink: 0;
                }
                .pmg-about-hero__tape::before {
                    content: "";
                    position: absolute;
                    inset: -2px 0;
                    background: inherit;
                    filter: blur(6px);
                    opacity: 0.5;
                }
                .pmg-about-hero__body {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 48px;
                    padding-top: clamp(80px, 10vw, 130px);
                    padding-bottom: clamp(60px, 7vw, 96px);
                }
                @media (min-width: 1024px) {
                    .pmg-about-hero__body {
                        grid-template-columns: 1.1fr 0.9fr;
                        gap: 64px;
                        align-items: center;
                    }
                }

                /* ── Left ─── */
                .pmg-about-hero__left { display: flex; flex-direction: column; gap: 28px; }
                .pmg-about-hero__eyebrow-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .pmg-about-hero__eyebrow-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 9px 16px;
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: #ed431c;
                }
                .pmg-about-hero__eyebrow-arrow { display: inline-flex; opacity: 0.7; }
                .pmg-about-hero__index {
                    font-size: clamp(4rem, 10vw, 8rem);
                    font-weight: 800;
                    line-height: 1;
                    letter-spacing: -0.06em;
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(255,255,255,0.1);
                    user-select: none;
                    pointer-events: none;
                }
                .pmg-about-hero__title {
                    margin: 0;
                    font-size: clamp(2.4rem, 5vw, 4.2rem);
                    font-weight: 700;
                    line-height: 1.05;
                    letter-spacing: -0.04em;
                    color: #ffffff;
                }
                .pmg-about-hero__title-accent {
                    font-style: normal;
                    color: #ed431c;
                    position: relative;
                }
                .pmg-about-hero__lead {
                    margin: 0;
                    max-width: 38rem;
                    font-size: 1rem;
                    line-height: 1.75;
                    color: rgba(255, 255, 255, 0.6);
                }
                .pmg-about-hero__highlights {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px 24px;
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }
                @media (max-width: 600px) {
                    .pmg-about-hero__highlights { grid-template-columns: 1fr; }
                }
                .pmg-about-hero__highlight {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    font-size: 0.88rem;
                    font-weight: 500;
                    line-height: 1.45;
                    color: rgba(255, 255, 255, 0.78);
                    padding: 14px 16px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.07);
                    border-radius: 12px;
                    transition: background 0.2s ease, border-color 0.2s ease;
                }
                .pmg-about-hero__highlight:hover {
                    background: rgba(237, 67, 28, 0.06);
                    border-color: rgba(237, 67, 28, 0.2);
                }
                .pmg-about-hero__highlight-icon {
                    flex-shrink: 0;
                    color: #ed431c;
                    margin-top: 2px;
                }

                /* ── Right panel ─── */
                .pmg-about-hero__right { display: none; }
                @media (min-width: 1024px) { .pmg-about-hero__right { display: block; } }

                .pmg-about-hero__panel {
                    position: relative;
                    padding: 32px;
                    background:
                        linear-gradient(135deg, rgba(237,67,28,0.06) 0%, rgba(255,255,255,0.02) 60%),
                        rgba(12, 12, 12, 0.9);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 24px;
                    overflow: hidden;
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                }
                .pmg-about-hero__panel::before {
                    content: "";
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #ed431c 50%, transparent);
                    opacity: 0.8;
                }
                .pmg-about-hero__panel-glow {
                    position: absolute;
                    top: -60px; right: -60px;
                    width: 220px; height: 220px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(237,67,28,0.18) 0%, transparent 70%);
                    filter: blur(30px);
                    pointer-events: none;
                }
                .pmg-about-hero__panel-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 24px;
                }
                .pmg-about-hero__panel-label {
                    font-size: 0.68rem;
                    font-weight: 700;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                    color: rgba(237, 67, 28, 0.85);
                }
                .pmg-about-hero__panel-dot {
                    width: 8px; height: 8px;
                    border-radius: 50%;
                    background: #ed431c;
                    box-shadow: 0 0 10px rgba(237,67,28,0.6);
                    animation: pmg-hero-pulse 2.4s ease-in-out infinite;
                }
                @keyframes pmg-hero-pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(0.75); }
                }
                .pmg-about-hero__specs {
                    display: grid;
                    gap: 0;
                    margin-bottom: 28px;
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 12px;
                    overflow: hidden;
                }
                .pmg-about-hero__spec-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 14px 18px;
                    border-bottom: 1px solid rgba(255,255,255,0.06);
                    transition: background 0.2s ease;
                }
                .pmg-about-hero__spec-row:last-child { border-bottom: none; }
                .pmg-about-hero__spec-row:hover { background: rgba(237,67,28,0.05); }
                .pmg-about-hero__spec-label {
                    font-size: 0.78rem;
                    font-weight: 500;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.42);
                }
                .pmg-about-hero__spec-value {
                    font-size: 1rem;
                    font-weight: 700;
                    letter-spacing: -0.01em;
                    color: #ffffff;
                    font-variant-numeric: tabular-nums;
                }

                /* Ruler visual */
                .pmg-about-hero__ruler-visual {
                    display: flex;
                    align-items: flex-end;
                    gap: 3px;
                    height: 44px;
                    padding: 0 2px;
                    margin-bottom: 28px;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                }
                .pmg-about-hero__tick {
                    flex: 1;
                    height: 10px;
                    background: rgba(237,67,28,0.4);
                    border-radius: 1px;
                    transition: height 0.15s ease, background 0.15s ease;
                    cursor: default;
                }
                .pmg-about-hero__tick:hover { height: 20px; background: #ed431c; }
                .pmg-about-hero__tick.is-major {
                    height: 24px;
                    background: rgba(237,67,28,0.75);
                    position: relative;
                }
                .pmg-about-hero__tick-label {
                    position: absolute;
                    bottom: calc(100% + 4px);
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 0.52rem;
                    font-weight: 600;
                    color: rgba(255,255,255,0.38);
                    white-space: nowrap;
                    letter-spacing: 0.04em;
                }

                /* Big ghost wordmark */
                .pmg-about-hero__wordmark {
                    font-size: 4.5rem;
                    font-weight: 900;
                    letter-spacing: -0.06em;
                    line-height: 1;
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(255,255,255,0.07);
                    user-select: none;
                    text-align: right;
                }
            `}} />
        </InteractiveHeroSection>
    );
}
