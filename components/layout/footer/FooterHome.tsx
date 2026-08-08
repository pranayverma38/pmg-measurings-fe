"use client";

import Link from "next/link";
import { useState } from "react";

const PRIMARY_LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-1" },
    { label: "Products", href: "/products" },
    { label: "Distributors", href: "/distributors" },
    { label: "Contact", href: "/contact-1" },
];

const SUPPORT_LINKS = [
    { label: "Dealer Inquiry", href: "/distributors#distributor-inquiry" },
    { label: "Product Catalogue", href: "/products" },
    { label: "Talk to PMG", href: "/contact-1" },
];

const SOCIAL_LINKS = [
    { label: "Instagram", href: "https://www.instagram.com/pmg.tapes?igsh=MXEwMG1sMTQ4Y3h3bQ%3D%3D&utm_source=qr" },
    { label: "Youtube", href: "https://youtube.com/@primemistrigold?si=xp9u-5_G9FvX-Lod" },
    { label: "Facebook", href: "#" },
];

const CONTACT_EMAIL = "pmgmeasuringtape@gmail.com";
const CONTACT_PHONE = "+91 92023 31313";
const CONTACT_PHONE_HREF = "9202331313";
const CONTACT_ADDRESS = "New Delhi, India";
const INTERACTIVE_SCALE_POINTS = [
    { label: "0 mm", description: "Start point for a tighter, workshop-inspired footer interaction." },
    { label: "5 mm", description: "Fine-grain precision styling for lighter hover movement." },
    { label: "10 mm", description: "Compact scale feedback tuned for product-focused browsing." },
    { label: "15 mm", description: "A crisp midpoint step that keeps the ruler feel visible." },
    { label: "20 mm", description: "Sharper contrast and measured spacing for a premium finish." },
    { label: "25 mm", description: "Balanced rhythm between subtle motion and clear feedback." },
    { label: "30 mm", description: "Built to feel tactile, like a tape edge under the pointer." },
    { label: "35 mm", description: "Micro-interactions that make the panel feel less decorative." },
    { label: "40 mm", description: "A cleaner footer pattern with a more purposeful blue accent." },
    { label: "45 mm", description: "Hover response designed to feel steady rather than flashy." },
    { label: "50 mm", description: "Center mark for the precision scale interaction." },
    { label: "55 mm", description: "Focus states keep the ruler usable for keyboard navigation too." },
    { label: "60 mm", description: "Trade-inspired detailing with a calmer, premium hover effect." },
    { label: "65 mm", description: "Measured spacing and motion to support the minimal layout." },
    { label: "70 mm", description: "Each mark reacts independently for a more tactile experience." },
    { label: "75 mm", description: "A subtle lift and glow adds feedback without overpowering the panel." },
    { label: "80 mm", description: "Clean visual rhythm inspired by workshop rulers and tape blades." },
    { label: "85 mm", description: "Blue emphasis stays consistent with the footer's darker palette." },
    { label: "90 mm", description: "Interactive ticks make the scale feel intentional, not ornamental." },
    { label: "95 mm", description: "Near-end marker with the same precise hover and focus response." },
    { label: "100 mm", description: "Full-scale endpoint with a strong, high-contrast blue finish." },
];

const ARROW_ICON = (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
            d="M2.1875 11.8125L11.8125 2.1875M11.8125 2.1875H4.59375M11.8125 2.1875V9.40625"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default function FooterHome() {
    const defaultScaleIndex = 10;
    const [activeScaleIndex, setActiveScaleIndex] = useState(defaultScaleIndex);
    const activeScalePoint = INTERACTIVE_SCALE_POINTS[activeScaleIndex] ?? INTERACTIVE_SCALE_POINTS[defaultScaleIndex];

    return (
        <footer className="pmg-footer-home">
            <div className="pmg-footer-home__glow pmg-footer-home__glow--left" aria-hidden="true" />
            <div className="pmg-footer-home__glow pmg-footer-home__glow--right" aria-hidden="true" />

            <div className="container-2200 px-lg-5 px-3 position-relative">
                <div className="pmg-footer-home__shell">
                    <div className="pmg-footer-home__grid">
                        <div className="pmg-footer-home__panel">
                            <span className="pmg-footer-home__panel-label">Navigate</span>
                            <nav className="pmg-footer-home__links" aria-label="Footer navigation">
                                {PRIMARY_LINKS.map((link) => (
                                    <Link key={link.label} href={link.href} className="pmg-footer-home__link">
                                        <span>{link.label}</span>
                                        {ARROW_ICON}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        <div className="pmg-footer-home__panel">
                            <span className="pmg-footer-home__panel-label">Support</span>
                            <div className="pmg-footer-home__info-block">
                                <Link href={`tel:${CONTACT_PHONE_HREF}`} className="pmg-footer-home__contact-value">
                                    {CONTACT_PHONE}
                                </Link>
                                <Link href={`mailto:${CONTACT_EMAIL}`} className="pmg-footer-home__contact-value">
                                    {CONTACT_EMAIL}
                                </Link>
                                <span className="pmg-footer-home__contact-meta">{CONTACT_ADDRESS}</span>
                            </div>
                            <div className="pmg-footer-home__support-links">
                                {SUPPORT_LINKS.map((link) => (
                                    <Link key={link.label} href={link.href} className="pmg-footer-home__mini-link">
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="pmg-footer-home__panel pmg-footer-home__panel--accent">
                            <span className="pmg-footer-home__panel-label">Tape inspired</span>
                            <div className="pmg-footer-home__tape-card">
                                <div className="pmg-footer-home__tape-head">
                                    <span className="pmg-footer-home__tape-title">Precision scale</span>
                                    <span className="pmg-footer-home__tape-badge">{activeScalePoint.label}</span>
                                </div>
                                <div
                                    className="pmg-footer-home__tape-line"
                                    onMouseLeave={() => setActiveScaleIndex(defaultScaleIndex)}
                                >
                                    {INTERACTIVE_SCALE_POINTS.map((point, index) => (
                                        <button
                                            key={point.label}
                                            type="button"
                                            className={`pmg-footer-home__tape-tick${index === activeScaleIndex ? " is-active" : ""}`}
                                            onMouseEnter={() => setActiveScaleIndex(index)}
                                            onFocus={() => setActiveScaleIndex(index)}
                                            aria-label={`Scale mark ${point.label}`}
                                        >
                                            <span className="pmg-footer-home__tape-tick-bar" aria-hidden="true" />
                                            <span className="pmg-footer-home__tape-tick-label">{point.label}</span>
                                        </button>
                                    ))}
                                </div>
                                <p className="pmg-footer-home__tape-copy mb-0">
                                    {activeScalePoint.description}
                                </p>
                                <div className="pmg-footer-home__socials" aria-label="Social links">
                                    {SOCIAL_LINKS.map((link) => (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            className="pmg-footer-home__social-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pmg-footer-home__bottom">
                        <p className="pmg-footer-home__bottom-copy mb-0">
                            &copy; 2026 PMG. Precision tools designed for confident measurement.
                        </p>
                        <p className="pmg-footer-home__bottom-copy mb-0">
                            Measuring tapes, fiberglass tapes, and spirit levels for field and trade.
                        </p>
                    </div>
                </div>
            </div>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .pmg-footer-home {
                            position: relative;
                            overflow: hidden;
                            color: #f5f0df;
                            background:
                                radial-gradient(circle at top left, rgba(21, 98, 161, 0.18) 0, rgba(21, 98, 161, 0) 30%),
                                radial-gradient(circle at right center, rgba(67, 145, 206, 0.12) 0, rgba(67, 145, 206, 0) 24%),
                                linear-gradient(180deg, #050505 0%, #0a0a0a 48%, #020202 100%);
                        }
                        .pmg-footer-home::before {
                            content: "";
                            position: absolute;
                            inset: 0;
                            background-image:
                                linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
                            background-size: 26px 26px;
                            mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6), transparent 88%);
                            pointer-events: none;
                        }
                        .pmg-footer-home__glow {
                            position: absolute;
                            width: 26rem;
                            height: 26rem;
                            border-radius: 50%;
                            filter: blur(100px);
                            pointer-events: none;
                            opacity: 0.42;
                        }
                        .pmg-footer-home__glow--left {
                            top: -14rem;
                            left: -10rem;
                            background: rgba(21, 98, 161, 0.2);
                        }
                        .pmg-footer-home__glow--right {
                            right: -12rem;
                            bottom: -16rem;
                            background: rgba(67, 145, 206, 0.14);
                        }
                        .pmg-footer-home__shell {
                            position: relative;
                            z-index: 1;
                            padding: 24px 0 24px;
                        }
                        .pmg-footer-home__logo-link {
                            display: inline-flex;
                            text-decoration: none;
                        }
                        .pmg-footer-home__logo {
                            display: block;
                            width: auto;
                            height: 56px;
                            object-fit: contain;
                        }
                        .pmg-footer-home__eyebrow,
                        .pmg-footer-home__panel-label,
                        .pmg-footer-home__kicker {
                            font-size: 0.74rem;
                            font-weight: 700;
                            letter-spacing: 0.18em;
                            text-transform: uppercase;
                        }
                        .pmg-footer-home__eyebrow {
                            color: rgba(96, 175, 255, 0.88);
                        }
                        .pmg-footer-home__lead {
                            max-width: 42rem;
                            font-size: 0.95rem;
                            line-height: 1.7;
                            color: rgba(255, 255, 255, 0.72);
                        }
                        .pmg-footer-home__btn {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            gap: 10px;
                            min-height: 54px;
                            padding: 0 22px;
                            border-radius: 999px;
                            font-size: 0.88rem;
                            font-weight: 700;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                            text-decoration: none;
                            transition:
                                transform 0.25s ease,
                                background 0.25s ease,
                                color 0.25s ease,
                                border-color 0.25s ease,
                                box-shadow 0.25s ease;
                        }
                        .pmg-footer-home__btn:hover {
                            transform: translateY(-2px);
                        }
                        .pmg-footer-home__btn--primary {
                            color: #f7fbff;
                            background: #1562a1;
                            border: 1px solid #1562a1;
                            box-shadow: 0 16px 34px rgba(21, 98, 161, 0.24);
                        }
                        .pmg-footer-home__btn--secondary {
                            color: #fff;
                            border: 1px solid rgba(255, 255, 255, 0.14);
                            background: rgba(255, 255, 255, 0.04);
                        }
                        .pmg-footer-home__btn--secondary:hover {
                            color: #f7fbff;
                            background: #1e4f79;
                            border-color: #1e4f79;
                        }
                        .pmg-footer-home__grid {
                            display: grid;
                            grid-template-columns: 1.05fr 1fr 1.1fr;
                            gap: 18px;
                            margin-top: 18px;
                        }
                        .pmg-footer-home__panel {
                            display: grid;
                            gap: 18px;
                            padding: 24px;
                            border-radius: 24px;
                            border: 1px solid rgba(255, 255, 255, 0.08);
                            background: rgba(255, 255, 255, 0.025);
                            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
                        }
                        .pmg-footer-home__panel--accent {
                            background:
                                linear-gradient(180deg, rgba(21, 98, 161, 0.14) 0%, rgba(21, 98, 161, 0.04) 100%),
                                rgba(255, 255, 255, 0.02);
                            border-color: rgba(78, 165, 255, 0.16);
                        }
                        .pmg-footer-home__panel-label {
                            color: rgba(96, 175, 255, 0.86);
                        }
                        .pmg-footer-home__links,
                        .pmg-footer-home__support-links,
                        .pmg-footer-home__socials {
                            display: grid;
                            gap: 10px;
                        }
                        .pmg-footer-home__link,
                        .pmg-footer-home__social-link {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            gap: 12px;
                            padding: 13px 14px;
                            border-radius: 14px;
                            color: #fff;
                            text-decoration: none;
                            background: rgba(255, 255, 255, 0.02);
                            border: 1px solid transparent;
                            transition:
                                transform 0.2s ease,
                                border-color 0.2s ease,
                                background 0.2s ease,
                                color 0.2s ease;
                        }
                        .pmg-footer-home__link:hover,
                        .pmg-footer-home__social-link:hover {
                            color: #fff;
                            transform: translateX(4px);
                            border-color: rgba(78, 165, 255, 0.28);
                            background: rgba(78, 165, 255, 0.08);
                        }
                        .pmg-footer-home__info-block {
                            display: grid;
                            gap: 12px;
                        }
                        .pmg-footer-home__contact-value {
                            font-size: 1.05rem;
                            font-weight: 600;
                            color: #fff;
                            text-decoration: none;
                            word-break: break-word;
                        }
                        .pmg-footer-home__contact-meta {
                            font-size: 0.95rem;
                            color: rgba(255, 255, 255, 0.62);
                        }
                        .pmg-footer-home__mini-link {
                            display: inline-flex;
                            align-items: center;
                            width: fit-content;
                            padding-bottom: 2px;
                            font-size: 0.92rem;
                            font-weight: 500;
                            color: rgba(96, 175, 255, 0.94);
                            text-decoration: none;
                            border-bottom: 1px solid rgba(78, 165, 255, 0.24);
                            transition: color 0.2s ease, border-color 0.2s ease;
                        }
                        .pmg-footer-home__mini-link:hover {
                            color: #fff;
                            border-color: rgba(255, 255, 255, 0.42);
                        }
                        .pmg-footer-home__tape-card {
                            display: grid;
                            gap: 18px;
                        }
                        .pmg-footer-home__tape-head {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            gap: 16px;
                        }
                        .pmg-footer-home__tape-title {
                            font-size: 1.05rem;
                            font-weight: 700;
                            color: #fff;
                        }
                        .pmg-footer-home__tape-badge {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            min-height: 30px;
                            padding: 0 10px;
                            border-radius: 999px;
                            font-size: 0.72rem;
                            font-weight: 700;
                            letter-spacing: 0.14em;
                            text-transform: uppercase;
                            color: #f7fbff;
                            background: #1562a1;
                        }
                        .pmg-footer-home__tape-line {
                            display: grid;
                            grid-template-columns: repeat(21, minmax(0, 1fr));
                            align-items: end;
                            min-height: 76px;
                            gap: 4px;
                            padding: 12px 10px 10px;
                            border-radius: 16px;
                            background:
                                linear-gradient(180deg, rgba(21, 98, 161, 0.24) 0%, rgba(21, 98, 161, 0.08) 100%);
                            border: 1px solid rgba(78, 165, 255, 0.16);
                        }
                        .pmg-footer-home__tape-tick {
                            position: relative;
                            display: flex;
                            align-items: flex-end;
                            justify-content: center;
                            min-height: 52px;
                            padding: 0;
                            border: 0;
                            background: transparent;
                            cursor: pointer;
                            outline: none;
                        }
                        .pmg-footer-home__tape-tick-bar {
                            display: block;
                            width: 2px;
                            height: 18px;
                            background: #69b5ff;
                            border-radius: 999px;
                            box-shadow: 0 0 0 rgba(105, 181, 255, 0);
                            transition:
                                height 0.2s ease,
                                background 0.2s ease,
                                box-shadow 0.2s ease,
                                transform 0.2s ease;
                        }
                        .pmg-footer-home__tape-tick:nth-child(5n) .pmg-footer-home__tape-tick-bar {
                            height: 34px;
                        }
                        .pmg-footer-home__tape-tick:hover .pmg-footer-home__tape-tick-bar,
                        .pmg-footer-home__tape-tick:focus-visible .pmg-footer-home__tape-tick-bar,
                        .pmg-footer-home__tape-tick.is-active .pmg-footer-home__tape-tick-bar {
                            height: 42px;
                            background: #a9d4ff;
                            box-shadow: 0 0 16px rgba(96, 175, 255, 0.38);
                            transform: translateY(-2px);
                        }
                        .pmg-footer-home__tape-tick-label {
                            position: absolute;
                            left: 50%;
                            bottom: calc(100% + 8px);
                            padding: 4px 7px;
                            border-radius: 999px;
                            font-size: 0.58rem;
                            font-weight: 700;
                            letter-spacing: 0.08em;
                            line-height: 1;
                            color: #f7fbff;
                            white-space: nowrap;
                            background: rgba(21, 98, 161, 0.92);
                            border: 1px solid rgba(122, 187, 255, 0.28);
                            opacity: 0;
                            transform: translate(-50%, 6px);
                            pointer-events: none;
                            transition: opacity 0.2s ease, transform 0.2s ease;
                        }
                        .pmg-footer-home__tape-tick:hover .pmg-footer-home__tape-tick-label,
                        .pmg-footer-home__tape-tick:focus-visible .pmg-footer-home__tape-tick-label,
                        .pmg-footer-home__tape-tick.is-active .pmg-footer-home__tape-tick-label {
                            opacity: 1;
                            transform: translate(-50%, 0);
                        }
                        .pmg-footer-home__tape-tick:focus-visible {
                            border-radius: 10px;
                            box-shadow: inset 0 0 0 1px rgba(122, 187, 255, 0.4);
                        }
                        .pmg-footer-home__tape-copy {
                            font-size: 0.95rem;
                            line-height: 1.7;
                            color: rgba(255, 255, 255, 0.72);
                        }
                        .pmg-footer-home__bottom {
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            justify-content: space-between;
                            gap: 12px 24px;
                            margin-top: 18px;
                            padding: 18px 6px 0;
                            border-top: 1px solid rgba(255, 255, 255, 0.08);
                        }
                        .pmg-footer-home__bottom-copy {
                            font-size: 0.82rem;
                            line-height: 1.6;
                            letter-spacing: 0.02em;
                            color: rgba(255, 255, 255, 0.48);
                        }
                        @media (max-width: 1199px) {
                            .pmg-footer-home__grid {
                                grid-template-columns: 1fr 1fr;
                            }
                            .pmg-footer-home__panel--accent {
                                grid-column: 1 / -1;
                            }
                        }
                        @media (max-width: 991px) {
                            .pmg-footer-home__grid {
                                grid-template-columns: 1fr;
                            }
                        }
                        @media (max-width: 767px) {
                            .pmg-footer-home__shell {
                                padding: 18px 0 22px;
                            }
                            .pmg-footer-home__panel {
                                padding: 22px 18px;
                                border-radius: 22px;
                            }
                            .pmg-footer-home__logo {
                                height: 44px;
                            }
                            .pmg-footer-home__bottom {
                                align-items: flex-start;
                            }
                        }
                    `,
                }}
            />
        </footer>
    );
}
