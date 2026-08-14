import InteractiveHeroSection from "@/components/shared/InteractiveHeroSection";

const HIGHLIGHTS = [
    "Exclusive territory opportunities",
    "Full PMG product catalogue access",
    "Dedicated partner support team",
    "Marketing & merchandising assets",
];

export default function Section1() {
    return (
        <InteractiveHeroSection className="dh-sec">

            <div className="dh-glow" aria-hidden="true" />

            <div className="dh-wrap">

                <h1 className="dh-headline">
                    <span className="dh-hl">Expand your hardware network</span>
                    <span className="dh-hl">with a precision tools</span>
                    <span className="dh-hl">brand built for growth</span>
                </h1>

                <div className="dh-rule" aria-hidden="true">
                    <span className="dh-rule-edge" />
                    <span className="dh-rule-center" />
                    <span className="dh-rule-edge" />
                </div>

                <p className="dh-lead">
                    Join PMG&apos;s global distributor network and bring industry-leading measuring tapes,
                    spirit levels, and hand tools to your market. We partner with established wholesalers,
                    retailers, and trade suppliers who share our commitment to quality and reliability.
                </p>

                <ul className="dh-list">
                    {HIGHLIGHTS.map((item, i) => (
                        <li key={item} className="dh-item" style={{ animationDelay: `${0.45 + i * 0.07}s` }}>
                            <span className="dh-dot" aria-hidden="true" />
                            {item}
                        </li>
                    ))}
                </ul>

            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .dh-sec { position: relative; overflow: hidden; }

                .dh-glow {
                    position: absolute;
                    top: 20%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: min(800px, 90vw);
                    height: 320px;
                    border-radius: 50%;
                    background: radial-gradient(ellipse, rgba(237,67,28,0.09) 0%, transparent 70%);
                    filter: blur(48px);
                    pointer-events: none;
                    z-index: 0;
                }

                .dh-wrap {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    padding: clamp(92px, 9vw, 120px) clamp(20px, 5vw, 80px) clamp(48px, 5vw, 72px);
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .dh-headline {
                    margin: 0 0 36px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                    width: 100%;
                }
                .dh-hl {
                    display: block;
                    font-size: clamp(2.4rem, 6vw, 5.4rem);
                    font-weight: 700;
                    letter-spacing: -0.04em;
                    line-height: 1.08;
                    color: #ffffff;
                    opacity: 0;
                    animation: dh-rise 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
                }
                .dh-hl:nth-child(1) { animation-delay: 0.05s; }
                .dh-hl:nth-child(2) { animation-delay: 0.14s; }
                .dh-hl:nth-child(3) { animation-delay: 0.22s; }

                @keyframes dh-rise {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes dh-in {
                    from { opacity: 0; transform: translateY(8px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                .dh-rule {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    width: min(480px, 90%);
                    margin-bottom: 28px;
                    opacity: 0;
                    animation: dh-in 0.5s ease 0.32s forwards;
                }
                .dh-rule-edge {
                    flex: 1;
                    height: 1px;
                    background: linear-gradient(to right, transparent, rgba(255,255,255,0.1));
                }
                .dh-rule-edge:last-child {
                    background: linear-gradient(to left, transparent, rgba(255,255,255,0.1));
                }
                .dh-rule-center {
                    flex: 0 0 44px;
                    height: 1px;
                    background: #ed431c;
                    opacity: 0.7;
                }

                .dh-lead {
                    margin: 0 0 28px;
                    max-width: 500px;
                    font-size: 1rem;
                    line-height: 1.8;
                    color: rgba(255,255,255,0.52);
                    opacity: 0;
                    animation: dh-in 0.5s ease 0.4s forwards;
                }

                .dh-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px 40px;
                    margin: 0; padding: 0; list-style: none;
                    max-width: 640px;
                    width: 100%;
                    opacity: 0;
                    animation: dh-in 0.5s ease 0.48s forwards;
                }
                @media (max-width: 560px) { .dh-list { grid-template-columns: 1fr; } }
                .dh-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    font-size: 0.86rem;
                    font-weight: 500;
                    color: rgba(255,255,255,0.62);
                    line-height: 1.5;
                    text-align: left;
                }
                .dh-dot {
                    flex-shrink: 0;
                    width: 5px; height: 5px;
                    border-radius: 50%;
                    background: #ed431c;
                    margin-top: 6px;
                    box-shadow: 0 0 8px rgba(237,67,28,0.5);
                }
            `}} />
        </InteractiveHeroSection>
    );
}
