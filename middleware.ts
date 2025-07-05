import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isAuthenticated } from '@/lib/auth/auth'

// Mock authentication check – will examine a cookie set by the client.

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow internal paths and static assets without auth
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.match(/\.(?:png|jpg|jpeg|svg|webp|gif|ico)$/)
  ) {
    return NextResponse.next()
  }

  if (!isAuthenticated(request) && pathname !== '/login' && pathname !== '/register') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

// Apply middleware to all routes except static assets
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
} 