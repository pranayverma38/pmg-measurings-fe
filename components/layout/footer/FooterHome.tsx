import Image from "next/image";
import Link from "next/link";

// Footer for /home — cloned from Footer10 (index-10 footer)

const NAV_LINKS_1 = [
    { label: "Home", href: "/home" },
    { label: "About Us", href: "/about-1" },
    { label: "Distributors", href: "/distributors" },
];

const PRODUCT_LINKS = [
    { label: "All Products", href: "/product-archive" },
    { label: "Product Details", href: "/product-details" },
];

const NAV_LINKS_2 = [
    ...PRODUCT_LINKS,
    { label: "Contact", href: "/contact-1" },
];

const SOCIAL_LINKS = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/pmg.tapes?igsh=MXEwMG1sMTQ4Y3h3bQ%3D%3D&utm_source=qr",
    },
    {
        label: "Youtube",
        href: "https://youtube.com/@primemistrigold?si=xp9u-5_G9FvX-Lod",
    },
];

const CONTACT_EMAIL = "support@pmprecision.com";
const CONTACT_ADDRESS = "123 Precision Way, Industrial District, London";

const CTA_ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path
            d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z"
            fill="currentColor"
        />
    </svg>
);

const BG_IMAGE = {
    src: "/assets/imgs/pages/home-10/footer-10-bg-lines.webp",
    alt: "orisa",
    width: 2096,
    height: 1180,
};

const NAV_ARROW_IMAGE = {
    src: "/assets/imgs/pages/home-8/footer-8-nav-arrow.svg",
    alt: "orisa",
    width: 14,
    height: 13,
};

export default function FooterHome() {
    return (
        <footer className="footer-10 changeless overflow-hidden">
            <div className="footer-10__bg" aria-hidden="true">
                <Image
                    className="footer-10__bg-img"
                    src={BG_IMAGE.src}
                    alt={BG_IMAGE.alt}
                    width={BG_IMAGE.width}
                    height={BG_IMAGE.height}
                    loading="lazy"
                    sizes="100vw"
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
            </div>

            <div className="container-2200 px-lg-5 px-3 position-relative">
                <div className="footer-10__hero position-relative">
                    <div className="footer-10__cta-block position-relative z-1 d-flex flex-column flex-md-row justify-content-md-between align-items-start align-items-md-center gap-4">
                        <h2 className="footer-10__headline mb-0 mx-0 at_fade_anim reveal-text text-md-start" data-delay="0.05">
                            Ready to bring precision tools to your business?
                        </h2>
                        <div className="sec-5-home-9__cta-wrap ms-md-auto">
                            <div
                                className="at-btn-group at_fade_anim"
                                data-delay=".4"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <Link className="at-btn-circle" href="/portfolio-1">
                                    {CTA_ARROW_SVG}
                                </Link>
                                <Link className="at-btn z-index-1" href="/portfolio-1">
                                    DROP ENQUIRY
                                </Link>
                                <Link className="at-btn-circle" href="/portfolio-1">
                                    {CTA_ARROW_SVG}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-10__mid">
                    <div className="row g-5 align-items-start">
                        <div className="col-xl-4 col-lg-5 col-md-6">
                            <div className="row g-4 footer-10__nav-grid">
                                <div className="col-6">
                                    <nav className="footer-10__nav-list" aria-label="Footer primary">
                                        {NAV_LINKS_1.map((link) => (
                                            <Link
                                                key={link.label}
                                                className="footer-10__nav-link"
                                                href={link.href}
                                            >
                                                <span>{link.label}</span>
                                                <Image
                                                    className="footer-10__nav-arrow"
                                                    src={NAV_ARROW_IMAGE.src}
                                                    alt={NAV_ARROW_IMAGE.alt}
                                                    width={NAV_ARROW_IMAGE.width}
                                                    height={NAV_ARROW_IMAGE.height}
                                                    loading="lazy"
                                                    aria-hidden="true"
                                                    style={{ width: "auto", height: "auto" }}
                                                />
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                                <div className="col-6">
                                    <nav className="footer-10__nav-list" aria-label="Products and contact">
                                        {NAV_LINKS_2.map((link) => (
                                            <Link
                                                key={link.label}
                                                className="footer-10__nav-link"
                                                href={link.href}
                                            >
                                                <span>{link.label}</span>
                                                <Image
                                                    className="footer-10__nav-arrow"
                                                    src={NAV_ARROW_IMAGE.src}
                                                    alt={NAV_ARROW_IMAGE.alt}
                                                    width={NAV_ARROW_IMAGE.width}
                                                    height={NAV_ARROW_IMAGE.height}
                                                    loading="lazy"
                                                    aria-hidden="true"
                                                    style={{ width: "auto", height: "auto" }}
                                                />
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-7 col-md-6">
                            <div className="footer-10__contact-hours d-flex flex-wrap gap-4 gap-xxl-5">
                                <div className="footer-10__contact">
                                    <p className="footer-10__contact-line mb-3">
                                        <Link href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>
                                    </p>
                                    <p className="footer-10__address mb-0">
                                        {CONTACT_ADDRESS}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 ms-xl-auto col-lg-6">
                            <div className="footer-10__newsletter">
                                <p className="footer-10__newsletter-title mb-3 at_fade_anim" data-delay="0.1">
                                    Follow us
                                </p>
                                <nav className="footer-10__nav-list" aria-label="Social links">
                                    {SOCIAL_LINKS.map((link) => (
                                        <Link
                                            key={link.label}
                                            className="footer-10__nav-link"
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>{link.label}</span>
                                            <Image
                                                className="footer-10__nav-arrow"
                                                src={NAV_ARROW_IMAGE.src}
                                                alt=""
                                                width={NAV_ARROW_IMAGE.width}
                                                height={NAV_ARROW_IMAGE.height}
                                                loading="lazy"
                                                aria-hidden="true"
                                                style={{ width: "auto", height: "auto" }}
                                            />
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-10__bottom">
                    <div className="footer-10__bottom-inner d-flex flex-wrap align-items-center justify-content-between gap-3">
                        <span className="footer-10__copy">&copy; 2026 PMG. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
