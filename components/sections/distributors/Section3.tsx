import Link from "next/link";
import DistributorsContent from "@/components/sections/distributors/DistributorsContent";

// Distributors Section 3 - Distributor inquiry form

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const OFFICE_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 40V20H0L20 0L40 20V40H20Z" fill="currentColor" />
        <path d="M0 20L20 40H0V20Z" fill="currentColor" />
    </svg>
);

const REQUIREMENTS = [
    "Established wholesale or trade supply business",
    "Active sales channels in your territory",
    "Commitment to PMG brand standards",
];

export default function Section3({ classList = "" }: { classList?: string }) {
    return (
        <section
            id="distributor-inquiry"
            className={`sec-3-distributors pt-80 pb-100 ${classList}`.trim()}
        >
            <DistributorsContent>
                <div className="distributor-inquiry__intro">
                    <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                        <span className="text-uppercase">
                            <span className="text-1">Distributor Inquiry</span>
                            <span className="text-2">Distributor Inquiry</span>
                        </span>
                        <i>
                            {ARROW_SVG}
                            {ARROW_SVG}
                        </i>
                    </span>
                    <p className="fz-font-md neutral-600 mb-0 distributor-inquiry__lead">
                        Share your business details and our team will follow up with the next step.
                    </p>
                </div>

                <div className="distributor-inquiry__layout">
                    <div className="distributor-inquiry__stack">
                        <div className="distributor-inquiry__card distributor-inquiry__card--contact">
                            <div className="distributor-inquiry__contact-head">
                                <div className="distributor-inquiry__icon" aria-hidden="true">
                                    {OFFICE_ICON}
                                </div>
                                <div>
                                    <h6 className="distributor-inquiry__contact-title mb-1">Partnerships team</h6>
                                    <p className="distributor-inquiry__contact-copy mb-0">
                                        For application support and territory discussions.
                                    </p>
                                </div>
                            </div>

                            <div className="distributor-inquiry__contact-list">
                                <div className="distributor-inquiry__contact-item">
                                    <span className="distributor-inquiry__contact-label">Email</span>
                                    <Link href="mailto:pmgmeasuringtape@gmail.com" className="distributor-inquiry__contact-link">
                                        pmgmeasuringtape@gmail.com
                                    </Link>
                                </div>
                                <div className="distributor-inquiry__contact-item">
                                    <span className="distributor-inquiry__contact-label">Phone</span>
                                    <Link href="tel:9202331313" className="distributor-inquiry__contact-link">
                                        9202331313
                                    </Link>
                                </div>
                                <div className="distributor-inquiry__contact-item">
                                    <span className="distributor-inquiry__contact-label">Location</span>
                                    <span className="distributor-inquiry__contact-value">New Delhi, India</span>
                                </div>
                            </div>
                        </div>

                        <div className="distributor-inquiry__card">
                            <h6 className="distributor-inquiry__list-title mb-3">Ideal partner profile</h6>
                            <ul className="distributor-inquiry__requirements mb-0">
                                {REQUIREMENTS.map((item) => (
                                    <li key={item} className="distributor-inquiry__requirements-item">
                                        <span className="distributor-inquiry__requirements-icon" aria-hidden="true">
                                            {ARROW_SVG}
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="distributor-inquiry__form-shell">
                        <form className="distributor-inquiry__form" action="#" method="post">
                            <div className="distributor-inquiry__form-header">
                                <div>
                                    <span className="distributor-inquiry__form-kicker">Distributor application</span>
                                    <h4 className="distributor-inquiry__form-title mb-0">Tell us about your business</h4>
                                </div>
                                <p className="distributor-inquiry__form-subtitle mb-0">
                                    A few details are all we need to get started.
                                </p>
                            </div>

                            <div className="distributor-inquiry__form-grid">
                                <div className="distributor-inquiry__field">
                                    <label className="distributor-inquiry__label" htmlFor="dist-company">
                                        Company name
                                    </label>
                                    <input
                                        id="dist-company"
                                        type="text"
                                        className="distributor-inquiry__input"
                                        name="company"
                                        placeholder="Your company Ltd."
                                        autoComplete="organization"
                                        required
                                    />
                                </div>
                                <div className="distributor-inquiry__field">
                                    <label className="distributor-inquiry__label" htmlFor="dist-contact">
                                        Contact name
                                    </label>
                                    <input
                                        id="dist-contact"
                                        type="text"
                                        className="distributor-inquiry__input"
                                        name="contact_name"
                                        placeholder="John Doe"
                                        autoComplete="name"
                                        required
                                    />
                                </div>
                                <div className="distributor-inquiry__field">
                                    <label className="distributor-inquiry__label" htmlFor="dist-email">
                                        Business email
                                    </label>
                                    <input
                                        id="dist-email"
                                        type="email"
                                        className="distributor-inquiry__input"
                                        name="email"
                                        placeholder="you@company.com"
                                        autoComplete="email"
                                        required
                                    />
                                </div>
                                <div className="distributor-inquiry__field">
                                    <label className="distributor-inquiry__label" htmlFor="dist-phone">
                                        Phone number
                                    </label>
                                    <input
                                        id="dist-phone"
                                        type="tel"
                                        className="distributor-inquiry__input"
                                        name="phone"
                                        placeholder="+91 98765 43210"
                                        autoComplete="tel"
                                        required
                                    />
                                </div>
                                <div className="distributor-inquiry__field">
                                    <label className="distributor-inquiry__label" htmlFor="dist-type">
                                        Business type
                                    </label>
                                    <input
                                        id="dist-type"
                                        type="text"
                                        className="distributor-inquiry__input"
                                        name="business_type"
                                        placeholder="Wholesaler, retailer, trade supplier"
                                        required
                                    />
                                </div>
                                <div className="distributor-inquiry__field distributor-inquiry__field--full">
                                    <label className="distributor-inquiry__label" htmlFor="dist-network">
                                        Tell us about your distribution network
                                    </label>
                                    <textarea
                                        id="dist-network"
                                        className="distributor-inquiry__input distributor-inquiry__textarea"
                                        name="network"
                                        placeholder="Territories served, sales channels, years in business, and the products or brands you currently carry."
                                        rows={6}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="distributor-inquiry__actions">
                                <button type="submit" className="at-btn distributor-inquiry__submit">
                                    <span>
                                        <span className="text-1 text-capitalize">Submit inquiry</span>
                                        <span className="text-2 text-capitalize">Submit inquiry</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </button>
                            </div>

                            <p className="distributor-inquiry__disclaimer mb-0">
                                By submitting, you agree to our{" "}
                                <Link href="#" className="distributor-inquiry__inline-link">
                                    Terms
                                </Link>{" "}
                                and{" "}
                                <Link href="#" className="distributor-inquiry__inline-link">
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                        </form>
                    </div>
                </div>
            </DistributorsContent>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .sec-3-distributors {
                            padding-top: 72px !important;
                            padding-bottom: 80px !important;
                            background:
                                radial-gradient(circle at top left, rgba(240, 70, 14, 0.08), transparent 28%),
                                linear-gradient(180deg, #fff 0%, #fbf9f6 100%);
                        }
                        .distributor-inquiry__intro {
                            max-width: 52rem;
                            margin-bottom: clamp(24px, 4vw, 40px);
                        }
                        .distributor-inquiry__title {
                            letter-spacing: -0.04em;
                            margin-bottom: 14px !important;
                        }
                        .distributor-inquiry__lead {
                            max-width: 34rem;
                            line-height: 1.65;
                        }
                        .distributor-inquiry__layout {
                            display: grid;
                            grid-template-columns: 1fr;
                            gap: 20px;
                            align-items: start;
                        }
                        .distributor-inquiry__stack {
                            display: grid;
                            gap: 16px;
                        }
                        .distributor-inquiry__card,
                        .distributor-inquiry__form {
                            position: relative;
                            overflow: hidden;
                            border-radius: 24px;
                            border: 1px solid rgba(17, 17, 17, 0.08);
                            background: rgba(255, 255, 255, 0.92);
                            box-shadow: 0 18px 50px rgba(17, 17, 17, 0.06);
                        }
                        .distributor-inquiry__card {
                            padding: 24px;
                        }
                        .distributor-inquiry__card--accent {
                            background: linear-gradient(180deg, #111 0%, #1a1a1a 100%);
                            border-color: rgba(17, 17, 17, 0.96);
                            color: #fff;
                        }
                        .distributor-inquiry__card--accent::after {
                            content: "";
                            position: absolute;
                            inset: auto -8% -35% auto;
                            width: 220px;
                            height: 220px;
                            border-radius: 50%;
                            background: rgba(240, 70, 14, 0.22);
                            filter: blur(20px);
                            pointer-events: none;
                        }
                        .distributor-inquiry__eyebrow,
                        .distributor-inquiry__form-kicker {
                            display: inline-flex;
                            align-items: center;
                            padding: 8px 12px;
                            border-radius: 999px;
                            font-size: 0.75rem;
                            font-weight: 600;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                        }
                        .distributor-inquiry__eyebrow {
                            margin-bottom: 16px;
                            background: rgba(255, 255, 255, 0.08);
                            color: rgba(255, 255, 255, 0.8);
                        }
                        .distributor-inquiry__card-title {
                            margin: 0 0 10px;
                            max-width: 18ch;
                            font-size: clamp(1.35rem, 2.1vw, 1.75rem);
                            line-height: 1.15;
                            letter-spacing: -0.03em;
                            color: inherit;
                        }
                        .distributor-inquiry__card-copy {
                            max-width: 30rem;
                            font-size: 0.94rem;
                            line-height: 1.65;
                            color: rgba(255, 255, 255, 0.72);
                        }
                        .distributor-inquiry__contact-head {
                            display: flex;
                            gap: 16px;
                            align-items: flex-start;
                            margin-bottom: 18px;
                        }
                        .distributor-inquiry__icon {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 56px;
                            height: 56px;
                            border-radius: 18px;
                            background: #111;
                            color: #fff;
                            flex-shrink: 0;
                        }
                        .distributor-inquiry__icon svg {
                            width: 28px;
                            height: 28px;
                        }
                        .distributor-inquiry__contact-title,
                        .distributor-inquiry__list-title {
                            font-size: 1.15rem;
                            color: #111;
                        }
                        .distributor-inquiry__contact-copy {
                            font-size: 0.95rem;
                            line-height: 1.7;
                            color: rgba(17, 17, 17, 0.62);
                        }
                        .distributor-inquiry__contact-list {
                            display: grid;
                            gap: 12px;
                        }
                        .distributor-inquiry__contact-item {
                            display: grid;
                            gap: 4px;
                            padding-top: 12px;
                            border-top: 1px solid rgba(17, 17, 17, 0.08);
                        }
                        .distributor-inquiry__contact-label {
                            font-size: 0.75rem;
                            font-weight: 600;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                            color: rgba(17, 17, 17, 0.45);
                        }
                        .distributor-inquiry__contact-link,
                        .distributor-inquiry__contact-value {
                            color: #111;
                            font-size: 0.96rem;
                            font-weight: 500;
                            text-decoration: none;
                            word-break: break-word;
                        }
                        .distributor-inquiry__contact-link:hover {
                            color: #F0460E;
                        }
                        .distributor-inquiry__requirements {
                            display: grid;
                            gap: 10px;
                            list-style: none;
                            padding: 0;
                        }
                        .distributor-inquiry__requirements-item {
                            display: grid;
                            grid-template-columns: auto 1fr;
                            gap: 12px;
                            align-items: start;
                            padding: 10px 0;
                            border-top: 1px solid rgba(17, 17, 17, 0.08);
                            font-size: 0.93rem;
                            line-height: 1.5;
                            color: rgba(17, 17, 17, 0.7);
                        }
                        .distributor-inquiry__requirements-item:first-child {
                            padding-top: 0;
                            border-top: none;
                        }
                        .distributor-inquiry__requirements-icon {
                            display: inline-flex;
                            margin-top: 3px;
                            color: #F0460E;
                        }
                        .distributor-inquiry__form-shell {
                            min-width: 0;
                        }
                        .distributor-inquiry__form {
                            padding: clamp(22px, 3vw, 30px);
                        }
                        .distributor-inquiry__form-header {
                            display: grid;
                            gap: 14px;
                            margin-bottom: 22px;
                            padding-bottom: 18px;
                            border-bottom: 1px solid rgba(17, 17, 17, 0.08);
                        }
                        .distributor-inquiry__form-kicker {
                            margin-bottom: 14px;
                            background: rgba(32, 140, 86, 0.12);
                            color: #1E7A4E;
                        }
                        .distributor-inquiry__form-title {
                            font-size: clamp(1.55rem, 2.2vw, 2rem);
                            line-height: 1.1;
                            letter-spacing: -0.03em;
                            color: #111;
                        }
                        .distributor-inquiry__form-subtitle {
                            max-width: 28rem;
                            font-size: 0.93rem;
                            line-height: 1.6;
                            color: rgba(17, 17, 17, 0.62);
                        }
                        .distributor-inquiry__form-grid {
                            display: grid;
                            grid-template-columns: 1fr;
                            gap: 14px;
                        }
                        .distributor-inquiry__field {
                            min-width: 0;
                        }
                        .distributor-inquiry__label {
                            display: inline-block;
                            margin-bottom: 8px;
                            font-size: 0.79rem;
                            font-weight: 600;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                            color: rgba(17, 17, 17, 0.58);
                        }
                        .distributor-inquiry__input {
                            width: 100%;
                            min-width: 0;
                            min-height: 52px;
                            padding: 0 16px;
                            border: 1px solid rgba(17, 17, 17, 0.1);
                            border-radius: 16px;
                            background: #f7f6f3;
                            font-size: 0.94rem;
                            color: #111;
                            transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
                        }
                        .distributor-inquiry__input::placeholder {
                            color: rgba(17, 17, 17, 0.38);
                        }
                        .distributor-inquiry__input:hover {
                            background: #f3f1ee;
                        }
                        .distributor-inquiry__input:focus {
                            outline: none;
                            border-color: rgba(240, 70, 14, 0.5);
                            background: #fff;
                            box-shadow: 0 0 0 4px rgba(240, 70, 14, 0.12);
                        }
                        .distributor-inquiry__textarea {
                            min-height: 144px;
                            padding: 14px 16px;
                            resize: vertical;
                        }
                        .distributor-inquiry__actions {
                            display: flex;
                            flex-direction: column;
                            gap: 12px;
                            align-items: flex-start;
                            margin-top: 20px;
                        }
                        .distributor-inquiry__submit {
                            display: inline-flex;
                        }
                        .distributor-inquiry__disclaimer {
                            font-size: 0.9rem;
                            line-height: 1.7;
                            color: rgba(17, 17, 17, 0.55);
                        }
                        .distributor-inquiry__disclaimer {
                            margin-top: 14px;
                        }
                        .distributor-inquiry__inline-link {
                            color: #111;
                            text-decoration: underline;
                            text-underline-offset: 3px;
                        }
                        .distributor-inquiry__inline-link:hover {
                            color: #F0460E;
                        }
                        @media (min-width: 768px) {
                            .distributor-inquiry__form-grid {
                                grid-template-columns: repeat(2, minmax(0, 1fr));
                            }
                            .distributor-inquiry__field--full {
                                grid-column: 1 / -1;
                            }
                            .distributor-inquiry__actions {
                                flex-direction: row;
                                align-items: center;
                            }
                        }
                        @media (min-width: 992px) {
                            .distributor-inquiry__layout {
                                grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
                                gap: 32px;
                            }
                            .distributor-inquiry__form-shell {
                                position: sticky;
                                top: 24px;
                            }
                        }
                    `,
                }}
            />
        </section>
    );
}
