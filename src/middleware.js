import { NextResponse } from 'next/server';

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const PUBLIC_FILE = /\.(.*)$/;

  if (!isAuthenticated(request)) {
    if (isProtectedRoute(pathname)) {
      return NextResponse.redirect(new URL('/login/', request.url));
    }
    return NextResponse.next();
  } else {
    if (isProtectedRoute(pathname) || PUBLIC_FILE.test(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/instances/', request.url));
    }
  }
}

const isAuthenticated = async (request) => {
  const NODE_ENV = process.env.NODE_ENV;
  const verifyUrl =
    NODE_ENV === 'development'
      ? 'https://auth.api.dev.zesty.io/verify'
      : 'https://auth.api.zesty.io/verify';

  const appSid =
    request.cookies.get(
      NODE_ENV === 'production' ? 'APP_SID' : 'DEV_APP_SID',
    ) || '';

  const response = await fetch(verifyUrl, {
    headers: {
      Authorization: `Bearer ${appSid}`,
    },
  });
  const data = await response.json();

  return data?.status === 'OK' ? true : false;
};

const isProtectedRoute = (pathname) => {
  if (
    pathname.startsWith('/instances/') ||
    pathname.startsWith('/profile/') ||
    pathname.startsWith('/teams/')
  )
    return true;

  return false;
};

export const config = {
  matcher: ['/:path*'],
};
