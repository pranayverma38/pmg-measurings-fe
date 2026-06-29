"use client";

import { notFound, usePathname } from "next/navigation";
import { isAllowedPath } from "@/lib/allowedRoutes";

export default function RouteAllowlistGuard({
    isWebsiteActive,
    children,
}: {
    isWebsiteActive: boolean;
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    if (!isWebsiteActive && pathname === "/coming-soon") {
        return children;
    }

    if (!isAllowedPath(pathname)) {
        notFound();
    }

    return children;
}
