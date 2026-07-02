"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageContent from "@/components/shared/PageContent";
import type { ProductDetails } from "@/data/products";
import { formatProductSize, isAvailableSizeLabel } from "@/lib/formatProductSize";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const HIGHLIGHT_ICONS = [
    (
        <svg key="shield" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    (
        <svg key="lock" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 11V8a4 4 0 118 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    (
        <svg key="eye" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    ),
    (
        <svg key="gear" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    (
        <svg key="ruler" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 8l12-4 4 12-12 4L4 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M9 10l1.5 4M13 9l1.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    (
        <svg key="bolt" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
    ),
];

export type RelatedProduct = {
    series: string;
    href: string;
    cover: string;
};

type ProductDetailsViewProps = {
    details: ProductDetails;
    imagesBySize: Record<string, string[]>;
    fallbackImages: string[];
    relatedProducts: RelatedProduct[];
};

export default function ProductDetailsView({
    details,
    imagesBySize,
    fallbackImages,
    relatedProducts,
}: ProductDetailsViewProps) {
    const { title, series, tagline, excerpt, description, highlights, additionalInfo, sizes, colors } = details;
    const [activeImage, setActiveImage] = useState(0);
    const [isSwitching, setIsSwitching] = useState(false);
    const [selectedSize, setSelectedSize] = useState(sizes[0] ?? "");
    const [selectedColor, setSelectedColor] = useState(colors[0]?.hex ?? "");

    const images = useMemo(() => {
        const sizeImages = imagesBySize[selectedSize] ?? [];
        return sizeImages.length > 0 ? sizeImages : fallbackImages;
    }, [imagesBySize, selectedSize, fallbackImages]);

    useEffect(() => {
        setActiveImage(0);
    }, [selectedSize]);

    const quickSpecs = additionalInfo
        .filter(({ label }) => !/^Blade\b/i.test(label))
        .slice(0, 4);

    const selectImage = useCallback((index: number) => {
        if (index === activeImage) return;
        setIsSwitching(true);
        window.setTimeout(() => {
            setActiveImage(index);
            setIsSwitching(false);
        }, 150);
    }, [activeImage]);

    const activeSrc = images[activeImage] ?? images[0];

    return (
        <div className="pd-page">
            <section className="pd-page__hero-section pt-150 pb-80">
                <PageContent>
                    <nav className="pd-page__breadcrumb" aria-label="Breadcrumb">
                        <Link href="/products">Products</Link>
                        <span className="pd-page__breadcrumb-sep" aria-hidden="true">
                            /
                        </span>
                        <span className="pd-page__breadcrumb-current">{series}</span>
                    </nav>

                    <div className="pd-page__hero">
                        <div className="pd-page__gallery">
                            <div
                                className={`pd-page__main-image${isSwitching ? " is-switching" : ""}`}
                            >
                                {activeSrc && (
                                    <Image
                                        src={activeSrc}
                                        alt={title}
                                        fill
                                        sizes="(max-width: 767px) 100vw, 50vw"
                                        priority
                                    />
                                )}
                            </div>
                            {images.length > 1 && (
                                <div className="pd-page__thumbs" role="list" aria-label="Product images">
                                    {images.map((src, index) => (
                                        <button
                                            key={src}
                                            type="button"
                                            role="listitem"
                                            className={`pd-page__thumb${activeImage === index ? " is-active" : ""}`}
                                            onClick={() => selectImage(index)}
                                            aria-label={`View image ${index + 1}`}
                                            aria-current={activeImage === index ? "true" : undefined}
                                        >
                                            <Image
                                                src={src}
                                                alt=""
                                                fill
                                                sizes="80px"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="pd-page__info pd-page__info-panel">
                            {tagline && <p className="pd-page__tagline">{tagline}</p>}
                            <h1 className="pd-page__title">{title}</h1>
                            <p className="pd-page__excerpt">{excerpt}</p>

                            {quickSpecs.length > 0 && (
                                <div className="pd-page__quick-specs">
                                    {quickSpecs.map(({ label, value }) => (
                                        <div key={label} className="pd-page__quick-spec">
                                            <span className="pd-page__quick-spec-label">{label}</span>
                                            <span className="pd-page__quick-spec-value">
                                                {isAvailableSizeLabel(label) ? formatProductSize(value) : value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {sizes.length > 0 && (
                                <div>
                                    <span className="pd-page__option-label">Available lengths</span>
                                    <div className="pd-page__sizes">
                                        {sizes.map((size) => (
                                            <button
                                                key={size}
                                                type="button"
                                                className={`pd-page__size${selectedSize === size ? " is-active" : ""}`}
                                                onClick={() => setSelectedSize(size)}
                                            >
                                                {formatProductSize(size)}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {colors.length > 0 && (
                                <div>
                                    <span className="pd-page__option-label">Colour options</span>
                                    <div className="pd-page__colors">
                                        {colors.map(({ hex, title: colorTitle }) => (
                                            <button
                                                key={hex}
                                                type="button"
                                                className={`pd-page__color${selectedColor === hex ? " is-active" : ""}`}
                                                style={{ backgroundColor: hex }}
                                                title={colorTitle}
                                                aria-label={colorTitle}
                                                onClick={() => setSelectedColor(hex)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="pd-page__actions">
                                <Link href="/distributors" className="pd-page__btn pd-page__btn--primary">
                                    Find a distributor
                                    <span aria-hidden="true">{ARROW_SVG}</span>
                                </Link>
                                <Link href="/products" className="pd-page__btn pd-page__btn--outline">
                                    All products
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="pd-page__details">
                        <div className="pd-page__details-grid">
                            <div>
                                <span className="pd-page__section-label">Overview</span>
                                <div className="pd-page__description">
                                    {description.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                            <aside className="pd-page__specs-card">
                                <h2 className="pd-page__specs-title">Technical specifications</h2>
                                <dl className="pd-page__specs-list">
                                    {additionalInfo.map(({ label, value }) => (
                                        <div key={label} className="pd-page__specs-item">
                                            <dt>{label}</dt>
                                            <dd>{isAvailableSizeLabel(label) ? formatProductSize(value) : value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </aside>
                        </div>
                    </div>
                </PageContent>
            </section>

            {highlights.length > 0 && (
                <section className="pd-page__highlights" aria-labelledby="pd-highlights-heading">
                    <div className="pd-page__highlights-bg" aria-hidden="true">
                        <div className="pd-page__highlights-glow pd-page__highlights-glow--1" />
                        <div className="pd-page__highlights-glow pd-page__highlights-glow--2" />
                        <div className="pd-page__highlights-grid-lines" />
                    </div>
                    <PageContent>
                        <header className="pd-page__highlights-header">
                            <div className="pd-page__highlights-header-copy">
                                <span className="pd-page__highlights-label">Key features</span>
                                <h2 id="pd-highlights-heading" className="pd-page__highlights-title">
                                    Built into every {series.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())}
                                </h2>
                                <p className="pd-page__highlights-subtitle">
                                    Precision engineering and job-site durability — the details that set this series apart.
                                </p>
                            </div>
                            <div className="pd-page__highlights-count" aria-hidden="true">
                                <span className="pd-page__highlights-count-value">{highlights.length}</span>
                                <span className="pd-page__highlights-count-label">Features</span>
                            </div>
                        </header>
                        <div className="pd-page__highlights-bento">
                            {highlights.map((item, index) => (
                                <article
                                    key={item}
                                    className={`pd-page__highlight-card${index === 0 ? " is-featured" : ""}`}
                                >
                                    <span className="pd-page__highlight-num" aria-hidden="true">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <div className="pd-page__highlight-card-body">
                                        <span className="pd-page__highlight-icon">
                                            {HIGHLIGHT_ICONS[index % HIGHLIGHT_ICONS.length]}
                                        </span>
                                        <h3 className="pd-page__highlight-title">{item}</h3>
                                    </div>
                                    <span className="pd-page__highlight-shine" aria-hidden="true" />
                                </article>
                            ))}
                        </div>
                    </PageContent>
                </section>
            )}

            {relatedProducts.length > 0 && (
                <section className="pd-page__related" aria-labelledby="related-products-heading">
                    <PageContent>
                        <div className="pd-page__related-header">
                            <div>
                                <h2 id="related-products-heading" className="pd-page__related-title">
                                    Related series
                                </h2>
                                <p className="pd-page__related-subtitle">
                                    Explore other series in our catalogue
                                </p>
                            </div>
                            <Link href="/products" className="pd-page__related-link">
                                View catalogue
                                <span aria-hidden="true">{ARROW_SVG}</span>
                            </Link>
                        </div>
                        <div className="pd-page__related-grid">
                            {relatedProducts.map((product) => (
                                <Link
                                    key={product.series}
                                    href={product.href}
                                    className="pd-page__related-card"
                                >
                                    <div className="pd-page__related-media">
                                        <Image
                                            src={product.cover}
                                            alt={product.series}
                                            fill
                                            sizes="(max-width: 767px) 50vw, 25vw"
                                        />
                                    </div>
                                    <div className="pd-page__related-body">
                                        <h3 className="pd-page__related-name">{product.series}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </PageContent>
                </section>
            )}

            <section className="pd-page__cta">
                <PageContent>
                    <div className="pd-page__cta-inner">
                        <div>
                            <span className="pd-page__cta-label">Need help choosing?</span>
                            <h2 className="pd-page__cta-title">Talk to our team about the right series for your needs</h2>
                            <p className="pd-page__cta-text">
                                Whether you are stocking a retail line or equipping a trade crew, we can help you
                                find the perfect measuring solution.
                            </p>
                        </div>
                        <Link href="/contact-1" className="pd-page__btn pd-page__btn--primary">
                            Get in touch
                            <span aria-hidden="true">{ARROW_SVG}</span>
                        </Link>
                    </div>
                </PageContent>
            </section>
        </div>
    );
}
