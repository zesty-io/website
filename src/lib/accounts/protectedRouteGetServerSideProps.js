import { getIsAuthenticated } from 'utils';

export default async function getServerSideProps({ res, resolvedUrl }) {
  const isAuthenticated = getIsAuthenticated(res);

  if (!isAuthenticated && isProtectedRoute(resolvedUrl)) {
    return {
      redirect: {
        destination: '/login/',
      },
    };
  }

  return {
    props: {
      zesty: {
        isAuthenticated,
        templateUrl: process.env.TEMPLATE_URL,
      },
    },
  };
}

export const isProtectedRoute = (pathname) => {
  const protectedRoutes = ['/instances/', '/profile/', '/teams/', '/logout/'];

  for (let route of protectedRoutes) {
    if (pathname.startsWith(route)) return true;
  }

  return false;
};
