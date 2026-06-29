"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomeRedirect() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/");
    }, [router]);

    return (
        <main style={{ padding: "2rem", textAlign: "center" }}>
            <p>
                Redirecting to <a href="/">home</a>…
            </p>
        </main>
    );
}
