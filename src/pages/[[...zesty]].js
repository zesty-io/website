import { React, createContext } from 'react';
import { fetchGqlData, fetchPage } from 'lib/api';
import { githubFetch } from 'lib/githubFetch';
import { ZestyView } from 'lib/ZestyView';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';
import { getIsAuthenticated } from 'utils';
import { isUserAuthenticated } from 'middleware';
import dynamic from 'next/dynamic';

const MarketingMain = dynamic(() => import('layouts/Main/MarketingMain'));
const Main = dynamic(() => import('layouts/Main/'));

export const GlobalContext = createContext();
export default function Zesty(props) {
  const isLoggedIn = useIsLoggedIn();
  // for homepage navigation
  let bgcolor = 'transparent';

  return (
    <>
      <GlobalContext.Provider value={props}>
        {isLoggedIn ? (
          <Main
            model={props?.meta?.model_alternate_name}
            nav={props?.navigationTree}
            customRouting={props?.navigationCustom}
            url={props?.meta?.web?.uri}
            bgcolor={bgcolor}
          >
            <ZestyView content={props} />
          </Main>
        ) : (
          <MarketingMain
            model={props?.meta?.model_alternate_name}
            nav={props?.navigationTree}
            customRouting={props?.navigationCustom}
            flyoutNavigation={props?.flyoutNavigation}
            url={props?.meta?.web?.uri}
            bgcolor={bgcolor}
          >
            <ZestyView content={props} />
          </MarketingMain>
        )}
      </GlobalContext.Provider>
    </>
  );
}

const cacheData = {};

async function fetchData({ isProd = false, dataType }) {
  const cacheKey = `${dataType}Data`;

  // Check if the data is already cached
  if (cacheData[cacheKey]) {
    return cacheData[cacheKey];
  }

  // Fetch the data
  const data = await fetchGqlData(isProd, dataType);

  // Cache the data if PRODUCTION = true
  if (isProd) {
    cacheData[cacheKey] = data;
  }

  return data;
}

// This gets called on every request
export async function getServerSideProps({ req, res, resolvedUrl }) {
  const isProd = process.env.PRODUCTION === 'true' ? true : false;
  let isAuthenticated =
    (await isUserAuthenticated(req, true, isProd)) || getIsAuthenticated(res);
  // does not display with npm run dev

  res.setHeader('set-cookie', `PRODUCTION=${process.env.PRODUCTION}`);
  isProd &&
    res.setHeader(
      'Cache-Control',
      'public, max-age=3600, stale-while-revalidate=7200 ',
    );
  isProd && res.setHeader('Surrogate-Control', 'max-age=3600');

  res.setHeader(
    'Surrogate-Key',
    `${process.env.zesty.instance_zuid}, zesty.io`,
  );
  // Fetch the page data using the cache function
  let data = await fetchPage(resolvedUrl);
  // attempt to get page data relative to zesty

  let products = [];
  let productGlossary = [];
  let docs = [];

  if (req.url.includes('/product')) {
    products = await fetchData({ isProd, dataType: 'product' });
    productGlossary = await fetchData({ isProd, dataType: 'product_glossary' });
  }
  if (req.url.includes('/docs')) {
    docs = await fetchData({ isProd, dataType: 'zesty_docs' });
  }

  const sso = {
    githubUrl: process.env.GITHUB_SSO_URL,
    googleUrl: process.env.GOOGLE_SSO_URL,
    msUrl: process.env.MS_SSO_URL,
  };

  data = {
    ...data,
    zesty: {
      isAuthenticated,
      sso,
      templateUrl: process.env.TEMPLATE_URL,
      products,
      productGlossary,
      docs,
    },
    algolia: {
      apiKey: process.env.ALGOLIA_SEARCH_KEY,
      appId: process.env.ALGOLIA_APPID,
      index: process.env.ALGOLIA_INDEX,
    },
  };

  // This section holds data settings for fetching Github Data
  if (req.url.includes('/roadmap/') && process.env.GITHUB_AUTH) {
    data.github_data = await githubFetch({
      organization: `"Zesty-io"`,
      projectNumber: data.project_number,
      columns: data.max_column,
      cards: data.max_card,
      discussions: data.max_discussion,
    });
  }

  // generate a status 404 page
  if (data.error) return { notFound: true };

  if (resolvedUrl === '/' && isAuthenticated) {
    return {
      redirect: {
        destination: '/dashboard/',
        permanent: false,
      },
    };
  }

  if (resolvedUrl === '/login/' && isAuthenticated) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // Pass data to the page via props
  return { props: { ...data } };
}
