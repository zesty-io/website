import { NextResponse } from 'next/server';

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const PUBLIC_FILE = /\.(.*)$/;

  const isAuthenticated = await isUserAuthenticated(request);

  if (!isAuthenticated) {
    if (isProtectedRoute(pathname))
      return NextResponse.redirect(new URL('/login/', request.url));

    return NextResponse.next();
  } else {
    if (isProtectedRoute(pathname) || PUBLIC_FILE.test(pathname))
      return NextResponse.next();

    return NextResponse.redirect(new URL('/instances/', request.url));
  }
}

const isUserAuthenticated = async (request) => {
  let isProd = request.cookies.get('PRODUCTION');
  isProd = isProd === 'false' || isProd === false ? false : true;
  const verifyUrl = !isProd
    ? 'https://auth.api.dev.zesty.io/verify'
    : 'https://auth.api.zesty.io/verify';

  const appSid = request.cookies.get(isProd ? 'APP_SID' : 'DEV_APP_SID');

  const response = await fetch(verifyUrl, {
    headers: {
      Authorization: `Bearer ${appSid}`,
    },
  });
  const data = await response.json();

  return data?.code === 200 ? true : false;
};

const isProtectedRoute = (pathname) => {
  const protectedRoutes = ['/instances/', '/profile/', '/teams/'];

  for (let route of protectedRoutes) {
    if (pathname.startsWith(route)) return true;
  }

  return false;
};

export const config = {
  matcher: ['/:path*'],
};
