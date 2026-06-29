"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const PMG_PRODUCTS_BASE = "/assets/imgs/pmgproducts";

const productSrc = (series: string, file: string) =>
    `${PMG_PRODUCTS_BASE}/${encodeURIComponent(series)}/${file}`;

const SLIDES = [
    { src: productSrc("MASTER SERIES", "IMG_8282.png"), alt: "PMG Master Series measuring tape" },
    { src: productSrc("PRIME SERIES", "IMG_8127.png"), alt: "PMG Prime Series measuring tape" },
    { src: productSrc("SIGNATURE SERIES", "IMG_8196.png"), alt: "PMG Signature Series measuring tape" },
    { src: productSrc("GLASS SERIES", "IMG_8075.png"), alt: "PMG Glass Series measuring tape" },
    { src: productSrc("LOCKLIINE SERIES", "IMG_8119.png"), alt: "PMG Lockline Series measuring tape" },
    { src: productSrc("SPIRIT LEVEL", "IMG_8339.png"), alt: "PMG Spirit Level" },
];

export default function ProductsHeroSlider() {
    const areaRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const area = areaRef.current;
        const track = trackRef.current;
        if (!area || !track) return;

        let mounted = true;
        const killables: Array<{ kill?: () => void }> = [];

        const init = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);

            if (!mounted) return;

            const getScrollDistance = () => Math.max(track.scrollWidth - area.clientWidth, 0);

            const tween = gsap.to(track, {
                x: () => -getScrollDistance(),
                ease: "none",
                scrollTrigger: {
                    trigger: area,
                    start: "top 85%",
                    end: "bottom 15%",
                    scrub: true,
                    invalidateOnRefresh: true,
                },
            });

            killables.push(tween);
            const st = (tween as { scrollTrigger?: { kill?: () => void } }).scrollTrigger;
            if (st) killables.push(st);
        };

        init();

        return () => {
            mounted = false;
            killables.forEach((item) => item.kill?.());
        };
    }, []);

    return (
        <div ref={areaRef} className="products-hero-slider at-item-anime-area mt-60">
            <div className="products-hero-slider__viewport">
                <div ref={trackRef} className="swiper-wrapper products-hero-slider__track">
                    {SLIDES.map((slide, index) => (
                        <div
                            key={index}
                            className="swiper-slide products-hero-slider__slide position-relative overflow-hidden"
                        >
                            <div className="products-hero-slider__slide-inner">
                                <Image
                                    src={slide.src}
                                    alt={slide.alt}
                                    fill
                                    sizes="(max-width: 768px) 80vw, 420px"
                                    className="object-fit-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
