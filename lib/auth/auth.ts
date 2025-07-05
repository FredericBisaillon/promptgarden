export type MaybeRequest = {
  // Minimal shape used in middleware; we don't want to import NextRequest to keep this file environment-agnostic.
  cookies?: {
    get: (name: string) => { value?: string } | undefined
  }
} | undefined

/**
 * Check whether the user is considered authenticated.
 *
 * On the client we rely on `localStorage` and a browser cookie.
 * On the server (e.g. Next.js middleware) we inspect a cookie attached to the incoming request.
 */
export function isAuthenticated(req?: MaybeRequest): boolean {
  // Server / middleware execution
  if (req && typeof req === 'object' && 'cookies' in req && req.cookies) {
    // Edge Runtime cookies API
    const authCookie = (req.cookies.get as any)?.call(req.cookies, 'auth') as { value?: string } | undefined
    return authCookie?.value === '1'
  }

  // Client execution
  if (typeof window !== 'undefined') {
    try {
      if (window.localStorage.getItem('auth') === '1') return true
    } catch (_) {
      // localStorage may be unavailable (e.g. in private mode) – ignore
    }

    // Fallback to cookie on the client
    if (typeof document !== 'undefined') {
      return /(?:^|; )auth=1(?:;|$)/.test(document.cookie)
    }
  }

  return false
}

/**
 * Marks the user as authenticated.
 * This is ONLY for local development and is easily replaceable with a real auth solution later.
 */
export function login() {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem('auth', '1')
  } catch (_) {
    // Ignore if localStorage unavailable
  }
  document.cookie = 'auth=1; path=/'
}

/**
 * Clears the mock authentication state.
 */
export function logout() {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.removeItem('auth')
  } catch (_) {
    /* no-op */
  }
  // Expire the cookie
  document.cookie = 'auth=; path=/; max-age=0'
} 