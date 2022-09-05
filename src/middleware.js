import { NextResponse } from 'next/server';

export function middleware(request) {
  const isAuthenticated = request.cookies.get('isAuthenticated');
  //   const response = NextResponse.next();
  //   const appSid = request.cookies.get('APP_SID');
  //   const isUser = request.cookies.get('isUser');
  //   console.log(response.cookies, appSid, isAuthenticated, isUser, 222);

  if (!isAuthenticated) {
    return NextResponse.rewrite(new URL('/login/', request.url));
  }
}

export const config = {
  matcher: ['/instances/:path*', '/profile/:path*'],
};
