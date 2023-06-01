import axios from 'axios';
import { getIsAuthenticated } from 'utils';

const POSTMAN_JSON_DATA = [
  'https://raw.githubusercontent.com/zesty-io/zesty-docs/main/Postman%20Collections/instances-api.json',
  'https://raw.githubusercontent.com/zesty-io/zesty-docs/main/Postman%20Collections/auth-api.json',
  'https://raw.githubusercontent.com/zesty-io/zesty-docs/main/Postman%20Collections/accounts-api.json',
  // 'https://raw.githubusercontent.com/zesty-io/zesty-org/master/Postman%20Collections/media-api.json',
];

const parselyTourEndpoint =
  'https://parsley.zesty.io/-/instant/6-c9c624-14bzxf.json';

const cache = {};

const getMainCollection = async () => {
  // Check if the result is already cached
  if (cache.mainCollection) {
    return cache.mainCollection;
  }

  const getPostmanData = async () => {
    const res = POSTMAN_JSON_DATA.map(async (e) => {
      return await axios({ url: e, timeout: 3000, method: 'get' }).then(
        (e) => e.data,
      );
    });
    return res;
  };

  const result = await Promise.all(await getPostmanData());

  // Cache the result
  cache.mainCollection = result;

  return result;
};

const getParsleyTourData = async () => {
  // Check if the result is already cached
  if (cache.parsleyTourData) {
    return cache.parsleyTourData;
  }

  const result = await axios({
    url: parselyTourEndpoint,
    timeout: 3000,
    method: 'get',
  }).then((e) => e.data);

  // Cache the result
  cache.parsleyTourData = result;

  return result;
};
// only load routes data for specific pages
// timeout on fetch 10 sec or 5
// identify areas to cache request or page caching
export default async function getServerSideProps({ res, resolvedUrl }) {
  // this getssrprops should run if login in accounts and docs
  res.setHeader('Cache-Control', 'private');
  let docsPageData = [];
  const isDocsPage = resolvedUrl.includes('/docs');
  const isAuthenticated = getIsAuthenticated(res);

  // this should rolled into the normal serversideprops
  if (isDocsPage) {
    docsPageData = await Promise.all([
      getMainCollection(),
      getParsleyTourData(),
    ]);
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
        data: docsPageData[0] || {},
      },
      parsley: {
        tour: docsPageData[1] || {},
      },
    },
  };
}

export const isProtectedRoute = (pathname) => {
  if (pathname === '/') {
    return false;
  }

  const protectedRoutes = [
    '/instances/',
    '/profile/',
    '/teams/',
    '/logout/',
    '/dashboard/',
  ];

  for (let route of protectedRoutes) {
    if (pathname.startsWith(route)) return true;
  }

  return false;
};
