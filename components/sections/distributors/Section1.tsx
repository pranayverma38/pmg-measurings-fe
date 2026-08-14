import RevealText from "@/components/effects/RevealText";
import DistributorsContent from "@/components/sections/distributors/DistributorsContent";
import InteractiveHeroSection from "@/components/shared/InteractiveHeroSection";
import LiquidGlassBadge from "@/components/shared/LiquidGlassBadge";

const ARROW_SVG = (
    <svg width="10" height="10" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor"/>
    </svg>
);

const HIGHLIGHTS = [
    "Exclusive territory opportunities",
    "Full PMG product catalogue access",
    "Dedicated partner support team",
    "Marketing & merchandising assets",
];

const PARTNER_NODES = [
    { label: "Quality", sub: "ISO-grade tools" },
    { label: "Territory", sub: "Exclusive zones" },
    { label: "Support", sub: "Dedicated team" },
    { label: "Growth", sub: "Co-marketing" },
];

export default function Section1() {
    return (
        <InteractiveHeroSection className="pmg-dist-hero sec-1-distributors">

            <div className="pmg-dist-hero__tape pmg-dist-hero__tape--top" aria-hidden="true" />

            <DistributorsContent className="pmg-dist-hero__body z-1">

                {/* ── Left column ─────────────────────────────────────── */}
                <div className="pmg-dist-hero__left">

                    <div className="pmg-dist-hero__eyebrow-row">
                        <LiquidGlassBadge cornerRadius={999} style={{ display: "inline-flex" }}>
                            <span className="pmg-dist-hero__eyebrow-pill">
                                Partner with PMG
                                <span className="pmg-dist-hero__eyebrow-arrow">{ARROW_SVG}</span>
                            </span>
                        </LiquidGlassBadge>
                        <span className="pmg-dist-hero__index" aria-hidden="true">02</span>
                    </div>

                    <h1 className="pmg-dist-hero__title reveal-text">
                        <RevealText>
                            Expand your hardware network with a{" "}
                            <em className="pmg-dist-hero__title-accent">precision tools</em>{" "}
                            brand built for growth
                        </RevealText>
                    </h1>

                    <p className="pmg-dist-hero__lead">
                        Join PMG&apos;s global distributor network and bring industry-leading measuring tapes,
                        spirit levels, and hand tools to your market. We partner with established wholesalers,
                        retailers, and trade suppliers who share our commitment to quality and reliability.
                    </p>

                    <ul className="pmg-dist-hero__highlights">
                        {HIGHLIGHTS.map((item) => (
                            <li key={item} className="pmg-dist-hero__highlight">
                                <span className="pmg-dist-hero__highlight-icon" aria-hidden="true">{ARROW_SVG}</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                </div>

                {/* ── Right column — partner network panel ─────────────── */}
                <div className="pmg-dist-hero__right" aria-hidden="true">
                    <div className="pmg-dist-hero__panel">
                        <div className="pmg-dist-hero__panel-glow" />

                        <div className="pmg-dist-hero__panel-header">
                            <span className="pmg-dist-hero__panel-label">Partner network</span>
                            <span className="pmg-dist-hero__panel-live">
                                <span className="pmg-dist-hero__panel-dot" />
                                Active
                            </span>
                        </div>

                        {/* Network nodes grid */}
                        <div className="pmg-dist-hero__nodes">
                            {PARTNER_NODES.map((node, i) => (
                                <div key={node.label} className="pmg-dist-hero__node" style={{ animationDelay: `${i * 0.15}s` }}>
                                    <div className="pmg-dist-hero__node-ring" />
                                    <span className="pmg-dist-hero__node-label">{node.label}</span>
                                    <span className="pmg-dist-hero__node-sub">{node.sub}</span>
                                </div>
                            ))}
                        </div>

                        {/* Connecting line */}
                        <div className="pmg-dist-hero__connector" aria-hidden="true">
                            <div className="pmg-dist-hero__connector-line" />
                            <div className="pmg-dist-hero__connector-pulse" />
                        </div>

                        {/* Bottom callout */}
                        <div className="pmg-dist-hero__callout">
                            <span className="pmg-dist-hero__callout-label">Coverage</span>
                            <span className="pmg-dist-hero__callout-value">Pan-India + Export</span>
                        </div>

                        <div className="pmg-dist-hero__wordmark">PMG</div>
                    </div>
                </div>

            </DistributorsContent>

            <div className="pmg-dist-hero__tape pmg-dist-hero__tape--bottom" aria-hidden="true" />

            <style dangerouslySetInnerHTML={{ __html: `
                .pmg-dist-hero {
                    position: relative;
                    min-height: 100svh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .pmg-dist-hero__tape {
                    position: relative;
                    height: 3px;
                    background: linear-gradient(90deg, transparent 0%, #ed431c 20%, #ed431c 80%, transparent 100%);
                    opacity: 0.7;
                    flex-shrink: 0;
                }
                .pmg-dist-hero__tape::before {
                    content: "";
                    position: absolute;
                    inset: -2px 0;
                    background: inherit;
                    filter: blur(6px);
                    opacity: 0.5;
                }
                .pmg-dist-hero__body {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 48px;
                    padding-top: clamp(80px, 10vw, 130px);
                    padding-bottom: clamp(60px, 7vw, 96px);
                }
                @media (min-width: 1024px) {
                    .pmg-dist-hero__body {
                        grid-template-columns: 1.1fr 0.9fr;
                        gap: 64px;
                        align-items: center;
                    }
                }

                /* ── Left ─── */
                .pmg-dist-hero__left { display: flex; flex-direction: column; gap: 28px; }
                .pmg-dist-hero__eyebrow-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .pmg-dist-hero__eyebrow-pill {
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
                .pmg-dist-hero__eyebrow-arrow { display: inline-flex; opacity: 0.7; }
                .pmg-dist-hero__index {
                    font-size: clamp(4rem, 10vw, 8rem);
                    font-weight: 800;
                    line-height: 1;
                    letter-spacing: -0.06em;
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(255,255,255,0.1);
                    user-select: none;
                }
                .pmg-dist-hero__title {
                    margin: 0;
                    font-size: clamp(2.4rem, 5vw, 4.2rem);
                    font-weight: 700;
                    line-height: 1.05;
                    letter-spacing: -0.04em;
                    color: #ffffff;
                }
                .pmg-dist-hero__title-accent {
                    font-style: normal;
                    color: #ed431c;
                }
                .pmg-dist-hero__lead {
                    margin: 0;
                    max-width: 38rem;
                    font-size: 1rem;
                    line-height: 1.75;
                    color: rgba(255, 255, 255, 0.6);
                }
                .pmg-dist-hero__highlights {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px 24px;
                    margin: 0; padding: 0; list-style: none;
                }
                @media (max-width: 600px) {
                    .pmg-dist-hero__highlights { grid-template-columns: 1fr; }
                }
                .pmg-dist-hero__highlight {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    font-size: 0.88rem;
                    font-weight: 500;
                    line-height: 1.45;
                    color: rgba(255,255,255,0.78);
                    padding: 14px 16px;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 12px;
                    transition: background 0.2s ease, border-color 0.2s ease;
                }
                .pmg-dist-hero__highlight:hover {
                    background: rgba(237,67,28,0.06);
                    border-color: rgba(237,67,28,0.2);
                }
                .pmg-dist-hero__highlight-icon { flex-shrink: 0; color: #ed431c; margin-top: 2px; }

                /* ── Right panel ─── */
                .pmg-dist-hero__right { display: none; }
                @media (min-width: 1024px) { .pmg-dist-hero__right { display: block; } }

                .pmg-dist-hero__panel {
                    position: relative;
                    padding: 32px;
                    background:
                        linear-gradient(135deg, rgba(237,67,28,0.06) 0%, rgba(255,255,255,0.02) 60%),
                        rgba(12,12,12,0.9);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 24px;
                    overflow: hidden;
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                }
                .pmg-dist-hero__panel::before {
                    content: "";
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #ed431c 50%, transparent);
                    opacity: 0.8;
                }
                .pmg-dist-hero__panel-glow {
                    position: absolute;
                    top: -60px; right: -60px;
                    width: 220px; height: 220px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(237,67,28,0.18) 0%, transparent 70%);
                    filter: blur(30px);
                    pointer-events: none;
                }
                .pmg-dist-hero__panel-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 28px;
                }
                .pmg-dist-hero__panel-label {
                    font-size: 0.68rem;
                    font-weight: 700;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                    color: rgba(237,67,28,0.85);
                }
                .pmg-dist-hero__panel-live {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.68rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.45);
                }
                .pmg-dist-hero__panel-dot {
                    width: 7px; height: 7px;
                    border-radius: 50%;
                    background: #ed431c;
                    box-shadow: 0 0 8px rgba(237,67,28,0.6);
                    animation: pmg-dist-pulse 2.4s ease-in-out infinite;
                }
                @keyframes pmg-dist-pulse {
                    0%,100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(0.7); }
                }

                /* Nodes */
                .pmg-dist-hero__nodes {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                    margin-bottom: 24px;
                }
                .pmg-dist-hero__node {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    padding: 18px 16px;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 16px;
                    overflow: hidden;
                    transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
                    animation: pmg-node-in 0.6s ease both;
                }
                @keyframes pmg-node-in {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .pmg-dist-hero__node:hover {
                    background: rgba(237,67,28,0.07);
                    border-color: rgba(237,67,28,0.25);
                    transform: translateY(-2px);
                }
                .pmg-dist-hero__node-ring {
                    position: absolute;
                    top: -20px; right: -20px;
                    width: 60px; height: 60px;
                    border-radius: 50%;
                    border: 1px solid rgba(237,67,28,0.15);
                    pointer-events: none;
                }
                .pmg-dist-hero__node-label {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #ffffff;
                    letter-spacing: -0.01em;
                }
                .pmg-dist-hero__node-sub {
                    font-size: 0.72rem;
                    font-weight: 500;
                    color: rgba(255,255,255,0.42);
                    letter-spacing: 0.03em;
                }

                /* Connector */
                .pmg-dist-hero__connector {
                    position: relative;
                    height: 2px;
                    background: rgba(255,255,255,0.06);
                    border-radius: 1px;
                    margin-bottom: 24px;
                    overflow: hidden;
                }
                .pmg-dist-hero__connector-pulse {
                    position: absolute;
                    top: 0; left: -30%;
                    width: 30%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, #ed431c, transparent);
                    animation: pmg-connector-slide 2.8s ease-in-out infinite;
                }
                @keyframes pmg-connector-slide {
                    from { left: -30%; }
                    to { left: 130%; }
                }

                /* Callout */
                .pmg-dist-hero__callout {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 14px 18px;
                    margin-bottom: 24px;
                    background: rgba(237,67,28,0.07);
                    border: 1px solid rgba(237,67,28,0.18);
                    border-radius: 12px;
                }
                .pmg-dist-hero__callout-label {
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.4);
                }
                .pmg-dist-hero__callout-value {
                    font-size: 0.9rem;
                    font-weight: 700;
                    color: #ffffff;
                    letter-spacing: -0.01em;
                }

                /* Ghost wordmark */
                .pmg-dist-hero__wordmark {
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
