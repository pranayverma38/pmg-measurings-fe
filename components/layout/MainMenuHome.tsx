import Link from "next/link";
import { MainMenuRootList } from "@/components/layout/MobileMenuCloneContext";
import { productHref, type ProductSeries } from "@/data/products";
import { PRODUCT_CATEGORIES } from "@/lib/productCategories";

const MEGA_ARROW = (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
        <path
            d="M10.0208 3.41421L1.41421 12.0208L0 10.6066L8.60659 2H1.02082V0H12.0208V11H10.0208V3.41421Z"
            fill="currentColor"
        />
    </svg>
);

const PRODUCT_MENU_COLUMNS = [
    PRODUCT_CATEGORIES[0],
    PRODUCT_CATEGORIES[1],
    {
        id: "specialty-levels",
        label: "Specialty & Levels",
        shortLabel: "Specialty",
        description: "Material-specific blades and precision levelling tools for specialised work.",
        series: [...PRODUCT_CATEGORIES[2].series, ...PRODUCT_CATEGORIES[3].series] as ProductSeries[],
    },
];

function ProductsMegaColumn({
    title,
    description,
    series,
}: {
    title: string;
    description: string;
    series: readonly ProductSeries[];
}) {
    return (
        <div className="at-megamenu-box products-megamenu__col">
            <div className="products-megamenu__col-head">
                <div className="at-megamenu-title-wrap products-megamenu__title-wrap">
                    <span className="at-megamenu-title products-megamenu__title">{title}</span>
                    {MEGA_ARROW}
                </div>
                <p className="products-megamenu__desc">{description}</p>
            </div>
            <ul className="products-megamenu__list">
                {series.map((item) => (
                    <li key={item}>
                        <Link href={productHref(item)}>{item}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function LinkSwap({ label }: { label: string }) {
    return (
        <span className="at-link-swap">
            <span className="text-1">{label}</span>
            <span className="text-2">{label}</span>
        </span>
    );
}

export default function MainMenuHome() {
    return (
        <MainMenuRootList>
            <li>
                <Link href="/home">
                    <LinkSwap label="Home" />
                </Link>
            </li>

            <li>
                <Link href="/about-1">
                    <LinkSwap label="About Us" />
                </Link>
            </li>

            <li>
                <Link href="/distributors">
                    <LinkSwap label="Distributors" />
                </Link>
            </li>

            <li className="has-dropdown has-products-megamenu">
                <Link href="/products">
                    <LinkSwap label="Products" />
                </Link>
                <div className="at-submenu submenu at-megamenu products-megamenu">
                    <div className="row g-4">
                        {PRODUCT_MENU_COLUMNS.map((column) => (
                            <div key={column.id} className="col-xl-4">
                                <ProductsMegaColumn
                                    title={column.label}
                                    description={column.description}
                                    series={column.series}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="products-megamenu__footer">
                        <p className="products-megamenu__footer-text">
                            Precision measuring tools for trade, industry, and everyday use.
                        </p>
                        <Link href="/products" className="products-megamenu__footer-link">
                            View all products
                            {MEGA_ARROW}
                        </Link>
                    </div>
                </div>
            </li>

            <li>
                <Link href="/contact-1">
                    <LinkSwap label="Contact" />
                </Link>
            </li>
        </MainMenuRootList>
    );
}
