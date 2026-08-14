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

            <div className="ah-layout">

                {/* ── Left ─────────────────────────────── */}
                <div className="ah-content">

                    <div className="ah-meta">
                        <LiquidGlassBadge cornerRadius={999} style={{ display: "inline-flex" }}>
                            <span className="ah-pill">About PMG {ARROW_SVG}</span>
                        </LiquidGlassBadge>
                        <span className="ah-num" aria-hidden="true">01</span>
                    </div>

                    <h1 className="ah-title">
                        Crafting durable and{" "}
                        <span className="ah-accent">accurate</span>{" "}
                        measuring solutions for professionals worldwide
                    </h1>

                    <div className="ah-divider" aria-hidden="true" />

                    <p className="ah-lead">
                        We are a precision tools brand dedicated to engineering hand tools that tradespeople
                        can rely on — from measuring tapes and spirit levels to specialty hardware built for
                        accuracy, longevity, and performance on every job.
                    </p>

                    <ul className="ah-list">
                        {HIGHLIGHTS.map((item) => (
                            <li key={item} className="ah-list-item">
                                <span className="ah-list-dot" aria-hidden="true" />
                                {item}
                            </li>
                        ))}
                    </ul>

                </div>

                {/* ── Right panel ───────────────────────── */}
                <aside className="ah-panel" aria-hidden="true">

                    <div className="ah-panel-top">
                        <span className="ah-panel-label">Precision specs</span>
                        <span className="ah-pulse" />
                    </div>

                    <div className="ah-specs">
                        {[
                            ["Accuracy", "±0.5mm"],
                            ["Range", "3–50 mtr"],
                            ["Products", "50+ series"],
                            ["Markets", "Global"],
                        ].map(([k, v]) => (
                            <div key={k} className="ah-spec">
                                <span className="ah-spec-k">{k}</span>
                                <span className="ah-spec-v">{v}</span>
                            </div>
                        ))}
                    </div>

                    <div className="ah-ruler">
                        {Array.from({ length: 20 }, (_, i) => (
                            <span key={i} className={`ah-tick${i % 5 === 0 ? " ah-tick--major" : ""}`} />
                        ))}
                    </div>

                    <div className="ah-mark">PMG</div>

                </aside>

            </div>

            <AboutHeroSlider slides={HERO_SLIDES} />

            <style dangerouslySetInnerHTML={{ __html: `
                /* Section */
                .ah-sec { position: relative; }

                /* Two-column layout — flex, no fr overflow bug */
                .ah-layout {
                    display: flex;
                    flex-direction: column;
                    min-height: 100svh;
                }
                @media (min-width: 1060px) {
                    .ah-layout {
                        flex-direction: row;
                        align-items: stretch;
                    }
                }

                /* Left content */
                .ah-content {
                    flex: 1 1 0;
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 28px;
                    padding: clamp(110px, 12vw, 150px) clamp(24px, 5vw, 72px) clamp(56px, 6vw, 80px);
                }

                /* Right panel */
                .ah-panel {
                    flex: 0 0 380px;
                    display: none;
                    flex-direction: column;
                    justify-content: center;
                    gap: 24px;
                    padding: 48px 36px;
                    border-left: 1px solid rgba(255,255,255,0.07);
                    background:
                        linear-gradient(160deg, rgba(237,67,28,0.05) 0%, transparent 50%),
                        rgba(10,10,10,0.7);
                    position: relative;
                    overflow: hidden;
                }
                @media (min-width: 1060px) { .ah-panel { display: flex; } }

                .ah-panel::before {
                    content: "";
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(237,67,28,0.5), transparent);
                }

                /* Meta row */
                .ah-meta {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                }
                .ah-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 18px;
                    font-size: 0.7rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: #ed431c;
                    white-space: nowrap;
                }
                .ah-num {
                    font-size: clamp(3rem, 8vw, 7rem);
                    font-weight: 800;
                    line-height: 1;
                    letter-spacing: -0.07em;
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(255,255,255,0.08);
                    user-select: none;
                }

                /* Title */
                .ah-title {
                    margin: 0;
                    font-size: clamp(2.4rem, 4.8vw, 4.2rem);
                    font-weight: 700;
                    line-height: 1.06;
                    letter-spacing: -0.04em;
                    color: #fff;
                    max-width: 700px;
                    animation: ah-rise 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both;
                }
                @keyframes ah-rise {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .ah-accent { color: #ed431c; }

                /* Divider */
                .ah-divider {
                    height: 1px;
                    background: linear-gradient(90deg, #ed431c 0%, rgba(237,67,28,0.15) 60%, transparent 100%);
                    max-width: 280px;
                }

                /* Lead */
                .ah-lead {
                    margin: 0;
                    font-size: 1rem;
                    line-height: 1.78;
                    color: rgba(255,255,255,0.65);
                    max-width: 540px;
                }

                /* List */
                .ah-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px 32px;
                    margin: 0; padding: 0; list-style: none;
                }
                @media (max-width: 640px) { .ah-list { grid-template-columns: 1fr; } }
                .ah-list-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    font-size: 0.88rem;
                    font-weight: 500;
                    color: rgba(255,255,255,0.72);
                    line-height: 1.5;
                }
                .ah-list-dot {
                    flex-shrink: 0;
                    width: 6px; height: 6px;
                    border-radius: 50%;
                    background: #ed431c;
                    margin-top: 5px;
                    box-shadow: 0 0 6px rgba(237,67,28,0.5);
                }

                /* Right panel internals */
                .ah-panel-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .ah-panel-label {
                    font-size: 0.62rem;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: rgba(237,67,28,0.8);
                }
                .ah-pulse {
                    width: 8px; height: 8px;
                    border-radius: 50%;
                    background: #ed431c;
                    box-shadow: 0 0 8px rgba(237,67,28,0.6);
                    animation: ah-blink 2.4s ease-in-out infinite;
                }
                @keyframes ah-blink {
                    0%,100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.3; transform: scale(0.65); }
                }

                .ah-specs {
                    display: flex;
                    flex-direction: column;
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 14px;
                    overflow: hidden;
                }
                .ah-spec {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 13px 18px;
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                    transition: background 0.2s ease;
                }
                .ah-spec:last-child { border-bottom: none; }
                .ah-spec:hover { background: rgba(237,67,28,0.05); }
                .ah-spec-k {
                    font-size: 0.73rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                    color: rgba(255,255,255,0.38);
                }
                .ah-spec-v {
                    font-size: 0.98rem;
                    font-weight: 700;
                    color: #fff;
                    letter-spacing: -0.01em;
                    font-variant-numeric: tabular-nums;
                }

                /* Ruler */
                .ah-ruler {
                    display: flex;
                    align-items: flex-end;
                    gap: 5px;
                    padding-bottom: 8px;
                    border-bottom: 1px solid rgba(255,255,255,0.07);
                }
                .ah-tick {
                    flex: 1;
                    height: 8px;
                    border-radius: 1px;
                    background: rgba(237,67,28,0.3);
                    transition: height 0.15s, background 0.15s;
                    cursor: default;
                }
                .ah-tick:hover { height: 20px; background: #ed431c; }
                .ah-tick--major { height: 20px; background: rgba(237,67,28,0.6); }

                /* Ghost wordmark */
                .ah-mark {
                    font-size: 5rem;
                    font-weight: 900;
                    letter-spacing: -0.08em;
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(255,255,255,0.06);
                    text-align: right;
                    line-height: 1;
                    user-select: none;
                }
            `}} />
        </InteractiveHeroSection>
    );
}
