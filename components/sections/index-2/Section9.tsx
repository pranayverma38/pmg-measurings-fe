import type { ReactNode } from "react";

const VALUE_DELIVERED_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 19V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 7H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 11H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 19V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 19H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 9.5V10.5M11 9.5V10.5M14 9.5V10.5M17 9.5V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path
            d="M17 5.5L19.5 8L17 10.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const USERS_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path
            d="M3.5 19.5C3.5 16.1863 5.96243 14 9 14C12.0376 14 14.5 16.1863 14.5 19.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
        <circle cx="16.5" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path
            d="M14.5 19.5C14.5 17.2909 16.067 15.5 18 15.5C19.933 15.5 21.5 17.2909 21.5 19.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
    </svg>
);

const PRODUCTS_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
            d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
        <path d="M12 12L20 7.5M12 12V21M12 12L4 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);

const STATS: { icon: ReactNode; label: ReactNode }[] = [
    {
        icon: VALUE_DELIVERED_ICON,
        label: (
            <>
                Value delivered through <br /> precision tools
            </>
        ),
    },
    {
        icon: USERS_ICON,
        label: (
            <>
                Trusted users and <br /> professionals served
            </>
        ),
    },
    {
        icon: PRODUCTS_ICON,
        label: (
            <>
                Products engineered for <br /> accuracy and reliability
            </>
        ),
    },
];

export default function Section9() {
    return (
        <section className="home-2-section-9 at-item-anime-area">
            <div className="container pt-100 pb-100">
                <div className="row justify-content-center">
                    {STATS.map((stat, index) => (
                        <div
                            key={index}
                            className="col-lg-4 col-md-6 col-6 text-center"
                        >
                            <div className="home-2-section-9__icon d-flex justify-content-center mb-3">
                                {stat.icon}
                            </div>
                            <h6 className="fw-500">{stat.label}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
