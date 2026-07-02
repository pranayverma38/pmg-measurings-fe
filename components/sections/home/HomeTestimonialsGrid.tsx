"use client";

import { useEffect, useRef } from "react";
import RevealText from "@/components/effects/RevealText";

interface Testimonial {
    quote: string;
    avatar: string;
    name: string;
    role: string;
    delay: string;
    dark?: boolean;
}

const COL1: Testimonial[] = [
    {
        quote:
            "We switched our entire site crew to PMG Master Series tapes. The blade stays rigid at full extension and the lock holds firm — even after months of daily use on concrete and steel framing.",
        avatar: "/assets/imgs/template/avatar/avatar-6.webp",
        name: "Rajesh Kumar",
        role: "Site Superintendent, BuildRight Infrastructure, Mumbai",
        delay: ".05",
    },
    {
        quote:
            "As a distributor, consistency matters. PMG measuring tapes arrive well-calibrated, the cases hold up in transit, and our retail customers rarely return them. The Signature Series is our top seller.",
        avatar: "/assets/imgs/template/avatar/avatar-7.webp",
        name: "Priya Sharma",
        role: "Procurement Manager, Allied Hardware Supplies, Delhi",
        delay: ".15",
    },
];

const COL2: Testimonial[] = [
    {
        quote:
            "The Grip Series is exactly what I needed for long days on the job. Comfortable in the hand, easy to read markings, and the standout is impressive for a compact 5m tape.",
        avatar: "/assets/imgs/template/avatar/avatar-8.webp",
        name: "Arjun Menon",
        role: "Finish Carpenter, Precision Woodworks, Bengaluru",
        delay: ".1",
        dark: true,
    },
    {
        quote:
            "Our glass installation team relies on PMG Glass Series tapes for scratch-free measurement on coated panels. Accurate, durable, and purpose-built for delicate surfaces.",
        avatar: "/assets/imgs/template/avatar/avatar-9.webp",
        name: "Ananya Reddy",
        role: "Operations Lead, ClearView Glazing, Hyderabad",
        delay: ".2",
    },
];

const COL3: Testimonial[] = [
    {
        quote:
            "For everyday trade work, the Eco Series delivers real value — reliable accuracy at a price point that works for bulk orders across our franchise network.",
        avatar: "/assets/imgs/template/avatar/avatar-10.webp",
        name: "Vikram Patel",
        role: "Regional Buyer, TradeMart Tools, Ahmedabad",
        delay: ".15",
    },
    {
        quote:
            "The Lockline Series has been a game changer for our fabrication shop. The blade lock is rock solid and the markings stay readable after heavy daily use on oily workshop floors.",
        avatar: "/assets/imgs/template/avatar/avatar-11.webp",
        name: "Suresh Nair",
        role: "Workshop Foreman, SteelCraft Fabricators, Chennai",
        delay: ".25",
    },
];

function Card({ t }: { t: Testimonial }) {
    return (
        <article
            className={`card-home-12-testimonial${t.dark ? " card-home-12-testimonial--dark" : ""} at_fade_anim`}
            data-fade-from="bottom"
            data-delay={t.delay}
        >
            <p className="card-home-12-testimonial__quote mb-0">{t.quote}</p>
            <footer className="card-home-12-testimonial__author">
                <img className="card-home-12-testimonial__avatar" src={t.avatar} alt={t.name} />
                <div className="card-home-12-testimonial__meta">
                    <span className="card-home-12-testimonial__name">{t.name}</span>
                    <span className="card-home-12-testimonial__role">{t.role}</span>
                </div>
            </footer>
        </article>
    );
}

export default function HomeTestimonialsGrid() {
    const scrollColRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = scrollColRef.current;
        if (!el) return;

        let mounted = true;
        let mm: { revert?: () => void } | null = null;

        const init = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);

            try {
                const ScrollSmootherMod = await import("gsap/ScrollSmoother");
                const ScrollSmoother = ScrollSmootherMod.default as {
                    get?: () => unknown;
                };
                if (ScrollSmoother?.get) {
                    for (let i = 0; i < 40 && !ScrollSmoother.get(); i++) {
                        await new Promise((resolve) => setTimeout(resolve, 50));
                    }
                }
            } catch {
                // ScrollSmoother is optional (Club GSAP)
            }

            if (!mounted || !scrollColRef.current) return;

            const col = scrollColRef.current;
            const media = gsap.matchMedia();
            mm = media;

            media.add("(min-width: 768px)", () => {
                const tween = gsap.to(col, {
                    y: -100,
                    duration: 1.5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: col,
                        start: "top 70%",
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                });

                ScrollTrigger.refresh();

                return () => {
                    tween.scrollTrigger?.kill();
                    tween.kill();
                    gsap.set(col, { clearProps: "transform" });
                };
            });

            media.add("(max-width: 767.98px)", () => {
                gsap.set(col, { clearProps: "transform" });
                return () => {};
            });
        };

        const run = () => {
            window.setTimeout(() => {
                void init();
            }, 100);
        };

        if (document.readyState === "complete") {
            run();
        } else {
            window.addEventListener("load", run, { once: true });
        }

        return () => {
            mounted = false;
            window.removeEventListener("load", run);
            mm?.revert?.();
            mm = null;
        };
    }, []);

    return (
        <section className="sec-7-home-12" aria-label="Testimonials">
            <div className="container">
                <header className="sec-7-home-12__header">
                    <p className="sec-7-home-12__eyebrow at_fade_anim" data-fade-from="bottom" data-delay=".05">
                        TESTIMONIALS
                    </p>
                    <h2 className="sec-7-home-12__title reveal-text mb-0">
                        <RevealText>Trusted by professionals worldwide</RevealText>
                    </h2>
                </header>

                <div className="sec-7-home-12__row">
                    <div className="sec-7-home-12__col">
                        {COL1.map((t, i) => (
                            <Card key={i} t={t} />
                        ))}
                    </div>
                    <div
                        ref={scrollColRef}
                        className="sec-7-home-12__col sec-7-home-12__col--offset-lg"
                    >
                        {COL2.map((t, i) => (
                            <Card key={i} t={t} />
                        ))}
                    </div>
                    <div className="sec-7-home-12__col sec-7-home-12__col--offset-sm">
                        {COL3.map((t, i) => (
                            <Card key={i} t={t} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
