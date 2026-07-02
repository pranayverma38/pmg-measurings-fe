import Image from "next/image";
import Link from "next/link";
import RevealText from "@/components/effects/RevealText";
import { PRODUCT_CATEGORIES } from "@/lib/productCategories";

const ARROW_DIAGONAL_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const HERO_STATS = [
    { value: "25+", label: "Years of manufacturing excellence" },
    { value: "50+", label: "Product variants across series" },
];

const FEATURED_PRODUCT = {
    src: "/assets/imgs/pmgproducts/SIGNATURE%20SERIES/3mtr/1.png",
    alt: "PMG Signature Series 3m measuring tape",
    series: "Signature Series · 3m",
};

export default function Section1() {
    return (
        <section className="pmg-hero changeless" aria-label="PMG Precision Measuring Tools Hero">
            <div className="pmg-hero__bg" aria-hidden="true">
                <Image
                    src="/assets/imgs/pmgotherimages/ai-generated-IMAGE.jpg"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="pmg-hero__bg-img"
                />
                <div className="pmg-hero__bg-overlay" />
                <div className="pmg-hero__grid" />
                <div className="pmg-hero__glow" />
            </div>

            <div className="pmg-hero__topbar at_fade_anim" data-delay="0.1" data-fade-from="bottom">
                <span className="pmg-hero__topbar-dot" aria-hidden="true" />
                <span className="pmg-hero__topbar-label text-uppercase">Industrial Measurement Tools</span>
                <span className="pmg-hero__topbar-divider" aria-hidden="true" />
                <span className="pmg-hero__topbar-label text-uppercase">Global Distribution</span>
                <span className="pmg-hero__topbar-divider" aria-hidden="true" />
                <span className="pmg-hero__topbar-label text-uppercase">Built for Professionals</span>
            </div>

            <div className="pmg-hero__body">
                <div className="pmg-hero__intro">
                    <div className="pmg-hero__headline at_fade_anim" data-delay="0.15" data-fade-from="bottom">
                        <h1 className="pmg-hero__title">
                            <span className="pmg-hero__title-line">
                                <RevealText>New Vision</RevealText>
                            </span>
                            <span className="pmg-hero__title-line pmg-hero__title-line--accent">
                                <RevealText>New Inches</RevealText>
                            </span>
                        </h1>
                    </div>

                    <div
                        className="pmg-hero__visual at_fade_anim"
                        data-delay="0.3"
                        data-fade-from="right"
                        aria-hidden="true"
                    >
                        <div className="pmg-hero__product-frame">
                            <div className="pmg-hero__product-ring" />
                            <Image
                                src={FEATURED_PRODUCT.src}
                                alt={FEATURED_PRODUCT.alt}
                                width={640}
                                height={640}
                                priority
                                className="pmg-hero__product-img"
                            />
                            <div className="pmg-hero__product-badge">
                                <span className="pmg-hero__product-badge-label">Featured</span>
                                <span className="pmg-hero__product-badge-series">{FEATURED_PRODUCT.series}</span>
                            </div>
                        </div>
                        <div className="pmg-hero__ruler" />
                    </div>
                </div>

                <div className="pmg-hero__content">
                    <p
                        className="pmg-hero__desc at_fade_anim"
                        data-delay="0.35"
                        data-fade-from="bottom"
                    >
                        PMG engineers measuring tapes, spirit levels, and industrial hand tools for the
                        toughest job sites — where accuracy, durability, and consistency are non-negotiable.
                    </p>

                    <div
                        className="pmg-hero__actions at_fade_anim"
                        data-delay="0.45"
                        data-fade-from="bottom"
                    >
                        <Link className="at-btn bg-white rounded-0 text-dark" href="/products">
                            <span>
                                <span className="text-1">Explore all products</span>
                                <span className="text-2">Explore all products</span>
                            </span>
                            <i>{ARROW_DIAGONAL_SVG}</i>
                        </Link>
                        <Link className="at-btn at-btn-border-white text-white rounded-0" href="/contact-1">
                            <span>
                                <span className="text-1">Get a free quote</span>
                                <span className="text-2">Get a free quote</span>
                            </span>
                            <i>{ARROW_DIAGONAL_SVG}</i>
                        </Link>
                    </div>

                    <div
                        className="pmg-hero__categories at_fade_anim"
                        data-delay="0.55"
                        data-fade-from="bottom"
                    >
                        {PRODUCT_CATEGORIES.map((category) => (
                            <Link
                                key={category.id}
                                href={`/products#${category.id}`}
                                className="pmg-hero__category-pill"
                            >
                                {category.shortLabel}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="pmg-hero__footer">
                <div
                    className="pmg-hero__stats at_fade_anim"
                    data-delay="0.6"
                    data-fade-from="bottom"
                    data-start="100%"
                >
                    {HERO_STATS.map((stat) => (
                        <div key={stat.label} className="pmg-hero__stat">
                            <span className="pmg-hero__stat-value">{stat.value}</span>
                            <span className="pmg-hero__stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>

                <div
                    className="pmg-hero__scroll at_fade_anim"
                    data-delay="0.7"
                    data-fade-from="bottom"
                    data-start="100%"
                    aria-hidden="true"
                >
                    <span className="pmg-hero__scroll-line" />
                    <span className="pmg-hero__scroll-text text-uppercase">Scroll</span>
                </div>
            </div>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .pmg-hero {
                            position: relative;
                            display: flex;
                            flex-direction: column;
                            min-height: 100vh;
                            min-height: 100dvh;
                            background: #0a0a0a;
                            color: #fff;
                            overflow: hidden;
                        }

                        .pmg-hero__bg {
                            position: absolute;
                            inset: 0;
                            z-index: 0;
                        }
                        .pmg-hero__bg-img {
                            object-fit: cover;
                            object-position: center 30%;
                        }
                        .pmg-hero__bg-overlay {
                            position: absolute;
                            inset: 0;
                            background:
                                linear-gradient(115deg, rgba(8, 8, 8, 0.92) 0%, rgba(8, 8, 8, 0.72) 42%, rgba(8, 8, 8, 0.45) 100%),
                                linear-gradient(to top, rgba(8, 8, 8, 0.95) 0%, transparent 38%);
                        }
                        .pmg-hero__grid {
                            position: absolute;
                            inset: 0;
                            opacity: 0.35;
                            background-image:
                                linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
                            background-size: 64px 64px;
                            mask-image: linear-gradient(to bottom, black 20%, transparent 85%);
                        }
                        .pmg-hero__glow {
                            position: absolute;
                            top: 18%;
                            right: 8%;
                            width: min(42vw, 520px);
                            height: min(42vw, 520px);
                            border-radius: 50%;
                            background: radial-gradient(circle, rgba(240, 70, 14, 0.22) 0%, transparent 68%);
                            filter: blur(8px);
                            pointer-events: none;
                        }

                        .pmg-hero__topbar {
                            position: relative;
                            z-index: 2;
                            display: flex;
                            align-items: center;
                            flex-wrap: wrap;
                            gap: 14px;
                            padding: clamp(96px, 11vw, 132px) clamp(20px, 5.5vw, 96px) 0;
                        }
                        .pmg-hero__topbar-dot {
                            width: 6px;
                            height: 6px;
                            border-radius: 50%;
                            background: var(--at-theme-primary, #f0460e);
                            flex-shrink: 0;
                        }
                        .pmg-hero__topbar-label {
                            font-size: 11px;
                            font-weight: 500;
                            letter-spacing: 0.14em;
                            color: rgba(255, 255, 255, 0.62);
                        }
                        .pmg-hero__topbar-divider {
                            width: 28px;
                            height: 1px;
                            background: rgba(255, 255, 255, 0.22);
                            flex-shrink: 0;
                        }

                        .pmg-hero__body {
                            position: relative;
                            z-index: 2;
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            gap: clamp(24px, 3vw, 36px);
                            justify-content: center;
                            padding: clamp(28px, 4vw, 48px) clamp(20px, 5.5vw, 96px);
                        }

                        .pmg-hero__intro {
                            display: grid;
                            grid-template-columns: 1fr;
                            gap: 32px;
                            align-items: center;
                        }

                        .pmg-hero__headline {
                            min-width: 0;
                        }
                        .pmg-hero__intro .pmg-hero__title {
                            margin-bottom: 0;
                        }

                        .pmg-hero__content {
                            max-width: 38rem;
                        }

                        .pmg-hero__title {
                            margin: 0 0 clamp(20px, 3vw, 32px);
                            font-size: clamp(3.25rem, 11vw, 8.5rem);
                            font-weight: 700;
                            line-height: 0.92;
                            letter-spacing: -0.04em;
                            text-transform: uppercase;
                            color: #fff;
                        }
                        .pmg-hero__title-line {
                            display: block;
                        }
                        .pmg-hero__title-line--accent {
                            color: var(--at-theme-primary, #f0460e);
                        }

                        .pmg-hero__desc {
                            max-width: 32rem;
                            margin: 0 0 clamp(24px, 3vw, 36px);
                            font-size: clamp(15px, 1.2vw, 17px);
                            line-height: 1.7;
                            color: rgba(255, 255, 255, 0.72);
                        }

                        .pmg-hero__actions {
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            gap: 12px;
                            margin-bottom: clamp(24px, 3vw, 32px);
                        }

                        .pmg-hero__categories {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 8px;
                        }
                        .pmg-hero__category-pill {
                            padding: 8px 14px;
                            font-size: 11px;
                            font-weight: 600;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                            text-decoration: none;
                            color: rgba(255, 255, 255, 0.78);
                            border: 1px solid rgba(255, 255, 255, 0.18);
                            background: rgba(255, 255, 255, 0.04);
                            backdrop-filter: blur(8px);
                            transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
                        }
                        .pmg-hero__category-pill:hover {
                            color: #fff;
                            border-color: rgba(240, 70, 14, 0.55);
                            background: rgba(240, 70, 14, 0.12);
                        }

                        .pmg-hero__visual {
                            display: none;
                            position: relative;
                            justify-self: end;
                            align-self: center;
                            width: min(100%, 620px);
                            margin-left: auto;
                        }
                        .pmg-hero__product-frame {
                            position: relative;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            aspect-ratio: 1 / 1;
                            padding: 28px;
                        }
                        .pmg-hero__product-ring {
                            position: absolute;
                            inset: 8%;
                            border: 1px solid rgba(255, 255, 255, 0.14);
                            border-radius: 50%;
                            animation: pmg-hero-ring-spin 28s linear infinite;
                        }
                        .pmg-hero__product-ring::before {
                            content: "";
                            position: absolute;
                            inset: -1px;
                            border-radius: 50%;
                            border: 1px solid transparent;
                            border-top-color: var(--at-theme-primary, #f0460e);
                            opacity: 0.7;
                        }
                        @keyframes pmg-hero-ring-spin {
                            from { transform: rotate(0deg); }
                            to { transform: rotate(360deg); }
                        }
                        .pmg-hero__product-img {
                            position: relative;
                            z-index: 1;
                            width: 100%;
                            height: auto;
                            object-fit: contain;
                            filter: drop-shadow(0 28px 48px rgba(0, 0, 0, 0.45));
                            transform: scale(1.12) translateX(-4%);
                            animation: pmg-hero-float 5s ease-in-out infinite;
                        }
                        @keyframes pmg-hero-float {
                            0%, 100% { transform: scale(1.12) translateX(-4%) translateY(0); }
                            50% { transform: scale(1.12) translateX(-4%) translateY(-12px); }
                        }
                        .pmg-hero__product-badge {
                            position: absolute;
                            bottom: 6%;
                            left: 0;
                            z-index: 2;
                            display: flex;
                            flex-direction: column;
                            gap: 2px;
                            padding: 12px 16px;
                            border: 1px solid rgba(255, 255, 255, 0.16);
                            background: rgba(12, 12, 12, 0.55);
                            backdrop-filter: blur(12px);
                        }
                        .pmg-hero__product-badge-label {
                            font-size: 10px;
                            font-weight: 600;
                            letter-spacing: 0.14em;
                            text-transform: uppercase;
                            color: var(--at-theme-primary, #f0460e);
                        }
                        .pmg-hero__product-badge-series {
                            font-size: 13px;
                            font-weight: 600;
                            color: #fff;
                        }
                        .pmg-hero__ruler {
                            position: absolute;
                            right: -8%;
                            top: 12%;
                            width: 12px;
                            height: 72%;
                            border-radius: 999px;
                            background: linear-gradient(
                                to bottom,
                                transparent 0%,
                                rgba(255, 255, 255, 0.08) 8%,
                                rgba(255, 255, 255, 0.08) 92%,
                                transparent 100%
                            );
                            opacity: 0.5;
                        }
                        .pmg-hero__ruler::before {
                            content: "";
                            position: absolute;
                            inset: 0;
                            background: repeating-linear-gradient(
                                to bottom,
                                rgba(255, 255, 255, 0.35) 0,
                                rgba(255, 255, 255, 0.35) 1px,
                                transparent 1px,
                                transparent 18px
                            );
                        }

                        .pmg-hero__footer {
                            position: relative;
                            z-index: 2;
                            display: flex;
                            align-items: flex-end;
                            justify-content: space-between;
                            gap: 24px;
                            padding: 0 clamp(20px, 5.5vw, 96px) clamp(28px, 4vw, 48px);
                        }

                        .pmg-hero__stats {
                            display: grid;
                            grid-template-columns: 1fr;
                            gap: 0;
                            flex: 1;
                            max-width: 52rem;
                            border: 1px solid rgba(255, 255, 255, 0.1);
                            background: rgba(255, 255, 255, 0.03);
                            backdrop-filter: blur(10px);
                        }
                        .pmg-hero__stat {
                            display: flex;
                            flex-direction: column;
                            gap: 6px;
                            padding: 20px 24px;
                        }
                        .pmg-hero__stat + .pmg-hero__stat {
                            border-top: 1px solid rgba(255, 255, 255, 0.1);
                        }
                        .pmg-hero__stat-value {
                            font-size: clamp(1.75rem, 3vw, 2.25rem);
                            font-weight: 700;
                            line-height: 1;
                            letter-spacing: -0.02em;
                            color: #fff;
                        }
                        .pmg-hero__stat-label {
                            font-size: 0.85rem;
                            line-height: 1.5;
                            color: rgba(255, 255, 255, 0.58);
                        }

                        .pmg-hero__scroll {
                            display: none;
                            flex-direction: column;
                            align-items: center;
                            gap: 8px;
                            flex-shrink: 0;
                        }
                        .pmg-hero__scroll-line {
                            display: block;
                            width: 1px;
                            height: 48px;
                            position: relative;
                            background: rgba(255, 255, 255, 0.2);
                            overflow: hidden;
                        }
                        .pmg-hero__scroll-line::after {
                            content: "";
                            position: absolute;
                            top: -100%;
                            left: 0;
                            width: 100%;
                            height: 40%;
                            background: linear-gradient(to bottom, transparent, var(--at-theme-primary, #f0460e) 50%, transparent);
                            animation: pmg-hero-scroll-drop 1.6s ease-in-out infinite;
                        }
                        @keyframes pmg-hero-scroll-drop {
                            0% { top: -40%; }
                            100% { top: 140%; }
                        }
                        .pmg-hero__scroll-text {
                            font-size: 10px;
                            letter-spacing: 0.14em;
                            color: rgba(255, 255, 255, 0.5);
                            writing-mode: vertical-rl;
                            text-orientation: mixed;
                        }

                        @media (min-width: 768px) {
                            .pmg-hero__stats {
                                grid-template-columns: repeat(2, 1fr);
                            }
                            .pmg-hero__stat + .pmg-hero__stat {
                                border-top: none;
                                border-left: 1px solid rgba(255, 255, 255, 0.1);
                            }
                            .pmg-hero__scroll {
                                display: flex;
                            }
                        }

                        @media (min-width: 992px) {
                            .pmg-hero__intro {
                                grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
                                gap: clamp(24px, 4vw, 64px);
                            }
                            .pmg-hero__visual {
                                display: block;
                            }
                        }

                        @media (max-width: 575px) {
                            .pmg-hero__topbar-divider:nth-of-type(2) {
                                display: none;
                            }
                            .pmg-hero__topbar-label:nth-of-type(3) {
                                display: none;
                            }
                        }
                    `,
                }}
            />
        </section>
    );
}
