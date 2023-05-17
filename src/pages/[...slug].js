import { React, createContext } from 'react';

import { fetchPage, productsData } from 'lib/api';
import { githubFetch } from 'lib/githubFetch';
import MarketingMain from 'layouts/Main/MarketingMain';
import { ZestyView } from 'lib/ZestyView';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';
import Main from 'layouts/Main';

import { getIsAuthenticated } from 'utils';

export const GlobalContext = createContext();
export default function Slug(props) {
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

// This gets called on every request
// export async function getServerSideProps({ req, res, resolvedUrl }) {
//   const isAuthenticated = getIsAuthenticated(res);
//   // does not display with npm run dev
//   res.setHeader('Cache-Control', 'public, maxage=60, must-revalidate');
//   res.setHeader('Surrogate-Control', 'max-age=60');

//   // attempt to get page data relative to zesty

//   let data = await fetchPage(resolvedUrl);
//   const products = await productsData();

//   const sso = {
//     githubUrl: process.env.GITHUB_SSO_URL,
//     googleUrl: process.env.GOOGLE_SSO_URL,
//     msUrl: process.env.MS_SSO_URL,
//   };

//   data = {
//     ...data,
//     zesty: {
//       isAuthenticated,
//       sso,
//       templateUrl: process.env.TEMPLATE_URL,
//       products,
//     },
//     algolia: {
//       apiKey: process.env.ALGOLIA_APIKEY,
//       appId: process.env.ALGOLIA_APPID,
//       index: process.env.ALGOLIA_INDEX,
//     },
//   };

//   // This section holds data settings for fetching Github Data
//   if (req.url.includes('/roadmap/') && process.env.GITHUB_AUTH) {
//     data.github_data = await githubFetch({
//       organization: `"Zesty-io"`,
//       projectNumber: data.project_number,
//       columns: data.max_column,
//       cards: data.max_card,
//       discussions: data.max_discussion,
//     });
//   }

//   // generate a status 404 page
//   if (data.error) return { notFound: true };

//   if (req.url === '/login/' && isAuthenticated) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   // Pass data to the page via props
//   return { props: { ...data } };
// }

// In-memory cache object
let cache = {};

export async function getServerSideProps({ req, res, resolvedUrl }) {
  const isAuthenticated = getIsAuthenticated(res);

  // Check if the data is already cached
  const cacheKey = `pageData:${resolvedUrl}`;
  const cachedData = fetchCachedData(cacheKey);

  if (cachedData) {
    // If the data is cached, return it directly
    // console.log('CACHED OK SLUGGGGGGGGGGGGGGGGGGGGGGGGG', 444);
    return {
      props: {
        ...cachedData,
      },
    };
  }

  // Cache expiration time in seconds
  const cacheExpiration = 60;

  // Set caching headers
  res.setHeader(
    'Cache-Control',
    `public, max-age=${cacheExpiration}, must-revalidate`,
  );
  res.setHeader('Surrogate-Control', `max-age=${cacheExpiration}`);

  // Fetch page data
  let data = await fetchPage(resolvedUrl);
  const products = await productsData();

  // console.log('CACHED NOT NOT OK SLUGGGGGGGGGGGGGGGGGGGGGGGGG', 444);
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

  // Cache the data for future requests
  cacheData(cacheKey, data, cacheExpiration);

  // Pass data to the page via props
  return { props: { ...data } };
}

function fetchCachedData(cacheKey) {
  const cachedData = cache[cacheKey];
  if (cachedData && Date.now() < cachedData.expiresAt) {
    return cachedData.data;
  }
  return null;
}

function cacheData(cacheKey, data, cacheExpiration) {
  const expiresAt = Date.now() + cacheExpiration * 1000;
  cache[cacheKey] = {
    data,
    expiresAt,
  };
}
