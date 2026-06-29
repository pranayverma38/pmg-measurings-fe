"use client";

import { useState } from "react";
import Link from "next/link";
import RevealText from "@/components/effects/RevealText";
import TeamCard1 from "@/components/cards/TeamCard1";
import { productHref } from "@/data/products/series";

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

const PRODUCT_SERIES = [
    { series: "SIDE LOCK SERIES", img: productSrc("SIDE LOCK SERIES", "IMG_8269.png") },
    { series: "NEW ECO SERIES", img: productSrc("NEW ECO SERIES", "IMG_8280.png") },
    { series: "LOCK SERIES", img: productSrc("LOCK SERIES", "IMG_8051.png") },
    { series: "SIGNATURE SERIES", img: productSrc("SIGNATURE SERIES", "IMG_8162.png") },
    { series: "GLASS SERIES", img: productSrc("GLASS SERIES", "IMG_8075.png") },
    { series: "PRIME SERIES", img: productSrc("PRIME SERIES", "IMG_8127.png") },
    { series: "ECO SERIES", img: productSrc("ECO SERIES", "IMG_8242.png") },
    { series: "GRIP SERIES", img: productSrc("GRIP SERIES", "IMG_8010.png") },
];

export default function AboutProductRange() {
    const [expanded, setExpanded] = useState(false);
    const visibleProducts = expanded ? PRODUCT_SERIES : PRODUCT_SERIES.slice(0, INITIAL_VISIBLE);
    const hasMore = PRODUCT_SERIES.length > INITIAL_VISIBLE;

    return (
        <>
            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                <span className="text-uppercase">
                    <span className="text-1">Product range</span>
                    <span className="text-2">Product range</span>
                </span>
                <i>
                    {ARROW_SVG}
                    {ARROW_SVG}
                </i>
            </span>
            <h3 className="fw-600 reveal-text mb-50">
                <RevealText>Engineered for every trade</RevealText>
            </h3>

            <div className="row g-4 align-items-stretch about-story__products">
                {visibleProducts.map((item) => (
                    <div key={item.series} className="col-lg-3 col-md-6">
                        <TeamCard1
                            linkPost={productHref(item.series)}
                            img={item.img}
                            name={item.series}
                            position=""
                            hideContent
                        />
                        <p className="fz-font-md fw-500 neutral-800 mt-3 mb-0 text-center">{item.series}</p>
                    </div>
                ))}
            </div>

            {hasMore && (
                <div className="d-flex justify-content-center mt-50">
                    {!expanded ? (
                        <button
                            type="button"
                            className="at-btn"
                            onClick={() => setExpanded(true)}
                        >
                            <span>
                                <span className="text-1 text-capitalize">Show more</span>
                                <span className="text-2 text-capitalize">Show more</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </button>
                    ) : (
                        <Link href="/products" className="at-btn">
                            <span>
                                <span className="text-1 text-capitalize">View all products</span>
                                <span className="text-2 text-capitalize">View all products</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </Link>
                    )}
                </div>
            )}
        </>
    );
}
