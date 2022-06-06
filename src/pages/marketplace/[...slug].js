import MarketplaceContainer from 'components/marketplace/MarketplaceContainer';
import MarketplaceProvider from 'components/marketplace/MarketplaceContext';
import Main from 'layouts/Main/Main';
import { fetchPage } from 'lib/api';
import EntityType from 'views/marketplace/EntityType';
import Extension from 'views/marketplace/Extension';
import Tag from 'views/marketplace/Tag';
import CustomContainer from 'components/Container';
import AppBar from 'components/console/AppBar';
import { useRouter } from 'next/router';
import Head from 'next/head';

const ALTNAME = {
  TAG: 'Tag',
  ENTITY_TYPE: 'EntityType',
  EXTENSION: 'Extension',
};

const renderMarketplaceViewByAltName = (altName) => {
  if (altName === ALTNAME.TAG) {
    return <Tag />;
  } else if (altName === ALTNAME.ENTITY_TYPE) {
    return <EntityType />;
  }
};

const slug = ({ marketEntityTypes, marketTags, ...props }) => {
  const router = useRouter();
  const seoTitle = props.meta.web.seo_meta_title,
    seoDescription = props.meta.web.seo_meta_description;

  if (props.marketplaceAltName === ALTNAME.EXTENSION) {
    return (
      <>
        <Head>
          <title>{seoTitle}</title>
          <meta property="og:title" content={seoTitle} />
          <meta property="og:description" content={seoDescription} />
        </Head>
        <Main customRouting={props.navigationCustom}>
          <AppBar url={router.asPath} />
          <CustomContainer>
            <Extension {...props} />
          </CustomContainer>
        </Main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
      </Head>
      <Main customRouting={props.navigationCustom}>
        <AppBar url={router.asPath} />

        <MarketplaceProvider
          inititalEntities={props.categoryEntities || props.typesEntities}
        >
          <MarketplaceContainer
            marketEntities={props.categoryEntities || props.typesEntities}
            marketEntityTypes={marketEntityTypes}
            marketTags={marketTags}
            {...props}
          >
            {renderMarketplaceViewByAltName(
              props.marketplaceAltName,
              props.categoryEntities || props.typesEntities,
            )}
          </MarketplaceContainer>
        </MarketplaceProvider>
      </Main>
    </>
  );
};

export const getMarketplaceData = async (ctx) => {
  
  let extensionsURL = process.env.PRODUCTION
    ? 'https://extensions.zesty.io'
    : 'https://39ntbr6g-dev.webengine.zesty.io';
  
  let data = await fetchPage(ctx.resolvedUrl, true, extensionsURL);

  if (data.meta.model_alternate_name === ALTNAME.TAG) {
    const newData = await fetch(
      `https://39ntbr6g-dev.webengine.zesty.io/data/entites-by-category.json?category=${data.meta.zuid}`,
    );

    data.categoryEntities = await newData.json();
    data.marketplaceAltName = ALTNAME.TAG;
  } else if (data.meta.model_alternate_name === ALTNAME.ENTITY_TYPE) {
    const newData = await fetch(
      `https://39ntbr6g-dev.webengine.zesty.io/data/entities-by-type.json?type=${data.meta.zuid}`,
    );

    data.typesEntities = await newData.json();
    data.marketplaceAltName = ALTNAME.ENTITY_TYPE;
  } else {
    data.marketplaceAltName = ALTNAME.EXTENSION;
  }

  return data;
};

export async function getServerSideProps(ctx) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const data = await getMarketplaceData(ctx);
  let extensionsURL = process.env.PRODUCTION
    ? 'https://extensions.zesty.io'
    : 'https://39ntbr6g-dev.webengine.zesty.io';

  const entityTypes = await fetch(`${extensionsURL}/-/gql/entity_types.json`);
  const tags = await fetch(`${extensionsURL}/-/gql/tags.json`);
  const navigationCustom = (await fetchPage('/')).navigationCustom;

  // generate a status 404 page
  if (data?.error) return { notFound: true };

  // Pass data to the page via props
  return {
    props: {
      ...data,
      marketEntityTypes: await entityTypes.json(),
      marketTags: await tags.json(),
      navigationCustom: navigationCustom,
    },
  };
}

export default slug;
