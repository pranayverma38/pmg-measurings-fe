"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type HeroSlide = {
    src: string;
    alt: string;
};

export default function AboutHeroSlider({ slides }: { slides: HeroSlide[] }) {
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

            const getScrollDistance = () =>
                Math.max(track.scrollWidth - area.clientWidth, 0);

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
        <div ref={areaRef} className="about-hero-slider at-item-anime-area mt-60">
            <div className="about-hero-slider__viewport">
                <div ref={trackRef} className="swiper-wrapper about-hero-slider__track">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="swiper-slide about-me-slider-thumb about-hero-slider__slide position-relative overflow-hidden rounded-2"
                        >
                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                fill
                                sizes="(max-width: 768px) 80vw, 520px"
                                className="object-fit-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
