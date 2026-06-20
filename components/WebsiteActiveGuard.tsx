"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function WebsiteActiveGuard({
    redirectToComingSoon,
    children,
}: {
    redirectToComingSoon: boolean;
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        if (redirectToComingSoon && pathname !== "/coming-soon") {
            router.replace("/coming-soon");
        }
    }, [redirectToComingSoon, pathname, router]);

    if (redirectToComingSoon && pathname !== "/coming-soon") {
        return null;
    }

    return children;
}
