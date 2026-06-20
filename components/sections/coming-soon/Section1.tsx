"use client";

import { useEffect, useRef } from "react";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const TITLE = "Coming Soon";
const TAGLINE = "We're crafting something exciting.";

export default function Section1() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        let ctx: { revert: () => void } | undefined;

        const init = async () => {
            const gsap = (await import("gsap")).default;

            ctx = gsap.context(() => {
                const orbs = section.querySelectorAll<HTMLElement>(".coming-soon-orb");
                const line = section.querySelector<HTMLElement>(".coming-soon-line");
                const badge = section.querySelector<HTMLElement>(".coming-soon-badge");
                const arrow = section.querySelector<HTMLElement>(".coming-soon-arrow");
                const chars = section.querySelectorAll<HTMLElement>(".coming-soon-char");
                const taglineWords = section.querySelectorAll<HTMLElement>(".coming-soon-word");

                gsap.set(orbs, { scale: 0.6, opacity: 0 });
                gsap.set(line, { scaleX: 0, opacity: 0 });
                gsap.set(badge, { y: 24, opacity: 0, filter: "blur(6px)" });
                gsap.set(arrow, { x: -8, opacity: 0 });
                gsap.set(chars, {
                    yPercent: 120,
                    opacity: 0,
                    rotateX: -70,
                    transformOrigin: "50% 100%",
                });
                gsap.set(taglineWords, { y: 18, opacity: 0, filter: "blur(8px)" });

                const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

                tl.to(orbs, {
                    scale: 1,
                    opacity: 1,
                    duration: 1.4,
                    stagger: 0.15,
                    ease: "power2.out",
                })
                    .to(
                        line,
                        {
                            scaleX: 1,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power4.inOut",
                        },
                        "-=1"
                    )
                    .to(
                        badge,
                        {
                            y: 0,
                            opacity: 1,
                            filter: "blur(0px)",
                            duration: 0.9,
                        },
                        "-=0.55"
                    )
                    .to(
                        arrow,
                        {
                            x: 0,
                            opacity: 1,
                            duration: 0.5,
                        },
                        "-=0.45"
                    )
                    .to(
                        chars,
                        {
                            yPercent: 0,
                            opacity: 1,
                            rotateX: 0,
                            duration: 1,
                            stagger: 0.045,
                            ease: "power4.out",
                        },
                        "-=0.35"
                    )
                    .to(
                        taglineWords,
                        {
                            y: 0,
                            opacity: 1,
                            filter: "blur(0px)",
                            duration: 0.75,
                            stagger: 0.08,
                        },
                        "-=0.55"
                    );

                orbs.forEach((orb, index) => {
                    gsap.to(orb, {
                        x: index % 2 === 0 ? 28 : -28,
                        y: index === 1 ? -22 : 18,
                        duration: 5 + index,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: index * 0.4,
                    });
                });

                gsap.to(arrow, {
                    x: 6,
                    duration: 1.2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: 1.5,
                });

                gsap.to(badge, {
                    y: -4,
                    duration: 2.4,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: 2,
                });
            }, section);
        };

        init();

        return () => {
            ctx?.revert();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="sec-1-coming-soon coming-soon-hero overflow-hidden min-vh-100 d-flex align-items-center justify-content-center position-relative"
        >
            <div className="coming-soon-bg" aria-hidden="true">
                <span className="coming-soon-orb coming-soon-orb--1" />
                <span className="coming-soon-orb coming-soon-orb--2" />
                <span className="coming-soon-orb coming-soon-orb--3" />
            </div>

            <div className="container position-relative z-index-3">
                <div className="text-center coming-soon-content">
                    <span className="coming-soon-line d-block mx-auto mb-30" />
                    <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0 d-inline-flex coming-soon-badge">
                        <span className="text-uppercase">
                            <span className="text-1">We are On the Way</span>
                            <span className="text-2">We are On the Way</span>
                        </span>
                        <i className="coming-soon-arrow">
                            {ARROW_SVG}
                            {ARROW_SVG}
                        </i>
                    </span>
                    <h1 className="mb-40 fz-ds-1 fw-500 lh-1 coming-soon-title">
                        {TITLE.split("").map((char, index) => (
                            <span
                                key={`${char}-${index}`}
                                className="coming-soon-char"
                                style={{ display: "inline-block", perspective: "600px" }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h1>
                    <p className="fw-400 fz-font-3xl neutral-900 mb-0 lh-sm coming-soon-tagline">
                        {TAGLINE.split(" ").map((word, index) => (
                            <span key={`${word}-${index}`} className="coming-soon-word" style={{ display: "inline-block" }}>
                                {word}
                                {index < TAGLINE.split(" ").length - 1 ? "\u00A0" : ""}
                            </span>
                        ))}
                    </p>
                </div>
            </div>

            <style jsx>{`
                .coming-soon-hero {
                    isolation: isolate;
                }

                .coming-soon-bg {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                    pointer-events: none;
                }

                .coming-soon-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(70px);
                    will-change: transform, opacity;
                }

                .coming-soon-orb--1 {
                    width: 420px;
                    height: 420px;
                    top: 12%;
                    left: 8%;
                    background: radial-gradient(circle, rgba(29, 29, 29, 0.12) 0%, rgba(29, 29, 29, 0) 70%);
                }

                .coming-soon-orb--2 {
                    width: 360px;
                    height: 360px;
                    top: 58%;
                    right: 10%;
                    background: radial-gradient(circle, rgba(29, 29, 29, 0.1) 0%, rgba(29, 29, 29, 0) 72%);
                }

                .coming-soon-orb--3 {
                    width: 280px;
                    height: 280px;
                    bottom: 8%;
                    left: 42%;
                    background: radial-gradient(circle, rgba(29, 29, 29, 0.08) 0%, rgba(29, 29, 29, 0) 75%);
                }

                .coming-soon-line {
                    width: 72px;
                    height: 1px;
                    background: currentColor;
                    opacity: 0.35;
                    transform-origin: center;
                }

                .coming-soon-title {
                    perspective: 800px;
                }

                .coming-soon-char {
                    will-change: transform, opacity;
                }

                .coming-soon-word {
                    will-change: transform, opacity, filter;
                }
            `}</style>
        </section>
    );
}
