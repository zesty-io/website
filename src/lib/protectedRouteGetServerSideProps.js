import { parseCookie } from 'utils';

export default async function getServerSideProps({ req, res, resolvedUrl }) {
  const getHeaderCookie = res.getHeader('set-cookie')?.[0];
  let isAuthenticated = JSON.parse(
    parseCookie(getHeaderCookie)?.isAuthenticated || false,
  );

  if (!isAuthenticated && isProtectedRoute(resolvedUrl)) {
    return {
      redirect: {
        destination: '/login/',
      },
    };
  }

  return {
    props: {},
  };
}

const isProtectedRoute = (pathname) => {
  const protectedRoutes = ['/instances/', '/profile/', '/teams/', '/logout/'];

  for (let route of protectedRoutes) {
    if (pathname.startsWith(route)) return true;
  }

  return false;
};
