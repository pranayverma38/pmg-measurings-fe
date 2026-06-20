"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Loading() {
    const loaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loader = loaderRef.current;
        if (!loader) return;

        const bars = loader.querySelectorAll(".bar");
        const logoImg = loader.querySelector(".page-loader-logo img") as HTMLImageElement | null;

        const runAnimations = () => {
            gsap.to(bars, {
                duration: 1.5,
                height: 0,
                stagger: { amount: 0.5 },
                ease: "power4.inOut",
            });

            setTimeout(() => {
                gsap.to(loader, {
                    duration: 0.5,
                    opacity: 0,
                    ease: "power2.inOut",
                    onComplete: () => {
                        loader.style.display = "none";
                    },
                });
            }, 900);
        };

        if (logoImg) {
            if (logoImg.complete) {
                gsap.to(logoImg, { duration: 1, scale: 1.5 });
                runAnimations();
            } else {
                logoImg.addEventListener("load", function onLogoLoad() {
                    logoImg.removeEventListener("load", onLogoLoad);
                    gsap.to(logoImg, { duration: 1, scale: 1.5 });
                    runAnimations();
                });
            }
        } else {
            runAnimations();
        }
    }, []);

    return (
        <>
            <div className="page-loader" ref={loaderRef}>
                <div className="page-loader-logo hide-animation">
                    <Image
                        alt="orisa"
                        src="/assets/imgs/template/logo/logo-w.svg"
                        width={98}
                        height={30}
                        style={{ width: "auto", height: "auto" }}
                    />
                </div>
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
            </div>
        </>
    );
}
