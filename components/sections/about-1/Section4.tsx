import Link from "next/link";
import RevealText from "@/components/effects/RevealText";

// About 1 Section 4 - Contact Us / Get in touch

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const OFFICE_ICON_1 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 40V20H0L20 0L40 20V40H20Z" fill="currentColor" />
        <path d="M0 20L20 40H0V20Z" fill="currentColor" />
    </svg>
);

const SOCIAL_ITEMS = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/pmg.tapes?igsh=MXEwMG1sMTQ4Y3h3bQ%3D%3D&utm_source=qr",
        ariaLabel: "Instagram",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path
                    d="M9.92475 0C10.9376 0.00167406 11.4509 0.00703828 11.8945 0.0202418L12.0692 0.025948C12.2709 0.0331213 12.47 0.0421215 12.7101 0.0533719C13.6678 0.0976265 14.3211 0.249129 14.8949 0.471887C15.4881 0.700648 15.9892 1.00966 16.4894 1.50993C16.9889 2.0102 17.298 2.51271 17.5275 3.10448C17.7494 3.67751 17.901 4.33153 17.946 5.28931C17.9567 5.52933 17.9653 5.72841 17.9725 5.93024L17.9781 6.10492C17.9913 6.5484 17.9973 7.06177 17.9992 8.07471L17.9999 8.74577C18 8.82777 18 8.91237 18 8.99967L17.9999 9.25357L17.9994 9.92472C17.9977 10.9376 17.9923 11.451 17.9791 11.8944L17.9734 12.0691C17.9662 12.271 17.9572 12.4701 17.946 12.7101C17.9017 13.6679 17.7494 14.3211 17.5275 14.8949C17.2987 15.4882 16.9889 15.9892 16.4894 16.4895C15.9892 16.989 15.4859 17.298 14.8949 17.5275C14.3211 17.7495 13.6678 17.901 12.7101 17.946C12.47 17.9567 12.2709 17.9654 12.0692 17.9725L11.8945 17.9781C11.4509 17.9914 10.9376 17.9973 9.92475 17.9993L9.25359 18C9.1716 18 9.087 18 8.99969 18H8.7458L8.07464 17.9994C7.06175 17.9977 6.54839 17.9924 6.1049 17.9791L5.93022 17.9734C5.72839 17.9662 5.5293 17.9572 5.2893 17.946C4.33151 17.9018 3.67899 17.7495 3.10448 17.5275C2.51195 17.2988 2.01018 16.989 1.50992 16.4895C1.00965 15.9892 0.701394 15.4859 0.471886 14.8949C0.249129 14.3211 0.0983735 13.6679 0.053372 12.7101C0.0426796 12.4701 0.0339582 12.271 0.026893 12.0691L0.0212318 11.8944C0.00806435 11.451 0.00206123 10.9376 0.000117163 9.92472L0 8.07471C0.00167406 7.06177 0.00702925 6.5484 0.0202327 6.10492L0.0259479 5.93024C0.0331212 5.72841 0.0421216 5.52933 0.053372 5.28931C0.0976175 4.33078 0.249129 3.67825 0.471886 3.10448C0.700638 2.51196 1.00965 2.0102 1.50992 1.50993C2.01018 1.00966 2.51271 0.701396 3.10448 0.471887C3.67825 0.249129 4.33077 0.0983735 5.2893 0.0533719C5.5293 0.0426885 5.72839 0.0339673 5.93022 0.026902L6.1049 0.0212407C6.54839 0.00806417 7.06175 0.00206102 8.07464 0.000116949L9.92475 0ZM8.99969 4.49953C6.51298 4.49953 4.49952 6.51518 4.49952 8.99967C4.49952 11.4864 6.51517 13.4998 8.99969 13.4998C11.4864 13.4998 13.4998 11.4842 13.4998 8.99967C13.4998 6.513 11.4841 4.49953 8.99969 4.49953ZM8.99969 6.2996C10.491 6.2996 11.6998 7.50805 11.6998 8.99967C11.6998 10.4909 10.4913 11.6998 8.99969 11.6998C7.50843 11.6998 6.29958 10.4914 6.29958 8.99967C6.29958 7.50841 7.50798 6.2996 8.99969 6.2996ZM13.7249 3.14949C13.1045 3.14949 12.5998 3.65342 12.5998 4.27376C12.5998 4.89411 13.1037 5.39882 13.7249 5.39882C14.3452 5.39882 14.8499 4.89489 14.8499 4.27376C14.8499 3.65342 14.3443 3.14871 13.7249 3.14949Z"
                    fill="currentColor"
                />
            </svg>
        ),
    },
    {
        label: "Youtube",
        href: "https://youtube.com/@primemistrigold?si=xp9u-5_G9FvX-Lod",
        ariaLabel: "Youtube",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none" aria-hidden>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0322 0.388283C16.8071 0.602295 17.4162 1.23059 17.6237 2.03009C17.9985 3.47775 18 6.49997 18 6.49997C18 6.49997 18 9.52214 17.6237 10.9698C17.4162 11.7694 16.8071 12.3977 16.0322 12.6116C14.6291 13 8.99997 13 8.99997 13C8.99997 13 3.37092 13 1.96772 12.6116C1.1928 12.3977 0.583804 11.7694 0.376354 10.9698C-3.83173e-08 9.52214 0 6.49997 0 6.49997C0 6.49997 -3.83173e-08 3.47775 0.376354 2.03009C0.583804 1.23059 1.1928 0.602295 1.96772 0.388283C3.37092 1.18595e-07 8.99997 0 8.99997 0C8.99997 0 14.6291 1.18595e-07 16.0322 0.388283ZM11.8751 6.50027L7.19879 9.2855V3.71499L11.8751 6.50027Z"
                    fill="currentColor"
                />
            </svg>
        ),
    },
];

const OFFICES = [
    {
        icon: OFFICE_ICON_1,
        title: "Office",
        address: "205 North Michigan Avenue, Suite 810",
        city: "Chicago, 60601, USA",
        phone: "+1234567890",
        phoneHref: "tel:+1234567890",
        email: "hello@orisa.com",
        emailHref: "mailto:hello@orisa.com",
    },
];

export default function Section4({ classList = "" }: { classList?: string }) {
    return (
        <section className={`sec-4-about pt-120 pb-120 ${classList}`.trim()}>
            <div className="sec-4-about__inner">
                <div className="row g-4 align-items-start">
                    <div className="col-xxl-4 col-lg-5 sec-4-about__info">
                        <h1 className="alt-section-title fz-ds-1 lh-1 fw-500 mb-40 reveal-text">
                            <RevealText>Get in touch</RevealText>
                        </h1>
                        <div className="row g-4">
                            {OFFICES.map((office, i) => (
                                <div key={i} className="col-lg-12 col-md-6">
                                    <div className="sec-4-about__office d-flex gap-4">
                                        <div className="icon">{office.icon}</div>
                                        <div>
                                            <h6 className="fw-600">{office.title}</h6>
                                            <div className="d-flex flex-wrap gap-md-5 gap-4">
                                                <span className="fz-font-md neutral-500">
                                                    {office.address}
                                                    <br className="d-block" />
                                                    {office.city}
                                                    <br className="d-block" />
                                                    Phone:{" "}
                                                    <span className="neutral-900">
                                                        <Link href={office.phoneHref}>{office.phone}</Link>
                                                    </span>
                                                    <br className="d-block" />
                                                    Email:{" "}
                                                    <span className="neutral-900">
                                                        <Link href={office.emailHref}>{office.email}</Link>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <ul className="at-social-list list-unstyled d-flex flex-wrap gap-md-4 gap-3 pt-50 sec-4-about__social">
                            {SOCIAL_ITEMS.map((item, i) => (
                                <li key={i}>
                                    <Link
                                        href={item.href}
                                        className="at-social__link d-flex align-items-center gap-2"
                                        aria-label={item.ariaLabel}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.icon}
                                        <span className="fw-500">{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-xxl-8 col-lg-7 ms-auto">
                        <div className="sec-4-about-form-wrap">
                            <form className="sec-4-about-form sec-4-about-form--boxed" action="#" method="post">
                                <div className="sec-4-about-form__header">
                                    <h4 className="sec-4-about-form__title mb-0">Send us a message</h4>
                                    <p className="sec-4-about-form__subtitle mb-0">
                                        Tell us about your project and we&apos;ll reply within 1–2 business days.
                                    </p>
                                </div>

                                <div className="sec-4-about-form__grid">
                                    <div className="sec-4-about-form__field">
                                        <label className="sec-4-about-form__label" htmlFor="about-name">
                                            Full name
                                        </label>
                                        <input
                                            id="about-name"
                                            type="text"
                                            className="sec-4-about-form__input"
                                            name="name"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div className="sec-4-about-form__field">
                                        <label className="sec-4-about-form__label" htmlFor="about-email">
                                            Email address
                                        </label>
                                        <input
                                            id="about-email"
                                            type="email"
                                            className="sec-4-about-form__input"
                                            name="email"
                                            placeholder="you@company.com"
                                            required
                                        />
                                    </div>
                                    <div className="sec-4-about-form__field sec-4-about-form__field--full">
                                        <label className="sec-4-about-form__label" htmlFor="about-phone">
                                            Phone number
                                        </label>
                                        <input
                                            id="about-phone"
                                            type="tel"
                                            className="sec-4-about-form__input"
                                            name="phone"
                                            placeholder="+1 (555) 000-0000"
                                            required
                                        />
                                    </div>
                                    <div className="sec-4-about-form__field sec-4-about-form__field--full">
                                        <label className="sec-4-about-form__label" htmlFor="about-message">
                                            Message
                                        </label>
                                        <textarea
                                            id="about-message"
                                            className="sec-4-about-form__input sec-4-about-form__textarea"
                                            name="message"
                                            placeholder="How can we help you?"
                                            rows={5}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="sec-4-about-form__actions">
                                    <button type="submit" className="sec-4-about-form__btn at-btn">
                                        <span>
                                            <span className="text-1 text-capitalize">Send Message</span>
                                            <span className="text-2 text-capitalize">Send Message</span>
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
            </div>
        </section>
    );
}
