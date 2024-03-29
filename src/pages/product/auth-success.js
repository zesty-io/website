import { Container, Stack } from '@mui/material';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import { fetchGqlData, fetchPage } from 'lib/api';
import Head from 'next/head';
import React from 'react';
import { getIsAuthenticated } from 'utils';

import dynamic from 'next/dynamic';

const ProductLandingPage = dynamic(() =>
  import('views/zesty').then((e) => e.ProductLandingPage),
);
const MainWrapper = dynamic(() =>
  import('pages/marketplace').then((e) => e.MainWrapper),
);
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
    products = await fetchGqlData(isProd, 'product');
  }

  if (req.url.includes('/product')) {
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
