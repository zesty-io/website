import axios from 'axios';
import { getIsAuthenticated } from 'utils';
import fetchTicketThread from 'lib/supportPortal/fetchTicketThreads';

const POSTMAN_JSON_DATA = [
  'https://raw.githubusercontent.com/zesty-io/zesty-docs/main/Postman%20Collections/instances-api.json',
  'https://raw.githubusercontent.com/zesty-io/zesty-docs/main/Postman%20Collections/auth-api.json',
  'https://raw.githubusercontent.com/zesty-io/zesty-docs/main/Postman%20Collections/accounts-api.json',
  // 'https://raw.githubusercontent.com/zesty-io/zesty-org/master/Postman%20Collections/media-api.json',
];

const parselyTourEndpoint =
  'https://parsleydev-dev.webengine.zesty.io/-/instant/6-c9c624-14bzxf.json';

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

const getParsleyTourData = async () => {
  return await axios.get(parselyTourEndpoint).then((e) => e.data);
};
// only load routes data for specific pages
// timeout on fetch 10 sec or 5
// identify areas to cache request or page caching
export default async function getServerSideProps({
  res,
  resolvedUrl,
  query,
  req,
}) {
  let mainCollections = {};
  let parsleyTourData = {};
  const isDocsPage = resolvedUrl.includes('/docs');
  const isAuthenticated = getIsAuthenticated(res);

  let ticket = {};

  if (!!query && query.ticketNumber) {
    ticket = await fetchTicketThread(query, req);
  }

  if (isDocsPage) {
    mainCollections = await getMainCollection();
    parsleyTourData = await getParsleyTourData();
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
      algolia: {
        apiKey: process.env.ALGOLIA_APIKEY,
        appId: process.env.ALGOLIA_APPID,
        index: process.env.ALGOLIA_INDEX,
      },
      docs: {
        data: mainCollections,
      },
      parsley: {
        tour: parsleyTourData,
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
