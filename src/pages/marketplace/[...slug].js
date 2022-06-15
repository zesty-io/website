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
import RegisterPage from 'components/marketplace/register';
import InstalledPage from 'components/marketplace/installed';
import { setCookies } from 'cookies-next';
import { useTheme } from '@emotion/react';
import { TitleBar } from 'components/marketplace/TitleBar';

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
  const theme = useTheme();
  const router = useRouter();
  const seoTitle = props?.meta?.web?.seo_meta_title,
    seoDescription = props?.meta?.web?.seo_meta_description;

  if (window.location.pathname === '/marketplace/register/') {
    return (
      <>
        <Head>
          <title>{'Register an App'}</title>
          <meta property="og:title" content={seoTitle} />
          <meta property="og:description" content={seoDescription} />
        </Head>
        <Main customRouting={props.navigationCustom}>
          <AppBar url={router.asPath} />

          <CustomContainer>
            <RegisterPage />
          </CustomContainer>
        </Main>
      </>
    );
  }

  if (window.location.pathname === '/marketplace/installed/') {
    return (
      <>
        <Head>
          <title>{'Installed Apps'}</title>
          <meta property="og:title" content={seoTitle} />
          <meta property="og:description" content={seoDescription} />
        </Head>
        <Main customRouting={props.navigationCustom}>
          <AppBar url={router.asPath} />
          <CustomContainer>
            <InstalledPage />
          </CustomContainer>
        </Main>
      </>
    );
  }

  console.log(props, 123444);
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

export const getMarketplaceData = async (url) => {
  let extensionsURL =
    process.env.PRODUCTION === 'true'
      ? 'https://extensions.zesty.io'
      : 'https://39ntbr6g-dev.webengine.zesty.io';

  let data = await fetchPage(url, true, extensionsURL);

  if (data?.meta?.model_alternate_name === ALTNAME.TAG) {
    const newData = await fetch(
      `${extensionsURL}/data/entites-by-category.json?category=${data.meta.zuid}`,
    );

    data.categoryEntities = await newData.json();
    data.marketplaceAltName = ALTNAME.TAG;
  } else if (data?.meta?.model_alternate_name === ALTNAME.ENTITY_TYPE) {
    const newData = await fetch(
      `${extensionsURL}/data/entities-by-type.json?type=${data.meta.zuid}`,
    );

    data.typesEntities = await newData.json();
    data.marketplaceAltName = ALTNAME.ENTITY_TYPE;
  } else {
    data.marketplaceAltName = ALTNAME.EXTENSION;
  }

  return data;
};

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=600, stale-while-revalidate=3600',
  );

  // set instance zuid cookie
  if (req.query?.instanceZUID) {
    setCookies('ZESTY_WORKING_INSTANCE', req.query.instanceZUID);
  }

  const data = await getMarketplaceData(req.url);
  let extensionsURL = process.env.PRODUCTION
    ? 'https://extensions.zesty.io'
    : 'https://39ntbr6g-dev.webengine.zesty.io';

  const entityTypes = await fetch(`${extensionsURL}/-/gql/entity_types.json`);
  const tags = await fetch(`${extensionsURL}/-/gql/tags.json`);
  const navigationCustom = (await fetchPage('/')).navigationCustom;

  // partial fix for register page not rendering
  const isRegisterPage = req.url === '/marketplace/register/';
  const isInstalledPage = req.url === '/marketplace/installed/';
  const extendedPages = isRegisterPage || isInstalledPage;
  // generate a status 404 page
  if (data?.error && !extendedPages) return { notFound: true };

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
