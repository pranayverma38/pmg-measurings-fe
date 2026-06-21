"use client";

import Image from "next/image";
import RevealText from "@/components/effects/RevealText";
import SwiperDynamic from "@/components/shared/SwiperDynamic";

// About 1 Section 1 - Hero / About Us

const PMG_PRODUCTS_BASE = "/assets/imgs/pmgproducts";

const productSrc = (series: string, file: string) =>
    `${PMG_PRODUCTS_BASE}/${encodeURIComponent(series)}/${file}`;

const SLIDE_HEIGHT = 480;

const SLIDES = [
    { src: productSrc("GLASS SERIES", "IMG_8075.png"), alt: "PMG Glass Series measuring tape" },
    { src: productSrc("LOCKLIINE SERIES", "IMG_8119.png"), alt: "PMG Lockline Series measuring tape" },
    { src: productSrc("PRIME SERIES", "IMG_8127.png"), alt: "PMG Prime Series measuring tape" },
    { src: productSrc("ECO SERIES", "IMG_8242.png"), alt: "PMG Eco Series measuring tape" },
    { src: productSrc("LINEX SERIES", "IMG_8048.png"), alt: "PMG Linex Series measuring tape" },
    { src: productSrc("SIGNATURE SERIES", "IMG_8196.png"), alt: "PMG Signature Series measuring tape" },
];

export default function Section1() {
    return (
        <section className="sec-1-about pt-150 overflow-hidden">
            <div className="container pb-100">
                <div className="row align-items-center g-4">
                    <div className="col-lg-7 h-100 mx-auto d-flex flex-column justify-content-center align-items-center text-center">
                        <h2 className="section-title fw-600 lh-1 reveal-text">
                            <RevealText>
                                We are a precision tools brand crafting durable & accurate measuring solutions.
                            </RevealText>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="at-item-anime-area">
                <SwiperDynamic
                    className="swiper about-me-slider-active"
                    slidesPerView={2}
                    spaceBetween={24}
                    loop={true}
                    breakpoints={{
                        576: { slidesPerView: 1, spaceBetween: 24 },
                        768: { slidesPerView: 1, spaceBetween: 24 },
                        992: { slidesPerView: 2, spaceBetween: 30 },
                    }}
                >
                    {SLIDES.map((slide, index) => (
                        <div
                            key={index}
                            className="about-me-slider-thumb at-item-anime marque position-relative overflow-hidden rounded-4"
                            style={{ height: SLIDE_HEIGHT }}
                        >
                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                fill
                                sizes="(max-width: 992px) 100vw, 50vw"
                                className="object-fit-cover"
                            />
                        </div>
                    ))}
                </SwiperDynamic>
            </div>
        </section>
    );
}
