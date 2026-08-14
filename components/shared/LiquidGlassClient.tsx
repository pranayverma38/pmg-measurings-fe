"use client";

import LiquidGlass from "liquid-glass-react";
import type { CSSProperties, ReactNode } from "react";

interface LiquidGlassClientProps {
    children: ReactNode;
    /** pill | card | bar | badge */
    variant?: "pill" | "card" | "bar" | "badge";
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
}

const VARIANT_DEFAULTS = {
    pill: {
        mode: "prominent" as const,
        displacementScale: 28,
        blurAmount: 8,
        saturation: 140,
        aberrationIntensity: 3,
        elasticity: 0.15,
        cornerRadius: 999,
        overLight: false,
    },
    card: {
        mode: "standard" as const,
        displacementScale: 32,
        blurAmount: 14,
        saturation: 135,
        aberrationIntensity: 2.5,
        elasticity: 0.12,
        cornerRadius: 24,
        overLight: false,
    },
    bar: {
        mode: "standard" as const,
        displacementScale: 24,
        blurAmount: 16,
        saturation: 130,
        aberrationIntensity: 1.8,
        elasticity: 0.1,
        cornerRadius: 0,
        overLight: false,
    },
    badge: {
        mode: "prominent" as const,
        displacementScale: 20,
        blurAmount: 10,
        saturation: 145,
        aberrationIntensity: 4,
        elasticity: 0.18,
        cornerRadius: 14,
        overLight: false,
    },
};

export default function LiquidGlassClient({
    children,
    variant = "card",
    className,
    style,
    onClick,
}: LiquidGlassClientProps) {
    const defaults = VARIANT_DEFAULTS[variant];
    return (
        <LiquidGlass
            {...defaults}
            className={className}
            style={style}
            onClick={onClick}
        >
            {children}
        </LiquidGlass>
    );
}
