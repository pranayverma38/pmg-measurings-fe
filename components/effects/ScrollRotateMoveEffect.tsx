"use client";

import { useEffect, useRef } from "react";

type Killable = { kill?: () => void };

/**
 * GSAP ScrollTrigger (53):
 * - .scroll-rotate      : rotation 720deg, scrub 2
 * - .scroll-move-right  : x 500px, start top 30%, scrub 2
 * - .scroll-move-left   : x -500px, start bottom 100%, scrub 2
 */
export default function ScrollRotateMoveEffect() {
    const initialized = useRef(false);
    const killablesRef = useRef<Killable[]>([]);

    useEffect(() => {
        if (initialized.current) return;

        let mounted = true;
        const killables: Killable[] = [];

        const init = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);

            if (!mounted) return;

            // .scroll-rotate: rotate 720deg on scroll
            document.querySelectorAll<HTMLElement>(".scroll-rotate").forEach((el) => {
                const tween = gsap.to(el, {
                    rotation: 720,
                    scrollTrigger: {
                        trigger: el,
                        scrub: 2,
                        invalidateOnRefresh: true,
                    },
                });
                killables.push(tween);
                if ((tween as { scrollTrigger?: Killable }).scrollTrigger) {
                    killables.push((tween as { scrollTrigger?: Killable }).scrollTrigger as Killable);
                }
            });

            // .scroll-move-right: move x 500
            document.querySelectorAll<HTMLElement>(".scroll-move-right").forEach((el) => {
                const tween = gsap.to(el, {
                    x: 500,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 30%",
                        scrub: 2,
                        invalidateOnRefresh: true,
                    },
                });
                killables.push(tween);
                if ((tween as { scrollTrigger?: Killable }).scrollTrigger) {
                    killables.push((tween as { scrollTrigger?: Killable }).scrollTrigger as Killable);
                }
            });

            // .scroll-move-left: move x -500
            document.querySelectorAll<HTMLElement>(".scroll-move-left").forEach((el) => {
                const tween = gsap.to(el, {
                    x: -500,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: el,
                        start: "bottom 100%",
                        scrub: 2,
                        invalidateOnRefresh: true,
                    },
                });
                killables.push(tween);
                if ((tween as { scrollTrigger?: Killable }).scrollTrigger) {
                    killables.push((tween as { scrollTrigger?: Killable }).scrollTrigger as Killable);
                }
            });

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
