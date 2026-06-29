import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAllowedPath } from "@/lib/allowedRoutes";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (isAllowedPath(pathname)) {
        return NextResponse.next();
    }

    return NextResponse.rewrite(new URL("/_not-found", request.url));
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|assets/|scripts/).*)",
    ],
};
