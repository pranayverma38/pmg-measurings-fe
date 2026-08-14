import AboutHeroSlider from "@/components/sections/about-1/AboutHeroSlider";
import InteractiveHeroSection from "@/components/shared/InteractiveHeroSection";
import LiquidGlassBadge from "@/components/shared/LiquidGlassBadge";
import { buildProductCoverSlides } from "@/lib/productImages";

const HERO_SLIDES = buildProductCoverSlides(
    ["GLASS SERIES", "LOCKLIINE SERIES", "PRIME SERIES", "ECO SERIES", "LINEX SERIES", "SIGNATURE SERIES"],
    (series) => `PMG ${series}`
);

const ARROW_SVG = (
    <svg width="10" height="10" viewBox="0 0 11 11" fill="none">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor"/>
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
        <InteractiveHeroSection className="ah-sec">

            <div className="ah-wrap">

                {/* ── Top bar ─── */}
                <div className="ah-topbar">
                    <LiquidGlassBadge cornerRadius={999} style={{ display: "inline-flex" }}>
                        <span className="ah-pill">About PMG {ARROW_SVG}</span>
                    </LiquidGlassBadge>
                    <span className="ah-index" aria-hidden="true">01</span>
                </div>

                {/* ── Giant headline ─── */}
                <div className="ah-headline-wrap">
                    <h1 className="ah-headline">
                        <span className="ah-hl-line ah-hl-line--1">Crafting durable and</span>
                        <span className="ah-hl-line ah-hl-line--2">
                            <em className="ah-hl-accent">accurate</em>
                        </span>
                        <span className="ah-hl-line ah-hl-line--3">measuring solutions</span>
                        <span className="ah-hl-line ah-hl-line--4">for professionals worldwide</span>
                    </h1>
                </div>

                {/* ── Rule ─── */}
                <div className="ah-rule" aria-hidden="true">
                    <span className="ah-rule-line" />
                    <span className="ah-rule-dot" />
                    <span className="ah-rule-line ah-rule-line--faint" />
                </div>

                {/* ── Bottom: desc + highlights ─── */}
                <div className="ah-bottom">
                    <p className="ah-lead">
                        We are a precision tools brand dedicated to engineering hand tools that tradespeople
                        can rely on — from measuring tapes and spirit levels to specialty hardware built for
                        accuracy, longevity, and performance on every job.
                    </p>

                    <ul className="ah-list">
                        {HIGHLIGHTS.map((item, i) => (
                            <li key={item} className="ah-list-item" style={{ animationDelay: `${0.45 + i * 0.08}s` }}>
                                <span className="ah-list-dot" aria-hidden="true" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <AboutHeroSlider slides={HERO_SLIDES} />

            <style dangerouslySetInnerHTML={{ __html: `
                /* ── Section ─────────────────────────────────────────── */
                .ah-sec { position: relative; }

                /* ── Outer wrapper ───────────────────────────────────── */
                .ah-wrap {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    padding: clamp(110px, 11vw, 148px) clamp(24px, 6vw, 96px) clamp(52px, 6vw, 80px);
                    max-width: 1400px;
                    margin: 0 auto;
                    min-height: 92svh;
                    justify-content: center;
                    gap: 0;
                }

                /* ── Top bar: pill + index ───────────────────────────── */
                .ah-topbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 32px;
                }
                .ah-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 9px;
                    padding: 10px 20px;
                    font-size: 0.68rem;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #ed431c;
                    white-space: nowrap;
                }
                .ah-index {
                    font-size: clamp(4rem, 10vw, 9rem);
                    font-weight: 900;
                    line-height: 1;
                    letter-spacing: -0.07em;
                    color: transparent;
                    -webkit-text-stroke: 1.5px rgba(255,255,255,0.07);
                    user-select: none;
                    pointer-events: none;
                }

                /* ── Headline ────────────────────────────────────────── */
                .ah-headline-wrap { margin-bottom: 36px; overflow: hidden; }
                .ah-headline {
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }
                .ah-hl-line {
                    display: block;
                    font-weight: 700;
                    line-height: 1.03;
                    letter-spacing: -0.045em;
                    color: #ffffff;
                    animation: ahl-up 0.72s cubic-bezier(0.22,1,0.36,1) both;
                }
                .ah-hl-line--1 {
                    font-size: clamp(2rem, 4.8vw, 4.2rem);
                    color: rgba(255,255,255,0.55);
                    animation-delay: 0.05s;
                }
                .ah-hl-line--2 {
                    font-size: clamp(3.8rem, 9.5vw, 8.5rem);
                    line-height: 0.95;
                    margin: 4px 0;
                    animation-delay: 0.15s;
                }
                .ah-hl-line--3 {
                    font-size: clamp(2rem, 4.8vw, 4.2rem);
                    animation-delay: 0.25s;
                }
                .ah-hl-line--4 {
                    font-size: clamp(1.5rem, 3.4vw, 3rem);
                    color: rgba(255,255,255,0.42);
                    animation-delay: 0.32s;
                }
                .ah-hl-accent {
                    font-style: normal;
                    color: #ed431c;
                    position: relative;
                    display: inline-block;
                }
                .ah-hl-accent::after {
                    content: "";
                    position: absolute;
                    left: 0; right: 0;
                    bottom: 6px;
                    height: 3px;
                    background: #ed431c;
                    opacity: 0.35;
                    border-radius: 999px;
                }
                @keyframes ahl-up {
                    from { opacity: 0; transform: translateY(28px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                /* ── Rule ────────────────────────────────────────────── */
                .ah-rule {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 36px;
                    animation: ahl-up 0.6s ease 0.4s both;
                }
                .ah-rule-line {
                    height: 1px;
                    flex: 0 0 80px;
                    background: #ed431c;
                    opacity: 0.8;
                }
                .ah-rule-dot {
                    width: 5px; height: 5px;
                    border-radius: 50%;
                    background: #ed431c;
                    flex-shrink: 0;
                }
                .ah-rule-line--faint {
                    flex: 1;
                    opacity: 0.12;
                    background: rgba(255,255,255,0.5);
                }

                /* ── Bottom ──────────────────────────────────────────── */
                .ah-bottom {
                    display: grid;
                    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
                    gap: 32px 64px;
                    align-items: start;
                    animation: ahl-up 0.6s ease 0.5s both;
                }
                @media (max-width: 768px) {
                    .ah-bottom { grid-template-columns: 1fr; }
                }
                .ah-lead {
                    margin: 0;
                    font-size: 1.02rem;
                    line-height: 1.78;
                    color: rgba(255,255,255,0.62);
                }
                .ah-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px 24px;
                    margin: 0; padding: 0; list-style: none;
                }
                @media (max-width: 560px) { .ah-list { grid-template-columns: 1fr; } }
                .ah-list-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    font-size: 0.86rem;
                    font-weight: 500;
                    color: rgba(255,255,255,0.7);
                    line-height: 1.5;
                    animation: ahl-up 0.5s ease both;
                }
                .ah-list-dot {
                    flex-shrink: 0;
                    width: 5px; height: 5px;
                    border-radius: 50%;
                    background: #ed431c;
                    margin-top: 6px;
                    box-shadow: 0 0 6px rgba(237,67,28,0.6);
                }
            `}} />
        </InteractiveHeroSection>
    );
}
