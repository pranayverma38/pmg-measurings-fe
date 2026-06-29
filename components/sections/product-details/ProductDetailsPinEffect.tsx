"use client";

import { useEffect, useRef } from "react";

type GsapContext = { revert: () => void };

/**
 * Pin product info panel while gallery scrolls (desktop only).
 * CSS sticky does not work with ScrollSmoother's transform on #smooth-content.
 */
export default function ProductDetailsPinEffect() {
    const ctxRef = useRef<GsapContext | null>(null);

    useEffect(() => {
        const hero = document.querySelector<HTMLElement>(".pd-page__hero");
        if (!hero) return;

        const galleryCol = hero.querySelector<HTMLElement>(".pd-page__gallery");
        const infoPanel = hero.querySelector<HTMLElement>(".pd-page__info-panel");
        if (!galleryCol || !infoPanel) return;

        const reduceMotion =
            typeof window.matchMedia === "function" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) return;

        let cancelled = false;

        const init = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);
            if (cancelled) return;

            const ctx = (gsap as unknown as { context: (fn: () => void) => GsapContext }).context(() => {
                gsap.matchMedia().add("(min-width: 992px)", () => {
                    ScrollTrigger.create({
                        trigger: galleryCol,
                        start: "top 120px",
                        end: "bottom bottom",
                        pin: infoPanel,
                        pinSpacing: false,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    });
                });
            });

            if (cancelled) {
                ctx.revert();
                return;
            }

            ctxRef.current = ctx;
            ScrollTrigger.refresh();
        };

        const rafId = requestAnimationFrame(() => {
            void init();
        });

        return () => {
            cancelled = true;
            cancelAnimationFrame(rafId);
            ctxRef.current?.revert();
            ctxRef.current = null;
        };
    }, []);

    return null;
}
