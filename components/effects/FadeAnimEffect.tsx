"use client";

import { useEffect, useRef } from "react";

type GsapTween = { kill?: () => void; scrollTrigger?: { kill?: () => void } };

/**
 * GSAP fade-in animation for elements with class .at_fade_anim.
 *
 * Add once in layout (e.g. next to ParallaxEffect). Reads data attributes on each element:
 *
 * - data-fade-offset  – distance in px for x/y start, default 40
 * - data-duration     – animation duration, default 0.75
 * - data-fade-from    – "top" | "bottom" | "left" | "right", default "bottom"
 * - data-on-scroll    – "1" = trigger on scroll (ScrollTrigger), "0" = run once, default "1"
 * - data-delay       – delay in s, default 0.15
 * - data-ease        – GSAP ease, default "power2.out"
 *
 * When data-on-scroll="1", animation starts when element reaches "top 85%" of viewport.
 *
 * Example:
 *   <div className="at_fade_anim" data-fade-from="bottom" data-delay=".4" data-ease="bounce">
 *     ...
 *   </div>
 */
export default function FadeAnimEffect() {
    const tweensRef = useRef<GsapTween[]>([]);
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) return;

        let mounted = true;

        const init = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);

            if (!mounted) return;

            const elements = document.querySelectorAll<HTMLElement>(".at_fade_anim");
            const tweens: GsapTween[] = [];

            elements.forEach((el) => {
                const fadeOffset = parseFloat(el.getAttribute("data-fade-offset") ?? "40") || 40;
                const duration = parseFloat(el.getAttribute("data-duration") ?? "0.75") || 0.75;
                const fadeFrom = (el.getAttribute("data-fade-from") ?? "bottom").toLowerCase();
                const onScroll = el.getAttribute("data-on-scroll") ?? "1";
                const delay = parseFloat(el.getAttribute("data-delay") ?? "0.15") || 0.15;
                const ease = el.getAttribute("data-ease") ?? "power2.out";

                const x =
                    fadeFrom === "left"
                        ? -fadeOffset
                        : fadeFrom === "right"
                          ? fadeOffset
                          : 0;
                const y =
                    fadeFrom === "top"
                        ? -fadeOffset
                        : fadeFrom === "bottom"
                          ? fadeOffset
                          : 0;

                const vars: Record<string, unknown> = {
                    opacity: 0,
                    ease,
                    duration,
                    delay,
                    x,
                    y,
                };

                if (onScroll === "1") {
                    vars.scrollTrigger = {
                        trigger: el,
                        start: "top 85%",
                    };
                }

                const tween = gsap.from(el, vars);
                if (tween) tweens.push(tween);
            });

            tweensRef.current = tweens;
            initialized.current = true;
        };

        init();

        return () => {
            mounted = false;
            tweensRef.current.forEach((t) => {
                t?.scrollTrigger?.kill?.();
                t?.kill?.();
            });
            tweensRef.current = [];
            initialized.current = false;
        };
    }, []);

    return null;
}
