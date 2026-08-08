import Link from "next/link";
import RevealText from "@/components/effects/RevealText";
import PageContent from "@/components/shared/PageContent";

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
        label: "Facebook",
        href: "#",
        ariaLabel: "Facebook",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path
                    d="M12.4024 18V11.0344H14.7347L15.0838 8.3265H12.4024V6.59765C12.4024 5.81364 12.62 5.27934 13.7443 5.27934L15.1783 5.27867V2.85676C14.9302 2.82382 14.0791 2.75006 13.0888 2.75006C11.0213 2.75006 9.606 4.01198 9.606 6.32952V8.3265H7.2677V11.0344H9.606V18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0H17C17.5523 0 18 0.44772 18 1V17C18 17.5523 17.5523 18 17 18H12.4024Z"
                    fill="currentColor"
                />
            </svg>
        ),
    },
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
        address: "New Delhi, India",
        email: "pmgmeasuringtape@gmail.com",
        emailHref: "mailto:pmgmeasuringtape@gmail.com",
    },
];

export default function Section4({ classList = "" }: { classList?: string }) {
    return (
        <section className={`sec-4-about pt-80 pb-100 ${classList}`.trim()}>
            <PageContent>
                <div className="about-contact">
                    <div className="about-contact__intro">
                        <h2 className="alt-section-title fz-ds-1 lh-1 fw-500 mb-20 reveal-text about-contact__title">
                            <RevealText>Get in touch</RevealText>
                        </h2>
                        <p className="fz-font-md neutral-600 mb-0 about-contact__lead">
                            Whether you&apos;re exploring a product, a retail partnership, or a custom
                            requirement, share a few details and our team will get back within 1-2
                            business days.
                        </p>
                    </div>

                    <div className="about-contact__layout">
                        <div className="about-contact__stack">
                            {OFFICES.map((office, i) => (
                                <div key={i} className="about-contact__card about-contact__card--contact">
                                    <div className="about-contact__contact-head">
                                        <div className="about-contact__icon" aria-hidden="true">
                                            {office.icon}
                                        </div>
                                        <div>
                                            <span className="about-contact__eyebrow">Direct support</span>
                                            <h6 className="about-contact__card-title mb-1">{office.title}</h6>
                                            <p className="about-contact__card-copy mb-0">
                                                Reach the PMG team for product questions, dealership
                                                conversations, and order-related assistance.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="about-contact__contact-list">
                                        <div className="about-contact__contact-item">
                                            <span className="about-contact__contact-label">Email</span>
                                            <Link href={office.emailHref} className="about-contact__contact-link">
                                                {office.email}
                                            </Link>
                                        </div>
                                        <div className="about-contact__contact-item">
                                            <span className="about-contact__contact-label">Phone</span>
                                            <Link href="tel:9202331313" className="about-contact__contact-link">
                                                9202331313
                                            </Link>
                                        </div>
                                        <div className="about-contact__contact-item">
                                            <span className="about-contact__contact-label">Location</span>
                                            <span className="about-contact__contact-value">{office.address}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="about-contact__card">
                                <span className="about-contact__eyebrow about-contact__eyebrow--muted">
                                    Why reach out
                                </span>
                                <ul className="about-contact__highlights mb-0">
                                    <li className="about-contact__highlights-item">
                                        <span className="about-contact__highlights-icon" aria-hidden="true">
                                            {ARROW_SVG}
                                        </span>
                                        <span>Request product information, catalogs, or sampling support.</span>
                                    </li>
                                    <li className="about-contact__highlights-item">
                                        <span className="about-contact__highlights-icon" aria-hidden="true">
                                            {ARROW_SVG}
                                        </span>
                                        <span>Start a dealership, distribution, or B2B sourcing conversation.</span>
                                    </li>
                                </ul>

                                <ul className="about-contact__social-list list-unstyled mb-0">
                                    {SOCIAL_ITEMS.map((item, i) => (
                                        <li key={i}>
                                            <Link
                                                href={item.href}
                                                className="about-contact__social-link"
                                                aria-label={item.ariaLabel}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span className="about-contact__social-icon" aria-hidden="true">
                                                    {item.icon}
                                                </span>
                                                <span className="visually-hidden">{item.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="about-contact__form-shell">
                            <form className="about-contact__form" action="#" method="post">
                                <div className="about-contact__form-header">
                                    <div>
                                        <span className="about-contact__form-kicker">General inquiry</span>
                                        <h4 className="about-contact__form-title mb-0">
                                            Tell us what you need
                                        </h4>
                                    </div>
                                    <p className="about-contact__form-subtitle mb-0">
                                        Share your details and message below. We&apos;ll route it to the
                                        right PMG team and follow up shortly.
                                    </p>
                                </div>

                                <div className="about-contact__form-grid">
                                    <div className="about-contact__field">
                                        <label className="about-contact__label" htmlFor="about-name">
                                            Full name
                                        </label>
                                        <input
                                            id="about-name"
                                            type="text"
                                            className="about-contact__input"
                                            name="name"
                                            placeholder="John Doe"
                                            autoComplete="name"
                                            required
                                        />
                                    </div>
                                    <div className="about-contact__field">
                                        <label className="about-contact__label" htmlFor="about-email">
                                            Email address
                                        </label>
                                        <input
                                            id="about-email"
                                            type="email"
                                            className="about-contact__input"
                                            name="email"
                                            placeholder="you@company.com"
                                            autoComplete="email"
                                            required
                                        />
                                    </div>
                                    <div className="about-contact__field">
                                        <label className="about-contact__label" htmlFor="about-phone">
                                            Phone number
                                        </label>
                                        <input
                                            id="about-phone"
                                            type="tel"
                                            className="about-contact__input"
                                            name="phone"
                                            placeholder="+91 98765 43210"
                                            autoComplete="tel"
                                        />
                                    </div>
                                    <div className="about-contact__field">
                                        <label className="about-contact__label" htmlFor="about-subject">
                                            Subject
                                        </label>
                                        <input
                                            id="about-subject"
                                            type="text"
                                            className="about-contact__input"
                                            name="subject"
                                            placeholder="Product inquiry, partnership, support"
                                            required
                                        />
                                    </div>
                                    <div className="about-contact__field about-contact__field--full">
                                        <label className="about-contact__label" htmlFor="about-message">
                                            Message
                                        </label>
                                        <textarea
                                            id="about-message"
                                            className="about-contact__input about-contact__textarea"
                                            name="message"
                                            placeholder="Tell us a little about your requirement, product interest, or business inquiry."
                                            rows={6}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="about-contact__actions">
                                    <button type="submit" className="at-btn about-contact__submit">
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

                            </form>
                        </div>
                    </div>
                </div>
            </PageContent>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .sec-4-about {
                            background:
                                radial-gradient(circle at top left, rgba(21, 98, 161, 0.08), transparent 28%),
                                linear-gradient(180deg, #fff 0%, #fbf9f6 100%);
                        }
                        .about-contact__intro {
                            max-width: 56rem;
                            margin-bottom: clamp(24px, 4vw, 40px);
                        }
                        .about-contact__title {
                            letter-spacing: -0.04em;
                        }
                        .about-contact__lead {
                            max-width: 40rem;
                            line-height: 1.65;
                        }
                        .about-contact__layout {
                            display: grid;
                            grid-template-columns: 1fr;
                            gap: 20px;
                            align-items: start;
                        }
                        .about-contact__stack {
                            display: grid;
                            gap: 16px;
                        }
                        .about-contact__card,
                        .about-contact__form {
                            position: relative;
                            overflow: hidden;
                            border-radius: 24px;
                            border: 1px solid rgba(17, 17, 17, 0.08);
                            background: rgba(255, 255, 255, 0.92);
                            box-shadow: 0 18px 50px rgba(17, 17, 17, 0.06);
                        }
                        .about-contact__card {
                            padding: 24px;
                        }
                        .about-contact__eyebrow,
                        .about-contact__form-kicker {
                            display: inline-flex;
                            align-items: center;
                            padding: 8px 12px;
                            border-radius: 999px;
                            font-size: 0.75rem;
                            font-weight: 600;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                        }
                        .about-contact__eyebrow {
                            margin-bottom: 14px;
                            background: rgba(21, 98, 161, 0.1);
                            color: #1562a1;
                        }
                        .about-contact__eyebrow--muted {
                            background: rgba(17, 17, 17, 0.06);
                            color: rgba(17, 17, 17, 0.72);
                        }
                        .about-contact__contact-head {
                            display: flex;
                            gap: 16px;
                            align-items: flex-start;
                            margin-bottom: 18px;
                        }
                        .about-contact__icon {
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
                        .about-contact__icon svg {
                            width: 28px;
                            height: 28px;
                        }
                        .about-contact__card-title {
                            font-size: 1.15rem;
                            color: #111;
                        }
                        .about-contact__card-copy {
                            max-width: 28rem;
                            font-size: 0.95rem;
                            line-height: 1.7;
                            color: rgba(17, 17, 17, 0.62);
                        }
                        .about-contact__contact-list {
                            display: grid;
                            gap: 12px;
                        }
                        .about-contact__contact-item {
                            display: grid;
                            gap: 4px;
                            padding-top: 12px;
                            border-top: 1px solid rgba(17, 17, 17, 0.08);
                        }
                        .about-contact__contact-label {
                            font-size: 0.75rem;
                            font-weight: 600;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                            color: rgba(17, 17, 17, 0.45);
                        }
                        .about-contact__contact-link,
                        .about-contact__contact-value {
                            color: #111;
                            font-size: 0.96rem;
                            font-weight: 500;
                            text-decoration: none;
                            word-break: break-word;
                        }
                        .about-contact__contact-link:hover,
                        .about-contact__social-link:hover {
                            color: #1562a1;
                        }
                        .about-contact__highlights {
                            display: grid;
                            gap: 10px;
                            padding: 0;
                            list-style: none;
                        }
                        .about-contact__highlights-item {
                            display: grid;
                            grid-template-columns: auto 1fr;
                            gap: 12px;
                            align-items: start;
                            padding: 10px 0;
                            border-top: 1px solid rgba(17, 17, 17, 0.08);
                            font-size: 0.93rem;
                            line-height: 1.55;
                            color: rgba(17, 17, 17, 0.7);
                        }
                        .about-contact__highlights-item:first-child {
                            padding-top: 0;
                            border-top: none;
                        }
                        .about-contact__highlights-icon {
                            display: inline-flex;
                            margin-top: 3px;
                            color: #1562a1;
                        }
                        .about-contact__social-list {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 12px;
                            margin-top: 20px;
                            padding-top: 20px;
                            border-top: 1px solid rgba(17, 17, 17, 0.08);
                        }
                        .about-contact__social-link {
                            display: inline-flex;
                            align-items: center;
                            color: #111;
                            text-decoration: none;
                            transition: color 0.2s ease;
                        }
                        .about-contact__social-icon {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            width: 42px;
                            height: 42px;
                            border-radius: 50%;
                            background: #f5f3ef;
                            transition: background 0.2s ease, transform 0.2s ease;
                        }
                        .about-contact__social-link:hover .about-contact__social-icon {
                            background: #eef4fa;
                            transform: translateY(-1px);
                        }
                        .about-contact__form-shell {
                            min-width: 0;
                        }
                        .about-contact__form {
                            padding: clamp(22px, 3vw, 30px);
                        }
                        .about-contact__form-header {
                            display: grid;
                            gap: 14px;
                            margin-bottom: 22px;
                            padding-bottom: 18px;
                            border-bottom: 1px solid rgba(17, 17, 17, 0.08);
                        }
                        .about-contact__form-kicker {
                            margin-bottom: 14px;
                            background: rgba(32, 140, 86, 0.12);
                            color: #1e7a4e;
                        }
                        .about-contact__form-title {
                            font-size: clamp(1.55rem, 2.2vw, 2rem);
                            line-height: 1.1;
                            letter-spacing: -0.03em;
                            color: #111;
                        }
                        .about-contact__form-subtitle {
                            max-width: 28rem;
                            font-size: 0.93rem;
                            line-height: 1.6;
                            color: rgba(17, 17, 17, 0.62);
                        }
                        .about-contact__form-grid {
                            display: grid;
                            grid-template-columns: 1fr;
                            gap: 14px;
                        }
                        .about-contact__field {
                            min-width: 0;
                        }
                        .about-contact__label {
                            display: inline-block;
                            margin-bottom: 8px;
                            font-size: 0.79rem;
                            font-weight: 600;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                            color: rgba(17, 17, 17, 0.58);
                        }
                        .about-contact__input {
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
                        .about-contact__input::placeholder {
                            color: rgba(17, 17, 17, 0.38);
                        }
                        .about-contact__input:hover {
                            background: #f3f1ee;
                        }
                        .about-contact__input:focus {
                            outline: none;
                            border-color: rgba(21, 98, 161, 0.5);
                            background: #fff;
                            box-shadow: 0 0 0 4px rgba(21, 98, 161, 0.12);
                        }
                        .about-contact__textarea {
                            min-height: 148px;
                            padding: 14px 16px;
                            resize: vertical;
                        }
                        .about-contact__actions {
                            display: flex;
                            align-items: center;
                            margin-top: 20px;
                        }
                        .about-contact__submit {
                            display: inline-flex;
                        }
                        @media (min-width: 768px) {
                            .about-contact__form-grid {
                                grid-template-columns: repeat(2, minmax(0, 1fr));
                            }
                            .about-contact__field--full {
                                grid-column: 1 / -1;
                            }
                        }
                        @media (min-width: 992px) {
                            .about-contact__layout {
                                grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
                                gap: 32px;
                            }
                            .about-contact__form-shell {
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
