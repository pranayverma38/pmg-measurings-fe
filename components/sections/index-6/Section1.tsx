"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

// Home 6 Section 1 - Hero

const ARROW_DIAGONAL_SVG = (
  <svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
      fill="currentColor"
    />
    <path
      d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
      fill="currentColor"
    />
  </svg>
);

const heroTitleStyle: React.CSSProperties = {
  fontSize: "clamp(2.25rem, 9.5vw, 7.5rem)",
  lineHeight: 0.95,
};

const heroTitleInchesStyle: React.CSSProperties = {
  fontSize: "clamp(2rem, 8vw, 7.5rem)",
  lineHeight: 0.95,
  whiteSpace: "nowrap",
};

const heroTitleRightStyle: React.CSSProperties = {
  fontSize: "clamp(2rem, 7.5vw, 6.5rem)",
  lineHeight: 0.95,
  whiteSpace: "nowrap",
};

const contentBoxStyle: React.CSSProperties = {
  maxWidth: 1400,
  width: "100%",
  padding: "0 18px",
  margin: "0 auto",
};
const menuItems = [
  "Measuring tapes",
  "spirit levels",
  "Fibre glass tapes",
];

export default function Section1() {
  const starRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = starRef.current;
    if (!el) return;

    let mounted = true;
    let scrollTrigger: { kill?: () => void } | null = null;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      if (!mounted || !starRef.current) return;

      const baseRotation = 22;
      const sensitivity = 0.2;

      const updateRotation = (scrollY: number) => {
        starRef.current!.style.transform = `rotate(${
          baseRotation + scrollY * sensitivity
        }deg)`;
      };

      scrollTrigger = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => updateRotation(self.scroll()),
      });

      updateRotation(window.scrollY);
    };

    init();

    return () => {
      mounted = false;
      scrollTrigger?.kill?.();
    };
  }, []);

  return (
    <div className="at-hero-area-home-6 scene p-relative z-index-1 bg-position fix min-vh-100 d-flex flex-column bg-neutral-950 changeless">
      <div
        className="at-hero-area-home-6-bg p-absolute top-0 start-0 w-100 h-100 opacity-50"
        data-background="/assets/imgs/pmgotherimages/ai-generated-IMAGE.jpg"
      />
      <div
        className="p-relative flex-grow-1 d-flex flex-column justify-content-center"
        style={contentBoxStyle}
      >
        <div className="row align-items-end">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center at-hero-vision-title">
              <h2
                className="neutral-0 text-uppercase fw-600 text-nowrap mb-0"
                style={heroTitleStyle}
              >
                New Vision
              </h2>
              <div className="sec-1-home-7__star d-none d-lg-flex at-hero-vision-star">
                <img
                  ref={starRef}
                  src="/assets/imgs/pages/home-7/star-asterisk.svg"
                  alt="decorative star"
                />
              </div>
            </div>
            <h2
              className="neutral-0 text-uppercase fw-600 d-lg-none mb-0 at-hero-inches-title"
              style={heroTitleInchesStyle}
            >
              New{"\u00A0"}Inches
            </h2>
          </div>
          <div className="col-xxl-3 col-xl-6 col-md-7 col-12">
            <div className="at-hero-content mb-30">
              <div className="menu-list d-flex flex-column">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="border-bottom-300 py-3 menu-list__item hasdot"
                    target="_blank"
                  >
                    <span className="text neutral-0 fw-600">
                      {item}
                    </span>
                  </a>
                ))}
              </div>
              <div
                className="at-hero-btn d-flex flex-nowrap align-items-center gap-2 pt-20 at_fade_anim"
                data-delay="0.5"
                data-fade-from="bottom"
              >
                <Link
                  className="at-btn bg-white rounded-0 text-dark"
                  href="/products"
                >
                  <span>
                    <span className="text-1">Explore all products</span>
                    <span className="text-2">Explore all products</span>
                  </span>
                  <i>{ARROW_DIAGONAL_SVG}</i>
                </Link>
                <Link
                  className="at-btn at-btn-border-white text-white rounded-0"
                  href="/contact-1"
                >
                  <span>
                    <span className="text-1">Get a free quote</span>
                    <span className="text-2">Get a free quote</span>
                  </span>
                  <i>{ARROW_DIAGONAL_SVG}</i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ms-auto">
            <h2
              className="neutral-0 text-uppercase fw-600 text-end d-none d-lg-block"
              style={heroTitleRightStyle}
            >
              New{"\u00A0"}Inches
            </h2>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .at-hero-vision-star.sec-1-home-7__star {
              position: static;
              top: auto;
              left: auto;
              transform: none;
              flex-shrink: 0;
            }
            .at-hero-vision-star.sec-1-home-7__star img {
              width: 100%;
              height: 100%;
              will-change: transform;
            }
            @media (max-width: 767.98px) {
              .at-hero-vision-title { margin-bottom: 0 !important; }
              .at-hero-inches-title { margin-bottom: 56px !important; }
            }
            @media (min-width: 768px) {
              .at-hero-vision-title { margin-bottom: 100px !important; }
            }
          `,
        }}
      />
    </div>
  );
}
