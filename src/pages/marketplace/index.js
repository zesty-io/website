/**
 * Helpers Imports
 */
import { getMarketplaceData } from './[...slug]';
import { fetchPage } from 'lib/api';

/**
 * React Imports
 */
import { setCookies } from 'cookies-next';
import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

/**
 * Components Imports
 */

import MarketplaceContainer from 'components/marketplace/MarketplaceContainer';
import MarketplaceEntities from 'components/marketplace/MarketplaceEntities';
import MarketplaceProvider from 'components/marketplace/MarketplaceContext';
import Main from '../../layouts/Main';
import Hero from 'components/marketplace/landing/Hero';

const Marketplace = ({
  marketEntities,
  marketEntityTypes,
  marketTags,
  env,
  ...props
}) => {
  const router = useRouter();
  const seoTitle = props.meta.web.seo_meta_title,
    seoDescription = props.meta.web.seo_meta_description;

  useEffect(() => {
    setCookies('PRODUCTION', props.zestyProductionMode);
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
          <Hero {...props} />
          <MarketplaceContainer
            marketEntities={marketEntities}
            marketEntityTypes={marketEntityTypes}
            marketTags={marketTags}
            {...props}
          >
            <MarketplaceEntities entities={marketEntities} />
          </MarketplaceContainer>
        </MarketplaceProvider>
      </Main>
    </>
  );
};

export async function getServerSideProps({ res, req }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=600, stale-while-revalidate=3600',
  );

  // set instance zuid cookie
  if (req.query?.instanceZUID) {
    setCookies('ZESTY_WORKING_INSTANCE', req.query.instanceZUID);
  }

  let extensionsURL = process.env.PRODUCTION
    ? 'https://extensions.zesty.io'
    : 'https://39ntbr6g-dev.webengine.zesty.io';

  const entities = await fetch(`${extensionsURL}/-/gql/extensions.json`);
  const entityTypes = await fetch(`${extensionsURL}/-/gql/entity_types.json`);
  const tags = await fetch(`${extensionsURL}/-/gql/tags.json`);
  const data = await getMarketplaceData(req.url);
  const navigationCustom = (await fetchPage('/')).navigationCustom;

  return {
    props: {
      marketEntities: await entities.json(),
      marketEntityTypes: await entityTypes.json(),
      marketTags: await tags.json(),
      ...data,
      navigationCustom: navigationCustom,
    },
  };
}

export default Marketplace;
