const WHY_PMG_POINTS = [
    {
        title: "PRECISION",
        description: "Designed for accurate and dependable measurements.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 6.5 17.5 16" />
                <path d="M14.5 5.5 18.5 9.5" />
                <path d="M6.25 8.25 4.5 13l4.75-1.75L19 1.5l3.5 3.5-9.75 9.75Z" />
            </svg>
        ),
    },
    {
        title: "DURABILITY",
        description: "Built for demanding professional environments.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3 19 6v5c0 4.5-2.9 8.2-7 9.6C7.9 19.2 5 15.5 5 11V6l7-3Z" />
            </svg>
        ),
    },
    {
        title: "PREMIUM BUILD",
        description: "Quality materials and carefully engineered components.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m12 4 7 3.5L12 11 5 7.5 12 4Z" />
                <path d="m5 11 7 3.5 7-3.5" />
                <path d="m5 14.5 7 3.5 7-3.5" />
            </svg>
        ),
    },
    {
        title: "RELIABILITY",
        description: "Consistent performance when accuracy matters.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.5 13a5.5 5.5 0 1 1 11 0" />
                <path d="M12 13 15.25 9.75" />
                <path d="M12 13h.01" />
            </svg>
        ),
    },
    {
        title: "PROFESSIONAL DESIGN",
        description: "Created around the needs of people who use measuring tools every day.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="6.5" />
                <path d="M12 8.75v6.5" />
                <path d="M8.75 12h6.5" />
            </svg>
        ),
    },
    {
        title: "INNOVATION",
        description: "Continuously improving the way professionals measure.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3.75a5.75 5.75 0 0 1 3.57 10.26c-.95.77-1.57 1.54-1.57 2.49h-4c0-.95-.62-1.72-1.57-2.49A5.75 5.75 0 0 1 12 3.75Z" />
                <path d="M9.75 19.25h4.5" />
                <path d="M10.5 21h3" />
            </svg>
        ),
    },
] as const;

export default function HomeWhyPmgSection() {
    return (
        <section className="pmg-why-section" aria-labelledby="pmg-why-title">
            <div className="container-fluid">
                <div className="pmg-why-section__shell">
                    <div className="pmg-why-section__heading">
                        <span className="pmg-why-section__eyebrow">WHY PMG</span>
                        <h2 id="pmg-why-title" className="pmg-why-section__title">
                            WHY PMG?
                        </h2>
                    </div>

                    <div className="pmg-why-section__grid">
                        {WHY_PMG_POINTS.map((item) => (
                            <article key={item.title} className="pmg-why-section__card">
                                <div className="pmg-why-section__icon-wrap">{item.icon}</div>
                                <h3 className="pmg-why-section__card-title">{item.title}</h3>
                                <p className="pmg-why-section__card-text">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .pmg-why-section {
                            position: relative;
                            overflow: hidden;
                            background:
                                radial-gradient(circle at top left, rgba(196, 37, 41, 0.08), transparent 24%),
                                radial-gradient(circle at bottom right, rgba(15, 23, 42, 0.06), transparent 28%),
                                linear-gradient(180deg, #f7f7f8 0%, #f0f1f3 100%);
                            padding: clamp(64px, 8vw, 110px) 0;
                        }

                        .pmg-why-section .container-fluid {
                            position: relative;
                            z-index: 1;
                        }

                        .pmg-why-section__shell {
                            max-width: 1440px;
                            margin: 0 auto;
                            padding: 0 clamp(14px, 3vw, 28px);
                        }

                        .pmg-why-section__heading {
                            margin-bottom: clamp(28px, 4vw, 42px);
                        }

                        .pmg-why-section__eyebrow {
                            display: inline-flex;
                            align-items: center;
                            margin-bottom: 14px;
                            color: #c42529;
                            font-size: 12px;
                            font-weight: 700;
                            letter-spacing: 0.24em;
                            text-transform: uppercase;
                        }

                        .pmg-why-section__title {
                            margin: 0;
                            color: #111111;
                            font-size: clamp(2.8rem, 6vw, 5.2rem);
                            line-height: 0.95;
                            font-weight: 700;
                            letter-spacing: -0.05em;
                            text-transform: uppercase;
                        }

                        .pmg-why-section__grid {
                            display: grid;
                            grid-template-columns: repeat(3, minmax(0, 1fr));
                            gap: clamp(16px, 2vw, 24px);
                        }

                        .pmg-why-section__card {
                            position: relative;
                            min-height: 192px;
                            padding: 24px 24px 22px;
                            border-radius: 24px;
                            border: 1px solid rgba(17, 17, 17, 0.06);
                            background:
                                linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.9) 100%);
                            box-shadow:
                                0 16px 38px rgba(15, 23, 42, 0.06),
                                inset 0 1px 0 rgba(255, 255, 255, 0.95);
                            transition:
                                transform 0.3s ease,
                                box-shadow 0.3s ease,
                                border-color 0.3s ease;
                            backdrop-filter: blur(10px);
                        }

                        .pmg-why-section__card::before {
                            content: "";
                            position: absolute;
                            inset: 0;
                            border-radius: inherit;
                            background: linear-gradient(135deg, rgba(196, 37, 41, 0.04), transparent 40%);
                            opacity: 0;
                            transition: opacity 0.3s ease;
                            pointer-events: none;
                        }

                        .pmg-why-section__card:hover {
                            transform: translateY(-6px);
                            border-color: rgba(196, 37, 41, 0.14);
                            box-shadow:
                                0 22px 48px rgba(15, 23, 42, 0.09),
                                inset 0 1px 0 rgba(255, 255, 255, 0.98);
                        }

                        .pmg-why-section__card:hover::before {
                            opacity: 1;
                        }

                        .pmg-why-section__icon-wrap {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            width: 42px;
                            height: 42px;
                            margin-bottom: 18px;
                            color: #c42529;
                            border-radius: 14px;
                            background: rgba(196, 37, 41, 0.08);
                        }

                        .pmg-why-section__icon-wrap svg {
                            width: 20px;
                            height: 20px;
                            stroke: currentColor;
                            stroke-width: 1.7;
                            fill: none;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                        }

                        .pmg-why-section__card-title {
                            margin: 0 0 10px;
                            color: #111111;
                            font-size: clamp(1.05rem, 1.3vw, 1.35rem);
                            line-height: 1.15;
                            font-weight: 700;
                            letter-spacing: -0.03em;
                            text-transform: uppercase;
                        }

                        .pmg-why-section__card-text {
                            margin: 0;
                            max-width: 32ch;
                            color: rgba(17, 17, 17, 0.68);
                            font-size: 15px;
                            line-height: 1.65;
                        }

                        @media (max-width: 991px) {
                            .pmg-why-section__grid {
                                grid-template-columns: repeat(2, minmax(0, 1fr));
                            }
                        }

                        @media (max-width: 767px) {
                            .pmg-why-section {
                                padding: 56px 0;
                            }

                            .pmg-why-section__grid {
                                grid-template-columns: minmax(0, 1fr);
                            }

                            .pmg-why-section__card {
                                min-height: 0;
                                padding: 22px 18px 20px;
                                border-radius: 20px;
                            }

                            .pmg-why-section__card-text {
                                max-width: none;
                            }
                        }
                    `,
                }}
            />
        </section>
    );
}
