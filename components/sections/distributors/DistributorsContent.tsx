import type { ReactNode } from "react";
import PageContent, { PAGE_CONTENT_STYLE } from "@/components/shared/PageContent";

export const DISTRIBUTORS_CONTENT_STYLE = PAGE_CONTENT_STYLE;

export default function DistributorsContent({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <PageContent className={`distributors-content ${className}`.trim()}>
            {children}
        </PageContent>
    );
}
