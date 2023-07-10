import { React, createContext } from 'react';

import { docsData, fetchPage, productsData } from 'lib/api';
import { githubFetch } from 'lib/githubFetch';
import MarketingMain from 'layouts/Main/MarketingMain';
import { ZestyView } from 'lib/ZestyView';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';
import Main from 'layouts/Main';

import { getIsAuthenticated } from 'utils';
import axios from 'axios';

//
export const GlobalContext = createContext();
export default function Zesty(props) {
  const isLoggedIn = useIsLoggedIn();
  // for homepage navigation
  // const isDarkMode = theme.palette.mode === 'dark';
  let bgcolor = 'transparent';
  // if (props?.meta?.web?.uri === '/') {
  //   bgcolor = isDarkMode ? 'transparent' : theme.palette.common.white;
  // }

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

const cache = {};

// Function to fetch the page data
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

const cacheProducts = {};
// Function to fetch the products data
async function fetchProductsData({ isProd = false }) {
  const cacheKey = 'productsData';

  // Check if the data is already cached
  if (cacheProducts[cacheKey]) {
    return cacheProducts[cacheKey];
  }

  // Fetch the products data
  const data = await productsData();

  // Cache the data
  // run only if PRODUCTION = true
  if (isProd) {
    cacheProducts[cacheKey] = data;
  }

  return data;
}

const cacheDocs = {};
// Function to fetch the products data
async function fetchDocsData({ isProd = false }) {
  const cacheKey = 'docsData';

  // Check if the data is already cached
  if (cacheDocs[cacheKey]) {
    return cacheDocs[cacheKey];
  }

  // Fetch the new docs data
  const data = await docsData(isProd);

  // Cache the data
  // run only if PRODUCTION = true
  if (isProd) {
    cacheDocs[cacheKey] = data;
  }

  return data;
}

// This gets called on every request
export async function getServerSideProps({ req, res, resolvedUrl }) {
  const isAuthenticated = getIsAuthenticated(res);
  const isProd = process.env.PRODUCTION === 'true' ? true : false;
  // does not display with npm run dev

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
  let data = await fetchPageData(resolvedUrl);
  // attempt to get page data relative to zesty

  let products = [];
  let productGlossary = [];
  if (req.url.includes('/product')) {
    products = await fetchProductsData({ isProd });
    productGlossary = await getGlossary();
  }
  let docs = [];
  if (req.url.includes('/docs')) {
    docs = await fetchDocsData({ isProd });
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
      apiKey: process.env.ALGOLIA_APIKEY,
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

  if (req.url === '/login/' && isAuthenticated) {
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

const getGlossary = async () => {
  const URL = `https://www.zesty.io/-/gql/product_glossary.json`;
  try {
    return await axios
      .get(URL)
      .then((e) => e.data)
      .catch((err) => err);
  } catch (error) {
    return error;
  }
};
