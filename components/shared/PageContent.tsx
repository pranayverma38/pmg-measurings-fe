import type { ReactNode } from "react";

export const PAGE_CONTENT_STYLE: React.CSSProperties = {
    maxWidth: 1100,
    width: "100%",
    padding: "0 18px",
    margin: "0 auto",
    boxSizing: "border-box",
};

export default function PageContent({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={`page-content ${className}`.trim()} style={PAGE_CONTENT_STYLE}>
            {children}
        </div>
    );
}
