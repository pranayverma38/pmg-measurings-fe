"use client";

import { useEffect, useRef } from "react";

type Killable = { kill?: () => void };

/**
 * GSAP ScrollTrigger (35):
 * - .at-item-anime.marque inside .at-item-anime-area: x 35% → -200% (scroll-driven, moves left)
 * - .at-item-anime-2.marque inside .at-item-anime-area-2: x -35% → 200% (mirror, moves right)
 */
export default function AtItemAnimeEffect() {
    const killablesRef = useRef<Killable[]>([]);

    useEffect(() => {
        let mounted = true;

        const init = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);

            if (!mounted) return;

            const killables: Killable[] = [];

            // at-item-anime marque
            const marqueElements = document.querySelectorAll<HTMLElement>(".at-item-anime.marque");
            const triggerElement = document.querySelector(".at-item-anime-area");
            if (marqueElements.length > 0 && triggerElement) {
                gsap.set(Array.from(marqueElements), { x: "35%" });
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: triggerElement,
                        start: "-1000 0%",
                        end: "bottom 0%",
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                });
                tl.to(Array.from(marqueElements), { x: "-200%" });
                killables.push(tl);
                const st = (tl as { scrollTrigger?: Killable }).scrollTrigger;
                if (st) killables.push(st);
            }

            // at-item-anime-2 marque (mirror direction)
            const marqueElements2 = document.querySelectorAll<HTMLElement>(".at-item-anime-2.marque");
            const triggerElement2 = document.querySelector(".at-item-anime-area-2");
            if (marqueElements2.length > 0 && triggerElement2) {
                gsap.set(Array.from(marqueElements2), { x: "-35%" });
                const tl2 = gsap.timeline({
                    scrollTrigger: {
                        trigger: triggerElement2,
                        start: "-1000 0%",
                        end: "bottom 0%",
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                });
                tl2.to(Array.from(marqueElements2), { x: "200%" });
                killables.push(tl2);
                const st2 = (tl2 as { scrollTrigger?: Killable }).scrollTrigger;
                if (st2) killables.push(st2);
            }

            killablesRef.current = killables;
        };

        init();

        return () => {
            mounted = false;
            killablesRef.current.forEach((k) => k.kill?.());
            killablesRef.current = [];
        };
    }, []);

    return null;
}
