import AboutHeroSlider from "@/components/sections/about-1/AboutHeroSlider";
import InteractiveHeroSection from "@/components/shared/InteractiveHeroSection";
import { buildProductCoverSlides } from "@/lib/productImages";

const HERO_SLIDES = buildProductCoverSlides(
    ["GLASS SERIES", "LOCKLIINE SERIES", "PRIME SERIES", "ECO SERIES", "LINEX SERIES", "SIGNATURE SERIES"],
    (series) => `PMG ${series}`
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

            {/* Ambient glow behind the accent word */}
            <div className="ah-glow" aria-hidden="true" />

            <div className="ah-wrap">

                {/* ── Centered headline ─── */}
                <h1 className="ah-headline">
                    <span className="ah-hl ah-hl--muted">Crafting durable and</span>
                    <span className="ah-hl ah-hl--accent">accurate</span>
                    <span className="ah-hl ah-hl--bright">measuring solutions</span>
                    <span className="ah-hl ah-hl--dim">for professionals worldwide</span>
                </h1>

                {/* ── Decorative rule ─── */}
                <div className="ah-rule" aria-hidden="true">
                    <span className="ah-rule-edge" />
                    <span className="ah-rule-center" />
                    <span className="ah-rule-edge" />
                </div>

                {/* ── Description ─── */}
                <p className="ah-lead">
                    We are a precision tools brand dedicated to engineering hand tools that tradespeople
                    can rely on — from measuring tapes and spirit levels to specialty hardware built for
                    accuracy, longevity, and performance on every job.
                </p>

                {/* ── Highlights ─── */}
                <ul className="ah-list">
                    {HIGHLIGHTS.map((item, i) => (
                        <li key={item} className="ah-item" style={{ animationDelay: `${0.5 + i * 0.07}s` }}>
                            <span className="ah-dot" aria-hidden="true" />
                            {item}
                        </li>
                    ))}
                </ul>

            </div>

            <AboutHeroSlider slides={HERO_SLIDES} />

            <style dangerouslySetInnerHTML={{ __html: `
                .ah-sec { position: relative; overflow: hidden; }

                /* Ambient glow */
                .ah-glow {
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

                /* Wrapper */
                .ah-wrap {
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

                /* Headline */
                .ah-headline {
                    margin: 0 0 36px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0;
                    width: 100%;
                }
                .ah-hl {
                    display: block;
                    font-weight: 800;
                    letter-spacing: -0.045em;
                    line-height: 1.02;
                    opacity: 0;
                    animation: ah-rise 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
                }
                .ah-hl--muted {
                    font-size: clamp(1.8rem, 4.2vw, 3.8rem);
                    color: rgba(255,255,255,0.38);
                    animation-delay: 0.08s;
                }
                .ah-hl--accent {
                    font-size: clamp(5rem, 13vw, 12rem);
                    line-height: 0.9;
                    color: #ed431c;
                    margin: 6px 0;
                    position: relative;
                    animation-delay: 0.18s;
                }
                .ah-hl--accent::before {
                    content: attr(data-text);
                    position: absolute;
                    inset: 0;
                    color: #ed431c;
                    filter: blur(28px);
                    opacity: 0.25;
                    pointer-events: none;
                }
                .ah-hl--bright {
                    font-size: clamp(1.8rem, 4.2vw, 3.8rem);
                    color: #ffffff;
                    animation-delay: 0.28s;
                }
                .ah-hl--dim {
                    font-size: clamp(1.3rem, 2.8vw, 2.5rem);
                    color: rgba(255,255,255,0.3);
                    font-weight: 600;
                    animation-delay: 0.36s;
                }
                @keyframes ah-rise {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes ah-in {
                    from { opacity: 0; transform: translateY(8px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                /* Decorative rule */
                .ah-rule {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    width: min(560px, 90%);
                    margin-bottom: 32px;
                    opacity: 0;
                    animation: ah-in 0.5s ease 0.44s forwards;
                }
                .ah-rule-edge {
                    flex: 1;
                    height: 1px;
                    background: linear-gradient(to right, transparent, rgba(255,255,255,0.12));
                }
                .ah-rule-edge:last-child {
                    background: linear-gradient(to left, transparent, rgba(255,255,255,0.12));
                }
                .ah-rule-center {
                    flex: 0 0 48px;
                    height: 1px;
                    background: #ed431c;
                    opacity: 0.7;
                }

                /* Lead */
                .ah-lead {
                    margin: 0 0 32px;
                    max-width: 520px;
                    font-size: 1rem;
                    line-height: 1.8;
                    color: rgba(255,255,255,0.55);
                    opacity: 0;
                    animation: ah-in 0.5s ease 0.52s forwards;
                }

                /* Highlights */
                .ah-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px 40px;
                    margin: 0; padding: 0; list-style: none;
                    max-width: 680px;
                    width: 100%;
                }
                @media (max-width: 560px) { .ah-list { grid-template-columns: 1fr; } }
                .ah-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    font-size: 0.86rem;
                    font-weight: 500;
                    color: rgba(255,255,255,0.65);
                    line-height: 1.5;
                    text-align: left;
                    opacity: 0;
                    animation: ah-in 0.5s ease forwards;
                }
                .ah-dot {
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
