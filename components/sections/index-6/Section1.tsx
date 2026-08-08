"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RevealText from "@/components/effects/RevealText";

type GsapContext = { revert: () => void };

const ARROW_DIAGONAL_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const HERO_ACCENT = "#1562A1";

type FeaturedCategoryProduct = {
    categoryId: string;
    categoryLabel: string;
    imageSrc: string;
    imageAlt: string;
    caption: string;
};

const FEATURED_CATEGORY_PRODUCTS: FeaturedCategoryProduct[] = [
    {
        categoryId: "measuring-tapes",
        categoryLabel: "Measuring Tapes",
        imageSrc: "/assets/imgs/pmgproducts/SIGNATURE%20SERIES/3mtr/1.png",
        imageAlt: "PMG measuring tape",
        caption: "Compact, durable tools for everyday measuring work.",
    },
    {
        categoryId: "fiberglass-tapes",
        categoryLabel: "Fiberglass Tapes",
        imageSrc: "/assets/imgs/pmgproducts/FIBREGLASS%20GOLD%20SERIES/30mtr/1.png",
        imageAlt: "PMG fiberglass measuring tape",
        caption: "Long-range tapes built for outdoor layout and site marking.",
    },
    {
        categoryId: "spirit-levels",
        categoryLabel: "Spirit Levels",
        imageSrc: "/assets/imgs/pmgproducts/SPIRIT%20LEVEL/30cm/yellow/1.png",
        imageAlt: "PMG spirit level",
        caption: "Clean alignment tools for finishing, fitting, and install work.",
    },
];

export default function Section1() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [activeCategoryId, setActiveCategoryId] = useState<string>(FEATURED_CATEGORY_PRODUCTS[0].categoryId);

    const activeFeaturedProduct =
        FEATURED_CATEGORY_PRODUCTS.find((item) => item.categoryId === activeCategoryId) ??
        FEATURED_CATEGORY_PRODUCTS[0];

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
                    ".pmg-hero-catalog__intro-copy > *, .pmg-hero-catalog__visual-meta, .pmg-hero-catalog__rail"
                );
                const stage = section.querySelector<HTMLElement>(".pmg-hero-catalog__visual-stage");
                const image = section.querySelector<HTMLElement>(".pmg-hero-catalog__product-image");

                gsap.set(introNodes, { opacity: 0, y: 24 });
                if (stage) {
                    gsap.set(stage, { opacity: 0, y: 32, scale: 0.98 });
                }

                const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
                timeline
                    .to(introNodes, { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 })
                    .to(stage, { opacity: 1, y: 0, scale: 1, duration: 0.7 }, "-=0.3");

                if (image) {
                    gsap.to(image, {
                        y: -10,
                        duration: 2.8,
                        ease: "sine.inOut",
                        repeat: -1,
                        yoyo: true,
                    });
                }

                if (stage) {
                    const handlePointerMove = (event: PointerEvent) => {
                        const rect = stage.getBoundingClientRect();
                        const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
                        const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

                        gsap.to(stage, {
                            rotateY: offsetX * 4,
                            rotateX: offsetY * -4,
                            x: offsetX * 6,
                            y: offsetY * 6,
                            duration: 0.35,
                            ease: "power2.out",
                            transformPerspective: 1200,
                            transformOrigin: "50% 50%",
                        });
                    };

                    const handlePointerLeave = () => {
                        gsap.to(stage, {
                            rotateY: 0,
                            rotateX: 0,
                            x: 0,
                            y: 0,
                            duration: 0.45,
                            ease: "power3.out",
                        });
                    };

                    stage.addEventListener("pointermove", handlePointerMove);
                    stage.addEventListener("pointerleave", handlePointerLeave);

                    cleanupPointerEvents = () => {
                        stage.removeEventListener("pointermove", handlePointerMove);
                        stage.removeEventListener("pointerleave", handlePointerLeave);
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
            className="pmg-hero-catalog changeless"
            aria-label="PMG precision tools hero"
        >
            <div className="pmg-hero-catalog__backdrop" aria-hidden="true">
                <div className="pmg-hero-catalog__grid" />
                <div className="pmg-hero-catalog__glow pmg-hero-catalog__glow--left" />
                <div className="pmg-hero-catalog__glow pmg-hero-catalog__glow--right" />
                <div className="pmg-hero-catalog__wash" />
            </div>

            <div className="container-fluid">
                <div className="pmg-hero-catalog__shell">
                    <div className="pmg-hero-catalog__panel">
                        <div className="pmg-hero-catalog__layout">
                            <div className="pmg-hero-catalog__intro-copy">
                                <span className="pmg-hero-catalog__eyebrow">PMG precision measuring tools</span>

                                <h1 className="pmg-hero-catalog__title">
                                    <span className="pmg-hero-catalog__title-line">
                                        <RevealText>NEW VISION</RevealText>
                                    </span>
                                    <span className="pmg-hero-catalog__title-line pmg-hero-catalog__title-line--accent">
                                        <RevealText>NEW INCHES</RevealText>
                                    </span>
                                </h1>

                                <p className="pmg-hero-catalog__description">
                                    Precision measuring tools built for accuracy, durability, and everyday trade use.
                                </p>

                                <div className="pmg-hero-catalog__cta-row">
                                    <Link
                                        className="pmg-hero-catalog__button pmg-hero-catalog__button--primary"
                                        href="/products"
                                    >
                                        <span>Explore products</span>
                                        <i>{ARROW_DIAGONAL_SVG}</i>
                                    </Link>
                                    <Link
                                        className="pmg-hero-catalog__button pmg-hero-catalog__button--secondary"
                                        href="/contact-1"
                                    >
                                        <span>Contact sales</span>
                                        <i>{ARROW_DIAGONAL_SVG}</i>
                                    </Link>
                                </div>

                                <div className="pmg-hero-catalog__micro-list" aria-label="Key PMG categories">
                                    <span>Measuring Tapes</span>
                                    <span>Fiberglass Tapes</span>
                                    <span>Spirit Levels</span>
                                </div>
                            </div>

                            <div className="pmg-hero-catalog__visual">
                                <div className="pmg-hero-catalog__visual-meta">
                                    <span className="pmg-hero-catalog__visual-label">Featured</span>
                                    <strong>{activeFeaturedProduct.categoryLabel}</strong>
                                    <p>{activeFeaturedProduct.caption}</p>
                                </div>

                                <div
                                    className="pmg-hero-catalog__visual-stage"
                                    role="tabpanel"
                                    id={`pmg-featured-panel-${activeCategoryId}`}
                                    aria-labelledby={`pmg-featured-tab-${activeCategoryId}`}
                                >
                                    <div className="pmg-hero-catalog__visual-orbit" aria-hidden="true" />
                                    <div className="pmg-hero-catalog__visual-card">
                                        <span className="pmg-hero-catalog__visual-badge">TRADE READY</span>
                                        <Image
                                            src={activeFeaturedProduct.imageSrc}
                                            alt={activeFeaturedProduct.imageAlt}
                                            width={720}
                                            height={720}
                                            priority
                                            className="pmg-hero-catalog__product-image"
                                        />
                                    </div>
                                </div>

                                <div
                                    className="pmg-hero-catalog__rail"
                                    role="tablist"
                                    aria-label="Featured PMG product categories"
                                >
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
                                                className={`pmg-hero-catalog__rail-item${isActive ? " pmg-hero-catalog__rail-item--active" : ""}`}
                                                onClick={() => setActiveCategoryId(product.categoryId)}
                                            >
                                                <span className="pmg-hero-catalog__rail-item-title">{product.categoryLabel}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pmg-hero-catalog__ruler" aria-hidden="true" />

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .pmg-hero-catalog {
                            --pmg-hero-accent: ${HERO_ACCENT};
                            position: relative;
                            overflow: hidden;
                            color: #0f172a;
                            background:
                                radial-gradient(circle at 10% 12%, rgba(21, 98, 161, 0.16), transparent 24%),
                                radial-gradient(circle at 88% 10%, rgba(96, 165, 250, 0.16), transparent 28%),
                                linear-gradient(135deg, #f8fbff 0%, #edf2f8 50%, #f7f2eb 100%);
                        }

                        .pmg-hero-catalog__backdrop {
                            position: absolute;
                            inset: 0;
                            z-index: 0;
                            pointer-events: none;
                        }

                        .pmg-hero-catalog__grid {
                            position: absolute;
                            inset: 0;
                            background-image:
                                linear-gradient(rgba(15, 23, 42, 0.035) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(15, 23, 42, 0.035) 1px, transparent 1px);
                            background-size: 44px 44px;
                            mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.46), transparent 92%);
                        }

                        .pmg-hero-catalog__glow,
                        .pmg-hero-catalog__wash {
                            position: absolute;
                            border-radius: 999px;
                        }

                        .pmg-hero-catalog__glow--left {
                            top: 16%;
                            left: -8%;
                            width: min(26vw, 320px);
                            height: min(26vw, 320px);
                            background: rgba(21, 98, 161, 0.1);
                            filter: blur(28px);
                        }

                        .pmg-hero-catalog__glow--right {
                            right: 4%;
                            top: 10%;
                            width: min(34vw, 440px);
                            height: min(34vw, 440px);
                            background: rgba(96, 165, 250, 0.18);
                            filter: blur(30px);
                        }

                        .pmg-hero-catalog__wash {
                            inset: auto -10% 8% auto;
                            width: min(40vw, 480px);
                            height: min(40vw, 480px);
                            background: radial-gradient(circle, rgba(255, 255, 255, 0.78) 0%, rgba(255, 255, 255, 0.06) 68%, transparent 82%);
                        }

                        .pmg-hero-catalog .container-fluid {
                            position: relative;
                            z-index: 1;
                        }

                        .pmg-hero-catalog__shell {
                            max-width: 1440px;
                            margin: 0 auto;
                            padding: clamp(90px, 8vw, 110px) clamp(8px, 2vw, 20px) clamp(44px, 5vw, 64px);
                        }

                        .pmg-hero-catalog__panel {
                            position: relative;
                            border-radius: 34px;
                            border: 1px solid rgba(148, 163, 184, 0.18);
                            background: rgba(255, 255, 255, 0.68);
                            box-shadow:
                                0 24px 70px rgba(15, 23, 42, 0.08),
                                inset 0 1px 0 rgba(255, 255, 255, 0.85);
                            backdrop-filter: blur(14px);
                        }

                        .pmg-hero-catalog__layout {
                            display: grid;
                            grid-template-columns: minmax(0, 1fr);
                            gap: clamp(26px, 4vw, 44px);
                            align-items: center;
                            padding: clamp(28px, 4vw, 40px);
                        }

                        .pmg-hero-catalog__eyebrow {
                            display: inline-flex;
                            align-items: center;
                            margin-bottom: 18px;
                            padding: 8px 13px;
                            border-radius: 999px;
                            border: 1px solid rgba(21, 98, 161, 0.14);
                            background: rgba(255, 255, 255, 0.84);
                            color: var(--pmg-hero-accent);
                            font-size: 12px;
                            font-weight: 700;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                            box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
                        }

                        .pmg-hero-catalog__title {
                            margin: 0;
                            font-size: clamp(3rem, 8vw, 6.2rem);
                            line-height: 0.88;
                            letter-spacing: -0.055em;
                            font-weight: 700;
                            text-transform: uppercase;
                            color: #0f172a;
                        }

                        .pmg-hero-catalog__title-line {
                            display: block;
                        }

                        .pmg-hero-catalog__title-line--accent {
                            color: var(--pmg-hero-accent);
                        }

                        .pmg-hero-catalog__description {
                            margin: 20px 0 0;
                            max-width: 31rem;
                            font-size: clamp(15px, 1.1vw, 18px);
                            line-height: 1.7;
                            color: rgba(15, 23, 42, 0.68);
                        }

                        .pmg-hero-catalog__cta-row {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 12px;
                            margin-top: 26px;
                        }

                        .pmg-hero-catalog__button {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            gap: 12px;
                            min-height: 54px;
                            padding: 14px 22px;
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

                        .pmg-hero-catalog__button i {
                            display: inline-flex;
                            line-height: 0;
                        }

                        .pmg-hero-catalog__button:hover {
                            transform: translateY(-2px);
                        }

                        .pmg-hero-catalog__button--primary {
                            background: linear-gradient(135deg, var(--pmg-hero-accent) 0%, #0f548b 100%);
                            color: #fff;
                            box-shadow: 0 18px 36px rgba(21, 98, 161, 0.22);
                        }

                        .pmg-hero-catalog__button--primary:hover {
                            color: #fff;
                        }

                        .pmg-hero-catalog__button--secondary {
                            background: rgba(255, 255, 255, 0.82);
                            border-color: rgba(15, 23, 42, 0.1);
                            color: #0f172a;
                            box-shadow: 0 14px 28px rgba(15, 23, 42, 0.06);
                        }

                        .pmg-hero-catalog__button--secondary:hover {
                            color: #0f172a;
                            border-color: rgba(21, 98, 161, 0.22);
                        }

                        .pmg-hero-catalog__micro-list {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 10px;
                            margin-top: 24px;
                        }

                        .pmg-hero-catalog__micro-list span {
                            display: inline-flex;
                            align-items: center;
                            min-height: 36px;
                            padding: 8px 14px;
                            border-radius: 999px;
                            background: rgba(15, 23, 42, 0.05);
                            color: rgba(15, 23, 42, 0.72);
                            font-size: 12px;
                            font-weight: 700;
                            letter-spacing: 0.04em;
                            text-transform: uppercase;
                        }

                        .pmg-hero-catalog__visual {
                            position: relative;
                            min-width: 0;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                        }

                        .pmg-hero-catalog__visual-meta {
                            display: flex;
                            flex-direction: column;
                            gap: 5px;
                            margin-bottom: 14px;
                            padding: 14px 16px;
                            width: min(260px, 100%);
                            border-radius: 20px;
                            background: rgba(255, 255, 255, 0.88);
                            border: 1px solid rgba(148, 163, 184, 0.16);
                            box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06);
                            backdrop-filter: blur(10px);
                        }

                        .pmg-hero-catalog__visual-label {
                            font-size: 11px;
                            font-weight: 700;
                            letter-spacing: 0.1em;
                            text-transform: uppercase;
                            color: var(--pmg-hero-accent);
                        }

                        .pmg-hero-catalog__visual-meta strong {
                            font-size: 1.05rem;
                            color: #0f172a;
                            line-height: 1.2;
                        }

                        .pmg-hero-catalog__visual-meta p {
                            margin: 0;
                            font-size: 12px;
                            line-height: 1.5;
                            color: rgba(15, 23, 42, 0.66);
                        }

                        .pmg-hero-catalog__visual-stage {
                            position: relative;
                            width: 100%;
                            max-width: 520px;
                            min-height: clamp(280px, 34vw, 420px);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            will-change: transform;
                        }

                        .pmg-hero-catalog__visual-orbit {
                            position: relative;
                            position: absolute;
                            inset: 8% 10%;
                            border-radius: 50%;
                            border: 1px solid rgba(21, 98, 161, 0.14);
                            background: radial-gradient(circle, rgba(21, 98, 161, 0.08) 0%, transparent 70%);
                        }

                        .pmg-hero-catalog__visual-card {
                            position: absolute;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: min(100%, 380px);
                            aspect-ratio: 1 / 1;
                            padding: 20px;
                            border-radius: 36px;
                            background: linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(242, 246, 251, 0.98) 100%);
                            box-shadow:
                                0 28px 70px rgba(15, 23, 42, 0.1),
                                inset 0 1px 0 rgba(255, 255, 255, 0.9);
                            border: 1px solid rgba(148, 163, 184, 0.18);
                        }

                        .pmg-hero-catalog__visual-badge {
                            position: absolute;
                            top: 18px;
                            left: 18px;
                            display: inline-flex;
                            align-items: center;
                            min-height: 32px;
                            padding: 6px 12px;
                            border-radius: 999px;
                            background: rgba(15, 23, 42, 0.06);
                            color: rgba(15, 23, 42, 0.7);
                            font-size: 11px;
                            font-weight: 700;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                        }

                        .pmg-hero-catalog__product-image {
                            position: relative;
                            z-index: 1;
                            width: min(100%, 300px);
                            height: auto;
                            object-fit: contain;
                            filter: drop-shadow(0 24px 48px rgba(15, 23, 42, 0.18));
                            will-change: transform;
                        }

                        .pmg-hero-catalog__rail {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 10px;
                            justify-content: center;
                            margin-top: 18px;
                        }

                        .pmg-hero-catalog__rail-item {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            min-height: 44px;
                            padding: 10px 16px;
                            border: 1px solid rgba(148, 163, 184, 0.18);
                            border-radius: 999px;
                            background: rgba(255, 255, 255, 0.78);
                            color: rgba(15, 23, 42, 0.68);
                            text-align: center;
                            box-shadow: 0 12px 26px rgba(15, 23, 42, 0.05);
                            transition:
                                transform 0.2s ease,
                                border-color 0.2s ease,
                                background-color 0.2s ease,
                                box-shadow 0.2s ease,
                                color 0.2s ease;
                        }

                        .pmg-hero-catalog__rail-item:hover {
                            transform: translateY(-2px);
                            color: #0f172a;
                            border-color: rgba(21, 98, 161, 0.22);
                            background: rgba(255, 255, 255, 0.92);
                        }

                        .pmg-hero-catalog__rail-item--active {
                            color: #0f172a;
                            background: linear-gradient(180deg, rgba(21, 98, 161, 0.14) 0%, rgba(255, 255, 255, 0.98) 100%);
                            border-color: rgba(21, 98, 161, 0.22);
                            box-shadow: 0 16px 34px rgba(15, 23, 42, 0.08);
                        }

                        .pmg-hero-catalog__rail-item-title {
                            font-size: 13px;
                            font-weight: 700;
                            line-height: 1.3;
                            letter-spacing: 0.03em;
                            text-transform: uppercase;
                        }

                        .pmg-hero-catalog__ruler {
                            position: absolute;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            height: 34px;
                            border-top: 1px solid rgba(15, 23, 42, 0.08);
                            background: linear-gradient(180deg, rgba(255, 255, 255, 0.88) 0%, rgba(244, 247, 251, 0.96) 100%);
                        }

                        .pmg-hero-catalog__ruler::before {
                            content: "";
                            position: absolute;
                            inset: 0;
                            background:
                                repeating-linear-gradient(
                                    90deg,
                                    rgba(15, 23, 42, 0.32) 0 1px,
                                    transparent 1px 10px
                                ),
                                repeating-linear-gradient(
                                    90deg,
                                    rgba(15, 23, 42, 0.18) 0 1px,
                                    transparent 1px 50px
                                );
                            mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0 70%, transparent 70% 100%);
                        }

                        @media (min-width: 980px) {
                            .pmg-hero-catalog__layout {
                                grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
                            }
                        }

                        @media (max-width: 991px) {
                            .pmg-hero-catalog__visual-stage {
                                max-width: 100%;
                            }
                        }

                        @media (max-width: 767px) {
                            .pmg-hero-catalog__shell {
                                padding-top: 96px;
                                padding-bottom: 54px;
                            }

                            .pmg-hero-catalog__title {
                                font-size: clamp(2.7rem, 14vw, 4.3rem);
                            }

                            .pmg-hero-catalog__layout {
                                padding: 24px 18px;
                            }

                            .pmg-hero-catalog__visual-stage {
                                min-height: 260px;
                            }
                        }

                        @media (max-width: 575px) {
                            .pmg-hero-catalog__button {
                                width: 100%;
                            }

                            .pmg-hero-catalog__visual-meta {
                                width: 100%;
                            }

                            .pmg-hero-catalog__micro-list {
                                gap: 8px;
                            }

                            .pmg-hero-catalog__product-image {
                                width: min(100%, 240px);
                            }
                        }
                    `,
                }}
            />
        </section>
    );
}
