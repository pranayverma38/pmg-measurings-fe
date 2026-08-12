import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/about-1/Section1";
import AboutStory from "@/components/sections/about-1/AboutStory";
import Section6 from "@/components/sections/about-1/Section4";
import StatsStrip from "@/components/sections/distributors/StatsStrip";

export default function About_1() {
    return (
        <Layout headerStyle={16} footerStyle={16} headerProps={{ textStyle: "light" }}>
            <div className="about-page">
                <Section1 />
                <StatsStrip />
                <AboutStory />
                <Section6 classList="bg-neutral-50" />
            </div>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .about-page .page-content > .row,
                        .about-page .distributors-content > .row {
                            margin-inline: 0;
                        }
                        .about-hero-slider {
                            padding-left: max(18px, calc((100vw - 1100px) / 2 + 18px));
                        }
                        .about-hero-slider__viewport {
                            overflow: hidden;
                            width: 100%;
                        }
                        .about-hero-slider__track.swiper-wrapper {
                            display: flex;
                            flex-wrap: nowrap;
                            width: max-content;
                            gap: 24px;
                            will-change: transform;
                        }
                        .about-hero-slider__slide.swiper-slide {
                            flex-shrink: 0;
                            width: clamp(280px, 42vw, 520px);
                            height: 420px;
                            border: 1px solid rgba(255, 255, 255, 0.08);
                            background: #1a1a1a;
                        }
                        .about-hero-slider__slide.swiper-slide img {
                            inset: 20px !important;
                            width: calc(100% - 40px) !important;
                            height: calc(100% - 40px) !important;
                            object-fit: contain !important;
                            object-position: left center !important;
                            transform: translateX(-98px) scale(1.12);
                            transform-origin: center;
                        }
                        .about-legacy__products .team-card-image {
                            border-radius: 12px;
                            overflow: hidden;
                            border: 1px solid rgba(255, 255, 255, 0.08);
                        }
                        .about-legacy__products .team-card-icon {
                            opacity: 0;
                            transition: opacity 0.2s ease;
                        }
                        .about-legacy__products .team-card:hover .team-card-icon {
                            opacity: 1;
                        }
                    `,
                }}
            />
        </Layout>
    );
}
