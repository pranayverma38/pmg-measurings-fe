"use client";

import { useCallback, useEffect, useRef } from "react";

type InteractiveHeroGridBgProps = {
    sectionRef: React.RefObject<HTMLElement | null>;
};

export default function InteractiveHeroGridBg({ sectionRef }: InteractiveHeroGridBgProps) {
    const gridRef = useRef<HTMLDivElement>(null);
    const target = useRef({ x: 0.28, y: 0.22, hover: 0 });
    const smooth = useRef({ x: 0.28, y: 0.22, hover: 0 });
    const rafRef = useRef<number>(0);

    const applyVars = useCallback(() => {
        const el = gridRef.current;
        const section = sectionRef.current;
        if (!el) return;

        const { x, y, hover } = smooth.current;
        el.style.setProperty("--mx", String(x));
        el.style.setProperty("--my", String(y));
        el.style.setProperty("--hover", String(hover));

        if (section) {
            section.classList.toggle("interactive-hero--active", hover > 0.05);
        }
    }, [sectionRef]);

    useEffect(() => {
        const tick = () => {
            smooth.current.x += (target.current.x - smooth.current.x) * 0.09;
            smooth.current.y += (target.current.y - smooth.current.y) * 0.09;
            smooth.current.hover += (target.current.hover - smooth.current.hover) * 0.12;
            applyVars();
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, [applyVars]);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const onMove = (e: MouseEvent) => {
            const rect = section.getBoundingClientRect();
            target.current.x = (e.clientX - rect.left) / rect.width;
            target.current.y = (e.clientY - rect.top) / rect.height;
            target.current.hover = 1;
        };

        const onEnter = () => {
            target.current.hover = 1;
        };

        const onLeave = () => {
            target.current.hover = 0;
            target.current.x = 0.28;
            target.current.y = 0.22;
        };

        section.addEventListener("mousemove", onMove, { passive: true });
        section.addEventListener("mouseenter", onEnter);
        section.addEventListener("mouseleave", onLeave);

        return () => {
            section.removeEventListener("mousemove", onMove);
            section.removeEventListener("mouseenter", onEnter);
            section.removeEventListener("mouseleave", onLeave);
        };
    }, [sectionRef]);

    return (
        <>
            <div ref={gridRef} className="interactive-hero__grid-bg" aria-hidden="true">
                <div className="interactive-hero__grid-parallax interactive-hero__grid-parallax--primary">
                    <div className="interactive-hero__grid-drift interactive-hero__grid-drift--primary" />
                </div>
                <div className="interactive-hero__grid-parallax interactive-hero__grid-parallax--secondary">
                    <div className="interactive-hero__grid-drift interactive-hero__grid-drift--secondary" />
                </div>

                <div className="interactive-hero__grid-glow" />
                <div className="interactive-hero__cursor-spotlight" />
                <div className="interactive-hero__crosshair interactive-hero__crosshair--h" />
                <div className="interactive-hero__crosshair interactive-hero__crosshair--v" />
                {[0, 1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="interactive-hero__grid-scan" />
                ))}
            </div>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .interactive-hero {
                            --mx: 0.28;
                            --my: 0.22;
                            --hover: 0;
                        }

                        .interactive-hero__grid-bg {
                            position: absolute;
                            inset: 0;
                            pointer-events: none;
                            overflow: hidden;
                            z-index: 0;
                        }

                        .interactive-hero__grid-parallax {
                            position: absolute;
                            inset: -20%;
                            will-change: transform;
                        }
                        .interactive-hero__grid-parallax--primary {
                            transform: translate(
                                calc((var(--mx) - 0.5) * -72px),
                                calc((var(--my) - 0.5) * -52px)
                            );
                        }
                        .interactive-hero__grid-parallax--secondary {
                            transform: translate(
                                calc((var(--mx) - 0.5) * 48px),
                                calc((var(--my) - 0.5) * 36px)
                            );
                        }

                        .interactive-hero__grid-drift {
                            position: absolute;
                            inset: -50%;
                            will-change: transform;
                        }
                        .interactive-hero__grid-drift--primary {
                            background-image:
                                linear-gradient(rgba(0, 0, 0, calc(0.035 + var(--hover) * 0.028)) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(0, 0, 0, calc(0.035 + var(--hover) * 0.028)) 1px, transparent 1px);
                            background-size: 48px 48px;
                            animation: interactive-hero-grid-drift 22s linear infinite;
                        }
                        .interactive-hero--active .interactive-hero__grid-drift--primary {
                            animation-duration: 11s;
                        }

                        .interactive-hero__grid-drift--secondary {
                            background-image:
                                linear-gradient(rgba(240, 70, 14, calc(0.022 + var(--hover) * 0.045)) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(240, 70, 14, calc(0.022 + var(--hover) * 0.045)) 1px, transparent 1px);
                            background-size: 24px 24px;
                            animation: interactive-hero-grid-drift-reverse 14s linear infinite;
                        }
                        .interactive-hero--active .interactive-hero__grid-drift--secondary {
                            animation-duration: 7s;
                        }

                        .interactive-hero__grid-glow {
                            position: absolute;
                            top: -10%;
                            left: 5%;
                            width: min(70vw, 640px);
                            height: min(55vh, 480px);
                            background: radial-gradient(
                                ellipse at 35% 40%,
                                rgba(240, 70, 14, calc(0.05 + var(--hover) * 0.08)) 0%,
                                rgba(240, 70, 14, 0.02) 40%,
                                transparent 72%
                            );
                            animation: interactive-hero-glow-pulse 6s ease-in-out infinite;
                            transform: translate(
                                calc((var(--mx) - 0.28) * 48px),
                                calc((var(--my) - 0.22) * 36px)
                            );
                            will-change: transform;
                        }
                        .interactive-hero--active .interactive-hero__grid-glow {
                            animation-duration: 3.5s;
                        }

                        .interactive-hero__cursor-spotlight {
                            position: absolute;
                            left: calc(var(--mx) * 100%);
                            top: calc(var(--my) * 100%);
                            width: clamp(260px, 36vw, 480px);
                            height: clamp(260px, 36vw, 480px);
                            transform: translate(-50%, -50%);
                            background: radial-gradient(
                                circle,
                                rgba(240, 70, 14, calc(0.08 + var(--hover) * 0.16)) 0%,
                                rgba(240, 70, 14, calc(0.03 + var(--hover) * 0.05)) 38%,
                                transparent 70%
                            );
                            opacity: calc(0.25 + var(--hover) * 0.75);
                            filter: blur(calc(12px - var(--hover) * 6px));
                            will-change: left, top;
                        }

                        .interactive-hero__crosshair {
                            position: absolute;
                            pointer-events: none;
                            opacity: calc(var(--hover) * 0.65);
                        }
                        .interactive-hero__crosshair--h {
                            left: 0;
                            right: 0;
                            top: calc(var(--my) * 100%);
                            height: 1px;
                            background: linear-gradient(
                                90deg,
                                transparent 0%,
                                rgba(240, 70, 14, 0.3) 18%,
                                rgba(240, 70, 14, 0.6) 50%,
                                rgba(240, 70, 14, 0.3) 82%,
                                transparent 100%
                            );
                            transform: translateY(-50%);
                        }
                        .interactive-hero__crosshair--v {
                            top: 0;
                            bottom: 0;
                            left: calc(var(--mx) * 100%);
                            width: 1px;
                            background: linear-gradient(
                                180deg,
                                transparent 0%,
                                rgba(240, 70, 14, 0.3) 18%,
                                rgba(240, 70, 14, 0.6) 50%,
                                rgba(240, 70, 14, 0.3) 82%,
                                transparent 100%
                            );
                            transform: translateX(-50%);
                        }

                        .interactive-hero__grid-scan {
                            position: absolute;
                            top: -35%;
                            width: 1px;
                            height: 32%;
                            opacity: 0;
                            animation: interactive-hero-grid-scan linear infinite;
                        }
                        .interactive-hero--active .interactive-hero__grid-scan:nth-child(7) { animation-duration: 3.4s; }
                        .interactive-hero--active .interactive-hero__grid-scan:nth-child(8) { animation-duration: 4.8s; }
                        .interactive-hero--active .interactive-hero__grid-scan:nth-child(9) { animation-duration: 3.1s; }
                        .interactive-hero--active .interactive-hero__grid-scan:nth-child(10) { animation-duration: 4.4s; }
                        .interactive-hero--active .interactive-hero__grid-scan:nth-child(11) { animation-duration: 3.6s; }
                        .interactive-hero--active .interactive-hero__grid-scan:nth-child(12) { animation-duration: 5.3s; }

                        .interactive-hero__grid-scan:nth-child(7) {
                            left: 8%;
                            background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.14), transparent);
                            animation-duration: 5.2s;
                        }
                        .interactive-hero__grid-scan:nth-child(8) {
                            left: 22%;
                            background: linear-gradient(to bottom, transparent, rgba(240, 70, 14, 0.4), transparent);
                            height: 22%;
                            animation-duration: 7.5s;
                            animation-delay: -2.1s;
                            filter: blur(0.4px);
                        }
                        .interactive-hero__grid-scan:nth-child(9) {
                            left: 38%;
                            background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1), transparent);
                            animation-duration: 4.8s;
                            animation-delay: -1.2s;
                        }
                        .interactive-hero__grid-scan:nth-child(10) {
                            left: 55%;
                            background: linear-gradient(to bottom, transparent, rgba(240, 70, 14, 0.32), transparent);
                            height: 26%;
                            animation-duration: 6.8s;
                            animation-delay: -3.6s;
                            filter: blur(0.4px);
                        }
                        .interactive-hero__grid-scan:nth-child(11) {
                            left: 71%;
                            background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.12), transparent);
                            animation-duration: 5.6s;
                            animation-delay: -0.6s;
                        }
                        .interactive-hero__grid-scan:nth-child(12) {
                            left: 88%;
                            background: linear-gradient(to bottom, transparent, rgba(240, 70, 14, 0.26), transparent);
                            height: 18%;
                            animation-duration: 8.2s;
                            animation-delay: -4.4s;
                            filter: blur(0.4px);
                        }

                        .interactive-hero__grid-bg::after {
                            content: "";
                            position: absolute;
                            inset: 0;
                            background: radial-gradient(
                                ellipse 85% 65% at calc(var(--mx) * 100%) calc(var(--my) * 100%),
                                transparent 22%,
                                rgba(245, 245, 245, calc(0.5 + var(--hover) * 0.2)) 58%,
                                #f5f5f5 80%
                            );
                            pointer-events: none;
                        }

                        @keyframes interactive-hero-grid-drift {
                            from { transform: translate(0, 0); }
                            to { transform: translate(48px, 48px); }
                        }
                        @keyframes interactive-hero-grid-drift-reverse {
                            from { transform: translate(0, 0); }
                            to { transform: translate(-24px, -24px); }
                        }
                        @keyframes interactive-hero-glow-pulse {
                            0%, 100% { opacity: 0.6; transform: translate(
                                calc((var(--mx) - 0.28) * 48px),
                                calc((var(--my) - 0.22) * 36px)
                            ) scale(1); }
                            50% { opacity: 1; transform: translate(
                                calc((var(--mx) - 0.28) * 48px + 14px),
                                calc((var(--my) - 0.22) * 36px + 10px)
                            ) scale(1.08); }
                        }
                        @keyframes interactive-hero-grid-scan {
                            0% { top: -40%; opacity: 0; }
                            10% { opacity: 1; }
                            85% { opacity: 1; }
                            100% { top: 110%; opacity: 0; }
                        }

                        @media (prefers-reduced-motion: reduce) {
                            .interactive-hero__grid-drift--primary,
                            .interactive-hero__grid-drift--secondary,
                            .interactive-hero__grid-glow,
                            .interactive-hero__grid-scan {
                                animation: none;
                            }
                            .interactive-hero__grid-parallax {
                                transform: none !important;
                            }
                            .interactive-hero__cursor-spotlight,
                            .interactive-hero__crosshair {
                                display: none;
                            }
                        }
                    `,
                }}
            />
        </>
    );
}
