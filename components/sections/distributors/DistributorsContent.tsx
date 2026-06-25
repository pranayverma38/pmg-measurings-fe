import type { ReactNode } from "react";

export const DISTRIBUTORS_CONTENT_STYLE: React.CSSProperties = {
    maxWidth: 1100,
    width: "100%",
    padding: "0 18px",
    margin: "0 auto",
    boxSizing: "border-box",
};

export default function DistributorsContent({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={`distributors-content ${className}`.trim()} style={DISTRIBUTORS_CONTENT_STYLE}>
            {children}
        </div>
    );
}
