import { Container, Stack } from '@mui/material';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import { fetchPage, productsData } from 'lib/api';
import Head from 'next/head';
import { MainWrapper } from 'pages/marketplace';
import React from 'react';
import { getIsAuthenticated } from 'utils';
import { ProductLandingPage } from 'views/zesty';

const AuthSuccess = ({ nav, ...props }) => {
  return (
    <>
      <Head>
        <title>You are now authenticated with the Zesty CLI</title>
      </Head>
      <MainWrapper nav={nav}>
        <Stack>
          <Container
            sx={() => ({
              maxWidth: '1440px !important',
              paddingBottom: '0 !important',
            })}
          >
            <ProductLandingPage {...props} isAuthSuccess={true} />
          </Container>
        </Stack>
      </MainWrapper>
    </>
  );
};

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

export async function getServerSideProps({ res, req }) {
  const isAuthenticated = getIsAuthenticated(res);
  const isProd = process.env.PRODUCTION === 'true' ? true : false;

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=600, stale-while-revalidate=3600',
  );

  // set instance zuid cookie
  if (req.query?.instanceZUID) {
    setCookie('ZESTY_WORKING_INSTANCE', req.query.instanceZUID);
  }

  const navigationCustom = await fetchPage('/');

  let products = [];
  let productGlossary = [];
  if (req.url.includes('/product')) {
    products = await fetchProductsData({ isProd });
    productGlossary = await getGlossary();
  }

  return {
    props: {
      nav: navigationCustom,
      zesty: {
        isAuthenticated,
        templateUrl: process.env.TEMPLATE_URL,
      },
      content: {
        zesty: {
          products,
          productGlossary,
        },

        algolia: {
          apiKey: process.env.ALGOLIA_APIKEY,
          appId: process.env.ALGOLIA_APPID,
          index: process.env.ALGOLIA_INDEX,
        },
      },
    },
  };
}

export default AuthSuccess;
