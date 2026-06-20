"use client";

import { useEffect, useRef } from "react";

type Killable = { kill?: () => void };

/**
 * GSAP ScrollTrigger animations:
 * - .move-up         : y -> -500px (scrub), transformOrigin top, trigger first el
 * - .scroll-move-up  : y -> -100 (scrub)
 * - .scroll-move-up2 : from y=80, opacity=0 (scrub), only >= 768px
 */
export default function ScrollMoveUpEffect() {
    const initialized = useRef(false);
    const killablesRef = useRef<Killable[]>([]);

    useEffect(() => {
        if (initialized.current) return;

        let mounted = true;

        const init = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);

            if (!mounted) return;

            const killables: Killable[] = [];

            const moveUp = Array.from(document.querySelectorAll<HTMLElement>(".move-up"));
            if (moveUp.length > 0 && moveUp[0]) {
                const moveUpTween = gsap.to(moveUp, {
                    transformOrigin: "top",
                    y: "-500px",
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: moveUp[0],
                        start: "top center",
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                });
                killables.push(moveUpTween);
                if ((moveUpTween as { scrollTrigger?: Killable }).scrollTrigger) {
                    killables.push((moveUpTween as { scrollTrigger?: Killable }).scrollTrigger as Killable);
                }
            }

            const moveUpItems = Array.from(document.querySelectorAll<HTMLElement>(".scroll-move-up"));
            moveUpItems.forEach((el) => {
                const tween = gsap.to(el, {
                    y: -100,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 70%",
                        scrub: 1,
                        markers: false,
                        invalidateOnRefresh: true,
                    },
                });
                killables.push(tween);
                if ((tween as { scrollTrigger?: Killable }).scrollTrigger) {
                    killables.push((tween as { scrollTrigger?: Killable }).scrollTrigger as Killable);
                }
            });

            const mm = gsap.matchMedia();
            mm.add("(min-width: 768px)", () => {
                const items = Array.from(document.querySelectorAll<HTMLElement>(".scroll-move-up2"));
                items.forEach((el) => {
                    const tween = gsap.from(el, {
                        y: 80,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top bottom",
                            end: "bottom bottom",
                            scrub: 1,
                            markers: false,
                            invalidateOnRefresh: true,
                        },
                    });
                    killables.push(tween);
                    if ((tween as { scrollTrigger?: Killable }).scrollTrigger) {
                        killables.push((tween as { scrollTrigger?: Killable }).scrollTrigger as Killable);
                    }
                });

                return () => {
                    // gsap.matchMedia will cleanup ScrollTriggers it created,
                    // but we keep killables list for a full teardown too.
                };
            });

            killables.push(mm);

            killablesRef.current = killables;
            initialized.current = true;
        };

        init();

        return () => {
            mounted = false;
            killablesRef.current.forEach((k) => k.kill?.());
            killablesRef.current = [];
            initialized.current = false;
        };
    }, []);

    return null;
}

