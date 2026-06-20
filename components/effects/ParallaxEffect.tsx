"use client";

import { useEffect, useRef } from "react";

type ScrollTriggerInstance = { kill?: () => void };

/**
 * Parallax effect using GSAP ScrollTrigger.
 *
 * Add to layout once (e.g. next to SmoothScrollEffect). No extra dependency.
 *
 * Usage in JSX – use data attributes on the element to move:
 *
 * - data-parallax          – enable parallax (moves on scroll)
 * - data-parallax-speed    – movement factor, default "0.5" (0 = fixed, 1 = strong)
 * - data-parallax-range    – max movement in px, default "120"
 *
 * Optional: data-depth (e.g. "0.8") is treated as data-parallax-speed if speed not set.
 *
 * Example:
 *   <div className="at-hero-bg" data-parallax data-parallax-speed="0.6">
 *     <img src="..." alt="" />
 *   </div>
 */
export default function ParallaxEffect() {
  const triggersRef = useRef<ScrollTriggerInstance[]>([]);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    let mounted = true;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      if (!mounted) return;

      const elements = document.querySelectorAll<HTMLElement>("[data-parallax]");
      const triggers: ScrollTriggerInstance[] = [];

      elements.forEach((el) => {
        const speed = parseFloat(
          el.dataset.parallaxSpeed ?? el.dataset.depth ?? "0.5"
        );
        const range = parseFloat(el.dataset.parallaxRange ?? "120");

        const st = ScrollTrigger.create({
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const y = (progress - 0.5) * 2 * range * speed;
            gsap.set(el, { y, force3D: true });
          },
        });
        triggers.push(st);
      });

      triggersRef.current = triggers;
      if (mounted) {
        initialized.current = true;
      }
    };

    init();

    return () => {
      mounted = false;
      triggersRef.current.forEach((st) => st.kill?.());
      triggersRef.current = [];
      initialized.current = false;
    };
  }, []);

  return null;
}
