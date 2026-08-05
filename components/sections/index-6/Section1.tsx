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
        imageSrc: "/assets/imgs/pmgproducts/SPIRIT%20LEVEL/30cm/1.png",
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
                    ".pmg-hero-catalog__intro-copy > *, .pmg-hero-catalog__rail, .pmg-hero-catalog__visual-note"
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
                            rotateY: offsetX * 5,
                            rotateX: offsetY * -5,
                            x: offsetX * 8,
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
                    <div className="pmg-hero-catalog__layout">
                        <div className="pmg-hero-catalog__intro">
                            <div className="pmg-hero-catalog__scale" aria-hidden="true">
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>

                            <div className="pmg-hero-catalog__intro-copy">
                                <span className="pmg-hero-catalog__eyebrow">PMG precision measuring tools</span>

                                <h1 className="pmg-hero-catalog__title">
                                    <span className="pmg-hero-catalog__title-line">
                                        <RevealText>New Vision</RevealText>
                                    </span>
                                    <span className="pmg-hero-catalog__title-line pmg-hero-catalog__title-line--accent">
                                        <RevealText>New Inches</RevealText>
                                    </span>
                                </h1>

                                <p className="pmg-hero-catalog__description">
                                    A cleaner, sharper PMG showcase for measuring tapes, fiberglass tapes,
                                    and spirit levels.
                                </p>

                                <div className="pmg-hero-catalog__cta-row">
                                    <Link className="pmg-hero-catalog__button pmg-hero-catalog__button--primary" href="/products">
                                        <span>Explore products</span>
                                        <i>{ARROW_DIAGONAL_SVG}</i>
                                    </Link>
                                    <Link className="pmg-hero-catalog__button pmg-hero-catalog__button--secondary" href="/contact-1">
                                        <span>Request a quote</span>
                                        <i>{ARROW_DIAGONAL_SVG}</i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="pmg-hero-catalog__visual">
                            <div className="pmg-hero-catalog__visual-note">
                                <span className="pmg-hero-catalog__visual-label">Category focus</span>
                                <strong>{activeFeaturedProduct.categoryLabel}</strong>
                                <span>{activeFeaturedProduct.caption}</span>
                            </div>

                            <div
                                className="pmg-hero-catalog__visual-stage"
                                role="tabpanel"
                                id={`pmg-featured-panel-${activeCategoryId}`}
                                aria-labelledby={`pmg-featured-tab-${activeCategoryId}`}
                            >
                                <div className="pmg-hero-catalog__visual-ring">
                                    <div className="pmg-hero-catalog__visual-ring-inner">
                                        <div className="pmg-hero-catalog__visual-halo" />
                                        <div className="pmg-hero-catalog__visual-grid" />
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
                            </div>
                        </div>
                    </div>

                    <div className="pmg-hero-catalog__rail" role="tablist" aria-label="Featured PMG product categories">
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
                                    <span className="pmg-hero-catalog__rail-item-copy">{product.caption}</span>
                                </button>
                            );
                        })}
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
                            min-height: 100vh;
                            min-height: 100dvh;
                            overflow: hidden;
                            color: #121826;
                            background:
                                radial-gradient(circle at 0% 0%, rgba(96, 165, 250, 0.16), transparent 24%),
                                linear-gradient(180deg, #fdf9f4 0%, #f3f5f8 100%);
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
                                linear-gradient(rgba(18, 24, 38, 0.045) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(18, 24, 38, 0.045) 1px, transparent 1px);
                            background-size: 40px 40px;
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
                            width: min(28vw, 340px);
                            height: min(28vw, 340px);
                            background: rgba(21, 98, 161, 0.12);
                            filter: blur(16px);
                        }
                        .pmg-hero-catalog__glow--right {
                            right: 4%;
                            top: 8%;
                            width: min(34vw, 440px);
                            height: min(34vw, 440px);
                            background: rgba(96, 165, 250, 0.2);
                            filter: blur(14px);
                        }
                        .pmg-hero-catalog__wash {
                            inset: auto -10% 12% auto;
                            width: min(44vw, 560px);
                            height: min(44vw, 560px);
                            background: radial-gradient(circle, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.14) 62%, transparent 82%);
                        }

                        .pmg-hero-catalog .container-fluid {
                            position: relative;
                            z-index: 1;
                        }
                        .pmg-hero-catalog__shell {
                            max-width: 1440px;
                            margin: 0 auto;
                            padding: clamp(96px, 9vw, 120px) clamp(8px, 2vw, 20px) clamp(78px, 7vw, 108px);
                        }
                        .pmg-hero-catalog__layout {
                            display: grid;
                            grid-template-columns: minmax(0, 1fr);
                            gap: clamp(24px, 3.6vw, 48px);
                            align-items: center;
                            padding-top: 22px;
                        }

                        .pmg-hero-catalog__intro {
                            display: grid;
                            grid-template-columns: auto minmax(0, 1fr);
                            gap: 18px;
                            align-items: start;
                            min-width: 0;
                        }
                        .pmg-hero-catalog__scale {
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            width: 18px;
                            min-height: 210px;
                            padding: 10px 0;
                            position: relative;
                        }
                        .pmg-hero-catalog__scale::before {
                            content: "";
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            left: 8px;
                            width: 1px;
                            background: rgba(17, 24, 39, 0.22);
                        }
                        .pmg-hero-catalog__scale span {
                            position: relative;
                            width: 100%;
                            height: 1px;
                            background: rgba(17, 24, 39, 0.3);
                        }
                        .pmg-hero-catalog__scale span:nth-child(odd) {
                            width: 12px;
                        }
                        .pmg-hero-catalog__intro-copy {
                            max-width: 500px;
                        }
                        .pmg-hero-catalog__eyebrow {
                            display: inline-flex;
                            align-items: center;
                            margin-bottom: 18px;
                            padding: 8px 14px;
                            border-radius: 999px;
                            border: 1px solid rgba(21, 98, 161, 0.14);
                            background: rgba(255, 255, 255, 0.76);
                            color: #1562A1;
                            font-size: 12px;
                            font-weight: 700;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                            box-shadow: 0 10px 24px rgba(18, 24, 38, 0.05);
                        }
                        .pmg-hero-catalog__title {
                            margin: 0;
                            font-size: clamp(2.9rem, 7vw, 5.4rem);
                            line-height: 0.94;
                            letter-spacing: -0.05em;
                            font-weight: 700;
                            text-transform: uppercase;
                            color: #111827;
                        }
                        .pmg-hero-catalog__title-line {
                            display: block;
                        }
                        .pmg-hero-catalog__title-line--accent {
                            color: var(--pmg-hero-accent);
                        }
                        .pmg-hero-catalog__description {
                            margin: 22px 0 0;
                            max-width: 31rem;
                            font-size: clamp(16px, 1.2vw, 17px);
                            line-height: 1.7;
                            color: rgba(17, 24, 39, 0.72);
                        }
                        .pmg-hero-catalog__cta-row {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 12px;
                            margin-top: 28px;
                        }
                        .pmg-hero-catalog__button {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            gap: 12px;
                            min-height: 52px;
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
                            background: var(--pmg-hero-accent);
                            color: #fff;
                            box-shadow: 0 18px 36px rgba(21, 98, 161, 0.22);
                        }
                        .pmg-hero-catalog__button--primary:hover {
                            color: #fff;
                            background: #0F548B;
                        }
                        .pmg-hero-catalog__button--secondary {
                            background: rgba(255, 255, 255, 0.8);
                            border-color: rgba(17, 24, 39, 0.1);
                            color: #111827;
                            box-shadow: 0 14px 28px rgba(18, 24, 38, 0.06);
                        }
                        .pmg-hero-catalog__button--secondary:hover {
                            color: #111827;
                            border-color: rgba(21, 98, 161, 0.22);
                        }

                        .pmg-hero-catalog__visual {
                            position: relative;
                            min-width: 0;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            padding-top: 28px;
                        }
                        .pmg-hero-catalog__visual-note {
                            display: flex;
                            flex-direction: column;
                            gap: 6px;
                            margin-bottom: 12px;
                            padding: 12px 14px;
                            width: min(280px, 100%);
                            border-radius: 20px;
                            border: 1px solid rgba(17, 24, 39, 0.08);
                            background: rgba(255, 255, 255, 0.82);
                            box-shadow: 0 18px 40px rgba(18, 24, 38, 0.08);
                            backdrop-filter: blur(10px);
                            text-align: center;
                        }
                        .pmg-hero-catalog__visual-label {
                            font-size: 11px;
                            font-weight: 700;
                            letter-spacing: 0.1em;
                            text-transform: uppercase;
                            color: var(--pmg-hero-accent);
                        }
                        .pmg-hero-catalog__visual-note strong {
                            font-size: 1.05rem;
                            color: #111827;
                            line-height: 1.2;
                        }
                        .pmg-hero-catalog__visual-note span:last-child {
                            font-size: 12px;
                            line-height: 1.45;
                            color: rgba(17, 24, 39, 0.66);
                        }
                        .pmg-hero-catalog__visual-stage {
                            position: relative;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            min-height: clamp(300px, 30vw, 420px);
                            width: 100%;
                        }
                        .pmg-hero-catalog__visual-ring {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: min(100%, 430px);
                            aspect-ratio: 1 / 1;
                            padding: 14px;
                            border-radius: 50%;
                            background: linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(247, 249, 252, 0.98) 100%);
                            box-shadow:
                                0 26px 60px rgba(18, 24, 38, 0.08),
                                0 0 0 1px rgba(17, 24, 39, 0.06);
                        }
                        .pmg-hero-catalog__visual-ring-inner {
                            position: relative;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                            overflow: hidden;
                            background:
                                radial-gradient(circle at center, rgba(255, 255, 255, 0.96) 0%, rgba(238, 242, 247, 0.98) 100%);
                        }
                        .pmg-hero-catalog__visual-grid {
                            position: absolute;
                            inset: 0;
                            background-image:
                                linear-gradient(rgba(17, 24, 39, 0.05) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(17, 24, 39, 0.05) 1px, transparent 1px);
                            background-size: 28px 28px;
                            mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 0.98) 34%, transparent 78%);
                        }
                        .pmg-hero-catalog__visual-halo {
                            position: absolute;
                            inset: 18%;
                            border-radius: 50%;
                            background: radial-gradient(circle, rgba(21, 98, 161, 0.22) 0%, rgba(96, 165, 250, 0.08) 42%, transparent 74%);
                            filter: blur(8px);
                        }
                        .pmg-hero-catalog__product-image {
                            position: relative;
                            z-index: 1;
                            width: min(100%, 320px);
                            height: auto;
                            object-fit: contain;
                            filter: drop-shadow(0 26px 50px rgba(17, 24, 39, 0.2));
                            will-change: transform;
                        }

                        .pmg-hero-catalog__rail {
                            display: grid;
                            grid-template-columns: repeat(3, minmax(0, 1fr));
                            gap: 0;
                            margin-top: clamp(28px, 4vw, 40px);
                            border-radius: 28px;
                            overflow: hidden;
                            border: 1px solid rgba(17, 24, 39, 0.12);
                            background: rgba(255, 255, 255, 0.88);
                            box-shadow: 0 18px 40px rgba(18, 24, 38, 0.08);
                            backdrop-filter: blur(10px);
                        }
                        .pmg-hero-catalog__rail-item {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            justify-content: center;
                            gap: 6px;
                            min-height: 112px;
                            padding: 20px 22px;
                            border: 0;
                            background: transparent;
                            color: rgba(17, 24, 39, 0.66);
                            text-align: left;
                            transition:
                                background-color 0.2s ease,
                                color 0.2s ease,
                                box-shadow 0.2s ease;
                        }
                        .pmg-hero-catalog__rail-item + .pmg-hero-catalog__rail-item {
                            border-left: 1px solid rgba(17, 24, 39, 0.08);
                        }
                        .pmg-hero-catalog__rail-item:hover {
                            color: #111827;
                            background: rgba(21, 98, 161, 0.06);
                        }
                        .pmg-hero-catalog__rail-item--active {
                            background: linear-gradient(180deg, rgba(21, 98, 161, 0.12) 0%, rgba(255, 255, 255, 0.98) 100%);
                            color: #111827;
                            box-shadow: inset 0 3px 0 var(--pmg-hero-accent);
                        }
                        .pmg-hero-catalog__rail-item-title {
                            font-size: 15px;
                            font-weight: 700;
                            line-height: 1.3;
                        }
                        .pmg-hero-catalog__rail-item-copy {
                            font-size: 12px;
                            line-height: 1.55;
                            opacity: 0.85;
                        }

                        .pmg-hero-catalog__ruler {
                            position: absolute;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            height: 34px;
                            border-top: 1px solid rgba(17, 24, 39, 0.08);
                            background:
                                linear-gradient(180deg, rgba(255, 255, 255, 0.88) 0%, rgba(245, 247, 250, 0.96) 100%);
                        }
                        .pmg-hero-catalog__ruler::before {
                            content: "";
                            position: absolute;
                            inset: 0;
                            background:
                                repeating-linear-gradient(
                                    90deg,
                                    rgba(17, 24, 39, 0.34) 0 1px,
                                    transparent 1px 10px
                                ),
                                repeating-linear-gradient(
                                    90deg,
                                    rgba(17, 24, 39, 0.2) 0 1px,
                                    transparent 1px 50px
                                );
                            mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0 70%, transparent 70% 100%);
                        }

                        @media (min-width: 860px) {
                            .pmg-hero-catalog__layout {
                                grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
                            }
                        }

                        @media (max-width: 991px) {
                            .pmg-hero-catalog__visual {
                                padding-top: 0;
                            }
                            .pmg-hero-catalog__visual-note {
                                width: 100%;
                                max-width: 360px;
                            }
                            .pmg-hero-catalog__rail {
                                grid-template-columns: 1fr;
                            }
                            .pmg-hero-catalog__rail-item + .pmg-hero-catalog__rail-item {
                                border-left: 0;
                                border-top: 1px solid rgba(255, 255, 255, 0.08);
                            }
                        }

                        @media (max-width: 767px) {
                            .pmg-hero-catalog__shell {
                                padding-top: 96px;
                                padding-bottom: 90px;
                            }
                            .pmg-hero-catalog__layout {
                                padding-top: 0;
                            }
                            .pmg-hero-catalog__intro {
                                grid-template-columns: 1fr;
                                gap: 14px;
                            }
                            .pmg-hero-catalog__scale {
                                display: none;
                            }
                            .pmg-hero-catalog__title {
                                font-size: clamp(2.6rem, 14vw, 4.2rem);
                            }
                            .pmg-hero-catalog__visual-stage {
                                min-height: 300px;
                            }
                            .pmg-hero-catalog__rail-item {
                                min-height: 92px;
                            }
                        }
                    `,
                }}
            />
        </section>
    );
}
