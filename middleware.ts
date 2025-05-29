import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	const sessionToken = request.cookies.get("better-auth.session_token")?.value;

	const protectedRoutes = ["/dashboard"];
	const isProtectedRoute = protectedRoutes.some((route) =>
		request.nextUrl.pathname.startsWith(route)
	);

	if (isProtectedRoute && !sessionToken) {
		return NextResponse.redirect(new URL("/auth/signin", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*"],
};
