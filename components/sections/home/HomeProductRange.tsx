"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RevealText from "@/components/effects/RevealText";
import { getProductDetailsBySeries } from "@/data/products";
import { productHref, type ProductSeries } from "@/data/products/series";
import { getCategoryForSeries, PRODUCT_CATEGORIES } from "@/lib/productCategories";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const PMG_PRODUCTS_BASE = "/assets/imgs/pmgproducts";

const productSrc = (series: string, file: string) =>
    `${PMG_PRODUCTS_BASE}/${encodeURIComponent(series)}/${file}`;

const INITIAL_VISIBLE = 4;

const PRODUCT_SERIES: { series: ProductSeries; img: string }[] = [
    { series: "MASTER SERIES", img: productSrc("MASTER SERIES", "IMG_8282.png") },
    { series: "SIGNATURE SERIES", img: productSrc("SIGNATURE SERIES", "IMG_8162.png") },
    { series: "SIDE LOCK SERIES", img: productSrc("SIDE LOCK SERIES", "IMG_8269.png") },
    { series: "LOCK SERIES", img: productSrc("LOCK SERIES", "IMG_8051.png") },
    { series: "GLASS SERIES", img: productSrc("GLASS SERIES", "IMG_8075.png") },
    { series: "GRIP SERIES", img: productSrc("GRIP SERIES", "IMG_8010.png") },
    { series: "ECO SERIES", img: productSrc("ECO SERIES", "IMG_8242.png") },
    { series: "NEW ECO SERIES", img: productSrc("NEW ECO SERIES", "IMG_8280.png") },
];

const HIGHLIGHTS = [
    { value: "20+", label: "Product series" },
    { value: "4", label: "Core categories" },
    { value: "25+", label: "Years of expertise" },
];

function ProductCard({
    series,
    img,
}: {
    series: ProductSeries;
    img: string;
}) {
    const category = getCategoryForSeries(series);
    const details = getProductDetailsBySeries(series);

    return (
        <Link href={productHref(series)} className="home-product-range__card">
            <div className="home-product-range__card-media">
                <Image
                    src={img}
                    alt={series}
                    fill
                    sizes="(max-width: 576px) 50vw, 260px"
                    className="home-product-range__card-img"
                />
                <span className="home-product-range__card-arrow" aria-hidden="true">
                    {ARROW_SVG}
                </span>
            </div>
            <div className="home-product-range__card-body">
                {category && <span className="home-product-range__card-tag">{category.shortLabel}</span>}
                <h3 className="home-product-range__card-title">{series}</h3>
                <p className="home-product-range__card-excerpt">{details.excerpt}</p>
            </div>
        </Link>
    );
}

export default function HomeProductRange() {
    const [expanded, setExpanded] = useState(false);
    const visibleProducts = expanded ? PRODUCT_SERIES : PRODUCT_SERIES.slice(0, INITIAL_VISIBLE);
    const hasMore = PRODUCT_SERIES.length > INITIAL_VISIBLE;

    return (
        <section className="home-product-range changeless" aria-label="PMG product range">
            <div className="home-product-range__shell">
                <div className="home-product-range__box">
                    <div className="home-product-range__glow" aria-hidden="true" />

                    <header className="home-product-range__header">
                        <div className="home-product-range__intro">
                            <span className="home-product-range__eyebrow">
                                <span className="home-product-range__eyebrow-dot" aria-hidden="true" />
                                Product range
                            </span>
                            <h2 className="home-product-range__title reveal-text">
                                <RevealText>
                                    Engineered for{" "}
                                    <span className="home-product-range__title-accent">every trade</span>
                                </RevealText>
                            </h2>
                            <p className="home-product-range__lead">
                                From heavy-duty professional tapes to specialty blades and spirit levels —
                                precision tools built for contractors, distributors, and tradespeople worldwide.
                            </p>
                        </div>

                        <div className="home-product-range__meta">
                            <ul className="home-product-range__stats">
                                {HIGHLIGHTS.map((item) => (
                                    <li key={item.label} className="home-product-range__stat">
                                        <span className="home-product-range__stat-value">{item.value}</span>
                                        <span className="home-product-range__stat-label">{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="home-product-range__pills">
                                {PRODUCT_CATEGORIES.map((category) => (
                                    <Link
                                        key={category.id}
                                        href={`/products#${category.id}`}
                                        className="home-product-range__pill"
                                    >
                                        {category.shortLabel}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </header>

                    <div className="home-product-range__grid">
                        {visibleProducts.map((item) => (
                            <ProductCard key={item.series} series={item.series} img={item.img} />
                        ))}
                    </div>

                    {hasMore && (
                        <div className="home-product-range__actions">
                            {!expanded ? (
                                <button
                                    type="button"
                                    className="at-btn home-product-range__btn"
                                    onClick={() => setExpanded(true)}
                                >
                                    <span>
                                        <span className="text-1 text-capitalize">Show more series</span>
                                        <span className="text-2 text-capitalize">Show more series</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </button>
                            ) : (
                                <Link href="/products" className="at-btn home-product-range__btn">
                                    <span>
                                        <span className="text-1 text-capitalize">View full catalogue</span>
                                        <span className="text-2 text-capitalize">View full catalogue</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .home-product-range {
                            position: relative;
                            padding: clamp(72px, 9vw, 110px) 0;
                            background:
                                radial-gradient(ellipse 80% 60% at 50% 0%, rgba(240, 70, 14, 0.07) 0%, transparent 70%),
                                var(--at-neutral-50, #f7f7f7);
                        }

                        .home-product-range__shell {
                            max-width: 1100px;
                            margin: 0 auto;
                            padding: 0 18px;
                        }

                        .home-product-range__box {
                            position: relative;
                            padding: clamp(28px, 4.5vw, 52px);
                            background: #fff;
                            border: 1px solid rgba(0, 0, 0, 0.08);
                            border-radius: 20px;
                            box-shadow:
                                0 1px 0 rgba(255, 255, 255, 0.9) inset,
                                0 24px 64px rgba(15, 15, 15, 0.07);
                            overflow: hidden;
                        }

                        .home-product-range__box::before {
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            height: 3px;
                            background: linear-gradient(
                                90deg,
                                var(--at-theme-primary, #f0460e) 0%,
                                #ff8c42 55%,
                                rgba(240, 70, 14, 0.2) 100%
                            );
                        }

                        .home-product-range__glow {
                            position: absolute;
                            top: -120px;
                            right: -80px;
                            width: 280px;
                            height: 280px;
                            border-radius: 50%;
                            background: radial-gradient(circle, rgba(240, 70, 14, 0.12) 0%, transparent 70%);
                            pointer-events: none;
                        }

                        .home-product-range__header {
                            display: grid;
                            grid-template-columns: 1fr;
                            gap: clamp(24px, 4vw, 40px);
                            margin-bottom: clamp(28px, 4vw, 40px);
                        }

                        @media (min-width: 768px) {
                            .home-product-range__header {
                                grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
                                align-items: end;
                            }
                        }

                        .home-product-range__eyebrow {
                            display: inline-flex;
                            align-items: center;
                            gap: 10px;
                            margin-bottom: 16px;
                            font-size: 0.72rem;
                            font-weight: 600;
                            letter-spacing: 0.14em;
                            text-transform: uppercase;
                            color: rgba(0, 0, 0, 0.5);
                        }

                        .home-product-range__eyebrow-dot {
                            width: 8px;
                            height: 8px;
                            border-radius: 50%;
                            background: var(--at-theme-primary, #f0460e);
                            box-shadow: 0 0 0 4px rgba(240, 70, 14, 0.15);
                        }

                        .home-product-range__title {
                            margin: 0 0 14px;
                            font-size: clamp(2rem, 5vw, 3.25rem);
                            font-weight: 600;
                            line-height: 1.05;
                            letter-spacing: -0.03em;
                            color: #111;
                        }

                        .home-product-range__title-accent {
                            color: var(--at-theme-primary, #f0460e);
                        }

                        .home-product-range__lead {
                            max-width: 36rem;
                            margin: 0;
                            font-size: clamp(0.95rem, 1.4vw, 1.05rem);
                            line-height: 1.65;
                            color: rgba(0, 0, 0, 0.62);
                        }

                        .home-product-range__meta {
                            display: flex;
                            flex-direction: column;
                            gap: 18px;
                        }

                        .home-product-range__stats {
                            display: grid;
                            grid-template-columns: repeat(3, minmax(0, 1fr));
                            gap: 10px;
                            margin: 0;
                            padding: 0;
                            list-style: none;
                        }

                        .home-product-range__stat {
                            padding: 14px 12px;
                            text-align: center;
                            background: linear-gradient(180deg, #fafafa 0%, #f3f3f3 100%);
                            border: 1px solid rgba(0, 0, 0, 0.06);
                            border-radius: 12px;
                        }

                        .home-product-range__stat-value {
                            display: block;
                            font-size: 1.35rem;
                            font-weight: 700;
                            line-height: 1.1;
                            letter-spacing: -0.02em;
                            color: #111;
                        }

                        .home-product-range__stat-label {
                            display: block;
                            margin-top: 4px;
                            font-size: 0.68rem;
                            font-weight: 500;
                            letter-spacing: 0.04em;
                            text-transform: uppercase;
                            color: rgba(0, 0, 0, 0.48);
                        }

                        .home-product-range__pills {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 8px;
                        }

                        .home-product-range__pill {
                            padding: 8px 14px;
                            font-size: 0.7rem;
                            font-weight: 600;
                            letter-spacing: 0.06em;
                            text-transform: uppercase;
                            text-decoration: none;
                            color: rgba(0, 0, 0, 0.62);
                            background: #fff;
                            border: 1px solid rgba(0, 0, 0, 0.1);
                            border-radius: 999px;
                            transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
                        }

                        .home-product-range__pill:hover {
                            color: var(--at-theme-primary, #f0460e);
                            border-color: rgba(240, 70, 14, 0.35);
                            background: rgba(240, 70, 14, 0.06);
                            transform: translateY(-1px);
                        }

                        .home-product-range__grid {
                            display: grid;
                            grid-template-columns: repeat(2, minmax(0, 1fr));
                            gap: 14px;
                        }

                        @media (min-width: 768px) {
                            .home-product-range__grid {
                                grid-template-columns: repeat(4, minmax(0, 1fr));
                                gap: 16px;
                            }
                        }

                        .home-product-range__card {
                            display: flex;
                            flex-direction: column;
                            height: 100%;
                            color: inherit;
                            text-decoration: none;
                            background: #fff;
                            border: 1px solid rgba(0, 0, 0, 0.08);
                            border-radius: 14px;
                            overflow: hidden;
                            transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
                        }

                        .home-product-range__card:hover {
                            transform: translateY(-4px);
                            border-color: rgba(240, 70, 14, 0.22);
                            box-shadow: 0 18px 40px rgba(15, 15, 15, 0.1);
                        }

                        .home-product-range__card-media {
                            position: relative;
                            aspect-ratio: 1 / 1;
                            background: linear-gradient(160deg, #f8f8f8 0%, #ececec 100%);
                        }

                        .home-product-range__card-img {
                            object-fit: contain;
                            padding: 16px;
                            transition: transform 0.35s ease;
                        }

                        .home-product-range__card:hover .home-product-range__card-img {
                            transform: scale(1.04);
                        }

                        .home-product-range__card-arrow {
                            position: absolute;
                            top: 12px;
                            right: 12px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 34px;
                            height: 34px;
                            color: #111;
                            background: #fff;
                            border: 1px solid rgba(0, 0, 0, 0.08);
                            border-radius: 50%;
                            opacity: 0;
                            transform: translateY(6px);
                            transition: opacity 0.2s ease, transform 0.2s ease, background 0.2s ease, color 0.2s ease;
                        }

                        .home-product-range__card:hover .home-product-range__card-arrow {
                            opacity: 1;
                            transform: translateY(0);
                            background: var(--at-theme-primary, #f0460e);
                            color: #fff;
                            border-color: transparent;
                        }

                        .home-product-range__card-body {
                            display: flex;
                            flex-direction: column;
                            flex: 1;
                            gap: 6px;
                            padding: 14px 14px 16px;
                        }

                        .home-product-range__card-tag {
                            align-self: flex-start;
                            padding: 3px 9px;
                            font-size: 0.62rem;
                            font-weight: 600;
                            letter-spacing: 0.06em;
                            text-transform: uppercase;
                            color: rgba(0, 0, 0, 0.52);
                            background: #f4f4f4;
                            border-radius: 999px;
                        }

                        .home-product-range__card-title {
                            margin: 0;
                            font-size: 0.82rem;
                            font-weight: 600;
                            line-height: 1.35;
                            color: #111;
                        }

                        .home-product-range__card-excerpt {
                            display: -webkit-box;
                            margin: 0;
                            font-size: 0.76rem;
                            line-height: 1.5;
                            color: rgba(0, 0, 0, 0.52);
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                        }

                        .home-product-range__actions {
                            display: flex;
                            justify-content: center;
                            margin-top: clamp(28px, 4vw, 36px);
                            padding-top: clamp(24px, 3vw, 32px);
                            border-top: 1px solid rgba(0, 0, 0, 0.06);
                        }

                        .home-product-range__btn {
                            min-width: 200px;
                        }
                    `,
                }}
            />
        </section>
    );
}
