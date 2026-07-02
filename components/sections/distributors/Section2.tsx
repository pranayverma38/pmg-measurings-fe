import Link from "next/link";
import RevealText from "@/components/effects/RevealText";
import DistributorsContent from "@/components/sections/distributors/DistributorsContent";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const HIGHLIGHTS = [
    { value: "20+", label: "Product series to stock" },
    { value: "Dedicated", label: "Partner support team" },
];

const BENEFITS = [
    {
        number: "01",
        title: "Exclusive Distribution",
        description:
            "Secure protected territory rights and build a defensible position in your region with PMG's recognised product lines.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M16 4C11.6 4 8 7.6 8 12C8 18 16 26 16 26C16 26 24 18 24 12C24 7.6 20.4 4 16 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="16" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Competitive Margins",
        description:
            "Access wholesale pricing structures designed for sustainable growth, with volume incentives and seasonal programmes.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M6 24V14L16 8L26 14V24H6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M12 24V18H20V24" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M11 14L16 11L21 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Marketing Support",
        description:
            "Receive product imagery, point-of-sale materials, and co-branded campaigns to drive demand in your market.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M8 12H24V22C24 23.1 23.1 24 22 24H10C8.9 24 8 23.1 8 22V12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M12 12V9C12 7.3 13.3 6 15 6H17C18.7 6 20 7.3 20 9V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M16 18V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Reliable Supply Chain",
        description:
            "Count on consistent stock availability, fast fulfilment, and a product range trusted by tradespeople worldwide.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M4 20H28V24H4V20Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M6 20L10 10H22L26 20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="10" cy="24" r="2" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="22" cy="24" r="2" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        ),
    },
];

const PROCESS_STEPS = [
    {
        number: "01",
        label: "Inquiry",
        title: "Submit your inquiry",
        desc: "Share your company profile, market coverage, and distribution experience through the form below.",
    },
    {
        number: "02",
        label: "Review",
        title: "Qualification review",
        desc: "Our partnerships team evaluates your application and schedules a discovery call within 3–5 business days.",
    },
    {
        number: "03",
        label: "Onboard",
        title: "Agreement & onboarding",
        desc: "Approved partners receive pricing, territory confirmation, and access to our distributor resource portal.",
    },
    {
        number: "04",
        label: "Launch",
        title: "Launch & grow",
        desc: "Begin stocking PMG products with ongoing sales support, training, and promotional opportunities.",
    },
];

export default function Section2() {
    return (
        <section className="sec-2-distributors p-relative overflow-hidden">
            {/* ── Why partner with PMG ── */}
            <div className="distributor-partner__hero">
                <div className="distributor-partner__grid-bg" aria-hidden="true" />
                <div className="distributor-partner__glow distributor-partner__glow--left" aria-hidden="true" />
                <div className="distributor-partner__glow distributor-partner__glow--right" aria-hidden="true" />

                <DistributorsContent className="p-relative z-1">
                    <div className="distributor-partner__hero-inner">
                        <div className="distributor-partner__hero-copy">
                            <span className="at-btn text-white bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase text-white">
                                    <span className="text-1">Partnership benefits</span>
                                    <span className="text-2">Partnership benefits</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>

                            <h2 className="distributor-partner__title reveal-text mb-0">
                                <RevealText>Why partner with</RevealText>
                                <br />
                                <span className="distributor-partner__title-accent">
                                    <RevealText>PMG</RevealText>
                                </span>
                            </h2>

                            <p className="distributor-partner__lead mb-0">
                                PMG combines precision engineering with a product portfolio that distributors can
                                confidently stand behind — from measuring tapes to spirit levels and specialty hardware.
                            </p>

                            <Link href="#distributor-inquiry" className="at-btn distributor-partner__cta flex-shrink-0">
                                <span>
                                    <span className="text-1 text-capitalize">Apply now</span>
                                    <span className="text-2 text-capitalize">Apply now</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </Link>
                        </div>

                        <div className="distributor-partner__badge-stack" aria-hidden="true">
                            <div className="distributor-partner__badge distributor-partner__badge--primary">
                                <span className="distributor-partner__badge-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="distributor-partner__badge-text">Territory protection</span>
                            </div>
                            <div className="distributor-partner__badge distributor-partner__badge--secondary">
                                <span className="distributor-partner__badge-value">B2B</span>
                                <span className="distributor-partner__badge-label">Wholesale ready</span>
                            </div>
                        </div>
                    </div>

                    <div className="distributor-partner__highlights">
                        {HIGHLIGHTS.map((item) => (
                            <div key={item.label} className="distributor-partner__highlight">
                                <span className="distributor-partner__highlight-value">{item.value}</span>
                                <span className="distributor-partner__highlight-label">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </DistributorsContent>
            </div>

            <div className="distributor-partner__benefits">
                <DistributorsContent>
                    <div className="distributor-partner__benefits-header">
                        <h3 className="distributor-partner__benefits-title fw-600 mb-0">
                            Built for distributors who demand more
                        </h3>
                        <p className="distributor-partner__benefits-sub neutral-600 mb-0">
                            Four advantages that set PMG partnerships apart from the rest.
                        </p>
                    </div>

                    <div className="distributor-partner__benefits-grid">
                        {BENEFITS.map((benefit, index) => (
                            <article
                                key={benefit.number}
                                className={`distributor-partner__card distributor-partner__card--${index + 1}`}
                            >
                                <div className="distributor-partner__card-icon">{benefit.icon}</div>
                                <span className="distributor-partner__card-number">{benefit.number}</span>
                                <h4 className="distributor-partner__card-title fw-600">{benefit.title}</h4>
                                <p className="distributor-partner__card-desc mb-0">{benefit.description}</p>
                                <div className="distributor-partner__card-line" aria-hidden="true" />
                            </article>
                        ))}
                    </div>
                </DistributorsContent>
            </div>

            {/* ── How it works — timeline path ── */}
            <div className="distributor-path">
                <div className="distributor-path__pattern" aria-hidden="true" />

                <DistributorsContent className="p-relative z-1">
                    <div className="distributor-path__header">
                        <div className="distributor-path__header-copy">
                            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">How it works</span>
                                    <span className="text-2">How it works</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h3 className="distributor-path__title reveal-text mb-0">
                                <RevealText>Your path to</RevealText>
                                <br />
                                <span className="distributor-path__title-accent">
                                    <RevealText>exclusive distributor status</RevealText>
                                </span>
                            </h3>
                        </div>
                        <div className="distributor-path__meta">
                            <span className="distributor-path__meta-value">4 steps</span>
                            <span className="distributor-path__meta-label">From inquiry to launch</span>
                        </div>
                    </div>

                    <div className="distributor-path__timeline">
                        <div className="distributor-path__rail" aria-hidden="true">
                            {PROCESS_STEPS.map((item) => (
                                <div key={item.number} className="distributor-path__rail-node">
                                    <span className="distributor-path__rail-dot">{item.number}</span>
                                </div>
                            ))}
                        </div>

                        <div className="distributor-path__steps">
                            {PROCESS_STEPS.map((item, index) => (
                                <article
                                    key={item.number}
                                    className={`distributor-path__step distributor-path__step--${index + 1}`}
                                >
                                    <span className="distributor-path__step-label">{item.label}</span>
                                    <h4 className="distributor-path__step-title fw-600">{item.title}</h4>
                                    <p className="distributor-path__step-desc mb-0">{item.desc}</p>
                                    <span className="distributor-path__step-index" aria-hidden="true">
                                        {item.number}
                                    </span>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="distributor-path__footer">
                        <p className="distributor-path__footer-text mb-0">
                            Ready to start? Complete the form below and our partnerships team will be in touch.
                        </p>
                        <Link href="#distributor-inquiry" className="at-btn distributor-path__footer-btn flex-shrink-0">
                            <span>
                                <span className="text-1 text-capitalize">Start your application</span>
                                <span className="text-2 text-capitalize">Start your application</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </Link>
                    </div>
                </DistributorsContent>
            </div>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .distributor-partner__hero {
                            position: relative;
                            background: #0a0a0a;
                            color: #fff;
                            padding: clamp(72px, 10vw, 100px) 0 clamp(40px, 5vw, 64px);
                            overflow: hidden;
                        }
                        .distributor-partner__grid-bg {
                            position: absolute;
                            inset: 0;
                            background-image:
                                linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
                            background-size: 56px 56px;
                            mask-image: radial-gradient(ellipse 80% 70% at 50% 30%, black 15%, transparent 75%);
                            pointer-events: none;
                        }
                        .distributor-partner__glow {
                            position: absolute;
                            border-radius: 50%;
                            filter: blur(80px);
                            pointer-events: none;
                        }
                        .distributor-partner__glow--left {
                            top: -10%;
                            left: -5%;
                            width: 420px;
                            height: 420px;
                            background: rgba(240, 70, 14, 0.18);
                            animation: distributor-partner-glow-drift 8s ease-in-out infinite;
                        }
                        .distributor-partner__glow--right {
                            bottom: -20%;
                            right: -8%;
                            width: 360px;
                            height: 360px;
                            background: rgba(240, 70, 14, 0.1);
                            animation: distributor-partner-glow-drift 10s ease-in-out infinite reverse;
                        }

                        .distributor-partner__hero-inner {
                            display: grid;
                            grid-template-columns: 1fr;
                            gap: 40px;
                            align-items: center;
                        }
                        @media (min-width: 992px) {
                            .distributor-partner__hero-inner {
                                grid-template-columns: 1fr auto;
                                gap: 64px;
                            }
                        }

                        .distributor-partner__title {
                            font-size: clamp(2.5rem, 5.5vw, 4.75rem);
                            font-weight: 600;
                            line-height: 0.95;
                            letter-spacing: -0.03em;
                            color: #fff;
                        }
                        .distributor-partner__title-accent {
                            color: #F0460E;
                            display: inline-block;
                        }
                        .distributor-partner__lead {
                            margin-top: 24px;
                            max-width: 34rem;
                            font-size: clamp(1rem, 1.5vw, 1.125rem);
                            line-height: 1.7;
                            color: rgba(255,255,255,0.62);
                        }
                        .distributor-partner__cta {
                            margin-top: 32px;
                            display: inline-flex;
                        }

                        .distributor-partner__badge-stack {
                            display: flex;
                            flex-direction: column;
                            gap: 16px;
                            align-items: flex-start;
                        }
                        @media (min-width: 992px) {
                            .distributor-partner__badge-stack {
                                align-items: flex-end;
                            }
                        }
                        .distributor-partner__badge {
                            display: flex;
                            align-items: center;
                            gap: 14px;
                            padding: 18px 22px;
                            border-radius: 14px;
                            border: 1px solid rgba(255,255,255,0.12);
                            background: rgba(255,255,255,0.04);
                            backdrop-filter: blur(12px);
                            transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                                        border-color 0.35s ease,
                                        background 0.35s ease;
                        }
                        .distributor-partner__badge:hover {
                            transform: translateX(6px);
                            border-color: rgba(240, 70, 14, 0.4);
                            background: rgba(240, 70, 14, 0.08);
                        }
                        .distributor-partner__badge--secondary {
                            flex-direction: column;
                            align-items: flex-start;
                            gap: 4px;
                            background: #fff;
                            border-color: #fff;
                            color: #0a0a0a;
                        }
                        .distributor-partner__badge--secondary:hover {
                            transform: translateX(6px) translateY(-2px);
                            box-shadow: 0 16px 40px rgba(0,0,0,0.25);
                        }
                        .distributor-partner__badge-icon {
                            display: flex;
                            color: #F0460E;
                        }
                        .distributor-partner__badge-text {
                            font-size: 0.9375rem;
                            font-weight: 600;
                            color: #fff;
                        }
                        .distributor-partner__badge-value {
                            font-size: 1.5rem;
                            font-weight: 700;
                            letter-spacing: -0.02em;
                            color: #F0460E;
                            line-height: 1;
                        }
                        .distributor-partner__badge-label {
                            font-size: 0.75rem;
                            font-weight: 600;
                            text-transform: uppercase;
                            letter-spacing: 0.08em;
                            color: rgba(0,0,0,0.5);
                        }

                        .distributor-partner__highlights {
                            display: grid;
                            grid-template-columns: repeat(2, 1fr);
                            gap: 1px;
                            margin-top: clamp(40px, 5vw, 56px);
                            background: rgba(255,255,255,0.1);
                            border: 1px solid rgba(255,255,255,0.1);
                            border-radius: 16px;
                            overflow: hidden;
                        }
                        .distributor-partner__highlight {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            text-align: center;
                            padding: 28px 16px;
                            background: rgba(255,255,255,0.03);
                            transition: background 0.3s ease;
                        }
                        .distributor-partner__highlight:hover {
                            background: rgba(240, 70, 14, 0.1);
                        }
                        .distributor-partner__highlight-value {
                            font-size: clamp(1.5rem, 3vw, 2.25rem);
                            font-weight: 700;
                            letter-spacing: -0.02em;
                            color: #fff;
                        }
                        .distributor-partner__highlight-label {
                            margin-top: 6px;
                            font-size: 0.8125rem;
                            font-weight: 500;
                            color: rgba(255,255,255,0.5);
                        }

                        .distributor-partner__benefits {
                            padding: clamp(64px, 8vw, 96px) 0 clamp(56px, 7vw, 80px);
                            background: #fafafa;
                        }
                        .distributor-partner__benefits-header {
                            display: flex;
                            flex-direction: column;
                            gap: 12px;
                            margin-bottom: 48px;
                            max-width: 36rem;
                        }
                        @media (min-width: 768px) {
                            .distributor-partner__benefits-header {
                                flex-direction: row;
                                align-items: flex-end;
                                justify-content: space-between;
                                max-width: none;
                            }
                            .distributor-partner__benefits-sub {
                                max-width: 22rem;
                                text-align: right;
                            }
                        }
                        .distributor-partner__benefits-title {
                            font-size: clamp(1.5rem, 3vw, 2rem);
                            letter-spacing: -0.02em;
                        }

                        .distributor-partner__benefits-grid {
                            display: grid;
                            grid-template-columns: 1fr;
                            gap: 16px;
                        }
                        @media (min-width: 768px) {
                            .distributor-partner__benefits-grid {
                                grid-template-columns: repeat(2, 1fr);
                                gap: 20px;
                            }
                        }
                        @media (min-width: 1200px) {
                            .distributor-partner__benefits-grid {
                                grid-template-columns: repeat(4, 1fr);
                            }
                        }

                        .distributor-partner__card {
                            position: relative;
                            padding: 32px 28px 36px;
                            background: #fff;
                            border: 1px solid rgba(0,0,0,0.08);
                            border-radius: 16px;
                            overflow: hidden;
                            transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                                        box-shadow 0.35s ease,
                                        border-color 0.35s ease;
                        }
                        .distributor-partner__card:hover {
                            transform: translateY(-8px);
                            box-shadow: 0 28px 56px rgba(0,0,0,0.1);
                            border-color: rgba(240, 70, 14, 0.3);
                        }
                        .distributor-partner__card--1 { --card-accent: #F0460E; }
                        .distributor-partner__card--2 { --card-accent: #111; }
                        .distributor-partner__card--3 { --card-accent: #F0460E; }
                        .distributor-partner__card--4 { --card-accent: #111; }

                        .distributor-partner__card-icon {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 56px;
                            height: 56px;
                            margin-bottom: 20px;
                            border-radius: 12px;
                            background: rgba(240, 70, 14, 0.08);
                            color: #F0460E;
                            transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
                        }
                        .distributor-partner__card--2 .distributor-partner__card-icon,
                        .distributor-partner__card--4 .distributor-partner__card-icon {
                            background: rgba(0,0,0,0.05);
                            color: #111;
                        }
                        .distributor-partner__card:hover .distributor-partner__card-icon {
                            background: var(--card-accent);
                            color: #fff;
                            transform: scale(1.08) rotate(-3deg);
                        }
                        .distributor-partner__card-number {
                            display: block;
                            font-size: 0.75rem;
                            font-weight: 700;
                            letter-spacing: 0.12em;
                            color: rgba(0,0,0,0.25);
                            margin-bottom: 8px;
                        }
                        .distributor-partner__card-title {
                            font-size: 1.125rem;
                            letter-spacing: -0.01em;
                            margin-bottom: 12px;
                        }
                        .distributor-partner__card-desc {
                            font-size: 0.9375rem;
                            line-height: 1.65;
                            color: rgba(0,0,0,0.55);
                        }
                        .distributor-partner__card-line {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            height: 3px;
                            background: var(--card-accent);
                            transform: scaleX(0);
                            transform-origin: left;
                            transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
                        }
                        .distributor-partner__card:hover .distributor-partner__card-line {
                            transform: scaleX(1);
                        }

                        .distributor-path {
                            position: relative;
                            padding: clamp(72px, 9vw, 100px) 0 clamp(64px, 8vw, 88px);
                            background: linear-gradient(160deg, #fff8f5 0%, #ffffff 45%, #f6f6f6 100%);
                            border-top: 1px solid rgba(240, 70, 14, 0.12);
                            overflow: hidden;
                        }
                        .distributor-path__pattern {
                            position: absolute;
                            inset: 0;
                            opacity: 0.45;
                            background-image: radial-gradient(rgba(240, 70, 14, 0.07) 1px, transparent 1px);
                            background-size: 28px 28px;
                            mask-image: linear-gradient(to bottom, black 20%, transparent 90%);
                            pointer-events: none;
                        }

                        .distributor-path__header {
                            display: flex;
                            flex-direction: column;
                            gap: 24px;
                            margin-bottom: clamp(48px, 6vw, 64px);
                        }
                        @media (min-width: 768px) {
                            .distributor-path__header {
                                flex-direction: row;
                                align-items: flex-end;
                                justify-content: space-between;
                            }
                        }
                        .distributor-path__title {
                            font-size: clamp(1.75rem, 4vw, 2.75rem);
                            font-weight: 600;
                            line-height: 1.05;
                            letter-spacing: -0.03em;
                            color: #111;
                        }
                        .distributor-path__title-accent {
                            color: #F0460E;
                            display: inline-block;
                        }
                        .distributor-path__meta {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            padding: 16px 20px;
                            border-left: 3px solid #F0460E;
                            background: rgba(255, 255, 255, 0.7);
                            border-radius: 0 12px 12px 0;
                        }
                        @media (min-width: 768px) {
                            .distributor-path__meta {
                                align-items: flex-end;
                                text-align: right;
                                border-left: none;
                                border-right: 3px solid #F0460E;
                                border-radius: 12px 0 0 12px;
                            }
                        }
                        .distributor-path__meta-value {
                            font-size: 1.25rem;
                            font-weight: 700;
                            letter-spacing: -0.02em;
                            color: #111;
                        }
                        .distributor-path__meta-label {
                            margin-top: 4px;
                            font-size: 0.8125rem;
                            font-weight: 500;
                            color: rgba(0, 0, 0, 0.5);
                        }

                        .distributor-path__timeline {
                            position: relative;
                        }
                        .distributor-path__rail {
                            display: none;
                        }
                        @media (min-width: 992px) {
                            .distributor-path__rail {
                                display: grid;
                                grid-template-columns: repeat(4, 1fr);
                                gap: 20px;
                                margin-bottom: 28px;
                                position: relative;
                            }
                            .distributor-path__rail::before {
                                content: "";
                                position: absolute;
                                top: 50%;
                                left: 12.5%;
                                right: 12.5%;
                                height: 2px;
                                background: linear-gradient(
                                    90deg,
                                    #F0460E 0%,
                                    rgba(240, 70, 14, 0.35) 50%,
                                    #F0460E 100%
                                );
                                transform: translateY(-50%);
                                z-index: 0;
                            }
                            .distributor-path__rail-node {
                                display: flex;
                                justify-content: center;
                                position: relative;
                                z-index: 1;
                            }
                            .distributor-path__rail-dot {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                width: 44px;
                                height: 44px;
                                font-size: 0.8125rem;
                                font-weight: 700;
                                letter-spacing: 0.04em;
                                color: #fff;
                                background: #111;
                                border: 3px solid #fff;
                                border-radius: 50%;
                                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
                                transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
                            }
                            .distributor-path__rail-node:hover .distributor-path__rail-dot {
                                background: #F0460E;
                                transform: scale(1.1);
                                box-shadow: 0 8px 24px rgba(240, 70, 14, 0.35);
                            }
                        }

                        .distributor-path__steps {
                            display: grid;
                            grid-template-columns: 1fr;
                            gap: 16px;
                        }
                        @media (min-width: 768px) {
                            .distributor-path__steps {
                                grid-template-columns: repeat(2, 1fr);
                                gap: 20px;
                            }
                        }
                        @media (min-width: 992px) {
                            .distributor-path__steps {
                                grid-template-columns: repeat(4, 1fr);
                            }
                        }

                        .distributor-path__step {
                            position: relative;
                            padding: 28px 24px 32px;
                            background: #fff;
                            border: 1px solid rgba(0, 0, 0, 0.08);
                            border-radius: 16px;
                            overflow: hidden;
                            transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                                        box-shadow 0.35s ease,
                                        border-color 0.35s ease;
                        }
                        .distributor-path__step:hover {
                            transform: translateY(-6px);
                            border-color: rgba(240, 70, 14, 0.35);
                            box-shadow: 0 20px 48px rgba(240, 70, 14, 0.1);
                        }
                        .distributor-path__step--1 { --step-accent: #F0460E; }
                        .distributor-path__step--2 { --step-accent: #111; }
                        .distributor-path__step--3 { --step-accent: #F0460E; }
                        .distributor-path__step--4 { --step-accent: #111; }

                        .distributor-path__step-label {
                            display: inline-block;
                            margin-bottom: 12px;
                            padding: 4px 10px;
                            font-size: 0.6875rem;
                            font-weight: 700;
                            letter-spacing: 0.1em;
                            text-transform: uppercase;
                            color: var(--step-accent);
                            background: rgba(240, 70, 14, 0.08);
                            border-radius: 999px;
                        }
                        .distributor-path__step--2 .distributor-path__step-label,
                        .distributor-path__step--4 .distributor-path__step-label {
                            color: #111;
                            background: rgba(0, 0, 0, 0.06);
                        }
                        .distributor-path__step-title {
                            font-size: 1.0625rem;
                            letter-spacing: -0.01em;
                            margin-bottom: 10px;
                            color: #111;
                        }
                        .distributor-path__step-desc {
                            font-size: 0.9rem;
                            line-height: 1.65;
                            color: rgba(0, 0, 0, 0.55);
                        }
                        .distributor-path__step-index {
                            position: absolute;
                            top: -8px;
                            right: 12px;
                            font-size: clamp(3rem, 8vw, 4.5rem);
                            font-weight: 700;
                            line-height: 1;
                            letter-spacing: -0.04em;
                            color: rgba(0, 0, 0, 0.04);
                            pointer-events: none;
                            transition: color 0.35s ease;
                        }
                        @media (min-width: 992px) {
                            .distributor-path__step-index {
                                display: none;
                            }
                        }
                        .distributor-path__step:hover .distributor-path__step-index {
                            color: rgba(240, 70, 14, 0.08);
                        }
                        .distributor-path__step::after {
                            content: "";
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            height: 3px;
                            background: var(--step-accent);
                            transform: scaleX(0);
                            transform-origin: left;
                            transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
                        }
                        .distributor-path__step:hover::after {
                            transform: scaleX(1);
                        }

                        .distributor-path__footer {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            gap: 24px;
                            margin-top: clamp(48px, 6vw, 64px);
                            padding: 28px 24px;
                            background: #111;
                            border-radius: 16px;
                        }
                        @media (min-width: 768px) {
                            .distributor-path__footer {
                                flex-direction: row;
                                align-items: center;
                                justify-content: space-between;
                                padding: 32px 36px;
                            }
                        }
                        .distributor-path__footer-text {
                            max-width: 28rem;
                            font-size: 0.9375rem;
                            line-height: 1.6;
                            color: rgba(255, 255, 255, 0.72);
                        }
                        .distributor-path__footer-btn {
                            background: #fff !important;
                            color: #111 !important;
                        }

                        @keyframes distributor-partner-glow-drift {
                            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
                            50% { transform: translate(24px, 16px) scale(1.1); opacity: 1; }
                        }

                        @media (prefers-reduced-motion: reduce) {
                            .distributor-partner__glow--left,
                            .distributor-partner__glow--right {
                                animation: none;
                            }
                            .distributor-partner__card:hover,
                            .distributor-path__step:hover {
                                transform: none;
                            }
                            .distributor-path__rail-node:hover .distributor-path__rail-dot {
                                transform: none;
                            }
                        }
                    `,
                }}
            />
        </section>
    );
}
