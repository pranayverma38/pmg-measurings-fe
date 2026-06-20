import Link from "next/link";
import { MainMenuRootList } from "@/components/layout/MobileMenuCloneContext";

const MEGA_ARROW = (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path d="M10.0208 3.41421L1.41421 12.0208L0 10.6066L8.60659 2H1.02082V0H12.0208V11H10.0208V3.41421Z" fill="currentColor" />
    </svg>
);

const HOME_VARIANTS_LIGHT = [
    { href: "/", label: "01. Creative Agency" },
    { href: "/index-2", label: "02. Digital Agency" },
    { href: "/index-3", label: "03. Marketing Agency" },
    { href: "/index-4", label: "04. AI & Tech Agency" },
    { href: "/index-5", label: "05. Personal Creative" },
    { href: "/index-6", label: "06. Branding Studio" },
    { href: "/index-7", label: "07. Startup Agency" },
    { href: "/index-8", label: "08. UI/UX Agency" },
    { href: "/index-9", label: "09. Modern Agency" },
    { href: "/index-10", label: "10. 3D Studio" },
    { href: "/index-11", label: "11. Motion & Video Studio" },
    { href: "/index-12", label: "12. Minimal Portfolio" },
    { href: "/index-13", label: "13. Architecture Studio" },
    { href: "/index-14", label: "14. Photography Showcase" },
    { href: "/index-15", label: "15. Agency Portfolio" },
];

const HOME_VARIANTS_DARK = [
    { href: "/index-dark", label: "01. Creative Agency" },
    { href: "/index-2-dark", label: "02. Digital Agency" },
    { href: "/index-3-dark", label: "03. Marketing Agency" },
    { href: "/index-4-dark", label: "04. AI & Tech Agency" },
    { href: "/index-5-dark", label: "05. Personal Creative" },
    { href: "/index-6-dark", label: "06. Branding Studio" },
    { href: "/index-7-dark", label: "07. Startup Agency" },
    { href: "/index-8-dark", label: "08. UI/UX Agency" },
    { href: "/index-9-dark", label: "09. Modern Agency" },
    { href: "/index-10-dark", label: "10. 3D Studio" },
    { href: "/index-11-dark", label: "11. Motion & Video Studio" },
    { href: "/index-12-dark", label: "12. Minimal Portfolio" },
    { href: "/index-13-dark", label: "13. Architecture Studio" },
    { href: "/index-14-dark", label: "14. Photography Studio" },
    { href: "/index-15-dark", label: "15. Agency Portfolio" },
];

const ABOUT_LINKS = [
    { href: "/about-1", label: "About 01" },
    { href: "/about-2", label: "About 02" },
    { href: "/about-3", label: "About 03" },
];

const SERVICE_LINKS = [
    { href: "/services-1", label: "Service 01" },
    { href: "/services-2", label: "Service 02" },
    { href: "/services-3", label: "Service 03" },
    { href: "/services-details", label: "Service Details" },
];

const OTHER_LINKS = [
    { href: "/team", label: "Team" },
    { href: "/team-details", label: "Team Details" },
    { href: "/pricing", label: "Pricing" },
    { href: "/coming-soon", label: "Coming Soon" },
    { href: "/faqs", label: "FAQs" },
    { href: "#", label: "404 Page" },
];

const PORTFOLIO_CREATIVE = [
    { href: "/portfolio-cinema", label: "Portfolio Cinema" },
    { href: "/portfolio-split", label: "Portfolio Split" },
    { href: "/portfolio-stack", label: "Portfolio Stack" },
    { href: "/portfolio-curtain", label: "Portfolio Curtain" },
    { href: "/portfolio-zstack", label: "Portfolio Z-Stack" },
    { href: "/portfolio-vista", label: "Portfolio Vista" },
    { href: "/portfolio-horizontal", label: "Portfolio Horizontal" },
];

const PORTFOLIO_CLASSIC = [
    { href: "/portfolio-1", label: "Portfolio 01" },
    { href: "/portfolio-2", label: "Portfolio 02" },
    { href: "/portfolio-3", label: "Portfolio 03" },
    { href: "/portfolio-4", label: "Portfolio 04" },
    { href: "/portfolio-5", label: "Portfolio 05" },
    { href: "/portfolio-6", label: "Portfolio 06" },
];

const PORTFOLIO_DETAILS = [
    { href: "/portfolio-details-1", label: "Portfolio Details 01" },
    { href: "/portfolio-details-2", label: "Portfolio Details 02" },
    { href: "/portfolio-details-3", label: "Portfolio Details 03" },
    { href: "/portfolio-details-4", label: "Portfolio Details 04" },
    { href: "/portfolio-details-5", label: "Portfolio Details 05" },
    { href: "/portfolio-details-6", label: "Portfolio Details 06" },
];

const SHOP_LINKS = [
    { href: "/product-archive", label: "Products Listing" },
    { href: "/product-details", label: "Product Details" },
    { href: "/product-cart", label: "Cart" },
    { href: "/product-checkout", label: "Checkout" },
];

const NEWS_LINKS = [
    { href: "/archive-1", label: "Blog 01" },
    { href: "/archive-2", label: "Blog 02" },
    { href: "/archive-3", label: "Blog 03" },
    { href: "/archive-4", label: "Blog 04" },
    { href: "/blog-details", label: "Post Details" },
];

const CONTACT_LINKS = [
    { href: "/contact-1", label: "Contact 01" },
    { href: "/contact-2", label: "Contact 02" },
];

interface MegaItem { href: string; label: string }

function MegaColumn({ title, items }: { title: string; items: MegaItem[] }) {
    return (
        <div className="at-megamenu-box">
            <div className="at-megamenu-title-wrap">
                <span className="at-megamenu-title">{title}</span>
                {MEGA_ARROW}
            </div>
            <ul>
                {items.map((it) => (
                    <li key={it.label}><Link href={it.href}>{it.label}</Link></li>
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

export default function MainMenuServer() {
    return (
        <MainMenuRootList>
            <li className="has-dropdown">
                <Link href="#"><LinkSwap label="Home" /></Link>
                <div className="at-submenu submenu at-megamenu">
                    <div className="row">
                        <div className="col-xl-6">
                            <MegaColumn title="Light Version" items={HOME_VARIANTS_LIGHT} />
                        </div>
                        <div className="col-xl-6">
                            <MegaColumn title="Dark Version" items={HOME_VARIANTS_DARK} />
                        </div>
                    </div>
                </div>
            </li>

            <li className="has-dropdown">
                <Link href="#"><LinkSwap label="Page" /></Link>
                <div className="at-submenu submenu at-megamenu">
                    <div className="row">
                        <div className="col-xl-4">
                            <MegaColumn title="About Us" items={ABOUT_LINKS} />
                        </div>
                        <div className="col-xl-4">
                            <MegaColumn title="Services" items={SERVICE_LINKS} />
                        </div>
                        <div className="col-xl-4">
                            <MegaColumn title="Other" items={OTHER_LINKS} />
                        </div>
                    </div>
                </div>
            </li>

            <li className="has-dropdown">
                <Link href="#"><LinkSwap label="Portfolio" /></Link>
                <div className="at-submenu submenu at-megamenu">
                    <div className="row">
                        <div className="col-xl-4">
                            <MegaColumn title="Creative" items={PORTFOLIO_CREATIVE} />
                        </div>
                        <div className="col-xl-4">
                            <MegaColumn title="Classic" items={PORTFOLIO_CLASSIC} />
                        </div>
                        <div className="col-xl-4">
                            <MegaColumn title="Details" items={PORTFOLIO_DETAILS} />
                        </div>
                    </div>
                </div>
            </li>

            <li className="has-dropdown">
                <Link href="#"><LinkSwap label="Shop" /></Link>
                <ul className="at-submenu submenu">
                    {SHOP_LINKS.map((l) => (
                        <li key={l.label}><Link href={l.href}>{l.label}</Link></li>
                    ))}
                </ul>
            </li>

            <li className="has-dropdown">
                <Link href="#"><LinkSwap label="News" /></Link>
                <ul className="at-submenu submenu">
                    {NEWS_LINKS.map((l) => (
                        <li key={l.label}><Link href={l.href}>{l.label}</Link></li>
                    ))}
                </ul>
            </li>

            <li className="has-dropdown">
                <Link href="#"><LinkSwap label="Contact" /></Link>
                <ul className="at-submenu submenu">
                    {CONTACT_LINKS.map((l) => (
                        <li key={l.label}><Link href={l.href}>{l.label}</Link></li>
                    ))}
                </ul>
            </li>
        </MainMenuRootList>
    );
}
