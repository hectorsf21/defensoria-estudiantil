import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { updateSession } from '@/lib/auth';

export async function middleware(request: NextRequest) {
    // Update session expiration if it exists
    const response = await updateSession(request);

    const session = request.cookies.get('session');
    const isDashboard = request.nextUrl.pathname.startsWith('/dashboard');
    const isLoginPage = request.nextUrl.pathname === '/';

    // Redirect unauthenticated users from dashboard to login (root)
    if (isDashboard && !session) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // Redirect authenticated users from login (root) to dashboard
    if (isLoginPage && session) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return response || NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/'],
};
