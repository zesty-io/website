import fetchTicketThread from 'lib/supportPortal/fetchTicketThreads';
import { getIsAuthenticated } from 'utils';

export default async function getServerSideProps({
  res,
  resolvedUrl,
  query,
  req,
}) {
  const isAuthenticated = getIsAuthenticated(res);
  let ticket = {};

  if (!!query && query.ticketNumber) {
    ticket = await fetchTicketThread(query, req);
  }

  if (!isAuthenticated && isProtectedRoute(resolvedUrl)) {
    return {
      redirect: {
        destination: '/login/',
      },
    };
  }

  return {
    props: {
      ticket,
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
