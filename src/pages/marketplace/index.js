/**
 * Helpers Imports
 */
import { getMarketplaceData } from './[...slug]';
import { fetchPage, fetcher } from 'lib/api';

/**
 * React Imports
 */
import { setCookie } from 'cookies-next';
import React, { useEffect } from 'react';
import Head from 'next/head';

/**
 * Components Imports
 */

// import MarketplaceContainer from 'components/marketplace/MarketplaceContainer';
import MarketplaceContainer from 'components/marketplace/landing/MarketplaceContainer';
import MarketplaceProvider from 'components/marketplace/MarketplaceContext';
import MarketingMain from '../../layouts/Main/MarketingMain';
import Hero from 'components/marketplace/landing/Hero';
import { getIsAuthenticated } from 'utils';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';
import Main from '../../layouts/Main/Main';

export const MainWrapper = ({ nav, children }) => {
  const isLoggedIn = useIsLoggedIn();
  return isLoggedIn ? (
    <Main customRouting={nav.customRouting}>{children}</Main>
  ) : (
    <MarketingMain
      customRouting={nav.navigationCustom}
      flyoutNavigation={nav.flyoutNavigation}
    >
      {children}
    </MarketingMain>
  );
};

const Marketplace = ({ marketEntities, marketEntityTypes, nav, ...props }) => {
  const seoTitle = props?.meta?.web?.seo_meta_title,
    seoDescription = props?.meta?.web?.seo_meta_description;

  useEffect(() => {
    setCookie('PRODUCTION', props?.zestyProductionMode);
  }, [props]);

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
      </Head>
      <MainWrapper nav={nav}>
        <MarketplaceProvider inititalEntities={marketEntities}>
          <Hero
            {...props}
            marketEntities={marketEntities}
            marketTags={props.featured_tags.data}
            marketEntityTypes={marketEntityTypes}
          />
          <MarketplaceContainer {...props} />
        </MarketplaceProvider>
      </MainWrapper>
    </>
  );
};

export async function getServerSideProps({ res, req }) {
  const isAuthenticated = getIsAuthenticated(res);

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=600, stale-while-revalidate=3600',
  );

  // set instance zuid cookie
  if (req.query?.instanceZUID) {
    setCookie('ZESTY_WORKING_INSTANCE', req.query.instanceZUID);
  }

  let extensionsURL = process.PRODUCTION
    ? 'https://extensions.zesty.io'
    : 'https://39ntbr6g-dev.webengine.zesty.io';

  const entities = await fetcher({
    url: `${extensionsURL}/-/gql/extensions.json`,
    fallback: [],
  });
  const entityTypes = await fetcher({
    url: `${extensionsURL}/-/gql/entity_types.json`,
    fallback: [],
  });
  const data = await getMarketplaceData(req.url);
  const navigationCustom = await fetchPage('/');

  return {
    props: {
      marketEntities: entities,
      marketEntityTypes: entityTypes,
      ...data,
      nav: navigationCustom,
      zesty: {
        isAuthenticated,
        templateUrl: process.env.TEMPLATE_URL,
      },
    },
  };
}

export default Marketplace;
