export default async function getServerSideProps({ req, res }) {
  let isAuthenticated = JSON.parse(req.cookies.isAuthenticated || false);

  if (!isAuthenticated && isProtectedRoute(req.url)) {
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
