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

                <p className="dh-kicker">Partner with PMG</p>

                <h1 className="dh-headline">
                    <span className="dh-hl dh-hl--muted">Expand your hardware network</span>
                    <span className="dh-hl dh-hl--muted2">with a</span>
                    <span className="dh-hl dh-hl--accent">precision tools</span>
                    <span className="dh-hl dh-hl--bright">brand built for growth</span>
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
                        <li key={item} className="dh-item" style={{ animationDelay: `${0.5 + i * 0.07}s` }}>
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
                    top: 18%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: min(900px, 90vw);
                    height: 360px;
                    border-radius: 50%;
                    background: radial-gradient(ellipse, rgba(237,67,28,0.13) 0%, transparent 68%);
                    filter: blur(40px);
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
                    max-width: 1300px;
                    margin: 0 auto;
                }

                .dh-kicker {
                    margin: 0 0 28px;
                    font-size: 0.68rem;
                    font-weight: 700;
                    letter-spacing: 0.22em;
                    text-transform: uppercase;
                    color: #ed431c;
                    opacity: 0;
                    animation: dh-in 0.5s ease 0.05s forwards;
                }

                .dh-headline {
                    margin: 0 0 36px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0;
                    width: 100%;
                }
                .dh-hl {
                    display: block;
                    font-weight: 800;
                    letter-spacing: -0.045em;
                    line-height: 1.02;
                    opacity: 0;
                    animation: dh-rise 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
                }
                .dh-hl--muted {
                    font-size: clamp(1.8rem, 4.2vw, 3.8rem);
                    color: rgba(255,255,255,0.38);
                    animation-delay: 0.08s;
                }
                .dh-hl--muted2 {
                    font-size: clamp(1.4rem, 3vw, 2.8rem);
                    color: rgba(255,255,255,0.28);
                    font-weight: 700;
                    animation-delay: 0.14s;
                }
                .dh-hl--accent {
                    font-size: clamp(4rem, 11vw, 10rem);
                    line-height: 0.9;
                    color: #ed431c;
                    margin: 6px 0;
                    animation-delay: 0.22s;
                }
                .dh-hl--bright {
                    font-size: clamp(1.8rem, 4.2vw, 3.8rem);
                    color: #ffffff;
                    animation-delay: 0.3s;
                }
                @keyframes dh-rise {
                    from { opacity: 0; transform: translateY(24px); }
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
                    width: min(560px, 90%);
                    margin-bottom: 32px;
                    opacity: 0;
                    animation: dh-in 0.5s ease 0.44s forwards;
                }
                .dh-rule-edge {
                    flex: 1;
                    height: 1px;
                    background: linear-gradient(to right, transparent, rgba(255,255,255,0.12));
                }
                .dh-rule-edge:last-child {
                    background: linear-gradient(to left, transparent, rgba(255,255,255,0.12));
                }
                .dh-rule-center {
                    flex: 0 0 48px;
                    height: 1px;
                    background: #ed431c;
                    opacity: 0.7;
                }

                .dh-lead {
                    margin: 0 0 32px;
                    max-width: 520px;
                    font-size: 1rem;
                    line-height: 1.8;
                    color: rgba(255,255,255,0.55);
                    opacity: 0;
                    animation: dh-in 0.5s ease 0.52s forwards;
                }

                .dh-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px 40px;
                    margin: 0; padding: 0; list-style: none;
                    max-width: 680px;
                    width: 100%;
                }
                @media (max-width: 560px) { .dh-list { grid-template-columns: 1fr; } }
                .dh-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    font-size: 0.86rem;
                    font-weight: 500;
                    color: rgba(255,255,255,0.65);
                    line-height: 1.5;
                    text-align: left;
                    opacity: 0;
                    animation: dh-in 0.5s ease forwards;
                }
                .dh-dot {
                    flex-shrink: 0;
                    width: 5px; height: 5px;
                    border-radius: 50%;
                    background: #ed431c;
                    margin-top: 6px;
                    box-shadow: 0 0 8px rgba(237,67,28,0.55);
                }
            `}} />
        </InteractiveHeroSection>
    );
}
