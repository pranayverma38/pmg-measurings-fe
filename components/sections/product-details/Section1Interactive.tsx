"use client";

import { useState } from "react";
import Link from "next/link";
import TabsInteractive from "@/components/common/Tabs";
import type { ProductDetails } from "@/data/products";

type Section1InteractiveProps = {
    details: ProductDetails;
};

export default function Section1Interactive({ details }: Section1InteractiveProps) {
    const { title, excerpt, description, additionalInfo, sizes, colors } = details;
    const [selectedSize, setSelectedSize] = useState(sizes[0] ?? "");
    const [selectedColor, setSelectedColor] = useState(colors[0]?.hex ?? "");

    const productTabs = [
        {
            id: "tab-description",
            title: "Description",
            linkClassName: "bg-transparent",
            content: (
                <>
                    {description.map((paragraph, index) => (
                        <p
                            key={index}
                            className={index === 0 ? "content-product-right__tab-lead neutral-900" : "neutral-900"}
                        >
                            {paragraph}
                        </p>
                    ))}
                </>
            ),
        },
        {
            id: "tab-additional",
            title: "Additional information",
            linkClassName: "bg-transparent",
            content: (
                <table className="content-product-right__spec-table">
                    <tbody>
                        {additionalInfo.map(({ label, value }) => (
                            <tr key={label}>
                                <th>{label}</th>
                                <td>{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ),
        },
    ];

    return (
        <div className="content-product-right px-lg-5 pt-30">
            <h5 className="content-product-right__title">{title}</h5>

            <div className="content-product-right__excerpt mb-4 w-50">
                <p className="content-product-right__excerpt-text">
                    <span className="content-product-right__excerpt-text-content">{excerpt}</span>
                    <Link href="#tab-description" className="content-product-right__read-more">
                        Read more
                    </Link>
                </p>
            </div>

            {sizes.length > 0 && (
                <div className="content-product-right__option mb-4">
                    <label className="content-product-right__option-label">Size</label>
                    <div className="content-product-right__sizes">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                type="button"
                                className={`content-product-right__size ${selectedSize === size ? "active" : ""}`}
                                data-size={size}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {colors.length > 0 && (
                <div className="content-product-right__option mb-4">
                    <label className="content-product-right__option-label">Color</label>
                    <div className="content-product-right__colors">
                        {colors.map(({ hex, title: colorTitle }) => (
                            <button
                                key={hex}
                                type="button"
                                className={`content-product-right__color ${selectedColor === hex ? "active" : ""}`}
                                data-color={hex}
                                title={colorTitle}
                                style={{ backgroundColor: hex }}
                                onClick={() => setSelectedColor(hex)}
                                aria-label={colorTitle}
                            />
                        ))}
                    </div>
                </div>
            )}

            <div className="content-product-right__tabs">
                <TabsInteractive
                    tabs={productTabs}
                    defaultActiveId="tab-description"
                    navClassName="nav nav-tabs content-product-right__tab-nav"
                    paneClassName="tab-content content-product-right__tab-content pt-4"
                />
            </div>
        </div>
    );
}
