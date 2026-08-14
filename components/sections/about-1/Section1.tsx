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

            <div className="ah-glow" aria-hidden="true" />

            <div className="ah-wrap">

                <h1 className="ah-headline">
                    <span className="ah-hl">Crafting durable and</span>
                    <span className="ah-hl">accurate measuring solutions</span>
                    <span className="ah-hl">for professionals worldwide</span>
                </h1>

                <div className="ah-rule" aria-hidden="true">
                    <span className="ah-rule-edge" />
                    <span className="ah-rule-center" />
                    <span className="ah-rule-edge" />
                </div>

                <p className="ah-lead">
                    We are a precision tools brand dedicated to engineering hand tools that tradespeople
                    can rely on — from measuring tapes and spirit levels to specialty hardware built for
                    accuracy, longevity, and performance on every job.
                </p>

                <ul className="ah-list">
                    {HIGHLIGHTS.map((item, i) => (
                        <li key={item} className="ah-item" style={{ animationDelay: `${0.45 + i * 0.07}s` }}>
                            <span className="ah-dot" aria-hidden="true" />
                            {item}
                        </li>
                    ))}
                </ul>

            </div>

            <AboutHeroSlider slides={HERO_SLIDES} />

            <style dangerouslySetInnerHTML={{ __html: `
                .ah-sec { position: relative; overflow: hidden; }

                .ah-glow {
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

                .ah-wrap {
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

                .ah-headline {
                    margin: 0 0 36px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                    width: 100%;
                }
                .ah-hl {
                    display: block;
                    font-size: clamp(2.4rem, 6vw, 5.4rem);
                    font-weight: 700;
                    letter-spacing: -0.04em;
                    line-height: 1.08;
                    color: #ffffff;
                    opacity: 0;
                    animation: ah-rise 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
                }
                .ah-hl:nth-child(1) { animation-delay: 0.05s; }
                .ah-hl:nth-child(2) { animation-delay: 0.14s; }
                .ah-hl:nth-child(3) { animation-delay: 0.22s; }

                @keyframes ah-rise {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes ah-in {
                    from { opacity: 0; transform: translateY(8px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                .ah-rule {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    width: min(480px, 90%);
                    margin-bottom: 28px;
                    opacity: 0;
                    animation: ah-in 0.5s ease 0.32s forwards;
                }
                .ah-rule-edge {
                    flex: 1;
                    height: 1px;
                    background: linear-gradient(to right, transparent, rgba(255,255,255,0.1));
                }
                .ah-rule-edge:last-child {
                    background: linear-gradient(to left, transparent, rgba(255,255,255,0.1));
                }
                .ah-rule-center {
                    flex: 0 0 44px;
                    height: 1px;
                    background: #ed431c;
                    opacity: 0.7;
                }

                .ah-lead {
                    margin: 0 0 28px;
                    max-width: 500px;
                    font-size: 1rem;
                    line-height: 1.8;
                    color: rgba(255,255,255,0.52);
                    opacity: 0;
                    animation: ah-in 0.5s ease 0.4s forwards;
                }

                .ah-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px 40px;
                    margin: 0; padding: 0; list-style: none;
                    max-width: 640px;
                    width: 100%;
                    opacity: 0;
                    animation: ah-in 0.5s ease 0.48s forwards;
                }
                @media (max-width: 560px) { .ah-list { grid-template-columns: 1fr; } }
                .ah-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    font-size: 0.86rem;
                    font-weight: 500;
                    color: rgba(255,255,255,0.62);
                    line-height: 1.5;
                    text-align: left;
                }
                .ah-dot {
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
