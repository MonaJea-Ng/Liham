import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;

    if (token && request.nextUrl.pathname.startsWith("/a")) {
        return NextResponse.redirect(new URL("/b", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/a/:path*",
};
