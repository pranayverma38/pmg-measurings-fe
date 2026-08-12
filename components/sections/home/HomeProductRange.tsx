"use client";

import { useMemo, useState } from "react";
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

const VISIBLE_PRODUCTS = 6;

type ProductCardItem = {
    series: ProductSeries;
    img: string;
};

type ProductFilter = "all" | (typeof PRODUCT_CATEGORIES)[number]["id"];

function formatCount(value: number, singular: string, plural = `${singular}s`) {
    return `${value} ${value === 1 ? singular : plural}`;
}

function ProductCard({
    series,
    img,
    featured = false,
}: {
    series: ProductSeries;
    img: string;
    featured?: boolean;
}) {
    const category = getCategoryForSeries(series);
    const details = getProductDetailsBySeries(series);

    return (
        <Link href={productHref(series)} className={`home-product-range__card${featured ? " is-featured" : ""}`}>
            <div className="home-product-range__card-media">
                <Image
                    src={img}
                    alt={series}
                    fill
                    sizes={
                        featured
                            ? "(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 540px"
                            : "(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 320px"
                    }
                    className="home-product-range__card-img"
                />
                <div className="home-product-range__card-gradient" aria-hidden="true" />
                <span className="home-product-range__card-arrow" aria-hidden="true">
                    {ARROW_SVG}
                </span>
            </div>
            <div className="home-product-range__card-body">
                <div className="home-product-range__card-meta">
                    {category && <span className="home-product-range__card-tag">{category.shortLabel}</span>}
                    <span className="home-product-range__card-index">Featured series</span>
                </div>
                <h3 className="home-product-range__card-title">{series}</h3>
                <p className="home-product-range__card-excerpt">{details.excerpt}</p>
                <span className="home-product-range__card-link">
                    Explore series
                    <i>{ARROW_SVG}</i>
                </span>
            </div>
        </Link>
    );
}

export default function HomeProductRange({ products }: { products: ProductCardItem[] }) {
    const [activeCategory, setActiveCategory] = useState<ProductFilter>("all");

    const filteredProducts = useMemo(() => {
        if (activeCategory === "all") {
            return products;
        }

        return products.filter((item) => getCategoryForSeries(item.series)?.id === activeCategory);
    }, [activeCategory, products]);

    const visibleProducts = filteredProducts.slice(0, VISIBLE_PRODUCTS);
    const activeCategoryMeta =
        activeCategory === "all"
            ? null
            : PRODUCT_CATEGORIES.find((category) => category.id === activeCategory);

    const overviewItems = [
        { value: String(products.length), label: "Series in catalogue" },
        { value: String(PRODUCT_CATEGORIES.length), label: "Core tool categories" },
        { value: "Professional", label: "Built for industrial use" },
    ];

    return (
        <section className="home-product-range changeless" aria-label="PMG product range">
            <div className="home-product-range__shell">
                <div className="home-product-range__hero">
                    <div className="home-product-range__hero-copy">
                        <h2 className="home-product-range__title reveal-text">
                            <RevealText>
                                Precision tools with a{" "}
                                <span className="home-product-range__title-accent">premium product story</span>
                            </RevealText>
                        </h2>
                        <p className="home-product-range__lead">
                            Explore PMG&apos;s measuring tapes, fibreglass tapes, and spirit levels through a cleaner,
                            more curated catalogue built for contractors, distributors, and industrial buyers.
                        </p>

                        <div className="home-product-range__hero-actions">
                            <Link href="/products" className="at-btn home-product-range__primary-btn">
                                <span>
                                    <span className="text-1 text-capitalize">View full catalogue</span>
                                    <span className="text-2 text-capitalize">View full catalogue</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </Link>
                            <Link href="/products#measuring-tapes" className="home-product-range__secondary-btn">
                                Browse categories
                            </Link>
                        </div>

                        <ul className="home-product-range__overview">
                            {overviewItems.map((item) => (
                                <li key={item.label} className="home-product-range__overview-card">
                                    <span className="home-product-range__overview-value">{item.value}</span>
                                    <span className="home-product-range__overview-label">{item.label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="home-product-range__hero-panel">
                        <div className="home-product-range__hero-panel-inner">
                            <div className="home-product-range__hero-panel-top">
                                <span className="home-product-range__panel-label">Curated collections</span>
                                <p className="home-product-range__panel-copy">
                                    Select a category to surface the most relevant PMG series in a more focused way.
                                </p>
                            </div>

                            <div className="home-product-range__category-list" role="tablist" aria-label="Product categories">
                                <button
                                    type="button"
                                    className={`home-product-range__category-tab${
                                        activeCategory === "all" ? " is-active" : ""
                                    }`}
                                    onClick={() => setActiveCategory("all")}
                                >
                                    <span className="home-product-range__category-tab-title">All products</span>
                                    <span className="home-product-range__category-tab-meta">
                                        {formatCount(products.length, "series")}
                                    </span>
                                </button>

                                {PRODUCT_CATEGORIES.map((category) => (
                                    <button
                                        key={category.id}
                                        type="button"
                                        className={`home-product-range__category-tab${
                                            activeCategory === category.id ? " is-active" : ""
                                        }`}
                                        onClick={() => setActiveCategory(category.id)}
                                    >
                                        <span className="home-product-range__category-tab-title">{category.label}</span>
                                        <span className="home-product-range__category-tab-meta">
                                            {formatCount(category.series.length, "series")}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            <div className="home-product-range__panel-footer">
                                <p className="home-product-range__panel-description">
                                    {activeCategoryMeta
                                        ? activeCategoryMeta.description
                                        : "A complete cross-section of PMG's product line, from compact trade tapes to long-distance measurement tools and levels."}
                                </p>
                                <Link
                                    href={activeCategoryMeta ? `/products#${activeCategoryMeta.id}` : "/products"}
                                    className="home-product-range__panel-link"
                                >
                                    {activeCategoryMeta ? `Browse ${activeCategoryMeta.shortLabel}` : "Browse all products"}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-product-range__catalogue">
                    <div className="home-product-range__catalogue-head">
                        <div>
                            <span className="home-product-range__catalogue-label">
                                {activeCategoryMeta ? activeCategoryMeta.shortLabel : "Featured series"}
                            </span>
                            <h3 className="home-product-range__catalogue-title">
                                {activeCategoryMeta
                                    ? `${activeCategoryMeta.label} collection`
                                    : "A polished view of the PMG catalogue"}
                            </h3>
                        </div>
                        <p className="home-product-range__catalogue-copy">
                            Showing {visibleProducts.length} of {filteredProducts.length} series
                            {activeCategoryMeta ? ` in ${activeCategoryMeta.shortLabel}.` : " across PMG's range."}
                        </p>
                    </div>

                    <div className="home-product-range__grid">
                        {visibleProducts.map((item, index) => (
                            <ProductCard
                                key={item.series}
                                series={item.series}
                                img={item.img}
                                featured={index === 0 && visibleProducts.length > 2}
                            />
                        ))}
                    </div>

                    <div className="home-product-range__footer">
                        <p className="home-product-range__footer-copy">
                            Need the complete product line-up with specifications, variants, and individual detail pages?
                        </p>
                        <Link href="/products" className="home-product-range__footer-link">
                            Explore the full catalogue
                        </Link>
                    </div>
                </div>
            </div>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .home-product-range {
                            position: relative;
                            overflow: hidden;
                            padding: clamp(80px, 9vw, 120px) 0;
                            background:
                                radial-gradient(circle at 12% 14%, rgba(237, 67, 28, 0.12), transparent 30%),
                                radial-gradient(circle at 88% 8%, rgba(237, 67, 28, 0.07), transparent 32%),
                                radial-gradient(circle at 50% 100%, rgba(237, 67, 28, 0.05), transparent 38%),
                                linear-gradient(180deg, #080808 0%, #0d0d0d 48%, #080808 100%);
                        }

                        .home-product-range__shell {
                            position: relative;
                            z-index: 1;
                            max-width: 1240px;
                            margin: 0 auto;
                            padding: 0 20px;
                        }

                        .home-product-range__hero {
                            display: grid;
                            gap: 24px;
                            margin-bottom: clamp(28px, 4vw, 40px);
                        }

                        @media (min-width: 992px) {
                            .home-product-range__hero {
                                grid-template-columns: minmax(0, 1.15fr) minmax(360px, 0.85fr);
                                align-items: stretch;
                            }
                        }

                        .home-product-range__hero-copy,
                        .home-product-range__hero-panel,
                        .home-product-range__catalogue {
                            position: relative;
                            border-radius: 28px;
                            overflow: hidden;
                        }

                        .home-product-range__hero-copy {
                            padding: clamp(28px, 5vw, 56px);
                            color: #fff;
                            background:
                                linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02)),
                                linear-gradient(180deg, rgba(13, 32, 56, 0.94), rgba(7, 17, 31, 0.98));
                            border: 1px solid rgba(255, 255, 255, 0.1);
                            box-shadow:
                                inset 0 1px 0 rgba(255, 255, 255, 0.08),
                                0 30px 80px rgba(2, 8, 20, 0.28);
                        }

                        .home-product-range__hero-copy::before,
                        .home-product-range__hero-panel::before,
                        .home-product-range__catalogue::before {
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            height: 3px;
                            background: linear-gradient(
                                90deg,
                                rgba(237, 67, 28, 0.15) 0%,
                                rgba(237, 67, 28, 0.85) 48%,
                                rgba(237, 67, 28, 0.12) 100%
                            );
                        }

                        .home-product-range__hero-copy::after {
                            content: "";
                            position: absolute;
                            right: -120px;
                            bottom: -120px;
                            width: 320px;
                            height: 320px;
                            border-radius: 50%;
                            background: radial-gradient(circle, rgba(237, 67, 28, 0.1), transparent 72%);
                            pointer-events: none;
                        }

                        .home-product-range__hero-panel {
                            padding: 1px;
                            background: linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.06));
                            box-shadow: 0 26px 70px rgba(2, 8, 20, 0.24);
                        }

                        .home-product-range__hero-panel-inner {
                            display: flex;
                            flex-direction: column;
                            height: 100%;
                            padding: clamp(24px, 4vw, 32px);
                            background:
                                linear-gradient(180deg, rgba(13, 22, 38, 0.96), rgba(12, 20, 35, 0.92)),
                                #0c1523;
                            color: #fff;
                        }

                        .home-product-range__eyebrow {
                            display: inline-flex;
                            align-items: center;
                            gap: 10px;
                            margin-bottom: 20px;
                            font-size: 0.72rem;
                            font-weight: 600;
                            letter-spacing: 0.14em;
                            text-transform: uppercase;
                            color: rgba(255, 255, 255, 0.65);
                        }

                        .home-product-range__eyebrow-dot {
                            width: 8px;
                            height: 8px;
                            border-radius: 50%;
                            background: #75c4ff;
                            box-shadow: 0 0 0 4px rgba(117, 196, 255, 0.16);
                        }

                        .home-product-range__title {
                            max-width: 15ch;
                            margin: 0 0 18px;
                            font-size: clamp(1.95rem, 4.2vw, 3.45rem);
                            font-weight: 600;
                            line-height: 0.98;
                            letter-spacing: -0.03em;
                            color: #fff;
                        }

                        .home-product-range__title-accent {
                            display: inline-block;
                            color: #ed431c;
                        }

                        .home-product-range__lead {
                            max-width: 40rem;
                            margin: 0;
                            font-size: clamp(1rem, 1.45vw, 1.1rem);
                            line-height: 1.75;
                            color: rgba(255, 255, 255, 0.72);
                        }

                        .home-product-range__hero-actions {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 14px;
                            margin-top: 30px;
                        }

                        .home-product-range__primary-btn {
                            min-width: 220px;
                            color: #fff !important;
                            background: #ed431c !important;
                            border-color: #ed431c !important;
                            box-shadow: 0 14px 34px rgba(237, 67, 28, 0.3);
                        }

                        .home-product-range__primary-btn:hover {
                            color: #fff !important;
                            background: #d93a17 !important;
                            border-color: #d93a17 !important;
                        }

                        .home-product-range__secondary-btn {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            min-height: 54px;
                            padding: 0 22px;
                            border-radius: 999px;
                            border: 1px solid rgba(255, 255, 255, 0.14);
                            color: #fff;
                            text-decoration: none;
                            background: rgba(255, 255, 255, 0.04);
                            transition:
                                background 0.2s ease,
                                border-color 0.2s ease,
                                transform 0.2s ease;
                        }

                        .home-product-range__secondary-btn:hover {
                            color: #fff;
                            background: rgba(255, 255, 255, 0.08);
                            border-color: rgba(117, 196, 255, 0.4);
                            transform: translateY(-1px);
                        }

                        .home-product-range__overview {
                            display: grid;
                            grid-template-columns: repeat(1, minmax(0, 1fr));
                            gap: 14px;
                            margin: 34px 0 0;
                            padding: 0;
                            list-style: none;
                        }

                        @media (min-width: 768px) {
                            .home-product-range__overview {
                                grid-template-columns: repeat(3, minmax(0, 1fr));
                            }
                        }

                        .home-product-range__overview-card {
                            display: flex;
                            flex-direction: column;
                            gap: 6px;
                            padding: 18px 18px 16px;
                            border-radius: 20px;
                            background: rgba(255, 255, 255, 0.05);
                            border: 1px solid rgba(255, 255, 255, 0.08);
                            backdrop-filter: blur(8px);
                        }

                        .home-product-range__overview-value {
                            display: block;
                            font-size: 1.4rem;
                            font-weight: 700;
                            line-height: 1.1;
                            letter-spacing: -0.02em;
                            color: #fff;
                        }

                        .home-product-range__overview-label {
                            display: block;
                            font-size: 0.78rem;
                            font-weight: 500;
                            letter-spacing: 0.03em;
                            text-transform: uppercase;
                            color: rgba(255, 255, 255, 0.58);
                        }

                        .home-product-range__hero-panel-top {
                            margin-bottom: 20px;
                        }

                        .home-product-range__panel-label {
                            display: inline-block;
                            margin-bottom: 12px;
                            font-size: 0.72rem;
                            font-weight: 600;
                            letter-spacing: 0.14em;
                            text-transform: uppercase;
                            color: rgba(255, 255, 255, 0.55);
                        }

                        .home-product-range__panel-copy {
                            margin: 0;
                            font-size: 1rem;
                            line-height: 1.7;
                            color: rgba(255, 255, 255, 0.72);
                        }

                        .home-product-range__category-list {
                            display: flex;
                            flex-direction: column;
                            gap: 12px;
                        }

                        .home-product-range__category-tab {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            gap: 16px;
                            width: 100%;
                            padding: 18px 18px;
                            text-align: left;
                            border: 1px solid rgba(255, 255, 255, 0.08);
                            border-radius: 18px;
                            background: rgba(255, 255, 255, 0.03);
                            color: #fff;
                            transition:
                                transform 0.2s ease,
                                border-color 0.2s ease,
                                background 0.2s ease,
                                box-shadow 0.2s ease;
                        }

                        .home-product-range__category-tab:hover,
                        .home-product-range__category-tab.is-active {
                            transform: translateY(-1px);
                            border-color: rgba(237, 67, 28, 0.4);
                            background: rgba(237, 67, 28, 0.08);
                            box-shadow: 0 18px 32px rgba(0, 0, 0, 0.3);
                        }

                        .home-product-range__category-tab-title {
                            display: block;
                            font-size: 0.98rem;
                            font-weight: 600;
                            line-height: 1.4;
                        }

                        .home-product-range__category-tab-meta {
                            flex-shrink: 0;
                            font-size: 0.74rem;
                            font-weight: 600;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                            color: rgba(255, 255, 255, 0.55);
                        }

                        .home-product-range__panel-footer {
                            margin-top: auto;
                            padding-top: 24px;
                        }

                        .home-product-range__panel-description {
                            margin: 0 0 14px;
                            font-size: 0.94rem;
                            line-height: 1.75;
                            color: rgba(255, 255, 255, 0.68);
                        }

                        .home-product-range__panel-link {
                            color: #ed431c;
                            font-weight: 600;
                            text-decoration: none;
                        }

                        .home-product-range__panel-link:hover {
                            color: #ff6644;
                        }

                        .home-product-range__catalogue {
                            padding: clamp(26px, 4vw, 36px);
                            background:
                                linear-gradient(180deg, rgba(20, 20, 20, 0.96) 0%, rgba(14, 14, 14, 0.98) 100%);
                            border: 1px solid rgba(255, 255, 255, 0.07);
                            box-shadow: 0 28px 80px rgba(0, 0, 0, 0.4);
                        }

                        .home-product-range__catalogue-head {
                            display: flex;
                            flex-direction: column;
                            gap: 14px;
                            margin-bottom: 24px;
                        }

                        @media (min-width: 992px) {
                            .home-product-range__catalogue-head {
                                flex-direction: row;
                                align-items: end;
                                justify-content: space-between;
                            }
                        }

                        .home-product-range__catalogue-label {
                            display: inline-block;
                            margin-bottom: 10px;
                            font-size: 0.72rem;
                            font-weight: 700;
                            letter-spacing: 0.14em;
                            text-transform: uppercase;
                            color: #ed431c;
                        }

                        .home-product-range__catalogue-title {
                            margin: 0;
                            font-size: clamp(1.7rem, 3vw, 2.5rem);
                            font-weight: 600;
                            line-height: 1.05;
                            letter-spacing: -0.03em;
                            color: #ffffff;
                        }

                        .home-product-range__catalogue-copy {
                            max-width: 28rem;
                            margin: 0;
                            font-size: 0.95rem;
                            line-height: 1.75;
                            color: rgba(255, 255, 255, 0.6);
                        }

                        .home-product-range__grid {
                            display: grid;
                            grid-template-columns: 1fr;
                            gap: 18px;
                        }

                        @media (min-width: 768px) {
                            .home-product-range__grid {
                                grid-template-columns: repeat(2, minmax(0, 1fr));
                            }
                        }

                        @media (min-width: 1200px) {
                            .home-product-range__grid {
                                grid-template-columns: repeat(3, minmax(0, 1fr));
                            }
                        }

                        .home-product-range__card {
                            display: flex;
                            flex-direction: column;
                            height: 100%;
                            color: inherit;
                            text-decoration: none;
                            background: #111111;
                            border: 1px solid rgba(255, 255, 255, 0.07);
                            border-radius: 24px;
                            overflow: hidden;
                            transition:
                                transform 0.28s ease,
                                box-shadow 0.28s ease,
                                border-color 0.28s ease;
                        }

                        .home-product-range__card:hover {
                            transform: translateY(-6px);
                            border-color: rgba(237, 67, 28, 0.3);
                            box-shadow: 0 24px 54px rgba(0, 0, 0, 0.4);
                        }

                        @media (min-width: 1200px) {
                            .home-product-range__card.is-featured {
                                grid-column: span 2;
                            }
                        }

                        .home-product-range__card-media {
                            position: relative;
                            aspect-ratio: 1.05 / 0.84;
                            background:
                                radial-gradient(circle at 20% 20%, rgba(237, 67, 28, 0.06), transparent 30%),
                                linear-gradient(160deg, #1a1a1a 0%, #141414 100%);
                        }

                        .home-product-range__card.is-featured .home-product-range__card-media {
                            aspect-ratio: 1.5 / 0.9;
                        }

                        .home-product-range__card-img {
                            object-fit: contain;
                            padding: 24px;
                            transition: transform 0.35s ease;
                        }

                        .home-product-range__card:hover .home-product-range__card-img {
                            transform: scale(1.05);
                        }

                        .home-product-range__card-gradient {
                            position: absolute;
                            inset: auto 0 0;
                            height: 42%;
                            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(7, 17, 31, 0.08) 100%);
                        }

                        .home-product-range__card-arrow {
                            position: absolute;
                            top: 16px;
                            right: 16px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 40px;
                            height: 40px;
                            color: #fff;
                            background: rgba(237, 67, 28, 0.15);
                            border: 1px solid rgba(237, 67, 28, 0.25);
                            border-radius: 50%;
                            opacity: 0;
                            transform: translateY(8px);
                            transition:
                                opacity 0.2s ease,
                                transform 0.2s ease,
                                background 0.2s ease,
                                color 0.2s ease;
                        }

                        .home-product-range__card:hover .home-product-range__card-arrow {
                            opacity: 1;
                            transform: translateY(0);
                            background: #ed431c;
                            color: #fff;
                            border-color: transparent;
                        }

                        .home-product-range__card-body {
                            display: flex;
                            flex-direction: column;
                            flex: 1;
                            gap: 12px;
                            padding: 22px 22px 24px;
                        }

                        .home-product-range__card-meta {
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            justify-content: space-between;
                            gap: 10px;
                        }

                        .home-product-range__card-tag {
                            align-self: flex-start;
                            padding: 5px 10px;
                            font-size: 0.62rem;
                            font-weight: 600;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                            color: rgba(255, 255, 255, 0.5);
                            background: rgba(255, 255, 255, 0.07);
                            border-radius: 999px;
                        }

                        .home-product-range__card-index {
                            font-size: 0.72rem;
                            font-weight: 600;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                            color: rgba(255, 255, 255, 0.38);
                        }

                        .home-product-range__card-title {
                            margin: 0;
                            font-size: clamp(1rem, 1.8vw, 1.35rem);
                            font-weight: 600;
                            line-height: 1.2;
                            color: #ffffff;
                        }

                        .home-product-range__card-excerpt {
                            display: -webkit-box;
                            margin: 0;
                            font-size: 0.9rem;
                            line-height: 1.7;
                            color: rgba(255, 255, 255, 0.55);
                            -webkit-line-clamp: 3;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                        }

                        .home-product-range__card-link {
                            display: flex;
                            align-items: center;
                            gap: 8px;
                            margin-top: auto;
                            font-size: 0.86rem;
                            font-weight: 600;
                            color: #ed431c;
                        }

                        .home-product-range__card-link i {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                        }

                        .home-product-range__footer {
                            display: flex;
                            flex-direction: column;
                            gap: 14px;
                            margin-top: 24px;
                            padding-top: 22px;
                            border-top: 1px solid rgba(255, 255, 255, 0.07);
                        }

                        @media (min-width: 768px) {
                            .home-product-range__footer {
                                flex-direction: row;
                                align-items: center;
                                justify-content: space-between;
                            }
                        }

                        .home-product-range__footer-copy {
                            margin: 0;
                            max-width: 40rem;
                            font-size: 0.94rem;
                            line-height: 1.75;
                            color: rgba(255, 255, 255, 0.55);
                        }

                        .home-product-range__footer-link {
                            color: #ffffff;
                            font-weight: 600;
                            text-decoration: none;
                        }

                        .home-product-range__footer-link:hover {
                            color: #ed431c;
                        }
                    `,
                }}
            />
        </section>
    );
}
