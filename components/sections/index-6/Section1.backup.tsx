"use client";

import { useEffect, useRef, useState } from "react";
import { getProductDetailsBySeries, productHref, type ProductSeries } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import RevealText from "@/components/effects/RevealText";
import { PRODUCT_CATEGORIES } from "@/lib/productCategories";

type GsapContext = { revert: () => void };

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

const HERO_ACCENT = "#F0460E";

type FeaturedCategoryProduct = {
    categoryId: string;
    categoryLabel: string;
    imageSrc: string;
    imageAlt: string;
    series: ProductSeries;
    featuredLabel: string;
};

const FEATURED_CATEGORY_PRODUCTS: FeaturedCategoryProduct[] = [
    {
        categoryId: "measuring-tapes",
        categoryLabel: "Measuring Tapes",
        imageSrc: "/assets/imgs/pmgproducts/SIGNATURE%20SERIES/3mtr/1.png",
        imageAlt: "PMG Signature Series 3m measuring tape",
        series: "SIGNATURE SERIES",
        featuredLabel: "Top pick for measuring tapes",
    },
    {
        categoryId: "fiberglass-tapes",
        categoryLabel: "Fiberglass Tapes",
        imageSrc: "/assets/imgs/pmgproducts/FIBREGLASS%20GOLD%20SERIES/30mtr/1.png",
        imageAlt: "PMG Fibreglass Gold Series 30m tape",
        series: "FIBREGLASS GOLD SERIES",
        featuredLabel: "Long-range site measurement",
    },
    {
        categoryId: "spirit-levels",
        categoryLabel: "Spirit Levels",
        imageSrc: "/assets/imgs/pmgproducts/SPIRIT%20LEVEL/30cm/1.png",
        imageAlt: "PMG Spirit Level 30cm",
        series: "SPIRIT LEVEL",
        featuredLabel: "Quick alignment favorite",
    },
];

export default function Section1() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [activeCategoryId, setActiveCategoryId] = useState<string>(FEATURED_CATEGORY_PRODUCTS[0].categoryId);

    const activeFeaturedProduct =
        FEATURED_CATEGORY_PRODUCTS.find((item) => item.categoryId === activeCategoryId) ??
        FEATURED_CATEGORY_PRODUCTS[0];
    const activeProductDetails = getProductDetailsBySeries(activeFeaturedProduct.series);
    const activeCategory =
        PRODUCT_CATEGORIES.find((category) => category.id === activeFeaturedProduct.categoryId) ??
        PRODUCT_CATEGORIES[0];

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const reduceMotion =
            typeof window.matchMedia === "function" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) return;

        let cancelled = false;
        let ctx: GsapContext | null = null;
        let cleanupPointerEvents: (() => void) | undefined;

        const init = async () => {
            const gsap = (await import("gsap")).default;
            if (cancelled) return;

            ctx = (
                gsap as unknown as {
                    context: (fn: () => void, scope?: Element) => GsapContext;
                }
            ).context(() => {
                const introNodes = section.querySelectorAll(
                    ".pmg-hero-commerce__copy > *, .pmg-hero-commerce__cta-row, .pmg-hero-commerce__category-list, .pmg-hero-commerce__stat, .pmg-hero-commerce__panel-details > *"
                );
                const productPanel = section.querySelector<HTMLElement>(".pmg-hero-commerce__product-panel");
                const spotlight = section.querySelector<HTMLElement>(".pmg-hero-commerce__spotlight");
                const image = section.querySelector<HTMLElement>(".pmg-hero-commerce__product-image");

                gsap.set(introNodes, { opacity: 0, y: 24 });
                if (productPanel) {
                    gsap.set(productPanel, { opacity: 0, y: 28, scale: 0.96, rotateX: 6 });
                }
                if (spotlight) {
                    gsap.set(spotlight, { opacity: 0, scale: 0.9 });
                }

                const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
                timeline
                    .to(".pmg-hero-commerce__headline, .pmg-hero-commerce__description", {
                        opacity: 1,
                        y: 0,
                        duration: 0.55,
                        stagger: 0.1,
                    })
                    .to(".pmg-hero-commerce__cta-row", { opacity: 1, y: 0, duration: 0.45 }, "-=0.15")
                    .to(".pmg-hero-commerce__category-list", { opacity: 1, y: 0, duration: 0.45 }, "-=0.1")
                    .to(
                        ".pmg-hero-commerce__stat, .pmg-hero-commerce__panel-details > *",
                        { opacity: 1, y: 0, duration: 0.45, stagger: 0.08 },
                        "-=0.1"
                    )
                    .to(
                        productPanel,
                        { opacity: 1, y: 0, scale: 1, rotateX: 0, duration: 0.75 },
                        "-=0.5"
                    )
                    .to(spotlight, { opacity: 1, scale: 1, duration: 0.7 }, "-=0.55");

                if (image) {
                    gsap.to(image, {
                        y: -10,
                        duration: 2.6,
                        ease: "sine.inOut",
                        repeat: -1,
                        yoyo: true,
                    });
                }

                if (productPanel) {
                    const handlePointerMove = (event: PointerEvent) => {
                        const rect = productPanel.getBoundingClientRect();
                        const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
                        const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

                        gsap.to(productPanel, {
                            rotateY: offsetX * 8,
                            rotateX: offsetY * -8,
                            x: offsetX * 10,
                            y: offsetY * 10,
                            duration: 0.35,
                            ease: "power2.out",
                            transformPerspective: 1200,
                            transformOrigin: "50% 50%",
                        });
                    };

                    const handlePointerLeave = () => {
                        gsap.to(productPanel, {
                            rotateY: 0,
                            rotateX: 0,
                            x: 0,
                            y: 0,
                            duration: 0.45,
                            ease: "power3.out",
                        });
                    };

                    productPanel.addEventListener("pointermove", handlePointerMove);
                    productPanel.addEventListener("pointerleave", handlePointerLeave);

                    cleanupPointerEvents = () => {
                        productPanel.removeEventListener("pointermove", handlePointerMove);
                        productPanel.removeEventListener("pointerleave", handlePointerLeave);
                    };
                }
            }, section);
        };

        init();

        return () => {
            cancelled = true;
            cleanupPointerEvents?.();
            ctx?.revert();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="pmg-hero-commerce changeless"
            aria-label="PMG Precision Measuring Tools Hero"
        >
            <div className="pmg-hero-commerce__backdrop" aria-hidden="true">
                <div className="pmg-hero-commerce__mesh" />
                <div className="pmg-hero-commerce__gradient" />
                <div className="pmg-hero-commerce__spotlight" />
            </div>

            <div className="container-fluid">
                <div className="pmg-hero-commerce__shell">
                    <div className="pmg-hero-commerce__layout">
                        <div className="pmg-hero-commerce__copy">
                            <div className="pmg-hero-commerce__headline">
                                <span className="pmg-hero-commerce__eyebrow">Precision tools for every job site</span>
                                <h1 className="pmg-hero-commerce__title">
                                    <span className="pmg-hero-commerce__title-line">
                                        <RevealText>New Vision</RevealText>
                                    </span>
                                    <span className="pmg-hero-commerce__title-line pmg-hero-commerce__title-line--accent">
                                        <RevealText>New Inches</RevealText>
                                    </span>
                                </h1>
                            </div>

                            <p className="pmg-hero-commerce__description">
                                PMG engineers measuring tapes, spirit levels, and industrial hand tools for
                                the toughest job sites where accuracy, durability, and consistency are
                                non-negotiable.
                            </p>

                            <div className="pmg-hero-commerce__cta-row">
                                <Link className="pmg-hero-commerce__button pmg-hero-commerce__button--primary" href="/products">
                                    <span>Explore all products</span>
                                    <i>{ARROW_DIAGONAL_SVG}</i>
                                </Link>
                                <Link className="pmg-hero-commerce__button pmg-hero-commerce__button--secondary" href="/contact-1">
                                    <span>Get a free quote</span>
                                    <i>{ARROW_DIAGONAL_SVG}</i>
                                </Link>
                            </div>

                            <div className="pmg-hero-commerce__category-list">
                                {PRODUCT_CATEGORIES.map((category) => (
                                    <Link
                                        key={category.id}
                                        href={`/products#${category.id}`}
                                        className="pmg-hero-commerce__category-pill"
                                    >
                                        <strong>{category.shortLabel}</strong>
                                        <span>{category.description}</span>
                                    </Link>
                                ))}
                            </div>

                            <div className="pmg-hero-commerce__stats">
                                {HERO_STATS.map((stat) => (
                                    <div key={stat.label} className="pmg-hero-commerce__stat">
                                        <span className="pmg-hero-commerce__stat-value">{stat.value}</span>
                                        <span className="pmg-hero-commerce__stat-label">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pmg-hero-commerce__visual">
                            <div className="pmg-hero-commerce__product-panel">
                                <div className="pmg-hero-commerce__panel-top">
                                    <div className="pmg-hero-commerce__tablist" role="tablist" aria-label="Featured products by category">
                                        {FEATURED_CATEGORY_PRODUCTS.map((product) => {
                                            const isActive = product.categoryId === activeCategoryId;

                                            return (
                                                <button
                                                    key={product.categoryId}
                                                    type="button"
                                                    role="tab"
                                                    id={`pmg-featured-tab-${product.categoryId}`}
                                                    aria-selected={isActive}
                                                    aria-controls={`pmg-featured-panel-${product.categoryId}`}
                                                    className={`pmg-hero-commerce__tab${isActive ? " pmg-hero-commerce__tab--active" : ""}`}
                                                    onClick={() => setActiveCategoryId(product.categoryId)}
                                                >
                                                    <span>{product.categoryLabel}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="pmg-hero-commerce__product-stage">
                                    <div className="pmg-hero-commerce__product-header">
                                        <span className="pmg-hero-commerce__featured-label">Featured Product</span>
                                        <h2 className="pmg-hero-commerce__product-title">
                                            {activeProductDetails.title}
                                        </h2>
                                    </div>
                                    <div className="pmg-hero-commerce__product-halo" />
                                    <div className="pmg-hero-commerce__measure-guides" />
                                    <Image
                                        src={activeFeaturedProduct.imageSrc}
                                        alt={activeFeaturedProduct.imageAlt}
                                        width={720}
                                        height={720}
                                        priority
                                        className="pmg-hero-commerce__product-image"
                                    />
                                </div>

                                <div
                                    className="pmg-hero-commerce__panel-details"
                                    role="tabpanel"
                                    id={`pmg-featured-panel-${activeCategoryId}`}
                                    aria-labelledby={`pmg-featured-tab-${activeCategoryId}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .pmg-hero-commerce {
                            --pmg-hero-accent: ${HERO_ACCENT};
                            position: relative;
                            min-height: 100vh;
                            min-height: 100dvh;
                            background:
                                radial-gradient(circle at top left, rgba(255, 189, 105, 0.25), transparent 28%),
                                linear-gradient(180deg, #f6f8fb 0%, #eef2f5 100%);
                            color: #0f1111;
                            overflow: hidden;
                        }

                        .pmg-hero-commerce__backdrop {
                            position: absolute;
                            inset: 0;
                            z-index: 0;
                            pointer-events: none;
                        }
                        .pmg-hero-commerce__mesh {
                            position: absolute;
                            inset: 0;
                            background:
                                linear-gradient(rgba(19, 25, 33, 0.04) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(19, 25, 33, 0.04) 1px, transparent 1px);
                            background-size: 36px 36px;
                            mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.65), transparent 88%);
                        }
                        .pmg-hero-commerce__gradient {
                            position: absolute;
                            inset: 0;
                            background-image:
                                radial-gradient(circle at 85% 20%, rgba(255, 153, 0, 0.22), transparent 18%),
                                radial-gradient(circle at 75% 65%, rgba(35, 47, 62, 0.1), transparent 24%);
                        }
                        .pmg-hero-commerce__spotlight {
                            position: absolute;
                            right: clamp(5%, 7vw, 10%);
                            top: 14%;
                            width: min(34vw, 420px);
                            height: min(34vw, 420px);
                            border-radius: 50%;
                            background: radial-gradient(circle, rgba(255, 189, 105, 0.45) 0%, rgba(255, 189, 105, 0.12) 42%, transparent 72%);
                            filter: blur(18px);
                        }

                        .pmg-hero-commerce .container-fluid {
                            position: relative;
                            z-index: 1;
                        }
                        .pmg-hero-commerce__shell {
                            max-width: 1440px;
                            margin: 0 auto;
                            padding: clamp(104px, 11vw, 136px) clamp(8px, 2vw, 20px) clamp(48px, 6vw, 72px);
                        }

                        .pmg-hero-commerce__layout {
                            display: grid;
                            grid-template-columns: minmax(0, 1fr);
                            gap: clamp(24px, 4vw, 48px);
                            align-items: center;
                        }
                        .pmg-hero-commerce__copy {
                            min-width: 0;
                        }
                        .pmg-hero-commerce__headline {
                            margin-bottom: 20px;
                        }
                        .pmg-hero-commerce__eyebrow {
                            display: inline-flex;
                            align-items: center;
                            margin-bottom: 18px;
                            padding: 8px 12px;
                            border-radius: 10px;
                            background: rgba(255, 153, 0, 0.12);
                            color: #b56a00;
                            font-size: 12px;
                            font-weight: 700;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                        }
                        .pmg-hero-commerce__title {
                            margin: 0;
                            font-size: clamp(3rem, 9vw, 7rem);
                            font-weight: 700;
                            line-height: 0.92;
                            letter-spacing: -0.04em;
                            text-transform: uppercase;
                            color: #131921;
                        }
                        .pmg-hero-commerce__title-line {
                            display: block;
                        }
                        .pmg-hero-commerce__title-line--accent {
                            color: var(--pmg-hero-accent);
                        }
                        .pmg-hero-commerce__description {
                            max-width: 38rem;
                            margin: 0 0 28px;
                            font-size: clamp(16px, 1.3vw, 18px);
                            line-height: 1.7;
                            color: rgba(15, 17, 17, 0.72);
                        }

                        .pmg-hero-commerce__cta-row {
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            gap: 12px;
                            margin-bottom: 24px;
                        }
                        .pmg-hero-commerce__button {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            gap: 12px;
                            min-height: 52px;
                            padding: 14px 20px;
                            border-radius: 999px;
                            border: 1px solid transparent;
                            text-decoration: none;
                            font-size: 15px;
                            font-weight: 700;
                            transition:
                                transform 0.2s ease,
                                box-shadow 0.2s ease,
                                border-color 0.2s ease,
                                background-color 0.2s ease,
                                color 0.2s ease;
                        }
                        .pmg-hero-commerce__button i {
                            display: inline-flex;
                            line-height: 0;
                        }
                        .pmg-hero-commerce__button:hover {
                            transform: translateY(-2px);
                        }
                        .pmg-hero-commerce__button--primary {
                            background: var(--pmg-hero-accent);
                            color: #ffffff;
                            box-shadow: 0 18px 30px rgba(240, 70, 14, 0.26);
                        }
                        .pmg-hero-commerce__button--primary:hover {
                            color: #ffffff;
                            background: #d83a08;
                        }
                        .pmg-hero-commerce__button--secondary {
                            background: rgba(255, 255, 255, 0.85);
                            border-color: rgba(19, 25, 33, 0.12);
                            color: #232f3e;
                            box-shadow: 0 12px 24px rgba(19, 25, 33, 0.08);
                        }
                        .pmg-hero-commerce__button--secondary:hover {
                            color: #131921;
                            border-color: rgba(255, 153, 0, 0.35);
                        }

                        .pmg-hero-commerce__category-list {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                            gap: 12px;
                            margin-bottom: 24px;
                        }
                        .pmg-hero-commerce__category-pill {
                            display: flex;
                            flex-direction: column;
                            gap: 6px;
                            min-height: 100%;
                            padding: 16px 18px;
                            border-radius: 18px;
                            border: 1px solid rgba(15, 17, 17, 0.08);
                            background: rgba(255, 255, 255, 0.9);
                            text-decoration: none;
                            box-shadow: 0 10px 24px rgba(15, 17, 17, 0.06);
                            transition:
                                transform 0.2s ease,
                                box-shadow 0.2s ease,
                                border-color 0.2s ease;
                        }
                        .pmg-hero-commerce__category-pill strong {
                            color: #131921;
                            font-size: 15px;
                            font-weight: 700;
                        }
                        .pmg-hero-commerce__category-pill span {
                            color: rgba(35, 47, 62, 0.7);
                            font-size: 13px;
                            line-height: 1.5;
                        }
                        .pmg-hero-commerce__category-pill:hover {
                            transform: translateY(-4px);
                            border-color: rgba(255, 153, 0, 0.25);
                            box-shadow: 0 16px 36px rgba(15, 17, 17, 0.09);
                        }

                        .pmg-hero-commerce__stats {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                            gap: 14px;
                        }
                        .pmg-hero-commerce__stat {
                            display: flex;
                            flex-direction: column;
                            gap: 8px;
                            padding: 22px 24px;
                            border-radius: 20px;
                            background: linear-gradient(180deg, #232f3e 0%, #131921 100%);
                            box-shadow: 0 20px 40px rgba(19, 25, 33, 0.16);
                        }
                        .pmg-hero-commerce__stat-value {
                            font-size: clamp(1.9rem, 3vw, 2.5rem);
                            font-weight: 700;
                            line-height: 1;
                            letter-spacing: -0.03em;
                            color: #ff9900;
                        }
                        .pmg-hero-commerce__stat-label {
                            font-size: 14px;
                            line-height: 1.6;
                            color: rgba(255, 255, 255, 0.72);
                        }

                        .pmg-hero-commerce__visual {
                            position: relative;
                            min-width: 0;
                        }
                        .pmg-hero-commerce__product-panel {
                            position: relative;
                            padding: clamp(20px, 3vw, 28px);
                            border-radius: 28px;
                            border: 1px solid rgba(15, 17, 17, 0.08);
                            background:
                                linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(246, 248, 251, 0.96) 100%);
                            box-shadow:
                                0 18px 40px rgba(15, 17, 17, 0.08),
                                0 2px 0 rgba(255, 255, 255, 0.65) inset;
                        }
                        .pmg-hero-commerce__panel-top {
                            display: block;
                            margin-bottom: 18px;
                        }
                        .pmg-hero-commerce__tablist {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 10px;
                        }
                        .pmg-hero-commerce__tab {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            min-height: 42px;
                            padding: 10px 14px;
                            border: 1px solid rgba(19, 25, 33, 0.1);
                            border-radius: 999px;
                            background: rgba(255, 255, 255, 0.88);
                            color: #232f3e;
                            font-size: 13px;
                            font-weight: 700;
                            transition:
                                background-color 0.2s ease,
                                border-color 0.2s ease,
                                color 0.2s ease,
                                transform 0.2s ease;
                        }
                        .pmg-hero-commerce__tab:hover {
                            transform: translateY(-1px);
                            border-color: rgba(240, 70, 14, 0.3);
                        }
                        .pmg-hero-commerce__tab--active {
                            background: #131921;
                            border-color: #131921;
                            color: #ffffff;
                        }
                        .pmg-hero-commerce__featured-label {
                            display: inline-flex;
                            align-items: center;
                            margin-bottom: 10px;
                            font-size: 11px;
                            font-weight: 700;
                            letter-spacing: 0.1em;
                            text-transform: uppercase;
                            color: var(--pmg-hero-accent);
                        }

                        .pmg-hero-commerce__product-stage {
                            position: relative;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-direction: column;
                            min-height: clamp(320px, 36vw, 520px);
                            padding: clamp(20px, 4vw, 40px);
                            border-radius: 24px;
                            background:
                                linear-gradient(180deg, rgba(244, 248, 251, 0.9) 0%, rgba(229, 237, 242, 0.96) 100%);
                            overflow: hidden;
                        }
                        .pmg-hero-commerce__product-header {
                            position: relative;
                            z-index: 1;
                            width: 100%;
                            margin-bottom: 8px;
                            text-align: center;
                        }
                        .pmg-hero-commerce__product-title {
                            margin: 0;
                            font-size: clamp(1.25rem, 2vw, 1.8rem);
                            font-weight: 700;
                            line-height: 1.2;
                            color: #131921;
                        }
                        .pmg-hero-commerce__product-halo {
                            position: absolute;
                            inset: 16% 18%;
                            border-radius: 50%;
                            background: radial-gradient(circle, rgba(255, 153, 0, 0.28) 0%, rgba(255, 153, 0, 0.08) 42%, transparent 72%);
                            filter: blur(6px);
                        }
                        .pmg-hero-commerce__measure-guides {
                            position: absolute;
                            inset: 0;
                            background-image:
                                linear-gradient(rgba(19, 25, 33, 0.06) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(19, 25, 33, 0.06) 1px, transparent 1px);
                            background-size: 28px 28px;
                            mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 0.9) 35%, transparent 82%);
                        }
                        .pmg-hero-commerce__product-image {
                            position: relative;
                            z-index: 1;
                            width: min(100%, 430px);
                            height: auto;
                            object-fit: contain;
                            filter: drop-shadow(0 26px 48px rgba(19, 25, 33, 0.22));
                            will-change: transform;
                        }

                        .pmg-hero-commerce__panel-details {
                            display: none;
                        }
                        .pmg-hero-commerce__trust-card {
                            display: flex;
                            flex-direction: column;
                            gap: 6px;
                            min-height: 100%;
                            padding: 16px;
                            border-radius: 18px;
                            background: #fff;
                            border: 1px solid rgba(15, 17, 17, 0.08);
                        }
                        .pmg-hero-commerce__trust-title {
                            font-size: 13px;
                            font-weight: 700;
                            color: #131921;
                        }
                        .pmg-hero-commerce__trust-copy {
                            font-size: 12px;
                            line-height: 1.6;
                            color: rgba(35, 47, 62, 0.66);
                        }

                        @media (min-width: 992px) {
                            .pmg-hero-commerce__layout {
                                grid-template-columns: minmax(0, 1.02fr) minmax(0, 0.98fr);
                            }
                        }
                        @media (max-width: 767px) {
                            .pmg-hero-commerce__shell {
                                padding-top: 92px;
                            }
                            .pmg-hero-commerce__panel-top {
                                flex-direction: column;
                                align-items: stretch;
                            }
                            .pmg-hero-commerce__product-stage {
                                min-height: 280px;
                            }
                        }
                    `,
                }}
            />
        </section>
    );
}
