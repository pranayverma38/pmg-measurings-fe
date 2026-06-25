import type { ReactNode } from "react";
import DistributorsContent from "@/components/sections/distributors/DistributorsContent";

const VALUE_DELIVERED_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

const STATS: { icon: ReactNode; label: string }[] = [
    {
        icon: VALUE_DELIVERED_ICON,
        label: "Value delivered through precision tools",
    },
    {
        icon: USERS_ICON,
        label: "Trusted users and professionals served",
    },
    {
        icon: PRODUCTS_ICON,
        label: "Products engineered for accuracy and reliability",
    },
];

export default function StatsStrip() {
    return (
        <section className="distributors-stats">
            <DistributorsContent>
                <div className="distributors-stats__grid">
                    {STATS.map((stat, index) => (
                        <div key={index} className="distributors-stats__item">
                            <div className="distributors-stats__icon">{stat.icon}</div>
                            <p className="distributors-stats__label mb-0">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </DistributorsContent>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .distributors-stats {
                            background: #fff;
                            border-top: 1px solid rgba(0, 0, 0, 0.08);
                            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
                        }
                        .distributors-stats__grid {
                            display: grid;
                            grid-template-columns: 1fr;
                            gap: 0;
                            padding: 48px 0;
                        }
                        .distributors-stats__item {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            text-align: center;
                            padding: 32px 24px;
                        }
                        .distributors-stats__item + .distributors-stats__item {
                            border-top: 1px solid rgba(0, 0, 0, 0.08);
                        }
                        .distributors-stats__icon {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin-bottom: 20px;
                            color: #111;
                        }
                        .distributors-stats__label {
                            max-width: 15rem;
                            font-size: 0.95rem;
                            font-weight: 500;
                            line-height: 1.6;
                            color: rgba(0, 0, 0, 0.62);
                        }
                        @media (min-width: 768px) {
                            .distributors-stats__grid {
                                grid-template-columns: repeat(3, 1fr);
                                padding: 56px 0;
                            }
                            .distributors-stats__item {
                                padding: 16px 32px;
                            }
                            .distributors-stats__item + .distributors-stats__item {
                                border-top: none;
                                border-left: 1px solid rgba(0, 0, 0, 0.08);
                            }
                        }
                    `,
                }}
            />
        </section>
    );
}
