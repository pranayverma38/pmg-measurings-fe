"use client";

import LiquidGlass from "liquid-glass-react";
import type { CSSProperties, ReactNode } from "react";

interface Props {
    children: ReactNode;
    cornerRadius?: number;
    style?: CSSProperties;
    className?: string;
}

export default function LiquidGlassBadge({ children, cornerRadius = 14, style, className }: Props) {
    return (
        <LiquidGlass
            mode="prominent"
            displacementScale={22}
            blurAmount={10}
            saturation={138}
            aberrationIntensity={3.5}
            cornerRadius={cornerRadius}
            overLight={false}
            style={style}
            className={className}
        >
            {children}
        </LiquidGlass>
    );
}
