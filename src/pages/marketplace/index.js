import { getMarketplaceData } from './[...slug]';
import MarketplaceContainer from 'components/marketplace/MarketplaceContainer';
import MarketplaceEntities from 'components/marketplace/MarketplaceEntities';
import MarketplaceProvider from 'components/marketplace/MarketplaceContext';
import Main from '../../layouts/Main';
import AppBar from 'components/console/AppBar';
import { useRouter } from 'next/router';
import { fetchPage } from 'lib/api';
import Head from 'next/head';

const Marketplace = ({
  marketEntities,
  marketEntityTypes,
  marketTags,
  ...props
}) => {
  const router = useRouter();
  const seoTitle = props.meta.web.seo_meta_title,
    seoDescription = props.meta.web.seo_meta_description;
  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
      </Head>
      <Main customRouting={props.navigationCustom}>
        <AppBar url={router.asPath} />
        <MarketplaceProvider inititalEntities={marketEntities}>
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

export async function getServerSideProps(ctx) {
  let extensionsURL = process.env.PRODUCTION
    ? 'https://extensions.zesty.io'
    : 'https://39ntbr6g-dev.webengine.zesty.io';

  const entities = await fetch(`${extensionsURL}/-/gql/extensions.json`);
  const entityTypes = await fetch(`${extensionsURL}/-/gql/entity_types.json`);
  const tags = await fetch(`${extensionsURL}/-/gql/tags.json`);
  const data = await getMarketplaceData(ctx);
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
