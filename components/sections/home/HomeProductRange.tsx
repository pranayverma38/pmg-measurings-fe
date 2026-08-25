"use client";

import Image from "next/image";
import Link from "next/link";
import { getProductDetailsBySeries } from "@/data/products";
import { productHref, type ProductSeries } from "@/data/products/series";
import { getCategoryForSeries } from "@/lib/productCategories";

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
    const visibleProducts = products.slice(0, VISIBLE_PRODUCTS);

    return (
        <section className="home-product-range changeless" aria-label="PMG product range">
            <div className="home-product-range__shell">
                <div className="home-product-range__catalogue">
                    <div className="home-product-range__catalogue-head">
                        <div>
                            <h3 className="home-product-range__catalogue-title">MEET THE PMG RANGE</h3>
                        </div>
                        <p className="home-product-range__catalogue-copy">
                            Showing {visibleProducts.length} of {products.length} series across PMG&apos;s range.
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
                            background: transparent;
                        }

                        .home-product-range__shell {
                            position: relative;
                            z-index: 1;
                            max-width: 1240px;
                            margin: 0 auto;
                            padding: 0 20px;
                        }

                        .home-product-range__catalogue {
                            position: relative;
                            border-radius: 28px;
                            overflow: hidden;
                        }

                        .home-product-range__catalogue {
                            padding: clamp(26px, 4vw, 36px);
                            background: #ffffff;
                            border: 1px solid rgba(17, 24, 39, 0.08);
                            box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
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
                            color: var(--at-theme-primary, #1562a1);
                        }

                        .home-product-range__catalogue-title {
                            margin: 0;
                            font-size: clamp(1.7rem, 3vw, 2.5rem);
                            font-weight: 600;
                            line-height: 1.05;
                            letter-spacing: -0.03em;
                            color: #111827;
                        }

                        .home-product-range__catalogue-copy {
                            max-width: 28rem;
                            margin: 0;
                            font-size: 0.95rem;
                            line-height: 1.75;
                            color: rgba(17, 24, 39, 0.6);
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
                            background: #fff;
                            border: 1px solid rgba(17, 24, 39, 0.08);
                            border-radius: 24px;
                            overflow: hidden;
                            transition:
                                transform 0.28s ease,
                                box-shadow 0.28s ease,
                                border-color 0.28s ease;
                        }

                        .home-product-range__card:hover {
                            transform: translateY(-6px);
                            border-color: rgba(21, 98, 161, 0.22);
                            box-shadow: 0 24px 54px rgba(10, 16, 28, 0.12);
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
                                radial-gradient(circle at 20% 20%, rgba(117, 196, 255, 0.14), transparent 30%),
                                linear-gradient(160deg, #f9fbff 0%, #eef2f7 100%);
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
                            color: #111;
                            background: rgba(255, 255, 255, 0.92);
                            border: 1px solid rgba(17, 24, 39, 0.08);
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
                            background: var(--at-theme-primary, #1562a1);
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
                            color: rgba(17, 24, 39, 0.55);
                            background: #f3f6fb;
                            border-radius: 999px;
                        }

                        .home-product-range__card-index {
                            font-size: 0.72rem;
                            font-weight: 600;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                            color: rgba(17, 24, 39, 0.4);
                        }

                        .home-product-range__card-title {
                            margin: 0;
                            font-size: clamp(1rem, 1.8vw, 1.35rem);
                            font-weight: 600;
                            line-height: 1.2;
                            color: #111827;
                        }

                        .home-product-range__card-excerpt {
                            display: -webkit-box;
                            margin: 0;
                            font-size: 0.9rem;
                            line-height: 1.7;
                            color: rgba(17, 24, 39, 0.58);
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
                            color: var(--at-theme-primary, #1562a1);
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
                            border-top: 1px solid rgba(17, 24, 39, 0.08);
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
                            color: rgba(17, 24, 39, 0.58);
                        }

                        .home-product-range__footer-link {
                            color: #111827;
                            font-weight: 600;
                            text-decoration: none;
                        }

                        .home-product-range__footer-link:hover {
                            color: var(--at-theme-primary, #1562a1);
                        }
                    `,
                }}
            />
        </section>
    );
}
