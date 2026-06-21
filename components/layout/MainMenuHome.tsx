import Link from "next/link";
import { MainMenuRootList } from "@/components/layout/MobileMenuCloneContext";
import { PRODUCT_SERIES, productHref } from "@/data/products";

const PRODUCT_LINKS = PRODUCT_SERIES.map((series) => ({
    href: productHref(series),
    label: series,
}));

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

            <li className="has-dropdown">
                <Link href="/products">
                    <LinkSwap label="Products" />
                </Link>
                <ul className="at-submenu submenu">
                    {PRODUCT_LINKS.map((link) => (
                        <li key={link.label}>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </li>

            <li>
                <Link href="/contact-1">
                    <LinkSwap label="Contact" />
                </Link>
            </li>
        </MainMenuRootList>
    );
}
