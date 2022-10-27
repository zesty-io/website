import { NextResponse } from 'next/server';

export async function middleware(request) {
  // https redirect

  if (
    JSON.parse(process.env.PRODUCTION) &&
    !request.nextUrl.origin.includes('localhost') &&
    (request.headers.get('x-forwarded-proto') !== 'https' ||
      request.headers.get('referer')?.split(':')[0] !== 'https')
  ) {
    return NextResponse.redirect(
      `https://${request.headers.get('host')}${request.nextUrl.pathname}`,
      301,
    );
  }

  // auth checking
  const response = NextResponse.next();
  const isAuthenticated = await isUserAuthenticated(request);
  response.cookies.set('isAuthenticated', isAuthenticated);
  return response;
}

const isUserAuthenticated = async (request) => {
  let isProd = request.cookies.get('PRODUCTION') || true;

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

export const config = {
  matcher: ['/:path*'],
};
