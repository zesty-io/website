import axios from 'axios';
import { getIsAuthenticated } from 'utils';
import fetchTicketThread from 'lib/supportPortal/fetchTicketThreads';

const POSTMAN_JSON_DATA = [
  'https://raw.githubusercontent.com/zesty-io/zesty-org/master/Postman%20Collections/instances-api.json',
  'https://raw.githubusercontent.com/zesty-io/zesty-org/master/Postman%20Collections/auth-api.json',
  'https://raw.githubusercontent.com/zesty-io/zesty-org/master/Postman%20Collections/accounts-api.json',
  // 'https://raw.githubusercontent.com/zesty-io/zesty-org/master/Postman%20Collections/media-api.json',
];

const getMainCollection = async () => {
  const mainCollection = [];
  const getPostmanData = async () => {
    for (const url of POSTMAN_JSON_DATA) {
      await axios.get(url).then((e) => {
        mainCollection.push(e.data);
      });
    }
  };

  await getPostmanData();
  return mainCollection;
};

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

  const mainCollections = await getMainCollection();

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
      algolia: {
        apiKey: process.env.ALGOLIA_APIKEY,
        appId: process.env.ALGOLIA_APPID,
        index: process.env.ALGOLIA_INDEX,
      },
      docs: {
        data: mainCollections,
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
