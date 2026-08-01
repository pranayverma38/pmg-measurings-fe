"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ThemeRouteSync() {
    const pathname = usePathname();

    useEffect(() => {
        const html = document.documentElement;
        try {
            html.setAttribute("data-bs-theme", "light");
            html.style.colorScheme = "light";
            localStorage.setItem("theme", "light");
        } catch {
            html.setAttribute("data-bs-theme", "light");
            html.style.colorScheme = "light";
        }
    }, [pathname]);

    return null;
}
