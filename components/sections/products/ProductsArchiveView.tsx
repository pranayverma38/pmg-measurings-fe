"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RevealText from "@/components/effects/RevealText";
import PageContent from "@/components/shared/PageContent";
import InteractiveHeroSection from "@/components/shared/InteractiveHeroSection";
import type { ProductDetails } from "@/data/products/types";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const HIGHLIGHTS = [
    "Precision-engineered blade graduations",
    "Impact-resistant casings for job-site durability",
    "Advanced lock systems across every series",
    "Available in multiple lengths and colourways",
];

const STATS = [
    { value: "20+", label: "Product series in our full catalogue" },
    { value: "100%", label: "Field-tested for accuracy and reliability" },
    { value: "Global", label: "Trusted by distributors worldwide" },
];

export type ProductCardData = {
    series: string;
    cover: string;
    href: string;
    details: ProductDetails;
};

export type ProductCategoryData = {
    id: string;
    label: string;
    shortLabel: string;
    description: string;
    index: number;
    products: ProductCardData[];
};

type ProductsArchiveViewProps = {
    categories: ProductCategoryData[];
    totalSeries: number;
};

function ProductCard({ product, categoryLabel }: { product: ProductCardData; categoryLabel: string }) {
    return (
        <Link href={product.href} className="products-card">
            <div className="products-card__media">
                <Image
                    src={product.cover}
                    alt={product.series}
                    fill
                    sizes="(max-width: 576px) 50vw, (max-width: 992px) 33vw, 25vw"
                    className="products-card__img"
                />
                <span className="products-card__arrow" aria-hidden="true">
                    {ARROW_SVG}
                </span>
            </div>
            <div className="products-card__body">
                <span className="products-card__tag">{categoryLabel}</span>
                <h3 className="products-card__title">{product.series}</h3>
                <p className="products-card__excerpt">{product.details.excerpt}</p>
                <span className="products-card__link">
                    View series
                    <span aria-hidden="true">{ARROW_SVG}</span>
                </span>
            </div>
        </Link>
    );
}

export default function ProductsArchiveView({ categories, totalSeries }: ProductsArchiveViewProps) {
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
    const navRef = useRef<HTMLElement | null>(null);

    const scrollToCategory = useCallback((id: string) => {
        setActiveCategory(id);
        if (id === "all") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        const el = sectionRefs.current[id];
        if (!el) return;
        const navHeight = navRef.current?.offsetHeight ?? 0;
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 24;
        window.scrollTo({ top, behavior: "smooth" });
    }, []);

    useEffect(() => {
        const ids = categories.map((c) => c.id);
        const elements = ids
            .map((id) => sectionRefs.current[id])
            .filter((el): el is HTMLElement => el != null);

        if (elements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                if (visible[0]?.target.id) {
                    setActiveCategory(visible[0].target.id);
                }
            },
            { rootMargin: "-120px 0px -55% 0px", threshold: [0, 0.15, 0.4] }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [categories]);

    const navItems = [
        { id: "all", label: "All series" },
        ...categories.map((c) => ({ id: c.id, label: c.shortLabel })),
    ];

    return (
        <div className="products-page">
            <InteractiveHeroSection className="products-hero pt-120 pb-60">
                <PageContent className="p-relative z-1">
                    <div className="products-hero__grid">
                        <div className="products-hero__copy">
                            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">Product catalogue</span>
                                    <span className="text-2">Product catalogue</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h1 className="section-title fw-600 reveal-text mb-4">
                                <RevealText>Precision measuring tools for every trade</RevealText>
                            </h1>
                            <p className="fz-font-lg neutral-600 mb-40">
                                Explore PMG&apos;s complete range of measuring tapes, spirit levels, and hand
                                tools — engineered for accuracy, durability, and professional performance.
                            </p>
                            <ul className="list-unstyled mb-0 products-hero__highlights">
                                {HIGHLIGHTS.map((item) => (
                                    <li key={item}>
                                        <span aria-hidden="true">{ARROW_SVG}</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="products-hero__aside" aria-hidden="true">
                            <div className="products-hero__stat-card">
                                <p className="products-hero__stat-value">{totalSeries}</p>
                                <p className="products-hero__stat-label">Series across four product families</p>
                            </div>
                            <div className="products-hero__stat-card products-hero__stat-card--muted">
                                <p className="products-hero__stat-value">PMG</p>
                                <p className="products-hero__stat-label">Built for professionals who measure every day</p>
                            </div>
                        </div>
                    </div>
                </PageContent>
            </InteractiveHeroSection>

            <section className="products-stats" aria-label="Product highlights">
                <PageContent>
                    <div className="products-stats__grid">
                        {STATS.map((stat) => (
                            <div key={stat.label} className="products-stats__item">
                                <p className="products-stats__value mb-2">{stat.value}</p>
                                <p className="products-stats__label mb-0">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </PageContent>
            </section>

            <nav ref={navRef} className="products-nav" aria-label="Product categories">
                <PageContent>
                    <div className="products-nav__inner" role="tablist">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                role="tab"
                                aria-selected={activeCategory === item.id}
                                className={`products-nav__pill${activeCategory === item.id ? " is-active" : ""}`}
                                onClick={() => scrollToCategory(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </PageContent>
            </nav>

            <section className="products-catalog pt-60 pb-100">
                <PageContent>
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            id={category.id}
                            ref={(el) => {
                                sectionRefs.current[category.id] = el;
                            }}
                            className="products-category"
                        >
                            <div className="products-category__header">
                                <div className="products-category__index" aria-hidden="true">
                                    {String(category.index + 1).padStart(2, "0")}
                                </div>
                                <div className="products-category__intro">
                                    <h2 className="products-category__title">{category.label}</h2>
                                    <p className="products-category__description">{category.description}</p>
                                </div>
                                <span className="products-category__count">
                                    {category.products.length}{" "}
                                    {category.products.length === 1 ? "series" : "series"}
                                </span>
                            </div>
                            <div className="products-grid">
                                {category.products.map((product) => (
                                    <ProductCard
                                        key={product.series}
                                        product={product}
                                        categoryLabel={category.shortLabel}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </PageContent>
            </section>

            <section className="products-cta" aria-labelledby="products-cta-heading">
                <PageContent>
                    <div className="products-cta__layout">
                        <div className="products-cta__copy">
                            <span className="at-btn common-white bg-transparent mb-10 rounded-0 p-0 products-cta__label">
                                <span className="text-uppercase">
                                    <span className="text-1">Partner programme</span>
                                    <span className="text-2">Partner programme</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h2 id="products-cta-heading" className="fw-600 reveal-text mb-3">
                                <RevealText>Looking to stock PMG?</RevealText>
                            </h2>
                            <p className="fz-font-md mb-0">
                                Join our distributor network and bring industry-leading measuring tools to your
                                market with dedicated partner support and marketing assets.
                            </p>
                        </div>
                        <Link href="/distributors" className="at-btn products-cta__btn flex-shrink-0">
                            <span>
                                <span className="text-1 text-capitalize">Become a distributor</span>
                                <span className="text-2 text-capitalize">Become a distributor</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </Link>
                    </div>
                </PageContent>
            </section>
        </div>
    );
}
