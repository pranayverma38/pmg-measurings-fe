declare module 'liquid-glass-react' {
    import type { CSSProperties, ReactNode, RefObject } from 'react';

    interface LiquidGlassProps {
        children: ReactNode;
        displacementScale?: number;
        blurAmount?: number;
        saturation?: number;
        aberrationIntensity?: number;
        elasticity?: number;
        cornerRadius?: number;
        globalMousePos?: { x: number; y: number };
        mouseOffset?: { x: number; y: number };
        mouseContainer?: RefObject<HTMLElement | null> | null;
        className?: string;
        padding?: string;
        style?: CSSProperties;
        overLight?: boolean;
        mode?: 'standard' | 'polar' | 'prominent' | 'shader';
        onClick?: () => void;
    }

    const LiquidGlass: (props: LiquidGlassProps) => JSX.Element;
    export default LiquidGlass;
}
