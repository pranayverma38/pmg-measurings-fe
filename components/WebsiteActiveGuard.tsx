"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function WebsiteActiveGuard({
    isWebsiteActive,
    children,
}: {
    isWebsiteActive: boolean;
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        if (!isWebsiteActive && pathname !== "/coming-soon") {
            router.replace("/coming-soon");
        }
    }, [isWebsiteActive, pathname, router]);

    if (!isWebsiteActive && pathname !== "/coming-soon") {
        return null;
    }

    return children;
}
