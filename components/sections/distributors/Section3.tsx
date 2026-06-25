import Link from "next/link";
import RevealText from "@/components/effects/RevealText";
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
    "Established wholesale, retail, or trade supply business",
    "Minimum 2 years operating in hardware or industrial tools",
    "Active sales channels in your proposed territory",
    "Commitment to PMG brand standards and merchandising",
];

export default function Section3({ classList = "" }: { classList?: string }) {
    return (
        <section
            id="distributor-inquiry"
            className={`sec-3-distributors pt-80 pb-100 ${classList}`.trim()}
        >
            <DistributorsContent>
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
                <h2 className="alt-section-title fz-ds-1 lh-1 fw-500 mb-20 reveal-text">
                    <RevealText>Begin your partnership</RevealText>
                </h2>
                <p className="fz-font-md neutral-600 mb-50">
                    Expand your hardware network with PMG. Submit your business details below to begin our
                    partnership process and secure your exclusive distributor status.
                </p>

                <div className="row g-5">
                    <div className="col-lg-5">
                        <div className="sec-4-about__office d-flex gap-4 mb-40">
                            <div className="icon flex-shrink-0">{OFFICE_ICON}</div>
                            <div>
                                <h6 className="fw-600">Partnerships team</h6>
                                <span className="fz-font-md neutral-500">
                                    We review applications within 3–5 business days.
                                    <br className="d-block" />
                                    Email:{" "}
                                    <span className="neutral-900">
                                        <Link href="mailto:partners@pmgprecision.com">partners@pmgprecision.com</Link>
                                    </span>
                                </span>
                            </div>
                        </div>

                        <h6 className="fw-600 mb-3">Ideal partner profile</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                            {REQUIREMENTS.map((item) => (
                                <li key={item} className="d-flex align-items-start gap-2 fz-font-md neutral-600">
                                    <span className="neutral-900 mt-1 flex-shrink-0" aria-hidden="true">
                                        {ARROW_SVG}
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-7">
                        <div className="sec-4-about-form-wrap">
                            <form className="sec-4-about-form sec-4-about-form--boxed" action="#" method="post">
                                <div className="sec-4-about-form__header">
                                    <h4 className="sec-4-about-form__title mb-0">Distributor application</h4>
                                    <p className="sec-4-about-form__subtitle mb-0">
                                        Complete the form and our partnerships team will be in touch shortly.
                                    </p>
                                </div>

                                <div className="sec-4-about-form__grid">
                                    <div className="sec-4-about-form__field">
                                        <label className="sec-4-about-form__label" htmlFor="dist-company">
                                            Company name
                                        </label>
                                        <input
                                            id="dist-company"
                                            type="text"
                                            className="sec-4-about-form__input"
                                            name="company"
                                            placeholder="Your company Ltd."
                                            required
                                        />
                                    </div>
                                    <div className="sec-4-about-form__field">
                                        <label className="sec-4-about-form__label" htmlFor="dist-contact">
                                            Contact name
                                        </label>
                                        <input
                                            id="dist-contact"
                                            type="text"
                                            className="sec-4-about-form__input"
                                            name="contact_name"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div className="sec-4-about-form__field">
                                        <label className="sec-4-about-form__label" htmlFor="dist-email">
                                            Business email
                                        </label>
                                        <input
                                            id="dist-email"
                                            type="email"
                                            className="sec-4-about-form__input"
                                            name="email"
                                            placeholder="you@company.com"
                                            required
                                        />
                                    </div>
                                    <div className="sec-4-about-form__field">
                                        <label className="sec-4-about-form__label" htmlFor="dist-phone">
                                            Phone number
                                        </label>
                                        <input
                                            id="dist-phone"
                                            type="tel"
                                            className="sec-4-about-form__input"
                                            name="phone"
                                            placeholder="+44 20 1234 5678"
                                            required
                                        />
                                    </div>
                                    <div className="sec-4-about-form__field">
                                        <label className="sec-4-about-form__label" htmlFor="dist-country">
                                            Country / region
                                        </label>
                                        <input
                                            id="dist-country"
                                            type="text"
                                            className="sec-4-about-form__input"
                                            name="country"
                                            placeholder="United Kingdom"
                                            required
                                        />
                                    </div>
                                    <div className="sec-4-about-form__field">
                                        <label className="sec-4-about-form__label" htmlFor="dist-type">
                                            Business type
                                        </label>
                                        <input
                                            id="dist-type"
                                            type="text"
                                            className="sec-4-about-form__input"
                                            name="business_type"
                                            placeholder="Wholesaler, retailer, trade supplier..."
                                            required
                                        />
                                    </div>
                                    <div className="sec-4-about-form__field sec-4-about-form__field--full">
                                        <label className="sec-4-about-form__label" htmlFor="dist-network">
                                            Tell us about your distribution network
                                        </label>
                                        <textarea
                                            id="dist-network"
                                            className="sec-4-about-form__input sec-4-about-form__textarea"
                                            name="network"
                                            placeholder="Territories served, sales channels, years in business, current brands carried..."
                                            rows={5}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="sec-4-about-form__actions">
                                    <button type="submit" className="sec-4-about-form__btn at-btn">
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
                                <p className="sec-4-about-form__disclaimer">
                                    By submitting, you agree to our{" "}
                                    <Link href="#" className="sec-4-about-form__link">
                                        Terms
                                    </Link>{" "}
                                    and{" "}
                                    <Link href="#" className="sec-4-about-form__link">
                                        Privacy Policy
                                    </Link>
                                    .
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </DistributorsContent>
        </section>
    );
}
