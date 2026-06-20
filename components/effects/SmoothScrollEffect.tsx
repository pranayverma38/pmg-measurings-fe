"use client";

import { useEffect, useRef } from "react";

type ScrollSmootherInstance = { kill?: () => void };
type TimelineInstance = { kill?: () => void };

/**
 * Smooth scroll (ScrollSmoother) + Footer Fixed Bottom reveal.
 *
 * - Requires #smooth-wrapper and #smooth-content in DOM (e.g. in app/layout).
 * - ScrollSmoother is optional (Club GSAP). If you have the plugin, add it to the project
 *   and ensure it is exported from "gsap/ScrollSmoother"; else smooth scroll is skipped.
 * - Footer effect uses ScrollTrigger only: main pulls up, footer inner scales 0.95 → 1.
 * - For footer effect use Layout with footerStyle=2 (placeholder) + Footer2, or provide
 *   .footer-placeholder and .footer-fixed-bottom with .at-footer-area in the DOM.
 */
export default function SmoothScrollEffect() {
  const initialized = useRef(false);
  const scrollSmootherRef = useRef<ScrollSmootherInstance | null>(null);
  const footerTimelineRef = useRef<TimelineInstance | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    if (initialized.current) return;

    let mounted = true;
    let resizeHandler: (() => void) | null = null;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      if (!mounted) return;

      const smoothWrapper = document.getElementById("smooth-wrapper");
      const smoothContent = document.getElementById("smooth-content");
      const footerFixedBottom = document.querySelector(".footer-fixed-bottom") as HTMLElement | null;
      const footerPlaceholder = document.querySelector(".footer-placeholder") as HTMLElement | null;
      const footerFixedBottomInner = document.querySelector(".footer-fixed-bottom .at-footer-area") as HTMLElement | null;
      const mainElement = document.querySelector("#smooth-content main") as HTMLElement | null;

      const updatePlaceholderHeight = () => {
        if (!footerPlaceholder || !footerFixedBottom || !mounted) return;
        footerPlaceholder.style.height = `${footerFixedBottom.offsetHeight}px`;
        ScrollTrigger.refresh();
      };

      // 1) Footer placeholder height
      if (footerFixedBottom && footerPlaceholder) {
        updatePlaceholderHeight();
        resizeHandler = updatePlaceholderHeight;
        window.addEventListener("resize", resizeHandler);
        resizeObserverRef.current = new ResizeObserver(() => {
          updatePlaceholderHeight();
        });
        resizeObserverRef.current.observe(footerFixedBottom);
      }

      if (!mounted) return;

      // 2) ScrollSmoother (optional – Club GSAP; requires wrapper + content)
      if (smoothWrapper && smoothContent) {
        try {
          const ScrollSmootherMod = await import("gsap/ScrollSmoother").catch(() => null);
          const ScrollSmoother = (ScrollSmootherMod as { default?: { create: (opts: object) => ScrollSmootherInstance } })?.default;
          if (ScrollSmoother?.create) {
            gsap.registerPlugin(ScrollSmoother as never);
            scrollSmootherRef.current = ScrollSmoother.create({
              wrapper: smoothWrapper,
              content: smoothContent,
              smooth: 1.35,
              effects: true,
              smoothTouch: 0.15,
              ignoreMobileResize: true,
            });
          }
        } catch {
          // ScrollSmoother not available (Club plugin)
        }
      }

      if (!mounted) return;

      // Re-measure placeholder after ScrollSmoother may have changed layout
      updatePlaceholderHeight();

      // 3) Footer Fixed Bottom reveal (ScrollTrigger)
      // Note: Don't translate <main> in the timeline — natural scroll already shifts
      // main up by exactly footerHeight over this trigger window (placeholder reserves
      // that scroll space). Adding a -footerHeight translate doubled the motion and
      // pushed main past the viewport, creating an empty band above the footer.
      // Only the inner-footer scale animation is needed; the reveal itself is achieved
      // by `position: fixed` + `z-index` on main (z=2) covering footer (z=1) until
      // main scrolls past it.
      if (footerFixedBottom && footerFixedBottomInner && footerPlaceholder && mainElement) {
        gsap.set(footerFixedBottomInner, { scale: 0.95 });

        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: footerPlaceholder,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          })
          .to(
            footerFixedBottomInner,
            {
              scale: 1,
              ease: "none",
            },
            0
          );
        footerTimelineRef.current = tl;
      }

      if (mounted) {
        initialized.current = true;
      }
    };

    init();

    return () => {
      mounted = false;
      if (resizeHandler) {
        window.removeEventListener("resize", resizeHandler);
      }
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;
      footerTimelineRef.current?.kill?.();
      footerTimelineRef.current = null;
      scrollSmootherRef.current?.kill?.();
      scrollSmootherRef.current = null;
      initialized.current = false;
    };
  }, []);

  return null;
}
