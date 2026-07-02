"use client";

import { useRef, type ReactNode } from "react";
import InteractiveHeroGridBg from "@/components/shared/InteractiveHeroGridBg";

type InteractiveHeroSectionProps = {
    children: ReactNode;
    className?: string;
};

export default function InteractiveHeroSection({ children, className = "" }: InteractiveHeroSectionProps) {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            ref={sectionRef}
            className={`interactive-hero p-relative overflow-hidden bg-neutral-50 ${className}`.trim()}
        >
            <InteractiveHeroGridBg sectionRef={sectionRef} />
            {children}
        </section>
    );
}
