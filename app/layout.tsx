import React from "react";
import "@/public/assets/css/vendors/bootstrap.min.css";
import "@/public/assets/css/vendors/swiper-bundle.min.css";
import "@/public/assets/css/vendors/nice-select.css";
import "@/public/assets/css/vendors/magnific-popup.css";
import "@/public/assets/css/vendors/odometer.css";
import "@/public/assets/css/vendors/spacing.css";


import "@/public/assets/css/main.css";
import "@/public/assets/css/sticky-cards.css";

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import WebsiteActiveGuard from "@/components/WebsiteActiveGuard";

const dmSans = DM_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--at-ff-body",
});

const SITE_TITLE = "PMG Measurings - Best in class measuring tapes";
const SITE_DESCRIPTION =
    "PMG is a trusted measuring tools brand offering high-quality, durable, and precise measuring tapes for professionals and everyday use. Built with a focus on accuracy, innovation, and reliability, PMG products feature advanced locking systems, ergonomic design, and long-lasting materials. From compact tapes to professional-grade solutions, PMG ensures dependable performance for construction, workshops, and industrial applications.";

export const metadata: Metadata = {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    icons: {
        icon: "/assets/imgs/pmgfavicon/pmg-favicon.png",
        apple: "/assets/imgs/pmgfavicon/pmg-favicon.png",
    },
    openGraph: {
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        siteName: "PMG Measurings",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isWebsiteActive = process.env.WEBSITE_ACTIVE !== "false";

    return (
        <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
            <head>
                {/* Vendor bundle path; matches original HTML template */}
                {/* eslint-disable-next-line @next/next/no-css-tags */}
                <link
                    href="/assets/css/vendors/font-awesome-pro.css"
                    rel="stylesheet"
                />
                {!isWebsiteActive && (
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `if(window.location.pathname!=="/coming-soon"){window.location.replace("/coming-soon");}`,
                        }}
                    />
                )}
                {/* Blocking theme init before paint; App Router has no pages/_document for beforeInteractive Script */}
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script src="/scripts/theme-init.js" />
            </head>
            <body className={`${dmSans.variable}`}>
                <div className="px-blur-bottom"></div>
                <WebsiteActiveGuard isWebsiteActive={isWebsiteActive}>
                    {children}
                </WebsiteActiveGuard>
            </body>
        </html>
    );
}
