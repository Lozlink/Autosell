import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protect /admin pages (but not /admin/login)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const isApi = pathname.startsWith('/api')
    if (!isApi) {
      const adminCookie = request.cookies.get('admin_auth')?.value
      if (adminCookie !== 'true') {
        const url = request.nextUrl.clone()
        url.pathname = '/admin/login'
        return NextResponse.redirect(url)
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}
