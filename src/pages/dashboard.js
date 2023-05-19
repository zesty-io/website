// import { AccountPageloading } from 'components/accounts/ui/loading';
import Dashboard from 'components/accounts/dashboard';
import { useZestyStore } from 'store';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';
import { ZestyAccountsHead } from 'components/globals/ZestyAccountsHead';
import { getIsAuthenticated } from 'utils';
import { fetchPage } from 'lib/api';

function DashboardPage(props) {
  const isLoggedIn = useIsLoggedIn();
  const store = useZestyStore();
  console.log(store, 444);

  //   if (loading) {
  //     return <AccountPageloading title={'Zesty.io'} />;
  //   }

  // should redirect if not
  //   if (content?.zesty?.isAuthenticated) {
  //     return <Dashboard content={content} />;
  //   }

  return (
    <InstanceContainer isDashboard>
      <ZestyAccountsHead title={'Zesty.io - Accounts'} />
      <Dashboard content={props} />;
    </InstanceContainer>
  );
}

export default DashboardPage;

const cache = {};
export async function getServerSideProps({ res, resolvedUrl, req }) {
  // this getssrprops should run if login in accounts and docs
  res.setHeader('Cache-Control', 'private');

  const isAuthenticated = getIsAuthenticated(res);
  // issue:  multiple call of getServersideprops
  let data = await fetchPageData(resolvedUrl);

  data = {
    ...data,
    zesty: {
      isAuthenticated,
      templateUrl: process.env.TEMPLATE_URL,
    },
    algolia: {
      apiKey: process.env.ALGOLIA_APIKEY,
      appId: process.env.ALGOLIA_APPID,
      index: process.env.ALGOLIA_INDEX,
    },
  };

  if (!isAuthenticated && isProtectedRoute(resolvedUrl)) {
    return {
      redirect: {
        destination: '/login/',
      },
    };
  }

  // logic needed to prevent caching in homepage for zesty users
  if (req?.headers?.cookies?.include('APP_SID')) {
    data.zestyUser = true;
  } else {
    data.zestyUser = false;
  }

  // its usage is for marketplace
  res.setHeader('set-cookie', `PRODUCTION=${process.env.PRODUCTION}`);
  // Pass data to the page via props
  return { props: { ...data } };
}

async function fetchPageData(url) {
  // Check if the data is already cached
  if (cache[url]) {
    return cache[url];
  }

  // Fetch the page data
  const data = await fetchPage(url);

  // Cache the data
  cache[url] = data;

  return data;
}
const isProtectedRoute = (pathname) => {
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
