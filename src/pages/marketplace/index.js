/**
 * Helpers Imports
 */
import { getMarketplaceData } from './[...slug]';
import { fetchPage } from 'lib/api';

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
import Main from '../../layouts/Main';
import Hero from 'components/marketplace/landing/Hero';
import { getIsAuthenticated } from 'utils';

const Marketplace = ({ marketEntities, marketEntityTypes, ...props }) => {
  const seoTitle = props.meta.web.seo_meta_title,
    seoDescription = props.meta.web.seo_meta_description;

  useEffect(() => {
    setCookie('PRODUCTION', props.zestyProductionMode);
  }, [props]);

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
      </Head>
      <Main customRouting={props.navigationCustom}>
        <MarketplaceProvider inititalEntities={marketEntities}>
          <Hero
            {...props}
            marketEntities={marketEntities}
            marketTags={props.featured_tags.data}
            marketEntityTypes={marketEntityTypes}
          />
          <MarketplaceContainer {...props} />
        </MarketplaceProvider>
      </Main>
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

  const entities = await fetch(`${extensionsURL}/-/gql/extensions.json`);
  const entityTypes = await fetch(`${extensionsURL}/-/gql/entity_types.json`);
  const data = await getMarketplaceData(req.url);
  const navigationCustom = (await fetchPage('/')).navigationCustom;

  return {
    props: {
      marketEntities: await entities.json(),
      marketEntityTypes: await entityTypes.json(),
      ...data,
      navigationCustom: navigationCustom,
      zesty: {
        isAuthenticated,
      },
    },
  };
}

export default Marketplace;
