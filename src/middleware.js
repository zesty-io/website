import { NextResponse } from 'next/server';
// import { resolve } from 'url';

export async function middleware(request) {
  // auth checking
  const response = NextResponse.next();
  const isAuthenticated = await isUserAuthenticated(request);
  response.cookies.set('isAuthenticated', isAuthenticated);

  // if (request.nextUrl.pathname === '/' && isAuthenticated) {
  //   const redirectUrl = resolve(request.nextUrl.origin, '/dashboard/');
  //   return NextResponse.redirect(redirectUrl, 302);
  // }
  if (request.nextUrl.pathname === '/' && isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  return response;
}

export const isUserAuthenticated = async (request, isGSSP = false) => {
  let cookieProd = isGSSP
    ? request.cookies['PRODUCTION']
    : request.cookies?.get('PRODUCTION');
  let isProd = JSON.parse(cookieProd?.value || cookieProd || true);

  const verifyUrl = !isProd
    ? 'https://auth.api.dev.zesty.io/verify'
    : 'https://auth.api.zesty.io/verify';

  const appSid = isGSSP
    ? request.cookies[isProd ? 'APP_SID' : 'DEV_APP_SID']
    : request.cookies?.get(isProd ? 'APP_SID' : 'DEV_APP_SID');

  const response = await fetch(verifyUrl, {
    headers: {
      Authorization: `Bearer ${appSid?.value || appSid}`,
    },
  });
  const data = await response.json();

  return data?.code === 200 ? true : false;
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|favicon.ico).*)',
  ],
};
