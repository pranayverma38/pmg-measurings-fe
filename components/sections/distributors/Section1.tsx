import InteractiveHeroSection from "@/components/shared/InteractiveHeroSection";
import LiquidGlassBadge from "@/components/shared/LiquidGlassBadge";

const ARROW_SVG = (
    <svg width="10" height="10" viewBox="0 0 11 11" fill="none">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor"/>
    </svg>
);

const HIGHLIGHTS = [
    "Exclusive territory opportunities",
    "Full PMG product catalogue access",
    "Dedicated partner support team",
    "Marketing & merchandising assets",
];

const PARTNER_ITEMS = [
    { label: "Quality", value: "ISO-grade tools" },
    { label: "Territory", value: "Exclusive zones" },
    { label: "Support", value: "Dedicated team" },
    { label: "Coverage", value: "Pan-India & Export" },
];

export default function Section1() {
    return (
        <InteractiveHeroSection className="dh-sec">

            <div className="dh-layout">

                {/* ── Left ─────────────────────────────── */}
                <div className="dh-content">

                    <div className="dh-meta">
                        <LiquidGlassBadge cornerRadius={999} style={{ display: "inline-flex" }}>
                            <span className="dh-pill">Partner with PMG {ARROW_SVG}</span>
                        </LiquidGlassBadge>
                        <span className="dh-num" aria-hidden="true">02</span>
                    </div>

                    <h1 className="dh-title">
                        Expand your hardware network with a{" "}
                        <span className="dh-accent">precision tools</span>{" "}
                        brand built for growth
                    </h1>

                    <div className="dh-divider" aria-hidden="true" />

                    <p className="dh-lead">
                        Join PMG&apos;s global distributor network and bring industry-leading measuring tapes,
                        spirit levels, and hand tools to your market. We partner with established wholesalers,
                        retailers, and trade suppliers who share our commitment to quality and reliability.
                    </p>

                    <ul className="dh-list">
                        {HIGHLIGHTS.map((item) => (
                            <li key={item} className="dh-list-item">
                                <span className="dh-list-dot" aria-hidden="true" />
                                {item}
                            </li>
                        ))}
                    </ul>

                </div>

                {/* ── Right panel ───────────────────────── */}
                <aside className="dh-panel" aria-hidden="true">

                    <div className="dh-panel-top">
                        <span className="dh-panel-label">Partner network</span>
                        <span className="dh-status">
                            <span className="dh-pulse" />
                            Active
                        </span>
                    </div>

                    <div className="dh-nodes">
                        {PARTNER_ITEMS.map((item, i) => (
                            <div key={item.label} className="dh-node" style={{ animationDelay: `${i * 0.1}s` }}>
                                <span className="dh-node-label">{item.label}</span>
                                <span className="dh-node-value">{item.value}</span>
                            </div>
                        ))}
                    </div>

                    <div className="dh-connector">
                        <div className="dh-connector-bar" />
                        <div className="dh-connector-pulse" />
                    </div>

                    <div className="dh-callout">
                        <span className="dh-callout-k">Distribution reach</span>
                        <span className="dh-callout-v">Pan-India + Export</span>
                    </div>

                    <div className="dh-mark">PMG</div>

                </aside>

            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                /* Section */
                .dh-sec { position: relative; }

                /* Two-column flex layout */
                .dh-layout {
                    display: flex;
                    flex-direction: column;
                    min-height: 100svh;
                }
                @media (min-width: 1060px) {
                    .dh-layout {
                        flex-direction: row;
                        align-items: stretch;
                    }
                }

                /* Left content */
                .dh-content {
                    flex: 1 1 0;
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 28px;
                    padding: clamp(110px, 12vw, 150px) clamp(24px, 5vw, 72px) clamp(56px, 6vw, 80px);
                }

                /* Right panel */
                .dh-panel {
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
                @media (min-width: 1060px) { .dh-panel { display: flex; } }
                .dh-panel::before {
                    content: "";
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(237,67,28,0.5), transparent);
                }

                /* Meta */
                .dh-meta {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                }
                .dh-pill {
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
                .dh-num {
                    font-size: clamp(3rem, 8vw, 7rem);
                    font-weight: 800;
                    line-height: 1;
                    letter-spacing: -0.07em;
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(255,255,255,0.08);
                    user-select: none;
                }

                /* Title */
                .dh-title {
                    margin: 0;
                    font-size: clamp(2.4rem, 4.8vw, 4.2rem);
                    font-weight: 700;
                    line-height: 1.06;
                    letter-spacing: -0.04em;
                    color: #fff;
                    max-width: 700px;
                    animation: dh-rise 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both;
                }
                @keyframes dh-rise {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .dh-accent { color: #ed431c; }

                /* Divider */
                .dh-divider {
                    height: 1px;
                    background: linear-gradient(90deg, #ed431c 0%, rgba(237,67,28,0.15) 60%, transparent 100%);
                    max-width: 280px;
                }

                /* Lead */
                .dh-lead {
                    margin: 0;
                    font-size: 1rem;
                    line-height: 1.78;
                    color: rgba(255,255,255,0.65);
                    max-width: 540px;
                }

                /* List */
                .dh-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px 32px;
                    margin: 0; padding: 0; list-style: none;
                }
                @media (max-width: 640px) { .dh-list { grid-template-columns: 1fr; } }
                .dh-list-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    font-size: 0.88rem;
                    font-weight: 500;
                    color: rgba(255,255,255,0.72);
                    line-height: 1.5;
                }
                .dh-list-dot {
                    flex-shrink: 0;
                    width: 6px; height: 6px;
                    border-radius: 50%;
                    background: #ed431c;
                    margin-top: 5px;
                    box-shadow: 0 0 6px rgba(237,67,28,0.5);
                }

                /* Panel internals */
                .dh-panel-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .dh-panel-label {
                    font-size: 0.62rem;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: rgba(237,67,28,0.8);
                }
                .dh-status {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.62rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.4);
                }
                .dh-pulse {
                    width: 7px; height: 7px;
                    border-radius: 50%;
                    background: #ed431c;
                    box-shadow: 0 0 8px rgba(237,67,28,0.6);
                    animation: dh-blink 2.4s ease-in-out infinite;
                }
                @keyframes dh-blink {
                    0%,100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.3; transform: scale(0.65); }
                }

                /* Partner nodes */
                .dh-nodes {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }
                .dh-node {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    padding: 16px 14px;
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 14px;
                    background: rgba(255,255,255,0.02);
                    transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
                    animation: dh-nodein 0.5s ease both;
                }
                @keyframes dh-nodein {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .dh-node:hover {
                    background: rgba(237,67,28,0.06);
                    border-color: rgba(237,67,28,0.22);
                    transform: translateY(-2px);
                }
                .dh-node-label {
                    font-size: 0.98rem;
                    font-weight: 700;
                    color: #fff;
                    letter-spacing: -0.01em;
                }
                .dh-node-value {
                    font-size: 0.72rem;
                    font-weight: 500;
                    color: rgba(255,255,255,0.4);
                    letter-spacing: 0.02em;
                }

                /* Connector */
                .dh-connector {
                    position: relative;
                    height: 2px;
                    background: rgba(255,255,255,0.06);
                    border-radius: 1px;
                    overflow: hidden;
                }
                .dh-connector-bar { width: 100%; height: 100%; background: rgba(255,255,255,0.04); }
                .dh-connector-pulse {
                    position: absolute;
                    top: 0; left: -30%;
                    width: 30%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, #ed431c, transparent);
                    animation: dh-slide 2.5s ease-in-out infinite;
                }
                @keyframes dh-slide {
                    from { left: -30%; }
                    to { left: 130%; }
                }

                /* Callout */
                .dh-callout {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 13px 16px;
                    border: 1px solid rgba(237,67,28,0.16);
                    border-radius: 12px;
                    background: rgba(237,67,28,0.05);
                }
                .dh-callout-k {
                    font-size: 0.7rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.36);
                }
                .dh-callout-v {
                    font-size: 0.88rem;
                    font-weight: 700;
                    color: #fff;
                }

                /* Ghost wordmark */
                .dh-mark {
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
